<div align="center">
  <img src="https://i.imgur.com/C3uUjIX.png" alt="Logo Dra. Poliana Rangel Mattar" width="250" />
</div>

# 🧠 Site Profissional - Dra. Poliana Rangel Mattar | Psicóloga

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Site institucional moderno e responsivo desenvolvido para a psicóloga **Dra. Poliana Rangel Mattar**. O projeto apresenta seus serviços, formação acadêmica, práticas integrativas, materiais gratuitos, página exclusiva de Neuropsicologia e canal de contato direto via WhatsApp.

🔗 **Acesse o site:** [dra-polianamattar.vercel.app](https://dra-polianamattar.vercel.app)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Paleta de Cores](#paleta-de-cores)
- [Seções e Páginas do Site](#seções-e-páginas-do-site)
- [Como Executar](#como-executar)
- [Deploy na Vercel](#deploy-na-vercel)
- [Contribuição](#contribuição)
- [Contato](#contato)

## 🎯 Sobre o Projeto

Este site foi desenvolvido com o objetivo de criar uma presença online profissional para a Dra. Poliana, psicóloga com vasta experiência em psicoterapia, avaliações psicológicas (incluindo neuropsicológicas) e práticas integrativas. O projeto prioriza:

- **Experiência do usuário** fluida e acolhedora
- **Design responsivo** funcionando perfeitamente em mobile, tablet e desktop
- **Navegação SPA** com React Router e scroll suave
- **Acessibilidade** e boas práticas de SEO
- **Canal direto** para contato via WhatsApp

## ✨ Funcionalidades

- ✅ **Navbar fixa** com logo, menu responsivo e lógica inteligente de navegação (âncoras e rotas)
- ✅ **Hero section** com frases animadas sobre saúde mental (rotativo automático)
- ✅ **Seção de boas-vindas** com texto acolhedor e foto profissional
- ✅ **Serviços** em cards com descrições completas e **Avaliações Especializadas** em checklist
- ✅ **Seção Resumo de Neuropsicologia** na Home com botão "Saiba Mais"
- ✅ **Página dedicada de Neuropsicologia** com informações detalhadas, público-alvo e metodologia
- ✅ **Sobre mim** completo com formação, especializações e experiências
- ✅ **Práticas Integrativas** com Florais de Bach e Terapia Artística Antroposófica
- ✅ **Importância da terapia** seção de conscientização
- ✅ **Materiais gratuitos** com cartilhas e publicações para download
- ✅ **Footer** com links rápidos, serviços resumidos e contatos
- ✅ **Botão do WhatsApp** de contato rápido
- ✅ **ScrollToTop** para navegação iniciar sempre no topo da página
- ✅ **100% responsivo** - se adapta a todos os tamanhos de tela

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React** | Biblioteca para construção da interface |
| **React Router DOM** | Roteamento de páginas (SPA) |
| **TypeScript** | Tipagem estática para maior robustez |
| **Tailwind CSS v4** | Framework CSS utilitário para estilização |
| **Vite** | Build tool rápida para desenvolvimento |
| **Framer Motion** | Animações suaves e profissionais |
| **React Intersection Observer** | Detecta elementos na viewport para animações |
| **Lucide React** | Ícones leves e personalizáveis |
| **Vercel** | Hospedagem e deploy contínuo |

## 📁 Estrutura do Projeto

```text
site-psicologa/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── IntegrativePractices.tsx
│   │   │   ├── NeuropsicologiaResumo.tsx
│   │   │   ├── Resources.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── TherapyImportance.tsx
│   │   │   └── Welcome.tsx
│   │   └── ui/
│   ├── pages/
│   ├── types/
│   ├── ScrollToTop.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .qodo/
├── .vscode/
├── dist/
├── node_modules/
└── README.md
````
## 🎨 Paleta de Cores

O projeto utiliza a identidade visual da marca:

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| **Primary** | `#A1A491` | Títulos principais, detalhes, gradientes |
| **Secondary** | `#CEBABF` | Subtítulos, aspas, bordas, destaques |
| **Footer** | `#47493A` | Fundo do rodapé |
| **Neuropsicologia** | `#55753C` | Fundo da seção de chamada de Neuropsicologia |
| **WhatsApp** | `#25D366` | Botões de contato |

## 📱 Seções e Páginas do Site

| Ordem | Seção / Página | Descrição |
|-------|----------------|-----------|
| 1️⃣ | **Hero** | Apresentação inicial com frases animadas |
| 2️⃣ | **Welcome** | Boas-vindas acolhedoras |
| 3️⃣ | **Services** | Serviços oferecidos + Avaliações Especializadas |
| 4️⃣ | **NeuropsicologiaResumo** | Chamada com botão "Saiba Mais" para a página dedicada |
| 5️⃣ | **About** | Sobre a psicóloga, formação e experiências |
| 6️⃣ | **IntegrativePractices** | Práticas Integrativas: Florais de Bach e Terapia Artística |
| 7️⃣ | **TherapyImportance** | Importância da Terapia |
| 8️⃣ | **Resources** | Materiais gratuitos e cartilhas para download |
| ➕ | **Neuropsicologia (Página)** | Página exclusiva com detalhes sobre Avaliação Neuropsicológica |

## 💻 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/site-psicologa.git
   cd site-psicologa

   npm install
# ou
yarn install

2. **Instale as dependências**

npm install
# ou
yarn install

3. **Execute o servidor de desenvolvimento**   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## ☁️ Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. **Crie uma conta** em [vercel.com](https://vercel.com)
2. **Importe o repositório** do GitHub
3. **Configurações automáticas** (a Vercel detecta Vite)
4. **Clique em Deploy** 🚀

Seu site estará disponível em `https://seu-projeto.vercel.app`

### Deploy manual via CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos:

1. **Fork** o projeto
2. **Crie uma branch** (`git checkout -b feature/nova-feature`)
3. **Commit** suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

## 📞 Contato


**Desenvolvimento**

- 👩‍💻 Desenvolvido por: [Paula Melo](mailto:paulamelo2404@gmail.com)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido com 💚 para saúde mental</p>
  <p>© 2026 Dra. Poliana Rangel Mattar. Todos os direitos reservados.</p>
</div>
```
