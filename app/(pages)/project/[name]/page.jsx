"use client";

/* Case study pages (/project/hyperscaler, /project/iomi, /project/vestornet, /project/flourish).
   Content lives in app/(components)/imtiazz/cases.js; this file is only the layout. */

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Frame, PageHead, Icon, Reveal, glow, SecHead, WinBar } from "@/app/(components)/imtiazz/ui";
import { CASES, caseBySlug } from "@/app/(components)/imtiazz/cases";

function Shot({ img, host, alt, priority }) {
  return (
    <figure className="cs-fig">
      <div className="mock">
        <WinBar host={host} />
        <Image src={img.src} alt={alt} width={img.w} height={img.h} priority={priority} sizes="(max-width: 900px) 100vw, 1100px" />
      </div>
      {img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
  );
}

export default function CaseStudy({ params }) {
  const c = caseBySlug(params?.name);
  if (!c) notFound();
  const i = CASES.indexOf(c);
  const next = CASES[(i + 1) % CASES.length];
  const host = c.url ? c.url.replace(/^https?:\/\//, "") : c.name.toLowerCase();

  return (
    <Frame active="projects">
      <PageHead eyebrow={`Case study · ${c.cat}`} title={<>{c.name}{c.em && <> <span className="h1-2">{c.em}</span></>}<span className="h1-2">.</span></>} lead={c.summary}>
        <div className="hero-ctas">
          {c.url && <a className="pill-w" href={c.url} target="_blank" rel="noopener noreferrer"><Icon name="arrowUR" />Visit {host}</a>}
          <Link className="pill-g" href="/projects">All projects <Icon name="arrowR" /></Link>
        </div>
        <dl className="cs-meta">
          {[["Role", c.role], ["Year", c.year], ["Status", c.status], ["Type", c.cat]].map(([k, v]) => (
            <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </PageHead>

      {c.cover && <Reveal><Shot img={c.cover} host={host} alt={`${c.name} home page`} priority /></Reveal>}

      <section className="sec-tight">
        <SecHead eyebrow="Overview" title="The problem, and what I built" />
        <Reveal className="cs-two">
          <div className="card cs-prob" onMouseMove={glow}>
            <span className="eyebrow">The problem</span>
            <ul className="phl">{c.problem.map((t) => <li key={t}><Icon name="plus" className="ic x" />{t}</li>)}</ul>
          </div>
          <div className="card cs-sol" onMouseMove={glow}>
            <span className="eyebrow">What I built</span>
            <ul className="phl">{c.built.map((t) => <li key={t}><Icon name="check" />{t}</li>)}</ul>
          </div>
        </Reveal>
        {c.stats?.length > 0 && (
          <Reveal className="stats cs-stats" style={{ gridTemplateColumns: `repeat(${c.stats.length},minmax(0,1fr))` }}>
            {c.stats.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}
          </Reveal>
        )}
      </section>

      {c.shot && (
        <section className="sec-tight">
          <Reveal><Shot img={c.shot} host={host} alt={`${c.name} product screen`} /></Reveal>
        </section>
      )}

      <section className="sec-tight">
        <SecHead eyebrow="Stack" title="Built with" />
        <Reveal className="chips cs-chips">{c.stack.map((t) => <span key={t}>{t}</span>)}</Reveal>
      </section>

      <section className="sec-tight">
        <Reveal>
          <Link href={`/project/${next.slug}`} className="cs-next" onMouseMove={glow}>
            <span className="eyebrow">Next case study</span>
            <b>{next.name}{next.em && ` ${next.em}`}</b>
            <small>{next.cat}</small>
            <span className="rbtn"><Icon name="arrowUR" /></span>
          </Link>
        </Reveal>
      </section>
    </Frame>
  );
}
