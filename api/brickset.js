export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  const { method, params } = req.body;
  const API_KEY = "3-vC1o-H7i6-uYtZK";

  const body = new URLSearchParams({
    apiKey: API_KEY,
    userHash: "",
    params: JSON.stringify(params),
  });

  const r = await fetch(`https://brickset.com/api/v3.asmx/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });

  const data = await r.json();
  res.status(200).json(data);
}
