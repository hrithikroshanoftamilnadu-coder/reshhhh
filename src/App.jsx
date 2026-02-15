import Page2 from "./pages/page2";
import Page1 from "./pages/page1";
import Page3 from "./pages/page3";
import Page4 from "./pages/page4";
import Page5 from "./pages/page5";

function App() {
  return (
    <div style={styles.app}>
      {/* <Page1 /> */}
      {/* <Page2 /> */}
      {/* <Page3 /> */}
      {/* <Page4 /> */}
      {/* <Page5 /> */}
      <div style={styles.scrollContainer}>
        <section style={styles.section}>
          <Page1 />
        </section>

        <section id="page2" style={styles.section}>
          <Page2 />
        </section>

        <section style={styles.section}>
          <Page3 />
        </section>

        <section style={styles.section}>
          <Page4 />
        </section>

        <section style={styles.section}>
          <Page5 />
        </section>
      </div>
    </div>
  );
}

export default App;

const styles = {
  app: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "#F6D6DE",
  },
  scrollContainer: {
    height: "100vh",
    overflowY: "auto",
    scrollSnapType: "y mandatory",
    scrollBehavior: "smooth",
  },
  section: {
    minHeight: "100vh",
    scrollSnapAlign: "start",
  },
};
