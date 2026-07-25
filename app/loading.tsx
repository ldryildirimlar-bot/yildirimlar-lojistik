export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex items-center gap-2" role="status" aria-label="Yükleniyor">
        <span className="h-2 w-2 animate-pulse rounded-full bg-gold [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-gold [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
      </div>
    </div>
  );
}
