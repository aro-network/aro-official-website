// test.js
const speedTest = require("speedtest-net");

(async () => {
  try {
    const result = await speedTest({ acceptLicense: true, acceptGdpr: true });

    console.log("Ping (ms):", result.ping.latency);
    console.log(
      "Download (Mbps):",
      (result.download.bandwidth / 125000).toFixed(2)
    );
    console.log(
      "Upload   (Mbps):",
      (result.upload.bandwidth / 125000).toFixed(2)
    );
    console.log("Server:", result.server.name, "-", result.server.location);
  } catch (err) {
    console.error("测速失败:", err);
  }
})();
