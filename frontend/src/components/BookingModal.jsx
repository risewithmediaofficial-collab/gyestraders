import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Phone, Mail, User } from 'lucide-react';
import styled from 'styled-components';

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 20px;

  input, textarea {
    width: 100%;
    padding: 12px 16px 12px 40px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s ease;
    background: #f8fafc;
    color: #334155;
    font-family: inherit;

    &:focus {
      border-color: #22c55e;
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1);
      background: white;
    }
  }

  svg {
    position: absolute;
    left: 14px;
    top: 14px;
    color: #94a3b8;
    transition: color 0.3s ease;
  }

  input:focus + svg, textarea:focus + svg {
    color: #22c55e;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #16a34a;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: #15803d;
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(22, 163, 74, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const BookingModal = ({ isOpen, onClose, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    address: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Booking your service...' });
    
    try {
      // Simulate booking to backend
      await new Promise(resolve => setTimeout(resolve, 1200));
      const data = { success: true, message: "Booking confirmed! We will contact you shortly." };
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setTimeout(() => {
          onClose();
          window.location.reload();
        }, 2000);
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Failed to connect to server' });
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
          style={{ maxHeight: '90vh', overflowY: 'auto' }}
        >
          <div className="sticky top-0 z-20 bg-primary-50 p-6 flex items-start justify-between border-b border-primary-100">
            <div>
              <h2 className="font-serif text-2xl font-bold text-slate-800 mb-1">Book Service</h2>
              <p className="text-sm text-primary-700 font-medium flex items-center gap-2">
                <span>{service?.icon}</span>
                {service?.title}
              </p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white text-slate-500 hover:text-slate-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 pb-8">
            {status.message && (
              <div className={`p-4 mb-6 rounded-lg text-sm font-medium ${
                status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {status.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} />
                <User size={18} />
              </InputGroup>
              
              <InputGroup>
                <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                <Mail size={18} />
              </InputGroup>
              
              <InputGroup>
                <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                <Phone size={18} />
              </InputGroup>
              
              <InputGroup>
                <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                <Calendar size={18} />
              </InputGroup>
              
              <InputGroup>
                <textarea name="address" rows="3" placeholder="Service Address" required value={formData.address} onChange={handleChange}></textarea>
                <MapPin size={18} />
              </InputGroup>
              
              <SubmitButton type="submit" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? 'Processing...' : 'Confirm Booking'}
              </SubmitButton>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
