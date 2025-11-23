export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },

    // تصویر اصلی مقاله
    { 
      name: 'coverImage', 
      title: 'Cover Image', 
      type: 'image', 
      options: { hotspot: true } // برای crop بهتر
    },

    { name: 'sections', title: 'Sections', type: 'array', of: [{ type: 'block' }, { type: 'image' }] },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ]
}
