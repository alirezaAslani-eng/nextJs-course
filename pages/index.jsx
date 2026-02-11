import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta
          name="describtion"
          content="This is a meta tag to describe this page"
        />
      </Head>
      {/* // * Override Previous Head */}
      <Head>
        <meta name="describtion" content="Override previous describtion" />
      </Head>
      <div
        style={{
          aspectRatio: "9/16",
          width: "100%",
          height: "500px",
          position: "relative",
        }}
      >
        <Image
          // width={500}
          // height={500}
          objectFit="cover"
          priority
          fill
          src={"/images.jpeg"}
          alt="fake picture"
          sizes="100vw"
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();
  // return { props: { data: data } };
  return { props: {} };
}
