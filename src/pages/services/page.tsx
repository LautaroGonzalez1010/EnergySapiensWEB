import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { servicesData } from '../../mocks/services';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useEffect } from 'react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: servicesRef, inView: servicesInView } = useScrollAnimation();
  const { ref: whyUsRef, inView: whyUsInView } = useScrollAnimation();
  const { ref: processRef, inView: processInView } = useScrollAnimation();
  const { ref: statsRef, inView: statsInView } = useScrollAnimation();
  const { ref: ctaRef, inView: ctaInView } = useScrollAnimation();

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
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Soluciones integrales en ingeniería eléctrica, automatización y eficiencia energética para proyectos industriales y comerciales
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated background circles */}
                <motion.div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange/5 rounded-full"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <motion.div 
                  className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl mb-6 relative z-10"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    backgroundColor: "var(--color-primary)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.i 
                    className={`${service.icon} text-3xl text-primary group-hover:text-white transition-colors duration-300`}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <motion.h3 
                  className="font-display font-semibold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300 relative z-10"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={whyUsRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyUsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              ¿Por Qué <span className="text-primary">Elegirnos</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experiencia, calidad y compromiso en cada proyecto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'ri-award-line',
                title: 'Certificaciones',
                description: 'Cumplimos con normativas IRAM, IEC y estándares internacionales',
                color: 'primary',
              },
              {
                icon: 'ri-team-line',
                title: 'Equipo Experto',
                description: 'Profesionales con más de 15 años de experiencia en el sector',
                color: 'orange',
              },
              {
                icon: 'ri-time-line',
                title: 'Respuesta Rápida',
                description: 'Soporte técnico disponible 24/7 para emergencias',
                color: 'primary',
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Calidad Garantizada',
                description: 'Garantía extendida en todos nuestros trabajos',
                color: 'orange',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={whyUsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    item.color === 'primary' 
                      ? 'from-primary/5 to-primary/0' 
                      : 'from-orange/5 to-orange/0'
                  }`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles */}
                <motion.div
                  className={`absolute top-4 right-4 w-2 h-2 rounded-full ${
                    item.color === 'primary' ? 'bg-primary' : 'bg-orange'
                  }`}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <motion.div
                  className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 relative z-10 ${
                    item.color === 'primary' ? 'bg-primary/10' : 'bg-orange/10'
                  }`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.i
                    className={`${item.icon} text-3xl ${
                      item.color === 'primary' ? 'text-primary' : 'text-orange'
                    }`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                <h3 className="font-display font-semibold text-xl text-dark mb-3 relative z-10">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{item.description}</p>

                {/* Animated corner */}
                <motion.div
                  className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full ${
                    item.color === 'primary' 
                      ? 'bg-gradient-to-tl from-primary/10 to-transparent' 
                      : 'bg-gradient-to-tl from-orange/10 to-transparent'
                  }`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process - New Interactive Design */}
      <section ref={processRef} className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Nuestro <span className="text-primary">Proceso</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un enfoque estructurado que garantiza resultados excepcionales en cada proyecto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consulta Inicial',
                description: 'Reunión para entender tus necesidades, objetivos y requisitos específicos del proyecto.',
                icon: 'ri-chat-4-line',
                gradient: 'from-orange via-orange-dark to-orange',
                bgGradient: 'from-orange/10 to-orange/5',
                iconBg: 'bg-orange/10',
                iconColor: 'text-orange',
                hoverColor: 'group-hover:text-orange'
              },
              {
                step: '02',
                title: 'Diseño y Planificación',
                description: 'Desarrollo de planos técnicos, cálculos de ingeniería y cronograma detallado de ejecución.',
                icon: 'ri-draft-line',
                gradient: 'from-primary via-green-600 to-primary',
                bgGradient: 'from-primary/10 to-primary/5',
                iconBg: 'bg-primary/10',
                iconColor: 'text-primary',
                hoverColor: 'group-hover:text-primary'
              },
              {
                step: '03',
                title: 'Ejecución',
                description: 'Implementación del proyecto con supervisión constante, garantizando calidad y cumplimiento de plazos.',
                icon: 'ri-tools-line',
                gradient: 'from-orange via-orange-dark to-orange',
                bgGradient: 'from-orange/10 to-orange/5',
                iconBg: 'bg-orange/10',
                iconColor: 'text-orange',
                hoverColor: 'group-hover:text-orange'
              },
              {
                step: '04',
                title: 'Soporte Continuo',
                description: 'Mantenimiento preventivo, asistencia técnica 24/7 y optimización continua de sistemas.',
                icon: 'ri-customer-service-2-line',
                gradient: 'from-primary via-green-600 to-primary',
                bgGradient: 'from-primary/10 to-primary/5',
                iconBg: 'bg-primary/10',
                iconColor: 'text-primary',
                hoverColor: 'group-hover:text-primary'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -20 }}
                animate={processInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="relative group"
              >
                {/* Connecting Line */}
                {index < 3 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={processInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                    className={`hidden lg:block absolute top-24 left-full w-8 h-1 bg-gradient-to-r ${item.gradient} origin-left z-0`}
                  ></motion.div>
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ 
                    y: -15,
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative bg-gradient-to-br ${item.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 border-transparent hover:border-opacity-50`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Animated background circles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                    className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${item.gradient} rounded-full blur-3xl`}
                  ></motion.div>

                  {/* Step number badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={processInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.6 }
                    }}
                    className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-xl border-4 border-white z-10`}
                  >
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={processInView ? { scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.15 + 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                    className={`w-20 h-20 flex items-center justify-center ${item.iconBg} rounded-2xl mb-6 relative z-10`}
                  >
                    <motion.i
                      animate={{
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2
                      }}
                      className={`${item.icon} text-4xl ${item.iconColor}`}
                    ></motion.i>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`font-display font-bold text-2xl text-dark mb-4 transition-colors duration-300 ${item.hoverColor}`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Animated arrow indicator */}
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="absolute bottom-6 right-6 z-10"
                  >
                    <i className={`ri-arrow-right-line text-2xl ${item.iconColor} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></i>
                  </motion.div>

                  {/* Hover glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-3xl`}
                  ></motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-24 bg-gradient-to-br from-dark via-dark-light to-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
              Resultados que Hablan por Sí Mismos
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Números que reflejan nuestro compromiso con la excelencia
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Proyectos Completados', icon: 'ri-checkbox-circle-line' },
              { number: '50+', label: 'Clientes Satisfechos', icon: 'ri-user-smile-line' },
              { number: '15+', label: 'Años de Experiencia', icon: 'ri-time-line' },
              { number: '99%', label: 'Tasa de Satisfacción', icon: 'ri-star-line' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 cursor-pointer"
              >
                <motion.i 
                  className={`${stat.icon} text-5xl text-primary mb-4 block`}
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                ></motion.i>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">
              ¿Listo para comenzar tu proyecto?
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Contactanos hoy y descubrí cómo podemos ayudarte a optimizar tus instalaciones eléctricas
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-10 py-5 bg-primary hover:bg-primary-dark text-white rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl whitespace-nowrap cursor-pointer"
              >
                Solicitar Consulta
                <i className="ri-arrow-right-line ml-3 text-xl"></i>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
