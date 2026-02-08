# 🚀 FIAP Front-End Engineering
 
![Demo: Word.Ai in classroom layout](Front-End%20Engineering/images/bg.jpg)
 
📘 **Visão Geral**
 
Este é um projeto simples de front-end usado para aprender e demonstrar conceitos básicos de desenvolvimento web: HTML, CSS e JavaScript.

Para acessar esse projeto basta entrar no link abaixo:
<a href="https://front-end-engineering.netlify.app" target="_blank">
  Acessar projeto
</a>

 
🎯 **Objetivo do projeto:** Ensinar palavras em inglês — a aplicação simula um layout em sala de aula, onde o usuário pode navegar por várias palavras exibidas na interface. Para cada palavra a aplicação retorna três itens principais: a palavra (word), uma descrição (description) e um exemplo de uso/prática (use case) — todos apresentados em inglês para reforçar o aprendizado.
 
O foco é oferecer uma experiência didática e visual (layout tipo sala de aula) que facilita revisão e memorização através de exemplos simples e frases de uso.
 
Exemplo de saída (como aparece na aplicação):
 
 - Word: "apple"
     - Description: "A round fruit with red or green skin."
     - Use case: "I ate an apple for breakfast."
 
 - Word: "teacher"
     - Description: "A person who helps students learn in school."
     - Use case: "The teacher explained the lesson clearly."
 
🧰 **Stack**
 
- **HTML:** marcação principal em `index.html`
- **CSS:** estilos em `css/style.css`
- **JavaScript:** comportamento em `js/index.js`
- **Imagens/Assets:** pasta `images/`
 
🔌 **Back-end**
 
- A aplicação consome dados via uma API para obter as palavras, descrições e exemplos de uso.
- Contingência: a chave OpenAI do professor ficou sem saldo, então construímos um mock online com 50 palavras diferentes disponível 24/7.
- Ferramenta usada: `mockapi.io`.
- Endpoint do mock: https://697fc9aa6570ee87d50d8f04.mockapi.io/ask
 
Exemplo de requisição:
 
```
GET https://697fc9aa6570ee87d50d8f04.mockapi.io/ask
```
 
Resposta típica (JSON):
 
```
{
    "id": "1",
    "word": "apple",
    "description": "A round fruit with red or green skin.",
    "use_case": "I ate an apple for breakfast."
}
```
 
O mock está público e pode ser usado enquanto a API principal não estiver disponível.
 
📁 **Estrutura do Projeto**
 
- [Front-End Engineering/index.html](Front-End%20Engineering/index.html) — arquivo de entrada
- [Front-End Engineering/css/style.css](Front-End%20Engineering/css/style.css) — estilos
- [Front-End Engineering/js/index.js](Front-End%20Engineering/js/index.js) — scripts
- [Front-End Engineering/images/](Front-End%20Engineering/images/) — ativos estáticos (imagens, ícones)
 
 
⚙️ **Como executar localmente**
 
1. Clone o repositório ou baixe o ZIP:
 
```bash
git clone https://github.com/GuilhermeHASena/Front-End-Engineering.git
cd Front-End-Engineering
```
 
2. Abra o arquivo `index.html` no navegador:
 
- Pelo gerenciador de arquivos: dê um duplo clique em `index.html`.
- Pelo terminal (Linux): `xdg-open index.html`.
 
🚀 **Deploy (Netlify)**
 
Passo a passo rápido para publicar a aplicação no Netlify:
 
1. Crie uma conta em https://app.netlify.com/ (se ainda não tiver).
2. Opções de deploy:
 
     - Método rápido (arrastar e soltar):
 
         - Acesse https://app.netlify.com/sites/new
         - Arraste a pasta `Front-End-Engineering` (ou `Front-End Engineering`) para a área "Deploy your site".
 
     - Método via Git (automático):
 
         - Faça push do repositório no GitHub.
         - No Netlify, clique em "New site from Git" → conecte sua conta GitHub → selecione o repositório `Front-End-Engineering`.
         - Em "Build command" deixe em branco (não é necessário para site estático) e em "Publish directory" informe `Front-End-Engineering` (ou o caminho relativo correto onde está o `index.html`).
 
     - Método via CLI (manual):
 
         ```bash
         npm install -g netlify-cli
         # entre na pasta do projeto onde está o index.html
         cd "Front-End-Engineering"
         netlify login
         netlify deploy --dir="." --prod
         ```
 
3. Após o deploy, o Netlify fornecerá uma URL pública para o site. Você pode configurar um domínio customizado nas configurações do site.
 
Observações:
 
- Se seu projeto estiver em uma subpasta com espaço no nome, informe o caminho correto ao Netlify ou mova os arquivos para uma pasta sem espaços.
- Para recursos que fazem requisições a APIs externas (CORS), configure as permissões ou use um proxy se necessário.
 
📊 **Lighthouse & Métricas de Performance**

![b9801488-cf44-4a57-8a70-6bc12705faf7](https://github.com/user-attachments/assets/4f1c556e-9575-4588-9c56-d3e80db3329b)

![0c0372d5-26ef-4a1e-a2d3-bc3079e33241](https://github.com/user-attachments/assets/4e6e2643-9767-4c5e-90ce-05b64afa2253)

 
O Lighthouse é uma ferramenta do Google que analisa a performance, acessibilidade, SEO e boas práticas da aplicação. Aqui estão as principais métricas medidas:
 
- **FCP (First Contentful Paint):** Mede quanto tempo leva para o navegador renderizar o primeiro elemento visível na tela (texto, imagem ou background). Um FCP rápido (< 1.8s) oferece feedback visual imediato ao usuário.
 
- **SI (Speed Index):** Quantifica a velocidade com que os elementos visuais da página ficam visíveis e interativos durante o carregamento. Quanto mais baixo, melhor a percepção de rapidez pelo usuário.
 
- **LCP (Largest Contentful Paint):** Marca o momento em que o maior bloco de conteúdo (imagem, vídeo ou parágrafo de texto) termina de carregar e fica visível. Este é um bom indicador de quando a página está "pronta". Objetivo: < 2.5s.
 
- **TBT (Total Blocking Time):** Mede o tempo cumulativo em que o main thread (thread principal do navegador) fica bloqueado por scripts pesados, impedindo respostas rápidas a interações do usuário. TBT baixo (< 300ms) garante interface responsiva.
 
- **CLS (Cumulative Layout Shift):** Quantifica as mudanças inesperadas no layout durante o carregamento (imagens que aparecem e "empurram" o texto para baixo, por exemplo). Um CLS baixo (< 0.1) proporciona uma experiência visual estável e previsível.
 
**Como rodar Lighthouse:**
 
1. Abra a aplicação no navegador com DevTools aberto (F12).
2. Vá para a aba **Lighthouse**.
3. Clique em **Analyse page load** e aguarde a análise.
4. Revise os scores e dicas de melhoria fornecidas.
 
ℹ️ **Licença & Créditos**
 
- Projeto: Front-End Engineering — exemplo educacional.
- Sinta-se à vontade para clonar, modificar e usar como base para estudos.
 
👥 **Integrantes do projeto**
 
- Guilherme Henrique de Amorim Sena — RM: 362713
- Thayson Rodrigues de Souza        — RM: 361713
- Nicolas Garcia Maloucaze Pereira  — RM: 360381
- Ricardo Lourenço da Silva         — RM: 362046
