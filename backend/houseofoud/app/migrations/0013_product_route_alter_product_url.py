# Generated by Django 5.0.6 on 2024-07-23 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0012_remove_product_size_alter_orders_order_id_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='route',
            field=models.CharField(default=0, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='url',
            field=models.CharField(max_length=50),
        ),
    ]