'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';
import Image from 'next/image';

interface BikeCardProps {
  bike: any;
}

export function BikeCard({ bike }: BikeCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-video">
        {bike.images?.[0]?.url ? (
          <Image
            src={bike.images?.[0]?.url}
            alt={bike.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <ImageIcon className="h-full w-full rounded-md bg-slate-100" />
        )}
      </div>
      <CardHeader className="flex flex-row items-center justify-between p-3">
        <h3 className="font-semibold">{bike.title}</h3>
        <div className="flex items-center gap-2">
          {bike?.location && <Badge variant="secondary">{bike.location}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <p className="line-clamp-2 text-sm text-muted-foreground">{bike.description}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-3">
        <span className="text-lg font-bold">Theft Date: {bike.theftDate}</span>
        <span className="text-lg font-bold">Report Date: {bike.reportDate}</span>
      </CardFooter>
    </Card>
  );
}
