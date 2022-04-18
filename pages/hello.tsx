import type { NextPage, GetStaticProps } from 'next'

type Data = {
  title: string
}
type Props = {
  now: string
  data: Data
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data: Data = await fetch("https://hacker-news.firebaseio.com/v0/item/31000386.json")
    .then((res) => res.json())
  const now = new Date().toISOString()
  return {  props: { now, data }, revalidate: 10 }
}


const Page: NextPage<Props> = (props) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <p>{props.now}</p>
    </div>
  )
}

export default Page
