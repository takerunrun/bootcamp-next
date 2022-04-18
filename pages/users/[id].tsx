import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

type Data = {
  title: string
}
type Props = {
  now: string
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths:
      [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }
      ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const now = new Date().toISOString()
  if (!ctx.params || typeof ctx.params.id != 'string') {
    throw new Error('Invalid params')
  }
  const id = ctx.params?.id
  return {  props: { now, id }, revalidate: 1 }
}


const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <p>{props.now}</p>
    </div>
  )
}

export default Page
