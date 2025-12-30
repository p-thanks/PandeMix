'use client'
import { motion } from "framer-motion";
import { Heart, Target, Award, Shield, Zap, Globe } from "lucide-react";
import { 
  aboutValuesAssets, 
  aboutStatsAssets, 
  aboutTeamAssets, 
  aboutMilestonesAssets 
} from "../assets/asset";

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

const SlideRight = (delay) => {
  return {
    initial: {
      x: -50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const SlideLeft = (delay) => {
  return {
    initial: {
      x: 50,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};

const About = () => {
  const iconMap = {
    Heart: <Heart className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Globe: <Globe className="w-8 h-8" />
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkBlue mb-4 md:mb-6">
              About PandeMix
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Empowering communities worldwide with accessible, AI-driven health diagnostics 
              and trusted medical information to combat pandemics and protect lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              variants={SlideRight(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop"
                alt="Healthcare professionals"
                className="rounded-2xl md:rounded-3xl shadow-lg w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </motion.div>

            <motion.div
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Target className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkBlue">Our Mission</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To provide fast, accurate, and accessible COVID-19 diagnostic tools powered 
                  by artificial intelligence, enabling early detection and prevention to save lives 
                  and reduce the spread of infectious diseases globally.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-primary flex-shrink-0" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkBlue">Our Vision</h2>
                </div>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  A world where everyone has immediate access to reliable health diagnostics, 
                  where technology bridges healthcare gaps, and where early detection becomes 
                  the norm rather than the exception in fighting global health crises.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {aboutStatsAssets.map((stat, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.2 + index * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base text-white/90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkBlue mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              The principles that guide everything we do at PandeMix
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {aboutValuesAssets.map((value, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.3 + index * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4">
                  {iconMap[value.icon]}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-darkBlue mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story/Journey Timeline */}
      <section className="py-12 md:py-20 lg:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkBlue mb-3 md:mb-4">
              Our Journey
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              From a small startup to a global health technology leader
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {aboutMilestonesAssets.map((milestone, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.3 + index * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative pl-6 md:pl-8 pb-8 md:pb-12 border-l-2 border-primary last:pb-0"
              >
                <div className="absolute left-0 top-0 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -translate-x-[7px] md:-translate-x-[9px]"></div>
                <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm">
                  <span className="inline-block bg-primary text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-darkBlue mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkBlue mb-3 md:mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              A diverse team of healthcare experts, technologists, and innovators dedicated to your health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {aboutTeamAssets.map((member, index) => (
              <motion.div
                key={index}
                variants={SlideUp(0.3 + index * 0.1)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl md:rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-darkBlue mb-1">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-primary font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-xs md:text-sm text-gray-600 px-2">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary to-blue-600">
        <div className="container px-4 md:px-6">
          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Join Us in Fighting the Pandemic
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-white/90 px-4">
              Whether you are seeking diagnosis, health information, or want to partner with us, 
              we are here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
              <button className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-gray-100 transition">
                Start Diagnosis
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hover:bg-white/10 transition">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;