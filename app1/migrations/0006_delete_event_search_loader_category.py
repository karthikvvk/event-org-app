# Generated by Django 5.1 on 2024-08-30 05:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_alter_event_search_id_alter_loader_id'),
    ]

    operations = [
        migrations.DeleteModel(
            name='event_search',
        ),
        migrations.AddField(
            model_name='loader',
            name='category',
            field=models.CharField(default='general', max_length=255),
        ),
    ]
