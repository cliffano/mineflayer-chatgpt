#!/usr/bin/env bash
set -o nounset
set -o errexit

echo "Install dependencies of example bot"
npm link

cd ../
echo "Install dependencies of Mineflayer ChatGPT"
npm install

echo "Link Mineflayer ChatGPT"
npm link mineflayer-chatgpt
