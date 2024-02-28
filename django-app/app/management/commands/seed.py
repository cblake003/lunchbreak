from django.core.management.base import BaseCommand
# , Category, MenuItem, Option, Order, OrderItem
from app.models import Restaurant, Day


class Command(BaseCommand):
    help = "Seeds the database with some sample data"

    def handle(self, *args, **options):
        # Add your seed data here
        restaurant_data = [{
            'name': 'Starbird',
            'address': '123 Main St',
            'contact_email': 'contact@starbird.com',
            'contact_phone': '123-456-7888',
            'active_days': [1, 2, 3, 4, 5],  # Active mondays through fridays
            'is_active': True,
        },
            {
            'name': 'Flemings',
            'address': '456 Main St',
            'contact_email': 'contact@flemings.com',
            'contact_phone': '123-456-7777',
            'active_days': [3, 4, 5],
            'is_active': True,
        },
            {
            'name': 'Pizza House',
            'address': '789 Main St',
            'contact_email': 'contact@pizzahouse.com',
            'contact_phone': '123-456-7890',
            'active_days': [1, 2, 3],
            'is_active': True,
        }

        ]

        # Iterate over the data to create and save Restaurants instances

        for data in restaurant_data:
            restaurant, created = Restaurant.objects.update_or_create(
                name=data['name'],
                defaults={
                    'address': data['address'],
                    'contact_email': data['contact_email'],
                    'contact_phone': data['contact_phone'],
                }
            )

            # Set Active Days
            for day_num in data['active_days']:
                day, _ = Day.objects.get_or_create(day=day_num)
                restaurant.active_days.add(day)

            if created:
                self.stdout.write(self.style.SUCCESS(
                    f"Successfully created restaurant: {restaurant.name}"))
            else:
                self.stdout.write(self.style.WARNING(
                    f"Updated existing restaurant: {restaurant.name}"))


# Command to run: python manage.py seed
