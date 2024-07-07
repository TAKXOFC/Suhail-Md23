const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kanjumatakundacharles@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagC7BABadmV7PRRs72Y" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/9c47ad1de078d42eee14e.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263714773898";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263785192250";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '2'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_36_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2MixcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgNixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMixcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJORkVWOGFHNGJlWlhJenBNTU9nUktXbFI3RFU5RGRObm5pTXAyVEU0NUVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5VGx6RWRLT1MyQzdDRlZBSnRiQ1p3XCIsXG4gIFwicGhvbmVJZFwiOiBcImRlNzcwNzYxLTY5ZTMtNGVmMC04NGYxLTMyNzJiMDk0MTZjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICA2MyxcbiAgICAgIDEzNSxcbiAgICAgIDI0NSxcbiAgICAgIDg1LFxuICAgICAgMzYsXG4gICAgICAxLFxuICAgICAgMTEyLFxuICAgICAgNDQsXG4gICAgICAxMixcbiAgICAgIDIyOCxcbiAgICAgIDI0MSxcbiAgICAgIDExNyxcbiAgICAgIDE5NSxcbiAgICAgIDIyNyxcbiAgICAgIDEyNyxcbiAgICAgIDEyMixcbiAgICAgIDIxMyxcbiAgICAgIDYyLFxuICAgICAgMTkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDE2OCxcbiAgICAgIDE0NixcbiAgICAgIDIzLFxuICAgICAgMzgsXG4gICAgICAyMjYsXG4gICAgICAyMjQsXG4gICAgICAxOCxcbiAgICAgIDExNCxcbiAgICAgIDEyNSxcbiAgICAgIDEyMCxcbiAgICAgIDMyLFxuICAgICAgMTg0LFxuICAgICAgODQsXG4gICAgICAxMDYsXG4gICAgICAxMjQsXG4gICAgICAyMTUsXG4gICAgICAxODQsXG4gICAgICAyMjksXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUldUTlI0S1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc4NTE5MjI1MDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRBS1gtT0ZDXCIsXG4gICAgXCJsaWRcIjogXCIyNjgwMTkxMTI2MjgzNTk6NTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3J3enVRR0VPL3JxclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCeFlPeVRrSEdTZzIzeWZlT1l4Y0x3RmJXYkJwSmsyVjg0RmtYQllMYmdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFadUVhYkVoRm9DYnJGZ0VVRHFQOUlzMVZjRkNGQ1lhc0E1QjdaM05WR3VzZmRvMmt3TFFFaHhDTk5EWXNIa1lFOFc5KzdkVWF0MitpbzNQczJsZ0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhDTGxHcWY4ZVlUcDZNV0dXa2JQZTJQTGIvOGoxSVVNMUQ1MGF0WWVIRVhKb0Z4RVpGdEV4QXhINkhqdFVyckdoaEVOWXFCUFZPUzBFbkFSWUZVV0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc4NTE5MjI1MDo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM2NjU4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh5cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHlxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZFptVllLVGpTZGg4cEF6a3Z3SE80bEpOTXQyRDBneDZMeUpVQmVJeEkvOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODIxNjIwMzI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 takunda charles 』```", //*『kanjuma』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",
  ownername:process.env.OWNER_NAME|| "𝚃𝙰𝙺𝚇-𝙾𝙵𝙲",


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
