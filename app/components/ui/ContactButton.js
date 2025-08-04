'use client';

import dynamic from 'next/dynamic';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

// This component will only be rendered on the client side
function ContactButtonClient() {
  return (
    <div className={`fixed bottom-5 right-5 z-50`}>
      <Link
        href="/contact"
        className="
          flex items-center justify-center 
          w-16 h-16 rounded-full 
          bg-red-500 hover:bg-red-600 
          transition-all duration-300
          animate-fadeInUp
        "
        aria-label="Contact Us"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      </Link>
    </div>
  );
}

// Export a dynamic version that doesn't use SSR
export default dynamic(() => Promise.resolve(ContactButtonClient), {
  ssr: false,
});
