from django.db import models

# Create your models here.


class User(models.Model):
    firstname = models.CharField(max_length=60, null=False)
    lastname = models.CharField(max_length=60, null=False)
    username = models.CharField(max_length=30)
    email = models.CharField(max_length=60)
    password = models.CharField(max_length=60)

    def __str__(self):
        return f"{self.username}"


class Review(models.Model):
    stars = models.IntegerField()
    subject = models.CharField(max_length=30)
    content = models.CharField(max_length=100)
    name = models.CharField(max_length=30)

    def __str__(self):
        return f"By {self.name} {self.stars} stars."


class Product(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    price = models.IntegerField(default=0)
    url = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    size = models.CharField(max_length=50)

    def __str__(self):
        return self.name
