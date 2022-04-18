import type { NextPage, GetServerSideProps } from 'next'

type Data = {
  title: string
}
type Props = {
  now: string
  data: Data
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data: Data = await fetch("https://hacker-news.firebaseio.com/v0/item/31000386.json")
    .then((res) => res.json())
  const now = new Date().toISOString()
  return {  props: { now, data } }
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
