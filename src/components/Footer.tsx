import React from 'react';
import { Coffee, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold text-white">Protocolo Jejum</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforme sua vida através do jejum intermitente potencializado pelo café preto. 
              Método científico para queima de gordura e aumento de energia.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#preco" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e Garantias */}
          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>suporte@protocolojejum.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Garantia de 30 dias</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Protocolo Jejum. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Desenvolvido com ❤️ para sua transformação
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;