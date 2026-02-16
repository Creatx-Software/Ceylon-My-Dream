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
}

const baseToursData: Tour[] = [
  {
    id: "tour-1",
    img: "https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "OWN SWEET TIME ON THE BEACH",
    headline: "OWN SWEET TIME ON THE BEACH",
    galleryImages: [
      "https://images.unsplash.com/photo-1700739746391-26561c282181?q=80&w=735&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1170&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1168&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1173&auto=format&fit=crop"
    ],
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    desc: "The 7 days Own Sweet Time on the Beach tour package offers you the best experience on the beaches of southern Sri Lanka.",
    price: 370.00,
    pricePerNight: "$74",
    category: "Beach"
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
    category: "Heritage"
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
    category: "Hill"
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
    category: "Beach"
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
    category: "Heritage"
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
    category: "Hill"
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
    category: "Beach"
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
    category: "Ancient"
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
    category: "Wildlife"
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
    category: "Heritage"
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
