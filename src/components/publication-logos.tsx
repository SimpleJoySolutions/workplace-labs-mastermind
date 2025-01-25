"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

export const PublicationLogosComponent = () => {
  const publications = [
    {
      name: "TechCrunch",
      icon: "/images/techcrunch-seeklogo.svg",
      width: 64,
      height: 64,
      url: "https://techcrunch.com/author/neil-morelli/",
    },
    {
      name: "Forbes HRC",
      icon: "/images/forbs-hrc.png",
      width: 120,
      height: 80,
      url: "https://www.forbes.com/councils/forbeshumanresourcescouncil/people/neilmorelli/",
    },
    {
      name: "SHRM",
      icon: "/images/shrm-grey.png",
      width: 92,
      height: 72,
      url: "https://www.shrm.org/search-results#q=neil%20morelli&sortCriteria=relevancy%2C%40ytlikecount%20descending",
    },
    {
      name: "SIOP",
      icon: "/images/siop.png",
      width: 74,
      height: 64,
      url: "https://www.siop.org/Research-Publications/TIP/TIP-Back-Issues/2018/July/ArtMID/20677/ArticleID/1366/7-Questions-and-Answers-About-AI-and-I-O",
    },
  ];

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h4 className="text-xl font-bold text-center mb-2">
          Our AI for HR thought leadership has been featured in:
        </h4>
        <Card className="bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
            {publications.map((pub) => (
              <div
                key={pub.name}
                className="flex flex-col items-center justify-center"
              >
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: `${pub.width}px`, height: `${pub.height}px` }}
                >
                  <Image
                    src={pub.icon}
                    alt={`${pub.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
                {/* <span className="text-sm font-medium text-muted-foreground">{pub.name}</span> */}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
