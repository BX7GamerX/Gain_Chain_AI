import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import Typing from 'react-typing-effect';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'gainchainai@gmail.com',
        },
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setStatus('Message sent successfully! 😊 We are happy to hear from you.');
          setIsLoading(false);
          setFormData({ name: '', email: '', message: '' });

          // Send auto-reply
          emailjs.send(
            'your_service_id', // Use the same service ID
            'auto_reply_template_id', // Create a new template for auto-reply
            {
              to_name: formData.name,
              to_email: formData.email,
            },
            'your_user_id'
          );
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
          setIsLoading(false);
          console.error('EmailJS Error:', error);
        }
      );
  };

  return (
    <section className="bg-gradient-to-b from-white to-blue-100 py-16 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-blue-700">
            <Typing
              text={['Get in Touch']}
              speed={100}
              eraseSpeed={50}
              eraseDelay={2000}
              typingDelay={500}
            />
          </h2>
          <p className="mt-4 text-lg text-blue-600">
            Have questions, feedback, or opportunities to discuss? We'd love to hear from you.
          </p>
        </motion.div>
        {status && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className={`mt-6 text-center text-lg font-semibold ${
              status.includes('success') ? 'text-blue-500' : 'text-red-500'
            }`}
          >
            {status}
          </motion.div>
        )}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              aria-label="Your Name"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              aria-label="Your Email"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              rows="5"
              aria-label="Your Message"
              className="mt-2 w-full rounded-md border border-gray-300 bg-white text-gray-700 placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}