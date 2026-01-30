import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

export interface ExpandableCardItem {
  title: string;
  description: string;
  content: string | (() => React.ReactNode);
}

export function HoverEffect({
  items,
  className,
}: {
  items: ExpandableCardItem[];
  className?: string;
}) {
  const [active, setActive] = useState<ExpandableCardItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 h-full w-full z-10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-primary rounded-full h-8 w-8 hover:bg-primary/80 transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-2xl flex flex-col bg-card dark:bg-card sm:rounded-3xl overflow-hidden border border-primary/30"
            >
              <div>
                <div className="flex flex-col gap-4 p-8">
                </div>
                <div className="pt-4 relative px-8 pb-8">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground text-base leading-relaxed"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className={cn("w-full flex justify-center", className)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
          {items.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-8 flex flex-col justify-center hover:bg-card/60 dark:hover:bg-card/60 rounded-2xl cursor-pointer bg-card/40 border border-primary/20 backdrop-blur-md transition-all duration-300 hover:border-primary/50 group"
            >
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-bold text-gradient-gold text-lg md:text-xl lg:text-2xl"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-muted-foreground mt-2 text-sm md:text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-primary-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

