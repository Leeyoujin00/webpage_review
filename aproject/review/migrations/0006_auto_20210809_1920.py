# Generated by Django 3.2.6 on 2021-08-09 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0005_alter_review_of_ongsimee_opinion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review_of_ongsimee',
            name='price',
            field=models.IntegerField(blank=True, default='', null=True),
        ),
        migrations.AlterField(
            model_name='review_of_ongsimee',
            name='starpoint',
            field=models.CharField(blank=True, default='', max_length=10, null=True, verbose_name='별점'),
        ),
    ]
