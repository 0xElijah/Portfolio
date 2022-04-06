import Image from 'next/image';
import { contact } from '../clientData/contact.json';

export default function Intro() {
  return (
    <div className="flex items-center py-16">
      <a
        href="https://twitter.com/0xElijah"
        target="_blank"
        rel="noopener noreferrer"
        className="pr-5"
      >
        <Image
          src="https://pbs.twimg.com/media/FPl5xjOVgAALYA6?format=jpg"
          alt="elijahdr.eth"
          className="rounded-full"
          height={100}
          width={100}
        />
      </a>
      <div className="font-bold">0xEli / elijahdr.sol</div>
    </div>
  );
}
