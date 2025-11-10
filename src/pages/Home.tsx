import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-gray-100 flex-1">
      <div className="max-w-5xl mx-auto p-6">
        <section className="bg-white rounded-xl shadow-md p-10 mb-12 border border-sky-100 text-center">
          <h1 className="text-4xl font-bold text-sky-700 mb-4">
            Bem-vindo ao Hospital das Clínicas
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Nosso aplicativo facilita agendamentos, consultas e comunicação
            com a equipe médica, garantindo mais praticidade e eficiência
            no seu atendimento.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/integrantes"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Conheça os Integrantes
            </Link>

            <Link
              to="/faq"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Perguntas Frequentes
            </Link>

            <Link
              to="/contato"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Entre em Contato
            </Link>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-3">
          <article className="p-6 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-sky-600">
              Ajuda com Login
            </h3>
            <p className="text-gray-600">
              Dificuldades para acessar o app? Veja nosso passo a passo
              ou confira o FAQ.
            </p>
          </article>

          <article className="p-6 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-sky-600">
              Configuração de Câmera
            </h3>
            <p className="text-gray-600">
              Orientações para posicionar corretamente a câmera durante
              a teleconsulta.
            </p>
          </article>

          <article className="p-6 bg-white shadow-md rounded-xl border border-gray-200 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-sky-600">
              Dúvidas Frequentes
            </h3>
            <p className="text-gray-600">
              Acesse perguntas e respostas imediatas sobre nosso
              aplicativo e serviços.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
