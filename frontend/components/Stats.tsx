export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Students",
    },
    {
      number: "35+",
      title: "Qualified Teachers",
    },
    {
      number: "98%",
      title: "Academic Success",
    },
    {
      number: "15+",
      title: "Years of Excellence",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-4xl font-bold text-yellow-500">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-700 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}