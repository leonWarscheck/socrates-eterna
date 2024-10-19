import { createCookieSessionStorage, json } from "@remix-run/node";
import { semanticSearch } from "./semantic-search-logic";


export const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      secrets: ["r33m11xr0ck55"],
      sameSite: "lax",
    },
  });
  
  export async function getPotentialResults(request) {
    const url = new URL(request.url);
    const query = url.searchParams.get("search") || "";
    console.log("-----query/tools/potential", !!query);
  
    const results = query ? await semanticSearch(query) : undefined;
    console.log("results/potential:", !!results);
  
    return results;
  }

 export async function getPotentialDateResults(request){
    const url = new URL(request.url);

    const dateType = url.searchParams.get('dateType') || "";
    const month = url.searchParams.get("month") || "";
    const day = url.searchParams.get("day") || "";
    const query = dateType === "month"? month : dateType === "day"? day :"";

    console.log("query/date:", !!query);
    console.log("dateType:", !!dateType)

    const results = query ? await dateSearch(query) : null;

    console.log("results/date:", !!results)

    return results;
}

  
  export async function getLatestAndSavedResults(request, potentialResults) {
    const session = await getSession(request.headers.get("Cookie"));
    
    const savedResults = session.get("savedResults");
    console.log("savedResults/getLatestAndSaved:", !!savedResults);
  
    const latestResults = potentialResults ?? savedResults;
  
    if (potentialResults) {
      session.set("savedResults", latestResults);
    }
  
    return { latestResults, session };
  }