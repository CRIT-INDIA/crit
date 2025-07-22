'use client';

import Image from 'next/image';
import ServiceBlock from '../../components/ui/ServiceBlock';

export default function Implementation() {
  return (
    <div className="relative min-h-*">
      <div className="flex-1 w-full bg-[#0c1c3c] text-white pt-28 sm:pt-32 pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <ServiceBlock />
        </div>
      </div>
    </div>
  );
}
