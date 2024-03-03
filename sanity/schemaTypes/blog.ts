export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name:'titleImage',
            type: 'image',
            title: 'Title Image'

        },
        {
            name: 'smalllDescription',
            type: 'text',
            title: 'Small Description'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        },
        // {
        //     name: 'author',
        //     type: 'reference',
        //     title: 'Author',
        //     to: {type: 'author'}
        // },
        // {
        //     name: 'mainImage',
        //     type: 'image',
        //     title: 'Main image'
        // },
        // {
        //     name: 'publishedAt',
        //     type: 'datetime',
        //     title: 'Published at'
        // },
        // {
        //     name: 'body',
        //     type: 'blockContent',
        //     title: 'Body'
        // }
    ],
}