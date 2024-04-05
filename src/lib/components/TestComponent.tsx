'use client';

import { useEffect, useState } from "react";
import { getApplicationDetail } from "../get-methods";

export function TestComponent({ }: any) {
  const [applicantDetails, setapplicantDetails] = useState();
  useEffect(() => {
    getApplicationDetail().then(setapplicantDetails);
  }, [])

  return <div className="max-w-screen-md mx-auto">
    <pre>{JSON.stringify(applicantDetails, null, 2)}</pre>
  </div>

}