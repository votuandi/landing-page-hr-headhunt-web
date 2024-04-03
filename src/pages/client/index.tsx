import { Suspense, startTransition } from 'react'
import dynamic from 'next/dynamic'
import { NextSeo } from 'next-seo'
import LayoutMain from '@/layouts/Main'

import type { NextPageWithLayout } from '@/pages/_app'
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type ISeoProps = {
  title: string
  description: string
}

export const getServerSideProps = (async ({ locale }) => {
  let seoData: ISeoProps = {
    title: 'Client',
    description: 'Hr Charming Headhunt',
  }
  return {
    props: { seoData },
  }
}) satisfies GetServerSideProps<{
  seoData: ISeoProps
}>

const ViewClient = dynamic(() => import('@/views/Client'), {
  suspense: true,
  ssr: false,
})

const Client: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  return (
    <Suspense fallback="...">
      <NextSeo title={props.seoData.title} description={props.seoData.description} />
      <ViewClient />
    </Suspense>
  )
}

Client.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>
}

export default Client
