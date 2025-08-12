import { useRouter } from "next/router";
import React from "react";

function Products({ data }) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return "Loading";
  }
  return <div>Hello {data?.title || ""}</div>;
}

export default Products;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const productID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productID}`
  );
  if (res.status == 404) {
    return { notFound:true};
  }
  const data = await res.json();
  return { props: { data: data } };
}
