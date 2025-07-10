'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProductBlock({ product: propProduct }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(propProduct || null);

  useEffect(() => {
    if (propProduct) {
      setSelectedProduct(propProduct);
      return;
    }
    fetch('/json/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || []);
        setSelectedProduct(data.products[0]); // default to first product
      })
      .catch((err) => console.error('Failed to load products:', err));
  }, [propProduct]);

  const handleChange = (e) => {
    const product = products.find(p => p.name === e.target.value);
    setSelectedProduct(product);
  };

  if (!selectedProduct) return null;

  return (
    <div className="min-h-screen w-full bg-[#1C2E4E]">
      {/* Header */}
      <div className="w-full bg-[#142338] py-4 px-4 md:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h2 className="text-xl text-gray-300 font-light animate-fadeIn font-['Inria_Serif']">
            SAP PRODUCTS
          </h2>
          {/* Only show select if not viewing a single product */}
          {!propProduct && (
            <select
              onChange={handleChange}
              className="bg-[#1C2E4E] border border-gray-600 text-white px-4 py-2 rounded focus:outline-none focus:ring focus:border-blue-500"
            >
              {products.map((product, i) => (
                <option key={i} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 space-y-8">
            <h1 className="group">
              <span className="text-4xl md:text-5xl font-bold text-white animate-slideIn font-['Inria_Serif'] inline-block transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-2">
                {selectedProduct.name} Services
              </span>
            </h1>

            <div className="space-y-6 animate-fadeInUp font-['Inknut_Antiqua']">
              <p className="text-gray-300 mb-1">Category: SAP Product</p>

              <div className="flex items-start gap-2">
                <span className="text-gray-300">•</span>
                <p className="text-gray-300 group">
                  <span className="text-blue-400 font-semibold transition-all duration-300 group-hover:text-blue-300 group-hover:translate-x-1 inline-block">
                    Overview:
                  </span>
                  <br />
                  {selectedProduct.on_page_copy}
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 w-full max-w-lg animate-floatIn">
            <div className="bg-[#142338] p-8 md:p-10 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-900/30">
              <div className="relative aspect-[16/10] w-[95%] mx-auto">
                <Image
                  src="https://res.cloudinary.com/dujw4np0d/image/upload/v1751023556/image_10_v9ywju.png"
                  alt={`${selectedProduct.name} Dashboard`}
                  className="rounded-lg object-cover transition-transform duration-700 hover:scale-102"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
