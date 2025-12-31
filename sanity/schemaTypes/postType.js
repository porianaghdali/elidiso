import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
  name: 'body',
  type: 'array',
  title: 'Body',
  of: [
    { type: 'block' },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'align',
          title: 'Alignment',
          type: 'string',
          options: {
            list: [
              { title: 'Center', value: 'center' },
              { title: 'Right', value: 'right' },
              { title: 'Left', value: 'left' },
            ],
            layout: 'radio',
          },
          initialValue: 'center',
        },
        {
          name: 'fullWidth',
          type: 'boolean',
          title: 'Full width?',
          initialValue: false,
        },
        {
          name: 'maxWidth',
          type: 'number',
          title: 'Max width (px)',
          description: 'مثلاً 400 یا 600',
        },
      ],
    },
  ],
}

),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
