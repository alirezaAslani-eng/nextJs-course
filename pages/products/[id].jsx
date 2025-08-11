import { useRouter } from "next/router";
import React from "react";

function Products({ data }) {
  const { query } = useRouter();
  console.log(data);

  return <div>Hello {data.title}</div>;
}

export default Products;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((item) => {
    return { params: { id: String(item.id) } };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const productID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productID}`
  );
  const data = await res.json();

  return { props: { data: data } };
}
