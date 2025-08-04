import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é o Protocolo Jejum com Café Preto?",
      answer: "É um método científico que combina jejum intermitente com o consumo estratégico de café preto para potencializar a queima de gordura, aumentar a energia e melhorar a saúde geral."
    },
    {
      question: "É seguro fazer jejum intermitente?",
      answer: "Sim, o jejum intermitente é seguro para a maioria das pessoas saudáveis. Nosso protocolo inclui orientações detalhadas e recomendamos sempre consultar um médico antes de iniciar qualquer programa alimentar."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Muitas pessoas relatam sentir mais energia e clareza mental já na primeira semana. Para perda de peso visível, os resultados geralmente aparecem entre 2-4 semanas seguindo o protocolo corretamente."
    },
    {
      question: "Posso tomar café com adoçante durante o jejum?",
      answer: "O protocolo recomenda café preto puro para melhores resultados. Adoçantes artificiais podem interferir nos benefícios do jejum. Ensinamos como apreciar o café preto e suas variações permitidas."
    },
    {
      question: "E se eu não gostar de café?",
      answer: "Embora o café potencialize os resultados, o protocolo inclui alternativas como chás específicos que também oferecem benefícios similares para quem não consome café."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito com os resultados, devolvemos 100% do seu investimento."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o Protocolo Jejum com Café Preto
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors"
              >
                <h3 className="font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;