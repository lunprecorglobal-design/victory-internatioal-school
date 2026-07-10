export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#0B1F4D",
        color: "#FFFFFF",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src="/images/logo.png"
          alt="Victory International School Logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />

        <div>
          <h2 style={{ margin: 0 }}>Victory International School</h2>
          <small style={{ color: "#D4AF37" }}>
            Excellence • Discipline • Leadership
          </small>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "24px",
          fontWeight: "bold",
        }}
      >
        <span>Home</span>
        <span>About</span>
        <span>Academics</span>
        <span>Admissions</span>
        <span>Gallery</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}