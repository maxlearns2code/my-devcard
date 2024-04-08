import Image from "next/image";

export default function Card() {
  return (
    <div className="w-full max-w-[324px] aspect-card rounded-4xl relative overflow-hidden">
      <div className="absolute inset-4 rounded-4xl bg-white flex flex-col">
        <div className="flex-1 border-8 rounded-4xl border-gray-300 bg-pattern bg-cover relative">
          <Image
            src="/assets/portrait.jpg"
            alt="profile picture"
            width={150}
            height={150}
            objectFit="cover"
            className="rounded-[48px] border-8 border-white -rotate-3 absolute left-[3%] top-[3%]"
          />
        </div>
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
