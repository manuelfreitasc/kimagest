import { Card } from '../../../components/ui/card'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import { Button } from '../../../components/ui/button'
import { Label } from '../../../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import Link from 'next/link'

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">Fale Conosco</h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">Contacto</h2>
                            <Link href="mailto:geral@kima-solucoes.com" className="text-lg text-blue-600 hover:underline dark:text-blue-400">
                                geral@kima-solucoes.com
                            </Link>
                            <p className="mt-3 text-sm">Tel: 932506463 / 950513180</p>
                            <div className="mt-4">
                                <h3 className="mb-2 text-sm font-medium">Redes Sociais</h3>
                                <div className="flex flex-col space-y-1 text-sm">
                                    <p>WhatsApp: 950513180</p>
                                    <p>Facebook: Kima Soluções Tecnológicas</p>
                                    <p>Instagram: kima_solucoes</p>
                                    <p>LinkedIn: Kima Soluções Tecnológicas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Sobre Nós</h3>
                            <p className="text-lg font-medium">Kima Soluções Tecnológicas</p>
                            <p className="mt-2 text-sm">Oferecemos soluções tecnológicas inovadoras para empresas de todos os tamanhos, com foco em digitalização, automação e desenvolvimento de software personalizado.</p>
                            <Link href="mailto:geral@kima-solucoes.com" className="mt-3 inline-block text-blue-600 hover:underline dark:text-blue-400">
                                geral@kima-solucoes.com
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="h-3 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
                <form action="" className="border px-4 py-12 lg:px-0 lg:py-24">
                    <Card className="mx-auto max-w-lg p-8 sm:p-16">
                        <h3 className="text-xl font-semibold">Envie-nos uma mensagem</h3>
                        <p className="mt-4 text-sm">Entre em contacto com a nossa equipa! Estamos ansiosos para saber mais sobre o seu projeto e como podemos ajudar a sua empresa.</p>

                        <div className="**:[&>label]:block mt-12 space-y-6 *:space-y-3">
                            <div>
                                <Label htmlFor="name" className="space-y-2">
                                    Nome Completo
                                </Label>
                                <Input type="text" id="name" required />
                            </div>
                            <div>
                                <Label htmlFor="email" className="space-y-2">
                                    Email
                                </Label>
                                <Input type="email" id="email" required />
                            </div>
                            <div>
                                <Label htmlFor="country" className="space-y-2">
                                    País/Região
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o país" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Angola</SelectItem>
                                        <SelectItem value="2">Portugal</SelectItem>
                                        <SelectItem value="3">Brasil</SelectItem>
                                        <SelectItem value="4">Moçambique</SelectItem>
                                        <SelectItem value="5">Outro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="website" className="space-y-2">
                                    Website da Empresa
                                </Label>
                                <Input type="url" id="website" />
                            </div>
                            <div>
                                <Label htmlFor="job" className="space-y-2">
                                    Setor de Atividade
                                </Label>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecione o setor" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="1">Tecnologia</SelectItem>
                                        <SelectItem value="2">Educação</SelectItem>
                                        <SelectItem value="3">Retalho</SelectItem>
                                        <SelectItem value="4">Saúde</SelectItem>
                                        <SelectItem value="5">Finanças</SelectItem>
                                        <SelectItem value="6">Outro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="msg" className="space-y-2">
                                    Mensagem
                                </Label>
                                <Textarea id="msg" rows={3} placeholder="Descreva seu projeto ou necessidade" />
                            </div>
                            <Button>Enviar</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </section>
    )
}
