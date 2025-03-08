"use client";
import IAm from "@/components/IAm";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col sm:flex-row justify-between sm:items-center w-full h-full p-4 gap-y-2 sm:gap-x-2"
      >
        <ProfessionalSummary />
        <IAm />
      </div>
      <Projects />
    </>
  );
}
