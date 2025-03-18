export default function PageFailure({ error }: { error: Error | null }) {
  return (
    <main className="w-screen h-screen bg-muted flex flex-col gap-4 items-center justify-center">
      <p>{error?.message}</p>
      <p className="text-lg font-semibold text-primary">
        An error occurred. Please try again later.
      </p>
    </main>
  );
}
