const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_24_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTczLFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDExLFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTksXG4gICAgICAgIDM4LFxuICAgICAgICA5LFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDM1LFxuICAgICAgICA2NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMjMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTksXG4gICAgICAgIDExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIldlV0o0eUxtQi9kdkxPRVpTNTlDdWtLY2Z5d3B1K2N4OGpoQk5tL09mNEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJoSFBLYXVIVFVtMWJmNWU4OTB3TGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjliMDY1YTEtZjU2MS00ZTI4LWI0OTMtYmVkMDJhMDliMWNlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDIzNixcbiAgICAgIDIyMCxcbiAgICAgIDEwNixcbiAgICAgIDE3MSxcbiAgICAgIDIxOCxcbiAgICAgIDIwNCxcbiAgICAgIDE1LFxuICAgICAgMjQ0LFxuICAgICAgMTkyLFxuICAgICAgMTM0LFxuICAgICAgNTAsXG4gICAgICAzLFxuICAgICAgMTYsXG4gICAgICAzNCxcbiAgICAgIDIxNSxcbiAgICAgIDEyMixcbiAgICAgIDEyNixcbiAgICAgIDkxLFxuICAgICAgMTQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMyLFxuICAgICAgNDEsXG4gICAgICAxMTMsXG4gICAgICAyNTAsXG4gICAgICAxNjIsXG4gICAgICAyMzcsXG4gICAgICAxNTksXG4gICAgICAxNDIsXG4gICAgICAyMDgsXG4gICAgICAxODcsXG4gICAgICA4LFxuICAgICAgMTc4LFxuICAgICAgMjM3LFxuICAgICAgMTYzLFxuICAgICAgMTUsXG4gICAgICAyMTAsXG4gICAgICAyMTMsXG4gICAgICAyOSxcbiAgICAgIDExNSxcbiAgICAgIDU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRKM0xCQVJLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcwODE0MDUwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzODUzMDEyNjgyNzU5MTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tDamk2NFBFSUNEbDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUzlwNUM0Z0x4c2hOQ0FsbUdvNTBETktkbGVhY05sNVVBR05LWHZtWnhBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoYW1sd083NXg4QURhUllJRU1WRHJvNVpDaG9OZzZyUEdFU0NkTXRablBSUEF2emQzeUI4TWFaYWhOdk9hNXJQM3RUVXE5eVRKUTRCaGR2azlXUjREQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJwQXZWa0pOM1FVVEpLQ0ZQRWVEbjNBUCtLQTdES3RacDB3SVRpS3VqT2M0bGNyZG91VHd0UStBRFBoelByWElsbFBFV1FQSTA5K0pyTzhWNXlxL1BqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcwODE0MDUwOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwNDE4NTgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEb2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURvai5qc29uIjogIntcImtleURhdGFcIjpcIk5INzFlNUpQUzhDbmp1N000cDFvVkl5eVFJMUpqU3YyS3FYalNKazRIMFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDEyMzE4NTU2OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMDQxODY0Njg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
