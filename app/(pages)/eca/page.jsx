"use client";

/* Wins, ECA and volunteering — v3 "Systems" design. Shared frame: app/(components)/imtiazz/ui.jsx
   Work history comes from EXPERIENCE in data.js so it always matches the home page. */

import { useEffect, useState } from "react";
import { Frame, PageHead, Reveal, glow, Icon } from "@/app/(components)/imtiazz/ui";
import { EXPERIENCE, WINS, SCORES } from "@/app/(components)/imtiazz/data";

const SECTIONS = [
  {
    id: "olympiads",
    title: "Olympiads",
    note: "National-level olympiads in AI, programming and science.",
    items: [
      { title: "International Artificial Intelligence Olympiad", when: "2026", badge: "Training camp",
        text: "Took part in IAIO 2026 and was selected for the training camp at the Institute of Information Technology (IIT), University of Dhaka: two days of learning and hands-on work." },
      { title: "Bangladesh Artificial Intelligence Olympiad", when: "2025", badge: "National round",
        text: "Cleared the preliminary round and competed in the national round of BDAIO 2025." },
      { title: "National High School Programming Contest", when: "2025", badge: "Regional winner",
        text: "Won the regional round of NHSPC 2025 with a medal and certificate, and was selected for the national round." },
      { title: "Bangladesh Informatics Olympiad", when: "2024", badge: "Round 1 cleared",
        text: "First time at BDOI: solved 2 of 5 problems and cleared the first round." },
      { title: "Bangladesh Junior Science Olympiad", when: "", badge: "Divisional round",
        text: "Travelled to Chittagong and cleared the divisional round, meeting people like Munir Chowdhury along the way." },
      { title: "ICT Olympiad Bangladesh", when: "", badge: "Divisional round",
        text: "Cleared the selection, regional and divisional rounds." },
    ],
  },
  {
    id: "hackathons",
    title: "Hackathons",
    note: "Building under pressure, usually as team lead.",
    items: [
      { title: "Technovation Hackathon 2025 · Programming Hero", when: "2025", badge: "Top 10",
        points: [
          "Built an AI-powered market monitoring and data analysis tool for crops, giving real-time insights for farming decisions.",
          "Added data retrieval and a chatbot that answers questions about plant diseases.",
          "Trained and deployed a plant-leaf disease detection model that diagnoses plant health from photos.",
        ] },
      { title: "NASA Space Apps Challenge · Team AstroTots", when: "2023 & 2024", badge: "Galactic Problem Solver",
        points: [
          "Led the team and presented our space exploration project to the judges.",
          "Earned the “Galactic Problem Solver” position.",
          "Worked with mentors and seniors and built a strong network.",
        ] },
    ],
  },
  {
    id: "awards",
    title: "Awards",
    items: [
      { title: "NASA Space Apps Challenge Bangladesh", when: "2023", badge: "Galactic Problem Solver",
        text: "Selected for virtual participation and awarded the “Galactic Problem Solver” position for our solution to a space challenge." },
      { title: "Creative Junior Award · Cyber Teens", when: "2023", badge: "Batch topper",
        text: "My first big award: batch topper in coding for juniors, presented by Cyber Teens founder Sadat Rahman (International Children's Peace Prize winner) and Monir Hossain (CEO, Creative IT)." },
    ],
  },
  {
    id: "startups",
    title: "Startups",
    note: "Products I started outside of client work.",
    items: [
      { title: "ZippyAI", when: "", badge: "Co-founder",
        text: "A LinkedIn extension that writes relevant comments on posts so users get more visibility and engagement." },
      { title: "MindSpace AI", when: "", badge: "Co-founder",
        text: "A community for people dealing with mental health issues, with AI tools for accessible, personal support." },
    ],
  },
  {
    id: "volunteering",
    title: "Volunteering",
    note: "Tech work for non-profits focused on internet safety, youth and mental health.",
    items: [
      { title: "Bangladesh Space Research Society (BSRS)", when: "", badge: "IT Executive",
        text: "Joined as a web developer and was promoted to IT Executive, running the society's IT operations and digital presence." },
      { title: "Cyber Teens Bangladesh", when: "", badge: "Developer",
        text: "Helping make the internet safer for young people by fighting cyberbullying; I contribute as a developer." },
      { title: "Mental Health Care Bangladesh", when: "", badge: "Web developer",
        text: "Supports students' mental health through sessions at schools, colleges and universities. I worked in the IT team." },
      { title: "Aruddho 71", when: "", badge: "IT team",
        text: "A non-profit for youth development, where I worked in the IT team." },
    ],
  },
  {
    id: "work",
    title: "Work experience",
    note: "The same history as on the home page.",
    items: EXPERIENCE.map((x) => ({ title: x.role, org: x.org, when: x.date, badge: x.ongoing ? "Now" : "", text: x.desc, now: x.ongoing })),
  },
];

export default function EcaPage() {
  const [active, setActive] = useState(SECTIONS[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SECTIONS.forEach((s) => { const el = document.getElementById(s.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <Frame active="eca">
      <PageHead eyebrow="Recognition · Olympiads · ECA" title={<>Wins, ranks &amp; <span className="h1-2">side quests.</span></>}
        lead="Olympiads, hackathons, startups and volunteering: the work that happened alongside the day job.">
        <div className="head-stats">
          <div><b>{WINS.length}</b><span>Major wins</span></div>
          {SCORES.map((s) => <div key={s.label}><b>{s.value}+</b><span>{s.label}</span></div>)}
          <div><b>{SECTIONS[0].items.length}</b><span>Olympiads</span></div>
        </div>
      </PageHead>

      <Reveal className="win-strip">
        {WINS.map((w) => (
          <div key={w.title} className={`win ${w.lime ? "hot" : ""}`} onMouseMove={glow}>
            <span className="yr">{w.year}</span><b>{w.title}</b><span className={`badge ${w.lime ? "lime" : ""}`}>{w.badge}</span>
          </div>
        ))}
      </Reveal>

      <div className="plist-wrap">
        <nav className="pindex" aria-label="Sections">
          {SECTIONS.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}><span>{String(i + 1).padStart(2, "0")}</span>{s.title}</a>
          ))}
        </nav>
        <div className="eca-secs">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="eca-sec">
              <Reveal className="eca-head">
                <h2>{s.title}</h2>
                {s.note && <p className="sec-note">{s.note}</p>}
              </Reveal>
              <Reveal as="ol" className="tl">
                {s.items.map((it) => (
                  <li key={it.title + it.when} className={it.now ? "now" : ""}>
                    <span className="tl-dot" aria-hidden="true" />
                    <div className="tl-top">
                      <h3>{it.title}</h3>
                      {it.badge && <span className={`badge ${it.now ? "lime" : ""}`}>{it.badge}</span>}
                    </div>
                    {(it.when || it.org) && <p className="case-meta">{[it.org, it.when].filter(Boolean).join(" · ")}</p>}
                    {it.text && <p className="tl-text">{it.text}</p>}
                    {it.points && <ul className="phl">{it.points.map((p) => <li key={p}><Icon name="check" />{p}</li>)}</ul>}
                  </li>
                ))}
              </Reveal>
            </section>
          ))}
          <Reveal as="p" className="eca-foot">
            I also took part in many local exams, events and competitions, worked in the robotics lab at the DC Office,
            and taught students the basics of robotics.
          </Reveal>
        </div>
      </div>
    </Frame>
  );
}
