import React from 'react';

const teamMembers = [
  { name: 'Alice Johnson', role: 'CEO', image: 'path/to/alice.jpg' },
  { name: 'Bob Smith', role: 'CTO', image: 'path/to/bob.jpg' },
  { name: 'Charlie Brown', role: 'Lead Developer', image: 'path/to/charlie.jpg' },
];

const TeamSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection; 