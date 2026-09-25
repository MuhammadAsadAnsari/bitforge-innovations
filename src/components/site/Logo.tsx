export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center">
      <img
        src="/logo.jpeg"
        alt="BitForge Innovations"
        className="h-9 w-auto object-contain"
      />
    </span>
  );
}
