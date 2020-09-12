import random
from flask import Flask

app = Flask(__name__)

@app.route('/')
def get_food_choice():
    food_options = ["Chicken rice", "Laksa", "Satay", "Rojak", "Prata", "Fried Rice", "Otah", "Hokkien Mee", "Rendang", "Lamb Chops"]
    return random.choice(food_options)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port='3001')
