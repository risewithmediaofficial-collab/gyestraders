import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, HeartPulse, Star, MessageCircle, CheckCircle2 } from 'lucide-react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { products as rawProducts, testimonials as rawTestimonials } from '../data';
import Card3D from '../components/Card3D';

const WHATSAPP_NUMBER = '919150100477';

const HeroSection = styled.section`
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(160deg, #f0fdf4 0%, #f8fafc 60%, #fafaf7 100%);
`;

const BadgePill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: white;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  color: #16a34a;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
  margin-bottom: 24px;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: #16a34a;
  color: white;
  border: 2px solid #16a34a;
  gap: 8px;
  &:hover { background: #15803d; border-color: #15803d; transform: translateY(-2px); box-shadow: 0 10px 15px -3px rgba(22,163,74,0.3); }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: white;
  color: #334155;
  border: 2px solid #e2e8f0;
  gap: 8px;
  &:hover { border-color: #22c55e; color: #16a34a; }
`;

const howItWorksSteps = [
  { num: 1, title: 'Browse & Select', desc: 'Explore our collection of pure organic products. Read detailed descriptions and benefits of each item.' },
  { num: 2, title: 'View Details', desc: 'Click on any product to see complete information, certifications, nutritional facts, and customer reviews.' },
  { num: 3, title: 'Quick Checkout', desc: "Simply fill in your details and we'll send order confirmation via WhatsApp. No complicated checkout process!" },
  { num: 4, title: 'Fresh Delivery', desc: 'We deliver within 24–48 hours to your doorstep. Package arrives fresh and securely packed.' },
  { num: 5, title: '100% Satisfaction', desc: "Love it? Great! Not satisfied? We'll replace or refund. Your satisfaction is our guarantee." },
];

const categories = [
  {
    name: 'Oils',
    icon: '🫒',
    desc: 'Cold-pressed oils that retain natural flavors, aroma, and all nutrients. Perfect for cooking, skincare, and wellness.',
    items: ['Groundnut Oil', 'Gingelly Oil', 'Coconut Oil'],
    cat: 'oils',
  },
  {
    name: 'Dairy',
    icon: '🥛',
    desc: 'Pure dairy products made using traditional bilona method. A2 cow ghee and raw honey with zero adulteration.',
    items: ['Bilona Ghee', 'Natural Honey'],
    cat: 'dairy',
  },
  {
    name: 'Grains',
    icon: '🌾',
    desc: 'Heritage grain varieties rich in fiber and minerals. Nutritious alternatives to regular rice with authentic taste.',
    items: ['Millet Rice', 'Heritage Grains'],
    cat: 'grains',
  },
  {
    name: 'Spices',
    icon: '🌶️',
    desc: 'Sun-dried, stone-ground spice blends. Pure aromatic spices that elevate every dish with authentic flavor.',
    items: ['Masala Powders', 'Jaggery Powder'],
    cat: 'spices',
  },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setProducts(rawProducts);
    setTestimonials(rawTestimonials);
  }, []);

  const carouselImages = [
    'https://images.unsplash.com/photo-1620012253966-1d120cc51ce0?w=300&q=80',
    'https://images.unsplash.com/photo-1519690889869-e705e59f72d1?w=300&q=80',
    'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?w=300&q=80',
    'https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=300&q=80',
    'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80',
    'https://images.unsplash.com/photo-1510908756545-8cf3af5e0ed8?w=300&q=80',
    'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&q=80',
    'https://images.unsplash.com/photo-1621213426768-d05546ad2a36?w=300&q=80',
    'https://images.unsplash.com/photo-1606914469633-d08e08b3282f?w=300&q=80',
    'https://images.unsplash.com/photo-1544158428-f1c5c0cfa2ea?w=300&q=80',
  ];

  return (
    <>
      {/* ── Hero ── */}
      <HeroSection>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <BadgePill><Leaf size={16} /> 100% Organic &amp; Natural</BadgePill>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                Pure, Natural &amp; <span className="text-primary-600">Organic</span> Everyday
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Discover cold-pressed oils, bilona ghee, raw honey and premium organic products. Delivered fresh across Hosur &amp; Bangalore.
              </p>
              <div className="flex flex-wrap gap-4">
                <PrimaryButton to="/products">Shop Now <ArrowRight size={18} /></PrimaryButton>
                <SecondaryButton href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} /> WhatsApp Order
                </SecondaryButton>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-primary-500" size={22} />
                  <span className="text-sm font-medium text-slate-700">Certified Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="text-primary-500" size={22} />
                  <span className="text-sm font-medium text-slate-700">Health Focused</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="hidden lg:flex items-center justify-center"
            >
              <Card3D images={carouselImages} />
            </motion.div>
          </div>
        </div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl opacity-40 -z-10" />
      </HeroSection>

      {/* ── Product Categories ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary-600 font-semibold uppercase tracking-widest text-xs mb-3 block">Our Collections</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Product Categories</h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.desc}</p>
                <ul className="space-y-1">
                  {cat.items.map(item => (
                    <li key={item} className="text-sm text-primary-600 flex items-center gap-1">
                      <CheckCircle2 size={14} className="shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <Link to={`/products?category=${cat.cat}`} className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-primary-600 transition-colors">
                  Browse {cat.name} <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Products ── */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary-600 font-semibold uppercase tracking-widest text-xs mb-3 block">Shop</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Our Products</h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">How It Works</h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            {howItWorksSteps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0 shadow-md">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ── Testimonials ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
              >
                <div className="flex text-amber-500 mb-4 gap-0.5">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-6 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold font-serif text-lg">{t.avatar}</div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
