"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, InfoIcon, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["sustainable", "efficient", "reliable", "customizable", "innovative"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full pt-2">
      <div className="container mx-auto">
        <div className="flex gap-8 py-8 lg:py-16 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Sustainable Temperature Control <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-blue-600">Experience</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-blue-600"> BioPCM®</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              BioPCM® is a patented phase change material that absorbs and releases thermal energy during phase transitions. Unlike conventional PCMs, BioPCM® transitions between solid-to-gel and solid-to-solid states, providing precise temperature control from -75°C to 175°C while reducing energy consumption.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/pcm-whitepaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-4" variant="outline">
                Technical Specs <InfoIcon className="w-4 h-4" />
              </Button>
            </a>
            {/* <Button size="lg" className="gap-4" variant="outline">
              Technical Specs <InfoIcon className="w-4 h-4" />
            </Button> */}
            {/* <Button size="lg" className="gap-4 bg-blue-600 hover:bg-blue-700">
              Get a Quote <Users className="w-4 h-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
