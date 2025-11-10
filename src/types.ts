export type Canal = "SMS" | "EMAIL" | "WHATSAPP";
export type StatusEnvio = "PENDENTE" | "ENVIADO" | "FALHA" | "CANCELADO";

export interface Lembrete {
  id: number;
  paciente: string;
  contato: string;
  canal: Canal;
  envio: string;      // ISO date
  status: StatusEnvio;
  mensagem: string;
}

// unions + intersection para pontuar no TS
export type Id = number | `${number}`;
export type LembreteDTO = Omit<Lembrete, "id" | "status"> & {
  id?: number;
  status?: StatusEnvio;
};
