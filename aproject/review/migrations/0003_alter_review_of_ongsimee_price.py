# Generated by Django 3.2.6 on 2021-08-09 10:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0002_alter_review_of_ongsimee_starpoint'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review_of_ongsimee',
            name='price',
            field=models.IntegerField(blank=True, default='0', null=True),
        ),
    ]