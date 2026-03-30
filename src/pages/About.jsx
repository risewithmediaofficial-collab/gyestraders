import React from 'react';
import styled from 'styled-components';
import { Leaf, ShieldCheck, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">About Gyestraders</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We are dedicated to bringing the purest, most natural organic products directly from farms to your doorstep. Our journey started with a simple vision: to make healthy, chemical-free living accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Leaf size={32} />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3">100% Organic</h3>
            <p className="text-slate-600">Sourced directly from certified organic farms focusing on sustainable agriculture.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3">Premium Quality</h3>
            <p className="text-slate-600">Rigorous quality checks ensure you get unmatched purity and traditional processing methods.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartPulse size={32} />
            </div>
            <h3 className="text-xl font-bold font-serif mb-3">Holistic Wellness</h3>
            <p className="text-slate-600">Our products and services are curated to enhance your physical and mental well-being.</p>
          </div>
        </div>

        <div className="bg-primary-900 text-white rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
            To bridge the gap between traditional organic farming and modern living. We believe that returning to roots with pure cold-pressed oils, raw honey, and A2 dairy is the foundation of a thriving, healthy life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
