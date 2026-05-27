import React from "react";
import Herosection from "./(components)/herosection";
import AuthorityStrip from "./(components)/authorityStrip";
import AboutSection from "./(components)/aboutSection";
import Services from "./(components)/services";
import Projects from "./(components)/projects";
import Process from "./(components)/process";
import AIEngineering from "./(components)/aiEngineering";
import Skills from "./(components)/skills";
import Experience from "./(components)/experience";
import Blogs from "./(components)/blogs";
import SocialGrowth from "./(components)/socialGrowth";
import Contact from "./(components)/contact";
import Footer from "./(components)/footer";

export default function page() {
  const content = [
    {
      title: "Software Engineer",
      tag: "@ScaleBuild LLC",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Leading full-stack development initiatives, designing scalable systems, collaborating with cross-functional teams, and delivering secure, production-ready applications.
          </li>
          <li>
            Collaborating with the Project Manager and teams to define project requirements, system infrastructure, and technical direction.
          </li>
          <li>
            Designing, developing, and maintaining high-quality, secure, and efficient code across both frontend and backend systems.
          </li>
          <li>
            Providing technical leadership and mentorship to developers, ensuring adherence to best practices and coding standards.
          </li>
          <li>
            Managing deployment processes on cloud environments, monitoring system performance, and optimizing application scalability.
          </li>
        </ul>
      ),
    },
    {
      title: "Lead Software Engineer",
      tag: "@AaladinAI",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Leading AI systems integrations, designing agentic workflow networks, building stateful reasoning layers, and managing scalable client service models.
          </li>
          <li>
            Designing, developing, and maintaining high-quality, secure, and efficient code across both frontend and backend systems.
          </li>
          <li>
            Collaborating with the Project Manager and cross-functional teams to define project requirements and technical direction.
          </li>
          <li>
            Managing deployment processes, monitoring system performance, and optimizing application scalability.
          </li>
        </ul>
      ),
    },
    {
      title: "Co-Founder & CTO",
      tag: "@Zippix LTD",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Designed, developed, and deployed scalable full-stack web and mobile applications for 30+ clients; led engineering teams, managed system operations, and oversaw code guidelines.
          </li>
          <li>
            Led teams and managed client relations, successfully delivering complex projects under tight timelines.
          </li>
          <li>
            Spearheaded product development initiatives, driving innovation and achieving project goals.
          </li>
        </ul>
      ),
    },
    {
      title: "MERN Stack Developer",
      tag: "@Outnet",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Engineered Node.js backend services and REST APIs, structured MongoDB schemas, integrated Next.js frontend pages, and oversaw database queries optimization.
          </li>
          <li>
            Work with the Next.js framework to build and optimize server-side rendered and statically generated React applications.
          </li>
          <li>
            Collaborate with front-end developers to integrate user-facing elements with server-side logic.
          </li>
          <li>
            Participate in code reviews and provide constructive feedback.
          </li>
        </ul>
      ),
    },
    {
      title: "Full Stack Developer",
      tag: "@PixiQor",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Built backend APIs, integrated NestJS servers, and delivered high-performance React Native mobile applications.
          </li>
          <li>
            Deploy projects on server and run applications on live environments.
          </li>
          <li>
            Troubleshoot and debug issues in both backend and frontend codebases.
          </li>
          <li>
            Lead development team for deliver projects in right time.
          </li>
        </ul>
      ),
    },
    {
      title: "Web Developer",
      tag: "@Bangladesh Space Research Society",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Designed web applications and dashboards for event management, enhancing user experience and operational efficiency.
          </li>
          <li>
            Collaborated with cross-functional teams and senior developers to ensure seamless project execution and delivery.
          </li>
        </ul>
      ),
    },
    {
      title: "Web Developer - Intern",
      tag: "@Mental Health Care Bangladesh",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Designed and developed blogs, event management platforms, and organizational portfolio websites, improving online presence and user engagement.
          </li>
          <li>
            Collaborated with teams and contributed to initiatives focused on mental health awareness.
          </li>
        </ul>
      ),
    },
    {
      title: "Team Leader @ AstroTots",
      tag: "@NASA Space Apps Challenge 2023",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Developed and introduced space exploration project to NASA Space Apps Challenge judges.
          </li>
          <li>
            Collaborated with teams, met with mentors, received guidance, and built a strong network.
          </li>
        </ul>
      ),
    },
    {
      title: "IT Team Member",
      tag: "@Aruddho 71",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Designed and developed blogs, event management platforms, and organizational portfolio websites, improving online presence.
          </li>
          <li>
            Collaborated with teams and contributed to initiatives focused on youth development.
          </li>
        </ul>
      ),
    },
    {
      title: "Team Leader @ AstroTots",
      tag: "@NASA Space Apps Challenge 2024",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Developed and introduced space exploration project to NASA Space Apps Challenge judges.
          </li>
          <li>
            Collaborated with teams, met with mentors, received guidance, and built a strong network.
          </li>
        </ul>
      ),
    },
    {
      title: "Web Developer - Volunteer",
      tag: "@Cyber Teens",
      description: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Worked as volunteer with a big team, making awareness of cyber security among teenagers.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div>
      <Herosection />
      <AuthorityStrip />
      <AboutSection />
      <Services />
      <Projects />
      <Process />
      <AIEngineering />
      <Skills />
      <Experience
        content={content}
        title="Experiences of Working as a Developer"
        description="A timeline of engineering leadership, scalable deployments, and full-stack system architecture."
      />
      <Blogs />
      <SocialGrowth />
      <Contact />
      <Footer />
    </div>
  );
}
