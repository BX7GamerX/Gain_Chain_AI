import React, { useState } from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Introduction to Internet Computer Protocol (ICP)",
    description: "Learn about ICP and the Dfinity Team.",
    lessons: [
      {
        title: "Lesson 1: Introduction to ICP",
        content: "Overview of ICP and its significance in Web 3.",
        completed: false,
      },
    ],
    progress: 0,
    locked: false,
  },
  {
    title: "Using the Gain Chain AI IDE for Web 3 Development",
    description: "Hands-on experience with our IDE.",
    lessons: [],
    progress: 0,
    locked: false,
  },
  {
    title: "Introduction to NFID",
    description: "Understanding secure authentication in Web 3.",
    lessons: [],
    progress: 0,
    locked: false,
  },
  {
    title: "Advanced Web 3 Development using ICP Technology",
    description: "Locked for now.",
    lessons: [],
    progress: 0,
    locked: true,
  },
  {
    title: "Premium Feature Courses: Advanced Project Deployment",
    description: "Coming soon.",
    lessons: [],
    progress: 0,
    locked: true,
  },
];

const CourseSection = () => {
  const [completedCourses, setCompletedCourses] = useState([]);
  const [coinsCollected, setCoinsCollected] = useState(0);
  const [gchCoins, setGchCoins] = useState(0);

  const handleCompleteLesson = (courseIndex) => {
    const updatedCourses = [...courses];
    updatedCourses[courseIndex].progress = 100; // Mark course as completed
    setCompletedCourses([...completedCourses, updatedCourses[courseIndex]]);
    collectCoins(10); // Award 10 coins for completing a lesson
  };

  const collectCoins = (amount) => {
    setCoinsCollected((prev) => prev + amount);
    if (coinsCollected + amount >= 50) {
      convertCoinsToGCH();
    }
  };

  const convertCoinsToGCH = () => {
    const newGchCoins = Math.floor((coinsCollected + 50) / 50);
    setGchCoins((prev) => prev + newGchCoins);
    setCoinsCollected((prev) => (prev + 50) % 50); // Keep the remainder
  };

  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Web 3 Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${course.locked ? 'bg-gray-300' : 'bg-[#002C72]'} text-white`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p className="mt-2">{course.description}</p>
            <div className="mt-4">
              {course.locked ? (
                <span className="text-yellow-500">Locked - Coming Soon</span>
              ) : (
                <button
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                  onClick={() => handleCompleteLesson(index)}
                >
                  Start Course
                </button>
              )}
            </div>
            <div className="mt-4">
              <p>Progress: {course.progress}%</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold">Your Progress</h3>
        <ul className="mt-4">
          {completedCourses.map((course, index) => (
            <li key={index} className="text-green-500">
              {course.title} - Completed!
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p>Coins Collected: {coinsCollected}</p>
          <p>GCH Coins: {gchCoins}</p>
        </div>
      </div>
    </section>
  );
};

export default CourseSection; 