import { useEffect, useState } from "react";

function Page3() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const ideas = [
    "🕺 Dance for Karutha machan, Selfie pulla (video call)",
    "🍲 Cook paneer biriyani & pappu saadham together (video call)",
    "🎶 Send me a voice message singing 'Sendhura' or 'Vizhi Veekura'",
    "🌙 Long talks of disagreements that makes me miss you even more!",
    "📸 Send me random selfies during the day, I'll add it to Reshhh😌",
    "🎬 Rewatch Dude movie on Netflix like it’s the first time again",
    '🎥 Recreate that reel — "Rosemilk vangi tharen daa thambi 🥛💕"',
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Virtual Date Ideas 📱💕</h1>

        <div style={styles.cardsWrapper}>
          {ideas.map((idea, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${index * 0.15}s`,
              }}
            >
              {idea}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page3;

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    padding: "60px 20px",
    boxSizing: "border-box",
  },

  container: {
    maxWidth: "550px",
    margin: "0 auto",
    textAlign: "center",
  },

  heading: {
    fontSize: "36px",
    color: "#FF5A8A",
    marginBottom: "40px",
  },

  cardsWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: "18px 22px",
    borderRadius: "20px",
    fontSize: "16px",
    color: "#444",
    boxShadow: "0 10px 30px rgba(255, 90, 138, 0.12)",
    textAlign: "left",
  },
};
