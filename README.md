<img align="right" src="https://raw.github.com/cliffano/mineflayer-chatgpt/master/avatar.jpg" alt="Avatar"/>

[![Build Status](https://github.com/cliffano/mineflayer-chatgpt/workflows/CI/badge.svg)](https://github.com/cliffano/mineflayer-chatgpt/actions?query=workflow%3ACI)
[![Security Status](https://snyk.io/test/github/cliffano/mineflayer-chatgpt/badge.svg)](https://snyk.io/test/github/cliffano/mineflayer-chatgpt)
[![Dependencies Status](https://img.shields.io/librariesio/release/npm/mineflayer-chatgpt)](https://libraries.io/github/cliffano/mineflayer-chatgpt)
[![Coverage Status](https://img.shields.io/coveralls/cliffano/mineflayer-chatgpt.svg)](https://coveralls.io/r/cliffano/mineflayer-chatgpt?branch=master)
[![Published Version](https://img.shields.io/npm/v/mineflayer-chatgpt.svg)](http://www.npmjs.com/package/mineflayer-chatgpt)
<br/>

Mineflayer ChatGPT
------------------

Mineflayer ChatGPT is a [Mineflayer](https://github.com/PrismarineJS/mineflayer) plugin for sending messages to OpenAI's [ChatGPT](https://chat.openai.com/).

Installation
------------

    npm install mineflayer-chatgpt

or as a dependency in package.json file:

    "dependencies": {
      "mineflayer-chatgpt": "x.y.z"
    }

Usage
-----

Load the plugin:

    import mineflayerChatgpt from 'mineflayer-chatgpt';

    ...

    bot.loadPlugin(mineflayerChatgpt.chatgpt);

Set the configuration:

    const chatGptApiKey = 'sk-1234567890abcdef';
    bot.chatgpt.setConfig(chatGptApiKey, {
      model: 'gpt-3.5-turbo'
    });

Send a message to ChatGPT:

    bot.chatgpt.sendMessage('player', 'How to craft a diamond sword in Minecraft?');

Colophon
--------

[Developer's Guide](https://cliffano.github.io/developers_guide.html#nodejs)

Build reports:

* [Code complexity report](https://cliffano.github.io/mineflayer-chatgpt/complexity/plato/index.html)
* [Unit tests report](https://cliffano.github.io/mineflayer-chatgpt/test/mocha.txt)
* [Test coverage report](https://cliffano.github.io/mineflayer-chatgpt/coverage/c8/index.html)
* [Integration tests report](https://cliffano.github.io/mineflayer-chatgpt/test-integration/cmdt.txt)
* [API Documentation](https://cliffano.github.io/mineflayer-chatgpt/doc/jsdoc/index.html)