export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="max-w-3xl text-center px-6">
          
          <h1 className="text-5xl font-semibold mb-6">
            Therapy for Anxiety & Trauma in Santa Monica, CA
          </h1>

          <p className="text-lg text-neutral-600 mb-8">
            Compassionate, evidence-based therapy for adults navigating anxiety,
            trauma, burnout, and chronic stress.
          </p>

          <button className="px-8 py-3 bg-black text-white rounded-full text-base">
            Schedule a Consultation
          </button>

        </div>
      </section>
            {/* SERVICES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-16">
            Areas of Focus
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            <div className="border p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">
                Anxiety & Panic Therapy
              </h3>
              <p className="text-neutral-600">
                Support for chronic worry, panic attacks, and nervous system
                overwhelm.
              </p>
            </div>

            <div className="border p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">
                Trauma & EMDR Therapy
              </h3>
              <p className="text-neutral-600">
                Trauma-informed care for single-incident and complex trauma.
              </p>
            </div>

            <div className="border p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">
                Burnout & High-Achiever Stress
              </h3>
              <p className="text-neutral-600">
                Therapy for professionals experiencing burnout, perfectionism,
                and emotional exhaustion.
              </p>
            </div>

          </div>
        </div>

      </section>
            {/* ABOUT SECTION */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-8">
            About Dr. Maya Reynolds, PsyD
          </h2>

          <p className="text-neutral-700 leading-relaxed mb-6">
            Dr. Maya Reynolds is a licensed clinical psychologist based in
            Santa Monica, California. She works with adults who feel overwhelmed
            by anxiety, stress, trauma, or burnout—often appearing high-functioning
            on the outside while struggling internally.
          </p>

          <p className="text-neutral-700 leading-relaxed">
            Her approach is warm, collaborative, and grounded in evidence-based
            practices including CBT, EMDR, mindfulness, and body-oriented
            techniques. Therapy is paced carefully, with an emphasis on safety,
            regulation, and long-term healing.
          </p>

        </div>
      </section>
            {/* OUR OFFICE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Our Office
          </h2>

          <p className="max-w-3xl mx-auto text-center text-neutral-600 mb-16">
            Located in Santa Monica, our therapy office is a calm, private space
            designed to help you feel safe, grounded, and at ease. Natural light,
            warm textures, and a quiet environment support in-person sessions.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <img
  src="/office1.jpeg"
  alt="Therapy office interior"
  className="rounded-lg object-cover w-full h-80 shadow-sm"
/>

<img
  src="/office2.jpeg"
  alt="Counseling room in Santa Monica"
  className="rounded-lg object-cover w-full h-80 shadow-sm"
/>

          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            In-person sessions available in Santa Monica, CA. Secure telehealth
            options are also offered for clients across California.
          </p>

        </div>
      </section>




    </main>
  );
}

