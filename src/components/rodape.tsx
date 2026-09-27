import {
  EMPRESA_CIDADE,
  EMPRESA_CNPJ,
  EMPRESA_EMAIL,
  EMPRESA_NOME,
  EMPRESA_RAZAO_SOCIAL,
  JB_GESTAO_URL,
} from "@/lib/empresa";

export default function Rodape() {
  return (
    <footer className="bg-jb-navy-950 text-white/70">
      <div className="h-1.5 bg-gradient-to-r from-jb-navy via-jb-navy to-jb-orange" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-base font-bold text-white">{EMPRESA_NOME}</p>
          <p className="mt-2">Terceirização de serviços para condomínios.</p>
          <p className="mt-1">{EMPRESA_CIDADE}</p>
          <p className="mt-3 text-xs">
            Serviços presenciais em Natal e região metropolitana. Soluções de tecnologia para todo o
            Brasil.
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-white">Contato</p>
          <p>
            <a href={`mailto:${EMPRESA_EMAIL}`} className="hover:text-white">
              {EMPRESA_EMAIL}
            </a>
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-white">Links</p>
          <p>
            <a href={JB_GESTAO_URL} className="hover:text-white">
              Acessar o JB Gestão
            </a>
          </p>
          <p>
            <a href="/privacidade" className="hover:text-white">
              Política de Privacidade
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs sm:px-6">
          © {new Date().getFullYear()} {EMPRESA_NOME} · {EMPRESA_RAZAO_SOCIAL} · CNPJ {EMPRESA_CNPJ}
        </p>
      </div>
    </footer>
  );
}
