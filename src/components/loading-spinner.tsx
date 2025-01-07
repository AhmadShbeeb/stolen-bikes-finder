import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface Props {
  centerScreen?: boolean;
}

export function LoadingSpinner({ centerScreen = true }: Props) {
  return (
    <div
      className={cn('flex items-center justify-center', {
        'fixed inset-0 h-full': centerScreen,
      })}
    >
      <Loader2 className="h-10 w-10 animate-spin text-primary" aria-hidden="true" />
    </div>
  );
}
