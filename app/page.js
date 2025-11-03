import React from "react";
import Herosection from "./(components)/herosection";
import Projects from "./(components)/projects";
import Process from "./(components)/process";
import Skills from "./(components)/skills";
import Githubrofile from "./(components)/githubProfile";
import Worldwide from "./(components)/wordlwide";
import Contact from "./(components)/contact";
import Footer from "./(components)/footer";
import Experience from "./(components)/experience";
import Navbar from "./(components)/navbar";
import Blogs from "./(components)/blogs"

export default function page() {
  const content = [
    {
      title: "Lead Software Engineer @ Aaladinai",
      tag: "@aaladinai",
      description: (
        <ul className="list-disc">
          
          <li className="my-4">
            Leading full-stack development initiatives, overseeing system architecture, implementation, and delivery of scalable web applications.
          </li>
          <li className="my-4">
            Collaborating with the Project Manager and cross-functional teams to define project requirements and technical direction.
          </li>
          <li className="my-4">
            Designing, developing, and maintaining high-quality, secure, and efficient code across both frontend and backend systems.
          </li>
          <li className="my-4">
            Providing technical leadership and mentorship to junior developers, ensuring adherence to best practices and coding standards.
          </li>
          <li className="my-4">
            Managing deployment processes, monitoring system performance, and optimizing application scalability.
          </li>
          <li className="my-4">
            Ensuring confidentiality, compliance, and intellectual property protection as per company policies.
          </li>
        </ul>
      ),
    },
    {
      title: "Co-Founder & CTO @ Zippix LTD ",
      tag: "@zippix ltd",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed, developed, and deployed scalable full stack web,mobile
            applications, ensuring high performance and security .
          </li>
          <li className="my-4">
            Led teams and managed client relations, successfully delivering
            projects for over 30 clients.{" "}
          </li>
          <li className="my-4">
            Spearheaded product development initiatives, driving innovation and
            achieving project goals.
          </li>
        </ul>
      ),
    },
    {
      title: "MERN stack developer @outnet",
      tag: "@outnet",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Develop and maintain the backend services and APIs using Node.js and
            Express.js.
          </li>
          <li className="my-4">
            Design and implement scalable and efficient database schemas using
            MongoDB.
          </li>
          <li className="my-4">
            Work with the Next.js framework to build and optimize server-side
            rendered and statically generated React applications.
          </li>
          <li className="my-4">
            Collaborate with front-end developers to integrate user-facing
            elements with server-side logic.
          </li>
          <li className="my-4">
            Participate in code reviews and provide constructive feedback.
          </li>
          <li className="my-4">
            Write clean, maintainable, and well-documented code.
          </li>
        </ul>
      ),
    },
    {
      title: "Full stack developer @PixiQor",
      tag: "@pixiqor",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Develop and maintain the backend services and APIs using Node.js and
            Express.js, Nest JS and React native applicationð
          </li>
          <li className="my-4">
            Deploy projects on server and run applications on liveó
          </li>
          <li className="my-4">
            Troubleshoot and debug issues in both backend and frontend codeb
          </li>
          <li className="my-4">
            Lead development team for deliver projects in right time
          </li>
        </ul>
      ),
    },
    {
      title: "Web developer @Bangladesh Space Research Society",
      tag: "@BSRS",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed web applications and dashboards for event management,
            enhancing user experience and operational efficiency
          </li>
          <li className="my-4">
            Collaborated with cross-functional teams and senior developers to
            ensure seamless project execution and delivery.
          </li>
        </ul>
      ),
    },
    {
      title: "Web developer -Intern @Mental Health Care Bangladesh",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed and developed blogs, event management platforms, and
            organizational portfolio websites, improving online presence and
            user engagement
          </li>
          <li className="my-4">
            Collaborated with teams and contributed to initiatives focused on
            mental health awareness among young individuals.
          </li>
        </ul>
      ),
    },
    {
      title: "Team Leader @AstroTots NASA space app challenge 2023",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Developed and introduced our space exploration project to NASA Space
            Apps Challenge judges.
          </li>
          <li className="my-4">
            Collaborated with teams, met with seniors, received guidance, and
            built a strong network.
          </li>
        </ul>
      ),
    },
    {
      title: "IT team member @Aruddho 71",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed and developed blogs, event management platforms, and
            organizational portfolio websites, improving online presence and
            user engagement
          </li>
          <li className="my-4">
            Collaborated with teams and contributed to initiatives focused on
            Yoth development
          </li>
        </ul>
      ),
    },
    {
      title: "Team Leader @AstroTots NASA space app challenge 2024",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Developed and introduced our space exploration project to NASA Space
            Apps Challenge judges.
          </li>
          <li className="my-4">
            Collaborated with teams, met with seniors, received guidance, and
            built a strong network.
          </li>
        </ul>
      ),
    },
    {
      title: "Web developer -Volunteer @Cyber Teens",
      tag: "@MHCBD",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Worked as volunteer with a big team, making awarness cybeer security
            among people,specifically Teen ageers
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      <Herosection />
      <Projects />
      <Githubrofile />
      <Process />
      <Skills />
      {/* <Worldwide /> */}
      <Experience
        content={content}
        title="Experiences of Working as a Developer"
        description="After embarking on my coding journey, I have accumulated extensive experience as a developer through numerous freelance projects, various companies, and voluntary contributions."
      />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
