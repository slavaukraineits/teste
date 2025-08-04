import React from 'react';
import { Check, Clock, Gift } from 'lucide-react';

const PricingSection: React.FC = () => {
  const features = [
    "Protocolo completo de jejum intermitente",
    "Guia detalhado sobre café preto",
    "Plano alimentar personalizado",
    "Receitas exclusivas",
    "Suporte via WhatsApp",
    "Garantia de 30 dias",
    "Acesso vitalício",
    "Atualizações gratuitas"
  ];

  return (
    <section id="preco" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Oferta Especial
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforme sua vida hoje mesmo com condições exclusivas
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden">
            {/* Oferta especial badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-2 px-6 rounded-full transform rotate-12">
              <Gift className="w-4 h-4 inline mr-1" />
              OFERTA LIMITADA
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Protocolo Jejum Completo
              </h3>
              
              <div className="mb-6">
                <span className="text-gray-400 text-lg line-through">De R$ 297</span>
                <div className="text-5xl font-black text-orange-500 mb-2">
                  R$ 97
                </div>
                <p className="text-gray-300">ou 12x de R$ 9,70</p>
              </div>

              <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Oferta válida por tempo limitado</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
              GARANTIR MINHA VAGA AGORA
            </button>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">
                🔒 Compra 100% segura • Garantia de 30 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;