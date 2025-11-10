import React from "react";

export default function Integrantes() {
  const membros = [
    {
      nome: "Caio Felipe Silva",
      rm: "564615",
      turma: "1TDSPV",
      foto: "/imagens/caio.jpeg",
      github: "https://github.com/caio-F1",
      linkedin: "https://www.linkedin.com/in/caiofelipesilva-f1/",
    },
    {
      nome: "Guilherme Batista Cintra",
      rm: "562850",
      turma: "1TDSPV",
      foto: "/imagens/guilherme.jpeg",
      github: "https://github.com/guicintraa",
      linkedin:
        "https://www.linkedin.com/search/results/all/?keywords=guilherme%20cintra",
    },
    {
      nome: "Davi Tagawa Schincaglia Lima Lemos",
      rm: "563457",
      turma: "1TDSPV",
      foto: "/imagens/davi.jpeg",
      github: "https://github.com/dtagawa",
      linkedin: "https://www.linkedin.com/in/davi-lemos-2b2618285/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Quem Somos</h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {membros.map((m, i) => (
          <article
            key={i}
            className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition w-full max-w-sm"
          >
            <img
              src={m.foto}
              alt={`Foto ${m.nome}`}
              className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-sky-500 shadow-md"
            />
            <h2 className="text-xl font-semibold">{m.nome}</h2>
            <p className="text-gray-600">
              RM: {m.rm} | Turma: {m.turma}
            </p>

            <div className="flex justify-center gap-4 mt-4">
              <a
                href={m.github}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href={m.linkedin}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
