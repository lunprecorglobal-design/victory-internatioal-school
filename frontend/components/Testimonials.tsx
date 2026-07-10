export default function Testimonials() {
  const testimonials = [
    {
      name: "Prospective Parent",
      message:
        "Victory International School's vision and learning environment gave me confidence that my child will receive quality education.",
    },
    {
      name: "Community Member",
      message:
        "The school's commitment to discipline, excellence, and character development is truly impressive.",
    },
    {
      name: "Education Supporter",
      message:
        "I look forward to seeing Victory International School become one of the leading schools in Abia State.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-950 mb-4">
          What People Are Saying
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Building confidence through quality education and strong values.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name + item.message}
              className="bg-gray-50 rounded-2xl shadow-lg p-8"
            >
              <div className="text-yellow-500 text-2xl mb-4">
                ★★★★★
              </div>

              <p className="text-gray-700 italic leading-7">
                "{item.message}"
              </p>

              <h3 className="mt-6 font-bold text-blue-950">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}