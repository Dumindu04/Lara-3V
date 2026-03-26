const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94765744087' : process.env.OWNER_NUMBER, //ADD YOUR NUMBER
    SESSION_ID: process.env.SESSION_ID === undefined ? '𝕃𝔸ℝ𝔸-𝕄𝔻=CNYhCS4Y#taggBvArI3EaLxGob-R04yL3xTVfw-jvqVV9AP4GfGE' : process.env.SESSION_ID, //ADD YOUR SSION ID
    GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'Dumindu04' : process.env.GITHUB_USER_NAME, //ADD YOUR GITHUB USERNAME
    GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN //ADD YOUR GITHUB AUTH TOKEN WITHOUT gph_ ,  example - G5OxxdvEbiBPWxm4A0xypQGlyCr4FS267ifz
};

/*
LARA MD BOT DEVELOPED BY SADEESHA

(\ (\,,/)        /),,/)
(-•(    )       (•_•  )
(> ( '  )       ( 💔 )/
  U u  u         U  U
*/
