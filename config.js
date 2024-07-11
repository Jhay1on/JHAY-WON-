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
global.scan = "https://suhail-md-vtsf.onrender.com"SUHAIL_10_25_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNixcbiAgICAgICAgODAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDExNixcbiAgICAgICAgOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDQxLFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMjM2LFxuICAgICAgICA1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgODgsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6aTFwRjhRRDg1Tk9Fa0RzbXo5SmJjamo4NUdESlMrRGFFbXJNZ0p2VnRJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ3VXFjMzVLT1JZV0FXU0txQjlRMDBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjE5NWFmZWE0LTYzMzEtNDZjYi1hYjNiLTM5NTBlYmI1MDZlYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICAxNzgsXG4gICAgICA3MCxcbiAgICAgIDg4LFxuICAgICAgNDAsXG4gICAgICAxNjYsXG4gICAgICA4NixcbiAgICAgIDI0MyxcbiAgICAgIDE5MixcbiAgICAgIDE4OCxcbiAgICAgIDMyLFxuICAgICAgMzUsXG4gICAgICAyMjQsXG4gICAgICA0NSxcbiAgICAgIDEwNixcbiAgICAgIDEzNSxcbiAgICAgIDI1LFxuICAgICAgNzQsXG4gICAgICAxNzcsXG4gICAgICAxNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAyMzYsXG4gICAgICAyMzYsXG4gICAgICA5LFxuICAgICAgNTAsXG4gICAgICAzOCxcbiAgICAgIDY3LFxuICAgICAgMjUxLFxuICAgICAgMjMsXG4gICAgICAyNTUsXG4gICAgICA4LFxuICAgICAgMjA1LFxuICAgICAgMixcbiAgICAgIDczLFxuICAgICAgMTMwLFxuICAgICAgMzAsXG4gICAgICAxNzEsXG4gICAgICAxMTEsXG4gICAgICAyMCxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhTTUdRR01EXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcwODE0MDUwOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzg1MzAxMjY4Mjc1OTE6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDdUdCtzREVQTGx2clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTOXA1QzRnTHhzaE5DQWxtR281MEROS2RsZWFjTmw1VUFHTktYdm1aeEFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNtZVVJdytWRVhtRnJpczhtMmEva0hMeDkxWS8wS2s5MDVzNFNkVkZnbkc1ME5qenplN0lmaVZwN0NwL2NiL1dUSFFVbTZWZ0VzTjdWMXFaRFp6SEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRsbVVKNXpraGZMTlpPWGF2eUN1QXpXTmY2WWk3TFVRdnFoYjE0ZnhPU3AwcVpsMHNqdVZqZ25Kb25jQ2QyeTNRT2FPdkhlaGpIcFV5cjgyemhhR0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNzA4MTQwNTA6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2OTM0OTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
