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

stripe.api_key = settings.STRIPE_API_KEY


def append_cart_to_line_items(cart):
    line_items = []
    for item in cart:
        try:
            product = Product.objects.get(id=item['id'])

            price = Price.objects.get(product=product, size=item['size'])

            line_items.append({
                'price': price.stripe_price_id,  # use the Stripe price ID from your database
                'quantity': item['quantity'],
            })
        except Product.DoesNotExist:
            print(f"Product with id {item['id']} does not exist.")
        except Price.DoesNotExist:
            print(f"Price for product {item['id']} and size {
                  item['size']} does not exist.")

    return line_items


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def create_checkout_session(request):
    cart = request.data.get('cartItems', [])
    YOUR_DOMAIN = "http://localhost:5173"

    try:
        print(cart)
        checkout_session = stripe.checkout.Session.create(
            line_items=append_cart_to_line_items(cart),
            payment_method_types=['card', 'klarna'],
            mode='payment',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/cancel',
        )
        print("Stripe URL", checkout_session.url)
        return JsonResponse({'url': checkout_session.url})

    except Exception as e:
        return JsonResponse({'error': str(e)})
