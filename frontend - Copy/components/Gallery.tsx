export default function Gallery() {
  const images = [
    "/school-building.png",
    "/school-building.png",
    "/school-building.png",
  ];

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B1F4D",
            fontSize: "40px",
            marginBottom: "15px",
          }}
        >
          School Gallery
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          Take a glimpse into life at Victory International School.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`School ${index + 1}`}
              style={{
                width: "100%",
                borderRadius: "15px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}