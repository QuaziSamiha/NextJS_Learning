import Image from "next/image";

// root page
// http://localhost:3000/
export default function Home() {
  //  all component by default server component
  console.log('hi samiha')
  return (
    <>
      <main className="m-12">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <main>
          <h1>hello world</h1>
        </main>
      </main>
    </>
  );
}
