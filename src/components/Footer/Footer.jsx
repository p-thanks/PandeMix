import Logo from "../../assets/logo.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        {/* brand info */}
        <div className="space-y-4">
          <img src={Logo} alt="PandeMix" className="w-40" />
          <p className="text-gray-400 xl:max-w-[400px]">
            PandeMix empowers communities with accessible health information and AI-driven diagnostic tools. 
            Your trusted partner in early COVID-19 detection, prevention strategies, and comprehensive wellness guidance for a healthier, safer tomorrow.
          </p>
        </div>
        {/* social icons */}
        <div className="flex space-x-6 text-3xl">
          <Facebook className="hover:text-primary duration-200 cursor-pointer" size={28} />
          <Instagram className="hover:text-primary duration-200 cursor-pointer" size={28} />
          <Linkedin className="hover:text-primary duration-200 cursor-pointer" size={28} />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;