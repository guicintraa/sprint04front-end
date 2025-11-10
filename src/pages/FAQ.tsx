import { useState } from "react";

interface Pergunta {
  pergunta: string;
  resposta: string;
}

const faqList: Pergunta[] = [
  {
    pergunta: "Como faço login no aplicativo?",
    resposta:
      "Para fazer login, você precisa inserir seu CPF e senha cadastrada. Caso tenha esquecido, utilize a opção 'Esqueci minha senha'.",
  },
  {
    pergunta: "Não consigo posicionar minha câmera na teleconsulta. O que fazer?",
    resposta:
      "Verifique se o navegador tem permissão para acessar sua câmera. Use um suporte para celular e posicione em um local com boa iluminação.",
  },
  {
    pergunta: "Posso remarcar minha consulta pelo aplicativo?",
    resposta:
      "Sim, acesse a aba 'Consultas' no aplicativo e selecione a opção de reagendamento disponível.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState<number | null>(null);

  const toggle = (index: number) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-sky-700">
        Perguntas Frequentes
      </h1>

      <div className="space-y-4">
        {faqList.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 border border-sky-100"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center font-semibold text-lg text-sky-800 focus:outline-none"
            >
              {item.pergunta}
              <span className="ml-2 text-sky-500">
                {aberta === index ? "−" : "+"}
              </span>
            </button>

            {aberta === index && (
              <p className="mt-3 text-gray-700 transition-all duration-300">
                {item.resposta}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
