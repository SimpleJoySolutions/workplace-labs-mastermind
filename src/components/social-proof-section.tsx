import { Image } from "@/components/ui/image";

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
      name: "Vince Carbone",
      title: "HR Manager",
      company: "Eaglestone Equipment",
      photo: "/images/vince-square.jpg",
      quote:
        "I am so glad that I stepped out of my comfort zone to participate, I look forward to being a part of the ongoing network for continued learning.",
    },
    {
      name: "Montarious Usher",
      title: "Director of HR Effectiveness",
      company: "Duracell Inc.",
      photo: "/images/montarious-square.jpg",
      quote:
        "Last year, I took a leap and joined the very first cohort of the AI for HR Mastermind course, and it was a great experience!",
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
