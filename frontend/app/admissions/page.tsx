import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import ChildInformation from "../../components/admissions/ChildInformation";
import ParentInformation from "../../components/admissions/ParentInformation";
import PreviousSchool from "../../components/admissions/PreviousSchool";
import MedicalInformation from "../../components/admissions/MedicalInformation";
import DocumentUploads from "../../components/admissions/DocumentUploads";
import Declaration from "../../components/admissions/Declaration";

export default function AdmissionsPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Online Admission Application
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto">
          Thank you for choosing Victory International School.
          Kindly complete the application form below.
        </p>
      </section>

      {/* Admission Form */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <form className="space-y-8">

            <ChildInformation />

            <ParentInformation />

            <PreviousSchool />

            <MedicalInformation />

            <DocumentUploads />

            <Declaration />

          </form>

        </div>
      </section>

      <Footer />
    </>
  );
}