import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { projectsData } from '../../mocks/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const { ref: headerRef, inView: headerInView } = useScrollAnimation();
  const { ref: detailsRef, inView: detailsInView } = useScrollAnimation();
  const { ref: technicalRef, inView: technicalInView } = useScrollAnimation();
  const { ref: resultsRef, inView: resultsInView } = useScrollAnimation();

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === Number(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return null;
  }

  const relatedProjects = projectsData
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full mb-6">
              {project.category}
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>

        <Link
          to="/projects"
          className="absolute top-24 left-8 px-4 py-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-arrow-left-line"></i>
          <span>Volver a Proyectos</span>
        </Link>
      </section>

      {/* Project Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <motion.i 
                  className="ri-building-line text-2xl text-primary"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="text-sm text-gray-600 mb-1 relative z-10">Cliente</div>
              <motion.div 
                className="font-semibold text-dark text-lg relative z-10"
                whileHover={{ x: 5 }}
              >
                {project.client}
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="w-12 h-12 flex items-center justify-center bg-orange/10 rounded-lg mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <motion.i 
                  className="ri-map-pin-line text-2xl text-orange"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>
              <div className="text-sm text-gray-600 mb-1 relative z-10">Ubicación</div>
              <motion.div 
                className="font-semibold text-dark text-lg relative z-10"
                whileHover={{ x: 5 }}
              >
                {project.location}
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-orange/10 rounded-bl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <motion.i 
                  className="ri-time-line text-2xl text-primary"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div className="text-sm text-gray-600 mb-1 relative z-10">Duración</div>
              <motion.div 
                className="font-semibold text-dark text-lg relative z-10"
                whileHover={{ x: 5 }}
              >
                {project.duration}
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              whileHover={{ 
                y: -10, 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange/5 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="w-12 h-12 flex items-center justify-center bg-orange/10 rounded-lg mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <motion.i 
                  className="ri-ruler-line text-2xl text-orange"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
              <div className="text-sm text-gray-600 mb-1 relative z-10">Área</div>
              <motion.div 
                className="font-semibold text-dark text-lg relative z-10"
                whileHover={{ x: 5 }}
              >
                {project.area}
              </motion.div>

              <motion.div
                className="absolute top-0 right-0 w-16 h-16 bg-orange/10 rounded-bl-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section ref={detailsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-display font-bold text-3xl md:text-4xl text-dark mb-6"
              whileHover={{ x: 10, color: "#14B8A6" }}
              transition={{ duration: 0.3 }}
            >
              Descripción del Proyecto
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={detailsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.fullDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technical Details */}
      <section ref={technicalRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={technicalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-display font-bold text-3xl md:text-4xl text-dark mb-8"
              whileHover={{ x: 10, color: "#14B8A6" }}
              transition={{ duration: 0.3 }}
            >
              Ficha Técnica
            </motion.h2>
            <motion.div 
              className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                scale: 1.01
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background elements */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange/5 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                <div>
                  <motion.h3 
                    className="font-display font-semibold text-xl text-dark mb-6 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-8 h-8 flex items-center justify-center bg-primary rounded-lg mr-3"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className="ri-tools-line text-white"></i>
                    </motion.div>
                    Especificaciones Técnicas
                  </motion.h3>
                  <ul className="space-y-3">
                    {project.technicalDetails.map((detail: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={technicalInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-start space-x-3 cursor-pointer"
                      >
                        <motion.i 
                          className="ri-checkbox-circle-fill text-primary text-xl mt-0.5"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        />
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <motion.h3 
                    className="font-display font-semibold text-xl text-dark mb-6 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="w-8 h-8 flex items-center justify-center bg-orange rounded-lg mr-3"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <i className="ri-alert-line text-white"></i>
                    </motion.div>
                    Desafíos del Proyecto
                  </motion.h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge: string, index: number) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={technicalInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-start space-x-3 cursor-pointer"
                      >
                        <motion.i 
                          className="ri-arrow-right-circle-fill text-orange text-xl mt-0.5"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.4 }}
                        />
                        <span className="text-gray-700">{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section ref={resultsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={resultsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="font-display font-bold text-3xl md:text-4xl text-dark mb-8"
              whileHover={{ x: 10, color: "#14B8A6" }}
              transition={{ duration: 0.3 }}
            >
              Resultados Obtenidos
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.results.map((result: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  animate={resultsInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
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
                    boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.5)"
                  }}
                  className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated particles */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-white/50 rounded-full"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-3 h-3 bg-white/30 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  />

                  <motion.div 
                    className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-lg mb-4"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.i 
                      className="ri-trophy-line text-2xl"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4
                      }}
                    />
                  </motion.div>
                  <motion.p 
                    className="text-lg font-medium leading-relaxed"
                    whileHover={{ x: 5 }}
                  >
                    {result}
                  </motion.p>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-8">
              Proyectos Relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    to={`/projects/${relatedProject.id}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {relatedProject.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-semibold text-lg text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-white to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-4">
            ¿Tenés un proyecto similar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactanos para discutir cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Contactar Ahora
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
