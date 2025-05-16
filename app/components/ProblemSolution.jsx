"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import ProblemSolution_1 from "../../public/home/ProblemSolution_1.jpg";
import ProblemSolution_2 from "../../public/home/ProblemSolution_2.jpg";
import ProblemSolution_3 from "../../public/home/ProblemSolution_3.jpg";
import ProblemSolution_4 from "../../public/home/ProblemSolution_4.webp";
const ProblemSolution = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Problem Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src={ProblemSolution_1}
              alt={t("problem_solution.problem_image_alt1")}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>

          <div
            className={`space-y-6 ${
              t("dir") === "rtl" ? "md:text-right" : "md:text-left"
            }`}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text">
              {t("problem_solution.problem_title")}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("problem_solution.problem_description")}
            </p>
            <div>
            <Image
                src={ProblemSolution_2}
                alt={t("problem_solution.problem_image_alt2")}
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 ${
              t("dir") === "rtl" ? "md:text-right" : "md:text-left"
            }`}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-transparent bg-clip-text">
              {t("problem_solution.solution_title")}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t("problem_solution.solution_description")}
            </p>
            <div>
            <Image
                src={ProblemSolution_3}
                alt={t("problem_solution.solution_image_alt1")}
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>
          </div>

          <div>
            <Image
                src={ProblemSolution_4}
              alt={t("problem_solution.solution_image_alt2")}
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;