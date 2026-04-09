"use client";

import Link from "next/link";
import { FadeIn } from "./fade-in";

export function MaidahMemoContent() {
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
            The Maidah Memo
          </h1>
        </FadeIn>

        <FadeIn index={2}>
          <p className="text-[13px] text-muted mt-3">Ayman Hassen</p>
        </FadeIn>

        <FadeIn index={3}>
          <div className="mt-12 space-y-6 text-base text-secondary leading-[1.8]">
            {/* Preface */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              Preface
            </h2>

            <p>
              There are roughly 3.5 million Muslims living in the United States.
              The community has produced doctors, engineers, founders, athletes,
              scholars, artists, and public servants at every level. By most
              measures, Muslim Americans are among the most educated and
              highest-earning religious demographics in the country.
            </p>

            <p>
              And yet the institutional infrastructure available to this
              community is thin. There are mosques. There are weekend
              schools. There are a handful of national nonprofits. But there is
              almost no permanent capital. No compounding base of assets held in
              perpetuity whose returns fund the things that make a community
              durable across generations.
            </p>

            <p>
              Compare this to the infrastructure available to other American
              faith communities: the LDS Church manages an estimated $100
              billion+ in assets across its investment arm. The Jewish community
              in the US has hundreds of federation endowments, many with nine-
              and ten-figure balances, funding everything from education to
              healthcare to cultural production. Catholic institutions hold
              endowments across thousands of hospitals, universities, and
              charitable organizations.
            </p>

            <p>
              Muslims in the West have almost none of this. The gap is not in
              talent or wealth. It is in structure.
            </p>

            <p>Maidah exists to close that gap.</p>

            {/* The problem */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              The problem
            </h2>

            <p>
              The dominant funding model for Muslim institutions in the West is
              campaign-based philanthropy: Ramadan drives, emergency appeals, and
              annual galas. These campaigns work. They raise significant capital
              each year. But they share a structural flaw: the money is spent
              down. Every dollar raised is a dollar deployed. There is no
              residual. There is no compounding. Next year, you start again from
              zero.
            </p>

            <p>This model creates three problems.</p>

            <p>
              First, it produces institutional fragility. Organizations that
              depend entirely on annual fundraising are one bad year away from
              contraction. Staff get cut. Programs disappear. Momentum is lost.
              The community pays for this in ways that are hard to measure but
              easy to feel.
            </p>

            <p>
              Second, it makes long-horizon investment nearly impossible. The
              most important things a community can build (endowed scholarships,
              permanent media institutions, sustained research programs,
              generational wealth vehicles) require patient capital deployed over
              decades. Campaign-based fundraising optimizes for this
              year&rsquo;s needs, not the next generation&rsquo;s.
            </p>

            <p>
              Third, it creates a reactive posture. The community raises money in
              response to crises, not in anticipation of opportunities. A refugee
              crisis triggers a campaign. A natural disaster triggers a campaign.
              A political crisis triggers a campaign. The fundraising
              infrastructure is oriented around problems, not around vision. The
              question is always &ldquo;what do we need?&rdquo; and almost never
              &ldquo;what should we build?&rdquo;
            </p>

            <p>
              The result is a community with enormous human capital and almost no
              institutional capital. No permanent base from which to fund,
              create, and sustain the things that make a community whole.
            </p>

            {/* The name */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              The name
            </h2>

            <p>
              Maidah comes from the fifth chapter of the Quran, Surah
              Al-Ma&rsquo;idah. The word means &ldquo;the table spread&rdquo; or
              &ldquo;the table set with food.&rdquo;
            </p>

            <p>
              The surah is named after a passage near its end. The disciples of
              Isa (Jesus) asked Allah to send down a table of food from the sky.
              Not because they were hungry. Because they wanted something real. A
              sign. An experience of divine provision that they could see and
              touch and share.
            </p>

            <p>
              Allah granted the request. But the response came with a condition:
              whoever witnesses this provision and still turns away will face
              consequences unlike any before.
            </p>

            <p>
              This is the tension at the center of the name. Provision is not
              passive. It comes with terms. A table is set, but those who sit at
              it are expected to serve. Abundance is given, but stewardship is
              required. The blessing and the obligation are inseparable.
            </p>

            <p>
              The surah also contains one of the most significant verses in
              Islam, 5:3: &ldquo;Today I have perfected your religion for you,
              completed My favor upon you, and chosen Islam as your way.&rdquo;
              This was revealed during the Prophet&rsquo;s Farewell Pilgrimage.
              It is the verse of completion. The message is: you have been given
              everything you need. Now act accordingly.
            </p>

            <p>
              Maidah is named after this tension. The community has been given
              talent, wealth, and access. The table is set. The
              question is whether we build the institutions worthy of what
              we&rsquo;ve been given, or continue to react to what we lack.
            </p>

            {/* The framework */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              The framework
            </h2>

            <p>
              The question of what to fund, where to deploy returns from a
              permanent endowment, requires an organizing principle. Maidah uses
              one that is over nine hundred years old.
            </p>

            <p>
              The maqasid al-shariah are the higher objectives of Islamic law.
              The framework was first articulated by Abu Hamid al-Ghazali in the
              11th century and later systematized by Abu Ishaq al-Shatibi in the
              14th century. It holds that the entirety of the Shariah, every
              ruling, prohibition, and encouragement, is ultimately oriented
              toward preserving five things:
            </p>

            <p>
              <strong className="text-primary">Din:</strong> faith and religion.
              The preservation of the individual&rsquo;s and community&rsquo;s
              ability to practice, experience, and transmit their faith.
            </p>

            <p>
              <strong className="text-primary">Nafs:</strong> life and self. The
              preservation of human life, health, physical safety, and wellbeing.
            </p>

            <p>
              <strong className="text-primary">Aql:</strong> intellect and
              knowledge. The preservation of the capacity to learn, reason, and
              create. The protection of education and intellectual life.
            </p>

            <p>
              <strong className="text-primary">Nasl:</strong> family and
              lineage. The preservation of the family unit, marriage, children,
              and the continuity of future generations.
            </p>

            <p>
              <strong className="text-primary">Mal:</strong> wealth and dignity.
              The preservation of economic wellbeing, property,
              self-sufficiency, and dignified work.
            </p>

            <p>
              These five objectives are not Maidah&rsquo;s invention. They are
              the consensus framework of over nine centuries of Islamic legal
              scholarship. What Maidah does is apply them as an allocation
              framework: every dollar of returns disbursed from the endowment
              must serve at least one of these five objectives. This creates a
              decision filter that is both ancient in its grounding and practical
              in its application.
            </p>

            <p>
              On the Maidah site and in public-facing materials, these five are
              presented in plain language: faith, health, education, family, and
              dignity. The scholarly apparatus exists for those who seek it. The
              framework functions for those who don&rsquo;t.
            </p>

            {/* The vehicle */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              The vehicle
            </h2>

            <p>
              A waqf is a permanent Islamic endowment. The donor places assets
              into trust. The principal (the corpus) is held in perpetuity. It is
              never spent. Only the returns generated by the invested principal
              are deployed, and only toward the purposes designated by the
              endowment&rsquo;s charter.
            </p>

            <p>
              The concept dates back over 1,400 years. One of the earliest
              recorded awqaf was the Well of Ruma in Medina, purchased by Uthman
              ibn Affan, a companion of the Prophet, so that poor people could
              access water for free. The well still exists. The date palms around
              it still generate income. That income still funds charitable
              projects. Fourteen centuries of uninterrupted return from a single
              act of endowment.
            </p>

            <p>
              The waqf model scaled dramatically. During the Umayyad and Abbasid
              Caliphates, an estimated 60% of public services were funded through
              waqf institutions: hospitals, schools, libraries, water systems,
              public fountains, and shelters. The Ottoman Empire&rsquo;s waqf
              system sustained civic infrastructure across three continents.
              Al-Qarawiyyin in Fes, Morocco, founded as a waqf in 859 CE, is the
              world&rsquo;s oldest continuously operating university.
            </p>

            <p>
              The model is not uniquely Islamic in the modern era. Harvard
              University&rsquo;s endowment (approximately $50 billion) operates
              on the same principle: invest the corpus, spend only the returns,
              fund the mission in perpetuity. The Norwegian Government Pension
              Fund (over $1.7 trillion) is the sovereign state equivalent. The
              Ford Foundation, the Rockefeller Foundation, the Bill &amp; Melinda
              Gates Foundation all hold permanent endowments whose returns fund
              their programs.
            </p>

            <p>
              The Muslim community that invented this model over a millennium
              ago has almost entirely failed to deploy it in the West. Maidah is
              an attempt to correct that.
            </p>

            {/* The structure */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              The structure
            </h2>

            <p>
              Maidah is organized as a 501(c)(3) nonprofit foundation. The
              foundation holds the endowment and manages investments across a
              diversified portfolio. The principal is restricted and permanent.
              Returns are disbursed according to the maqasid framework.
            </p>

            <p>
              The foundation also makes direct investments through for-profit LLC
              subsidiaries. These subsidiaries operate independently in
              technology, media, and other domains, and generate revenue that
              flows back to the foundation, growing the endowment. This hybrid
              structure is well-established in US nonprofit law. Organizations
              like Mozilla Foundation (which owns Mozilla Corporation), Catholic
              Charities, and the National Geographic Society all operate with
              similar parent-subsidiary arrangements.
            </p>

            <p>
              The separation between the foundation and its subsidiaries is
              maintained through independent governance, separate books, and
              arm&rsquo;s-length transactions, in compliance with IRS
              requirements and the Uniform Prudent Management of Institutional
              Funds Act (UPMIFA), which governs endowment spending and investment
              practices in most US jurisdictions.
            </p>

            {/* Disbursement */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              Disbursement
            </h2>

            <p>
              Returns from the endowment are deployed through a grant-writing
              process mapped to the five maqasid.
            </p>

            <p>
              Each year, the foundation determines its available disbursement
              based on the endowment&rsquo;s investment performance and spending
              policy. That disbursement is then allocated across the five
              categories (faith, health, education, family, and dignity)
              according to a methodology set by the foundation&rsquo;s board and
              advisory council.
            </p>

            <p>
              Grants are written against specific programs within each category.
              Examples of the types of programs Maidah intends to fund:
            </p>

            <p>
              <strong className="text-primary">Faith:</strong> Spiritual
              experiences for converts. Umrah trips, immersive retreats, access
              to scholars and communities. Programs that let people experience
              Islam, not just read about it.
            </p>

            <p>
              <strong className="text-primary">Health:</strong> Mental health
              resources for Muslim communities. Wellness programs. Crisis support
              infrastructure.
            </p>

            <p>
              <strong className="text-primary">Education:</strong> Scholarships
              and research fellowships. Educational tools and platforms. Support
              for independent scholarship.
            </p>

            <p>
              <strong className="text-primary">Family:</strong> Financial support
              for young families. Marriage assistance. Parenting and family
              development resources.
            </p>

            <p>
              <strong className="text-primary">Dignity:</strong> Entrepreneurship
              and employment programs. Financial literacy. Pathways to
              self-sufficiency and economic agency.
            </p>

            <p>
              The grant-writing process ensures that disbursements are documented,
              measurable, and aligned with the endowment&rsquo;s charter. As the
              endowment grows, the number and scale of grants grows with it. At
              $10 million in assets with a 5% spending rate, the annual
              disbursement is $500,000. At $100 million, it is $5 million. At $1
              billion, it is $50 million. The math is simple. The discipline is
              in compounding long enough to reach those numbers.
            </p>

            {/* Distribution */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              Distribution
            </h2>

            <p>
              The question of how Maidah grows, how it attracts capital,
              attention, and participation, is primarily a question of trust.
            </p>

            <p>
              Endowments grow through donations and investment returns. Donations
              come from people who believe in the institution&rsquo;s mission and
              trust its stewardship. That trust is built through three things:
              demonstrated competence (shipping real work), transparency
              (publishing the memo, the financials, the grant reports), and
              proximity (people knowing the people behind it).
            </p>

            <p>
              The founder&rsquo;s personal platform (writing, community
              relationships, professional network) serves as the initial
              distribution channel. The first donors to any endowment are people
              who trust the founder. Over time, as Maidah produces visible work
              and publishes its results, the institution&rsquo;s credibility
              becomes independent of any individual.
            </p>

            <p>
              Content and media produced under Maidah serve a dual purpose: they
              are mission-aligned work funded by the endowment, and they increase
              the visibility and credibility of the institution. A documentary
              that reaches a wide audience does more for Maidah&rsquo;s growth
              than a fundraising gala.
            </p>

            <p>
              Technology products built under Maidah serve a similar function:
              they demonstrate competence, generate revenue, and create
              touchpoints with communities that might later contribute to the
              endowment.
            </p>

            <p>
              The growth model is simple: endowment returns compound, visible
              work builds trust, trust attracts capital, capital grows the
              endowment. But only if the work is real.
            </p>

            {/* Risks */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              Risks
            </h2>

            <p>
              There are four material risks to Maidah&rsquo;s success.
            </p>

            <p>
              <strong className="text-primary">Execution risk.</strong> Maidah is
              currently one person. Building a permanent institution requires
              sustained effort across legal, financial, creative, and operational
              domains. The risk that the founder cannot execute across all of
              these simultaneously is real. Mitigation: build an advisory board
              early, prioritize ruthlessly, and hire as soon as the endowment can
              support it.
            </p>

            <p>
              <strong className="text-primary">Capital risk.</strong> The
              endowment has no capital yet. An endowment without assets is a
              charter document, not an institution. The risk that Maidah cannot
              attract sufficient early capital to reach a meaningful compounding
              base is the most immediate threat. Mitigation: the founder&rsquo;s
              network, the memo as a fundraising artifact, and early visible work
              that demonstrates seriousness.
            </p>

            <p>
              <strong className="text-primary">Market risk.</strong> Endowment
              returns depend on investment performance. A sustained downturn or a
              period of poor returns could limit disbursements and slow growth.
              Mitigation: diversification across asset classes, conservative
              spending policy, and long time horizon.
            </p>

            <p>
              <strong className="text-primary">Time horizon risk.</strong> The
              waqf model is designed to operate across centuries. The modern
              attention economy operates in weeks. The risk is that donors,
              supporters, and the broader community lose patience with an
              institution that measures progress in decades, not quarters.
              Mitigation: ship visible work continuously. The endowment compounds
              in the background. The work ships in the foreground.
            </p>

            {/* Conviction */}
            <h2 className="text-lg font-medium text-primary pt-6 pb-2">
              Conviction
            </h2>

            <p>
              The waqf model has been tested for over 1,400 years. The maqasid
              framework has been refined for over 900 years. The need for
              permanent Muslim institutional infrastructure in the West has never
              been more obvious.
            </p>

            <p>
              What has not been tested is whether a single individual, starting
              from zero, can build an endowment of meaningful scale for this
              community in this country at this moment. That is what Maidah is
              attempting.
            </p>

            <p>
              The math favors patience. A $1 million endowment growing at 8%
              annually, with $100,000 in new contributions per year and a 5%
              spending rate, reaches $10 million in approximately 18 years. At
              $10 million with the same parameters, $100 million is approximately
              25 years away. The numbers are long but they are not unreasonable.
              They require consistency, not miracles.
            </p>

            <p>
              The institutions that exist today (Harvard, al-Qarawiyyin, the
              Norwegian sovereign wealth fund) were all, at some point, one
              person&rsquo;s decision to start. Maidah is that decision.
            </p>
          </div>
        </FadeIn>
      </div>
    </article>
  );
}
