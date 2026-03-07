import ClientHomePage from "./ClientHomePage";
import { getLatestVideos } from "../lib/youtube";

export default async function Home() {
  const videos = await getLatestVideos();
  return <ClientHomePage videos={videos} />;
}
