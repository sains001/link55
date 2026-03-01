export default async function handler(req, res) {
  try {
    return res.status(200).json({
      status: "API aktif",
      waktu: new Date().toISOString()
    });
  } catch (err) {
    return res.status(500).json({ error: "Error server" });
  }
}
