import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Anderson Raulino</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="Compartilhando sobre as coisas que uso para construir software. Aqui está uma grande lista de todas as minhas coisas favoritas."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Asus VivoBook 15 X512Fj">
            O Asus VivoBook 15 X512Fj é um laptop elegante e poderoso que combina
             desempenho sólido com um design moderno e portátil.  Equipado com um 
             processador Intel Core de última geração, uma placa de vídeo dedicada
             NVIDIA GeForce, e uma tela Full HD de 15,6 polegadas, este laptop oferece 
             um desempenho excepcional para tarefas diárias, multitarefas e até mesmo jogos leves.
            </Tool>
            <Tool title="Anne Pro 2">
            O Anne Pro 2 é um teclado mecânico compacto e altamente personalizável, projetado para 
            entusiastas de teclados e jogadores.
            </Tool>
            <Tool title="Mouse Gamer MO274">
            O mouse gamer MO274 é um periférico projetado para atender às necessidades dos jogadores 
            mais exigentes. Com características específicas para melhorar o desempenho nos jogos, 
            este mouse oferece precisão, velocidade e personalização.
            </Tool>
            <Tool title="MousePad Grande Speed 90x40">
              Something about all the gestures makes me feel like a wizard with
              special powers. I really like feeling like a wizard with special
              powers.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Desde o meu inicio na programação, o Visual Studio Code sempre foi em minha opinião o 
              melhor editor de código.
            </Tool>
            <Tool title="GitHub">
              Um excelente repositório para publicar seus projetos, trocar idéias, tirar dúvidas e muito mais.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Auxiliary tools">
            <Tool title="Unsplash">
            Fonte de recursos visuais da internet.
            Fornecidos por criadores de todo o mundo.
            </Tool>
            <Tool title="Google Fonts">
            Uma biblioteca com mais de 800 fontes livres licenciadas.
            </Tool>
            <Tool title="Phosphor Icons">
            Phosphor é uma família de ícones flexível para interfaces, diagramas, apresentações.
            </Tool>
            <Tool title="Radix UI">
            Um sistema de cores lindo e acessível para interfaces de usuário. Sistema de cores 
            abrangente para criar sites e aplicativos bonitos e acessíveis.
            </Tool>
            <Tool title="Code Pen">
            CodePen é um ambiente de desenvolvimento social para designers e desenvolvedores 
            front-end. Crie e implante um site, mostre seu trabalho, crie casos de teste para 
            aprender e depurar e encontre inspiração.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
