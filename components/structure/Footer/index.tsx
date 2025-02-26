import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="h-20 w-full mt-2 px-4 content-center">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          Made with
          <Image
            src="./heart.svg"
            alt="Heart Logo"
            className="mx-2"
            width={20}
            height={20}
          />
          by
          <Link
            href="https://www.linkedin.com/in/monishkadam/"
            target="_blank"
            className="ml-2 text-lg font-extrabold tracking-wide"
          >
            Monish
          </Link>
        </div>
        <div className="flex flex-row items-center text-sm text-slate-400">
          Copyright © 2025
        </div>
      </div>
    </footer>
  )
}
