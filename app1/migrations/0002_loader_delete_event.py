# Generated by Django 5.1 on 2024-08-24 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Loader',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('location', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('img_src', models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='Event',
        ),
    ]
