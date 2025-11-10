import type { Lembrete, LembreteDTO, Id } from "../types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string | undefined;

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  if (BASE_URL) {
    const res = await fetch(`${BASE_URL}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...init,
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} - ${text || res.statusText}`);
    }
    return res.status === 204 ? (undefined as T) : (await res.json());
  }

  // Fallback de mock quando a API não está disponível (apenas GET)
  if (path === "/lembretes" && (!init || !init.method || init.method === "GET")) {
    const res = await fetch("/data/lembretes.json");
    return (await res.json()) as T;
  }

  throw new Error("API indisponível. Defina VITE_API_BASE_URL para realizar o CRUD.");
}

export const Api = {
  listarLembretes: () => http<Lembrete[]>("/lembretes"),
  obterLembrete: (id: Id) => http<Lembrete>(`/lembretes/${id}`),
  criarLembrete: (data: LembreteDTO) =>
    http<Lembrete>("/lembretes", { method: "POST", body: JSON.stringify(data) }),
  atualizarLembrete: (id: Id, data: LembreteDTO) =>
    http<Lembrete>(`/lembretes/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  excluirLembrete: (id: Id) =>
    http<void>(`/lembretes/${id}`, { method: "DELETE" }),
};
