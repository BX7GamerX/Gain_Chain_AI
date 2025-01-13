import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">Join us today and take your projects to the next level with our AI-powered blockchain solutions.</p>
        <button className="bg-secondary hover:bg-highlight text-white font-bold py-2 px-4 rounded">
          Sign Up Now
        </button>
      </div>
    </section>
  );
}

export default CallToAction; 