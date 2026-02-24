import ClientHomePage from "./ClientHomePage";
import { getLatestVideos } from "../lib/youtube";

// Revalidate every hour
export const revalidate = 3600;

export default async function Home() {
  const videos = await getLatestVideos();
  return <ClientHomePage videos={videos} />;
}
