function help() {
    return `
┏ ❣ *1 Am Human* ❣
╿
┷┯ ☾ Group Commands ☽
   ╽
   ┠❥ *!add 62858xxxxx*
   ┠❥ *!kick @tagmember*
   ┠❥ *!promote @tagmember*
   ┠❥ *!demote @tagadmin*
   ┠❥ *!mentionAll*
   ┠❥ *!adminList*
   ┠❥ *!ownerGroup*
   ┠❥ *!leave*
   ┠❥ *!linkGroup*
   ┠❥ *!delete [replyChatBot]*
   ┠❥ *!kickAll*
   ┠❥ *!NSFW [enable|disable]*
   ┠❥ *!welcome [enable|disable]*
   
┷┯ ☾ Others Commands ☽
   ┠❥ *!stikernobg
   ┠❥ *!sticker*
   ┠❥ *!stickerGif*
   ┠❥ *!creator*
   ┠❥ *!jadwalTv [channel]*
   ┠❥ *!tts [kode bhs] [teks]*
   ┠❥ *!brainly [pertanyaan] [.jumlah]*
   ┠❥ *!info*
   ┠❥ *!meme*
   ┠❥ *!quotemaker [|teks|author|theme]*
   ┠❥ *!join [linkGroup]*
   ┠❥ *!quotes*
   ┠❥ *!donasi*
   ┠❥ *!lirik [optional]*
   ╿
   ╿
   ╰╼❥ Kirim perintah *!readme* untuk mengetahui fungsi dan cara penggunaan perintah di atas, WAJIB BACA!!.`
}
exports.help = help()
function readme() {
    return `
*[channel]* Diisi dengan channel televisi yang valid, tanpa tanda “[” dan “]”
Contoh : *!jadwalTv Indosiar*
*[kode bhs]* Diisi dengan kode bahasa, contoh *id*, *en*, dll. Dan *[teks]* Diisi dengan teks yang ingin di jadikan voice, Masih sama seperti di atas tanpa tanda “[” dan “]”
Contoh : *!tts id Test*
Note : Max 250 huruf
*[|teks|author|theme]* Diisi dengan teks, author, dan theme, tanpa tanda “[” dan “]”
Contoh : *!quotemaker |Odading|Mang Oleh|Shark*
*[linkGroup]* Diisi dengan link group whatsapp yang valid, tanpa tanda “[” dan “]”.
Contoh : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*
*[optional]* Diisi dengan teks|title lirik lagu, tanpa tanda “[” dan “]”.
Contoh : *!lirik aku bukan boneka*`
}
exports.readme = readme()
function info() {
    return `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Owner Bot : wa.me/6285892766102
Author? : Ada pokoknya om, malas pasang nama doang`
}
exports.info = info()
function snk() {
    return `Syarat dan Ketentuan Bot *Shinomiya Kaguya*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama bot aktif
2. Data anda akan di hapus ketika bot Offline
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim
4. Kami tidak akan pernah meminta anda untuk memberikan informasi pribadi
5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
6. Apapun yang anda perintah pada bot ini, KAMI TIDAK AKAN BERTANGGUNG JAWAB!
Thanks !`
}
exports.snk = snk()
function donate() {
    return `Ya halo om.. Mau donate buat server? agar bot selalu aktif
    
    cukup klik link ini https://semawur.com/iMwJa gratis kok.
    
Thanks !`
}
exports.donate = donate()
function listChannel() {
    return `Daftar channel: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
