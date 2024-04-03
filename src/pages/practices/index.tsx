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
    title: 'Team',
    description: 'Hr Charming Headhunt',
  }
  return {
    props: { seoData },
  }
}) satisfies GetServerSideProps<{
  seoData: ISeoProps
}>

const ViewTeam = dynamic(() => import('@/views/Team'), {
  suspense: true,
  ssr: false,
})

const Team: NextPageWithLayout<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  return (
    <Suspense fallback="...">
      <NextSeo title={props.seoData.title} description={props.seoData.description} />
      <ViewTeam />
    </Suspense>
  )
}

Team.getLayout = (page) => {
  return <LayoutMain>{page}</LayoutMain>
}

export default Team
