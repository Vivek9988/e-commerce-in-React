// src/APIs/Shoes.js
const cardData = [
    {
        "id": 1,
        "title": "Nike",
        "description": "This is a description for Card.",
        "image": "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$130.00 "
    },
    {
        "id": 2,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$30.40 "
    },
    {
        "id": 3,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/new-pair-white-sneakers-isolated-white_93675-135053.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$40.70 "
    },
    {
        "id": 4,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/female-legs-short-jeans-sneakers_1174912-2257.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$57.90 "
    },
    {
        "id": 5,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/shoes_1203-8154.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$89.90 "
    },
    {
        "id": 6,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-sneakers-from-collection_646181-6372.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$150.00 "
    },
    {
        "id": 7,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/sport-shoes_960079-346.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$99.90 "
    },
    {
        "id": 8,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/shoes-advertising-photography-fashion-store-landing-page-concept_742418-34607.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$79.90"
    },
    {
        "id": 9,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$89.00 "
    },
    {
        "id": 10,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/pair-trainers_144627-3825.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$98.99 "
    },
    {
        "id": 11,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$90.99 "
    },
    {
        "id": 12,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/shoes-advertising-photography-fashion-store-landing-page-concept_742418-35585.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$85.99 "
    },
    {
        "id": 13,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/pair-trainers_144627-3811.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$98.99 "
    },
    {
        "id": 14,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/pair-comfortable-blue-sport-shoes-blue-background-shoe-store_474717-65854.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$99.99 "
    },
    {
        "id": 15,
        "title": "Nike",
        "description": "The best shoes in this price",
        "image":"https://img.freepik.com/free-photo/multi-colored-sports-shoe-blue-backdrop-design-generated-by-ai_188544-19749.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$67.89 "
    },
    {
        "id": 16,
        "title": "Bata",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/premium-photo/handmade-men-s-leather-moccasins-loafers-isolated-white-background_722820-4838.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$45.00 "
    },
    {
        "id": 17,
        "title": "Bata",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/brown-leather-shoes_1203-8176.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$30.00 "
    },
    {
        "id": 18,
        "title": "Bata",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/red-leather-shoes-stand-light-wooden-floor_8353-691.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$200.00 "
    },
    {
        "id": 19,
        "title": "Bata",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/men-shoes_1203-8427.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$80.00 "
    },
    {
        "id": 20,
        "title": "Bata",
        "description": "The best shoes in this price",
        "image": "https://img.freepik.com/free-photo/men-shoes_1203-8426.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$100.00 "
    },
    
    
];

export default cardData;
