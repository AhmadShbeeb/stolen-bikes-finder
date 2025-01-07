'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { format } from 'date-fns';
import { Bike } from '@/types/bike';
import Image from 'next/image';

interface BikeCardProps {
  bike: Bike;
}

export function BikeCard({ bike }: BikeCardProps) {
  return (
    <Card className="flex flex-col justify-between overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-video">
        <Image
          src={bike?.thumb ?? '/bike-logo.svg'}
          alt={bike.title}
          fill
          className={bike?.thumb ? 'object-cover' : 'object-contain'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="flex flex-row items-center justify-between p-3">
        <h3 className="font-semibold">{bike.title}</h3>
      </CardHeader>

      <CardContent className="p-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {!!bike?.description ? bike.description : 'No description available'}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-3">
        {bike?.date_stolen && (
          <span className="font-semibold">Theft Date: {format(new Date(bike.date_stolen * 1000), 'MM/dd/yyyy')}</span>
        )}

        {bike?.stolen_location && (
          <Badge variant="secondary" className="max-w-[10rem] text-xs font-normal">
            {bike.stolen_location}
          </Badge>
        )}

        {/* FIX: Report date is not available in the API */}
        {/* <span className="font-bold">Report Date: {format(new Date(), 'MM/dd/yyyy')}</span> */}
      </CardFooter>
    </Card>
  );
}
