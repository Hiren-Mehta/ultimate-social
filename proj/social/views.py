# Create your views here.
from django.shortcuts import render

def index(request):
    return render(request, "index.html", {"page_title": "Dashboard", "active_page": "dashboard"})


def social_accounts(request):
    platforms = [
        {"name": "Messenger", "description": "Messages & conversations", "icon": "bx bxl-messenger", "color": "messenger-color"},
        {"name": "Twitter", "description": "Updates & conversations", "icon": "bx bxl-twitter", "color": "x-color"},
        {"name": "WhatsApp", "description": "Messages & communities", "icon": "bx bxl-whatsapp", "color": "whatsapp-color"},
        {"name": "Email", "description": "Newsletters & updates", "icon": "bi bi-envelope-fill", "color": "email-color"},
        {"name": "Telegram", "description": "Channels & updates", "icon": "bx bxl-telegram", "color": "telegram-color"},
    ]
    return render(request, "social_accounts.html", {"page_title": "Social Accounts", "active_page": "accounts", "platforms": platforms})


def posts(request):
    sample_posts = [
        {"title": "A little inspiration for your Thursday", "description": "A reminder to make room for the things that matter.", "image": "assets/img/product-1.jpg", "platform": "Messenger", "platform_color": "messenger-color", "platform_icon": "bx bxl-messenger", "day": "Tomorrow, Nov 12", "time": "10:30 AM"},
        {"title": "What we learned building in public", "description": "The best product lessons come from listening.", "image": "assets/img/product-2.jpg", "platform": "Telegram", "platform_color": "telegram-color", "platform_icon": "bx bxl-telegram", "day": "Tomorrow, Nov 12", "time": "2:00 PM"},
        {"title": "Small steps make big things happen.", "description": "Keep going. You’re closer than you think.", "image": "assets/img/product-3.jpg", "platform": "Twitter", "platform_color": "x-color", "platform_icon": "bx bxl-twitter", "day": "Friday, Nov 13", "time": "9:00 AM"},
        {"title": "Behind the scenes at our studio", "description": "A peek at what the team is working on this week.", "image": "assets/img/product-4.jpg", "platform": "WhatsApp", "platform_color": "whatsapp-color", "platform_icon": "bx bxl-whatsapp", "day": "Friday, Nov 13", "time": "12:30 PM"},
        {"title": "Three ideas to take into the weekend", "description": "Save this for your next creative reset.", "image": "assets/img/product-5.jpg", "platform": "Email", "platform_color": "email-color", "platform_icon": "bi bi-envelope-fill", "day": "Saturday, Nov 14", "time": "11:00 AM"},
    ]
    return render(request, "social_posts.html", {"page_title": "Posts", "active_page": "posts", "posts": sample_posts})


def schedule(request):
    return render(request, "social_schedule.html", {"page_title": "Schedule", "active_page": "schedule"})

def comp_alert(request):
    return render(request, "components-alerts.html")

def usr_profile(request):
    return render(request,"users-profile.html")
