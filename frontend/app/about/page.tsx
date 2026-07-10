import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <Layout>
        <h1
          style={{
            color: "#0B1F4D",
            fontSize: "48px",
            marginBottom: "30px",
          }}
        >
          About Victory International School
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "36px",
            color: "#555",
          }}
        >
          Victory International School is dedicated to providing quality
          education in a safe, caring, and inspiring environment. We believe in
          nurturing every child academically, morally, socially, and spiritually
          to become confident leaders and responsible citizens.
        </p>

        <h2
          style={{
            color: "#0B1F4D",
            marginTop: "50px",
          }}
        >
          Our Vision
        </h2>

        <p style={{ lineHeight: "32px" }}>
          To become one of Nigeria's leading international schools by producing
          disciplined, innovative, and globally competitive learners.
        </p>

        <h2
          style={{
            color: "#0B1F4D",
            marginTop: "40px",
          }}
        >
          Our Mission
        </h2>

        <p style={{ lineHeight: "32px" }}>
          To provide excellent education through qualified teachers, modern
          learning facilities, strong moral values, and innovative teaching
          methods.
        </p>
      </Layout>

      <Footer />
    </>
  );
}