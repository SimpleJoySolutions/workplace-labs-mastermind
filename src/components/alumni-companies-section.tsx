import Image from 'next/image';

export const AlumniCompaniesSection = () => {
  const companies = [
    { name: 'Google', logo: '/images/logo_google.webp', url: 'https://google.com', alt: 'Google company logo' },
    { name: 'Duracell', logo: '/images/logo_duracell.webp', url: 'https://duracell.com', alt: 'Duracell company logo' },
    { name: 'Toyota Connected', logo: '/images/logo_toyota_connected.webp', url: 'https://toyotaconnected.com', alt: 'Toyota Connected company logo' },
    { name: 'Eaglestone Inc', logo: '/images/logo_eaglestone.webp', url: 'https://eaglestoneinc.com', alt: 'Eaglestone Inc company logo' },
    { name: 'Waymo', logo: '/images/logo_waymo.webp', url: 'https://waymo.com', alt: 'Waymo company logo' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          AI for HR Mastermind Network
        </h2>
        <p className="mt-4 text-gray-600">
          Our alumni and members come from leading companies including:
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg hover:scale-105 transition-transform"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={130}
                height={50}
                className="object-contain filter grayscale"
              />
            </a>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeysTaenp0vmB4qtWRXItMwY-m1_pmTrmalKPWZjt6P5ymUTw/viewform?usp=sf_link"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Join Them Today
          </a>
        </div>
      </div>
    </section>
  );
}; 