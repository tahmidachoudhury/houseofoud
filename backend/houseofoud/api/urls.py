from django.urls import path
from . import views

urlpatterns = [
  path('reviews', views.getReviews),
  path('addreviews/', views.addReview),
  path('users', views.getUser),
  path('addusers/', views.addUser),
]