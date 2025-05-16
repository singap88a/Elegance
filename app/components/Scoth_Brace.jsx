"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import hero from "../../public/hero.png";
export default function ScotchBrace() {
  const { t } = useTranslation();

  return (
    <div className="from-gray-900 to-black min-h-screen bg-gradient-to-b text-white font-sans py-10 px-4 sm:px-6">
      {/* القسم العلوي مع الصور والنص */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* الصورة الأولى */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-auto"
        >
          <Image
            src={hero}
            alt={t("scotchBrace.images.dining")}
            width={250}
            height={160}
            className="rounded-2xl object-cover w-full max-w-[250px] h-40 sm:h-64"
          />
        </motion.div>

        {/* النص المركزي */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center flex-1"
        >
          <h1 className="font-serif font-semibold text-4xl sm:text-6xl lg:text-7xl mb-6 tracking-tight bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text">
            {t("scotchBrace.title")}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            {t("scotchBrace.description1")}
          </p>
        </motion.div>

        {/* الصورة الثانية */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-auto"
        >
          <Image
            src="https://raya.smartbrand-dev.com/ProblemSolutionSection/1111111.png"
            alt={t("scotchBrace.images.vase")}
            width={250}
            height={160}
            className="rounded-2xl object-cover w-full max-w-[250px] h-40 sm:h-64"
          />
        </motion.div>
      </div>

      {/* القسم السفلي */}
      <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row items-start gap-8">
        {/* النص الأول */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 min-w-0"
        >
          <h2 className="font-sans font-normal text-3xl sm:text-4xl tracking-wider mb-4">
            {t("scotchBrace.subtitle")}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            {t("scotchBrace.description2")}
          </p>
        </motion.div>

        {/* الصورة الكبيرة */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-auto lg:flex-1"
        >
          <Image
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000"
            alt={t("scotchBrace.images.dining2")}
            width={420}
            height={220}
            className="rounded-2xl object-cover w-full h-48 sm:h-56 lg:h-64"
          />
        </motion.div>

        {/* النص الثاني */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex-1 min-w-0 mt-8 lg:mt-0"
        >
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            {t("scotchBrace.description3")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}