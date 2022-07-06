import React from 'react'

function index() {
  return (
    <div>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</div>
  )
}

export default index

export const getServerSideProps = () => {
  const user = process.env.DB_USER;
  const passsword = process.env.DB_PASSWORD;
  console.log(user, passsword);
  return {
    props: {
      key: "value"
    }
  }
}