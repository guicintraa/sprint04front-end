import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Api } from "../services/api";
import type { Lembrete, LembreteDTO, Canal } from "../types";

export default function LembreteForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const editando = Boolean(id);

  const [form, setForm] = useState<LembreteDTO>({
    paciente: "",
    contato: "",
    canal: "EMAIL",
    envio: new Date().toISOString(),
    mensagem: "",
  });
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!editando) return;
    Api.obterLembrete(id!)
      .then((l: Lembrete) =>
        setForm({
          paciente: l.paciente,
          contato: l.contato,
          canal: l.canal,
          envio: l.envio,
          mensagem: l.mensagem,
          status: l.status,
        })
      )
      .catch((e) => setErro(e.message));
  }, [editando, id]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editando) await Api.atualizarLembrete(id!, form);
      else await Api.criarLembrete(form);
      navigate("/lembretes");
    } catch (e: any) {
      setErro(e.message || "Falha ao salvar");
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">{editando ? "Editar" : "Novo"} lembrete</h1>
      {erro && <p className="text-red-600">{erro}</p>}

      <div>
        <label className="block text-sm font-medium">Paciente</label>
        <input
          className="mt-1 w-full rounded-xl border px-3 py-2"
          value={form.paciente}
          onChange={(e) => setForm({ ...form, paciente: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Contato (email/telefone)</label>
        <input
          className="mt-1 w-full rounded-xl border px-3 py-2"
          value={form.contato}
          onChange={(e) => setForm({ ...form, contato: e.target.value })}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Canal</label>
          <select
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={form.canal}
            onChange={(e) => setForm({ ...form, canal: e.target.value as Canal })}
          >
            <option value="EMAIL">EMAIL</option>
            <option value="SMS">SMS</option>
            <option value="WHATSAPP">WHATSAPP</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Data/Hora de envio (ISO)</label>
          <input
            className="mt-1 w-full rounded-xl border px-3 py-2"
            value={form.envio}
            onChange={(e) => setForm({ ...form, envio: e.target.value })}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Mensagem</label>
        <textarea
          className="mt-1 w-full rounded-xl border px-3 py-2"
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
        />
      </div>

      <div className="flex gap-3">
        <button className="rounded-xl bg-zinc-900 px-4 py-2 text-white" type="submit">Salvar</button>
        <button className="rounded-xl border px-4 py-2" onClick={() => navigate(-1)} type="button">Cancelar</button>
      </div>
    </form>
  );
}
