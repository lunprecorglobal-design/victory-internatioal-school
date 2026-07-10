export default function Declaration() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-950 mb-6">
        ✅ Declaration
      </h2>

      <div className="flex items-start gap-3 mb-8">

        <input
          type="checkbox"
          required
          className="mt-1"
        />

        <p className="text-gray-700 leading-7">
          I certify that all the information provided in this application
          is true and correct to the best of my knowledge. I understand
          that providing false information may result in the rejection of
          this application.
        </p>

      </div>

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-4 rounded-lg transition"
      >
        Submit Application
      </button>

    </div>
  );
}