import React, { useState } from "react";

export default function Contato() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("✅ Mensagem enviada com sucesso!");

    // limpa após 4s
    setTimeout(() => setStatus(""), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Entre em Contato Conosco
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4"
      >
        <label className="flex flex-col">
          Nome:
          <input
            type="text"
            name="nome"
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Email:
          <input
            type="email"
            name="email"
            required
            className="border p-2 rounded"
          />
        </label>

        <label className="flex flex-col">
          Mensagem:
          <textarea
            name="mensagem"
            required
            className="border p-2 rounded min-h-[120px]"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Enviar
        </button>

        {status && (
          <p className="text-green-600 font-semibold text-center">{status}</p>
        )}
      </form>
    </section>
  );
}
