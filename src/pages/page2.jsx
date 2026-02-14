import { useState, useEffect, useRef } from "react";
import poppersGif from "../assets/poppers.gif";
import cute1 from "../assets/cute1.gif";
import cute2 from "../assets/cute2.gif";

function Page2() {
  const [jumps, setJumps] = useState(0);
  const [direction, setDirection] = useState("left");
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (jumps === 3) {
      setTimeout(() => {
        setShowCard(true);
      }, 400);
    }
  }, [jumps]);

  useEffect(() => {
    if (showCard && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [showCard]);

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        {/* Poppers */}
        <img src={poppersGif} alt="celebration" style={styles.poppers} />

        {/* Headline */}
        <h1 style={styles.heading}>Good choice kurkuree 😌✨</h1>

        {/* Cute GIFs */}
        <div style={styles.gifRow}>
          <img src={cute1} alt="cute" style={styles.gif} />
          <img src={cute2} alt="cute" style={styles.gif} />
        </div>

        {/* Statement */}
        <p style={styles.statement}>
          Now you&apos;re stuck with me forever{" "}
          <span style={styles.infinity}>∞</span>
        </p>

        {/* Question */}
        <p style={styles.question}>Wait… do you want to change your mind? 🫢</p>

        {/* Jumping Button */}
        <div style={styles.buttonContainer}>
          <button
            style={{
              ...styles.changeBtn,
              ...(jumps === 3 ? styles.hidden : styles.jump(jumps)),
            }}
            onMouseEnter={() => {
              if (jumps >= 3) return;
              setJumps((p) => p + 1);
            }}
          >
            Yes, I do want to change my mind 😬
          </button>
        </div>

        {showCard && (
          <div ref={cardRef} style={styles.card}>
            <h2 style={styles.cardTitle}>Too late… 🤭</h2>

            <p style={styles.cardSub}>
              You already said <b>yes</b>.
            </p>

            <div style={styles.cardList}>
              <p>💕 No take-backs</p>
              <p>💫 You’re stuck with me</p>
              <p>♾️ Forever sounds nice, right?</p>
            </div>

            <p style={styles.cardFooter}>I promise I’ll make it worth it 💗</p>
          </div>
        )}
      </div>
      <style>{keyframes}</style>
    </div>
  );
}

export default Page2;

/* =======================
   Styles
   ======================= */

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    position: "relative",
  },

  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "80px",
    gap: "20px",
    textAlign: "center",
    padding: "20px",
  },

  poppers: {
    width: "200px",
  },

  heading: {
    fontSize: "42px",
    color: "#FF5A8A",
    margin: 0,
  },

  gifRow: {
    display: "flex",
    gap: "20px",
  },

  gif: {
    width: "120px",
    borderRadius: "16px",
  },

  statement: {
    fontSize: "18px",
    color: "#444",
  },

  infinity: {
    fontSize: "22px",
    marginLeft: "4px",
  },

  question: {
    fontSize: "16px",
    color: "#555",
    marginTop: "10px",
  },

  buttonContainer: {
    position: "relative",
    width: "360px",
    height: "70px",
    marginTop: "4px",
  },

  changeBtn: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    padding: "14px 26px",
    fontSize: "16px",
    borderRadius: "30px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#9E9E9E",
    color: "#fff",
    transition:
      "transform 0.45s cubic-bezier(.34,1.56,.64,1), opacity 0.3s ease",
    whiteSpace: "nowrap",
  },

  jump: (count) => {
    if (count === 1) {
      return {
        transform:
          "translate(-50%, -50%) translate(120px, -80px) rotate(180deg)",
      };
    }

    if (count === 2) {
      return {
        transform:
          "translate(-50%, -50%) translate(-120px, -80px) rotate(360deg)",
      };
    }

    return {
      transform: "translate(-50%, -50%)",
    };
  },

  hidden: {
    opacity: 0,
    pointerEvents: "none",
    transform: "translate(-50%, -150px) scale(0.8)",
  },

  card: {
    marginTop: "10px",
    backgroundColor: "#FFFFFF",
    padding: "30px",
    borderRadius: "24px",
    maxWidth: "480px",
    width: "90%",
    boxShadow: "0 15px 40px rgba(255, 90, 138, 0.15)",
    animation: "fadeUp 0.6s ease forwards",
  },

  cardTitle: {
    color: "#FF5A8A",
    marginBottom: "12px",
    fontSize: "26px",
  },

  cardSub: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "18px",
  },

  cardList: {
    fontSize: "16px",
    color: "#444",
    lineHeight: "1.8",
  },

  cardFooter: {
    marginTop: "18px",
    color: "#FF5A8A",
    fontWeight: "500",
  },
};

const keyframes = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
