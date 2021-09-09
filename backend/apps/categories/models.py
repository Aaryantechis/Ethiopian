from django.db import models
from cloudinary.models import CloudinaryField

class Category(models.Model):
    class Meta(object):
        db_table = 'category'

    name = models.CharField(
        'Name', max_length=50, db_index=True, null=False, blank=False
    )
    image = CloudinaryField(
        'image' , blank=True
    )
    def __str__(self):
        return self.name