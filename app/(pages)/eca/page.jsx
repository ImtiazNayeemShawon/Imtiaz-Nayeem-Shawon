import React from "react";
import Navbar from "@/app/(components)/navbar";
import Link from "next/link";
import Experience from "@/app/(components)/experience";
import Footer from "@/app/(components)/footer";

export default function page() {
  const Jobs = [
    {
      title: "Lead Developer @zipbox",
      tag: "@zipbox",
      description: (
        <ul className="list-disc">
          <li className="my-4">
            Designed, developed, and deployed scalable full stack web
            applications, ensuring high performance and responsiveness.
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
          Rahman (International Children’s Peace Prize Winner) and Monir Hossain
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
      title: "Zipbox",
      tag: "@cyberTeens",
      description: (
        <p>
          I sought web development, UI/UX, and app development clients within my
          network, leading projects under the company name Zipbox. As the lead
          developer, I focused primarily on application development and
          successfully delivered over 30+ projects to different companies and
          startups. Target Audience: Individuals seeking mental health support,
          therapists, employers looking to offer mental health solutions, and
          researchers.
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
      <section className="   sm:py-16 lg:py-20 xl:py-24">
        <div className="absolute  inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/3/background.png"
            alt=""
          />
        </div>
        <div className="absolute inset-0 hidden lg:block">
          <img
            className="object-cover w-full h-full"
            src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/hero-marketplace/3/3d-objects.png"
            alt=""
          />
        </div>
        <div className="relative mt-40 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex">
            <div className="max-w-lg  mx-auto text-center lg:w-1/2 lg:max-w-none lg:mx-0 lg:text-left">
              <h1 className="text-3xl  font-bold text-white uppercase sm:text-5xl xl:text-5xl">
                explore my extra extracurricular profile
              </h1>
              <p className="max-w-xl mx-auto mt-6 text-lg font-normal text-gray-200 sm:text-xl lg:mx-0">
                I have been involved in various organizations ,projects, startup
                and events.
              </p>
              <div className="flex flex-col justify-center px-16 mt-10 space-y-5 sm:px-0 sm:items-center sm:space-x-5 sm:flex-row lg:justify-start sm:space-y-0">
                <Link
                  href="https://www.facebook.com/imtinayeem/"
                  target="_blank"
                  className="text-[14px] max-md:text-[10px] border border-[#9597f7] bg-[#6366F1] flex items-center gap-1 hover:gap-2 duration-300 font-semibold capitalize text-[#feffff] hover:opacity-80 px-4 py-2 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    className="w-2"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                  facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/in/imtiaznayeem/"
                  target="_blank"
                  className="text-[14px] max-md:text-[10px] border border-[#9597f7] text-[#acadfe] flex items-center gap-1 hover:gap-2 duration-300 font-semibold capitalize  hover:opacity-80 px-4 py-2 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="w-3"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                  <span className=""> Linkedin</span>
                </Link>
              </div>
              <div className="inline-grid grid-cols-2 mt-16 gap-x-8">
                <div className="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                  <p className="text-4xl font-bold text-white">10+</p>
                  <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                    Organizations <br className="hidden lg:block" />
                  </p>
                </div>
                <div className="flex flex-col lg:items-center lg:space-x-3 lg:flex-row">
                  <p className="text-4xl font-bold text-white">65+</p>
                  <p className="mt-2 text-sm font-medium text-gray-400 lg:mt-0">
                    Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Volunteering experience */}
      <div className="pt-40">
        <Experience
          content={volunteer}
          title="Volunteering"
          description={
            "This section covers my contributions to several organizations where I worked to bring about positive change in society. It demonstrates my commitment to social causes, including internet safety, youth development, mental health awareness, and space research."
          }
        />
      </div>
      {/* Job  */}
      <div className="">
        <Experience
          content={Jobs}
          title="Experiences of Working as a Developer"
          description="After embarking on my coding journey, I have accumulated extensive experience as a developer through numerous freelance projects, various companies, and voluntary contributions."
        />
      </div>
      {/* Awards */}
      <div className="">
        <Experience
          content={awards}
          title="Awards and Achievements"
          description={
            "This section showcases the recognition I have received for my efforts and achievements. It reflects my dedication and excellence in the fields of coding and innovation."
          }
        />
      </div>
      {/* Startup and business */}
      <div className="">
        <Experience
          content={startup}
          title="Startups and Businesses"
          description={
            "This section highlights my entrepreneurial ventures and projects, focusing on the development and delivery of technology-driven solutions. It showcases my leadership, technical expertise, and commitment to innovation and impact."
          }
        />
      </div>
      {/* Hackathons */}
      <div className="">
        <Experience content={Hackathons} title="Hackathons" description={""} />
      </div>
      {/* Olympiad */}
      <div className="">
        <Experience
          content={Olympiad}
          title="Olympiads"
          description={
            "This section highlights my participation in various national-level Olympiads, showcasing my academic and problem-solving abilities. It reflects my enthusiasm for competitive programming and science, along with the experiences gained from these events."
          }
        />
      </div>
      <div className="pt-4">
        <p className="text-sm text-white my-10 w-[70%] m-auto text-center  ">
          In addition to these achievements, I participated in numerous local
          exams, events, and competitions, gaining valuable experience and
          building a strong network. I also had the opportunity to work with
          robotics at the DC Office Robotics Lab,also I taught some students the
          basics of robotics, further fueling my passion for technology and
          education.
        </p>
      </div>

      <Footer />
    </div>
  );
}
