import Image from 'next/image';
import { IconContext } from 'react-icons';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

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
      className="rounded-3xl"
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
    <div className="bg-sand">
      <HeaderImg />
      <div className="max-w-screen-md mx-auto px-5">
        <div className="flex justify-between items-end pt-7 pb-20">
          <ProfileImg />
          <div className="pl-7 pb-3">
            <h1 class="text-5xl font-bold pb-3">0xElijah</h1>
            <p className="text-md">
              Solana Degen | Dev that will do something 🤝
            </p>
          </div>
        </div>

        <div className="pb-20">
          <h2 className="text-2xl font-bold pb-2">Hello World</h2>
          Eli here, a full stack and Rust developer looking to join a team of
          builders in the Solana ecosystem! Hit me up if you are hiring:
          <div className="flex flex-col justify-around p-10 sm:flex-row">
            <a
              href={`https://` + TWITTER}
              target="_blank"
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
      </div>
    </div>
  );
}
