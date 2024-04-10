import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import data from "../lib/data.json";
import Icons from "./Icons";

export default function Card() {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const glareRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);
  const rotateX = useTransform(y, [0, 504], [-15, 15]);
  const rotateY = useTransform(x, [0, 356], [15, -15]);
  const rotateXSpring = useSpring(rotateX);
  const rotateYSpring = useSpring(rotateY);
  const tags = data.tags;
  return (
    <motion.div
      className="w-full max-w-[356px] aspect-card rounded-4xl relative overflow-hidden"
      onMouseMove={(e) => {
        if (!cardRef.current || !glareRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();
        const glareRect = glareRef.current.getBoundingClientRect();
        x.set(e.clientX - cardRect.left);
        y.set(e.clientY - cardRect.top);
        glareX.set(e.clientX - cardRect.left - glareRect.width / 2);
        glareY.set(e.clientY - cardRect.top - glareRect.height / 2);
      }}
      onMouseLeave={() => {
        if (!cardRef.current || !glareRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();
        x.set(cardRect.width / 2);
        y.set(cardRect.height / 2);
        glareX.set(-1000);
        glareY.set(-1000);
      }}
      ref={cardRef}
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
    >
      <motion.div
        className="bg-gradient-radial from-white from-20% to-white/0 to-70% opacity-25 absolute size-[600px]"
        style={{ x: glareX, y: glareY }}
        ref={glareRef}
      ></motion.div>
      <div className="absolute inset-4 rounded-4xl bg-white flex flex-col">
        <div className="flex-1 border-8 rounded-4xl border-gray-300 bg-[url(/assets/background.webp)] bg-cover relative">
          <Image
            src="/assets/portrait.jpg"
            alt="profile picture"
            width={150}
            height={150}
            style={{ objectFit: "cover" }}
            className="rounded-[48px] border-8 border-white -rotate-3 absolute left-[4%] top-[4%]"
          />
          <div className="bg-gray-900 shadow-[rgba(0,0,0,0.8)_1px_1px_15px] py-2 px-4 absolute bottom-0 inset-x-0 text-white text-xs rounded-2xl translate-y-1/2 flex space-x-4">
            <span className="space-x-2 flex items-center">
              <b className="text-lg">12</b>
              <span className="line-clamp-1">Repositories</span>
            </span>
            <span className="space-x-2 flex items-center">
              <b className="text-lg">250</b>
              <span className="line-clamp-1">Contributions</span>
            </span>
          </div>
        </div>
        <div className="flex-1 text-black rounded-4xl px-2 pb-2">
          <div className="shadow-[rgba(0,0,0,0.3)_1px_1px_1px] h-full rounded-4xl px-4 relative overflow-hidden">
            <div className="pt-6">
              <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
              <div className=" text-xs flex gap-3 text-gray-900">
                <b>{data.role}</b>
                <div className="flex items-center gap-1">
                  <FaLocationDot color="rgb(17 24 39 / var(--tw-text-opacity))" />
                  <span className="text-xs">{data.location}</span>
                </div>
              </div>
              <div className=" text-xs">
                <span>{data.description}</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="text-xs flex flex-wrap gap-1">
              {tags.map((e) => (
                <span
                  key={e.id}
                  className="border border-black px-2 py-1 rounded-lg"
                >
                  {e.tag}
                </span>
              ))}
            </div>
            <div>
              <div className="w-[50%] absolute bottom-0 left-0 bg-red rounded-tr-4xl px-4 py-3 grid grid-cols-5 gap-1">
                <Icons name="javascript" className="h-[18px] w-[18px]" />
                <Icons name="react" className="h-[18px] w-[18px]" />
                <Icons name="next" className="h-[18px] w-[18px]" />
                <Icons name="typescript" className="h-[18px] w-[18px]" />
                <Icons name="redux" className="h-[18px] w-[18px]" />
                <Icons name="sass" className="h-[18px] w-[18px]" />
                <Icons name="tailwind" className="h-[18px] w-[18px]" />
                <Icons name="figma" className="h-[18px] w-[18px]" />
                <Icons name="jest" className="h-[18px] w-[18px]" />
                <Icons name="framer" className="h-[18px] w-[18px]" />
              </div>
              <div className="w-[50%] absolute bottom-0 right-0 bg-gray-900 text-white rounded-tl-2xl py-3 px-4 flex justify-between">
                <Link
                  tabIndex={0}
                  aria-label="take a look at my linkedin profile"
                  href="https://www.linkedin.com/in/maxime-dewynter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                    <span className="sr-only">Linkedin link</span>
                  </div>
                </Link>
                <Link
                  tabIndex={0}
                  aria-label="take a look at my github profile"
                  href="https://github.com//maxlearns2code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                    <span className="sr-only">Github link</span>
                  </div>
                </Link>
                <Link
                  tabIndex={0}
                  aria-label="send me an email"
                  href="mailto:maxdevvynter@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                    <span className="sr-only">Email link</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
