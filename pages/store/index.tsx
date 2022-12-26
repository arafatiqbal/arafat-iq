import Container from "../../components/container";
import MoreStories from "../../components/more-stories";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import Intro from "../../components/intro";
import Store from "../../components/store";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const storePosts = allPosts.filter((post) => {
    if (post.slug.includes("gumroad")) return post;
  });
  return (
    <>
      <Layout>
        <Head>
          <title>portfolio - arafat.iq</title>
        </Head>
        <Container>
          <Intro />
          {<Store posts={storePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
