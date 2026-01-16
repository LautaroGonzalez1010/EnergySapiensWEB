import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { projectsData } from '../../mocks/projects';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: projectsRef, inView: projectsInView } = useScrollAnimation();

  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Industrial', 'Comercial'];

  // Scroll to top when the page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Compute the list of projects based on the selected category
  const filteredProjects =
    selectedCategory === 'Todos'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-dark via-dark-light to-dark-lighter overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          ></div>
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
              Nuestros <span className="text-primary">Proyectos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Descubrí nuestros proyectos más destacados en instalaciones eléctricas, automatización y
              eficiencia energética
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
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
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <i className="ri-building-line mr-2"></i>
                        {project.client}
                      </span>
                      <span>{project.year}</span>
                    </div>
                    <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Ver detalles
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Proyectos Completados' },
              { number: '50+', label: 'Clientes Activos' },
              { number: '15+', label: 'Años de Experiencia' },
              { number: '100%', label: 'Satisfacción' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-medium text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;