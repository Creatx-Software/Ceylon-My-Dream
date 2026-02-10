import { NextResponse } from 'next/server';

export async function GET() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Tours', href: '#' },
    { name: 'Destinations', href: '#' },
    { name: 'Adventure', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '#', active: true }
  ];

  return NextResponse.json(navLinks);
}
