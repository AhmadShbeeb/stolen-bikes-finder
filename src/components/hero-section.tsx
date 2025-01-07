import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center space-y-8 text-center">
      <div className="relative mb-4 h-24 w-24">
        <Image src="/bike-logo.svg" alt="Bike Logo" fill className="object-contain" priority />
      </div>

      <h1 className="text-4xl font-bold md:text-6xl">Help Find Stolen Bikes</h1>

      <p className="text-md max-w-[26rem] text-muted-foreground md:max-w-[42rem] md:text-2xl">
        Join our community effort to recover stolen bicycles. Search through our database of reported bikes or report
        your stolen bike to increase the chances of recovery.
      </p>

      <Button size="lg" asChild>
        <Link href="/bikes">Search Stolen Bikes</Link>
      </Button>
    </section>
  );
}
