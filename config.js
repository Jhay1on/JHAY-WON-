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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_45_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgsXG4gICAgICAgIDcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDUyLFxuICAgICAgICA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NCxcbiAgICAgICAgODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc3LFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICA3MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGU2YURZSm1HTmt2eGtNTnRWdUF5WSs0Q00xeTYxMlVNa1NBR0trN3RGbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZWRsZlhNa1pRdFNTc1BlYWVxUUJoZ1wiLFxuICBcInBob25lSWRcIjogXCJmMjViNzJjZC1kYzMzLTQ5NWUtOTJlNi1mZjhhNmIyOTRkMDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgOTEsXG4gICAgICA2LFxuICAgICAgMTUsXG4gICAgICAxMDEsXG4gICAgICA3NixcbiAgICAgIDI0MyxcbiAgICAgIDE0NixcbiAgICAgIDE5NyxcbiAgICAgIDEwNyxcbiAgICAgIDEzNSxcbiAgICAgIDExOSxcbiAgICAgIDE5NSxcbiAgICAgIDE2MCxcbiAgICAgIDM5LFxuICAgICAgMTMzLFxuICAgICAgMjMzLFxuICAgICAgMTksXG4gICAgICAxODEsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDIzOCxcbiAgICAgIDIxOCxcbiAgICAgIDEyMSxcbiAgICAgIDE1NixcbiAgICAgIDE3NSxcbiAgICAgIDIzNCxcbiAgICAgIDE5MCxcbiAgICAgIDE1MixcbiAgICAgIDE3OCxcbiAgICAgIDMsXG4gICAgICAzMyxcbiAgICAgIDEzLFxuICAgICAgMTI3LFxuICAgICAgMTA4LFxuICAgICAgMTU4LFxuICAgICAgMTAwLFxuICAgICAgMTY5LFxuICAgICAgMTQyLFxuICAgICAgMTM3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFIVjRQOFM3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcwODE0MDUwOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg1MzAxMjY4Mjc1OTE6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGFpMWRjQkVMVEhxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTOXA1QzRnTHhzaE5DQWxtR281MEROS2RsZWFjTmw1VUFHTktYdm1aeEFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRMUVd4aDArVUswV2tCUHlxZ0F1MFA0Q0dGZyt0RUdxUnpNRDZTbklLSHZVSGxpSmEvakJ1elpSSDJDbDl1aVlJZ3NZNDVpZVZjU21NUDdOeDlKQ0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJmZzRPT1hiTFFUckN0MVl6K0hGSFZFelFLR0FaRnRJUWk4VysyY2o2LzZMVDg0YmlNb1JLVHpISzY5c2ZPUElsMXNEV0JrT2dxSmJtVzhMUmYwUWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzA4MTQwNTA6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAzNDU1Mjhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
