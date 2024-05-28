from rest_framework import serializers
from app.models import *

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = '__all__'