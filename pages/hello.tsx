import type { NextPage, GetStaticProps } from 'next'

type Props = {
  now: string
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const now = new Date().toISOString()
  return {  props: {now: now} }
}


const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      <p>{props.now}</p>
    </div>
  )
}

export default Page
