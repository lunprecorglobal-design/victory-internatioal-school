export default function DocumentUploads() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

      <h2 className="text-3xl font-bold text-blue-950 mb-6">
        📎 Document Uploads
      </h2>

      <div className="space-y-6">

        <div>
          <label className="block font-semibold text-blue-950 mb-2">
            Passport Photograph
          </label>

          <input
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded-lg p-4 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold text-blue-950 mb-2">
            Birth Certificate
          </label>

          <input
            type="file"
            className="border border-gray-300 rounded-lg p-4 w-full"
          />
        </div>

        <div>
          <label className="block font-semibold text-blue-950 mb-2">
            Previous School Report (Optional)
          </label>

          <input
            type="file"
            className="border border-gray-300 rounded-lg p-4 w-full"
          />
        </div>

      </div>

    </div>
  );
}