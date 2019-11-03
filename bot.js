const Discord = require('discord.js');
const bot = new Discord.Client();
const talkedRecently = new Set();
const prefix = "=";
 
var fury = false;

bot.on('ready', () => {
    bot.user.setGame('=Menu SAO')
})

bot.on('ready', function () {
    console.log("Je suis connecté !")
});


bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send("**__۝▬▬๑₪۩۞『SAO Community ©』۞۩₪๑▬▬۝ __**\n\n\n:hand_splayed:`Bienvenue à toi sur『SAO Community [RP]』© !`\n\n\n:white_check_mark:`Pour voir les salons de 『SAO Community [RP]』©, " +
            "il faudra lire le réglement dans le salon├──📃ʀᴇ̀ɢʟᴇᴍᴇɴᴛ-a-lire, puis appuyer sur la case verte où il est écrit [J'accepte le réglement !] situé tout en haut, pour avoir accès aux " +
            "différents salons de base !`\n\n\n:book:`N'oubliez pas aussi d'aller voir les salons #├──🎮ᴠᴏs-ᴊᴇᴜx ainsi que #├──📌ᴠᴏs-ɪɴғᴏʀᴍᴀᴛɪᴏɴs et #├──📟ᴠᴏs-sᴀʟᴏɴs permettant d'obtenir les rôles " +
            "que vous souhaitez avoir, ainsi que de pouvoir avoir accès aux parties du discord que vous souhaitez voir !`\n\n\n:link:`Notre discord permettant de faire votre pub : " +
            "https://discord.gg/NYH43Ks`\n\n\n:chart_with_upwards_trend:`Le discord principal évolue petit à petit, hésite pas à parler et faire venir tes amis, il est en constante évolution selon vos " +
            "avis c'est d'ailleurs pour cela que dans le salon #├──👑ɴᴏᴛᴇ-﹠ᴀᴠɪs vous pouvez noter le discord ainsi que donner votre avis !`\n\n\n:writing_hand:`Que vous soyez un débutant ou un expert " +
            "en RP, vous êtes les bienvenues, vous aurez toutes les informations nécessaire pour comprendre en écrivant sur le discord dans un salon de commande ceci : =Menu SAO`\n\n\n:hand_splayed: `Si vous " +
            "voulez devenir partenaire avec notre discord, ou pouvoir mettre votre RP dans notre liste de RP, écrivez : =Devenir " +
            "partenaire`\n\n\nhttps://66.media.tumblr.com/169c730d52faf3f7e5680ed44ec4bf7a/tumblr_nbd255coqa1r4vymlo1_500.gif\n\n\n**__۝▬▬๑₪۩۞『:ribbon:』۞۩₪๑▬▬۝__**")
    }).catch(console.error)
    // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
});

bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('Le **BOT** a mis: ' + `[ **${msg.createdTimestamp - message.createdTimestamp}**` + ' **Ms** ] pour repondre.\nEt l\'**API** a mis: ' + `[ **${Math.round(client.ping)}**` + ' **Ms** ] pour repondre')
    }
});

bot.login(process.env.BOT_TOKEN)

bot.on("message", (message) => {
    if (!message.content.startsWith(prefix)) return;
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else
        if (message.content.startsWith(prefix + "foo")) {
            message.channel.send("bar!");
        }
});

// Menus | Menu SAO

bot.on('message', message => {
    if (message.content.startsWith(prefix + "Menu SAO")) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter("『SAO Community [RP]』©", "http://www.copyrightfrance.com/images/copyright.png")
            .setColor(3447003)
            .addField("Bienvenue sur le menu d'aide !", "Vous aurez des informations à propos du RP sur chacunes de ces commandes. Elles sont classées par importance, prenez le temps de les lire !\n\n" +
                ":closed_book:=SAO\n" +
                ":bust_in_silhouette:=Personnage\n" +
                ":diamond_shape_with_a_dot_inside:=Classes\n" +
                ":cyclone:=Compétences\n" +
                ":trident:=Particularités\n" +
                ":hammer:=Améliorations\n" +
                ":dagger:=Armes\n" +
                ":walking:=Trajets\n" +
                ":game_die:=Rolls\n" +
                ":crossed_swords:=Combat\n" +
                ":white_flower:=Etats\n" +
                ":book:=Quêtes\n" +
                ":skull:=Mort\n" +
                ":heartbeat:=Rétablissement\n" +
                ":sparkles:=Niveaux\n" +
                ":100:=Caractéristiques\n" +
                ":globe_with_meridians:=Zones\n" +
                ":japanese_ogre:=Monstres\n" +
                ":scroll:=Liste\n" +
                ":mag_right:=Objets\n" +
                ":tools:=Crafts\n" +
                ":hammer_pick:=Métiers\n" +
                ":large_orange_diamond:=Cristal\n" +
                ":cityscape:=Ville\n" +
                ":sunrise_over_mountains:=Extérieur\n" +
                ":classical_building:=Souterrains\n" +
                ":homes:=Constructions\n" +
                ":loud_sound:=Menus\n" +
                ":bank:=Donjons\n" +
                ":fox:=Familiers\n" +
                ":busts_in_silhouette:=Guilde\n" +
                ":alembic:=Professions\n" +
                ":microphone2:=Dirigeant\n" +
                ":shield:=Garde\n" +
                ":bow_and_arrow:=Mercenaire\n" +
                ":chains:=Prison\n" +
                ":ring:=Mariage\n" +
                ":notes:=Musiques")
            .setImage("https://i.pinimg.com/originals/18/fb/4b/18fb4b82ad92387d26413f1ef3518d96.png")
            .setTimestamp()
        message.channel.send({ embed })
    }
});