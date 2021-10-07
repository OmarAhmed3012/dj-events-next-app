import Layout from "@/components/layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout title="About DJ Events">
      <h1>About</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
}
