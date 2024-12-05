import Image from 'next/image';

export const AlumniCompaniesSection = () => {
  const companies = [
    { name: 'Google', logo: '/logos/google.png', url: 'https://google.com' },
    { name: 'Duracell', logo: '/logos/duracell.png', url: 'https://duracell.com' },
    { name: 'Toyota Connected', logo: '/logos/toyota-connected.png', url: 'https://toyotaconnected.com' },
    { name: 'Eaglestone Inc', logo: '/logos/eaglestoneinc.png', url: 'https://eaglestoneinc.com' },
    { name: 'Waymo', logo: '/logos/waymo.png', url: 'https://waymo.com' },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Where Our Alumni Work
        </h2>
        <p className="mt-4 text-gray-600">
          Our alumni have made an impact in some of the world's leading companies.
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
                width={100}
                height={50}
                className="object-contain"
              />
            </a>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="/apply"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Join Them Today
          </a>
        </div>
      </div>
    </section>
  );
}; 