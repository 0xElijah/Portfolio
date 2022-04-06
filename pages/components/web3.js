import { contact, discord } from '../clientData/contact.json';

export default function Web3() {
  const copyUsername = () => {
    navigator.clipboard.writeText(discord);
    alert('Copied username: ' + discord);
  };

  return (
    <div>
      <div className="font-bold pb-5">Gm</div>
      {/* <hr className="pb-5 w-9" /> */}
      <div className="pb-2">
        Eli here, a web2 dev (but web3 degen) currently learning and looking to
        extend my skills into web3.
      </div>
      <div>
        <div
          key={0}
          className="cursor-pointer font-bold inline text-cyan-500 pr-3"
          onClick={() => copyUsername()}
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
