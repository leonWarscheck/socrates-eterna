import { createCookieSessionStorage } from "@remix-run/node";
import { semanticSearch } from "./semantic-search-logic";

export async function getPotentialResults(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("search") || "";
    console.log(`query: ${query ? query : "no query"}`);

    const results = query ? await semanticSearch(query) : [];
    console.log("results:", results)

    return results
}

 export const { getSession, commitSession } = createCookieSessionStorage({
         cookie: {
      name: "__session",
      secrets: ["r33m11xr0ck55"],
      sameSite: "lax",
    },
});

export async function getLatestAndSavedResults(potentialResults) {
    

    const session = await getSession()

    const savedResults = await session.get("savedResults")
    const latestResults = potentialResults ?? savedResults

    async function saveLatestResults(latestResults) {
        session.set("savedResults", latestResults)
        
        // await commitSession(session)

    }
    await saveLatestResults(latestResults);

    return latestResults

}