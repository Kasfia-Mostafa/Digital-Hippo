"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { PRODUCTS_CATAGORIES } from "../../Config";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/src/Hooks/use_on_click_outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);


// Return by esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    const documentListener: EventListener = (event: Event) =>
      handler(event as unknown as KeyboardEvent);
    document.addEventListener("keydown", documentListener);
    return () => {
      document.removeEventListener("keydown", documentListener);
    };
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCTS_CATAGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        const isOpen = index === activeIndex;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          ></NavItem>
        );
      })}
    </div>
  );
};

export default NavItems;
