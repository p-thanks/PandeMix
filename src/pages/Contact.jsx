'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { contactInfoAssets, contactFaqsAssets } from "../assets/asset";

const SlideUp = (delay) => {
  return {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const iconMap = {
    Mail: <Mail className="w-6 h-6" />,
    Phone: <Phone className="w-6 h-6" />,
    MapPin: <MapPin className="w-6 h-6" />,
    Clock: <Clock className="w-6 h-6" />
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 lg:py-32 mt-16 md:mt-20">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkBlue mb-4 md:mb-6">
              Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Have questions or need support? We're here to help you 24/7. 
              Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfoAssets.map((item, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.3 + index * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-darkBlue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-semibold text-gray-800 mb-1">
                  {item.info}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {item.subInfo}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              variants={SlideUp(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkBlue mb-4 md:mb-6">
                Send us a Message
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 md:p-8 text-center"
                >
                  <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm md:text-base text-green-600">
                    We've received your message and will respond shortly.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm md:text-base font-semibold text-darkBlue mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm md:text-base font-semibold text-darkBlue mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition text-sm md:text-base"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm md:text-base font-semibold text-darkBlue mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition text-sm md:text-base"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-semibold text-darkBlue mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition text-sm md:text-base bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm md:text-base font-semibold text-darkBlue mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition resize-none text-sm md:text-base"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              variants={SlideUp(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkBlue mb-4 md:mb-6">
                  Our Location
                </h2>
                <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg h-64 md:h-80 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977194524456!2d-122.41941548468203!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter%20HQ!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PandeMix Location"
                  ></iframe>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-blue-600 p-6 md:p-8 rounded-2xl md:rounded-3xl text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-4 md:mb-6">
                  For urgent health concerns or technical issues, our 24/7 support team is ready to assist you immediately.
                </p>
                <button className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-gray-100 transition w-full sm:w-auto">
                  Start Live Chat
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkBlue mb-3 md:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Quick answers to common questions about PandeMix
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            {contactFaqsAssets.map((faq, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.3 + index * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-gray-50 p-5 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-darkBlue mb-2 md:mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkBlue mb-3 md:mb-4">
              Stay Updated
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8 px-4">
              Subscribe to our newsletter for the latest health tips, product updates, and COVID-19 information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition text-sm md:text-base"
              />
              <button className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-primary/90 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;