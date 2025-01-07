'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-10 py-1">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80">
            <Image src="/bike-logo.svg" alt="Bike" width={50} height={50} />
          </Link>

          <Button variant="ghost" asChild>
            <Link
              href="/bikes"
              className={pathname === '/bikes' ? 'bg-primary text-white hover:bg-primary/90 hover:text-white' : ''}
            >
              Search Stolen Bikes
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
