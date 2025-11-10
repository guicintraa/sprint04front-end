import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Api } from "../services/api";
import type { Lembrete } from "../types";

export default function LembreteDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [l, setL] = useState<Lembrete | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    Api.obterLembrete(id).then(setL).catch((e) => setErro(e.message));
  }, [id]);

  const onExcluir = async () => {
    if (!id) return;
    if (!confirm("Excluir este lembrete?")) return;
    try {
      await Api.excluirLembrete(id);
      navigate("/lembretes");
    } catch (e: any) {
      alert(e.message || "Falha ao excluir");
    }
  };

  if (erro) return <p className="text-red-600">Erro: {erro}</p>;
  if (!l) return <p>Carregando…</p>;

  return (
    <article className="max-w-2xl mx-auto space-y-2">
      <h1 className="text-2xl font-bold">{l.paciente}</h1>
      <p><b>Contato:</b> {l.contato} • <b>Canal:</b> {l.canal} • <b>Status:</b> {l.status}</p>
      <p className="mt-2">{l.mensagem}</p>
      <div className="mt-4 flex gap-3">
        <Link to={`/lembretes/${l.id}/editar`} className="rounded-xl border px-4 py-2 hover:bg-zinc-100">Editar</Link>
        <button onClick={onExcluir} className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700">Excluir</button>
        <button onClick={() => navigate(-1)} className="rounded-xl border px-4 py-2 hover:bg-zinc-100">Voltar</button>
      </div>
    </article>
  );
}
