from django.db import models

class Loader(models.Model):  # Renamed to PascalCase for Django convention
    name = models.CharField(max_length=255)
    date = models.DateField()  # Using DateField for date representation
    location = models.CharField(max_length=255)
    category = models.CharField(max_length=255, default='general')
    description = models.TextField()  # Using TextField for potentially longer descriptions
    img_src = models.CharField(max_length=255)  # Image source as a text field

    def __str__(self):
        return self.name


class bookings(models.Model):  # Renamed to PascalCase for Django convention
    name = models.CharField(max_length=255)
    date = models.DateField()  # Using DateField for date representation
    email = models.EmailField(default="general")
    phone = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    comment = models.CharField(max_length=255, default='-')

    def __str__(self):
        return self.name
