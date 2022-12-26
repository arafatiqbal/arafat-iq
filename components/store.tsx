import Link from "next/link";

const Store = () => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
        <Link as={`/blog`} href="/blog" className="hover:underline">
          blog
        </Link>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"></div>
    </section>
  );
};

export default Store;
