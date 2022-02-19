const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "𝓿ⲓⲙ𐌵ⲕⲧⲏⲓ"
global.ownername= "ᴹᴿ᭄ vimυʞɈʜi"
global.myweb ="https://www.youtube.com/channel/UCTudTphqj9Yr4X-tg-LFYLg"
global.youtube = "https://www.youtube.com/channel/UCTudTphqj9Yr4X-tg-LFYLg"
global.github = "https://www.youtube.com/channel/UCTudTphqj9Yr4X-tg-LFYLg"
global.ownernomer = "94775792013"
global.ownernomerr = "+94775792013"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["94775792013","94775792013","94775792013"] //ganti agar fitur owner bisa di gunakan
global.packname = '© งi๓นkthiงi๓นkthi' //sticker wm
global.author = 'Di Buat Oleh งi๓นkthi' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗ඉවරයි, ඒක ටබ් එකක්.~',
    admin: 'මෙම විධානය භාවිතා කළ හැක්කේ පරිපාලක විසින් පමණි!',
    botAdmin: 'මෙම විධානය භාවිතා කළ හැක්කේ බොට් පරිපාලක වූ විට පමණි !',
    owner: 'මෙම විධානය භාවිතා කළ හැක්කේ අයිතිකරුට පමණි !',
    group: 'මෙම විධානය භාවිතා කළ හැක්කේ කණ්ඩායම් වශයෙන් පමණි !',
    private: 'මෙම විධානය භාවිතා කළ හැක්කේ පුද්ගලිකව පමණි !',
	bot: 'බොට් අංකය පරිශීලක විශේෂ විශේෂාංග',
    errtoimg: 'කණගාටුයි දැනට Gif ස්ටිකරයට සහය නොදක්වයි !',
    wait: '⏳ සකස් වෙමින් පවතී',
	lockCmd: 'හිමිකරු විසින් සක්රිය කර නොමැති විශේෂාංග!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
