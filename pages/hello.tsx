import type { NextPage, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = () => {
  return {  props: {} }
}


const Home: NextPage = () => {
  return (
    <div>Hello</div>
  )
}

export default Home
