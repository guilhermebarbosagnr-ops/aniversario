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
    overflow: "hidden",
    zIndex: 0
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

const Ghosts = () => (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: 0
  }}>
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${20 + Math.random() * 20}px`,
          animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
        }}
      >
        👻
      </div>
    ))}

    <style>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-40px); }
        100% { transform: translateY(0px); }
      }
    `}</style>
  </div>
);

const steps = [
  {
    title: "🎉 Stephanie Cristine, há 24 anos seus pais faziam história",
    content: "Esse site é para marcar uma data tão especial 🖤"
  },
  { 
    title: "🌎 Fato curioso sobre o seu dia",
    content: "Você faz aniversário no dia Mundial da Meteorologia... Será por isso que você é esse furacão? Tá aí um bom nome... Furacão Stephanie, mas diferente de um, você só bagunça meu coração 🌪️🖤"
  },
  {
    title: "🦇 Morceguinha",
    content: "Você é uma pessoa curiosa, misteriosa e incrível... adoro quando você está de preto. Agora eu entendo o Ozzy, eu também cairia de boca se te visse por aí 🖤"
  },
  {
    title: "🖤 Gostosa",
    content: "Se existe combinação perfeita... com certeza é o resultado da foda dos seus pais. Mas acho que se eles vissem as nossas iam ficar com inveja 😏",
    image: "/foto1.jpg"
  },
  {
    title: "🎬 Cristine",
    content: "Esse nome te representa tão bem...\n\nIntensa e obsessiva\n\nImpossível de ignorar\n\nMeio perigosa às vezes 🔪\n\nAlém de ser um carro bonito pra caralho\n\nEu não trocaria você por nada! 🖤",
    image: "/foto2.jpg"
  },
  {
    title: "😴 Fofinha",
    content: "Incrível como você consegue ser um mix de tudo que eu sempre quis... e ainda dormir que nem um anjinho 🖤",
    image: "/foto3.jpg"
  },
  {
    title: "📸 Você é incrível",
    content: "Se um dia você duvidar do quão boa você é, volte aqui e veja o quanto você consegue fazer alguém ser completamente obcecado em você 🖤",
    image: "/foto4.jpg"
  },
  {
    title: "💬 Uma coisa importante...",
    content: "Muito clichê falar que o aniversário é seu, mas no fim eu que ganhei o presente, né? kkkkk\n\nMas falando sério...\n\nVocê tem mudado minha vida, dado sentido a ela e tem me feito querer viver.\n\nEu amo cada parte de você.\n\nE eu quero viver muitos anos ao seu lado 🖤"
  },
  {
    title: "👻 If you have ghosts...",
    content: "You have everything.\n\n\nAnd somehow...\n\nI have you 🖤"  
  },
  {
    title: "🎁 Terminou por aqui",
    content: "Agora olha pra mim 👀...\n\nE fecha os olhos 🙈 "
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const moveButton = (e) => {
    const btn = e.target;
    btn.style.position = "absolute";
    btn.style.top = Math.random() * 80 + "%";
    btn.style.left = Math.random() * 80 + "%";
  };

  const startExperience = () => {
    const audio = document.getElementById("music");

    audio.volume = 0;
    audio.play().catch(() => {});

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
      <audio id="music" loop>
        <source src="/he-is-ghost.mp3" type="audio/mpeg" />
      </audio>

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
              2. Aceita minhas personalidades 🤪<br/><br/>
              3. Aceita ficar comigo mesmo quando eu ficar careca 👨🏼‍🦲<br/><br/>
              4. Aceita viver momentos incríveis ao meu lado, e péssimos também<br/><br/>
              5. Aceita rir, brigar e me amar ao mesmo tempo<br/><br/>
              6. E aceita continuar essa experiência até o final de nossas vidas
            </p>

            <div style={{
              marginTop: 20,
              padding: 10,
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              fontSize: "14px"
            }}>
              🔊 Aumente o volume do seu celular...
            </div>

            <div style={{ marginTop: 20, position: "relative", height: 50 }}>
              <button onClick={startExperience}>
                ✅ Aceito
              </button>

              <button onMouseEnter={moveButton} style={{ marginLeft: 10 }}>
                ❌ Recusar
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <div style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg,#0d0d0d,#2a0a1f)",
        color: "white"
      }}>
        <Bats />
        <Ghosts />
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "#111",
            padding: 30,
            borderRadius: 20,
            maxWidth: 500,
            textAlign: "center",
            position: "relative",
            zIndex: 2,
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
              onClick={() => {
                setIndex(index - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={index === 0}
            >
              Voltar
            </button>
            <button
  onClick={() => {

    const audio = document.getElementById("music");

    // 🎧 COMEÇA A BAIXAR ANTES
    if (index === steps.length - 4) {
      let volume = audio.volume;

      const fadeDown = setInterval(() => {
        if (volume > 0.05) {
          volume -= 0.02;
          audio.volume = volume;
        } else {
          clearInterval(fadeDown);
        }
      }, 200);
    }

    // 🎶 PULA PRO REFRÃO + SOBE DE NOVO
    if (index === steps.length - 3) {
      audio.currentTime = 156; // ajuste fino depois

      let volume = audio.volume;

      const fadeUp = setInterval(() => {
        if (volume < 0.3) {
          volume += 0.02;
          audio.volume = volume;
        } else {
          clearInterval(fadeUp);
        }
      }, 200);
    }

    // 🎬 FADE OUT FINAL
    if (index === steps.length - 2) {
      let volume = audio.volume;

      const fadeOut = setInterval(() => {
        if (volume > 0.05) {
          volume -= 0.02;
          audio.volume = volume;
        } else {
          clearInterval(fadeOut);
        }
      }, 200);
    }

    setIndex(index + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
  disabled={index === steps.length - 1}
>
  {index === steps.length - 1 ? "Fim 🖤" : "Próximo"}
</button>
          </div>

          {index === 0 && (
            <p style={{
              marginTop: 10,
              fontSize: "12px",
              opacity: 0.7
            }}>
              Atenção ⚠️ botão de voltar está desativado...<br/>
              Agora não tem mais volta 🖤
            </p>
          )}
        </motion.div>
      </div>
    </>
  );
}