export default function WhyChooseUs() {
  return (
    <section
      style={{
        padding: "70px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#0B1F4D",
          fontSize: "36px",
        }}
      >
        Why Choose Victory International School?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "300px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>📚 Quality Education</h3>
          <p>Modern teaching with excellent academic standards.</p>
        </div>

        <div
          style={{
            width: "300px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>👩‍🏫 Qualified Teachers</h3>
          <p>Dedicated teachers committed to every child's success.</p>
        </div>

        <div
          style={{
            width: "300px",
            padding: "25px",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        >
          <h3>🏆 Excellence</h3>
          <p>Building confident, disciplined and successful future leaders.</p>
        </div>
      </div>
    </section>
  );
}