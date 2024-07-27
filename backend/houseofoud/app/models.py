from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import JSONField


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
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=50)
    route = models.CharField(max_length=100)
    url = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Size(models.Model):
    product = models.ForeignKey(
        Product, related_name='sizes', on_delete=models.CASCADE)
    size = models.CharField(max_length=50)
    in_stock = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.product.name} - {self.size}"


class Price(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='prices')
    size = models.CharField(max_length=255)
    stripe_price_id = models.CharField(max_length=255)
    unit_amount = models.IntegerField()
    currency = models.CharField(max_length=10, default='gbp')


class Orders(models.Model):
    customer_email = models.CharField(max_length=255)
    stripe_checkout_id = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    cart_info = models.CharField()
    amount_total = models.CharField(max_length=10)
    order_id = models.IntegerField(default=None)

    def __str__(self):
        return f"Order {self.order_id} for {self.customer_email}"
