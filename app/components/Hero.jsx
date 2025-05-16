"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";

// استيراد الصورة الخلفية
import heroBg from "../../public/hero.png";

function Hero() {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="Home"
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95 z-0" />

      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col items-center text-center space-y-6 pt-40">
        {/* الشعار */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t("hero.title_part1")}{" "}
              <span className="text-yellow-400">
                {t("hero.title_highlight1")}
              </span>
              <br />
              {t("hero.title_part2")}{" "}
              <span className="text-yellow-400">
                {t("hero.title_highlight2")}
              </span>
            </h1>
            <p className="text-md md:text-lg text-gray-200 mt-4 max-w-xl mx-auto">
              {t("hero.description")}
            </p>
          </div>

          {/* الأزرار */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link href="/courses">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition px-6 py-3 rounded-full text-black font-semibold shadow-lg">
                {t("hero.explore_button")}
              </span>
            </Link>
            <Link href="/contact">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 transition px-6 py-3 rounded-full text-black font-semibold shadow-lg">
                {t("hero.contact_button")}
              </span>
            </Link>
          </div>
        </motion.div>

        {/* الشعارات */}
        <div className="mt-10 flex flex-wrap justify-center items-center text-xl">
          <img
            src="https://raya.smartbrand-dev.com/images-home/image2.png"
            alt=""
            className="w-[300px]"
          />
        </div>

        {/* صور Mindfulness */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white text-sm whitespace-nowrap"
              >
                <img
                  src="https://raya.smartbrand-dev.com/images-home/image3.png"
                  alt=""
                  className="     "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;