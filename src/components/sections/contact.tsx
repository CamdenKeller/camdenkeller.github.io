'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Send, CheckCircle } from 'lucide-react';

import SectionHeader from '@/components/data-display/section-header';
import Container from '@/components/layout/container';

import KamiraBand from '/public/images/contact_photos/kamira_band.jpg';
import Waterfall from '/public/images/contact_photos/waterfall.jpg';
import Lakehouse from '/public/images/contact_photos/lakehouse.jpg';
import Waterpolo from '/public/images/contact_photos/waterpolo.jpg';
import useWindowSize from '@/hooks/use-window-size';



const ContactSection = () => {
  const { width } = useWindowSize();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  // Contact photos carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const contactImages = [
    Waterfall,
    Waterpolo,
    KamiraBand,
    Lakehouse,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % contactImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [contactImages.length]);

  const nextImageIndex = (currentImageIndex + 1) % contactImages.length;

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };



  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbxrSLjVp-d8GrrAxkd5ThFoLPgb86AVFFttNBki5Mdo83Qa7MpmAWqZiqmrZ932VEc8/exec';

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container id="contact" className="bg-gray-50">
      <SectionHeader label="Contact Me" />

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            {contactImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Cam ${index + 1}`}
                className={`absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:left-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] transition-opacity duration-[2000ms] ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: 'cover' }}
                onClick={() => handleImageClick(index)}
              />
            ))}
            {contactImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Cam ${index + 1}`}
                className={`absolute h-[360px] w-[320px] border-8 border-transparent max-md:top-5 md:bottom-0 md:right-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px] transition-opacity duration-[2000ms] ease-in-out ${
                  index === nextImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectFit: 'cover' }}
              />
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {submitMessage && (
              <div
                className={`flex items-center gap-2 p-3 rounded-lg ${
                  submitMessage.includes('successfully')
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {submitMessage.includes('successfully') ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                <span className="text-sm">{submitMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
