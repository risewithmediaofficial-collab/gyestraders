import React, { useState } from 'react';
import { Eye, Star } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductDetailModal from './ProductDetailModal';

const ViewButton = styled.button`
  --color: #1a1209;
  font-family: inherit;
  width: 100%;
  padding: 10px 0;
  position: relative;
  overflow: hidden;
  border: 2px solid var(--color);
  transition: color .4s;
  z-index: 1;
  font-size: 13px;
  border-radius: 6px;
  font-weight: 600;
  color: var(--color);
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200%;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: all .6s;
  }
  &:hover { color: #fff; }
  &:hover:before { top: -30px; left: -30px; }
`;

const BadgeLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: #1a1209;
  color: #f5e6c8;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 20px;
  z-index: 10;
`;

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f0e8]">
          {product.badge && <BadgeLabel>✦ {product.badge}</BadgeLabel>}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-1">
            <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">{product.category}</span>
            <div className="flex items-center gap-1 text-amber-500">
              <Star size={13} fill="currentColor" />
              <span className="text-xs font-medium text-slate-700">{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif text-lg font-bold text-slate-900 mb-0.5 line-clamp-1">{product.name}</h3>
          {product.nameTA && (
            <p className="text-xs text-slate-400 mb-2 font-medium">{product.nameTA}</p>
          )}
          <p className="text-sm text-slate-500 mb-5 line-clamp-2 flex-grow">{product.description}</p>

          <ViewButton onClick={() => setShowModal(true)}>
            <Eye size={14} />
            View Details
          </ViewButton>
        </div>
      </motion.div>

      <ProductDetailModal
        product={showModal ? product : null}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default ProductCard;
