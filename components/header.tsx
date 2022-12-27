import Link from "next/link";

const Header = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mt-8">
        <Link href="/" className="hover:underline">
          arafat.iq
        </Link>
      </h2>
      <h4 className="md:text-right text-lg">
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

export default Header;
