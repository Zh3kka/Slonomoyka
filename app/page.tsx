"use client";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { LinkPreview } from "@/components/ui/link-preview.tsx";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const values = document.querySelectorAll(".value-card");
      const triggerHeight = window.innerHeight * 0.7;
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
            <BackgroundGradient
              key={index}
              className="value-card text-white p-4"
            >
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
      <main className="container mx-auto space-y-10">
        <h1>
          <TextGenerateEffect
            words="Самая важная объединяющая, которая будет трансформироваться у
            каждого в своё. Может ты захочешь запустить с нами хакатон, может ты
            решишь пробежать марафон или взобраться на Эльбрус. Это культурный
            код, который объединяет наше сообщество, мы ни ждем, что будем
            частью чего-то, мы стремимся сделать все вокруг частью себя и своего
            мира."
            className="text-center"
          />
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-x-4">
          <Image
            src={"/2person.jpg"}
            alt={"Фото участника"}
            width={290}
            height={290}
            className="rounded-full shadow-sm"
          />
          <p className="max-w-lg text-center text-2xl">
            &quot;Душевное пространство для развития всех 4 видов интеллекта и
            восстановления всех 4 видов энергии. Если бы Слономойки не
            существовало её обязательно стоило бы придумать&quot;
          </p>
        </div>
        <div id="events">
          <h1 className="text-center text-3xl font-bold">Мероприятие слонов</h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {[
              { src: "/phd2.jpg", alt: "PhDays2" },
              {
                src: "/installation.jpeg",
                alt: "Тотальная Инсталяция CUDO3 LIBRE",
              },
              { src: "/zabeg.jpeg", alt: "Красочный забег" },
              { src: "/techrec2024.jpg", alt: "Techrec2024" },
              { src: "/breakfast.jpeg", alt: "Завтраки слонов" },
            ].map((event, index) => (
              <div key={index} className="relative group">
                <Image
                  src={event.src}
                  alt={event.alt}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="rounded-lg absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">
                    {event.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <section className="container mx-auto my-12 px-4" id="rules">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Да, у нас тоже есть правила. Ведь слонов мыть - это вам не код писать.
        </h2>
        <p className="text-center italic mb-8">
          &quot;Ты же с кем попало не моешься в душе&quot; (с) Алиса
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Мы принимаем:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Открытых людей, которые делятся мнением, фотокарточками,
                интересными событиями из жизни или работы.
              </li>
              <li>
                Людей с разными увлечениями, верой, происхождением,
                политическими взглядами и сексуальной ориентацией.
              </li>
              <li>
                Открытые без оценочные обсуждения, для общественной или
                самостоятельной рефлексии.
              </li>
              <li>Мат - как способ выражения своих эмоций и не только.</li>
              <li>
                Идеи и вложение средств\ресурсов в совместное развитие и
                улучшения сообщества.
              </li>
              <li>
                Если вдруг, ты решил для себя покинуть сообщество, поблагодари
                участников и отправляйся в новое путешествие для себя - это то,
                что важно для нас.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Мы не принимаем:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Оценочное суждение, оскорбляющие тона и замалчивание своих
                эмоций.
              </li>
              <li>Стагнацию в собственном развитии (тело, разум, дух).</li>
              <li>Негибкость и неэмпатичность в отношении друг друга.</li>
              <li>
                Распространение рекламы и непроверенной информации (жестокий
                контент, насилие, пропаганда).
              </li>
              <li>Нарушение и не следование ценностям сообщества.</li>
              <li>
                Администратор оставляет за собой право временно исключать из
                сообщества участников, которые не были активны в течении
                квартала.
              </li>
            </ul>
          </div>
        </motion.div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Telegram чат:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>flood</strong> - все и ничего, основной трэд коммуникации
            </li>
            <li>
              <strong>sport</strong> - челенджи, походы в зал, фотки с пробежки,
              все что касается темы спорта
            </li>
            <li>
              <strong>need help</strong> - нетворкинг, как рабочий, так и для
              лучшей жизни слонов
            </li>
            <li>
              <strong>Коллабы</strong> - трэд создан специально под участие
              нашей команды в мероприятиях
            </li>
            <li>
              <strong>conferences||events</strong> - сюда мы скидываем ссылки на
              интересные события, которые интересны нам под тэгами #hard #soft,
              а уже договариваемся о том, пойдем туда или нет, во flood
            </li>
            <li>
              <strong>Всё о слонах</strong> - правила, ценности сообщества,
              новости из мира личной жизни каждого. Этот трэд ведет Алиса
            </li>
            <li>
              <strong>Слоны идут</strong> - трэд для 100% мероприятий
              сообщества, которые мы организуем сами или идем куда-то вместе.
              Тут публикуются детали мероприятия.
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Что такое Слономойка для участников сообщества?
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              src: "/1person.jpg",
              alt: "Участник 1",
              text: "Приятные люди, которые гармонично дополняют друг друга разными полезными советами. Мне нравится то, что коллектив открыт, он может принять разные мнения и разного тебя. Сразу при встрече я ощутил себя своим человеком. Разные крутые ребята, мемы, веселье, передача опыта и завтраки с Алисой - все это и много крутого можно найти в Слономойке.",
            },
            {
              src: "/2person.jpg",
              alt: "Участник 2",
              text: "Принципы синергетики - то, что закладывают в любую систему основу для возникновения новаций. Полезных и для окружающего мира, и, в случае нашего сообщества, каждого его члена в отдельности. Слономойка - это именно такая социальная система, для меня ценная тем, что здесь есть фокусировка на важных ценностях, таких как наследие человека, есть взаимодействие людей, благодаря которому рождаются интересные проекты и возможности. Центр сопряжения мыслей и стремлений)",
            },
            {
              src: "/3person.jpg",
              alt: "Участник 3",
              text: "Место где собрались разные люди, с разными интересами. Могут поднять как высокие философские темы, так и поскидывать мемы и параллельно предлагать активности, даже баню! Отличное место, чтобы узнать других людей и познать себя.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={290}
                height={290}
                className="mx-auto rounded-full shadow-lg"
              />
              <p className="mt-4">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="container mx-auto my-12 px-4" id="form">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Откликнулось? Давай к нам!
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-center">
          <li>
            Переходишь по{" "}
            <LinkPreview
              url="https://docs.google.com/forms/d/e/1FAIpQLSc6mU3sK7qyzMLhBCH4Ppq3mANZ4FHl6sp_yOPwMA9mDeZUvA/viewform"
              className="text-blue-500 font-semibold"
            >
              ссылке
            </LinkPreview>
          </li>
          <li>Заполняешь анкету</li>
          <li>Ждешь акцепт от модератора</li>
        </ol>
        <p className="mt-6 text-center text-lg">Увидимся в Слономойке!</p>
        <p className="mt-2 text-center text-sm">
          По вопросам сотрудничества писать Алисе fadeevaalisa889@gmail.com
        </p>
      </section>
    </div>
  );
}
