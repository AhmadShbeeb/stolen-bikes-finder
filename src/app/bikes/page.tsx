import { SearchForm } from '@/components/forms/search-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search - Stolen Bikes',
  description:
    'Search and browse reported stolen bikes in your area. Help locate missing bicycles and prevent bike theft.',
};

export default function BikesPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="self-center text-center text-3xl font-bold">Search for nearby stolen bikes in Munich</h1>
      <SearchForm />
    </div>
  );
}
