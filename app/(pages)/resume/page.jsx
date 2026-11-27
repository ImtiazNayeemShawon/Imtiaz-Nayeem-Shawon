"use client";

/* Resume — v3 "Systems" design. The resume is public/ImtiazNayeemShawonResume.pdf: replace that file to update it. */

import { Frame, PageHead, Icon, WinBar } from "@/app/(components)/imtiazz/ui";
import { LINKS } from "@/app/(components)/imtiazz/data";

const PDF = "/ImtiazNayeemShawonResume.pdf";

export default function ResumePage() {
  return (
    <Frame active="resume" cta={false}>
      <PageHead eyebrow="Resume · 1 page · PDF" title={<>Experience, work &amp; <span className="h1-2">capabilities.</span></>}
        lead="Full-stack engineer with 5+ years building production systems in TypeScript, Node.js, NestJS and Next.js, and the last 2 years focused on AI and LLM products.">
        <div className="hero-ctas">
          <a className="pill-w" href={PDF} download="Imtiaz-Nayeem-Shawon-Resume.pdf"><Icon name="file" />Download PDF</a>
          <a className="pill-g" href={PDF} target="_blank" rel="noopener noreferrer">Open in new tab <Icon name="arrowUR" /></a>
          <a className="pill-g" href={LINKS.call} target="_blank" rel="noopener noreferrer">Book a call <Icon name="arrowUR" /></a>
        </div>
      </PageHead>
      <section className="doc">
        <div className="mock doc-win">
          <WinBar host="ImtiazNayeemShawonResume.pdf" />
          <object data={`${PDF}#view=FitH&toolbar=0`} type="application/pdf" aria-label="Resume of Imtiaz Nayeem Shawon">
            <div className="doc-fallback">
              <p>Your browser can&apos;t show the PDF here.</p>
              <a className="pill-w" href={PDF} download><Icon name="file" />Download the resume</a>
            </div>
          </object>
        </div>
      </section>
    </Frame>
  );
}
