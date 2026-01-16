import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ScrollToTop from '../../components/base/ScrollToTop';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { ref: heroRef, inView: heroInView } = useScrollAnimation();
  const { ref: formRef, inView: formInView } = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.currentTarget;
      const formDataToSend = new FormData(formElement);
      
      const response = await fetch('https://readdy.ai/api/form/d5iv2ufsaa199qnbf6eg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Teléfono',
      content: '+54 9 11 5555-5555',
      link: 'tel:+5491155555555',
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      content: 'info@energysapiens.com',
      link: 'mailto:info@energysapiens.com',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Ubicación',
      content: 'Buenos Aires, Argentina',
      link: '#',
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
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mb-6">
              <span className="text-primary">Contactanos</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              ¿Tenés un proyecto en mente? Estamos listos para ayudarte a hacerlo realidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 text-center hover:bg-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary/20 group-hover:bg-white rounded-2xl mx-auto mb-6 transition-colors duration-300">
                  <i className={`${info.icon} text-3xl text-primary transition-colors duration-300`}></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-dark group-hover:text-white mb-2 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {info.content}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section ref={formRef} className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Envianos tu Consulta
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Completá el formulario y nos pondremos en contacto a la brevedad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
          >
            <form id="contact_form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="juan@ejemplo.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 cursor-pointer"
                >
                  <option value="">Seleccioná un servicio</option>
                  <option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
                  <option value="Automatización y Control">Automatización y Control</option>
                  <option value="Eficiencia Energética">Eficiencia Energética</option>
                  <option value="Mantenimiento Industrial">Mantenimiento Industrial</option>
                  <option value="Seguridad Eléctrica">Seguridad Eléctrica</option>
                  <option value="Iluminación LED">Iluminación LED</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={6}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Contanos sobre tu proyecto o consulta..."
                ></textarea>
                <p className="text-sm text-gray-500 mt-2">
                  {formData.message.length}/500 caracteres
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Enviar Mensaje
                    <i className="ri-send-plane-line ml-2"></i>
                  </span>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center"
                >
                  <i className="ri-check-line text-2xl mr-2"></i>
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
                >
                  <i className="ri-error-warning-line text-2xl mr-2"></i>
                  Hubo un error al enviar el mensaje. Por favor, intentá nuevamente.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Nuestra Ubicación
            </h2>
            <p className="text-lg text-gray-600">
              Visitanos en Buenos Aires, Argentina
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.50804877554!2d-58.51520919999999!3d-34.6037232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Energy Sapiens"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Resolvé tus dudas sobre nuestros servicios
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: '¿En qué tipo de proyectos trabajan?',
                answer: 'Nos especializamos en ingeniería eléctrica, automatización, eficiencia energética y proyectos industriales y comerciales de mediana y gran escala.',
              },
              {
                question: '¿Ofrecen servicios llave en mano?',
                answer: 'Sí, brindamos soluciones integrales desde el diseño y planificación hasta la ejecución, puesta en marcha y mantenimiento preventivo.',
              },
              {
                question: '¿Realizan auditorías energéticas?',
                answer: 'Contamos con profesionales certificados para analizar el consumo y proponer mejoras de eficiencia energética adaptadas a cada cliente.',
              },
              {
                question: '¿Cuál es el tiempo de respuesta?',
                answer: 'Respondemos todas las consultas dentro de las 24 horas hábiles. Para emergencias, ofrecemos soporte técnico 24/7.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="font-display font-semibold text-lg text-dark mb-3 flex items-start">
                  <i className="ri-question-line text-primary text-xl mr-3 mt-0.5"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
