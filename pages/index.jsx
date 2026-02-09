import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* {data?.map((item) => {
        return <Link href={"products/" + item.id || ""}>go to{item.id}</Link>;
      })} */}
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
