"use client";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ReactTyped } from "react-typed";

export default function Home() {
  const controls = useAnimation();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax") as HTMLElement;
      if (parallax) {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        parallax.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }

      const triggerHeight = window.innerHeight * 0.7;
      const values = document.querySelectorAll(".value-card");
      values.forEach((value) => {
        const rect = value.getBoundingClientRect();
        if (rect.top <= triggerHeight) {
          controls.start({ opacity: 1, y: 0 });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div>
      <Head>
        <title>Слономойка</title>
      </Head>
      <Navbar />
      <div
        className="parallax min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/bgsecond.jpg)" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center h-screen text-white text-center px-4"
        >
          <div className="text-right">
            <h1 className="text-5xl md:text-7xl font-bold">Слономойка</h1>
            <p className="text-2xl md:text-4xl">у Алисы</p>
          </div>
          <p className="mt-24 font-semibold text-2xl md:text-5xl">
            Сообщество для тех, кто{" "}
            <ReactTyped
              strings={["работает в IT", "осознал свои ценности", "про людей"]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </p>
        </motion.div>
      </div>
      <div id="values" className="bg-white text-center py-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Ценности сообщества
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto px-4">
          {[
            {
              title: "Самореализация",
              description:
                "это то, на что ты тратишь своё драгоценное время и как ты его тратишь, для нас также важно. Будь ты строителем или разработчиком, время, которые ты тратишь на своё развитие мы ценим, уважаем и поддерживаем.",
            },
            {
              title: "Люди",
              description:
                "это ты, это я, это мы. Мы все разные и каждого человека на своем пути мы благодарим и радуемся, что он поделился своим опытом, знанием, улыбкой.",
            },
            {
              title: "Самоактуализация",
              description:
                "то, к чему не многие из нас пришли до конца, но возможно как раз это изменится на Слономойке. Найти своих людей, чтобы понять кто ты, то, что движет нами и заставляет вновь и вновь задуматься.",
            },
            {
              title: "Счастье",
              description:
                "Жить эту жизнь - мы все с вами уже прошли какой-то путь и он нас с вами привел в эту точку, а в ней, мы почему-то хотим наслаждаться и радоваться. В этой точке, результат для нас менее интересен, чем сам процесс.",
            },
            {
              title: "Наследие",
              description:
                "Самая важная объединяющая, которая будет трансформироваться у каждого в своё. Может ты захочешь запустить с нами хакатон, может ты решишь пробежать марафон или взобраться на Эльбрус. Это культурный код, который объединяет наше сообщество, мы ни ждем, что будем частью чего-то, мы стремимся сделать все вокруг частью себя и своего мира.",
            },
          ].map((value, index) => (
            <BackgroundGradient key={index} className="text-white p-4">
              <div className="front">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  {value.title}
                </h3>
              </div>
              <div className="back">
                <p className="text-base md:text-lg">{value.description}</p>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
}
