export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-6xl leading-tight text-[var(--color-primary)]">
              Therapy for Anxiety,<br />
              Trauma & Burnout in<br />
              Santa Monica, CA
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[var(--color-primary)]">
              Thoughtful, evidence-based therapy for adults navigating anxiety,
              chronic stress, and the lasting impact of past experiences.
            </p>

            <button className="mt-8 border border-[var(--color-primary)] px-8 py-3 text-sm uppercase tracking-wide hover:bg-[var(--color-primary)] hover:text-white transition">
              Schedule a Consultation →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/images/hero.jpg"
              alt="Therapy office in Santa Monica"
              className="w-[420px] h-[420px] object-cover rounded-full"
            />
          </div>

        </div>
      </section>
      {/* SECOND SECTION */}
<section className="py-24">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-4xl md:text-5xl mb-6">
        Live a fulfilling life.
      </h2>

      <p className="mb-4 text-lg max-w-lg">
        Life can feel overwhelming—especially when you’re balancing
        personal relationships, work stress, and emotional exhaustion.
      </p>

      <p className="mb-8 text-lg max-w-lg">
        Therapy offers a supportive space to slow down, reflect, and
        build healthier ways of coping and connecting.
      </p>

      <button className="border border-[var(--color-primary)] px-6 py-3 text-sm uppercase tracking-wide hover:bg-[var(--color-primary)] hover:text-white transition">
        Get in touch →
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
  src="/images/fulfill.jpg"
  alt="Calm therapy space"
  className="w-full h-[420px] rounded-2xl object-cover"
/>


    </div>
    {/* MY SPECIALTIES SECTION */}
<section className="py-24 bg-[var(--color-bg)]">
  <h2 className="text-4xl font-serif text-center mb-12">
    My Specialties
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

    <div className="border rounded-xl p-6 text-center">
      <h3 className="text-2xl font-serif mb-4">Anxiety Therapy</h3>
      <p className="text-sm">
        Support for constant worry, overthinking, panic, and feeling emotionally overwhelmed.
      </p>
    </div>

    <div className="border rounded-xl p-6 text-center">
      <h3 className="text-2xl font-serif mb-4">Trauma Recovery</h3>
      <p className="text-sm">
        Trauma-informed therapy focused on safety, stabilization, and emotional regulation.
      </p>
    </div>

    <div className="border rounded-xl p-6 text-center">
      <h3 className="text-2xl font-serif mb-4">Burnout & Stress</h3>
      <p className="text-sm">
        Therapy for work stress, perfectionism, emotional exhaustion, and chronic pressure.
      </p>
    </div>

  </div>
</section>
{/* ABOUT SECTION */}
<section className="py-24 bg-[var(--color-bg)]">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-serif mb-8">
      About Dr. Maya Reynolds, PsyD
    </h2>

    <p className="mb-6 text-lg">
      I’m a licensed clinical psychologist based in Santa Monica, California,
      offering therapy for adults who feel overwhelmed by anxiety, stress,
      and the lingering effects of past experiences.
    </p>

    <p className="mb-6">
      My work focuses on anxiety, trauma, burnout, and chronic stress.
      Many of my clients are thoughtful, high-achieving individuals who
      appear “functional” on the outside but feel exhausted, stuck,
      or emotionally on edge internally.
    </p>

    <p>
      I take a warm, collaborative, and grounded approach to therapy,
      integrating evidence-based methods like CBT, EMDR,
      mindfulness-based practices, and body-oriented techniques.
    </p>

  </div>
</section>
{/* OUR OFFICE SECTION */}
<section className="py-24 bg-[var(--color-bg)]">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <h2 className="text-4xl font-serif mb-6">
        A Calm Space for Healing
      </h2>

      <p className="mb-4">
        My Santa Monica office is a quiet, private space designed to help
        clients feel grounded, safe, and at ease from the moment they arrive.
      </p>

      <p>
        The space is filled with natural light, comfortable seating, and a
        calming atmosphere that supports reflection, emotional safety,
        and meaningful therapeutic work.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
  src="/images/fulfill.jpg"
  alt="Calm therapy office in Santa Monica"
  className="rounded-2xl w-full h-[420px] object-cover"
/>

    </div>

  </div>
</section>




  </div>
</section>

       

  

    </main>
  );
}
