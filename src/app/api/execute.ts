import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { language, code } = req.body;

    if (code.includes("error")) {
      return res.status(400).json({ status: "error", error: "SyntaxError: Unexpected token" });
    }

    return res.status(200).json({
      status: "success",
      output: `Executed ${language} code:\n${code}`,
    });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
