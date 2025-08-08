import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <Link href={"/"}>Home</Link>
        <br />
        <Link href={"/article"}>Articles</Link>
        <br />
        <Link href={"/user-panel"}>user panel</Link>
        <br />
        <Link href={"/user-panel/orders"}>my orders</Link>
        <br />
        <Link href={"/admin/123/projects"}>my projects</Link>
        <br />
        <Link href={"/admin/123/me"}>my account</Link>
        <br />
        <Link
          href={{
            pathname: "/admin/[admin_id]/notfication",
            query: {
              admin_id: "23",
            },
          }}
        >
          my messages
        </Link>
        <br />
      </div>
      <main style={{ padding: "20px" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
