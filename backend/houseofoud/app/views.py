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


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
@ensure_csrf_cookie
def create_checkout_session(request):
    cart = request.data.get('cartItems', [])

    YOUR_DOMAIN = "http://localhost:5173"

    line_items = []
    for item in cart:
        product = Product.objects.get(id=item['id'])
        line_items.append({
            'price_data': {
                'currency': 'gbp',
                'unit_amount': product.price,
                'product_data': {
                    'name': product.name
                },
                'unit_amount': int(product.price * 100),
            },
            'quantity': item['quantity'],
        })
    try:
        checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=line_items,
            mode='payment',
            success_url=YOUR_DOMAIN + '/success',
            cancel_url=YOUR_DOMAIN + '/cancel',
        )

    except Exception as e:
        return JsonResponse({'error': str(e)})

    return HttpResponseRedirect(checkout_session.url)
