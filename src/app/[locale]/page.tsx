import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import RelatedProgrammes from '@/components/RelatedProgrammes';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "WACREN ATI - Africa Training Initiative",
  description: "WACREN's flagship technical capacity development programme for African research and education networks.",
  alternates: {
    canonical: 'https://ati.wacren.net/',
  },
  openGraph: {
    title: "WACREN ATI - Africa Training Initiative",
    description: "WACREN's flagship technical capacity development programme for African research and education networks.",
    url: 'https://ati.wacren.net',
    siteName: 'WACREN ATI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WACREN ATI - Africa Training Initiative',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "WACREN ATI - Africa Training Initiative",
    description: "WACREN's flagship technical capacity development programme for African research and education networks.",
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-outfit">
      <Navigation />
      
      <Hero />
      
      <About />
      
      <RelatedProgrammes />
      
      <Footer />
    </main>
  );
}
