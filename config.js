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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_45_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicHFBYTlyVllkWWRVbXdiS3ZydzFFeFI5WXdDQ1MzZUhqNlpKQzMxbWR3VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRnBPVVUzeThTTHV0UVVrNW9scGVRUVwiLFxuICBcInBob25lSWRcIjogXCIwM2I5YTk0MC1jY2JkLTRjNmMtYWZmYy05MGU3NWU0YmIwYjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxMDgsXG4gICAgICAxNTcsXG4gICAgICAyNyxcbiAgICAgIDY5LFxuICAgICAgMjU0LFxuICAgICAgMzQsXG4gICAgICAxMjksXG4gICAgICAxMSxcbiAgICAgIDIzMSxcbiAgICAgIDE5NSxcbiAgICAgIDk4LFxuICAgICAgODMsXG4gICAgICA2LFxuICAgICAgMjQwLFxuICAgICAgOSxcbiAgICAgIDI0NCxcbiAgICAgIDIyOCxcbiAgICAgIDIwMyxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NCxcbiAgICAgIDkwLFxuICAgICAgMTI2LFxuICAgICAgMTIyLFxuICAgICAgMTEzLFxuICAgICAgMzUsXG4gICAgICA0OSxcbiAgICAgIDIyMCxcbiAgICAgIDIsXG4gICAgICAxMjQsXG4gICAgICAxNjcsXG4gICAgICA3LFxuICAgICAgMjAsXG4gICAgICA5MCxcbiAgICAgIDIzNSxcbiAgICAgIDE2NixcbiAgICAgIDE4MixcbiAgICAgIDI0OCxcbiAgICAgIDE4OSxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJERVFDWU5NVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MDgxNDA1MDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM4NTMwMTI2ODI3NTkxOjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A2aTFKc0hFTmVNbDdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUzlwNUM0Z0x4c2hOQ0FsbUdvNTBETktkbGVhY05sNVVBR05LWHZtWnhBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0eWVDNFhRTUU4OEVCT1k5MzB3b3lTN1J5UkFkeHM2TTQ5SUtzSEN5ZUN0WWpSQW1HWUtOa2VBejV1Tmd0VXFoOGJDK0dHSktaWW5EQlJWaE5zRjVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5K2s4TTVJN3ZyVkIyOS9WKzNjbmNnNFp2S3kzVlFpK3pqUVV0aTl3Qm1iMjIzQUFjTEZ1TFdLZDBKSFJaNWtoYUVZWEVnRGUwUWVqL1RIOEJiT1hodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcwODE0MDUwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMDQzMDk4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzdlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHN2UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJNUVtWlh0a28zeW04Z3FGZU50SXZ1WGg0VFNXOXI4NXp5OWc4M1dNRUprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MzcwNTIwMzAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDA0MzEwNDk5M1wifSIKfQ=="  // PUT your SESSION_ID 


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
