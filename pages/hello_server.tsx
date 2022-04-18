import type { NextPage, GetServerSideProps } from 'next'
import { setCookie } from 'nookies'

type Props = {
  now: string
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const now = new Date().toISOString()
  setCookie(ctx, 'fromClient', 'value', {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  })
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
