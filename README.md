# 🧠 Site Profissional - Dra. Poliana Rangel Mattar | Psicóloga

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Site institucional moderno e responsivo desenvolvido para a psicóloga **Dra. Poliana Rangel Mattar**. O projeto apresenta seus serviços, formação acadêmica, experiências internacionais e canal de contato direto via WhatsApp.

🔗 **Acesse o site:** [dra-polianamattar.vercel.app](https://poliana-rangel-mattar-psic-loga.vercel.app/) 

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Paleta de Cores](#paleta-de-cores)
- [Como Executar](#como-executar)
- [Deploy na Vercel](#deploy-na-vercel)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## 🎯 Sobre o Projeto

Este site foi desenvolvido com o objetivo de criar uma presença online profissional para a Dra. Poliana, psicóloga com mais de 11 anos de experiência, atendimento no Brasil e no exterior. O projeto prioriza:

- **Experiência do usuário** fluida e acolhedora
- **Design responsivo** funcionando perfeitamente em mobile, tablet e desktop
- **Carregamento rápido** e otimizado
- **Acessibilidade** e boas práticas de SEO
- **Canal direto** para contato via WhatsApp

---

## ✨ Funcionalidades

- ✅ **Navbar fixa** com logo redonda e menu responsivo
- ✅ **Hero section** com frases animadas sobre saúde mental (rotativo automático)
- ✅ **Seção de boas-vindas** com texto acolhedor e foto profissional
- ✅ **Serviços** em cards com descrições completas (9 especialidades)
- ✅ **Sobre mim** completo com formação, especializações, experiências e contatos
- ✅ **Importância da terapia** seção de conscientização
- ✅ **Footer** com links rápidos, serviços resumidos e contatos
- ✅ **Botão flutuante do WhatsApp** (em todas as páginas)
- ✅ **Scroll suave** para navegação por âncoras
- ✅ **100% responsivo** - se adapta a todos os tamanhos de tela

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| [React](https://reactjs.org/) | Biblioteca para construção da interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática para maior robustez |
| [Tailwind CSS](https://tailwindcss.com/) | Framework CSS utilitário para estilização |
| [Vite](https://vitejs.dev/) | Build tool rápida para desenvolvimento |
| [Framer Motion](https://www.framer.com/motion/) | Animações suaves e profissionais |
| [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) | Detecta elementos na viewport para animações |
| [Lucide React](https://lucide.netlify.app/) | Ícones leves e personalizáveis |
| [Vercel](https://vercel.com/) | Hospedagem e deploy contínuo |

---

## 📁 Estrutura do Projeto

```
site-psicologa/
├── public/                  # Arquivos públicos (favicon, imagens estáticas)
├── src/
│   ├── components/
│   │   ├── layout/          # Componentes de estrutura
│   │   │   ├── Navbar.tsx   # Barra de navegação fixa
│   │   │   └── Footer.tsx   # Rodapé completo
│   │   ├── sections/        # Seções da página
│   │   │   ├── Hero.tsx     # Seção inicial com frases animadas
│   │   │   ├── Welcome.tsx  # Boas-vindas
│   │   │   ├── Services.tsx # Cards de serviços
│   │   │   ├── About.tsx    # Sobre a psicóloga (completo)
│   │   │   └── TherapyImportance.tsx # Importância da terapia
│   │   └── ui/              # Componentes reutilizáveis
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Ponto de entrada
│   └── index.css            # Estilos globais e Tailwind
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🎨 Paleta de Cores

O projeto utiliza a identidade visual da marca:

| Cor | Hexadecimal | Uso |
|-----|-------------|-----|
| **Primary** | `#A1A491` | Títulos principais, detalhes |
| **Secondary** | `#CEBABF` | Subtítulos, aspas, bordas |
| **Footer** | `#47493A` | Fundo do rodapé |
| **WhatsApp** | `#25D366` | Botões de contato |

---

## 💻 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/site-psicologa.git
   cd site-psicologa
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

---

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

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos:

1. **Fork** o projeto
2. **Crie uma branch** (`git checkout -b feature/nova-feature`)
3. **Commit** suas alterações (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra um Pull Request**

---

## 📞 Contato

**Desenvolvedora Paula De Melo Souza**

- 📧 Email: [paulamelo2404@gmail.com](mailto:paulamelo2404r@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Desenvolvido Paula Melo</p>
  <p>© 2026 Dra. Poliana Rangel Mattar. Todos os direitos reservados.</p>
</div>
