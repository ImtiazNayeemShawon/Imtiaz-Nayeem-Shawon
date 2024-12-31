import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({ items, className, Lenght }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div
      className={cn(
        "grid grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4   py-10",
        className
      )}
    >
      {items?.slice(0, Lenght)?.map((item, idx) => (
        <motion.div
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#1b212d79] dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col  items-start gap-4 ">
              <div className=" bg-slate-800 rounded-full p-4">
                <Image
                  src={item?.Icon}
                  width={100}
                  height={100}
                  className="w-8 "
                  alt="#"
                />
              </div>
              <div>
                <p className="text-white text-[14px]">{item?.Name}</p>
                <p className="text-[#e2e8f0ba] text-[12px] max-sm:hidden">
                  {item?.Description}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-3 overflow-hidden bg-[#191919]  border border-[#191919] group-hover:border-[#323131] relative z-20",
        className
      )}
    >
      <div className="relative z-20">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h5 className={cn("text-zinc-100 font-semibold tracking-wide ", className)}>
      {children}
    </h5>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
