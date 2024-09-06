from rest_framework import serializers
from .models import Loader, bookings

class LoaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loader
        fields = ('id', 'name', 'date', 'location', 'description', 'img_src')

class bookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = bookings
        fields = ('id', 'name', 'date',"email", "phone", 'location', 'comment')
