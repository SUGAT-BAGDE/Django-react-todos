from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100, default="")
    desc = models.TextField()

    def __str__(self):
        return f"{self.id}  {self.title}"