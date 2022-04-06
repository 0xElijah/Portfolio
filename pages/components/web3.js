import { contact } from '../clientData/contact.json';

export default function Web3(props) {
  return (
    <div>
      <div className="font-bold pb-5">Gm</div>
      <div className="pb-2">
        Eli here 🤓 A fullstack web2 (learning web3) dev and Solana NFT degen
        currently looking to contribute my skills
      </div>
      <div>
        <div
          key={0}
          className="cursor-pointer font-bold inline text-cyan-500 pr-3"
          onClick={() => props.copyUsername()}
        >
          Discord
        </div>
        {contact.map(({ id, platform, url }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold inline text-cyan-500 pr-3"
          >
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
}
