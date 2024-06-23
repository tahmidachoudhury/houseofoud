from django.views.decorators.csrf import ensure_csrf_cookie
import stripe
from . models import *
from api.serializer import *
from django.conf import settings
from django.http import JsonResponse
from rest_framework.views import APIView
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated

# Create your views here.

stripe.api_key = settings.STRIPE_SECRET_KEY

line_items = []


# def append_cart_to_line_items(cart):
#     for item in cart:
#         product = Product.objects.get(id=item['id'])
#         print(product.name)
#         line_items.append({
#             'price_data': {
#                 'currency': 'gbp',
#                 'unit_amount': product.price,
#                 'product_data': {
#                     'name': product.name
#                 },
#                 'unit_amount': int(product.price * 100),
#             },
#             'quantity': item['quantity'],
#         })
#     return line_items

def append_cart_to_line_items(cart):
    for item in cart:
        product = Product.objects.get(id=item['id'])
        print(product.name)
        line_items.append({
            # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            'price': settings.PRODUCT_PRICE,
            'quantity': 1,
        })
    return line_items


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def create_checkout_session(request):
    cart = request.data.get('cartItems', [])
    YOUR_DOMAIN = "http://localhost:5173"

    try:
        checkout_session = stripe.checkout.Session.create(
            line_items=append_cart_to_line_items(cart),
            payment_method_types=['card'],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/cancel',
        )
        print(cart)

    except Exception as e:
        return JsonResponse({'error': str(e)})

    return HttpResponseRedirect(checkout_session.url)
