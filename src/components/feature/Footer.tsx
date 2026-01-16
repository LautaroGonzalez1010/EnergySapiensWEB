import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Nosotros', path: '/about' },
      { label: 'Servicios', path: '/services' },
      { label: 'Proyectos', path: '/projects' },
    ],
    services: [
      { label: 'Ingeniería Eléctrica', path: '/services' },
      { label: 'Automatización', path: '/services' },
      { label: 'Eficiencia Energética', path: '/services' },
      { label: 'Mantenimiento', path: '/services' },
    ],
    contact: [
      { label: '+54 9 11 5555-5555', icon: 'ri-phone-line', href: 'tel:+5491155555555' },
      { label: 'info@energysapiens.com', icon: 'ri-mail-line', href: 'mailto:info@energysapiens.com' },
      { label: 'Buenos Aires, Argentina', icon: 'ri-map-pin-line', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: 'ri-instagram-line', href: 'https://www.instagram.com/energysapiens/', label: 'Instagram' },
    { icon: 'ri-linkedin-box-line', href: 'https://www.linkedin.com/company/energysapiens/', label: 'LinkedIn' },
    { icon: 'ri-mail-line', href: 'mailto:info@energysapiens.com', label: 'Email' },
  ];

  return (
 <footer className="bg-gradient-to-br from-[#2a2f36] via-[#1f2328] to-[#181b1f] text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <img
                src="https://static.readdy.ai/image/ab17182f417c466948e14369eb91773d/3d1b262f869c85415c1900cb804ff7cc.png"
                alt="Energy Sapiens"
                className="h-12 w-18 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-display font-bold text-xl">Energy Sapiens</span>
            </Link>
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              Soluciones integrales en ingeniería eléctrica, eficiencia energética y automatización industrial.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white hover:text-orange rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              {footerLinks.contact.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-start space-x-3 text-white/90 hover:text-white transition-colors duration-300 text-sm group cursor-pointer"
                  >
                    <i className={`${item.icon} text-lg mt-0.5 group-hover:scale-110 transition-transform duration-300`}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/80 text-sm">
              © {currentYear} Energy Sapiens. Todos los derechos reservados.
            </p>
            <a
              href="https://www.linkedin.com/in/lautaro-gonzalez-780477244/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
            >
              Powered by Lautaro Gonzalez
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
