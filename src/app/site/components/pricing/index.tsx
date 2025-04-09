"use client";

import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Check } from "lucide-react";
import { motion } from "motion/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const licencasPrecos = [
  {
    tipo: "Grátis",
    recursos: [
      "Acesso 14 dias",
      "Certificado pela AGT",
      "Exportação de ficheiro SAFT-AO",
      "Gestão de Clientes",
      "Gestão de Fornecedores",
      "Gestão de Categorias",
      "Gestão de Stock",
      "Centro de Custo",
      "Até 2 utilizadores",
      "Suporte Técnico",
      "Formação",
      "Conversão de facturas",
      "Documentos ilimitados(Factura, Fatura-Recibo,Proforma e Nota de Crédito)",
    ],
    preco: "00 AOA",
    destaque: false,
    descricao: "Versão de teste",
  },
  {
    tipo: "Mensal",
    recursos: [
      "Certificado pela AGT",
      "Exportação de ficheiro SAFT-AO",
      "Gestão de Clientes",
      "Gestão de Fornecedores",
      "Gestão de Categorias",
      "Gestão de Stock",
      "Centro de Custo",
      "Até 2 utilizadores",
      "Suporte Técnico",
      "Formação Gratuita",
      "Conversão de facturas",
      "Documentos ilimitados(Factura, Fatura-Recibo,Proforma e Nota de Crédito)",
    ],
    preco: "5.500 AOA",
    destaque: true,
    descricao: "Por mês",
  },
  {
    tipo: "Semestral",
    recursos: [
      "Certificado pela AGT",
      "Exportação de ficheiro SAFT-AO",
      "Gestão de Clientes",
      "Gestão de Fornecedores",
      "Gestão de Categorias",
      "Gestão de Stock",
      "Centro de Custo",
      "Até 3 utilizadores",
      "Suporte Técnico",
      "Formação Gratuita",
      "Conversão de facturas",
      "Documentos ilimitados(Factura, Factura-Recibo, Proforma e Nota de Crédito)",
    ],
    preco: "33.000 AOA",
    destaque: false,
    descricao: "Por seis meses",
  },
  {
    tipo: "Anual",
    recursos: [
      "Certificado pela AGT",
      "Exportação de ficheiro SAFT-AO",
      "Gestão de Clientes",
      "Gestão de Fornecedores",
      "Gestão de Categorias",
      "Gestão de Stock",
      "Centro de Custo",
      "Até 5 utilizadores",
      "Suporte Técnico",
      "Formação Gratuita",
      "Conversão de facturas",
      "Documentos ilimitados(Factura, Fatura-Recibo, Proforma e Nota de Crédito)",
    ],
    preco: "66.000 AOA",
    destaque: false,
    descricao: "Por ano",
  },
  {
    tipo: "Definitiva",
    recursos: [
      "Certificado pela AGT",
      "Exportação de ficheiro SAFT-AO",
      "Gestão de Clientes",
      "Gestão de Fornecedores",
      "Gestão de Categorias",
      "Gestão de Stock",
      "Centro de Custo",
      "N utilizadores",
      "Suporte Técnico",
      "Formação Gratuita",
      "Conversão de facturas",
      "Documentos ilimitados(Factura, Fatura-Recibo, Proforma e Nota de Crédito)",
    ],
    preco: "250.000 AOA",
    destaque: false,
    descricao: "Licença permanente",
  },
];

export default function Pricing() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="pricing"
      className="py-16 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Preços que crescem com o seu negócio
          </h1>
          <p>
            O Kimagest está em constante evolução para ser mais do que um
            simples software de gestão.
          </p>
        </div>

        <Carousel className="w-full mt-8">
          <CarouselContent>
            {licencasPrecos.map((plano, index) => (
              <CarouselItem
                key={index}
                className="p-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card
                  key={index}
                  className={`flex flex-col ${
                    plano.destaque ? "relative" : ""
                  }`}
                >
                  {plano.destaque && (
                    <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                      Popular
                    </span>
                  )}

                  <CardHeader>
                    <CardTitle className="font-medium">{plano.tipo}</CardTitle>
                    <span className="my-3 block text-2xl font-semibold">
                      {plano.preco}
                    </span>
                    <CardDescription className="text-sm">
                      {plano.descricao}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <hr className="border-dashed" />

                    <ul className="list-outside space-y-3 text-sm">
                      {plano.recursos.map((recurso, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="size-3" />
                          {recurso}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="mt-auto">
                    <Button
                      asChild
                      variant={plano.destaque ? "default" : "outline"}
                      className="w-full"
                    >
                      <Link href="">Começar Agora</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </motion.section>
  );
}
