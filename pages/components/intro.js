import Image from 'next/image';

export default function Intro() {
  return (
    <div className="flex items-center py-16">
      <a
        href="https://twitter.com/0xElijah"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-5"
      >
        <Image
          src="https://pbs.twimg.com/media/FPl5xjOVgAALYA6?format=jpg"
          alt="elijahdr.eth"
          className="rounded-2xl"
          height={100}
          width={100}
        />
      </a>
      <div className="font-bold">0xEli • dev/degen 🤝</div>
    </div>
  );
}
