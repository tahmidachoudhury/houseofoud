from django.db import models

# Create your models here.

class User(models.Model):
  username = models.CharField(max_length=30)
  password = models.CharField(max_length=60)

class Review(models.Model):
  stars = models.IntegerField()
  subject = models.CharField(max_length=30)
  content = models.CharField(max_length=60)
  name = models.CharField(max_length=30)
  