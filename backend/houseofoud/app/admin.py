from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Review)


class UserInfo(admin.ModelAdmin):
    list_display = ("username", "email")


class ProductInfo(admin.ModelAdmin):
    list_display = ("product", "size", "unit_amount")


admin.site.register(User, UserInfo)

admin.site.register(Product)

admin.site.register(Price, ProductInfo)
