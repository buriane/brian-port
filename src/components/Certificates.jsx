import { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [hoveredCertificate, setHoveredCertificate] = useState(null);
    const totalSlides = Math.ceil(CERTIFICATES.length / 2);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.add('pointer-events-none', 'backdrop-blur-lg', 'bg-black/50');
        }
    };

    const closeModal = () => {
        setSelectedCertificate(null);
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.classList.remove('pointer-events-none', 'backdrop-blur-lg', 'bg-black/50');
        }
    };

    const sharedAnimation = {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: sharedAnimation }
    };

    const lineVariants = {
        hidden: { width: 0, opacity: 0 },
        visible: { width: "80px", opacity: 1, transition: sharedAnimation }
    };

    const containerVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const sliderVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className='px-6 py-20 min-h-screen mb-6' id='certificates'>
            <motion.h1
                className='text-4xl md:text-6xl font-medium tracking-tight mb-10'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={titleVariants}
            >
                Certificates
            </motion.h1>
            <motion.div
                className='h-1 w-20 mb-8 bg-white'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={lineVariants}
            />

            <div className='relative overflow-hidden'>
                <div className='flex transition-transform duration-700' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {[...Array(totalSlides)].map((_, slideIndex) => (
                        <div key={slideIndex} className='grid grid-cols-2 gap-4 flex-shrink-0 w-full'>
                            {CERTIFICATES.slice(slideIndex * 2, slideIndex * 2 + 2).map((certificate, index) => (
                                <motion.div
                                    key={index}
                                    className='relative rounded-lg p-4 backdrop-blur-3xl bg-stone-500/10 border border-stone-500/20 shadow-lg cursor-pointer'
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ amount: 0.2 }}
                                    variants={containerVariants}
                                    onMouseEnter={() => setHoveredCertificate(certificate)}
                                    onMouseLeave={() => setHoveredCertificate(null)}
                                >
                                    <div className='relative z-10 flex flex-col gap-3'>
                                        <div className='relative aspect-[16/9] rounded-lg overflow-hidden max-h-[300px] group'>
                                            <img
                                                src={certificate.image}
                                                alt={certificate.name}
                                                loading="lazy"
                                                decoding="async"
                                                fetchPriority="high"
                                                onClick={() => openModal(certificate)}
                                                className={`w-full h-full object-cover rounded-md transition-all duration-300 ${hoveredCertificate && hoveredCertificate !== certificate
                                                    ? 'opacity-50'
                                                    : 'opacity-100 group-hover:scale-110'
                                                    }`}
                                            />
                                        </div>
                                        <div className='space-y-1'>
                                            <h2 className='text-base lg:text-lg font-semibold text-white'>{certificate.name}</h2>
                                            <p className='text-xs lg:text-sm font-light italic text-white/60'>
                                                {certificate.issuer}
                                            </p>
                                        </div>
                                        <p className='text-sm text-gray-300'>{certificate.year}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <motion.div
                className='flex justify-between items-center mt-6'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sliderVariants}
            >
                <button onClick={prevSlide} className='p-2 rounded-lg bg-white/20 hover:bg-white/30'>
                    <ChevronLeft size={24} />
                </button>
                <div className='flex space-x-4'>
                    {[...Array(totalSlides)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`h-2 w-2 rounded-full transition-colors duration-300 ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} className='p-2 rounded-lg bg-white/20 hover:bg-white/30'>
                    <ChevronRight size={24} />
                </button>
            </motion.div>

            {selectedCertificate && (
                <div className='fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-lg p-4 z-50'>
                    <div className='relative bg-stone-800 rounded-lg p-8 max-w-xl w-full shadow-xl border border-stone-600'>
                        <button onClick={closeModal} className='absolute top-4 right-4 p-2 bg-stone-600 rounded-lg hover:bg-stone-500'>
                            <X size={24} className='text-white' />
                        </button>
                        <h2 className='text-xl font-semibold mb-4 text-white'>{selectedCertificate.name}</h2>
                        <div className='rounded-lg overflow-hidden'>
                            <img src={selectedCertificate.image} alt={selectedCertificate.name} className='w-full h-auto rounded-md' loading="lazy" decoding="async" fetchPriority="high" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;