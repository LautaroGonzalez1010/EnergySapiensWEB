import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Seguridad',
      description: 'Cumplimiento estricto de normativas y protocolos de seguridad en cada proyecto',
      color: 'from-orange/20 to-orange/5',
      iconBg: 'bg-orange/10',
      iconColor: 'text-orange',
    },
    {
      icon: 'ri-star-line',
      title: 'Excelencia',
      description: 'Compromiso con la calidad y la mejora continua en todos nuestros servicios',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovación',
      description: 'Implementación de tecnologías de vanguardia y soluciones creativas',
      color: 'from-orange/20 to-orange/5',
      iconBg: 'bg-orange/10',
      iconColor: 'text-orange',
    },
    {
      icon: 'ri-team-line',
      title: 'Compromiso',
      description: 'Dedicación total al éxito de cada cliente y proyecto que emprendemos',
      color: 'from-primary/20 to-primary/5',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
    },
  ];

  const stats = [
    { number: '15+', label: 'Años de Experiencia', icon: 'ri-time-line' },
    { number: '200+', label: 'Proyectos Completados', icon: 'ri-checkbox-circle-line' },
    { number: '50+', label: 'Clientes Satisfechos', icon: 'ri-user-heart-line' },
    { number: '30+', label: 'Profesionales', icon: 'ri-team-line' },
  ];

  const team = [
    { 
      name: 'Ing. Carlos Martínez', 
      role: 'Director Técnico', 
      specialty: 'Ingeniería Eléctrica',
      icon: 'ri-user-star-line',
      color: 'from-orange to-orange-dark'
    },
    { 
      name: 'Ing. María González', 
      role: 'Jefa de Proyectos', 
      specialty: 'Automatización Industrial',
      icon: 'ri-user-settings-line',
      color: 'from-primary to-primary-dark'
    },
    { 
      name: 'Ing. Roberto Silva', 
      role: 'Especialista Senior', 
      specialty: 'Eficiencia Energética',
      icon: 'ri-user-search-line',
      color: 'from-orange to-orange-dark'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-dark-light to-dark-lighter overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Sobre <span className="text-primary">Nosotros</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Líderes en ingeniería eléctrica y eficiencia energética con más de 15 años de experiencia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section - Side by Side */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-primary/10">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <i className="ri-compass-3-line text-4xl text-white"></i>
                </div>
                <h2 className="font-display font-bold text-3xl text-dark mb-6">
                  Nuestra Misión
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  En <strong className="text-primary">Energy Sapiens</strong>, nos dedicamos a proporcionar soluciones integrales de ingeniería eléctrica, automatización y eficiencia energética que superen las expectativas de nuestros clientes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Combinamos experiencia técnica, innovación y compromiso para desarrollar proyectos seguros, eficientes y sostenibles que impulsen el crecimiento de las empresas.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange/10 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-orange/10">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-orange to-orange-dark rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-500">
                  <i className="ri-eye-line text-4xl text-white"></i>
                </div>
                <h2 className="font-display font-bold text-3xl text-dark mb-6">
                  Nuestra Visión
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ser la empresa líder en Argentina en soluciones de ingeniería eléctrica y eficiencia energética, reconocida por nuestra excelencia técnica y compromiso con la innovación.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trabajamos bajo las normativas IRAM e IEC, garantizando los más altos estándares de calidad y seguridad en cada instalación que realizamos.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl text-dark mb-4">
              Nuestros Logros
            </h2>
            <p className="text-lg text-gray-600">
              Números que respaldan nuestra trayectoria
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-primary/10 to-orange/10 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <i className={`${stat.icon} text-3xl text-primary`}></i>
                  </div>
                  <div className="font-display font-bold text-4xl text-dark mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section - Horizontal Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en Energy Sapiens
            </p>
          </motion.div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 80
                }}
                whileHover={{ scale: 1.02, x: 10 }}
                className={`bg-gradient-to-r ${value.color} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100`}
              >
                <div className="flex items-center gap-8">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 flex items-center justify-center ${value.iconBg} rounded-2xl flex-shrink-0`}
                  >
                    <i className={`${value.icon} text-4xl ${value.iconColor}`}></i>
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-2xl text-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <i className={`ri-arrow-right-line text-3xl ${value.iconColor}`}></i>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Modern Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesionales altamente capacitados comprometidos con la excelencia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: 'spring'
                }}
                whileHover={{ y: -15, rotateY: 5 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
                  
                  <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                    <i className={`${member.icon} text-5xl text-white`}></i>
                  </div>
                  
                  <div className="text-center relative z-10">
                    <h3 className="font-display font-semibold text-xl text-dark mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.specialty}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-white to-orange/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-primary to-orange rounded-2xl mx-auto mb-8"
            >
              <i className="ri-hand-heart-line text-4xl text-white"></i>
            </motion.div>
            
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">
              Trabajemos Juntos
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Descubrí cómo nuestro equipo puede ayudarte a alcanzar tus objetivos
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer group"
            >
              Contactanos
              <motion.i 
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ri-arrow-right-line ml-3 text-xl"
              ></motion.i>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
