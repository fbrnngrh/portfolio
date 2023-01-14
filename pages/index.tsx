import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50 ">
        <Head>
          <title>Febrian Bayu Nugroho Portfolio</title>
        </Head>

        <Header />

        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>

        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        {/* Skils */}
        <section id='skills' className="snap-start">
          <Skills />
        </section>

        {/* Projects */}
        <section id='projects' className="snap-start">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contacts" className="snap-start">
          <Contacts />
        </section>
        <Link href='#hero'>
        <footer className="sticky bottom-5 cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
            className="rounded-full h-10 w-10 object-cover filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://avatars.githubusercontent.com/u/93916449?s=400&u=50ebf7d0d98b1fc49de8d0bae7804cbc704fd6ad&v=4" alt="" />
          </div>
        </footer>
        </Link>
      </div>
    </>
  );
}
