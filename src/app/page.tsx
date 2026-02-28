import ClientHomePage from "./ClientHomePage";
import { getLatestVideos } from "../lib/youtube";

// Revalidate every 60 seconds (1 minute) for much faster video updates
export const revalidate = 60;

export default async function Home() {
  const videos = await getLatestVideos();
  return <ClientHomePage videos={videos} />;
}
