export default async function handler(req, res) {
  try {

    const AUTH = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIxNzM3MjUyMzk3IiwibmJmIjoiMTczNzI1MjM5NyIsImV4cCI6IjE3MzcyNTQxOTciLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIxLzE5LzIwMjUgOTozNjozNyBBTSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFjY2Vzc19Ub2tlbiIsIlVzZXJJZCI6IjQ0MTgwNCIsIlVzZXJOYW1lIjoiNjI4NTc5NjI5NzE4OSIsIlVzZXJQaG90byI6Imh0dHBzOi8vYXBpLmxpZ2h0c3BhY2VjZG4uY29tL2ltZy9hdmF0YXIuY2ZhOGRkOWQuc3ZnIiwiTmlja05hbWUiOiJSYWNrbmFyb2NLIiwiQW1vdW50IjoiMTM3LjAwIiwiSW50ZWdyYWwiOiIwIiwiTG9naW5NYXJrIjoiSDUiLCJMb2dpblRpbWUiOiIxLzE5LzIwMjUgOTowNjozNyBBTSIsIkxvZ2luSVBBZGRyZXNzIjoiMTE0LjEwLjEzNC4xODIiLCJEYk51bWJlciI6IjAiLCJJc3ZhbGlkYXRvciI6IjAiLCJLZXlDb2RlIjoiNTgwIiwiVG9rZW5UeXBlIjoiQWNjZXNzX1Rva2VuIiwiUGhvbmVUeXBlIjoiMSIsIlVzZXJUeXBlIjoiMCIsIlVzZXJOYW1lMiI6IiIsImlzcyI6Imp3dElzc3VlciIsImF1ZCI6ImxvdHRlcnlUaWNrZXQifQ.gSi3-FxVwLXKTA1drTBTrA6HqiASn6eBkmsWMyW2HP0";

    // ======================
    // 1️⃣ GET PERIODE
    // ======================
    const issueResp = await fetch(
      "https://newapi.55lottertttapi.com/api/webapi/GetGameIssue",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": AUTH
        },
        body: JSON.stringify({
          typeId: 30,
          language: 0,
          random: "166b81d9568e4123a83a2c7fdb80b7d9",
          signature: "5DB43C344C7381B72B5262FFB3572444",
          timestamp: Math.floor(Date.now() / 1000)
        })
      }
    );

    const issueJson = await issueResp.json();
    const periode =
      issueJson?.data?.issueNumber?.toString().slice(-5) || null;

    // ======================
    // 2️⃣ GET HASIL TERAKHIR
    // ======================
    const resultResp = await fetch(
      "https://newapi.55lottertttapi.com/api/webapi/GetNoaverageEmerdList",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": AUTH
        },
        body: JSON.stringify({
          pageSize: 10,
          pageNo: 1,
          typeId: 30,
          language: 0,
          random: "b631eb26bac6403e99093913e5bb48c5",
          signature: "A6203E85132E5FE26B5F43DDF1ECDD07",
          timestamp: Math.floor(Date.now() / 1000)
        })
      }
    );

    const resultJson = await resultResp.json();
    const list = resultJson?.data?.list || [];

    let hasil = null;

    if (list.length > 0) {
      const num = list[0].number;
      hasil = parseInt(num.split(",").pop());
    }

    // ======================
    // RETURN JSON
    // ======================
    res.status(200).json({
      periode,
      hasil
    });

  } catch (err) {
    res.status(500).json({
      error: "Gagal ambil data",
      detail: err.message
    });
  }
}
