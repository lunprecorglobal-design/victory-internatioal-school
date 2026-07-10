import Image from "next/image";

export default function Principal() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <Image
            src="/principal.jpg"
            alt="School Proprietor"
            width={500}
            height={600}
            className="rounded-2xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-blue-950 mb-6">
            A Message from the Proprietor
          </h2>

          <p className="text-gray-700 leading-8 mb-6">
            Welcome to Victory International School.
            Our vision is to provide quality education that
            inspires excellence, discipline, creativity,
            leadership, and lifelong learning.
          </p>

          <p className="text-gray-700 leading-8 mb-8">
            We believe every child has unique potential.
            Together with parents, we are committed to
            nurturing confident, responsible, and successful
            future leaders.
          </p>

          <h3 className="text-2xl font-bold text-blue-950">
            Lawrence Nzechukwu
          </h3>

          <p className="text-yellow-600 font-semibold">
            Proprietor
          </p>
        </div>

      </div>
    </section>
  );
}