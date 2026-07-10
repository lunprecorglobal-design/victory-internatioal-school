export default function ParentInformation() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">

      <h2 className="text-3xl font-bold text-blue-950 mb-6">
        👨‍👩‍👧 Parent / Guardian Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Parent / Guardian Full Name"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="text"
          placeholder="Relationship to Child"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="tel"
          placeholder="Alternative Phone Number"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="text"
          placeholder="Occupation"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <div className="md:col-span-2">
          <textarea
            rows={4}
            placeholder="Residential Address"
            className="border border-gray-300 rounded-lg p-4 w-full"
          ></textarea>
        </div>

      </div>

    </div>
  );
}