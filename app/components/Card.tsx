export default function Card() {
  return (
    <div className="w-full max-w-[324px] aspect-card rounded-4xl relative overflow-hidden">
      <div className="absolute inset-4 rounded-4xl bg-white flex flex-col">
        <div className="flex-1 border-8 rounded-4xl border-gray-300 bg-pattern bg-cover"></div>
        <div className="flex-1"></div>
      </div>
      <style jsx>{`
        .bg-pattern {
          background-image: url(/assets/background.webp);
        }
      `}</style>
    </div>
  );
}
