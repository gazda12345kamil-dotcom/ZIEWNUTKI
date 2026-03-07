
export async function getLatestVideos() {
    const channelId = "UCkR8IKcghGGP3_UfmXctbrQ";
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;

    try {
        // Fetch XML with modern headers to prevent blocking, disable Next.js cache aggressively
        const res = await fetch(rssUrl, {
            next: { revalidate: 60 },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            }
        });

        if (!res.ok) throw new Error("Failed to fetch YouTube XML page");
        const xmlData = await res.text();

        const entries = xmlData.match(/<entry>[\s\S]*?<\/entry>/g) || [];
        const videos = [];

        for (const entry of entries) {
            const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
            const titleMatch = entry.match(/<title>(.*?)<\/title>/);

            if (idMatch && titleMatch) {
                const videoId = idMatch[1];
                const title = titleMatch[1];

                // Zapobiegamy filmom "Shorts" opierając się na słowach kluczowych w RSS
                const isShortsBasedOnKeywords = /shorts?/i.test(entry);

                if (!isShortsBasedOnKeywords) {
                    videos.push({
                        id: videoId,
                        title: title,
                        url: `https://www.youtube.com/embed/${videoId}`
                    });

                    if (videos.length === 3) break;
                }
            }
        }

        // Fallback when something is totally wrong with RSS parsing
        if (videos.length === 0) {
            return [
                { id: "1", title: "Cicha Noc - Kołysanka", url: "https://www.youtube.com/embed/lu-y4Mq0FFC_L5Wz" },
            ];
        }

        return videos;
    } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
        return [];
    }
}
