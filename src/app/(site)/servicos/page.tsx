import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import { Settings2, Sparkles, Zap, Users, UserPlus, PiggyBank, FileText, FileSpreadsheet, BarChart } from "lucide-react";
import { ReactNode } from "react";

// Array de funcionalidades principais
const funcionalidadesPrincipais = [
  {
    titulo: "Gestão de Utilizadores",
    descricao: "Permite administrar acessos e permissões dos colaboradores, garantindo a segurança das informações.​",
    icone: <Users className="size-6" aria-hidden />
  },
  {
    titulo: "Gestão de Clientes",
    descricao: "Facilita o cadastro e acompanhamento dos clientes, centralizando informações essenciais para um atendimento eficaz.​",
    icone: <UserPlus className="size-6" aria-hidden />
  },
  {
    titulo: "Gestão de Caixa",
    descricao: "Oferece controle detalhado das entradas e saídas financeiras, auxiliando no monitoramento do fluxo de caixa da empresa.​",
    icone: <PiggyBank className="size-6" aria-hidden />
  },
  {
    titulo: "Emissão de Documentos Fiscais",
    descricao: "Capacita a emissão de diversos documentos, tais como: Factura, Factura-Recibo, Nota de Crédito, Factura-Proforma.​",
    icone: <FileText className="size-6" aria-hidden />
  },
  {
    titulo: "Emissão de Ficheiro SAFT",
    descricao: "Gera o ficheiro SAFT (Standard Audit File for Tax Purposes), facilitando a comunicação de dados fiscais às autoridades tributárias.​",
    icone: <FileSpreadsheet className="size-6" aria-hidden />
  },
  {
    titulo: "Emissão de Relatórios",
    descricao: "Disponibiliza relatórios detalhados sobre as operações da empresa, fornecendo insights valiosos para a tomada de decisões estratégicas.",
    icone: <BarChart className="size-6" aria-hidden />
  }
];

export default function Features() {
  return (
    <section
      id="servicos"
      className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent "
    >
      <div className="@container mx-auto max-w-5xl px-6 ">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Funcionalidades Principais
          </h2>
          <p className="mt-4">
            Soluções completas para a gestão do seu negócio
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {funcionalidadesPrincipais.map((funcionalidade, index) => (
            <Card key={index} className="group shadow-zinc-950/5">
              <CardHeader className="pb-3">
                <CardDecorator>
                  {funcionalidade.icone}
                </CardDecorator>

                <h3 className="mt-6 font-medium">{funcionalidade.titulo}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm">
                  {funcionalidade.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
