export default function Home({ data }) {
  return (
    <>
      {data?.map((item) => {
      return  <div>item</div>;
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { data: data } };
}
