"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (e: any, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{
        backdropFilter: "blur(10px)",
      }}
      animate={{
        backgroundColor: isScrolled
          ? "rgba(255, 255, 255, 1)"
          : "rgba(255, 255, 255, 0.1)",
        backdropFilter: isScrolled ? "none" : "blur(10px)",
      }}
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className={`text-2xl font-bold ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          Слономойка
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="#values"
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            onClick={(e) => handleSmoothScroll(e, "#values")}
          >
            Ценности
          </Link>
          <span
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
          >
            |
          </span>
          <Link
            href="#events"
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            onClick={(e) => handleSmoothScroll(e, "#events")}
          >
            Мероприятия
          </Link>
          <span
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
          >
            |
          </span>
          <Link
            href="#rules"
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            onClick={(e) => handleSmoothScroll(e, "#rules")}
          >
            Правила сообщества
          </Link>
          <span
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
          >
            |
          </span>
          <Link
            href="#form"
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            onClick={(e) => handleSmoothScroll(e, "#form")}
          >
            Анкета на вступление
          </Link>
          <span
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
          >
            |
          </span>
          <Link
            href="#team"
            className={`text-lg ${isScrolled ? "text-black" : "text-white"}`}
            onClick={(e) => handleSmoothScroll(e, "#team")}
          >
            Команда
          </Link>
        </div>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu
                size={20}
                className={`${isScrolled ? "text-black" : "text-white"}`}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="space-y-5 mt-14 text-right">
                <Link
                  href="#values"
                  onClick={(e) => handleSmoothScroll(e, "#values")}
                >
                  Ценности
                </Link>
                <Link
                  href="#events"
                  onClick={(e) => handleSmoothScroll(e, "#events")}
                >
                  Мероприятия
                </Link>
                <Link
                  href="#rules"
                  onClick={(e) => handleSmoothScroll(e, "#rules")}
                >
                  Правила сообщества
                </Link>
                <Link
                  href="#form"
                  onClick={(e) => handleSmoothScroll(e, "#form")}
                >
                  Анкета на вступление
                </Link>
                <Link
                  href="#team"
                  onClick={(e) => handleSmoothScroll(e, "#team")}
                >
                  Команда
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
