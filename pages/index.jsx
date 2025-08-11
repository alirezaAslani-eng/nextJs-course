import Link from "next/link";

export default function Home({ data }) {
  return (
    <>
      {data?.map((item) => {
      return  <Link href={"products/"+item.id || ""}>go to{item.id}</Link>;
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { data: data } };
}
