import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'

type Data = {
  title: string
}
type Props = {
  now: string
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
  return {  props: { now } }
}


const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <p>{props.now}</p>
    </div>
  )
}

export default Page
