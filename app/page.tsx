import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EC] text-[#26352F]">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Dr. Maya Reynolds</h2>
          <p className="text-sm text-[#6B756F]">
            PsyD • Licensed Clinical Psychologist
          </p>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#office" className="hover:opacity-70">Our Office</a>
          <a href="#faq" className="hover:opacity-70">FAQs</a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-[#48665A] px-5 py-3 text-sm text-white hover:opacity-90"
        >
          Book an Appointment
        </a>
      </nav>


      {/* HERO */}
      <section className="px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#8A6A52] mb-6">
              Online & In-Person Therapy in Santa Monica & Across California
            </p>

            <h1 className="text-5xl md:text-7xl leading-[1.05] font-medium mb-7">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="italic">thrive.</span>
            </h1>

            <p className="text-lg md:text-xl leading-8 text-[#5F6963] max-w-xl mb-9">
              Specialized therapy for adults, couples, teens, and children
              navigating anxiety, trauma, burnout, relationships, and life
              transitions.
            </p>

            <a
              href="#contact"
              className="inline-block rounded-full bg-[#48665A] px-8 py-4 text-white hover:opacity-90"
            >
              Book an Appointment
            </a>
          </div>

          <div className="relative h-[480px] md:h-[580px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/maya.jpg"
              alt="Dr. Maya Reynolds"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>


      {/* INTRO */}
      <section className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl leading-tight font-medium mb-8">
              You’re holding onto hope that life can be better than it is
              right now.
            </h2>

            <p className="text-lg md:text-xl leading-8 text-[#5F6963]">
              At Dr. Maya Reynolds Psychology, we want to make that hope a
              reality. Whether you are working through anxiety, recovering from
              difficult experiences, navigating burnout, or trying to build
              healthier relationships, therapy can provide a compassionate
              space to slow down, reflect, heal, and grow.
            </p>
          </div>

          <div className="relative h-[380px] md:h-[500px] overflow-hidden rounded-[2rem] mt-16">
            <Image
              src="/images/office-1.jpg"
              alt="Calm therapy office"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>


      {/* WHO WE HELP */}
      <section className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
            Who We Help
          </p>

          <h2 className="text-4xl md:text-6xl font-medium mb-14">
            Support for every stage of your story.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Adults */}
            <div>
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] mb-6">
                <Image
                src="/images/office-1.jpg"

                  alt="Supportive therapy environment for adults"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-medium mb-3">
                Adults
              </h3>

              <p className="text-[#5F6963] leading-7">
                Support for adults experiencing anxiety, stress, trauma,
                burnout, perfectionism, and major life transitions.
              </p>
            </div>


            {/* Couples */}
            <div>
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] mb-6">
                <Image
                src="/images/couples.jpg"
                  
                  alt="Comfortable therapy environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-medium mb-3">
                Couples
              </h3>

              <p className="text-[#5F6963] leading-7">
                A supportive environment for improving communication,
                understanding relationship patterns, and building stronger
                connections.
              </p>
            </div>


            {/* Children & Teens */}
            <div>
              <div className="relative h-[380px] overflow-hidden rounded-[2rem] mb-6">
                <Image
                src="/images/children.jpg"
                  
                  alt="Calm therapy environment"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <h3 className="text-2xl font-medium mb-3">
                Children & Teens
              </h3>

              <p className="text-[#5F6963] leading-7">
                Compassionate support for young people working through
                emotions, anxiety, confidence, family changes, and important
                life transitions.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* STATEMENT */}
      <section className="px-6 md:px-8 py-24 md:py-32 bg-[#E9E4DA]">
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-6">
            A Space to Feel Heard
          </p>

          <h2 className="text-4xl md:text-6xl leading-tight font-medium">
            You deserve a place where your story is heard, valued, and
            understood.
          </h2>

          <p className="text-lg md:text-xl text-[#5F6963] leading-8 mt-8 max-w-3xl mx-auto">
            Therapy is a collaborative process. Together, we can create space
            to understand what you are experiencing and move toward a life that
            feels more balanced and meaningful.
          </p>

        </div>
      </section>


      {/* SERVICES */}
      <section id="services" className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
            Areas of Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-medium mb-14">
            Therapy for the things that matter most.
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">

            <div className="border-t border-[#C9C1B5] py-6">
              <h3 className="text-2xl font-medium">
                Anxiety & Panic
              </h3>
              <p className="text-[#5F6963] mt-3 leading-7">
                Understanding worry, panic, overthinking, and patterns that
                make it difficult to feel at ease.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] py-6">
              <h3 className="text-2xl font-medium">
                Trauma & EMDR
              </h3>
              <p className="text-[#5F6963] mt-3 leading-7">
                A careful and paced approach to processing difficult
                experiences and rebuilding a sense of safety.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] py-6">
              <h3 className="text-2xl font-medium">
                Burnout & Perfectionism
              </h3>
              <p className="text-[#5F6963] mt-3 leading-7">
                Support for people who feel overwhelmed, exhausted, or
                pressured to keep everything together.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] py-6">
              <h3 className="text-2xl font-medium">
                Relationships
              </h3>
              <p className="text-[#5F6963] mt-3 leading-7">
                Building healthier communication, stronger boundaries, and
                meaningful connections.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] py-6">
              <h3 className="text-2xl font-medium">
                Life Transitions
              </h3>
              <p className="text-[#5F6963] mt-3 leading-7">
                Finding clarity and stability during changes in work,
                relationships, identity, or family life.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] py-6">
              <h3 className="text-2xl font-medium">
                Mindfulness & Resilience
              </h3>
              <p className="text-[#5F6963] mt-3 leading-7">
                Developing practical tools to reconnect with yourself and
                respond to challenges with greater awareness.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* HOW WE WORK */}
      <section className="px-6 md:px-8 py-24 md:py-32 bg-[#E9E4DA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
            <Image
              src="/images/office-2.jpg"
              alt="Peaceful therapy office"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
              How We Work
            </p>

            <h2 className="text-4xl md:text-5xl font-medium mb-7">
              Therapy that meets you where you are.
            </h2>

            <p className="text-lg leading-8 text-[#5F6963] mb-6">
              Every person brings a different story to therapy. Dr. Maya
              Reynolds takes time to understand your experiences, goals, and
              needs before creating a personalized approach.
            </p>

            <p className="text-lg leading-8 text-[#5F6963] mb-6">
              Sessions may include evidence-based approaches such as CBT, EMDR,
              mindfulness-based practices, and body-oriented techniques.
            </p>

            <p className="text-lg leading-8 text-[#5F6963]">
              Therapy is collaborative. You do not have to figure everything
              out alone.
            </p>

          </div>
        </div>
      </section>


      {/* SPECIALTIES */}
      <section className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
                Our Specialties
              </p>

              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                Honoring where you’ve been and helping shape where you’re
                headed.
              </h2>
            </div>

            <div className="space-y-8">

              <div className="border-t border-[#C9C1B5] pt-6">
                <h3 className="text-2xl font-medium mb-3">
                  Trauma
                </h3>
                <p className="text-[#5F6963] leading-7">
                  We can work together to understand how difficult experiences
                  continue to affect your present life.
                </p>
              </div>

              <div className="border-t border-[#C9C1B5] pt-6">
                <h3 className="text-2xl font-medium mb-3">
                  EMDR
                </h3>
                <p className="text-[#5F6963] leading-7">
                  EMDR can be incorporated into therapy as an evidence-based
                  approach for processing traumatic or distressing experiences.
                </p>
              </div>

              <div className="border-t border-[#C9C1B5] pt-6">
                <h3 className="text-2xl font-medium mb-3">
                  Anxiety
                </h3>
                <p className="text-[#5F6963] leading-7">
                  Learn to recognize patterns of anxiety and develop practical
                  strategies for responding with greater confidence.
                </p>
              </div>

              <div className="border-t border-[#C9C1B5] pt-6">
                <h3 className="text-2xl font-medium mb-3">
                  Burnout & Perfectionism
                </h3>
                <p className="text-[#5F6963] leading-7">
                  Create healthier expectations, boundaries, and routines while
                  reconnecting with what matters to you.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section
        id="about"
        className="px-6 md:px-8 py-24 md:py-32 bg-[#D9D1C4]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
              About Dr. Maya
            </p>

            <h2 className="text-4xl md:text-5xl font-medium mb-7">
              Warm, grounded, and collaborative.
            </h2>

            <p className="text-lg leading-8 text-[#5F6963] mb-6">
              I’m a licensed clinical psychologist based in Santa Monica,
              California. My work focuses on helping people navigate anxiety,
              panic, trauma, burnout, relationships, and meaningful life
              transitions.
            </p>

            <p className="text-lg leading-8 text-[#5F6963]">
              My approach combines evidence-based therapy with warmth,
              curiosity, and collaboration. My goal is to help you understand
              yourself more deeply and create sustainable change.
            </p>

          </div>

          <div className="relative h-[500px] rounded-[2rem] overflow-hidden">
            <Image
              src="/images/maya.jpg"
              alt="Dr. Maya Reynolds"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>


      {/* OUR OFFICE */}
      <section id="office" className="px-6 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
            Our Office
          </p>

          <h2 className="text-4xl md:text-6xl font-medium mb-8">
            A calm, private space for therapy.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-lg leading-8 text-[#5F6963] mb-7">
                The Santa Monica office is designed to feel welcoming, quiet,
                and grounding. The space provides a comfortable environment
                where you can slow down, reflect, and focus on your wellbeing.
              </p>

              <div className="space-y-4 text-[#5F6963]">

                <p>
                  <strong className="text-[#26352F]">
                    Location:
                  </strong>{" "}
                  Santa Monica, California
                </p>

                <p>
                  <strong className="text-[#26352F]">
                    Sessions:
                  </strong>{" "}
                  In-person therapy and secure telehealth sessions across
                  California.
                </p>

                <p>
                  <strong className="text-[#26352F]">
                    Environment:
                  </strong>{" "}
                  Private, comfortable, and designed to support a relaxed
                  therapy experience.
                </p>

              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="relative h-[300px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/office-1.jpg"
                  alt="Dr. Maya Reynolds therapy office"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="relative h-[300px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/images/office-2.jpg"
                  alt="Comfortable therapy office interior"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="px-6 md:px-8 py-24 md:py-32 bg-[#E9E4DA]">
        <div className="max-w-4xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-[#8A6A52] mb-5">
            FAQs
          </p>

          <h2 className="text-4xl md:text-5xl font-medium mb-12">
            Common questions.
          </h2>

          <div className="space-y-8">

            <div className="border-t border-[#C9C1B5] pt-6">
              <h3 className="text-xl font-medium mb-3">
                Do you offer telehealth?
              </h3>
              <p className="text-[#5F6963] leading-7">
                Yes. Secure telehealth sessions are available for clients
                located across California.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] pt-6">
              <h3 className="text-xl font-medium mb-3">
                What do you help with?
              </h3>
              <p className="text-[#5F6963] leading-7">
                Dr. Maya works with anxiety, panic, trauma, burnout,
                perfectionism, relationships, and life transitions.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] pt-6">
              <h3 className="text-xl font-medium mb-3">
                Do you offer in-person therapy?
              </h3>
              <p className="text-[#5F6963] leading-7">
                Yes. In-person therapy is available in Santa Monica,
                California.
              </p>
            </div>

            <div className="border-t border-[#C9C1B5] pt-6">
              <h3 className="text-xl font-medium mb-3">
                What happens during the first session?
              </h3>
              <p className="text-[#5F6963] leading-7">
                The first session is an opportunity to talk about what brings
                you to therapy, your goals, and what kind of support may be
                helpful for you.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section
        id="contact"
        className="bg-[#48665A] text-white px-6 md:px-8 py-24 md:py-32 text-center"
      >
        <div className="max-w-4xl mx-auto">

          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-5">
            Schedule an Appointment
          </p>

          <h2 className="text-4xl md:text-6xl font-medium mb-7">
            Find a therapist who is the right fit for you.
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-8 text-white/80 mb-9">
            Starting therapy is a meaningful step. If you’re ready to explore
            whether therapy may be a good fit, I invite you to get in touch.
          </p>

          <a
            href="mailto:hello@mayareynolds.com"
            className="inline-block rounded-full bg-[#F7F3EC] text-[#26352F] px-8 py-4 hover:opacity-90"
          >
            Schedule a Consultation
          </a>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="px-6 md:px-8 py-12">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Dr. Maya Reynolds
            </h3>

            <p className="text-sm text-[#6B756F] leading-6">
              PsyD • Licensed Clinical Psychologist
            </p>

            <p className="text-sm text-[#6B756F] leading-6 mt-3">
              Online & in-person therapy in Santa Monica and across California.
            </p>
          </div>


          <div>
            <h4 className="font-medium mb-4">
              Navigate
            </h4>

            <div className="flex flex-col gap-3 text-sm text-[#6B756F]">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#office">Our Office</a>
              <a href="#faq">FAQs</a>
            </div>
          </div>


          <div>
            <h4 className="font-medium mb-4">
              Contact
            </h4>

            <div className="text-sm text-[#6B756F] space-y-2">
              <p>Santa Monica, CA</p>

              <a href="mailto:hello@mayareynolds.com">
                hello@mayareynolds.com
              </a>
            </div>
          </div>

        </div>


        <div className="max-w-7xl mx-auto border-t border-[#D8D1C6] mt-10 pt-6 text-sm text-[#6B756F] text-center">
          © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
        </div>

      </footer>

    </main>
  );
}