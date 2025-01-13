import React, { useEffect, useState } from "react";
import { FaUserCircle, FaPlus } from "react-icons/fa"; // Import the profile icon and plus icon
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles for Toastify
import { motion } from "framer-motion"; // Add this import if not already present

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState({ quote: "", name: "", role: "" });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const testimonials = [
    {
      quote: "Gain Chain's AI is absolutely incredible. If you like Copilot (or if you don't), you'll be blown away by this.",
      name: "Alex Chen",
      role: "Senior Developer",
    },
    {
      quote: "Started using Gain Chain yesterday & I'm blown away. It's how blockchain AI should feel. I'm completely hooked now.",
      name: "Sarah Miller",
      role: "Tech Lead",
    },
    {
      quote: "The Gain Chain completion while coding is occasionally so magic it defies reality - about ~25% of the time it's anticipating exactly what I want to do.",
      name: "James Wilson",
      role: "Blockchain Engineer",
    },
    {
      quote: "After many recommendations, I finally switched to Gain Chain and... wow! There is no going back. 🚀",
      name: "Emma Thompson",
      role: "Full Stack Developer",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({ ...newTestimonial, [name]: value });
  };

  const handleAddTestimonial = () => {
    if (newTestimonial.quote && newTestimonial.name && newTestimonial.role) {
      testimonials.push(newTestimonial);
      setNewTestimonial({ quote: "", name: "", role: "" });
      setIsFormVisible(false); // Hide the form after submission
      toast.success("Testimonial added successfully!", {
        position: "bottom-right", // Display toast at the bottom right
        autoClose: 3000, // Auto-close after 3 seconds
        theme: "colored", // Custom theme for colored notifications
      });
    } else {
      toast.error("Please fill in all fields before submitting.", {
        position: "bottom-right", // Display toast at the bottom right
        autoClose: 3000, // Auto-close after 3 seconds
        theme: "colored", // Custom theme for colored notifications
      });
    }
  };

  const scrollingStyles = `
    .scrolling-container {
      height: 400px;
      overflow: hidden;
      position: relative;
    }

    .scrolling-content {
      animation: scroll 30s linear infinite;
    }

    .scrolling-content:hover {
      animation-play-state: paused;
    }

    @keyframes scroll {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }

    .testimonial-card {
      transition: all 0.3s ease;
    }

    .testimonial-card:hover {
      background-color: #0088cc !important;
      transform: scale(1.02);
    }
  `;

  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-12" style={{ backgroundColor: "#001F54" }}>
      {/* Bot image with swing animation */}
      <img
        src="src/images/bot.png"
        alt="Peeping Bot"
        className="absolute top-9 right-8 w-250 h-150 animate-swing glow-effect"
      />

      <div className="mx-auto max-w-4xl">
        {/* Logo and chat bubble container */}
        <div className="flex items-center gap-6 mb-8 relative">
          <img 
            alt="Gain Chain Logo" 
            src="src/images/neuro.png" 
            className="h-27 animate-heartbeat"
          />
          
          {/* Chat bubble */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="chat-bubble relative bg-blue-500/20 p-4 rounded-lg border border-blue-400/30"
          >
            <motion.p 
              className="text-blue-200 text-lg font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Your feedback gives us life! 💙
            </motion.p>
            {/* Triangle pointer */}
            <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 
                          w-0 h-0 border-t-[10px] border-t-transparent 
                          border-r-[10px] border-r-blue-500/20 
                          border-b-[10px] border-b-transparent">
            </div>
          </motion.div>
        </div>

        <h2 className="text-3xl font-bold text-white text-center sm:text-4xl mb-8">What People Are Saying</h2>
        
        {/* New scrolling testimonials container */}
        <div className="testimonials-scroll-container">
          <div className="testimonials-scroll-content">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-item"
              >
                <div className="flex items-start gap-4 p-4">
                  <div className="flex-shrink-0">
                    <FaUserCircle className="text-gray-400 w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{testimonial.name}</span>
                      <span className="text-blue-300">·</span>
                      <span className="text-blue-300">{testimonial.role}</span>
                    </div>
                    <p className="text-white mt-2">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Updated Add Testimonial button with icon and glow effect */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsFormVisible((prev) => !prev)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-lg 
                     hover:bg-blue-600 transition duration-200 flex items-center gap-2
                     animate-glow relative overflow-hidden group"
          >
            <FaPlus className="w-4 h-4" />
            {isFormVisible ? "Hide Form" : "Add Testimonial"}
            <div className="absolute inset-0 glow-ring"></div>
          </button>
        </div>
      </div>

      {/* Display the form only when isFormVisible is true */}
      {isFormVisible && (
        <div className="mt-10 mx-auto w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-4">Add Your Testimonial</h3>
          <div>
            <input
              type="text"
              name="quote"
              placeholder="Your testimonial"
              value={newTestimonial.quote}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border border-blue-500 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newTestimonial.name}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border border-blue-500 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              name="role"
              placeholder="Your Role"
              value={newTestimonial.role}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border border-blue-500 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={handleAddTestimonial}
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Toast notifications container */}
      <ToastContainer
        position="bottom-right" // Display toasts at the bottom right
        autoClose={3000} // Auto-close after 3 seconds
        hideProgressBar={false} // Show progress bar (optional)
        newestOnTop={false} // Oldest toasts appear first
        closeOnClick // Close toast on click
        pauseOnHover // Pause on hover
        theme="colored" // Use colored theme for notifications
      />
      {/* Custom styles for Toast notifications */}
      <style>
        {`
          .Toastify__toast--success {
            background-color: #28a745; /* Green for success */
          }
          .Toastify__toast--error {
            background-color: #dc3545; /* Red for error */
          }

          /* Swing animation for bot */
          @keyframes swing {
            0%, 100% { transform: rotate(-5deg); }
            50% { transform: rotate(5deg); }
          }

          .animate-swing {
            animation: swing 3s ease-in-out infinite;
          }

          /* Glow effect for bot and button */
          .glow-effect {
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.8));
          }

          /* Button glow ring */
          .glow-ring::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: inherit;
            background: linear-gradient(45deg, #fff, transparent, #fff);
            animation: rotate-glow 2s linear infinite;
            opacity: 0.7;
          }

          @keyframes rotate-glow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          /* Smooth sliding animation for testimonials */
          @keyframes smooth-slide {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }

          .animate-smooth-slide {
            animation: smooth-slide 0.5s ease-out;
          }

          /* Enhanced heartbeat animation */
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            14% {
              transform: scale(1.3);
            }
            28% {
              transform: scale(1);
            }
            42% {
              transform: scale(1.3);
            }
            70% {
              transform: scale(1);
            }
          }

          .animate-heartbeat {
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          .testimonials-scroll-container {
            height: 500px;
            overflow: hidden;
            position: relative;
            border-radius: 12px;
            background: rgba(0, 0, 0, 0.2);
          }

          .testimonials-scroll-content {
            animation: scrollVertical 40s linear infinite;
          }

          .testimonials-scroll-content:hover {
            animation-play-state: paused;
          }

          @keyframes scrollVertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          .testimonial-item {
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }

          .testimonial-item:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          /* Make the scroll container have a gradient fade at top and bottom */
          .testimonials-scroll-container::before,
          .testimonials-scroll-container::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            height: 100px;
            z-index: 1;
            pointer-events: none;
          }

          .testimonials-scroll-container::before {
            top: 0;
            background: linear-gradient(to bottom, #001F54, transparent);
          }

          .testimonials-scroll-container::after {
            bottom: 0;
            background: linear-gradient(to top, #001F54, transparent);
          }

          .chat-bubble {
            backdrop-filter: blur(8px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                       0 2px 4px -1px rgba(0, 0, 0, 0.06);
            animation: float 6s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </section>
  );
}
