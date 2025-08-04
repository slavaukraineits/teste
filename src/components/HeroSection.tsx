import React from 'react';
import { Coffee, Clock, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-[5%] w-12 h-12 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-[5%] w-8 h-8 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10 transition-all duration-1000 opacity-100 translate-y-0">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Protocolo Jejum
              </span>
              <br />
              <span className="text-white">com Café Preto</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Descubra o método revolucionário que está transformando vidas através do jejum intermitente potencializado pelo café preto.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-lg">
              <div className="flex items-center space-x-2 bg-orange-500/20 px-4 py-2 rounded-full">
                <Coffee className="w-5 h-5 text-orange-500" />
                <span>Queima de Gordura</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-green-500" />
                <span>Mais Energia</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/10 px-4 py-2 rounded-full">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Resultados Rápidos</span>
              </div>
            </div>

            <div className="pt-8">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg md:text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl">
                QUERO COMEÇAR AGORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;