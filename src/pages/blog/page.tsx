
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { blogData } from '../../mocks/blog';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [filteredPosts, setFilteredPosts] = useState(blogData);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: postsRef, inView: postsInView } = useScrollAnimation();
  const { ref: newsletterRef, inView: newsletterInView } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredPosts(blogData);
    } else {
      setFilteredPosts(blogData.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  const categories = ['Todos', 'Innovación', 'Eficiencia Energética', 'Seguridad', 'Infraestructura', 'Automatización'];

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch('https://readdy.ai/api/form/d5iv2ufsaa199qnbf6f0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setNewsletterEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <span className="text-primary">Blog</span> & Noticias
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ultimas novedades, consejos y tendencias en ingeniería eléctrica, eficiencia energética y automatización industrial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <a
                  href={post.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="flex items-center mr-4">
                        <i className="ri-user-line mr-1"></i>
                        {post.author}
                      </span>
                      <span className="flex items-center mr-4">
                        <i className="ri-calendar-line mr-1"></i>
                        {new Date(post.date).toLocaleDateString('es-AR')}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-time-line mr-1"></i>
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all duration-300">
                      Leer más
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                      <i className="ri-external-link-line ml-1 text-sm"></i>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section ref={newsletterRef} className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={newsletterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 text-center shadow-2xl"
          >
            <i className="ri-mail-line text-6xl text-white mb-6"></i>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Suscribite a Nuestro Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Recibí las últimas novedades en ingeniería eléctrica, proyectos y tecnología directamente en tu correo
            </p>
            <form 
              id="newsletter_form" 
              data-readdy-form 
              onSubmit={handleNewsletterSubmit} 
              className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Enviando...
                  </span>
                ) : (
                  'Suscribirme'
                )}
              </button>
            </form>
            {submitStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-white font-semibold"
              >
                <i className="ri-check-line mr-2"></i>
                ¡Gracias por suscribirte!
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-white font-semibold"
              >
                <i className="ri-error-warning-line mr-2"></i>
                Error al suscribirse. Intentá nuevamente.
              </motion.p>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
