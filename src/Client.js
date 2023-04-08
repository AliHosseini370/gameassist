import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'nm3ule42',
  dataset: 'production',
  apiVersion: '2022-09-05',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN
})