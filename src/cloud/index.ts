export const getUrl = () => (process.env.LOCAL_STORAGE === "false" && process.env.GCS_URL) || "/media";
