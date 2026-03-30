import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { products as rawProducts } from '../data';

const CATEGORIES = [
  { label: 'All Products', value: 'all' },
  { label: 'Oils', value: 'oils' },
  { label: 'Dairy', value: 'dairy' },
  { label: 'Grains', value: 'grains' },
  { label: 'Spices', value: 'spices' },
  { label: 'Wellness', value: 'wellness' },
  { label: 'Eco Home', value: 'home' },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategory(cat);
  }, [searchParams]);

  const fetchProducts = (cat = category, q = search) => {
    setLoading(true);
    setTimeout(() => {
      let filtered = [...rawProducts];
      if (cat !== 'all') {
        filtered = filtered.filter(p => p.category === cat);
      }
      if (q) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));
      }
      setProducts(filtered);
      setLoading(false);
    }, 300);
  };

  useEffect(() => { fetchProducts(category, search); }, [category]);

  const handleSearch = (e) => { e.preventDefault(); fetchProducts(category, search); };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-8">

        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">Our Products</h1>
          <p className="text-slate-600">Pure, organic, unadulterated — for your daily health and wellness.</p>
          <div className="w-12 h-1 bg-amber-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <Filter size={18} className="text-slate-400 mr-1 shrink-0" />
            {CATEGORIES.map(c => (
              <button
                key={c.value}
                onClick={() => setCategory(c.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${category === c.value ? 'bg-primary-50 text-primary-700 font-semibold' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <form onSubmit={handleSearch} className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all text-sm"
            />
            <button type="submit" className="absolute left-3.5 top-3 text-slate-400 hover:text-primary-500">
              <Search size={18} />
            </button>
          </form>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-primary-500 rounded-full animate-spin" />
            <p className="mt-4 text-slate-500 font-medium">Loading products...</p>
          </div>
        ) : products.length > 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
          </motion.div>
        ) : (
          <div className="bg-white p-16 rounded-2xl text-center border border-slate-100 shadow-sm mt-8">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={32} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No products found</h3>
            <p className="text-slate-500 max-w-sm mx-auto">Try another search or select a different category.</p>
            <button
              onClick={() => { setSearch(''); setCategory('all'); fetchProducts('all', ''); }}
              className="mt-6 px-6 py-2.5 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
