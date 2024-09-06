from .models import Loader
from datetime import datetime

events = [
    { "name": "Tech Conference 2024", "date": "January 20, 2024", "location": "San Francisco, CA", "description": "A leading tech conference with industry leaders.", "img_src": "img" },
    { "name": "Music Festival", "date": "February 10, 2024", "location": "New York, NY", "description": "Join us for a weekend of live music and fun.", "img_src": "img" },
    { "name": "Food Expo", "date": "March 15, 2024", "location": "Chicago, IL", "description": "Explore the latest trends in food and culinary arts.", "img_src": "img" },
    { "name": "Art Gallery Opening", "date": "April 05, 2024", "location": "Los Angeles, CA", "description": "Experience a new art exhibit from renowned artists.", "img_src": "img" },
    { "name": "Film Festival", "date": "May 20, 2024", "location": "Austin, TX", "description": "Watch the best independent films from around the world.", "img_src": "img" },
    { "name": "Fitness Bootcamp", "date": "June 15, 2024", "location": "Miami, FL", "description": "Get fit with this high-intensity fitness bootcamp.", "img_src": "img" },
    { "name": "Tech Workshop", "date": "July 10, 2024", "location": "Seattle, WA", "description": "Hands-on workshop with the latest tech tools.", "img_src": "img" },
    { "name": "Startup Pitch", "date": "August 25, 2024", "location": "San Jose, CA", "description": "Pitch your startup idea to investors.", "img_src": "img" },
    { "name": "Cooking Masterclass", "date": "September 15, 2024", "location": "Houston, TX", "description": "Learn from the best chefs in the industry.", "img_src": "img" },
    { "name": "Dance Workshop", "date": "October 5, 2024", "location": "Las Vegas, NV", "description": "Join a fun and energetic dance session.", "img_src": "img" },
    { "name": "Photography Exhibition", "date": "November 20, 2024", "location": "San Diego, CA", "description": "Discover stunning photography from around the world.", "img_src": "img" },
    { "name": "New Year Gala", "date": "December 31, 2024", "location": "Orlando, FL", "description": "Celebrate the new year with a grand gala.", "img_src": "img" },
]

for event in events:
    Loader.objects.create(
        name=event["name"],
        date=datetime.strptime(event["date"], "%B %d, %Y").date(),
        location=event["location"],
        description=event["description"],
        img_src=event["img_src"]
    )
