require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAOtVNVsA++qNdQQAAI0HAAAKAAAAY3JlZHMuanNvbpVUW46jRhTdSlS*bU2bhw221FIwBoNpaLCNu+1oFFVDAWVDgasKDB75I1vICmYt+c8mspKI7umZ+Ugmnfqql849955z7ydASsyQgzow*QQqihvIUb*lXYXAFMzqJEEUDEAMOQRTAO3dMTGyXBMfH9x64qTCzklK9cxXG2igscbOZ+TRx0LbsjtwHYCqfs5x9APAx8fnQ2bWnr4o9hPcLXNHg*aT2NjO+eQLR3d8mrfhVoSLmXwHrj0ixBST1KgyVCAKcwd1PsT0ffQfvNOQ5+5tuIsqGobpU3PJWjM4TPbkwCnMw+0+seYnqba0d9LfTI6BcerG*qJ17Q2crxVtUXXMcV0ra0PqqZPdptmM2*XulT7DKUGxHSPCMe*eXfd6Ri*7YaNpq4s01jZnUrUzLCTqUk3OsPCObNYcdiQuC8N+H3Gekosr0Wik3U7EsE3g6XmSoLo9LwKrLSfhyvMmycl3sqfwe+I+ffPK8f*U*exijzBJPBr3rNl7dHNE6426Pay8rrHszBrtCMJlRUPyTvrb4LbxsWc9W4EgHf26m*GTuZJ0B9oudlRTUcgo68L9TXD8Rh*ymv6I5aKtF1YTl9HCHPP75tJZD+ae5MSALjo83h8vs9vKZ1m0GSnVWN*eIHhyxGM6ysXk8JBzeZ0tDyxBFx+l4iSYL53bgGbB3UtGR9TZMZgK1wGgKMWMU8hxSfo7URwOAIybNYoo4i*lBZXdkdl41+46GwZFEYqrcXVfw1YauZOEz7ub2F*XUSDJW*kODEBFywgxhmILM17SzkWMwRQxMP3l4wAQ1PJX4fpwkjAACaaMh6Su8hLGb6q+PcIoKmvC1x2J9H6DKJgOv10jzjFJWV*HmkAaZbhBegY5A9ME5gx9zRBRFIMppzX62rV6GfeFl3fLuRsoBhiA4kUQHIMpEEeyIChjUVQFcSopP7MP5x4WVtUHgjgYAAL73+CPz3*+*tdvn38tICF19utP*RkMQP4KIkkjRVJleSgooqj0OP3D9Sv*PlyMOMQ5A1OgL7F6SFLLuIdNo+4WC81INT3VwLd834zzKkxzw7BtCpaxYZbvZMPMejpgEkiz+WGk+FQvNrauO7n9tC3v*gGkD5mZyHtK8rqJ1MJ9ChN5FYqn6PxY2KEWxHa2hQmRhUJVwuDhsr8xF8q6YHgpq*o9hErR8cCN9mJljCSt1H1xkgmert310WLU4Ah9HywME7sbiodgctNs9ZRtTbPaFu4FmXnQjnUxW1amJk9WKe58Yx23tyF97CrTaIWMxfZi*Tw3OzFRVe+IH5JOWsmXOM*SV0u*tFT+ZZThF7P1SvbHBKOXyfBFsf9U9pV4b8DhdfAdxpdZ8y*9Onu+pTaexavWUGaXroztlSDL1dA7B*INuozP1bHTUlytTQGC6*XjAFQ55ElJCzAFrHiGYABoWfd2tklS*iCSroX2S42vA5BDxrVvLbLBBWIcFhWYCspIlUfCWBZff*m0rCzIMjAFgiNnltz7vdOqas0hf+s4oPVrvkLg+jdQSwECFAMUAAAICADrVTVbAPvqjXUEAACNBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACdBAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254117622812',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
