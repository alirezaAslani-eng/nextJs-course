import React from "react";

function Products({ products }) {
  return <div>index</div>;
}

export default Products;

const getServerSideProps = async (context) => {
  const { query, req, response } = context;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return { props: { products: data } };
};

export { getServerSideProps };
