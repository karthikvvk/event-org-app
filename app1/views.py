from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Loader, bookings
from .serializers import LoaderSerializer, bookingSerializer
from datetime import date, datetime
from django.shortcuts import HttpResponseRedirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


class LoaderListView(APIView):
    def get(self, request):
        queryset = Loader.objects.all()
        serializer = LoaderSerializer(queryset, many=True)
        return Response(serializer.data)

class bookingSerializerview(APIView):
    def get(self, request):
        queryset = Loader.objects.all()
        serializer = bookingSerializer(queryset, many=True)
        return Response(serializer.data)
    
def ins(request):

    events = [
  { "id": '1', "name": 'Tech Conference', "category": 'Technology', "date": '2024-08-20', "description": 'A conference about the latest in tech.', "img_src": "event.jpg", "location": "San Francisco, CA" },
  { "id": '2', "name": 'Art Exhibition', "category": 'Art', "date": '2024-08-22', "description": 'Exhibition of modern art.', "img_src": "event.jpg", "location": "New York, NY" },
  { "id": '3', "name": 'Business Summit', "category": 'Business', "date": '2024-08-23', "description": 'A summit on business trends and strategies.', "img_src": "event.jpg", "location": "Chicago, IL" },
  { "id": '4', "name": 'Music Festival', "category": 'Music', "date": '2024-08-24', "description": 'Festival featuring live performances from various artists.', "img_src": "event.jpg", "location": "Austin, TX" },
  { "id": '5', "name": 'Health Fair', "category": 'Health', "date": '2024-08-25', "description": 'A fair focused on health and wellness.', "img_src": "event.jpg", "location": "Miami, FL" },
  { "id": '6', "name": 'Entertainment Expo', "category": 'Entertainment', "date": '2024-08-26', "description": 'Expo showcasing the latest in entertainment.', "img_src": "event.jpg", "location": "Los Angeles, CA" },
  { "id": '7', "name": 'Technology Workshop', "category": 'Technology', "date": '2024-08-27', "description": 'Hands-on workshop about emerging tech.', "img_src": "event.jpg", "location": "Seattle, WA" },
  { "id": '8', "name": 'Art Workshop', "category": 'Art', "date": '2024-08-28', "description": 'Workshop focusing on art techniques and skills.', "img_src": "event.jpg", "location": "San Diego, CA" },
  { "id": '9', "name": 'Startup Bootcamp', "category": 'Business', "date": '2024-08-29', "description": 'Bootcamp for aspiring startup founders.', "img_src": "event.jpg", "location": "San Jose, CA" },
  { "id": '10', "name": 'Live Music Performance', "category": 'Music', "date": '2024-08-30', "description": 'Live performance by renowned musicians.', "img_src": "event.jpg", "location": "Las Vegas, NV" },
  { "id": '11', "name": 'Fitness Challenge', "category": 'Health', "date": '2024-08-31', "description": 'Challenge event for fitness enthusiasts.', "img_src": "event.jpg", "location": "Houston, TX" },
  { "id": '12', "name": 'Film Festival', "category": 'Entertainment', "date": '2024-09-01', "description": 'Festival showcasing indie and mainstream films.', "img_src": "event.jpg", "location": "Austin, TX" },
  { "id": '13', "name": 'Tech Meetup', "category": 'Technology', "date": '2024-09-02', "description": 'Meetup for tech enthusiasts and professionals.', "img_src": "event.jpg", "location": "San Francisco, CA" },
  { "id": '14', "name": 'Art Fair', "category": 'Art', "date": '2024-09-03', "description": 'Fair featuring various art forms and artists.', "img_src": "event.jpg", "location": "New York, NY" },
  { "id": '15', "name": 'Corporate Seminar', "category": 'Business', "date": '2024-09-04', "description": 'Seminar on corporate strategies and innovations.', "img_src": "event.jpg", "location": "Chicago, IL" },
  { "id": '16', "name": 'Music Workshop', "category": 'Music', "date": '2024-09-05', "description": 'Workshop for learning new music techniques.', "img_src": "event.jpg", "location": "Las Vegas, NV" },
  { "id": '17', "name": 'Health Workshop', "category": 'Health', "date": '2024-09-06', "description": 'Workshop on health and wellness practices.', "img_src": "event.jpg", "location": "Miami, FL" },
  { "id": '18', "name": 'Entertainment Night', "category": 'Entertainment', "date": '2024-09-07', "description": 'Night of entertainment with various acts.', "img_src": "event.jpg", "location": "Los Angeles, CA" },
  { "id": '19', "name": 'Innovation Conference', "category": 'Technology', "date": '2024-09-08', "description": 'Conference on technological innovations.', "img_src": "event.jpg", "location": "Seattle, WA" },
  { "id": '20', "name": 'Sculpture Exhibition', "category": 'Art', "date": '2024-09-09', "description": 'Exhibition of contemporary sculptures.', "img_src": "event.jpg", "location": "San Diego, CA" },
  { "id": '21', "name": 'Leadership Workshop', "category": 'Business', "date": '2024-09-10', "description": 'Workshop on leadership skills and strategies.', "img_src": "event.jpg", "location": "San Jose, CA" },
  { "id": '22', "name": 'Jazz Festival', "category": 'Music', "date": '2024-09-11', "description": 'Festival featuring jazz performances.', "img_src": "event.jpg", "location": "Austin, TX" },
  { "id": '23', "name": 'Nutrition Fair', "category": 'Health', "date": '2024-09-12', "description": 'Fair focused on nutrition and healthy eating.', "img_src": "event.jpg", "location": "Houston, TX" },
  { "id": '24', "name": 'Comedy Show', "category": 'Entertainment', "date": '2024-09-13', "description": 'Live comedy show with various comedians.', "img_src": "event.jpg", "location": "Las Vegas, NV" },
  { "id": '25', "name": 'Tech Expo', "category": 'Technology', "date": '2024-09-14', "description": 'Expo showcasing the latest tech gadgets and innovations.', "img_src": "event.jpg", "location": "San Francisco, CA" },
  { "id": '26', "name": 'Painting Workshop', "category": 'Art', "date": '2024-09-15', "description": 'Workshop for painting enthusiasts.', "img_src": "event.jpg", "location": "New York, NY" },
  { "id": '27', "name": 'Business Networking Event', "category": 'Business', "date": '2024-09-16', "description": 'Networking event for business professionals.', "img_src": "event.jpg", "location": "Chicago, IL" },
  { "id": '28', "name": 'Rock Concert', "category": 'Music', "date": '2024-09-17', "description": 'Concert featuring popular rock bands.', "img_src": "event.jpg", "location": "Austin, TX" },
  { "id": '29', "name": 'Yoga Retreat', "category": 'Health', "date": '2024-09-18', "description": 'Retreat focusing on yoga and relaxation.', "img_src": "event.jpg", "location": "Miami, FL" },
  { "id": '30', "name": 'Theater Production', "category": 'Entertainment', "date": '2024-09-19', "description": 'Live theater production with multiple acts.', "img_src": "event.jpg", "location": "Los Angeles, CA" },
  { "id": '30', "name": 'general', "category": 'all', "date": '2024-09-19', "description": 'general', "img_src": "event.jpg", "location": "general" },
]





    for event in events:
        Loader.objects.create(
            name=event["name"],
            date=datetime.strptime(event["date"],'%Y-%m-%d').date(),
            location=event["location"],
            description=event["description"],
            img_src=event["img_src"],
            category=event["category"],
        )

        
    return HttpResponseRedirect('http://localhost:5173/', status=302)

# views.py


@csrf_exempt  # Only for development; use CSRF protection in production
def addevent(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # Process the data as needed
        for event in data:
            Loader.objects.create(
            name=event["name"],
            date=datetime.strptime(event["date"],'%Y-%m-%d').date(),
            location=event["location"],
            description=event["description"],
            img_src=event["img_src"],
            category=event["category"]
        )
  # Log the data for testing
        return JsonResponse({'status': 'success', 'data': data})
    return JsonResponse({'status': 'failed'}, status=400)

@csrf_exempt  # Only for development; use CSRF protection in production
def booking(request):
    if request.method == 'POST':
        event = json.loads(request.body)
        # Process the data as needed
        print(event)
        bookings.objects.create(
        name=event["name"],
        date=date.today(),
        email=event["email"],
        location=event["location"],
        phone=event["phone"],
        comment=event["comments"]
        )
  # Log the data for testing
        return JsonResponse({'status': 'success', 'data': event})
    return JsonResponse({'status': 'failed'}, status=400)
