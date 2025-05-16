"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Work() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = t("work.projects", { returnObjects: true });

  return (
    <div
      className={`  mx-auto px-4 pt-40 bg-gradient-to-bl from-gray-900 via-black to-gray-800 min-h-screen md:px-36 pb-12  ${
        t("dir") === "rtl" ? "text-right" : "text-left"
      }`}
    >
      <h2
        className={`text-4xl font-bold text-center mb-12 text-white ${
          t("dir") === "rtl" ? "font-arabic" : ""
        }`}
      >
        {t("work.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:-translate-y-3 border border-white/20 group relative cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative overflow-hidden h-72">
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
            <div className="p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <h3 className={`font-bold text-2xl mb-3 text-white transform transition-all duration-500 group-hover:translate-y-[-5px] ${t("dir") === "rtl" ? "text-right" : "text-left"}`}>
                {project.title}
              </h3>
              <p className={`text-gray-200/90 leading-relaxed transform transition-all duration-500 group-hover:translate-y-[-5px] ${t("dir") === "rtl" ? "text-right" : "text-left"}`}>
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            className={`bg-gray-800 rounded-2xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto ${
              t("dir") === "rtl" ? "text-right" : "text-left"
            }`}
          >
            <div className="flex justify-between items-center mb-8">
              <h3
                className={`text-3xl font-bold text-white ${
                  t("dir") === "rtl" ? "font-arabic" : ""
                }`}
              >
                {selectedProject.title}
              </h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white text-2xl transition-colors duration-200"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <h4
                    className={`text-2xl font-semibold mb-3 text-white ${
                      t("dir") === "rtl" ? "font-arabic" : ""
                    }`}
                  >
                    {t("work.project_description")}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.details}</p>
                </div>

                <div>
                  <h4
                    className={`text-2xl font-semibold mb-3 text-white ${
                      t("dir") === "rtl" ? "font-arabic" : ""
                    }`}
                  >
                    {t("work.features")}
                  </h4>
                  <ul
                    className={`space-y-3 ${
                      t("dir") === "rtl" ? "pr-4" : "pl-5"
                    }`}
                  >
                    {selectedProject.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`text-gray-300 list-disc ${
                          t("dir") === "rtl" ? "mr-2" : ""
                        }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4
                    className={`text-2xl font-semibold mb-3 text-white ${
                      t("dir") === "rtl" ? "font-arabic" : ""
                    }`}
                  >
                    {t("work.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-2xl font-semibold mb-3 text-white ${
                      t("dir") === "rtl" ? "font-arabic" : ""
                    }`}
                  >
                    {t("work.project_link")}
                  </h4>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
                  >
                    {selectedProject.url}
                  </a>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
