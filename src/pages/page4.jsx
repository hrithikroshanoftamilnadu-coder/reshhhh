import { useState } from "react";
import memory1 from "../assets/memory1.jpeg";
import memory2 from "../assets/memory2.jpeg";
import memory3 from "../assets/memory3.jpeg";
import memory4 from "../assets/memory4.jpeg";

function Page4() {
  const [opened, setOpened] = useState([]);

  const memories = [
    {
      id: 1,
      img: memory1,
      caption: "That introvert pro max moment 😂",
    },
    {
      id: 2,
      img: memory2,
      caption: "That race I almost won… but decided not to 🫶",
    },
    {
      id: 3,
      img: memory3,
      caption: '"Rosemilk vangi tharen daa 🥛💕" moment',
    },
    {
      id: 4,
      img: memory4,
      caption: "The smile that made staying forever 🤍",
    },
  ];

  const handleOpen = (id) => {
    if (!opened.includes(id)) {
      setOpened((prev) => [...prev, id]);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Our Favorite Memories 📸</h1>
        <p style={styles.subtext}>Click to reveal each memory 💕</p>

        <div style={styles.grid}>
          {memories.map((memory) => {
            const isOpen = opened.includes(memory.id);

            return (
              <div
                key={memory.id}
                style={styles.cardWrapper}
                onClick={() => handleOpen(memory.id)}
              >
                <div
                  style={{
                    ...styles.card,
                    transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
                  }}
                >
                  {/* Front */}
                  <div style={styles.front}>🎁</div>

                  {/* Back */}
                  <div style={styles.back}>
                    <img
                      src={memory.img}
                      alt="memory"
                      style={{
                        ...styles.image,
                        objectPosition:
                          memory.id === 3
                            ? "center 30%"
                            : memory.id === 4
                            ? "center 40%"
                            : "center",
                      }}
                    />
                    <p style={styles.caption}>{memory.caption}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {opened.length === memories.length && (
          <p style={styles.finalText}>And we’re just getting started… 💌✨</p>
        )}
      </div>
    </div>
  );
}

export default Page4;

/* ===========================
   Styles
=========================== */

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
  },

  content: {
    paddingTop: "80px",
    paddingBottom: "60px",
    textAlign: "center",
  },

  heading: {
    fontSize: "40px",
    color: "#FF5A8A",
    marginBottom: "8px",
  },

  subtext: {
    fontSize: "15px",
    color: "#555",
    marginBottom: "40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    justifyContent: "center",
    maxWidth: "700px",
    margin: "0 auto",
  },

  cardWrapper: {
    perspective: "1000px",
    cursor: "pointer",
  },

  card: {
    width: "100%",
    height: "300px",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease",
  },

  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    backfaceVisibility: "hidden",
  },

  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: "20px",
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "90%",
    objectFit: "cover",
  },

  caption: {
    fontSize: "14px",
    padding: "10px",
    color: "#444",
  },

  finalText: {
    marginTop: "40px",
    fontSize: "18px",
    color: "#FF5A8A",
  },
};
