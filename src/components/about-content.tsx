"use client";

import Link from "next/link";
import { FadeIn, FadeInView } from "./fade-in";
import { EmailSignup } from "./email-signup";

export function AboutContent() {
  return (
    <>
      {/* Institutional description */}
      <section className="px-6 pt-20 sm:pt-32 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto">
          <FadeIn index={0}>
            <p className="text-base text-secondary leading-[1.7]">
              Maidah is a permanent endowment fund for Muslims in the West.
            </p>
          </FadeIn>
          <FadeIn index={1}>
            <p className="text-base text-secondary leading-[1.7] mt-6">
              The fund invests across diversified asset classes. The principal is
              held in perpetuity. Returns are deployed toward programs that serve
              five areas: faith, health, education, family, and economic dignity.
            </p>
          </FadeIn>
          <FadeIn index={2}>
            <p className="text-base text-secondary leading-[1.7] mt-6">
              Maidah also deploys capital directly: into technology, media, and
              the people shaping how the world sees and experiences Islam.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder block */}
      <section className="px-6 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto">
          <FadeInView index={0}>
            <p className="text-base text-primary leading-[1.7]">
              Founded 2026 by Ayman Hassen.
            </p>
          </FadeInView>
          <FadeInView index={1}>
            <p className="text-base text-secondary leading-[1.7] mt-1">
              Previously Apple, Nike, and Alif.
            </p>
          </FadeInView>
          <FadeInView index={2}>
            <Link
              href="/blog/the-maidah-memo"
              className="inline-block text-base text-primary hover:text-accent transition-colors duration-200 mt-4"
            >
              Read the founding memo &rarr;
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* Team list */}
      <section className="px-6 pb-16 sm:pb-24">
        <div className="max-w-[680px] mx-auto border-t border-b border-border divide-y divide-border">
          <FadeInView>
            <div className="flex items-center justify-between py-5 flex-wrap gap-2">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-[13px] text-muted font-mono">001</span>
                <div>
                  <span className="text-base text-primary">Ayman Hassen</span>
                  <span className="text-base text-secondary ml-4 hidden sm:inline">
                    Founder
                  </span>
                  <span className="block text-base text-secondary sm:hidden">
                    Founder
                  </span>
                </div>
              </div>
              <span className="text-muted">&rarr;</span>
            </div>
          </FadeInView>
          <FadeInView>
            <div className="flex items-center justify-between py-5 flex-wrap gap-2">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span className="text-[13px] text-muted font-mono">002</span>
                <span className="text-base text-primary">Open</span>
              </div>
              <a
                href="mailto:hello@maidah.org"
                className="text-[13px] text-muted hover:text-primary transition-colors duration-200"
              >
                Get in touch &rarr;
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Email signup */}
      <section className="px-6 py-20 sm:py-24">
        <div className="max-w-[680px] mx-auto">
          <FadeInView>
            <EmailSignup />
          </FadeInView>
        </div>
      </section>
    </>
  );
}
