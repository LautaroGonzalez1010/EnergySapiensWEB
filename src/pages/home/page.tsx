import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { servicesData } from '../../mocks/services';
import { projectsData } from '../../mocks/projects';
import { clientsData } from '../../mocks/clients';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: aboutRef, inView: aboutInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation();
  const { ref: projectsRef, inView: projectsInView } = useScrollAnimation();
  const { ref: clientsRef, inView: clientsInView } = useScrollAnimation();
  const { ref: ctaRef, inView: ctaInView } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark-lighter"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://readdy.ai/api/search-image?query=Modern%20industrial%20electrical%20infrastructure%20with%20high%20voltage%20power%20lines%20and%20transformers%20in%20urban%20cityscape%20showing%20professional%20engineering%20work%20with%20dramatic%20lighting%20and%20clean%20architectural%20design&width=1920&height=1080&seq=hero1&orientation=landscape)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              INGENIERÍA <span className="text-primary">SEGURA</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Proyectos, ejecución y mantenimiento de sistemas eléctricos industriales y comerciales con enfoque en eficiencia y confiabilidad
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Ver Proyectos
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Contactanos
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
           
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">
                Nosotros
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                En <strong>Energy Sapiens</strong> brindamos soluciones de ingeniería eléctrica, energía y automatización. Combinamos experiencia técnica con compromiso y seguridad en cada proyecto.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Nuestro equipo de profesionales altamente capacitados trabaja con las últimas tecnologías y normativas internacionales para garantizar resultados excepcionales.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                Conocé más sobre nosotros
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-gray-600 font-medium">Años de Experiencia</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl font-bold text-orange mb-2">200+</div>
                    <div className="text-gray-600 font-medium">Proyectos Completados</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-gray-600 font-medium">Clientes Satisfechos</div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl font-bold text-orange mb-2">24/7</div>
                    <div className="text-gray-600 font-medium">Soporte Técnico</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Servicios Principales
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Diseño, ejecución y mantenimiento de sistemas eléctricos de baja, media y alta tensión
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <i className={`${service.icon} text-3xl text-primary group-hover:text-white transition-colors duration-300`}></i>
                </div>
                <h3 className="font-display font-semibold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-dark hover:bg-dark-light text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Ver Todos los Servicios
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6"
          >
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
                Proyectos Destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Algunos de nuestros proyectos más recientes en instalaciones eléctricas y eficiencia energética
              </p>
            </div>
            <Link
              to="/projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Explorar Proyectos
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-xl text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <i className="ri-building-line mr-2"></i>
                        {project.client}
                      </span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section ref={clientsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Clientes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Empresas y organizaciones que confían en nuestras soluciones energéticas y tecnológicas
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={clientsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {clientsData.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={clientsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full h-12 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">
              ¿Listo para Transformar tu Energía?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contáctanos hoy y descubre cómo podemos ayudarte a reducir costos y ser más sostenible
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Solicitar Consulta Gratuita
              <i className="ri-arrow-right-line"></i>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
