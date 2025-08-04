import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "34 anos",
      result: "Perdeu 12kg em 3 meses",
      text: "Nunca pensei que seria possível perder peso de forma tão natural e saudável. O protocolo mudou completamente minha relação com a comida e meu corpo.",
      rating: 5
    },
    {
      name: "João Santos",
      age: "42 anos", 
      result: "Mais energia e foco",
      text: "Minha produtividade no trabalho aumentou drasticamente. Tenho mais energia, durmo melhor e me sinto 10 anos mais jovem.",
      rating: 5
    },
    {
      name: "Ana Costa",
      age: "28 anos",
      result: "Eliminou a ansiedade alimentar",
      text: "Finalmente consegui controlar minha compulsão por doces. O jejum me deu o controle que eu precisava sobre minha alimentação.",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Histórias de Sucesso
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja os resultados reais de pessoas que transformaram suas vidas com o Protocolo Jejum
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-700 relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-500/20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-700 pt-4">
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.age}</p>
                <p className="text-sm text-orange-500 font-medium mt-1">
                  {testimonial.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;