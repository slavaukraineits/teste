import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-500">
            Protocolo Jejum
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
              Depoimentos
            </a>
            <a href="#preco" className="text-gray-300 hover:text-white transition-colors">
              Preço
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;