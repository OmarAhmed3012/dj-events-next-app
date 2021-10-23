import Layout from "@/components/layout";
import Eventitem from "@/components/EventItem";
import { API_URL } from "./../../../config/index";

export default function EventsHome({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No Events</h3>}

      {events.map((evt) => (
        <Eventitem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
