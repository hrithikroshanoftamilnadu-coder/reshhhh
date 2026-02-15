import { useMemo, useState } from "react";
import kurkureImg from "../assets/kurkure.png";

function Page1() {
  const [attempts, setAttempts] = useState(0);
  const [noPosition, setNoPosition] = useState("initial");

  const packets = useMemo(() => {
    const positions = [
      { top: "5%", left: "5%" }, // top-left
      { top: "5%", left: "75%" }, // top-right
      { top: "75%", left: "5%" }, // bottom-left
      { top: "75%", left: "75%" }, // bottom-right
      { top: "30%", left: "10%" }, // mid-left
      { top: "30%", left: "80%" }, // mid-right
      { top: "55%", left: "15%" }, // lower-mid-left
      { top: "55%", left: "70%" }, // lower-mid-right
    ];

    return positions.map((pos, i) => ({
      id: i,
      top: pos.top,
      left: pos.left,
      rotate: Math.random() * 20 - 10,
      size: Math.random() * 30 + 70, // 70–100px
    }));
  }, []);

  return (
    <div style={styles.page}>
      {/* Background */}
      <div style={styles.backgroundLayer}>
        {packets.map((p) => (
          <img
            key={p.id}
            src={kurkureImg}
            alt="Kurkure"
            style={{
              ...styles.kurkure,
              top: p.top,
              left: p.left,
              width: p.size,
              transform: `rotate(${p.rotate}deg)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div style={styles.content}>
        <h1 style={styles.heading}>Will you be my Valentine? 💖</h1>
        <p style={styles.subtext}>Official invite, no pressure 😌</p>

        <div style={styles.buttons}>
          <div style={styles.buttonContainer}>
            <button
              style={{
                ...styles.yesButton,
                transform: `translate(-58%, -50%) scale(${
                  1 + attempts * 0.12
                })`,
              }}
              onClick={() => {
                const nextPage = document.getElementById("page2");
                if (nextPage) {
                  nextPage.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              YES 💕
            </button>

            <button
              style={{
                ...styles.noButton,
                ...(attempts >= 4
                  ? styles.noHidden
                  : styles.noMove(noPosition)),
              }}
              onMouseEnter={() => {
                if (attempts >= 4) return;

                setAttempts((p) => p + 1);

                setNoPosition((prev) => {
                  if (prev === "initial") return "left";
                  if (prev === "left") return "right";
                  return "left";
                });
              }}
            >
              No 🙄
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{keyframes}</style>
    </div>
  );
}

export default Page1;

/* =======================
   Styles
   ======================= */

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    position: "relative",
    overflow: "hidden",
  },

  backgroundLayer: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
  },

  noMove: (position) => {
    if (position === "initial") {
      return {
        transform: "translate(80px, -50%)",
      };
    }

    return {
      transform:
        position === "left"
          ? "translate(-220px, -50%)"
          : "translate(140px, -50%)",
    };
  },

  noHidden: {
    opacity: 0,
    pointerEvents: "none",
    transform: "translate(0, 20px)",
  },

  kurkure: {
    position: "absolute",
    opacity: 0.5,
    pointerEvents: "none",
  },

  content: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "18px",
    padding: "20px",
  },

  heading: {
    fontSize: "54px",
    margin: 0,
    animation: "jump 1.5s ease-in-out infinite",
    color: "#FF5A8A",
  },

  subtext: {
    fontSize: "16px",
    color: "#444",
  },

  buttons: {
    marginTop: "28px",
    display: "flex",
    justifyContent: "center",
  },

  buttonContainer: {
    position: "relative",
    width: "460px",
    height: "100px",
    left: "37%",
    transform: "translateX(-50%)",
  },

  buttonArea: {
    position: "relative",
    width: "260px", // reserves space for YES + NO
    height: "60px",
  },

  buttonWrapper: {
    position: "relative",
    display: "inline-block",
  },

  yesButton: {
    position: "absolute",
    left: "50%",
    top: "50%",
    padding: "14px 34px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#FF5A8A",
    color: "#fff",
    zIndex: 2,
    transition: "transform 0.3s ease",
  },

  noButton: {
    position: "absolute",
    left: "50%",
    top: "50%",
    padding: "14px 28px",
    fontSize: "18px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#9E9E9E",
    zIndex: 1,
    transition: "transform 0.3s ease, opacity 0.3s ease",
  },
};

const keyframes = `
@keyframes jump {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-12px); }
  100% { transform: translateY(0); }
}
`;
