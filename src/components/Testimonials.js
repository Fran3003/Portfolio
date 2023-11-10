import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <AcademicCapIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Certificados
        </h1>
        <div className="flex flex-wrap -m-2">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <a
              href={testimonial.link} target="_blank"
              key={testimonial.image}
              className="sm:w-1/2 w-full h-full object-cover p-4">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-full h-full object-cover object-center hover:cursor-pointer"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
