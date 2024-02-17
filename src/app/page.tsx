import Image from "next/image";
import pic from '../../public/cat.webp'
import Link from 'next/link';


export default function Home() {
const linkHoverClasses:string = 'hover:-translate-x-4 hover:-translate-y-3.5 hover:grayscale-0 hover:contrast-100 hover:drop-shadow-xl';

  return (
      <section >
        <article className="w-11/12 lg:w-4/5 m-auto pb-8">
          <h1 className="text-purple-700 text-6xl font-semibold pb-4">The Cat</h1>
          <Link href="/testDir" className={`block w-full xl:w-max duration-1000 transition-all lg:contrast-50 lg:grayscale ${linkHoverClasses}`}>
            <Image src={pic} alt="The Cat" sizes="100vw" className="w-full xl:max-w-screen-md" />
          </Link>   
        </article>
      </section>
  );
}
