import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";

export default function Card() {
  return (
    <div className="w-full max-w-[356px] aspect-card rounded-4xl relative overflow-hidden">
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
          <div className="bg-black shadow-[rgba(0,0,0,0.8)_1px_1px_15px] p-4 absolute bottom-0 inset-x-0 text-gray-500 text-xs rounded-2xl translate-y-1/2 flex space-x-3">
            <span className="space-x-1 flex items-center">
              <b className="text-white text-lg">10</b>
              <span className="line-clamp-1">Reputation</span>
            </span>
            <span className="space-x-1 flex items-center">
              <b className="text-white text-lg">103</b>
              <span className="line-clamp-1">Posts read</span>
            </span>
          </div>
        </div>
        <div className="flex-1 text-black rounded-4xl px-2 pb-2">
          <div className="shadow-[rgba(0,0,0,0.3)_1px_1px_1px] h-full rounded-4xl px-4 relative overflow-hidden">
            <div className="pt-8">
              <h1 className="text-2xl font-bold">Max Dewynter</h1>
              <div className=" text-xs space-x-2">
                <span>@maxlearns2code</span>
                <span className="text-gray-400">2024</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-xs flex flex-wrap gap-2">
              {[
                "#react",
                "#nextjs",
                "#typescript",
                "#tailwindcss",
                "#frontenddev",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-black px-2 py-1 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <div className="w-[50%] absolute bottom-0 left-0 bg-red rounded-tr-4xl p-3 flex justify-between">
                <Icons name="react" className="h-[18px] w-[18px]" />
                <Icons name="next" className="h-[18px] w-[18px]" />
                <Icons name="typescript" className="h-[18px] w-[18px]" />
                <Icons name="tailwind" className="h-[18px] w-[18px]" />
              </div>
              <div className="w-[50%] absolute bottom-0 right-0 bg-black text-white rounded-tl-4xl p-3 flex justify-between">
                <Link
                  tabIndex={0}
                  aria-label="take a look at my linkedin profile"
                  href="https://www.linkedin.com/in/maxime-dewynter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons name="linkedin" className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  tabIndex={0}
                  aria-label="take a look at my github profile"
                  href="https://github.com//maxlearns2code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons name="github" className="h-[18px] w-[18px]" />
                </Link>
                <Link
                  tabIndex={0}
                  aria-label="send me an email"
                  href="mailto:maxdevvynter@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons name="mail" className="h-[18px] w-[18px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-pattern {
          background-image: url(/assets/background.webp);
        }
      `}</style>
    </div>
  );
}
