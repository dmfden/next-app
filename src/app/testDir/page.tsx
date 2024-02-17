import Link from 'next/link';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Test Dir title",
  description: "Test Dir Description",
};

export default function TestDir() {
  return (
    <div className='md:container md:mx-auto'>
      <h4 className='pb-2'>/TEST DIR</h4>
      <Link href='/' className='text-pink-600 font-medium text-3xl'>HOME</Link>
      </div>
  );
}
