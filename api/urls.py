from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('reviews/', views.getReviews, name='get_reviews'),
    path('test/', views.test, name='test'),
    path('addreviews/', views.addReview, name='add_review'),
    path('users/', views.getUser, name='get_user'),
    path('addusers/', views.addUser, name='add_user'),
    path('products/', views.getProducts, name='get-products')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
