# 🚀 v1.0.0 — Migração do Portfólio para React/Next.js

Primeira versão do portfólio profissional migrado de HTML/CSS/JS puro para **React** com **Next.js 16**.

---

## ✨ Novidades

### Componentização React
- **6 componentes** criados: `Header`, `Hero`, `Sobre`, `Projetos`, `ProjetoCard` e `Footer`
- Componentes reutilizáveis e organizados por pasta com CSS próprio

### Renderização Dinâmica
- Array de **12 projetos** em `data/projetos.js` renderizados dinamicamente
- Filtros interativos por categoria: **Todos**, **Web** e **Desktop**
- Uso de `useState`, `.filter()` e `.map()` para gerenciamento de estado e renderização

### Melhorias Visuais
- 🔮 Efeito **glassmorphism** no header ao scrollar (backdrop-filter blur)
- ✨ Animação **fade-in** na seção hero
- 🎨 Gradientes no avatar e barras decorativas dos títulos
- 🖱️ Micro-interações em hover: cards com elevação, badges com escala, skill tags com mudança de cor
- 📱 Menu mobile com transições suaves

### SEO & Performance
- Metadata otimizada (título, descrição, keywords, autor)
- Font **Inter** via `next/font/google` com `display: swap`
- Imagens com `loading="lazy"` para carregamento otimizado
- HTML semântico com estrutura de headings adequada

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão |
|---|---|
| React | 19 |
| Next.js | 16.2.3 |
| CSS | Vanilla (sem frameworks) |
| Node.js | LTS |

---

## 📁 Estrutura

```
app/
├── components/
│   ├── Header/        → Navbar com menu mobile responsivo
│   ├── Hero/          → Seção principal com apresentação
│   ├── Sobre/         → Seção "Sobre Mim" com foto e habilidades
│   ├── Projetos/      → Seção de projetos com filtros dinâmicos
│   ├── ProjetoCard/   → Card reutilizável para cada projeto
│   └── Footer/        → Rodapé com contato e redes sociais
data/
└── projetos.js        → Array de objetos com os projetos
```

---

## 🚀 Como Executar

```bash
npm install
npm run dev
```

---

**Full Changelog**: Migração completa do portfólio estático (HTML/CSS/JS) para aplicação React com Next.js.
