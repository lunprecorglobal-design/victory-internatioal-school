import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-16">

        {/* Left Side */}
        <div className="lg:w-1/2">
          <p className="text-yellow-600 font-semibold uppercase tracking-widest">
            Welcome to
          </p>

          <h1 className="text-5xl font-bold text-blue-950 mt-4 leading-tight">
            Victory International School
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-8">
            Raising tomorrow's leaders through quality education,
            discipline, innovation, and excellence.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold transition">
              Apply Now
            </button>

            <button className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <Image
            src="/school-building.png"
            alt="Victory International School"
            width={900}
            height={600}
            className="rounded-2xl shadow-2xl w-full h-auto"
            priority
          />
        </div>

      </div>
    </section>
  );
}