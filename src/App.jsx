import React, { useState } from "react";
import { motion } from "framer-motion";

const Bats = () => (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden"
  }}>
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
        0% { transform: translate(0,0); }
        50% { transform: translate(120px,-60px); }
        100% { transform: translate(0,0); }
      }
    `}</style>
  </div>
);

const steps = [
  { title: "🎉 Oi, Stephanie Cristine", content: "Esse site é pra você 😌" },
  { title: "🌎 Fato curioso", content: "Hoje é o Dia da Meteorologia... faz sentido você ser uma tempestade 🌪️❤️" },
  { title: "🎶 Coincidência?", content: "Hoje também tem conexão com Gorillaz... seu gosto nunca erra 😌" },
  { title: "🦇 Minha morceguinha", content: "Você brilha mais quando o mundo desacelera... minha morceguinha 🖤" },

  { title: "🖤 Nós", content: "Se existe combinação perfeita... é isso 😏", image: "/foto1.jpg" },
  { title: "🎬 Stephanie Cristine", content: "Seu nome não é só bonito... é lendário 😌", image: "/foto2.jpg" },
  { title: "😴 Minha paz", content: "E você também é isso aqui ❤️", image: "/foto3.jpg" },
  { title: "📸 Nós de verdade", content: "Se for com você, já vale a pena.", image: "/foto4.jpg" },

  {
    title: "💬 Uma coisa importante...",
    content: "Muito clichê falar que o aniversário é seu, mas no fim eu que ganhei o presente, né? kkkkk\n\nMas falando sério...\n\nVocê é incrível, meu amor.\n\nE eu quero viver muitos anos ao seu lado ❤️"
  },

  {
    title: "🦇 Confissão importante",
    content: "Hoje eu entendo o Ozzy Osbourne...\n\nEu faria o mesmo 😅\n\n(porque você é minha morceguinha 🖤)"
  },

  {
    title: "🎁 Última coisa...",
    content: "Agora fecha isso...\n\nConfia em mim 😏"
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);

  // botão recusar fugindo
  const moveButton = (e) => {
    const btn = e.target;
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "%";
    btn.style.left = Math.random() * 80 + "%";
  };

  const startExperience = () => {
    const audio = document.getElementById("music");

    audio.volume = 0;
    audio.play();

    let volume = 0;
    const fade = setInterval(() => {
      if (volume < 0.3) {
        volume += 0.02;
        audio.volume = volume;
      } else {
        clearInterval(fade);
      }
    }, 200);

    setAccepted(true);
  };

  return (
    <>
      {/* 🎶 MÚSICA */}
      <audio id="music" loop>
        <source src="/he-is-ghost.mp3" type="audio/mpeg" />
      </audio>

      {/* 🖤 POPUP */}
      {!accepted && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.95)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999
        }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              background: "#111",
              padding: 30,
              borderRadius: 20,
              maxWidth: 500,
              color: "white",
              textAlign: "center"
            }}
          >
            <h2>🖤 Termos de Compromisso</h2>

            <p style={{ textAlign: "left", marginTop: 20 }}>
              1. Aceita ser oficialmente minha morceguinha 🦇<br/><br/>
              2. Aceita meu amor (mesmo quando eu for meio chato 😅)<br/><br/>
              3. Aceita ficar comigo mesmo quando eu ficar careca<br/><br/>
              4. Aceita viver momentos incríveis ao meu lado<br/><br/>
              5. Aceita rir, brigar e me amar ao mesmo tempo<br/><br/>
              6. E aceita continuar essa experiência até o final 😏
            </p>

            <div style={{ marginTop: 20, position: "relative", height: 50 }}>
              <button onClick={startExperience}>
                ✅ Aceito
              </button>

              <button
                onMouseEnter={moveButton}
                style={{ marginLeft: 10 }}
              >
                ❌ Recusar
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* 🦇 SITE */}
      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#1a1a1a,#3a0d2e)",
        color: "white"
      }}>
        <Bats />

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "#111",
            padding: 30,
            borderRadius: 20,
            maxWidth: 500,
            textAlign: "center"
          }}
        >
          <h1>{steps[index].title}</h1>

          <p style={{ whiteSpace: "pre-line" }}>
            {steps[index].content}
          </p>

          {steps[index].image && (
            <img
              src={steps[index].image}
              style={{
                width: "100%",
                borderRadius: "12px",
                marginTop: "15px"
              }}
            />
          )}

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20
          }}>
            <button
              onClick={() => setIndex(index - 1)}
              disabled={index === 0}
            >
              Voltar
            </button>

            <button
              onClick={() => setIndex(index + 1)}
              disabled={index === steps.length - 1}
            >
              Próximo
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
}