import { FaExclamationTriangle } from "react-icons/fa";
import Layout from "@/components/layout";
import Link from "next/link";
import styles from "@/styles/404.module.css";

export default function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          {" "}
          <FaExclamationTriangle /> 404
        </h1>
        <h4>Sorry, Nothing Here</h4>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
