from django.urls import path
from . import views

urlpatterns = [
    path('reviews/', views.getReviews, name='get_reviews'),
    path('addreviews/', views.addReview, name='add_review'),
    path('users/', views.getUser, name='get_user'),
    path('addusers/', views.addUser, name='add_user'),
    path('products/', views.getProducts, name='get-products')
]
