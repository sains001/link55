export default async function handler(req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");

  try {

    const issueResp = await fetch("https://newapi.55lottertttapi.com/api/webapi/GetGameIssue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ typeId: 30, language: 0 })
    });

    if (!issueResp.ok) throw new Error("Gagal fetch issue");

    const issueJson = await issueResp.json();

    const fullIssue = issueJson?.data?.issueNumber;
    if (!fullIssue) throw new Error("Data issue kosong");

    const periode = fullIssue.toString().slice(-5);

    const resultResp = await fetch("https://newapi.55lottertttapi.com/api/webapi/GetNoaverageEmerdList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pageSize: 10, pageNo: 1, typeId: 30 })
    });

    if (!resultResp.ok) throw new Error("Gagal fetch result");

    const resultJson = await resultResp.json();

    const list = resultJson?.data?.list;
    if (!list?.length) throw new Error("List kosong");

    const numberString = list[0].number;
    const lastDigit = numberString.split(",").pop();

    return res.status(200).json({
      periode,
      issue: fullIssue,
      hasil: parseInt(lastDigit),
      number: numberString
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
