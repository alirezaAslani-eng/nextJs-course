import { useRouter } from "next/router";
import React from "react";

function Products({ data, id }) {
  const { isFallback } = useRouter();
  if (isFallback) {
    return "Loading";
  }
  return <div>Hello {data?.title || ""} with id : {id}</div>;
}

export default Products;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "2" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const productID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productID}`
  );
  if (res.status == 404) {
    return { notFound: true };
  }
  console.log("regenerate page");

  const data = await res.json();
  return {
    props: { data: data, id: crypto.randomUUID() },
    // generated page is fresh for 10 seconds after 10 seconds if user requests to get this page next.js generated agian to make it fresh
    revalidate: 10,
  };
}
