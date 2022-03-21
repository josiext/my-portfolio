import Head from "next/head";
import type { NextPage } from "next";
import Image from "next/image";

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
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
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

const ProjectCard = () => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image
      src="/img/card-top.jpg"
      alt="Sunset in the mountains"
      layout="fill"
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #photography
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #travel
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        #winter
      </span>
    </div>
  </div>
);

export default Home;
