import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AcademicsPage() {
  const programs = [
    {
      title: "Crèche",
      description:
        "A safe and caring environment where babies and toddlers begin their learning journey through play and interaction.",
    },
    {
      title: "Nursery School",
      description:
        "Building strong foundations in literacy, numeracy, creativity, communication, and social development.",
    },
    {
      title: "Primary School",
      description:
        "Providing quality education that prepares pupils for secondary school through academic excellence and character development.",
    },
    {
      title: "ICT Education",
      description:
        "Introducing pupils to computer literacy and digital skills from an early age.",
    },
    {
      title: "Creative Arts",
      description:
        "Encouraging imagination through drawing, music, crafts, drama, and cultural activities.",
    },
    {
      title: "Sports & Physical Education",
      description:
        "Promoting healthy living through football, athletics, indoor games, and physical fitness.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="bg-blue-950 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Academics
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          We provide a balanced education that develops academic excellence,
          moral values, leadership, creativity, and lifelong learning.
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center text-blue-950 mb-14">
          Our Academic Programmes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-blue-950 mb-4">
                {program.title}
              </h3>

              <p className="text-gray-700 leading-7">
                {program.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-blue-950 text-center mb-10">
            Why Our Academics Stand Out
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              ✅ Qualified and dedicated teachers
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              ✅ Modern teaching methods
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              ✅ Small class sizes
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              ✅ Strong moral and character education
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              ✅ ICT and digital literacy
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              ✅ Continuous assessment and excellent results
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}