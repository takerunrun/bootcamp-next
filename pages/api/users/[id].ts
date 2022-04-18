// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import nookies from 'nookies'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    nookies.get({ req })
    const cookies = nookies.get({ req });
    console.log(cookies)
  res.status(200).json({ name: 'John Doe' })
}
