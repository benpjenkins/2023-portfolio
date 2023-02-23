import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

/**
 * This api route can dynamically generate a robots.txt file.  It is configured to do so
 * in the rewrites function of the next config
 *
 * For my purposes this will probably respond with a static string but it is fun having
 * the option to dynamically generate it on the fly if needed.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.send(`
    User-agent: * 
    Allow: /
    `);
}
