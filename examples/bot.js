"use strict"
import mineflayer from 'mineflayer';
import mineflayerChatgpt from 'mineflayer-chatgpt';
import { sleep } from 'openai/core';

let hasSpawned = false;

console.log('Initialising example bot...');
const bot = mineflayer.createBot({
  host: process.env.HOST,
  port: 25565,
  username: 'someplayer'
});
bot.on('kicked', console.log);
bot.on('error', console.error);

console.log('Loading Mineflayer ChatGPT plugin...')
bot.loadPlugin(mineflayerChatgpt.chatgpt);

console.log('Spawning example bot...');
bot.once('spawn', () => {
  bot.chatgpt.setConfig('sk-someinexistingapikey');
  bot.chatgpt.sendMessage('otherplayer', 'Hello');
  console.log('Example bot has been spawned');
  // hasSpawned = true;
});

// while (!hasSpawned) {
//   console.log('Waiting for example bot to spawn...');
//   sleep(1000);
// }

