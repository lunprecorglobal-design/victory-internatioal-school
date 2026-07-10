export default function About() {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          gap: "50px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1 }}>
          <img
            src="/school-building.png"
            alt="Victory International School"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        </div>

        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0B1F4D",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            About Victory International School
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "32px",
              color: "#555",
            }}
          >
            Victory International School is committed to raising children with
            sound academic knowledge, strong moral values, leadership skills,
            and confidence. Our learning environment encourages excellence,
            creativity, discipline, and a lifelong love for learning.
          </p>

          <button
            style={{
              marginTop: "25px",
              backgroundColor: "#0B1F4D",
              color: "#fff",
              border: "none",
              padding: "15px 30px",
              borderRadius: "8px",
              fontSize: "17px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}