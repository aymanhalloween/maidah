"use client";

import { FadeIn, FadeInView } from "./fade-in";
import { EmailSignup } from "./email-signup";

export function HomeContent() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-[680px] mx-auto text-center">
          <FadeIn index={0}>
            <p className="text-sm text-muted mb-4" dir="rtl">
              مائدة
            </p>
          </FadeIn>
          <FadeIn index={1}>
            <h1 className="text-[40px] sm:text-[52px] font-normal tracking-[-0.02em] text-primary leading-tight">
              Maidah
            </h1>
          </FadeIn>
          <FadeIn index={2}>
            <p className="text-base text-secondary leading-relaxed mt-6 max-w-[480px] mx-auto">
              A permanent endowment fund investing in the people and
              institutions the Muslim world still needs.
            </p>
          </FadeIn>
          <FadeIn index={3} className="mt-8">
            <a
              href="#join"
              className="inline-block bg-primary text-white text-[13px] uppercase tracking-[0.08em] font-medium px-7 py-3 rounded-[4px] hover:bg-[#333333] active:bg-black transition-colors duration-200"
            >
              Join
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Section 1 — The fund */}
      <section className="px-6 py-16 sm:py-24">
        <div className="max-w-[680px] mx-auto">
          <FadeInView index={0}>
            <p className="text-base text-secondary leading-[1.7]">
              The principal is never touched.
              <br />
              The returns are put to work. Forever.
            </p>
          </FadeInView>
          <FadeInView index={1}>
            <p className="text-base text-secondary leading-[1.7] mt-6">
              Maidah is a waqf, a permanent fund that deploys investment
              returns toward faith, health, education, family, and economic
              dignity.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Section 2 — Direct deployment */}
      <section className="px-6 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto">
          <FadeInView>
            <p className="text-base text-secondary leading-[1.7]">
              Maidah also deploys capital directly: into technology, media, and
              the people shaping how the world sees and experiences Islam.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* The Quranic quote */}
      <section className="bg-cream py-16 sm:py-20 px-6">
        <div className="max-w-[680px] mx-auto text-center">
          <FadeInView index={0}>
            <blockquote className="text-lg sm:text-xl italic text-secondary leading-[1.7]">
              &ldquo;Send down to us a table from the heavens, to be for us a
              celebration for the first of us and the last of us.&rdquo;
            </blockquote>
          </FadeInView>
          <FadeInView index={1}>
            <cite className="block text-[13px] text-muted not-italic mt-4">
              Surah Al-Ma&rsquo;idah, 5:114
            </cite>
          </FadeInView>
        </div>
      </section>

      {/* Email signup */}
      <section id="join" className="px-6 py-20 sm:py-24">
        <div className="max-w-[680px] mx-auto">
          <FadeInView>
            <EmailSignup />
          </FadeInView>
        </div>
      </section>
    </>
  );
}
