# Generated by Django 5.1 on 2024-08-27 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0004_alter_event_search_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event_search',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='loader',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
