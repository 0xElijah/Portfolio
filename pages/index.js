import Image from 'next/image';
import { IconContext } from 'react-icons';
import { FaTwitter, FaDiscord, FaArrowRight } from 'react-icons/fa';

const TWITTER = 'twitter.com/0xElijah';
const DISCORD = '0xElijah#6969';

const ProfileImg = () => {
  return (
    <Image
      src="https://pbs.twimg.com/profile_images/1480794106431356929/OiamP6mr_400x400.jpg"
      alt="Profile Image"
      height={300}
      width={300}
      quality={100}
      className="rounded-2xl"
    />
  );
};

const HeaderImg = () => {
  return (
    <Image src="/HeaderImg.png" alt="Header Image" height={1000} width={3000} />
  );
};

const copyUsername = () => {
  navigator.clipboard.writeText(DISCORD);
  alert('Copied username: ' + DISCORD);
};

export default function Home() {
  return (
    <div className="bg-sand pb-20">
      <HeaderImg />

      {/* Me */}
      <div className="max-w-screen-md mx-auto px-10 sm:px-5 mt-[-40px] sm:mt-[-100px]">
        <div className="flex justify-between items-end pt-7 pb-10">
          <ProfileImg />
          <div className="pl-7 sm:pb-3 sm:mb-10 z-50">
            <h1 className="text-3xl sm:text-5xl font-bold pb-1 sm:pb-3">
              0xElijah
            </h1>
            <p className="text-md">
              Solana Degen | Dev that will do something 🤝
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="pb-20">
          <div className="flex flex-col items-center justify-around sm:p-5 sm:flex-row">
            <a
              href={`https://` + TWITTER}
              target="_blank"
              rel="noreferrer"
              className="flex font-bold m-2"
            >
              <IconContext.Provider
                value={{ className: 'mr-3', color: '0C72B7', size: 25 }}
              >
                <FaTwitter /> {TWITTER}
              </IconContext.Provider>
            </a>
            <div
              onClick={() => copyUsername()}
              className="flex font-bold cursor-pointer m-2"
            >
              <IconContext.Provider
                value={{ className: 'mr-3', color: '5865F2', size: 25 }}
              >
                <FaDiscord />
              </IconContext.Provider>
              {DISCORD}
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="pb-20">
          <div>
            <h3 className="font-bold sm:text-lg">NFT Viewer</h3>
            <p>Simple gallery of NFTs in a given Solana wallet</p>
          </div>
        </div>

        {/* NFTs */}
        <div className="pb-10"></div>
      </div>
    </div>
  );
}
