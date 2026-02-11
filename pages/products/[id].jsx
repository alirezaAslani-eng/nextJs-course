import Head from "next/head";

function Products({ head: { title } }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  );
}

export default Products;

export async function getServerSideProps(context) {
  const productID = context.params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${productID}`,
  );
  if (res.status == 404) {
    return { notFound: true };
  }

  const data = await res.json();
  return {
    props: {
      head: {
        title: data.title,
      },
    },
  };
}
