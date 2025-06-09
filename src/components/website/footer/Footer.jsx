import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

const socialLinks = [
  { name: 'Instagram', icon: FaInstagram },
  { name: 'Twitter', icon: BsTwitter },
  { name: 'Facebook', icon: FaFacebook },
  { name: 'LinkedIn', icon: LiaLinkedin },
];

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Shop', to: '/shop' },
  { name: 'About Us', to: '/about' },
  { name: 'Contact', to: '/contact' },
  { name: 'Blog', to: '/blog' },
  { name: 'FAQs', to: '/faq' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-extrabold mb-4 text-emerald-400">ReactKart</h4>
          <p className="text-gray-400 text-base leading-relaxed">
            A flexible eCommerce site builder. Easily adapt to fashion, electronics, stationery, or any niche.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-base space-y-2">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link to={link.to} className="hover:text-white transition-colors duration-200">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl font-semibold mb-4">Support</h4>
          <ul className="text-gray-400 text-base space-y-2">
            <li><Link to="/help" className="hover:text-white transition-colors duration-200">Help Center</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors duration-200">Returns</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h4 className="text-xl font-semibold mb-4">Connect with Us</h4>
          <div className="flex gap-5">
            {socialLinks.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} ReactKart. Crafted to build commerce your way.
      </div>
    </footer>
  );
};

export default Footer;
