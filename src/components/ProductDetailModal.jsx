import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MessageCircle, ShieldCheck, Leaf, Package } from 'lucide-react';

const WHATSAPP_NUMBER = '919150100477';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Gyestraders! 🌿\n\nI'd like to order:\n*${product.name}*\n\nPlease share availability and price. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10"
          style={{ maxHeight: '90vh', overflowY: 'auto' }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-md text-slate-500 hover:text-slate-900 transition-all"
          >
            <X size={18} />
          </button>

          {/* Product image */}
          <div className="relative w-full h-64 sm:h-80 bg-[#f5f0e8] overflow-hidden">
            {product.badge && (
              <div className="absolute top-4 left-4 z-10 bg-[#1a1209] text-[#f5e6c8] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                ✦ {product.badge}
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
              }}
            />
            {/* Fallback placeholder when image fails */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 peer-error:opacity-100">
              <Package size={64} className="text-slate-300" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Category & Rating */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star
                      key={i}
                      size={14}
                      className={i <= Math.round(product.rating) ? 'text-amber-500 fill-amber-500' : 'text-slate-200 fill-slate-200'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
                <span className="text-xs text-slate-400">({product.reviews} reviews)</span>
              </div>
            </div>

            {/* Name */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
              {product.name}
            </h2>
            {product.nameTA && (
              <p className="text-sm text-slate-400 font-medium mb-4">{product.nameTA}</p>
            )}

            {/* Description */}
            <p className="text-slate-600 leading-relaxed mb-6 text-base">
              {product.description}
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold">
                <Leaf size={12} /> 100% Organic
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-semibold">
                <ShieldCheck size={12} /> Certified Quality
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                <Package size={12} /> Direct from Farm
              </span>
            </div>

            {/* WhatsApp order button */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-bold text-base py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-green-200 hover:shadow-green-300"
            >
              <MessageCircle size={20} />
              Order via WhatsApp
            </button>

            <p className="text-center text-xs text-slate-400 mt-3">
              You'll be redirected to WhatsApp to confirm your order
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
