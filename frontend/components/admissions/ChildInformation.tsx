export default function ChildInformation() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-blue-950 mb-6">
        👶 Child's Information
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Child's Full Name"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="date"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <select className="border border-gray-300 rounded-lg p-4 w-full">
          <option>Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select className="border border-gray-300 rounded-lg p-4 w-full">
          <option>Class Applying For</option>
          <option>Crèche</option>
          <option>Nursery 1</option>
          <option>Nursery 2</option>
          <option>Primary 1</option>
          <option>Primary 2</option>
          <option>Primary 3</option>
          <option>Primary 4</option>
          <option>Primary 5</option>
          <option>Primary 6</option>
        </select>

        <input
          type="text"
          placeholder="State of Origin"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <input
          type="text"
          placeholder="Nationality"
          className="border border-gray-300 rounded-lg p-4 w-full"
        />

        <div className="md:col-span-2">
          <label className="block font-semibold text-blue-950 mb-2">
            Passport Photograph
          </label>

          <input
            type="file"
            accept="image/*"
            className="border border-gray-300 rounded-lg p-4 w-full"
          />
        </div>

      </div>
    </div>
  );
}