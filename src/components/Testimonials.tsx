"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const testimonials = [
  {
    quote:
      "A brilliant software engineer! He always goes above and beyond to deliver features specifically tailored to the user's needs.",
    author: "Anh Tuan Pham, PhD, Founder of TT House and Garden",
  },
  {
    quote:
      "He is aware of sprint goals and deliverables, communicates well across cross-functional teams, and resolves conflicts with professionalism.",
    author: "Brendan Hoffman, CTO of RxPost",
  },
  {
    quote:
      "He delivers excellent code in a timely manner and knows the features he implements in and out.",
    author: "Dennis Tran, CTO of Vantasoft",
  },
  {
    quote:
      "If you ever need a guy who is a self starter and quick learner, look no further. He is the one.",
    author: "Peyman H. Rad, Esq., Senior Attorney at Rad Law Group, APLC",
  },
  {
    quote: "The sales record during Black Friday 2019 still belongs to him.",
    author: "Yama Nayl, Manager of Samsonite @ Milpitas",
  },
  {
    quote:
      "He involves me in the process as his design partner, even though I am not a developer. He is a great developer and a great person.",
    author: "Percy Yau, Girlfriend",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleOnDelay = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const [quote, quoteHelper] = useTypewriter({
    words: testimonials.map((testimonial) => testimonial.quote),
    delaySpeed: 3000,
    typeSpeed: 25,
    deleteSpeed: 10,
    loop: 0,
    onDelay: handleOnDelay,
  });

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="min-h-[200px] md:min-h-[150px] flex flex-col justify-between">
        <div className="mb-6">
          <p className="text-xl text-gray-700 italic">
            &ldquo;{quote}&ldquo; <Cursor cursorColor="blue" />
          </p>
        </div>
        <div
          className={cn(
            `text-right`,
            quoteHelper.isDelay ? "fade-in" : "opacity-0"
          )}
        >
          <p className="text-blue-700 font-medium">
            {testimonials[currentIndex === -1 ? 0 : currentIndex].author}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
