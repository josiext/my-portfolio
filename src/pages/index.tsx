import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";

const PROJECTS = [
  {
    title: "PriceShop E-commerse",
    tags: ["NextJS", "Typescript", "Sequelize"],
  },
  {
    title: "Calcultor",
    tags: ["Vanilla JS"],
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>José Núñez | Presentation</title>
        <meta name="description" content="José Núñez Riveros Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <header className="bg-slate-100 grid place-content-center min-h-screen">
          <h1 className="text-5xl font-semibold">José Núñez Riveros</h1>
          <h2>Full-Stack developer</h2>
        </header>

        <section className="min-h-screen">
          <Header>Portfolio</Header>

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
        </section>
      </main>
    </>
  );
};

const Header = ({ children }: { children: string }) => (
  <header className="my-4">
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
      <div className="font-bold text-xl mb-2">{title}</div>
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
