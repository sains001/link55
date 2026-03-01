export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        status: "Worker aktif",
        waktu: new Date().toISOString()
      }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
  }
};