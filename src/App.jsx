import { useState } from "react";
import { motion } from "framer-motion";

const Bats = () => (
  <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden" }}>
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${20 + Math.random() * 20}px`,
          animation: `fly ${5 + Math.random() * 5}s linear infinite`,
        }}
      >
        🦇
      </div>
    ))}

    <style>{`
      @keyframes fly {
        0% { transform: translateX(0px) translateY(0px); }
        50% { transform: translateX(100px) translateY(-50px); }
        100% { transform: translateX(0px) translateY(0px); }
      }
    `}</style>
  </div>
);

const steps = [
  { title: "🎉 Oi, Stephanie Cristine", content: "Esse site é pra você 😌" },
  { title: "🌎 Fato curioso", content: "Hoje é o Dia da Meteorologia... faz sentido você ser uma tempestade 🌪️❤️" },
  { title: "🎶 Coincidência?", content: "Hoje também tem conexão com Gorillaz... seu gosto nunca erra 😌" },
  { title: "🦇 Minha morceguinha", content: "Talvez seja por isso que você brilha mais à noite... minha morceguinha 🖤" },
  { title: "🖤 Nós", content: "Se existe combinação perfeita... é isso 😏", image: "/foto1.jpg" },
  { title: "🎬 Stephanie Cristine", content: "Seu nome não é só bonito... é lendário 😌", image: "/foto2.jpg" },
  { title: "😴 Minha paz", content: "E você também é isso aqui ❤️", image: "/foto3.jpg" },
  { title: "📸 Nós de verdade", content: "Se for com você, já vale a pena.", image: "/foto4.jpg" },
  {
    title: "💬 Uma coisa importante...",
    content: "Muito clichê falar que o aniversário é seu, mas no fim eu que ganhei o presente, né? kkkkk\n\nMas falando sério agora...\n\nVocê é incrível, meu amor.\n\nE eu quero viver muitos anos ao seu lado ❤️"
  },
  {
    title: "🦇 Confissão importante",
    content: "Hoje eu entendo o Ozzy Osbourne...\n\nEu faria o mesmo 😅\n\n(porque você é minha morceguinha 🖤)"
  },
  { title: "🎁 Final", content: "Se arruma... você vai precisar de um celular funcionando 😉" }
];

export default function App() {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "linear-gradient(135deg,#1a1a1a,#3a0d2e)", color: "white" }}>
      <Bats />
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ background: "#111", padding: 30, borderRadius: 20, maxWidth: 500, textAlign: "center" }}
      >
        <h1>{steps[index].title}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{steps[index].content}</p>

        {steps[index].image && (
          <img src={steps[index].image} style={{ width: "100%", borderRadius: "12px", marginTop: "15px" }} />
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
          <button onClick={() => setIndex(index - 1)} disabled={index === 0}>Voltar</button>
          <button onClick={() => setIndex(index + 1)} disabled={index === steps.length - 1}>Próximo</button>
        </div>
      </motion.div>
    </div>
  );
}
