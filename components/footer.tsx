import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center">
          <ul className="flex flex-wrap items-center mb-6 text-sm text-black-500 sm:mb-0 dark:text-black-400">
            <li>
              <a href="/posts/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/blog" className="mr-4 hover:underline md:mr-6">
                Blog
              </a>
            </li>
            <li>
              <a href="/store" className="mr-4 hover:underline md:mr-6 ">
                Store
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>

          <hr className="my-6 border-black-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://arafatiqbal.com/" className="hover:underline">
              Arafat Iqbal
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
