"use client";

import { Image } from "@/components/ui/image";

export const AITransformationsSection = () => {
  return (
    <div className="section-inner">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/lines-w-circles.png"
            width={600}
            height={400}
            alt="AI Transformation Challenges"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center md:text-left mb-6">
            Most AI transformations...
          </h2>
          <ul className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-left space-y-4">
            <li>
              <h3 className="text-xl font-bold">
                Come with employees saying, "I am afraid for my job."
              </h3>
              <p>
                (We help you address the cultural element of a successful AI
                adoption.)
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                Have buyer's remorse after wasting a ton of time and money.
              </h3>
              <p>
                (We help you identify use cases that generate business results
                and have a high chance of success.)
              </p>
            </li>
            <li>
              <h3 className="text-xl font-bold">
                Come with questions about bias, accuracy, and legality.
              </h3>
              <p>
                (We help you develop a safe proof-of-concept you can show to
                stakeholders to get their buy-in.)
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
