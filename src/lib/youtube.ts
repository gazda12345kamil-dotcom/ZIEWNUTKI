
export async function getLatestVideos() {
    const channelUrl = "https://www.youtube.com/@Ziewnutki/videos";

    try {
        // Fetch HTML with modern headers to prevent blocking
        const res = await fetch(channelUrl, {
            next: { revalidate: 3600 },
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept-Language': 'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
            }
        });

        if (!res.ok) throw new Error("Failed to fetch YouTube page");
        const htmlData = await res.text();

        // 1. Extract raw json data block mapping from youtube page structure
        // Looking for ytInitialData which holds all the initial UI load info
        const dataMatch = htmlData.match(/var ytInitialData = (\{[\s\S]*?\});<\/script>/);
        const videos = [];

        if (dataMatch && dataMatch[1]) {
            try {
                const data = JSON.parse(dataMatch[1]);

                // Deep search helper to find gridVideoRenderer objects
                const extractVideos = (obj: any): any[] => {
                    let results: any[] = [];
                    if (obj == null) return results;
                    if (Array.isArray(obj)) {
                        for (let item of obj) {
                            results = results.concat(extractVideos(item));
                        }
                    } else if (typeof obj === "object") {
                        if (obj.gridVideoRenderer || obj.richItemRenderer?.content?.videoRenderer) {
                            const renderer = obj.gridVideoRenderer || obj.richItemRenderer?.content?.videoRenderer;
                            results.push(renderer);
                        } else {
                            for (let key in obj) {
                                results = results.concat(extractVideos(obj[key]));
                            }
                        }
                    }
                    return results;
                };

                const allVideoNodes = extractVideos(data);

                // Keep track of added IDs to avoid duplicates
                const addedIds = new Set();

                for (const node of allVideoNodes) {
                    if (!node.videoId || !node.title?.runs?.[0]?.text) continue;

                    const videoId = node.videoId;
                    const title = node.title.runs[0].text;

                    // Simple Shorts check based on the thumbnail or time label (usually Shorts don't have standard length text but just "Short" badges)
                    // Or filtering by title as fallback
                    const isShortsBasedOnKeywords = /shorts?/i.test(title);

                    if (!isShortsBasedOnKeywords && !addedIds.has(videoId)) {
                        addedIds.add(videoId);
                        videos.push({
                            id: videoId,
                            title: title,
                            url: `https://www.youtube.com/embed/${videoId}`
                        });

                        if (videos.length === 3) break;
                    }
                }
            } catch (pErr) {
                console.error("Failed parsing YT initial data json", pErr);
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
