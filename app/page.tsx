import Image from "next/image";
import {sanityClient, urlFor} from "@/app/lib/sanity";
import {simpleBlogCard} from "@/app/lib/interface";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import Link from "next/link";

async function fetchQuery() {
    const query =
        `
*[_type=='blog'] | order(_createdAt desc){
title,
smalllDescription,
'currentSlug':slug.current,
titleImage
}
`;

    return await sanityClient.fetch(query);
}


export default async function Home() {
    const data = await fetchQuery();
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 ">
                {
                    data.map((item: any, index: number) => {
                        return (
                            <Card key={index} className="ml-5  shadow-lg">

                                <div className="w-[300px] h-[200px] overflow-hidden mx-auto">
                                    <Image
                                        alt={item.title}
                                        src={urlFor(item.titleImage).url()}
                                        width={300}
                                        height={200}
                                        className="object-cover object-center"
                                    />
                                </div>
                                <CardContent>
                                    <h3 className="text-lg line-clamp-2 font-bold">{item.title}</h3>
                                    <p className="text-sm line-clamp-3 mt-2 font-medium">
                                        {item.smalllDescription}
                                    </p>
                                    <Button className="mt-4 w-full">
                                        <Link href={`/blog/${item.currentSlug}`}>
                                            Read More
                                        </Link>

                                    </Button>
                                </CardContent>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    );
}
export const revalidate = 60;