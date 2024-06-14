import stripe
from django.shortcuts import render
from . models import *
from api.serializer import *
from rest_framework.response import Response
from django.conf import settings
from django.http import JsonResponse
from rest_framework.views import APIView
from django.http import HttpResponseRedirect
from django.shortcuts import render
# Create your views here.

stripe.api_key = settings.STRIPE_SECRET_KEY


class CreateCheckoutSessionView(APIView):
    def post(self, request, *args, **kwargs):
        YOUR_DOMAIN = "http://localhost:5173"
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[

                    {
                        # Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                        'price': settings.PRODUCT_PRICE,
                        'quantity': 3,
                    },
                ],
                mode='payment',
                success_url=YOUR_DOMAIN + '/success',
                cancel_url=YOUR_DOMAIN + '/cancel',
            )

        except Exception as e:
            return JsonResponse({'error': str(e)})

        return HttpResponseRedirect(checkout_session.url)
