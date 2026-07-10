import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="bg-blue-950 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="mt-6 text-xl">
          We'd love to hear from you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-5 text-lg">

            <p>
              📍 Afugiri, Umuahia North, Abia State
            </p>

            <p>
              📞 07930900674
            </p>

            <p>
              ✉ victoryinternational@gmail.com
            </p>

            <p>
              🕒 Monday – Friday: 8:00 AM – 4:00 PM
            </p>

          </div>

        </div>

        <div>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-4"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full border rounded-lg p-4"
            />

            <button className="bg-yellow-500 hover:bg-yellow-600 px-8 py-4 rounded-lg font-bold transition">
              Send Message
            </button>

          </form>

        </div>

      </section>
<section className="py-20 bg-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center text-blue-950 mb-10">
      Find Us
    </h2>

    <div className="rounded-xl overflow-hidden shadow-xl">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3971.2829011038357!2d7.492279000000001!3d5.524978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzEnMjkuOSJOIDfCsDI5JzMyLjIiRQ!5e0!3m2!1sen!2sng!4v1783585412295!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

    </div>

  </div>
</section>
      <Footer />
    </>
  );
}