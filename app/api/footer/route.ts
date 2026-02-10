import { NextResponse } from 'next/server';

export async function GET() {
  const footerData = {
    quickLinks: [
      'Home',
      'About Us', 
      'Tours',
      'Destinations',
      'Gallery',
      'Blog',
      'Contact Us'
    ],
    moreLinks: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Sitemap'
    ],
    socialIcons: [
      'Facebook',
      'Twitter',
      'Instagram',
      'Linkedin'
    ]
  };

  return NextResponse.json(footerData);
}
