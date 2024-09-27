'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'

export const PublicationLogosComponent = () => {
  const publications = [
    { name: 'SIOP', icon: '/images/siop.png', width: 74, height: 64 },
    { name: 'Forbes', icon: '/images/Forbes_Logo-BlackOnTrns@svg.svg', width: 120, height: 80 },
    { name: 'SHRM', icon: '/images/shrm-grey.png', width: 92, height: 72 },
    { name: 'TechCrunch', icon: '/images/techcrunch-seeklogo.svg', width: 64, height: 64 },
  ]

  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Featured In</h2> */}
        <Card className="bg-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
            {publications.map((pub) => (
              <div key={pub.name} className="flex flex-col items-center justify-center">
                <div
                  className="relative mb-2 grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: `${pub.width}px`, height: `${pub.height}px` }}
                >
                  <Image
                    src={pub.icon}
                    alt={`${pub.name} logo`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                {/* <span className="text-sm font-medium text-muted-foreground">{pub.name}</span> */}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}