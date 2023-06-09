import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
      <div className="flex flex-col items-center md:items-start">
        <img src="/logo.png" alt="Website Logo" className="h-8 mb-4" />
        <p className="text-sm">© 2023 Your Website. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center md:items-end">
        <p className="text-sm mb-2">Contact Us:</p>
        <ul className="flex space-x-4">
          <li>
            <a href="tel:1234567890" className="text-gray-300 hover:text-white transition duration-300">
              <FaPhone className="inline-block mr-1" />
              123-456-7890
            </a>
          </li>
          <li>
            <a href="mailto:info@yourwebsite.com" className="text-gray-300 hover:text-white transition duration-300">
              <FaEnvelope className="inline-block mr-1" />
              info@yourwebsite.com
            </a>
          </li>
        </ul>
        <p className="text-sm mt-4">
          <FaMapMarkerAlt className="inline-block mr-1" />
          1234 Main Street, City, State, ZIP
        </p>
        <div className="mt-4 flex">
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300 mx-2">
            <FaFacebook className="text-xl" />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300 mx-2">
            <FaYoutube className="text-xl" />
          </a>
          <a href="https://www.instagram.com/youraccount" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300 mx-2">
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;