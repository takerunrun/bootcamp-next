import type { NextPage, GetServerSideProps } from 'next'

type Props = {
  now: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const now = new Date().toISOString()
  console.log(ctx.req.cookies)
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
