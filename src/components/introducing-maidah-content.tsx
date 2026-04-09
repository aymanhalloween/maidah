"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";

export function IntroducingMaidahContent() {
  return (
    <article className="px-6 pt-20 sm:pt-32 pb-24">
      <div className="max-w-[680px] mx-auto">
        <FadeIn index={0}>
          <Link
            href="/blog"
            className="text-[13px] text-muted hover:text-primary transition-colors duration-200"
          >
            &larr; Back
          </Link>
        </FadeIn>

        <FadeIn index={1}>
          <h1 className="text-[28px] sm:text-[32px] font-normal text-primary mt-10 leading-tight">
            Introducing Maidah
          </h1>
        </FadeIn>

        <FadeIn index={2}>
          <p className="text-[13px] text-muted mt-3">
            Ayman Hassen &middot; 2026
          </p>
        </FadeIn>

        <FadeIn index={3}>
          <div className="mt-12 space-y-6 text-base text-secondary leading-[1.8]">
            <p>Today we&rsquo;re announcing Maidah.</p>

            <p>
              Maidah is a permanent endowment fund. The principal is invested and
              held in perpetuity. The returns are deployed toward programs that
              serve Muslims in the West, and anyone who benefits from stronger
              institutions.
            </p>

            <h2 className="text-lg font-medium text-primary pt-8 pb-2">
              What we do
            </h2>

            <p>
              We invest across diversified asset classes. We deploy returns
              toward five areas: faith, health, education, family, and economic
              dignity.
            </p>

            <p>
              We also deploy capital directly: into technology, media, and the
              people shaping how the world sees and experiences Islam. Everything
              is funded through the endowment. Built to compound, not to
              fundraise.
            </p>

            <h2 className="text-lg font-medium text-primary pt-8 pb-2">Why</h2>

            <p>
              The Muslim community in the West has talent, ambition, and faith.
              What it doesn&rsquo;t have is permanent infrastructure. The kind
              that compounds across generations.
            </p>

            <p>
              There are charities. There are campaigns. There are individuals
              doing serious work out of pocket. There is no compounding
              engine that funds these efforts in perpetuity.
            </p>

            <p>Maidah is that engine.</p>

            <h2 className="text-lg font-medium text-primary pt-8 pb-2">
              The name
            </h2>

            <p>
              Maidah comes from Surah Al-Ma&rsquo;idah, The Table Spread. The
              fifth chapter of the Quran. A story about provision that comes with
              accountability.
            </p>

            <h2 className="text-lg font-medium text-primary pt-8 pb-2">
              Where we are
            </h2>

            <p>
              Maidah is early. The foundation is being established. The first
              projects are in development. The team is small.
            </p>

            <p>Every permanent institution started this way.</p>

            <h2 className="text-lg font-medium text-primary pt-8 pb-2">
              What&rsquo;s next
            </h2>

            <p>Build. Ship. Grow the endowment. Bring people in.</p>

            <p>
              If this is relevant to you, we&rsquo;d like to hear from you.
            </p>

            <p className="pt-6 text-primary">
              Ayman Hassen
              <br />
              <span className="text-secondary">Founder, Maidah</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
