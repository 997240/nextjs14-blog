import React from 'react';
import styles from './page.module.css';
import {sanityClient, urlFor} from "@/app/lib/sanity";
import {blogPost} from "@/app/lib/interface";
import Image from "next/image";
import {PortableText} from "@portabletext/react";

type Props = {
    params: {
        slug: string;
    };
};

async function getData(slug: string) {
    const query =
        `*[_type=="blog"&&slug.current=="${slug}"]{
  "currentSlug":slug.current,
    title,
    content,
    titleImage
}[0]
`;
    const data = await sanityClient.fetch(query);
    return data;

}

// 定义你的 React 组件
async function BlogArticle({params}: Props) {
    const data: blogPost = await getData(params.slug);
    console.log('data', data);

    return (
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">Jan Marshai - Blog</span>
                <span
                    className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight ">{data.title}</span>
            </h1>
            {/*<h1 className={styles.title}>{data.title}</h1>*/}
            {/*<Image*/}
            <Image
                width={800}
                height={400}
                src={urlFor(data.titleImage).url()}
                alt={data.title}
                priority
                className="rounded-3xl mt-8 border-2"/>
            <div className="mt-16 prose prose-blue
             prose-lg dark:prose-invert
             prose-li:marker:text-primary prose-a:text-primary">
                <PortableText value={data.content}/>
            </div>
            {/*<div className={styles.content} dangerouslySetInnerHTML={{__html: data.content}}/>*/}


        </div>
    );
}

// 使用新的文件式路由导出方式
export default BlogArticle;

