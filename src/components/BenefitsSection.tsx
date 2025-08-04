import React from 'react';
import { Zap, Heart, Brain, Scale, Clock, Shield } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Perda de Peso Acelerada",
      description: "Queime gordura de forma mais eficiente com o poder do jejum intermitente potencializado pelo café preto."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Energia Sustentada",
      description: "Mantenha níveis altos de energia durante todo o dia sem os picos e quedas de açúcar no sangue."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Clareza Mental",
      description: "Experimente maior foco, concentração e clareza mental com a cetose induzida pelo jejum."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Saúde Cardiovascular",
      description: "Melhore a saúde do coração com a redução da pressão arterial e melhora do perfil lipídico."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Longevidade",
      description: "Ative processos de autofagia que promovem a renovação celular e o antienvelhecimento."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sistema Imunológico",
      description: "Fortaleça suas defesas naturais e melhore a resistência a doenças e inflamações."
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Benefícios Comprovados
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra como o Protocolo Jejum com Café Preto pode transformar sua saúde e bem-estar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-orange-500 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;