const readline = require("readline");
const axios = require("axios");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function latihancHAT() {
  rl.question("Kamu: ", async (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("You");
      rl.close();
      return;
    }

    try {
      const response = await axios.post("https://api.siputzx.my.id/api/ai/deepseek-llm-67b-chat", {
        content: input,
      });

      if (response.data.status) {
        console.log("Bot:", response.data.data);
      } else {
        console.log("Bot (error):", response.data.error || "Gagal mendapatkan respon.");
      }
    } catch (err) {
      console.log("Error:", err.message);
    }

    latihancHAT();
  });
}

latihancHAT();
