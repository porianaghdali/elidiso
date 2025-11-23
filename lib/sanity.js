
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'pajku7cj',
  dataset: 'production',
  apiVersion: '2025-11-23',
  useCdn: false,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
