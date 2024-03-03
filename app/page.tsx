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


            <Card className="max-w-md mx-auto  rounded-lg overflow-hidden shadow-lg">

                <img className="w-full" src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png"
                     alt="Image description"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Card Title12</div>
                    <p className=" font-light text-base ">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Here is some example text that might go into a card's description or body. It might include
                        details about the content of the card, or provide a brief overview of the subject matter. This
                        text is designed to overflow so we can see the effect of the line-clamp utility.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2 flex flex-wrap">
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag1</span>
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag2</span>
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag3</span>
                    <span
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tag4</span>
                </div>

            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
                {
                    data.map((item: any, index: number) => {
                        return (
                            <Card key={index}>

                                <div className="w-[300px] h-[300px] overflow-hidden">
                                    <Image
                                        alt={item.title}
                                        src={urlFor(item.titleImage).url()}
                                        width={300}
                                        height={300}
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