import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";

import Linkedin from "icons/Linkedin";
import Github from "icons/Github";
import Person from "icons/Person";

const PROJECTS = [
  {
    title: "PriceShop E-commerse",
    tags: ["Typescript", "React", "NextJS", "Prisma", "PostgreSQL"],
  },
  {
    title: "Calcultor",
    tags: ["Vanilla JS"],
  },
];

const LINKEDIN = "https://www.linkedin.com/in/jose-nunez-riveros";
const GITHUB = "https://github.com/josiext";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>José Núñez Riveros</title>
        <meta name="description" content="José Núñez Riveros page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-w-full flex flex-col items-center">
        <div className=" w-full max-w-[1400px] pl-4 pr-4 pt-2 ">
          <nav className="max-w-[1400px] p-4 flex justify-between">
            <button className="font-semibold">JN</button>
            <div className="flex gap-6">
              <button className="font-semibold">Service</button>
              <button className="font-semibold">Works</button>
              <button className="font-semibold">Contact</button>
            </div>
          </nav>

          <section className="h-screen flex">
            <div className="flex-1 flex flex-col gap-3 justify-center text-black">
              <h1 className="text-7xl font-semibold ">
                José Núñez <br /> Riveros
              </h1>
              <h2 className="text-2xl mt-4">
                Tech Leader & Full-Stack developer.
              </h2>

              <div className="mt-4 flex gap-2">
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Linkedin size="35" />
                </a>
                <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <Github size="35" />
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Person />
            </div>
          </section>

          <section className="h-screen">
            <Header>Projects</Header>

            <div className="flex gap-8 overflow-x-auto p-10">
              {PROJECTS.map((item) => (
                <ProjectCard
                  key={item.title}
                  title={item.title}
                  tags={item.tags}
                />
              ))}
            </div>
          </section>

          <section className="min-h-screen">
            <Header>Contact me!</Header>
            <div className="flex gap-2 w-full justify-center mt-20">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Linkedin size="35" />
              </a>
              <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                <Github size="35" />
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

const Header = ({ children }: { children: string }) => (
  <header className="">
    <h2 className="text-4xl text-center font-semibold">{children}</h2>
  </header>
);

const ProjectCard = ({
  image = "/statics/default.png",
  title,
  description,
  tags,
}: {
  title: string;
  description?: string;
  tags?: string[];
  image?: string;
}) => (
  <div className="max-w-sm min-w-[400px]  rounded overflow-hidden shadow-lg">
    <div className="w-full h-[200px]">
      <Image src={image} alt="Project" width="100%" height="100%" />
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl">{title}</div>
      <div>{description}</div>
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags?.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default Home;
