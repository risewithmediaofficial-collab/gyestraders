import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '919150100477';

const Card = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
  border: 1px solid #f1f5f9;
  z-index: 1;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg,#f0fdf4,#dcfce7);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  &:hover { transform: translateY(-10px); box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1); border-color: transparent; }
  &:hover::before { transform: scaleX(1); }
`;

const IconWrapper = styled.div`
  width: 64px; height: 64px;
  border-radius: 16px;
  background: #f0fdf4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
  ${Card}:hover & { background: white; transform: scale(1.1) rotate(5deg); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
`;

const ServiceCard = ({ service }) => {
  const handleBook = () => {
    const text = encodeURIComponent(`Hi Gyestraders! I want to book: *${service.title}*`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <Card initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <IconWrapper>{service.icon}</IconWrapper>
      <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{service.description}</p>
      <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-end">
        <button onClick={handleBook} className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
          Book Now <ArrowRight size={16} />
        </button>
      </div>
    </Card>
  );
};

export default ServiceCard;
