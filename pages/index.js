import Head from 'next/head';
import Intro from './components/intro';
import Web3 from './components/web3';
import Projects from './components/projects';
import Skills from './components/skills';
import Divider from './components/divider';
import { discord } from './clientData/contact.json';

export default function Home() {
  const copyUsername = () => {
    navigator.clipboard.writeText(discord);
    alert('Copied username: ' + discord);
  };

  return (
    <div className="bg-slate-900 text-white w-full overflow-hidden">
      <Head>
        <title>0xEli • dev/degen 🤝</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-cyan-500 h-2"></div>
      <div className="mx-auto max-w-xl px-10">
        <Intro />
        <Web3 copyUsername={copyUsername} />
        <Divider />
        <Projects copyUsername={copyUsername} />
        <Divider />
        <Skills />
        <Divider />
      </div>
      <div className="bg-violet-600 h-2"></div>
    </div>
  );
}
