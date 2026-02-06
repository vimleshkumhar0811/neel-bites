/* eslint-disable no-unused-vars */
// src/pages/Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate API call (1.5s delay)
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-rose-50 py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-5">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Have a craving, question, or custom request? We'd love to hear from you. Let's bring the true taste of India to your plate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100/60"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-8">
              Contact Information
            </h2>

            <ul className="space-y-6 text-gray-700">
              <li className="flex items-start gap-4">
                <span className="text-3xl text-emerald-600">📍</span>
                <div>
                  <p className="font-semibold text-gray-900">Our Office</p>
                  <p>Kalnu iela 5, Salaspils, Salaspils novads, Latvia</p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <span className="text-3xl text-emerald-600">✉️</span>
                <a
                  href="mailto:info@neelbites.com"
                  className="text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
                >
                  info@neelbites.com
                </a>
              </li>

            </ul>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100/60"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-5xl">🎉</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-700 text-lg">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl bg-white/60 border ${errors.name ? 'border-red-500' : 'border-gray-200'
                          } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-4 rounded-xl bg-white/60 border ${errors.email ? 'border-red-500' : 'border-gray-200'
                          } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all`}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full p-4 rounded-xl bg-white/60 border ${errors.subject ? 'border-red-500' : 'border-gray-200'
                        } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all`}
                      placeholder="Inquiry about products..."
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full p-4 rounded-xl bg-white/60 border ${errors.message ? 'border-red-500' : 'border-gray-200'
                        } focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 ${isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl hover:-translate-y-0.5 text-white'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;