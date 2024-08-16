// src/APIs/KidsClothes.js
const kidsClothesData = [
    {
        "id": 1,
        "title": "Floral Summer Dress",
        "description": "Bright floral pattern for summer.",
        "image": "https://img.freepik.com/free-photo/portrait-happy-child-wearing-sunglasses-outdoors-summer-day-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer-turkey_146671-18796.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$25.00"
    },
    {
        "id": 2,
        "title": "Denim Jacket",
        "description": "Classic denim jacket for cool evenings.",
        "image": "https://img.freepik.com/free-photo/expressive-young-girl-posing_176474-21194.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$35.00"
    },
    {
        "id": 3,
        "title": "Striped T-shirt",
        "description": "Casual striped T-shirt for everyday wear.",
        "image": "https://img.freepik.com/free-photo/cute-girl-posing-with-roses_23-2148442673.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$15.00"
    },
    {
        "id": 4,
        "title": "Polka Dot Skirt",
        "description": "Fun polka dot skirt for playful days.",
        "image": "https://img.freepik.com/free-photo/cute-young-woman-outdoor_624325-2541.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$20.00"
    },
    {
        "id": 5,
        "title": "Hooded Sweatshirt",
        "description": "Cozy hoodie for chilly weather.",
        "image": "https://img.freepik.com/free-photo/front-view-modern-boy-with-copy-space_23-2148423123.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$30.00"
    },
    {
        "id": 6,
        "title": "Ruffle Dress",
        "description": "Elegant ruffle dress for special occasions.",
        "image": "https://img.freepik.com/free-photo/children-expressions_23-2148010380.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$40.00"
    },
    {
        "id": 7,
        "title": "Patterned Leggings",
        "description": "Comfortable leggings with fun patterns.",
        "image": "https://img.freepik.com/free-photo/80s-trainer-doing-exercises_23-2149900567.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$12.00"
    },
    {
        "id": 8,
        "title": "Winter Coat",
        "description": "Warm coat for cold winter days.",
        "image": "https://img.freepik.com/free-photo/children-expressions_23-2148010472.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$50.00"
    },
    {
        "id": 9,
        "title": "Rain Boots",
        "description": "Waterproof boots for rainy days.",
        "image": "https://img.freepik.com/premium-photo/little-child-bright-yellow-raincoat-striped-rubber-boots_169016-7712.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$25.00"
    },
    {
        "id": 10,
        "title": "Sun Hat",
        "description": "Protective sun hat for sunny days.",
        "image": "https://img.freepik.com/free-photo/front-view-summer-dress-is-looking-straight-holding-edges-hat_8353-11349.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$18.00"
    },
    {
        "id": 11,
        "title": "Sleeveless Top",
        "description": "Lightweight top for warm weather.",
        "image": "https://img.freepik.com/free-photo/little-girl-white-blouse-looking-front-looking-fatigued_176474-34040.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$10.00"
    },
    {
        "id": 12,
        "title": "Cargo Shorts",
        "description": "Durable shorts with extra pockets.",
        "image": "https://img.freepik.com/premium-photo/cheerful-little-boy-drawing-hopscotch-with-chalk-ground-enjoying-happy-childhood-backyard_226903-1693.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$22.00"
    },
    {
        "id": 13,
        "title": "Graphic Tee",
        "description": "Fun graphic tee with cool designs.",
        "image": "https://img.freepik.com/premium-photo/new-trendy-fashion-t-shirt-design_742418-33859.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$15.00"
    },
    {
        "id": 14,
        "title": "Swim Trunks",
        "description": "Comfortable swim trunks for beach days.",
        "image": "https://img.freepik.com/premium-photo/blond-boy-summer-panama-yellow-swimming-trunks-with-inflatable-swimming-board-orange_88135-16417.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$20.00"
    },
    {
        "id": 15,
        "title": "Pajama Set",
        "description": "Cozy pajama set for a good night's sleep.",
        "image": "https://img.freepik.com/free-photo/happy-funny-children-dressed-bright-pajamas-are-jumping-bed-playing-together_8353-10834.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$25.00"
    },
    {
        "id": 16,
        "title": "Sneakers",
        "description": "Stylish sneakers for active kids.",
        "image": "https://img.freepik.com/premium-photo/pink-sneakers-pink-background_38187-4382.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$35.00"
    },
    {
        "id": 17,
        "title": "Bow Tie",
        "description": "Elegant bow tie for formal events.",
        "image": "https://img.freepik.com/free-photo/happy-teen-boy-standing-smiling-against-pink-background_155003-31091.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$8.00"
    },
    {
        "id": 18,
        "title": "Winter Hat",
        "description": "Warm winter hat with a cute design.",
        "image": "https://img.freepik.com/free-photo/blonde-girl-making-funny-faces-with-winter-hat_23-2148329726.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$15.00"
    },
    {
        "id": 19,
        "title": "Bib Overalls",
        "description": "Classic bib overalls for all-day comfort.",
        "image": "https://img.freepik.com/free-photo/confused-young-asian-builder-woman-with-blue-safety-helmet-keeping-hands-open-looking_141793-124610.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$28.00"
    },
    {
        "id": 20,
        "title": "Dress Shoes",
        "description": "Shiny dress shoes for special occasions.",
        "image": "https://img.freepik.com/free-photo/baby-concept-with-shoe-composition_23-2147665777.jpg?ga=GA1.1.273682998.1723810416&semt=ais_hybrid",
        "price": "$40.00"
    }
];

export default kidsClothesData;
