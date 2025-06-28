pkg update -y && pkg upgrade -y
pkg install nodejs git -y
git clone https://github.com/Dann7i/deepseek-ai-for-termux.git
cd deepseek-ai-for-termux
npm install
node index.js
