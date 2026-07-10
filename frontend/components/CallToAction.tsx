export default function CallToAction() {
  return (
    <section className="bg-blue-950 py-20">
      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold text-white mb-6">
          Give Your Child the Best Start in Life
        </h2>

        <p className="text-blue-100 text-lg leading-8 mb-10">
          At Victory International School, we provide quality education,
          strong moral values, experienced teachers, and a safe learning
          environment where every child can excel.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition">
            Apply for Admission
          </button>

          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-950 font-bold px-8 py-4 rounded-xl transition">
            Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}