import Link from "next/link";

const AboutLayout = ({ children }) => {
  return (
    <>
      <main className="m-6">
        <nav>Mission | Vission</nav>

        <nav className="mt-6 ">
          <ul className="flex justify-evenly">
            <li>
              <Link href={`/about/mission`}>Mission</Link>{" "}
            </li>
            <li>
              <Link href={`/about/vission`}>| Vission</Link>
            </li>
          </ul>
        </nav>
        {children}
      </main>
    </>
  );
};

export default AboutLayout;
