export default function Programs() {
  const programs = [
    {
      title: "Crèche",
      description:
        "A safe, caring and stimulating environment for babies and toddlers.",
      icon: "👶",
    },
    {
      title: "Nursery",
      description:
        "Building strong foundations in literacy, numeracy, creativity and social development.",
      icon: "🧒",
    },
    {
      title: "Primary",
      description:
        "Preparing pupils for academic excellence, leadership and lifelong success.",
      icon: "🎒",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#F8F9FA",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#0B1F4D",
            fontSize: "40px",
            marginBottom: "15px",
          }}
        >
          Our Programmes
        </h2>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          Providing quality education from early childhood to primary level.
        </p>

        <div
          style={{
            display: "flex",
            gap: "30px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {programs.map((program) => (
            <div
              key={program.title}
              style={{
                width: "320px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "50px" }}>{program.icon}</div>

              <h3
                style={{
                  color: "#0B1F4D",
                  marginTop: "20px",
                }}
              >
                {program.title}
              </h3>

              <p
                style={{
                  color: "#666",
                  lineHeight: "28px",
                }}
              >
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}