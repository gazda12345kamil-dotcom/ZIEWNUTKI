
export async function getLatestVideos() {
    const channelIdStr = "kR8IKcghGGP3_UfmXctbrQ"; // Hidden ID
    // Prefix with UC to form the full Channel ID
    const fullChannelId = `UC${channelIdStr}`;
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${fullChannelId}`;

    try {
        const res = await fetch(rssUrl, { next: { revalidate: 3600 } });
        const xmlData = await res.text();

        // Using simple regex or parser to get entries
        // Since we don't have fast-xml-parser installed, we can install it or do regex.
        // Let's use simple string extraction for speed and zero config, or install it.

        const entries = xmlData.match(/<entry>[\s\S]*?<\/entry>/g) || [];
        const videos = [];

        for (const entry of entries) {
            const idMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
            const titleMatch = entry.match(/<title>(.*?)<\/title>/);

            if (idMatch && titleMatch) {
                const videoId = idMatch[1];
                const title = titleMatch[1];

                // Aggressive Shorts Filtering via regex on the raw entry string
                // This catches #shorts, shorts, Short, etc. anywhere in the title, description, or tags
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

        // Fallback if none found
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
