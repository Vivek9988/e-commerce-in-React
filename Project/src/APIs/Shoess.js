// src/APIs/Shoes.js
const cardData = [
    {
        "id": 1,
        "title": "Nike",
        "description": "This is a description for Card.",
        "image": "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 2,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 3,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 4,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/female-legs-short-jeans-sneakers_1174912-2257.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 5,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/shoes_1203-8154.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$3 "
    },
    
    
];

export default cardData;
