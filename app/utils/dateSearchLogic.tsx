import comicData from "../data/comicData.json";

export async function dateSearch(dateQuery, limit = 3) {
    const targetDate = new Date(dateQuery).getTime();
    const closestToDateComics = [...comicData]
        .sort((a, b) => {
            const aDifference = Math.abs(new Date(a.metadata.published).getTime() - targetDate);
            const bDifference = Math.abs(new Date(b.metadata.published).getTime() - targetDate);
            return aDifference - bDifference;
        })
        .slice(0, limit);

    const cleanResults = closestToDateComics.map((comic) => ({
        id: comic.id,
        metadata: {
            filename: comic.metadata.filename,
            published: comic.metadata.published,
            title: comic.metadata.title,
        },
    }));

    return cleanResults;
}
