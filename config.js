const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "967730272871";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,967730272871";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "967730272871"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "SUHAIL_11_37_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMixcbiAgICAgICAgNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMixcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDkxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDczLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjJVeEVEZStocCt6cXhsTnZZZ0RmRHZSbEVnN2RuYVJRNW5yMVh4VnlGRWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTY3NzMwMjcyODcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFNzU5RUI5RjFDNTQ4NEY3QzBDOTExNjg3Qjc4QUVGRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgwNDE4NzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5Njc3MzAyNzI4NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjkwNDZGODI1RkM4NDZDQkFDNEZFMDZGNURGQUJDMzE4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODA0MTg3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLX01VdFVHVFN3LWZHbDFlN3FHTnl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFmZjJiZTIxLWY2ZGYtNDA1NS04NzgxLTJiY2I1MGVkMjkzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDQxLFxuICAgICAgMTMxLFxuICAgICAgMTM4LFxuICAgICAgMTQyLFxuICAgICAgMjI1LFxuICAgICAgMTYzLFxuICAgICAgMjE4LFxuICAgICAgMTIsXG4gICAgICAyNDUsXG4gICAgICAyNTQsXG4gICAgICAxNTEsXG4gICAgICAxNTcsXG4gICAgICA0OSxcbiAgICAgIDEyLFxuICAgICAgMjA0LFxuICAgICAgMjE4LFxuICAgICAgNDQsXG4gICAgICA2MyxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM3LFxuICAgICAgMjQyLFxuICAgICAgNCxcbiAgICAgIDE5OSxcbiAgICAgIDExMCxcbiAgICAgIDcsXG4gICAgICA4LFxuICAgICAgMTk1LFxuICAgICAgNDUsXG4gICAgICAxNzYsXG4gICAgICAxODYsXG4gICAgICAyOSxcbiAgICAgIDE5NyxcbiAgICAgIDIyMCxcbiAgICAgIDE2MCxcbiAgICAgIDIyNixcbiAgICAgIDQyLFxuICAgICAgOTksXG4gICAgICAxNTAsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFFLWFNQTE5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk2NzczMDI3Mjg3MTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIti02YTZhVwiLFxuICAgIFwibGlkXCI6IFwiNzkzMTk5NDI2MjMzNzM6NzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2JMNmY0R0VJZW4vN2NHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyVFd5NW5hSFhIRWQ0c1A1eGFxcW9FZmFHMVpTb3NvNVg1L3Q3Q0Y1T2xvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInJkU29DTEkxNkNHZTlNZ3VSVDFaYUJwQjJ6NWp6K2p1bEpQMWFKUCtMaThLK1poSDV3ZUdTWVRxMk5QdStVMDFyRVhYaXZXWVFDdWlxOWJia3RaRkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlg0czJadE8vSitmQm1MY09tdUMzemNZMXU2Zkpydm5yR09GbGx3RzArbXFpU2ViaTh6NEpmN1lPZnB3djhQazQ5NnlpRC9VbnplMmkxZHBEVEtRMUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk2NzczMDI3Mjg3MTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODA0MTg2OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9QVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT1BULmpzb24iOiAie1wia2V5RGF0YVwiOlwibG5EQmh6a1pJbkJFbzMzUzBaQm5OZm5TSGNKMmRqaldGL2lRVStQU0c0RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc2NTgzODQzLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzI3OTM5MzA1Nzg2XCJ9Igp9", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
