import {createClient} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
    projectId: "hdysmu07",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-02-27",
    // token: "your-token",
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: string) => builder.image(source);
