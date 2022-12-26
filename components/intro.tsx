import Link from "next/link";

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href="/">arafat.iq</Link>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <Link href="/posts/about" className="hover:underline mr-5">
          about{" "}
        </Link>
        <Link href="/store" className="hover:underline mr-5">
          store{" "}
        </Link>
        <Link href="/contact" className="hover:underline mr-5">
          contact{" "}
        </Link>
      </h4>
    </section>
  );
};

export default Intro;
