from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from app.models import *
from .serializer import *


@api_view(['GET'])
def getReviews(request):
    reviews = Review.objects.all()
    serializer = ReviewSerializer(reviews, many=True)
    return Response(serializer.data)

def test(request):
    data = {
        "reviews": [
            {"id": 1, "content": "Great product!"},
            {"id": 2, "content": "Not what I expected."},
        ]
    }
    return JsonResponse(data)


@api_view(['POST'])
def addReview(request):
    serializer = ReviewSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def addUser(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['GET'])
def getUser(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
