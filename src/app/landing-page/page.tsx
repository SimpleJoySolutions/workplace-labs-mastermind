import React from 'react';
import Head from 'next/head';

function LandingPage() {
  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 to-pink-600 text-white py-20">
        <h1
          className="
            mb-2 
            font-extrabold 
            tracking-tight 
            lg:text-5xl 
            xl:text-6xl 
            3xl:text-7xl 
          "
        >
          Don&apos;t let your business fall behind. Get started with AI in your workplace.
        </h1>
        <p
          className="
            mb-8 
            text-lg 
            leading-relaxed 
            font-normal 
            max-w-md 
            xl:max-w-xl 
          "
        >
          Join The Essential AI for HR Mastermind: From Concept to Action Plan in 4 Weeks
        </p>

        {/* More explanation on what */}
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8 text-lg font-bold">What is this?</h2>
          <p
            className="
              mb-16 
              leading-relaxed 
              max-w-md 
              xl:max-w-xl 
              2xl:mx-auto 
              lg:text-base 
            "
          >
            Our invite-only, 4-week mastermind training program and community helps HR and People leaders demystify Gen AI,
            spot use cases aligned with business goals, and turn their teams into the go-to company experts on AI.{' '}
            <br />
            Our mission is to cut through the noise and teach AI skills that help HR leaders create more engaged, equitable, and
            evidence-based workplaces. Come Join us!
          </p>
        </div>

        {/* CTA */}
        <button
          className="
            bg-purple-500 
            hover:bg-pink-600 
            text-white 
            font-bold 
            py-2 
            px-4 
            rounded-full 
            shadow-lg 
            focus:outline-none 
          "
          type="submit"
        >
          Join AI for HR Today
        </button>
      </section>

      <Head>
        <title>The Essential AI for HR Mastermind</title>
        <meta name="description" content="Join our 4-week mastermind training program and community to demystify Gen AI." />
      </Head>
    </div>
  );
}

export default LandingPage;