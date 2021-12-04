import { parseCookies } from "@/helpers/index";
import Layout from "@/components/layout";
import { API_URL } from "@/config/index.js";

export default function DashboardPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Dashboard</h1>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
