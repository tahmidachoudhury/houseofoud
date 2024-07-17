from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
import stripe
from . models import *
from api.serializer import *
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes
import json
from datetime import datetime

# Create your views here.


# test-----------------------------------------------------------------------
stripe.api_key = settings.STRIPE_TEST_KEY


def append_cart_to_line_items(cart):
    line_items = []
    for item in cart:
        line_items.append({
            'price': settings.TEST_ID,
            'quantity': item['quantity'],
        })
    return line_items

# production---------------------------------------------------------------------------

# stripe.api_key = settings.STRIPE_API_KEY


# def append_cart_to_line_items(cart):
#     line_items = []
#     for item in cart:
#         try:
#             product = Product.objects.get(id=item['id'])

#             price = Price.objects.get(product=product, size=item['size'])

#             line_items.append({
#                 'price': price.stripe_price_id,
#                 'quantity': item['quantity'],
#             })
#         except Product.DoesNotExist:
#             print(f"Product with id {item['id']} does not exist.")
#         except Price.DoesNotExist:
#             print(f"Price for product {item['id']} and size {
#                   item['size']} does not exist.")

#     return line_items


def cart_success_data(cart):
    # [{'price': 'price_1PRFH600JqWikrEqZZAiRgtZ', 'quantity': 1}, {'price': 'price_1PRFH600JqWikrEqZZAiRgtZ', 'quantity': 1}]
    items = []
    total = 0
    for item in cart:
        product_info = Price.objects.get(stripe_price_id=item['price'])
        product = Product.objects.get(id=product_info.product_id)
        total += product_info.unit_amount*item['quantity'] / 100
        item_string = (
            f"Product name: {product.name}, "
            f"Size: {product_info.size}, "
            f"Price: £{product_info.unit_amount / 100:.2f}, "
            f"Quantity: {item['quantity']} "
        )
        items.append(item_string)
    items.append(f"Total: £{total}")
    return "\n".join(items)


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def create_checkout_session(request):
    cart = request.data.get('cartItems', [])
    YOUR_DOMAIN = "http://localhost:5173"
    line_items = append_cart_to_line_items(cart)
    items = json.dumps(line_items)
    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=line_items,
            payment_method_types=['card'],
            metadata={
                "checkout_receipt": items,
            },
            mode='payment',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/cancel',
            shipping_address_collection={
                'allowed_countries': ['GB'],
            },
            billing_address_collection='required',
        )
        return JsonResponse({'url': checkout_session.url})

    except Exception as e:
        return JsonResponse({'error': str(e)})


@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']
    event = None

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, settings.STRIPE_WEBHOOK
        )
    except ValueError as e:
        # Invalid payload
        return HttpResponse(status=400)
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        return HttpResponse(status=400)

    if (
        event['type'] == 'checkout.session.completed'
        or event['type'] == 'checkout.session.async_payment_succeeded'
    ):
        session = event['data']['object']
        customer_email = session['customer_details']['email']
        address_details = session["customer_details"]["address"]
        metadata = session['metadata']['checkout_receipt']
        cart = json.loads(metadata)
        current_datetime = datetime.now()

        send_mail(
            subject="Here is your product",
            message=f"Thanks for your purchase. Here are the products that you ordered \n{
                cart_success_data(cart)}",
            recipient_list=[customer_email],
            from_email="test@test.com"
        )
        send_mail(
            subject=f"Order number {current_datetime}",
            message=f"Customer order\n{cart_success_data(cart)}\n\nCustomer address \nCity: {address_details['city']}\nCountry: {address_details['country']}\nAddress Line 1: {
                address_details['line1']}\nAddress Line 2: {address_details['line2']}\nPost Code: {address_details['postal_code']}\nCustomer Email: {customer_email}",
            recipient_list=["ikram30002@gmail.com"],
            from_email="test@test.com"
        )

    return HttpResponse(status=200)
