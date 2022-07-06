import React, { useEffect, useState } from "react";
import { getSession, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

type AuthenticationProps = {
  Component: React.ComponentType;
};

function Authentication({ Component }: AuthenticationProps) {

  const { data: session, status } = useSession(); // get session gets only data of a user and use a await and async function
  
  if (status == "loading") {
    return <h2>Loading...</h2>;
  }

  if (!session) {
    return <button onClick={() => signIn()}>Login Here</button>;
  }

  return (
    <>
      <Navbar session={session} status={status} />
      <Component />
    </>
  );
}

export default Authentication;
