# Portfólio — Elias Junior

Portfólio profissional desenvolvido com **React** e **Next.js**, apresentando projetos, habilidades e informações de contato.

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Next.js 16](https://nextjs.org/)
- CSS puro (sem frameworks de estilo)
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)

## 📁 Estrutura do Projeto

```
app/
├── components/
│   ├── Header/        → Navbar com menu mobile responsivo
│   ├── Hero/          → Seção principal com apresentação
│   ├── Sobre/         → Seção "Sobre Mim" com habilidades
│   ├── Projetos/      → Seção de projetos com filtros dinâmicos
│   ├── ProjetoCard/   → Card reutilizável para cada projeto
│   └── Footer/        → Rodapé com contato e redes sociais
├── globals.css        → Variáveis CSS e estilos globais
├── layout.js          → Layout raiz com metadata SEO
└── page.js            → Página principal
data/
└── projetos.js        → Array de objetos com os projetos
public/
└── imgs/              → Imagens dos projetos
```

## 🧩 Componentização

O portfólio foi dividido em **6 componentes React**:

| Componente | Descrição |
|---|---|
| `Header` | Navbar fixa com menu mobile e efeito glassmorphism ao scrollar |
| `Hero` | Seção hero com nome, título, badges de tecnologia e CTAs |
| `Sobre` | Seção sobre com foto, bio e habilidades organizadas por grupo |
| `Projetos` | Renderização dinâmica dos projetos com filtros (Todos/Web/Desktop) |
| `ProjetoCard` | Card reutilizável que recebe dados do projeto via props |
| `Footer` | Rodapé com informações de contato e links para GitHub/LinkedIn |

## 📊 Renderização Dinâmica

Os projetos são armazenados como um **array de objetos** em `data/projetos.js` e renderizados dinamicamente:

```js
// Filtragem com useState + .filter()
const projetosFiltrados = filtroAtivo === "todos"
  ? projetos
  : projetos.filter((p) => p.categoria === filtroAtivo);

// Renderização com .map()
projetosFiltrados.map((projeto) => (
  <ProjetoCard key={projeto.id} projeto={projeto} />
));
```

## ⚙️ Como Executar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
```

## 🔗 Links

- **Repositório GitHub**: [github.com/EliaJunior/portfolio_elias_react](https://github.com/EliaJunior/portfolio_elias_react)
- **Deploy Vercel**: *(a ser publicado)*

## 👤 Autor

**Elias Junior Cunha**
- GitHub: [@EliaJunior](https://github.com/EliaJunior)
- LinkedIn: [Elias Junior](https://www.linkedin.com/in/elias-junior-b45335174/)
- Email: engeliascunha@gmail.com
