# Generated by Django 3.2.6 on 2021-08-09 10:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review_of_ongsimee',
            name='starpoint',
            field=models.CharField(blank=True, default='1', max_length=10, null=True, verbose_name='별점'),
        ),
    ]
