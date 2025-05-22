import React from 'react';

const features = [
  {
    title: 'Real-time Updates',
    description: 'See your posts update instantly without refreshing the page.',
    icon: (
      <svg
        className="w-8 h-8 text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M9 4h6v2H9V4z"
        />
      </svg>
    ),
  },
  {
    title: 'Easy Post Creation',
    description: 'Create new posts with a simple and intuitive form interface.',
    icon: (
      <svg
        className="w-8 h-8 text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
  {
    title: 'Clean & Responsive UI',
    description: 'Enjoy a beautiful interface optimized for all screen sizes.',
    icon: (
      <svg
        className="w-8 h-8 text-gray-700"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7h18M3 12h18M3 17h18"
        />
      </svg>
    ),
  },
];

const Features = () => (
  <section className="py-16 bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold text-gray-900 mb-10">Why Choose React Post Manager?</h3>
      <div className="grid gap-12 md:grid-cols-3">
        {features.map(({ title, description, icon }) => (
          <div key={title} className="flex flex-col items-center space-y-4 px-6">
            <div className="bg-gray-100 p-4 rounded-full">{icon}</div>
            <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
            <p className="text-gray-600 max-w-sm">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
