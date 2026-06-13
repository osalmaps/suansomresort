/* =====================================================================
   SUAN SOM RESORT  —  WEBSITE CONTENT
   =====================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT TO UPDATE YOUR WEBSITE.
   Change prices, dishes, photos, phone numbers and text here.
   After you save, your website updates by itself.

   ---  HOW TO EDIT SAFELY  --------------------------------------------
   • Only change the words BETWEEN the "quotation marks".
   • Always keep the comma  ,  at the end of a line.
   • To ADD an item: copy a whole line, paste it below, change the words.
   • To REMOVE an item: delete its whole line.
   • A price can be anything in quotes: "90 Baht", "150 Baht / 700 Baht",
     "Price Varies", or "" (empty) for no price.
   • A photo needs a file name (e.g. "padthai.jpg") of a picture that
     you have uploaded to the website, and a caption describing it.
   --------------------------------------------------------------------- */

const SITE_DATA = {

  /* ====  CONTACT DETAILS  (shown in the Contact pop-up)  ==== */
  contact: {
    officePhoneDisplay: "+66 083 343 8771",   // shown on screen
    officePhoneDial:    "+660833438771",       // the number it dials (no spaces)
    somPhoneDisplay:    "+66 093 935 6326",
    somPhoneDial:       "+660939356326",
    address: "86/4 Ban Sawsawan, Han Na Ngam, Nong Bua Lamphu, Si Bun Rueang, 39180, Thailand",
    email:   "naris090952@gmail.com",          // used by the "Email Us" button
    image: { src: "Driveway-Outside-01.jpg", caption: "The welcoming entrance to Suan Som Resort." }
  },

  /* ====  ROOMS  ==== */
  rooms: {
    price: "B400,- for Standard Room.",
    amenities: [
      "Air conditioning",
      "Free Wi-Fi",
      "Private bathroom with hot shower",
      "Flat-screen TV",
      "Coffee & Bottled Water"
    ],
    photos: [
      { src: "Standard-Room-02.jpg", caption: "Spacious Standard Room Bed." },
      { src: "Standard-Room-04.jpg", caption: "Cozy Standard Room." },
      { src: "Standard-Room-07.jpg", caption: "Modern and luxurious bathroom facilities." },
      { src: "Standard-Room-06.jpg", caption: "Comfortable Toilet." }
    ]
  },

  /* ====  ABOUT US  ==== */
  about: {
    intro: "Welcome to Suan Som Resort, nestled in the serene landscapes of Thailand. Our resort offers a tranquil escape with breathtaking views and exceptional service. We pride ourselves on blending traditional Thai hospitality with modern comforts, ensuring a memorable stay for every guest.",
    missionTitle: "Our Mission",
    mission: "To provide an unparalleled experience of relaxation and cultural immersion, making every visit to Suan Som Resort a cherished memory.",
    photos: [
      { src: "Driveway-Outside-01.jpg", caption: "View of the entrance to our resort." },
      { src: "Driveway-Outside-02.jpg", caption: "View outside." },
      { src: "Driveway-Outside-03.jpg", caption: "View outside." },
      { src: "Driveway-Outside-04.jpg", caption: "Night view outside." }
    ]
  },

  /* ====  RESTAURANT GALLERY  (the photos on the main page)  ==== */
  galleryPhotos: [
    { src: "burger-fries.jpg",      caption: "Our classic Burger and Fries, a Western favorite." },
    { src: "Mango-Sticky-Rice.jpg", caption: "Indulge in seasonal Mango Sticky Rice." },
    { src: "porkroast.jpg",         caption: "A look at one of our delicious Crispy Pork Roast." }
  ],

  /* ====  PHOTOS ON THE TWO RESTAURANT TABS  ==== */
  restaurantPhotos: {
    food:  { src: "padthai.jpg",   caption: "A glimpse into our delicious range of Thai cuisine." },
    drink: { src: "beergarden.jpg", caption: "Enjoy a refreshing drink at our resort's friendly bar." }
  },

  /* ====  THIS WEEK'S SPECIAL  ==== */
  special: {
    intro: "Ask our staff for this week's delicious special!",
    lines: [
      "Chef's Weekly Special - Price Varies",
      "(Example: Roasted Crispy Pork Shoulder)",
      "(Example: Grilled Snapper with Tamarind Sauce)",
      "(Example: Duck Red Curry)"
    ],
    image: { src: "porkroast.jpg", caption: "Today's special: A savory Pork Roast. (Image for illustration)" }
  },

  /* ===================================================================
     MENUS
     Each menu has a "title", and a list of "sections".
     Each section has a "heading" (use "" for no heading) and "items".
     Each item is:  { name: "Dish name", price: "90 Baht" }
     =================================================================== */
  menus: {

    thaiFood: {
      title: "Thai Food Menu",
      sections: [
        { heading: "Curries", items: [
          { name: "Green Curry with Chicken",   price: "90 Baht" },
          { name: "Red Curry with Pork",        price: "90 Baht" },
          { name: "Massaman Curry with Beef",   price: "120 Baht" },
          { name: "Panang Curry with Shrimp",   price: "110 Baht" }
        ]},
        { heading: "Stir-fries", items: [
          { name: "Pad Krapow (Basil Stir-fry) - Chicken",        price: "80 Baht" },
          { name: "Pad Krapow (Basil Stir-fry) - Pork",           price: "80 Baht" },
          { name: "Pad Krapow (Basil Stir-fry) - Beef",           price: "100 Baht" },
          { name: "Pad Med Mamuang (Cashew Nut Stir-fry) - Chicken", price: "90 Baht" },
          { name: "Pad Priew Wan (Sweet & Sour) - Chicken/Pork",  price: "80 Baht" },
          { name: "Pad Pak Ruam (Mixed Vegetables)",              price: "70 Baht" }
        ]},
        { heading: "Soups", items: [
          { name: "Tom Yum Goong (Spicy Shrimp Soup)",          price: "120 Baht" },
          { name: "Tom Kha Gai (Chicken Coconut Soup)",         price: "100 Baht" },
          { name: "Gaeng Jued (Clear Soup with Tofu & Veg)",    price: "80 Baht" }
        ]},
        { heading: "Noodles & Rice", items: [
          { name: "Pad See Ew (Stir-fried Noodles) - Chicken/Pork", price: "80 Baht" },
          { name: "Pad Thai - Chicken",                          price: "80 Baht" },
          { name: "Pad Thai - Shrimp",                           price: "100 Baht" },
          { name: "Fried Rice - Shrimp",                         price: "90 Baht" },
          { name: "Fried Rice - Chicken/Pork/Veg",               price: "90 Baht" },
          { name: "Khao Pad Sapparot (Pineapple Fried Rice)",    price: "120 Baht" }
        ]},
        { heading: "Salads", items: [
          { name: "Som Tum (Papaya Salad)",            price: "70 Baht" },
          { name: "Laab Moo (Spicy Minced Pork Salad)", price: "90 Baht" },
          { name: "Yum Woon Sen (Glass Noodle Salad)",  price: "100 Baht" }
        ]}
      ]
    },

    farangFood: {
      title: "Farang (Western) Food Menu",
      sections: [
        { heading: "Main Dishes", items: [
          { name: "Hamburger with Fries",            price: "220 Baht" },
          { name: "Cheeseburger with Fries",         price: "170 Baht" },
          { name: "Chicken Nuggets with Fries",      price: "120 Baht" },
          { name: "Fish & Chips",                    price: "160 Baht" },
          { name: "Spaghetti Carbonara",             price: "130 Baht" },
          { name: "Spaghetti Bolognese",             price: "140 Baht" },
          { name: "Grilled Chicken Breast with Salad", price: "180 Baht" }
        ]},
        { heading: "Sides", items: [
          { name: "French Fries",      price: "50 Baht" },
          { name: "Onion Rings",       price: "60 Baht" },
          { name: "Mixed Green Salad", price: "70 Baht" }
        ]}
      ]
    },

    desserts: {
      title: "Desserts Menu",
      sections: [
        { heading: "", items: [
          { name: "Mango Sticky Rice (Seasonal)",                price: "80 Baht" },
          { name: "Fried Banana with Honey",                     price: "60 Baht" },
          { name: "Fried Banana with Ice Cream",                 price: "70 Baht" },
          { name: "Ice Cream (Vanilla, Chocolate, Strawberry)",  price: "50 Baht (per scoop)" },
          { name: "Fresh Fruit Plate",                           price: "90 Baht" }
        ]}
      ]
    },

    softDrinks: {
      title: "Soft Drinks Menu",
      sections: [
        { heading: "Carbonated Drinks", items: [
          { name: "Coca-Cola / Pepsi",          price: "25 Baht" },
          { name: "Sprite / 7-Up",              price: "25 Baht" },
          { name: "Fanta (Orange/Strawberry)",  price: "25 Baht" },
          { name: "Soda Water",                 price: "20 Baht" }
        ]},
        { heading: "Juices", items: [
          { name: "Orange Juice",          price: "40 Baht" },
          { name: "Pineapple Juice",       price: "40 Baht" },
          { name: "Mango Juice",           price: "40 Baht" },
          { name: "Coconut Water (Fresh)", price: "60 Baht" }
        ]},
        { heading: "Other", items: [
          { name: "Drinking Water (small bottle)",   price: "15 Baht" },
          { name: "Drinking Water (large bottle)",   price: "25 Baht" },
          { name: "Iced Tea (Lemon/Thai Milk Tea)",  price: "30 Baht" },
          { name: "Hot Coffee",                      price: "40 Baht" },
          { name: "Iced Coffee",                     price: "50 Baht" }
        ]}
      ]
    },

    localBeers: {
      title: "Local Beers Menu",
      note: "Prices may vary slightly.",
      sections: [
        { heading: "", items: [
          { name: "Chang Beer (Small Bottle)",  price: "60 Baht" },
          { name: "Chang Beer (Large Bottle)",  price: "90 Baht" },
          { name: "Leo Beer (Small Bottle)",    price: "60 Baht" },
          { name: "Leo Beer (Large Bottle)",    price: "90 Baht" },
          { name: "Singha Beer (Small Bottle)", price: "70 Baht" },
          { name: "Singha Beer (Large Bottle)", price: "100 Baht" },
          { name: "Archa Beer (Small Bottle)",  price: "55 Baht" },
          { name: "Archa Beer (Large Bottle)",  price: "85 Baht" }
        ]}
      ]
    },

    alcoholic: {
      title: "Alcoholic Beverages Menu",
      sections: [
        { heading: "Spirits (per shot/glass)", items: [
          { name: "Thai Whiskey (Blend 285, Hong Thong)", price: "60 Baht" },
          { name: "Local Rum (SangSom)",                  price: "60 Baht" },
          { name: "Imported Whiskey (Johnnie Red)",       price: "100 Baht" },
          { name: "Imported Whiskey (Johnnie Black)",     price: "150 Baht" },
          { name: "Vodka (Gilbey's)",                     price: "90 Baht" },
          { name: "Vodka (Smirnoff)",                     price: "100 Baht" },
          { name: "Jägermeister",                         price: "90 Baht" },
          { name: "Tequila",                              price: "90 Baht" },
          { name: "Gin (Gilbey's)",                       price: "90 Baht" },
          { name: "Gin (Bombay)",                         price: "110 Baht" }
        ]},
        { heading: "Wine (per glass / bottle)", items: [
          { name: "House Red Wine",   price: "150 Baht / 700 Baht" },
          { name: "House White Wine", price: "150 Baht / 700 Baht" },
          { name: "(Ask for our wine list for other selections)", price: "" }
        ]},
        { heading: "Other", items: [
          { name: "Cider (Local/Imported) - Prices Vary", price: "" },
          { name: "Cocktails (see Thai Bar Drinks)",       price: "" }
        ]}
      ]
    },

    thaiBar: {
      title: "Thai Bar Drinks (Cocktails)",
      intro: "Enjoy our refreshing tropical and classic cocktails!",
      image: { src: "thai_cocktail.jpg", caption: "A vibrant example of our refreshing Thai cocktails." },
      sections: [
        { heading: "", items: [
          { name: "Mekong Cocktail (Thai Whiskey, Lime, Soda)",   price: "120 Baht" },
          { name: "SangSom Special (Thai Rum, Coke/Soda, Lime)",  price: "120 Baht" },
          { name: "Jäger Bomb (Jägermeister, Red Bull)",          price: "120 Baht" },
          { name: "Mojito (Rum, Mint, Lime, Soda)",               price: "150 Baht" },
          { name: "Pina Colada (Rum, Coconut Cream, Pineapple)",  price: "150 Baht" },
          { name: "Margarita (Tequila, Triple Sec, Lime)",        price: "150 Baht" },
          { name: "Long Island Iced Tea",                         price: "200 Baht" },
          { name: "Thai Sabai (Thai Basil, Mekong, Lime)",        price: "140 Baht" }
        ]}
      ]
    }

  }
};
