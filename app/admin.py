from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Review)


class UserInfo(admin.ModelAdmin):
    list_display = ("username", "email")


class ProductInfo(admin.ModelAdmin):
    list_display = ("product", "size", "unit_amount")


class InventoryInfo(admin.ModelAdmin):
    list_display = ("product", "size", "in_stock")


admin.site.register(User, UserInfo)

admin.site.register(Product)

admin.site.register(Price, ProductInfo)

admin.site.register(Size, InventoryInfo)
