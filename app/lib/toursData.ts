/* ─── Dynamic Tours Data ─── */

export interface Tour {
  id: string;
  title: string;
  headline: string;
  desc: string;
  img: string;
  galleryImages: string[];
  category: "Ancient" | "Heritage" | "Hill" | "Beach" | "Wildlife";
  price: number;
  pricePerNight: string;
  rating: number;
  duration: string;
  overview: string[];
  policies: {
    travelValidity: string;
    cancellation: string;
    guaranteedDates: string;
    bookingPolicy: string[];
  };
  itinerary: {
    day: number;
    location: string;
    images: string[];
  }[];
}

const baseToursData: Tour[] = [
  {
    id: "tour-1",
    img: "https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OWN SWEET TIME ON THE BEACH",
    headline: "OWN SWEET TIME ON THE BEACH",
    galleryImages: [
      "https://images.unsplash.com/photo-1462400362591-9ca55235346a?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1168&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1173&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 7 days Own Sweet Time on the Beach tour package offers you the best experience on the beaches of southern Sri Lanka.",
    price: 370.00,
    pricePerNight: "74",
    category: "Beach",
    overview: [
      "This coastal getaway blends the sun-drenched beaches of southern Sri Lanka with premier wildlife experiences. You'll transition from whale watching in Mirissa to spotting elephants in Yala, offering a perfect mix of ocean and land adventures for nature lovers.",
      "The journey continues with scenic river explorations and concludes in the vibrant atmosphere of Colombo. From relaxing on golden sands to enjoying urban shopping and nightlife, this tour captures the island's best coastal and cultural highlights in one seamless trip."
    ],
    policies: {
      travelValidity: "Valid on fixed travel date.",
      cancellation: "Cancellation Policy:- 31 days or more prior to departure date, Initial Booking Amount and additional amount of visa fee will be forfeited (in case visa has been applied). “Between 30-16 days: 75% of total tour cost will be charged as penalty. “Less than 15 days: 100% of total tour cost will be charges as penalty.",
      guaranteedDates: "Travel dates are fixed and non changeable.",
      bookingPolicy: [
        "Initial Booking Amount – INR 20,000 per person or cancellation charges whichever is higher (non-refundable and non-transferable)",
        "30 days prior to the departure date – 75% of the remaining tour cost",
        "15 days prior to the departure date – 100% of the tour cost required."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Colombo",
        images: ["https://images.unsplash.com/photo-1588084558933-01bafa5d47ac?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Bentota",
        images: ["https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Hikkaduwa",
        images: ["https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1168&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Mirissa",
        images: ["https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Departure",
        images: ["https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1173&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-2",
    img: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CEYLON HERITAGE TOUR",
    headline: "Journey Through Time: Explore Ceylon's Ancient Heritage & Culture",
    galleryImages: [
      "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594391045445-64ea3c6ff16b?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1074&auto=format&fit=crop"
    ],
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    desc: "Explore the rich ancient history of Sri Lanka, designed for the visitors interested in antiquities",
    price: 1020.00,
    pricePerNight: "$145",
    category: "Heritage",
    overview: [
      "Journey through Sri Lanka's UNESCO World Heritage Sites and discover the island's rich cultural tapestry. This comprehensive tour takes you through ancient cities, colonial architecture, and timeless traditions.",
      "Visit sacred Buddhist temples, climb the iconic Sigiriya Rock Fortress, and explore the ancient ruins of Anuradhapura and Polonnaruwa. Each site tells a story of Ceylon's glorious past.",
      "Experience traditional Sri Lankan culture through local crafts, authentic cuisine, and warm hospitality. This tour is perfect for history enthusiasts and cultural explorers."
    ],
    policies: {
      travelValidity: "Available year-round with special cultural festival dates",
      cancellation: "Free cancellation up to 14 days before departure. 50% refund for cancellations 7-14 days before. 25% refund for cancellations within 7 days.",
      guaranteedDates: "Guaranteed departures every week with minimum 2 participants",
      bookingPolicy: [
        "A deposit of 40% is required at booking for this premium heritage tour.",
        "Full payment must be received 21 days prior to departure.",
        "Special permits for certain heritage sites are included in the package."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Negombo",
        images: ["https://images.unsplash.com/photo-1608633072779-82825c52f8f3?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Anuradhapura",
        images: ["https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=1171&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Sigiriya",
        images: ["https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=687&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Polonnaruwa",
        images: ["https://images.unsplash.com/photo-1594391045445-64ea3c6ff16b?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Dambulla",
        images: ["https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 6,
        location: "Kandy",
        images: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1196&auto=format&fit=crop"]
      },
      {
        day: 7,
        location: "Colombo",
        images: ["https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop"]
      },
      {
        day: 8,
        location: "Departure",
        images: ["https://images.unsplash.com/photo-1588084558933-01bafa5d47ac?q=80&w=1074&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-3",
    img: "https://images.unsplash.com/photo-1639401672371-0c4be4389107?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "CEYLON HILL TOUR",
    headline: "Escape to Serenity: Experience the Majestic Hill Country",
    galleryImages: [
      "https://images.unsplash.com/photo-1639401672371-0c4be4389107?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1169&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619378044883-bb7a7ffda8ff?q=80&w=1074&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "Perfect getaway for visitors who want to experience the cool breezy hill country of Sri Lanka",
    price: 370.00,
    pricePerNight: "$74",
    category: "Hill",
    overview: [
      "Escape to the cool, misty highlands of Sri Lanka where emerald tea plantations stretch endlessly across rolling hills. This tour offers a refreshing retreat from the tropical heat.",
      "Experience the colonial charm of Nuwara Eliya, ride the iconic blue train through stunning mountain scenery, and visit working tea estates to learn about Ceylon tea production.",
      "Wake up to breathtaking mountain views, explore cascading waterfalls, and enjoy crisp mountain air. Perfect for nature lovers and those seeking tranquility."
    ],
    policies: {
      travelValidity: "Best season: December to March. Available year-round.",
      cancellation: "Free cancellation up to 7 days before departure. 50% refund for 3-7 days notice. No refund within 3 days.",
      guaranteedDates: "Guaranteed departures with minimum 2 participants",
      bookingPolicy: [
        "30% deposit required at time of booking.",
        "Balance payment due 14 days before departure.",
        "Warm clothing recommended for cool hill country climate."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Colombo to Kandy",
        images: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1196&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Nuwara Eliya",
        images: ["https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Ella",
        images: ["https://images.unsplash.com/photo-1639401672371-0c4be4389107?q=80&w=735&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Horton Plains",
        images: ["https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1169&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Return to Colombo",
        images: ["https://images.unsplash.com/photo-1619378044883-bb7a7ffda8ff?q=80&w=1074&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-4",
    img: "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "EAST COAST",
    headline: "Unveil the Magic: East Coast Beach & Cultural Paradise",
    galleryImages: [
      "https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589986397062-dc5af732a6d6?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540202403-b7abd6747a18?q=80&w=1169&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583067787146-c5b38d6c1c13?q=80&w=1074&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 6 day East Coast tour package offers you the perfect blend of beach and the cultural experience.",
    price: 370.00,
    pricePerNight: "$74",
    category: "Beach",
    overview: [
      "Discover the unspoiled beauty of Sri Lanka's East Coast, where pristine beaches meet rich cultural heritage. This region offers a more tranquil alternative to the busy west coast.",
      "Explore the ancient city of Trincomalee with its historic temples and natural harbor, relax on the golden beaches of Arugam Bay, and experience authentic Sri Lankan coastal culture.",
      "Combine beach relaxation with cultural exploration, water sports, and wildlife encounters. The perfect blend for adventurous travelers seeking both culture and nature."
    ],
    policies: {
      travelValidity: "Best season: May to September. Off-season discounts available.",
      cancellation: "Free cancellation up to 7 days before departure. 50% refund for 3-7 days notice. No refund within 3 days.",
      guaranteedDates: "Guaranteed departures with minimum 2 participants during peak season",
      bookingPolicy: [
        "30% deposit required at booking to secure your East Coast adventure.",
        "Full payment due 14 days prior to departure.",
        "Seasonal availability - book early for peak season (May-September)."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Colombo to Trincomalee",
        images: ["https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Trincomalee",
        images: ["https://images.unsplash.com/photo-1589986397062-dc5af732a6d6?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Passikudah",
        images: ["https://images.unsplash.com/photo-1540202403-b7abd6747a18?q=80&w=1169&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Arugam Bay",
        images: ["https://images.unsplash.com/photo-1583067787146-c5b38d6c1c13?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Return Journey",
        images: ["https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-5",
    img: "https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ENJOY 3 NIGHTS IN COLOMBO",
    headline: "Urban Dreams: Discover the Vibrant Heart of Colombo",
    galleryImages: [
      "https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608633072779-82825c52f8f3?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612852098443-80e58132f305?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588084558933-01bafa5d47ac?q=80&w=1074&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "Perfect getaway for visitors who want to experience the cool breezy hill country of Sri Lanka",
    price: 370.00,
    pricePerNight: "$74",
    category: "Heritage",
    overview: [
      "Immerse yourself in the dynamic energy of Colombo, Sri Lanka's bustling commercial capital. This urban adventure combines modern city life with colonial heritage and local culture.",
      "Explore historic landmarks, vibrant markets, contemporary shopping districts, and diverse culinary scenes. From colonial architecture to modern skyscrapers, Colombo offers a fascinating blend of old and new.",
      "Experience the city's nightlife, visit museums and art galleries, and enjoy waterfront dining. Perfect for business travelers or those wanting to experience urban Sri Lankan culture."
    ],
    policies: {
      travelValidity: "Available throughout the year",
      cancellation: "Free cancellation up to 3 days before check-in. 50% refund for 1-3 days notice. No refund for same-day cancellations.",
      guaranteedDates: "City package available daily, no minimum participants required",
      bookingPolicy: [
        "25% deposit required at booking.",
        "Balance payment upon arrival or 7 days before check-in.",
        "Flexible dates - change dates up to 5 days before arrival subject to availability."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Arrival Colombo",
        images: ["https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "City Tour",
        images: ["https://images.unsplash.com/photo-1608633072779-82825c52f8f3?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Shopping & Dining",
        images: ["https://images.unsplash.com/photo-1612852098443-80e58132f305?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Cultural Sites",
        images: ["https://images.unsplash.com/photo-1588084558933-01bafa5d47ac?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Departure",
        images: ["https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-6",
    img: "https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "WONDERS OF HILL COUNTRIES",
    headline: "Breathtaking Heights: Wonders of Ceylon's Hill Country",
    galleryImages: [
      "https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639401672371-0c4be4389107?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605782022299-179c1bbe8e6c?q=80&w=1169&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587905069134-008460d7a072?q=80&w=1074&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 6-day fascination hill country tour package offers you the most scenic experience of the magical island.",
    price: 370.00,
    pricePerNight: "$74",
    category: "Hill",
    overview: [
      "Experience the breathtaking wonders of Sri Lanka's central highlands on this comprehensive hill country adventure. From misty mountains to cascading waterfalls, every moment is picture-perfect.",
      "Journey through picturesque tea estates, visit colonial-era towns, and witness some of the most stunning landscapes in Asia. Ride the famous scenic train routes and explore natural wonders.",
      "This tour showcases the best of hill country - including World's End at Horton Plains, the charming village of Ella, and the tea capital Nuwara Eliya. A photographer's paradise."
    ],
    policies: {
      travelValidity: "Optimal period: December to April. Available year-round.",
      cancellation: "Free cancellation up to 10 days before departure. 50% refund for 5-10 days notice. 25% refund for 3-5 days notice.",
      guaranteedDates: "Guaranteed weekly departures with minimum 2 participants",
      bookingPolicy: [
        "35% deposit required at time of booking.",
        "Full payment required 14 days before departure.",
        "Train tickets subject to availability and will be confirmed upon booking."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Colombo to Kandy",
        images: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1196&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Nuwara Eliya",
        images: ["https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Horton Plains",
        images: ["https://images.unsplash.com/photo-1605782022299-179c1bbe8e6c?q=80&w=1169&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Ella",
        images: ["https://images.unsplash.com/photo-1639401672371-0c4be4389107?q=80&w=735&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Scenic Train Ride",
        images: ["https://images.unsplash.com/photo-1587905069134-008460d7a072?q=80&w=1074&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-7",
    img: "https://plus.unsplash.com/premium_photo-1723914073487-91df23fa3b72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "HONEYMOON / ROMANTIC SPECIAL TOUR",
    headline: "Love in Paradise: Your Dream Honeymoon in Sri Lanka",
    galleryImages: [
      "https://plus.unsplash.com/premium_photo-1723914073487-91df23fa3b72?q=80&w=687&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540202403-b7abd6747a18?q=80&w=1169&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1610641903869-90de37a98c7f?q=80&w=1169&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 6-day Ancient Ceylon tour package offers you the best days of your life inside the ancient kingdoms in Sri Lanka.",
    price: 370.00,
    pricePerNight: "$74",
    category: "Beach",
    overview: [
      "Celebrate your love with an unforgettable romantic escape in paradise. This specially curated honeymoon package combines luxury, romance, and adventure in stunning locations.",
      "From candlelit beach dinners to private villa stays, every detail is designed to create magical moments. Enjoy couples' spa treatments, sunset cruises, and intimate experiences.",
      "Discover secluded beaches, romantic hill country retreats, and luxury accommodations. This is more than a vacation—it's the beginning of your journey together, wrapped in tropical bliss."
    ],
    policies: {
      travelValidity: "Available year-round with special honeymoon packages and upgrades",
      cancellation: "Free cancellation up to 14 days before departure. 50% refund for 7-14 days notice. Special consideration for wedding date changes.",
      guaranteedDates: "Flexible dates to accommodate your wedding schedule",
      bookingPolicy: [
        "40% deposit required at booking to secure romantic accommodations.",
        "Final payment due 21 days before departure.",
        "Complimentary honeymoon perks included - champagne, floral arrangements, and special dining experiences."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Arrival & Beach Resort",
        images: ["https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Beach Romance",
        images: ["https://plus.unsplash.com/premium_photo-1723914073487-91df23fa3b72?q=80&w=687&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Private Island Tour",
        images: ["https://images.unsplash.com/photo-1540202403-b7abd6747a18?q=80&w=1169&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Spa & Relaxation",
        images: ["https://images.unsplash.com/photo-1610641903869-90de37a98c7f?q=80&w=1169&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Farewell Breakfast",
        images: ["https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-8",
    img: "https://images.unsplash.com/photo-1594391045445-64ea3c6ff16b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "ANCIENT OF CEYLON",
    headline: "Timeless Treasures: Walk Among Ceylon's Ancient Kingdoms",
    galleryImages: [
      "https://images.unsplash.com/photo-1594391045445-64ea3c6ff16b?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1196&auto=format&fit=crop"
    ],
    rating: 4.9,
    duration: "6 Days / 5 Nights",
    desc: "The 6-day Ancient Ceylon tour package offers you the best days of your life inside the ancient kingdoms in Sri Lanka.",
    price: 149.00,
    pricePerNight: "$30",
    category: "Ancient",
    overview: [
      "Step back in time and explore the magnificent ancient kingdoms of Sri Lanka. This archaeological adventure takes you through centuries of history, from sacred Buddhist sites to impressive fortresses.",
      "Witness the engineering marvels of ancient Ceylon, including the legendary Sigiriya Rock Fortress, the sacred city of Anuradhapura, and the medieval capital of Polonnaruwa.",
      "Discover intricate cave temple paintings, giant Buddha statues, ancient irrigation systems, and ruins of royal palaces. Perfect for history buffs and culture enthusiasts seeking to understand Sri Lanka's rich past."
    ],
    policies: {
      travelValidity: "Available throughout the year. Pilgrimage season (December-January) may have higher crowds.",
      cancellation: "Free cancellation up to 10 days before departure. 50% refund for 5-10 days notice. 25% refund within 5 days.",
      guaranteedDates: "Weekly guaranteed departures with minimum 2 participants",
      bookingPolicy: [
        "30% deposit required at booking for this cultural heritage tour.",
        "Balance payment due 14 days before departure.",
        "Entrance fees to all heritage sites included in the package price."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Airport to Sigiriya",
        images: ["https://images.unsplash.com/photo-1594391045445-64ea3c6ff16b?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Anuradhapura",
        images: ["https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?q=80&w=1171&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Polonnaruwa",
        images: ["https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Sigiriya Rock",
        images: ["https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=687&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Dambulla & Kandy",
        images: ["https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1196&auto=format&fit=crop"]
      },
      {
        day: 6,
        location: "Return to Colombo",
        images: ["https://images.unsplash.com/photo-1736142260757-6effc558100a?q=80&w=1073&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-9",
    img: "https://plus.unsplash.com/premium_photo-1661876643563-00656cbd1d41?q=80&w=1180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "PARADISE NATURE & WILD LIFE",
    headline: "Wild Encounters: Safari Through Sri Lanka's Untamed Beauty",
    galleryImages: [
      "https://plus.unsplash.com/premium_photo-1661876643563-00656cbd1d41?q=80&w=1180&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581420456035-58b8efadcdea?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1168&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1196&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "Perfect getaway for visitors who want to experience the cool breezy hill country of Sri Lanka",
    price: 370.00,
    pricePerNight: "$74",
    category: "Wildlife",
    overview: [
      "Embark on an unforgettable wildlife adventure through Sri Lanka's pristine national parks and nature reserves. Encounter elephants, leopards, sloth bears, and hundreds of bird species in their natural habitat.",
      "Experience thrilling safari drives in Yala and Udawalawe National Parks, home to one of the highest concentrations of leopards in the world. Witness elephants gathering at waterholes and exotic birds in tropical forests.",
      "This tour combines wildlife safaris with scenic nature experiences—from coastal wetlands to montane forests. Perfect for nature photographers and wildlife enthusiasts seeking authentic encounters with Sri Lankan fauna."
    ],
    policies: {
      travelValidity: "Best wildlife viewing: February to July. Available year-round with seasonal variations.",
      cancellation: "Free cancellation up to 10 days before departure. 50% refund for 5-10 days notice due to safari permit bookings.",
      guaranteedDates: "Guaranteed departures with minimum 2 participants",
      bookingPolicy: [
        "40% deposit required at booking to secure safari permits.",
        "Full payment due 14 days before departure.",
        "Safari jeep bookings and park permits are included and non-refundable within 10 days."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Udawalawe Safari",
        images: ["https://images.unsplash.com/photo-1581420456035-58b8efadcdea?q=80&w=1171&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Yala National Park",
        images: ["https://plus.unsplash.com/premium_photo-1661876643563-00656cbd1d41?q=80&w=1180&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Bird Watching",
        images: ["https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1168&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Sinharaja Rainforest",
        images: ["https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1196&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Return Journey",
        images: ["https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop"]
      }
    ]
  },
  {
    id: "tour-10",
    img: "https://images.unsplash.com/photo-1581420456035-58b8efadcdea?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "SERENDIPITY OF SRI LANKA",
    headline: "Complete Serendipity: The Ultimate Sri Lankan Adventure",
    galleryImages: [
      "https://images.unsplash.com/photo-1581420456035-58b8efadcdea?q=80&w=1171&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?q=80&w=1196&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "This package give you the perfect stays for your holiday. Starting the tour with the exclusive experience in Negombo in the western coastline.",
    price: 370.00,
    pricePerNight: "$74",
    category: "Heritage",
    overview: [
      "Experience the complete serendipity of Sri Lanka with this comprehensive tour that showcases everything the island has to offer—from pristine beaches to ancient temples, from wildlife safaris to tea plantations.",
      "This ultimate adventure combines the best of Sri Lankan experiences in one perfectly balanced itinerary. Explore cultural treasures, relax on tropical beaches, encounter wildlife, and immerse yourself in local traditions.",
      "Perfect for first-time visitors who want to see it all, this tour offers a taste of every Sri Lankan wonder. Create a lifetime of memories as you discover why this island is called the Pearl of the Indian Ocean."
    ],
    policies: {
      travelValidity: "Available year-round with seasonal highlights in different regions",
      cancellation: "Free cancellation up to 14 days before departure. 50% refund for 7-14 days notice. 25% refund for 3-7 days notice.",
      guaranteedDates: "Guaranteed weekly departures throughout the year",
      bookingPolicy: [
        "35% deposit required at booking for this comprehensive package.",
        "Full payment due 21 days before departure.",
        "All permits, entrance fees, and activities included in package price."
      ]
    },
    itinerary: [
      {
        day: 1,
        location: "Negombo",
        images: ["https://images.unsplash.com/photo-1608633072779-82825c52f8f3?q=80&w=1170&auto=format&fit=crop"]
      },
      {
        day: 2,
        location: "Cultural Triangle",
        images: ["https://images.unsplash.com/photo-1600011689032-8b628b8a8747?q=80&w=1074&auto=format&fit=crop"]
      },
      {
        day: 3,
        location: "Wildlife Safari",
        images: ["https://images.unsplash.com/photo-1581420456035-58b8efadcdea?q=80&w=1171&auto=format&fit=crop"]
      },
      {
        day: 4,
        location: "Hill Country",
        images: ["https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop"]
      },
      {
        day: 5,
        location: "Beach Paradise",
        images: ["https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop"]
      }
    ]
  },
];

/**
 * Dynamically generate tour data
 * Can be extended to fetch from API or apply filters
 */
export function getTourData() {
  return {
    tours: baseToursData,
    totalTours: baseToursData.length,
    categories: ["All", "Ancient", "Heritage", "Hill", "Beach", "Wildlife"],
  };
}

/**
 * Get tours by category
 */
export function getToursByCategory(category: string): Tour[] {
  if (category === "All") {
    return baseToursData;
  }
  return baseToursData.filter((tour) => tour.category === category);
}

/**
 * Get a single tour by ID
 */
export function getTourById(id: string): Tour | undefined {
  return baseToursData.find((tour) => tour.id === id);
}

export const tourData = getTourData();
