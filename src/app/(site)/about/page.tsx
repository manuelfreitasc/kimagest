import { Button } from "../../../components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection() {
  return (
    <section className="py-16 md:pt-60">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-medium">
            Sistema de Gestão Empresarial Kimagest
          </h2>
          <div className="space-y-6">
            <p>
              ​O Kimagest é um software online de gestão e faturação
              desenvolvido para atender às necessidades de empresas que buscam
              eficiência e conformidade fiscal em suas operações comerciais.
              Licenciado pela Administração Geral Tributária (AGT) de Angola, o
              Kimagest assegura que os documentos fiscais emitidos estejam em
              conformidade com as regulamentações fiscais vigentes no país, a
              marca Kimagest é propriedade da empresa Kima Soluções
              Tecnológicas.
            </p>
            {/* <Button
              asChild
              variant="secondary"
              size="sm"
              className="gap-1 pr-1.5"
            >
              <Link href="#">
                <span>Learn More</span>
                <ChevronRight className="size-2" />
              </Link>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
