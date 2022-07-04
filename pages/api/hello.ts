import  {NextApiRequest, NextApiResponse} from "next/types"

type ResponseData = NextApiResponse & {
    name: string
}
type RequestData = NextApiRequest & {
    number?: number,
    yes?: string
}

export default function handler (req: RequestData , res: NextApiResponse) {
    req.number = 1;
    req.yes = '';

    console.log(Object.keys(req))

    res.status(200).json({
        name: "hotdog",
        age: 300
    })
}