"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const ProblemSolution = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Problem Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000"
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
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000"
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
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000"
                alt={t("problem_solution.solution_image_alt1")}
                className="rounded-lg object-cover w-full h-[300px]"
              />
            </div>
          </div>

          <div>
            <img
              src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600607687939-ce8a6c25118c%3Fq%3D80%26w%3D2400%26auto%3Dformat%26fit%3Dcrop&w=750&q=75"
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