"use client";

import Error from "next/error";
// import * as Sentry from "@sentry/nextjs"; // Comment out this line
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Sentry.captureException(error); // Comment out this line
  }, [error]);

  return (
    <html>
      <body>
        <Error />
      </body>
    </html>
  );
}
