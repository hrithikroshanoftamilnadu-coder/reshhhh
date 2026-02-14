import React from "react";

function Page5() {
  const things = [
    "Your 'nee okay vaa da?' and that gentle hug… 🫠",
    "You and your mandatory kurkure side dish… and that way you feed me saying 'kurkureee' 😂",
    "When you randomly hug me from behind on the bike… just for a few seconds 🤍",
    "The way you carry so many thoughts inside… but still stay playful on the outside 🤍",
    "Your chaotic energy matches mine perfectly 🔥",
    "The way you randomly channel your inner Samantha and act like the main character 😂",
    "You smile like that and expect me to stay normal? ♾️",
    "You’re still my favourite person. Every single day 💌",
  ];

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Things I Love About You 🤍</h1>

        <p style={styles.subtext}>
          Distance is just a number… but you? You’re still my favorite person
          every single day.
        </p>

        <div style={styles.grid}>
          {things.map((item, index) => (
            <div key={index} style={styles.card}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page5;

/* ===========================
   Styles
=========================== */

const styles = {
  page: {
    minHeight: "100vh",
    width: "100vw",
    paddingTop: "80px",
    paddingBottom: "60px",
  },

  content: {
    maxWidth: "1000px",
    margin: "0 auto",
    textAlign: "center",
    padding: "0 20px",
  },

  heading: {
    fontSize: "40px",
    color: "#FF5A8A",
    marginBottom: "10px",
  },

  subtext: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "50px",
    lineHeight: "1.6",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    padding: "25px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #FF8FB1, #FF5A8A)",
    color: "#fff",
    fontSize: "15px",
    lineHeight: "1.6",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
  },
};
