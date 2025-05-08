"use client";
import React from "react";
import Navbar from "@/app/(components)/navbar";
import Link from "next/link";
import Experience from "@/app/(components)/experience";
import Footer from "@/app/(components)/footer";
import SideNav from "@/app/(components)/sidenav"; // Import the new component

export default function page() {
  // Navigation sections configuration
  const navSections = [
    { id: "volunteering", title: "Volunteering" },
    { id: "experiences", title: "Work Experience" },
    { id: "awards", title: "Awards" },
    { id: "startups", title: "Startups" },
    { id: "hackathons", title: "Hackathons" },
    { id: "olympiads", title: "Olympiads" },
  ];

  const Jobs = [
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
  ];
  const volunteer = [
    {
      title: "Cyber Teens Bangladesh",
      tag: "@cyberTeens",
      description: (
        <p>
          Working at <b>Cyber Teens</b> to make the internet safer for the
          younger generation. We focus on combating cyberbullying and helping
          people overcome related problems. I contribute as a developer in this
          initiative.
        </p>
      ),
    },
    {
      title: "Aruddho 71",
      tag: "@A71",
      description: (
        <p>
          <b>Aruddho 71</b> is a non-profit organization focused on youth
          development. I worked in the IT team and gained valuable experience
          and networking opportunities.
        </p>
      ),
    },
    {
      title: "Mental Health Care Bangladesh",
      tag: "@MHCBD",
      description: (
        <p>
          This organization focuses on mental health and well-being by providing
          support to students and young individuals. They arrange sessions in
          various schools, colleges, and universities. I contributed as a web
          developer in their IT team.
        </p>
      ),
    },
    {
      title: "Bangladesh Space Research Society (BSRS)",
      tag: "@BSRS",
      description: (
        <p>
          I joined BSRS as a web developer in September and worked diligently
          with the organization. My dedication led to a promotion to IT
          Executive. I am immensely grateful to the organization for providing
          me with this opportunity to grow and advance in my career.
        </p>
      ),
    },
  ];
  const awards = [
    {
      title: "Creative Junior Award",
      tag: "@cyberTeens",
      description: (
        <p>
          The first such great achievement of my life! An Experience of Taking a
          coding for juniors Batch Topper Award from Cyber ​​Teens Founder Sadat
          Rahman (International Children's Peace Prize Winner) and Monir Hossain
          (CEO of Creative IT).
        </p>
      ),
    },
    {
      title: "NASA Space Apps Challenge - Galactic Problem Solver",
      tag: "@cyberTeens",
      description: (
        <p>
          Our team was honored to be selected for virtual participation in the
          NASA Space Apps Challenge Bangladesh 2023. Through dedication and
          innovation, we achieved the prestigious "Galactic Problem Solver"
          position, showcasing our ability to tackle complex space-related
          challenges.
        </p>
      ),
    },
  ];
  const startup = [
    {
      title: "Zippix Limited, UK",
      tag: "@cyberTeens",
      description: (
        <p>
          Zippix is a UK-based software agency that helps businesses grow with
          smart, reliable digital solutions. Our expert team of developers,
          designers, and tech experts work together to build custom websites,
          mobile apps, and software that actually make a difference. We
          specialize in things like full-stack development, AI-powered tools,
          SaaS platforms, and tailored software that fits your business needs
          whether you're just starting out or running a big company. Our goal is
          simple: to build fast, easy-to-use, and future-ready digital products.
        </p>
      ),
    },
    {
      title: "ZippyAI",
      tag: "@cyberTeens",
      description: (
        <p>
          ZippyAI is a LinkedIn extension that generates comments for LinkedIn
          posts to increase engagement. Users can generate relevant comments to
          gain more visibility and interactions on the platform.
        </p>
      ),
    },
    {
      title: "MindSpace AI",
      tag: "@cyberTeens",
      description: (
        <p>
          To provide accessible, personalized, and scalable mental health
          support using AI-driven tools and community engagement. This platform
          serves as a community for individuals dealing with mental health
          issues, enabling them to share their thoughts and access AI-driven
          tools for support.
        </p>
      ),
    },
  ];
  const Hackathons = [
    {
      title: "Team Leader @AstroTots NASA space app challenge 2023 & 2024",
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
          <li className="my-4">
            we achieved the prestigious "Galactic Problem Solver" position
          </li>
        </ul>
      ),
    },
  ];
  const Olympiad = [
    {
      title: "Bangladesh Artificial intelligence Olympiad",
      tag: "@bdaio",
      description: (
        <p>
          Participated in the BDAIO 2025, successfully cleared the preliminary
          round, and was selected for the National Round. It was a remarkable
          experience to showcase my skills in AI and compete at a national
          level.
        </p>
      ),
    },
    {
      title: "Bangladesh Informatics Olympiad",
      tag: "@cyberTeens",
      description: (
        <p>
          Participated in BDOI 2024 and solved 2 out of 5 problems. I cleared
          the first round, and it was a great experience to participate in BDOI
          as it was my first time.
        </p>
      ),
    },
    {
      title: "Bangladesh Junior Science Olympiad",
      tag: "@cyberTeens",
      description: (
        <p>
          I participated in BDJSO and traveled to Chittagong, where I cleared
          the divisional round. Unfortunately, I wasn't selected for the next
          final round. However, I met some notable individuals like Munir
          Chowdhury, which made the experience worthwhile.
        </p>
      ),
    },
    {
      title: "ICT Olympiad Bangladesh",
      tag: "@cyberTeens",
      description: (
        <p>
          Cleared the selection round, regional round, and divisional round but
          was not selected for the next round. It was an unfortunate outcome,
          but I gained valuable experience.
        </p>
      ),
    },
  ];

  return (
    <div>
      {/* Side Navigation */}

      {/* Main Content */}
      <div className="max-md:hidden">
        <SideNav sections={navSections} />
      </div>
      <div className="ml-0 md:ml-8">
        {/* Volunteering experience */}
        <div id="volunteering" className="pt-40 scroll-mt-24">
          <Experience
            content={volunteer}
            title="Volunteering"
            description={
              "This section covers my contributions to several organizations where I worked to bring about positive change in society. It demonstrates my commitment to social causes, including internet safety, youth development, mental health awareness, and space research."
            }
          />
        </div>

        {/* Job  */}
        <div id="experiences" className="scroll-mt-24">
          <Experience
            content={Jobs}
            title="Experiences of Working as a Developer"
            description="After embarking on my coding journey, I have accumulated extensive experience as a developer through numerous freelance projects, various companies, and voluntary contributions."
          />
        </div>

        {/* Awards */}
        <div id="awards" className="scroll-mt-24">
          <Experience
            content={awards}
            title="Awards and Achievements"
            description={
              "This section showcases the recognition I have received for my efforts and achievements. It reflects my dedication and excellence in the fields of coding and innovation."
            }
          />
        </div>

        {/* Startup and business */}
        <div id="startups" className="scroll-mt-24">
          <Experience
            content={startup}
            title="Startups and Businesses"
            description={
              "This section highlights my entrepreneurial ventures and projects, focusing on the development and delivery of technology-driven solutions. It showcases my leadership, technical expertise, and commitment to innovation and impact."
            }
          />
        </div>

        {/* Hackathons */}
        <div id="hackathons" className="scroll-mt-24">
          <Experience
            content={Hackathons}
            title="Hackathons"
            description={""}
          />
        </div>

        {/* Olympiad */}
        <div id="olympiads" className="scroll-mt-24">
          <Experience
            content={Olympiad}
            title="Olympiads"
            description={
              "This section highlights my participation in various national-level Olympiads, showcasing my academic and problem-solving abilities. It reflects my enthusiasm for competitive programming and science, along with the experiences gained from these events."
            }
          />
        </div>

        <div className="pt-4 mt-20">
          <p className="text-sm text-white my-10 w-[70%] m-auto text-center">
            In addition to these achievements, I participated in numerous local
            exams, events, and competitions, gaining valuable experience and
            building a strong network. I also had the opportunity to work with
            robotics at the DC Office Robotics Lab, also I taught some students
            the basics of robotics, further fueling my passion for technology
            and education.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
