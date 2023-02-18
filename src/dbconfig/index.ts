export const DATASET = "production";
export const PROJECT_ID = "tyvw4fcl";
export const PROJECT_URL = (query: string) => `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${encodeURIComponent(query)}`;
