import { NextResponse } from 'next/server';

export async function GET() {
  const contactCards = [
    {
      title: 'Office Address',
      text: 'Prefer to visit our office? Our travel experts are ready to assist you!',
      icon: 'MapPin',
      detail: 'No 626, Negombo Road, Dadugama, Jaela, Sri Lanka',
      delay: 0,
    },
    {
      title: 'Message Us',
      text: 'Send us your travel queries, and our team will reply as soon as possible!',
      icon: 'Mail',
      detail: 'info@ceylonmydream.com',
      delay: 0.15,
    },
    {
      title: 'Call Us Now',
      text: "Need assistance? Call us, and we'll make your travel planning!",
      icon: 'Phone',
      detail: '+94 1122 47 633\n+94 77 465 2922',
      delay: 0.3,
    },
  ];

  const benefits = [
    'Personalized Travel Planning',
    '24/7 Customer Support',
    'Fast & Secure Booking',
    'Local Travel Experts',
    'Exclusive Travel Deals',
  ];

  return NextResponse.json({
    contactCards,
    benefits
  });
}
