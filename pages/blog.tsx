import { getSession } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils"

import React from 'react'

interface SessionInterface{
  expires?: string,
  user: {
    email?: string
    image?: string 
    name?: string 
  }
}

type BlogProps = {
  data: string,
  session: SessionInterface
}

function Blog({data, session}: BlogProps) {
  return (
    <h1>{data} {session?.user?.name} </h1>
  )
}

export default Blog

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  console.log(session, context);

  if(!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=http://localhost:3000/blog',
        permanent: false
      }
    }
  }
  
  return {
    props: {
      session,
      data: session ? 'List Of 100 Personalized blogs' : 'List of free blogs'
    }
  }
}