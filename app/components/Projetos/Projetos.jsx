"use client";

import { useState } from "react";
import { projetos } from "../../../data/projetos";
import ProjetoCard from "../ProjetoCard/ProjetoCard";
import "./Projetos.css";

export default function Projetos() {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const filtros = [
    { label: "Todos", valor: "todos" },
    { label: "Web", valor: "web" },
    { label: "Desktop", valor: "desktop" },
  ];

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtroAtivo);

  return (
    <section id="projetos" className="projetos-section">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        <p className="section-subtitle">
          Conheça alguns dos projetos que desenvolvi
        </p>

        {/* Filtros */}
        <div className="filtros" id="filtros">
          {filtros.map((filtro) => (
            <button
              key={filtro.valor}
              className={`filtro-btn ${
                filtroAtivo === filtro.valor ? "active" : ""
              }`}
              onClick={() => setFiltroAtivo(filtro.valor)}
            >
              {filtro.label}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div className="projetos-grid" id="projetos-container">
          {projetosFiltrados.map((projeto) => (
            <ProjetoCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  );
}
