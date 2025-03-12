from typing import List, Dict
from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)

# Sample restaurant data (replace with database later)
restaurants_data: List[Dict] = [
    {
        "id": 1,
        "name": "Delicious Bites",
        "cuisine": "Italian",
        "rating": 4.5,
        "address": "123 Main St",
    },
    {
        "id": 2,
        "name": "Spicy Thai Kitchen",
        "cuisine": "Thai",
        "rating": 4.2,
        "address": "456 Oak Ave",
    },
    {
        "id": 3,
        "name": "Burger Heaven",
        "cuisine": "American",
        "rating": 4.8,
        "address": "789 Pine Ln",
    },
]


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/restaurants")
async def get_restaurants():
    return restaurants_data
