from django.db import models

# Create your models here.

class User(models.Model):
  username = models.CharField(max_length=30)
  email = models.CharField(max_length=60)
  password = models.CharField(max_length=60)
    
  def __str__(self):
    return f"{self.username}"

class Review(models.Model):
  stars = models.IntegerField()
  subject = models.CharField(max_length=30)
  content = models.CharField(max_length=60)
  name = models.CharField(max_length=30)

  def __str__(self):
    return f"By {self.name} {self.stars} stars."
  