import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      {/* Left-to-right legibility overlay — blends naturally into the image */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.9) 28%, rgba(5,5,5,0.68) 46%, rgba(5,5,5,0.34) 64%, rgba(5,5,5,0.08) 82%, transparent 100%)",
        }}
      />
    </div>
  );
}
