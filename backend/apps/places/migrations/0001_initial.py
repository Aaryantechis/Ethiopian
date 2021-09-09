# Generated by Django 3.2.4 on 2021-09-09 19:31

import cloudinary.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=50, verbose_name='Name')),
                ('description', models.CharField(db_index=True, max_length=500, verbose_name='Description')),
                ('image', cloudinary.models.CloudinaryField(max_length=255, verbose_name='Image')),
                ('place_type', models.CharField(max_length=50, verbose_name='Place Type')),
                ('time_to_travel', models.CharField(max_length=50, verbose_name='Time To Travel')),
                ('google_map_link', models.CharField(max_length=500, verbose_name='Google Map Link')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='categories.category')),
            ],
            options={
                'db_table': 'place',
            },
        ),
    ]
