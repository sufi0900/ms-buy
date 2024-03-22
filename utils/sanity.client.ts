import { ClientConfig, createClient } from "next-sanity";

export const clientConfig: ClientConfig = {
  projectId: "8vo9figm",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-23",
};

export const client = createClient(clientConfig);
