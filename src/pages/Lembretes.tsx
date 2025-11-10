import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "../services/api";
import type { Lembrete } from "../types";

export default function Lembretes() {
  const [itens, setItens] = useState<Lembrete[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    Api.listarLembretes()
      .then(setItens)
      .catch((e) => setErro(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="animate-pulse">Carregando…</p>;
  if (erro) return <p className="text-red-600">Erro: {erro}</p>;
  if (!itens.length)
    return (
      <div className="space-y-4">
        <p>Nenhum lembrete cadastrado.</p>
        <Link className="inline-block rounded-xl bg-zinc-900 px-4 py-2 text-white" to="/lembretes/novo">
          Novo lembrete
        </Link>
      </div>
    );

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Lembretes</h2>
        <Link className="rounded-xl bg-zinc-900 px-4 py-2 text-white" to="/lembretes/novo">
          Novo lembrete
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {itens.map((l) => (
          <Link key={l.id} to={`/lembretes/${l.id}`} className="rounded-2xl border bg-white p-4 shadow hover:shadow-md">
            <h3 className="text-lg font-semibold">{l.paciente}</h3>
            <p className="text-sm text-zinc-600">Canal: {l.canal} • Status: {l.status}</p>
            <p className="mt-1 text-sm line-clamp-2">{l.mensagem}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
