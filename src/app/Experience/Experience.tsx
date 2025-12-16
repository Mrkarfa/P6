"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShimmeringText } from "@/components/shimmering-text";
import {
  WorkExperience,
  ExperienceItemType,
} from "@/components/work-experience";

gsap.registerPlugin(ScrollTrigger);

const WORK_EXPERIENCES: ExperienceItemType[] = [
  {
    id: "ness",
    companyName: "Ness Software Engineering",
    isCurrentEmployer: true,
    positions: [
      {
        id: "ness-sde",
        title: "Software Developer Engineer",
        employmentPeriod: "Jun 2024 - Present",
        employmentType: "Full-time",
        icon: "code",
        description: `- Led the development of the DevPortal SPA for scalable API integration
- Develops using **Git**, **GitHub**, and **GitHub Actions** and integrates ChangeHub for seamless integration
- Develops and maintains **Node.js** API applications with a focus on scalability and performance
- Covers POCs (Proof of Concepts) to evaluate new technologies before final selection
- Utilizes **Node.js**, **Next.js**, and **React** frontend for web display to external and internal users
- Managed the development of the DevPortal Hub for centralization of the platform
- Follows structured workflows like **Agile** and **Scrum** to achieve quality output`,
        skills: [
          "TypeScript",
          "Next.js",
          "Node.js",
          "React",
          "Git",
          "GitHub Actions",
          "Agile",
          "Scrum",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "llmsherpa",
    companyName: "LLMSherpa",
    positions: [
      {
        id: "llm-intern",
        title: "AI/ML Intern",
        employmentPeriod: "Jan 2024 - May 2024",
        employmentType: "Internship",
        icon: "code",
        description: `- Curated RAG solutions for high-quality datasets
- Designed and built APIs utilizing RAG solutions aligned with user requirements using **LangChain**
- Worked on **LLaMA**, **OpenAI**, and various LLM-based projects with RAG and data analysis
- Engaged in data engineering, data visualization, and **ETL pipeline** development`,
        skills: [
          "Python",
          "LangChain",
          "LLaMA",
          "OpenAI",
          "RAG",
          "ETL",
          "Data Engineering",
        ],
      },
    ],
  },
  {
    id: "quartz",
    companyName: "Quartz Co. Ltd.",
    isCurrentEmployer: true,
    positions: [
      {
        id: "quartz-percy",
        title: "Percy Engineer",
        employmentPeriod: "Feb 2024 - Present",
        employmentType: "Part-time",
        icon: "code",
        description: `- Curated Quartz React Remix for Gemini, delivering a seamless experience
- Generated Curated analytics and **KPIs** for informative page insights and Key Insights
- In-house Projects: **Quartz Analyzer**

**Quartz Portfolio - Calcite**
- Designed a Calcite SPA using **Remix.js**, delivering a seamless experience
- Designed and Built APIs for these classic full stack solutions such as Classic, Babel, React and Express with an intuitive Flow for seamless user experience in CuBIS and Reactflow

**On-Base Portfolio:**
- Designed and built APIs for these classic full stack solutions Set Up, Inton and Express
- Participated in day-to-day stand-up to track, manage condition
- Follow-up & Retrospective sprints about every sprint`,
        skills: [
          "React",
          "Remix.js",
          "TypeScript",
          "Gemini",
          "React Flow",
          "Express",
        ],
      },
    ],
  },
  {
    id: "long-island",
    companyName: "Long Island Ltd.",
    positions: [
      {
        id: "long-island-web",
        title: "Web Developer",
        employmentPeriod: "May 2023 - Jan 2024",
        employmentType: "Full-time",
        icon: "code",
        description: `- Built a modular design system for consistency and efficiency
- Built CI/CD pipelines that match these to development and deployment environments and cues for customization
- Leveraged AWS with the Serverless Tech to improve functionality`,
        skills: ["React", "Redux", "AWS", "CI/CD", "Serverless", "JavaScript"],
      },
    ],
  },
  {
    id: "mob-a-genesis",
    companyName: "Mob-A-Genesis",
    positions: [
      {
        id: "mob-sde",
        title: "SDE Intern",
        employmentPeriod: "Jul 2022 - Sep 2022",
        employmentType: "Internship",
        icon: "code",
        description: `- Designed the app's MVP model before for better UI and performance
- Integrated APIs and UI for iOS products for seamless onboarding
- Accelerated development for rapid UI/UX prototyping
- Follow-up on dev-test-build-flow, iterating conditions`,
        skills: ["Swift", "iOS", "API Integration", "UI/UX", "MVP"],
      },
    ],
  },
  {
    id: "ui-ux-designer",
    companyName: "UI/UX Designer",
    positions: [
      {
        id: "ux-senior",
        title: "Senior Designer",
        employmentPeriod: "Sep 2021 - Jul 2022",
        employmentType: "Full-time",
        icon: "design",
        description: `- Designed a unified code for effective clients
- Developed the clone and interface for external data and entities
- Published the Figma UX metrics for enclosed elements
- Streamlined it to Interaction visibility, semantics, and easy files`,
        skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
      },
    ],
  },
  {
    id: "freelancer",
    companyName: "Freelancer",
    positions: [
      {
        id: "freelance-dev",
        title: "Full-stack Developer",
        employmentPeriod: "Mar 2020 - Jun 2021",
        employmentType: "Freelance",
        icon: "code",
        description: `- Built a stress management service with real-time tracking features
- Designed a seamless for the client's own devices
- Designed a way to include monitoring enabled code
- Designed a customizable WordPress friendly pages`,
        skills: [
          "WordPress",
          "HTML/CSS",
          "JavaScript",
          "Node.js",
          "Full-stack",
        ],
      },
    ],
  },
  {
    id: "graphic-designer",
    companyName: "Graphic & UI/UX Designer",
    positions: [
      {
        id: "graphic-junior",
        title: "Junior Designer",
        employmentPeriod: "Feb 2018 - Feb 2020",
        employmentType: "Part-time",
        icon: "design",
        description: `- Designed logos, posters, ads, and UI
- Designed and contributed to client projects`,
        skills: [
          "Photoshop",
          "GUI Design",
          "Logo Design",
          "Brand",
          "Adobe Illustrator",
          "Sales",
          "Brochuredesign",
        ],
      },
    ],
  },
];

const EDUCATION: ExperienceItemType[] = [
  {
    id: "univ",
    companyName: "University of Calcutta - MAKAUT",
    positions: [
      {
        id: "btech",
        title: "B.Tech CSE",
        employmentPeriod: "2020 - 2024",
        icon: "education",
        description: `- Currently studying for a Bachelor's Degree in Information Science
- Lambda Participation, 30 English Talks
- Initiative started spaces, teaching
- CGPA: 9.02 (Till 7th Semester)
- NPTEL - MIT Coding Certification, and Application Award 2033
- 2nd Prize - Business Shark Competition 2024`,
        skills: [
          "CS",
          "Java",
          "Kotlin",
          "Python",
          "AI/ML",
          "JavaScript",
          "MongoDB",
          "Algorithms",
          "DataStruct",
          "WFILeads",
          "Python2",
          "PlanetRx",
          "Frontend",
          "Blockchain",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "school",
    companyName: "La Ti: Tung High School (for Girls) - CBDSE",
    positions: [
      {
        id: "higher-sec",
        title: "Higher Secondary",
        employmentPeriod: "2018 - 2020",
        icon: "education",
        description: `- Student of the JazzyScience Bengaluru Online Program
- Learned project Intensive in Attentively due to withstanding any extra as the student speaks
- Recreated science a range of other advanced tracks, including:
  - Big Prizes in National Schools and Engineering for 2019 (CBSE)
  - 1st Prize - Gen-The-City Initiative and Engineering For 2019
  - Graduation Made 2. Best Hackathon 2019
  - Participation Prize - National Teams and Students's Participation Contest 2019
  - 1st Prize - Gen-The-City Math and MigsLabs's Participation Contest 2022
  - 2nd Prize - National Young Enthusiast Contest 2018
  - Selected for State of Enthusiasm Made ? Pair Match 09-18
  - Selected for National Business Career & Enthusiasm for the research job (starting from advisor)
- Received an Academy's Hall of Fame! for academic achievements
- Developed a Startup-style Mini Job to Power the students association
- Earned a first prize from Applied free for an science accromodation
- Invented analytics to some used Prices of Sciency accromodation creation
- Last working also for Full & Public, managing the web contributions`,
        skills: [
          "CBSE",
          "Physics",
          "Chem",
          "CS",
          "Maths",
          "Science",
          "Olympiad",
          "Self-Service",
        ],
      },
    ],
  },
  {
    id: "theophilus",
    companyName: "The Opus Elementary School",
    positions: [
      {
        id: "elem",
        title: "Matriculate",
        employmentPeriod: "2006 - 2018",
        icon: "education",
        description: `- Having grown as a mind and teaching chapter of the discipline
- Initiated and grew as entire at civil and national levels
- Participation Prize - National Young Information Contest 2016
- Participation Prize - National Young Informatics Contest 2015
- 1st Prize - Gen The City Young SInformation Contest 2014
- General Prize Holder of Informatics Genius Five States CA
- Developed new leaders using the code source National GML`,
        skills: [
          "Theory",
          "Education",
          "MSci",
          "CSE",
          "Leadership",
          "Self-Service",
        ],
      },
    ],
  },
];

const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Work experience items animation
      const workItems = workRef.current?.querySelectorAll(".space-y-4");
      if (workItems) {
        gsap.from(workItems, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: workRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Education section animation
      gsap.from(educationRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 md:px-8 lg:px-16 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center gap-2">
            <ShimmeringText text="Experience" duration={2} />
            <span className="text-blue-500">✦</span>
          </h2>
        </div>

        {/* Work Experience */}
        <div ref={workRef} className="font-mono">
          <WorkExperience experiences={WORK_EXPERIENCES} />
        </div>

        {/* Education Section */}
        <div ref={educationRef} className="mt-16 font-mono">
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground flex items-center gap-2">
            <span className="text-lg">🎓</span> Education
          </h3>
          <WorkExperience experiences={EDUCATION} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
