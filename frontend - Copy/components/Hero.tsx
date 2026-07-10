export default function Hero() {
  return (
    <section
      style={{
        backgroundColor: "#F4F6F8",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <img
        src="/school-building.png"
        alt="Victory International School Building"
        style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "12px",
          marginBottom: "30px",
        }}
      />

      <h1
        style={{
          fontSize: "48px",
          color: "#0B1F4D",
          marginBottom: "20px",
        }}
      >
        Welcome to Victory International School
      </h1>

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "32px",
        }}
      >
        Raising tomorrow's leaders through quality education,
        discipline, innovation and excellence.
      </p>

      <button
        style={{
          marginTop: "30px",
          backgroundColor: "#D4AF37",
          color: "#000",
          border: "none",
          padding: "15px 35px",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>
    </section>
  );
}