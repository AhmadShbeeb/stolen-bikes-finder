'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex items-center justify-center">
      <p>Something went wrong!</p>
      <h1>{error.message || 'Something went wrong'}</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
