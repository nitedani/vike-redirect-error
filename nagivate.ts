import { redirect as navigateServer } from "vike/abort";
import { navigate as navigateClient } from "vike/client/router";

export const navigate = (
  url: `/${string}` | `https://${string}` | `http://${string}`
) => {
  if (import.meta.env.SSR) {
    throw navigateServer(url);
  } else {
    navigateClient(url);
    return null;
  }
};
