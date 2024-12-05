import Image from 'next/image';

type Testimonial = {
  name: string;
  title: string;
  company: string;
  photo: string;
  quote: string;
};

export const SocialProofSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Jane Doe',
      title: 'Senior Data Scientist',
      company: 'Google',
      photo: '/images/jonathan-square.webp',
      quote: 'Joining the mastermind was one of the best decisions of my career. The insights I gained have been invaluable.',
    },
    {
      name: 'John Smith',
      title: 'Software Engineer',
      company: 'Toyota Connected',
      photo: '/images/jonathan-square.webp',
      quote: 'This community has helped me grow exponentially, both personally and professionally.',
    },
    {
      name: 'Emily Brown',
      title: 'AI Researcher',
      company: 'Waymo',
      photo: '/images/jonathan-square.webp',
      quote: "The mentorship and resources here are unmatched. I wouldn't be where I am today without this mastermind.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Alumni Are Saying
        </h2>
        <p className="mt-4 text-gray-600">
          Hear from professionals who have benefited from the mastermind.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 p-6 shadow-md rounded-lg flex flex-col items-center"
            >
              <Image
                src={testimonial.photo}
                alt={`${testimonial.name}'s profile picture`}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <p className="mt-4 text-lg font-medium text-gray-700 italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-semibold">{testimonial.name}</p>
                <p>{testimonial.title}</p>
                <p>{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 