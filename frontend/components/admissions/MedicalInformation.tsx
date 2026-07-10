export default function MedicalInformation() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

      <h2 className="text-3xl font-bold text-blue-950 mb-6">
        🩺 Medical Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Blood Group"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="text"
          placeholder="Genotype"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="text"
          placeholder="Known Allergies"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="text"
          placeholder="Emergency Contact Number"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <div className="md:col-span-2">
          <textarea
            rows={4}
            placeholder="Medical Conditions (if any)"
            className="border border-gray-300 rounded-lg p-4 w-full"
          ></textarea>
        </div>

      </div>

    </div>
  );
}