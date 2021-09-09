from django.db import models
from datetime import datetime
from cloudinary.models import CloudinaryField
from apps.categories.models import Category
# Create your models here.


class Place(models.Model):
    MY_CHOICES = (
        ('a', 'Private and Luxury'),
        ('b', 'Full-day Tours'),
        ('c', 'Day trips'),
    )
    class Meta(object):
        db_table = 'place'

    name = models.CharField(
        'Name', max_length=50, db_index=True, null=False, blank=False
    )
    description = models.CharField(
        'Description', max_length=500, db_index=True, null=False, blank=False
    )
    image = CloudinaryField(
        'Image', blank=False
    )
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE
    )
    place_type = models.CharField(
        'Place Type', max_length=50, null=False, blank=False, choices=MY_CHOICES
    )
    time_to_travel = models.CharField(
        'Time To Travel', max_length=50, null=False, blank=False
    )
    google_map_link = models.CharField(
        'Google Map Link', max_length=500, null=False, blank=False
    )
    created_at = models.DateTimeField(
        auto_now_add=True, blank=False
    )
    updated_at = models.DateTimeField(
        auto_now_add=True, blank=False
    )

    def __str__(self):
        return self.name
