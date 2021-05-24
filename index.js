const { MessageEmbed, Client } = require("discord.js");
const client = new Client();
const prefix = "-";
const { get } = require('axios');
const link = "https://api.github.com";
const invite_discord_Old =  "https://discord.gg/3t2568W";
const idsalon = "786927013352964146";
const salon_predefini = "The order can only be made in its appropriate channel.\nChannel: <#786927013352964146>";

client.on('ready', function() {
	console.log("100% ready to use.")
	setInterval(async () => {
		try {
			//--------STATUS INFOS--------//
			const statuslist = [
				`${prefix}help | ${client.guilds.size} serveurs`,
				`${prefix}help | ${client.channels.size} channels`,
				`${prefix}help | ${client.users.size} User`
			];
			const random = Math.floor(Math.random() * statuslist.length);
			//------STATUS URL TWITCH------//
			const statusurl = [
				`https://www.twitch.tv/oldmodz95off`
			];
			const randomurl = Math.floor(Math.random() * statusurl.length);
			client.user.setPresence({ game: { name: 'Dev By OldModz95'}, status: 'online' })
		} catch (error) {
			(console.log)
		};
	}, 10000);
});

client.on('message', async function(message) {
	////////-------////////
	//--A NE PAS TOUCHER-//
	////////-------////////
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	////////////////////
	////////////////////
	if (!message.content.startsWith(prefix)) return;


	if(message.content.startsWith(prefix + "dev")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Bot Developer`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Project Founder: **OldModz95#7213**\nStaff Project: **POLYNESIA_972#8023**\nServer Discord: https://discord.gg/3t2568W`)
			.setTimestamp()
			.setFooter(`Ask By ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}

	if(message.content.startsWith(prefix + "contact")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Contact us`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Server Discord: https://discord.gg/3t2568W\nGithub ProtonDev: http://github.com/protonD/\nGithub: https://github.com/oldmodz95-ytb/`)
			.setTimestamp()
			.setFooter(`Ask By ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}

	if(message.content.startsWith(prefix + "bot")){
		message.delete(message.author);
		let embed_hhwid = new MessageEmbed()
			.setColor('random')
			.setTitle(`Information Bot`)
			.setImage("https://media.discordapp.net/attachments/755487927588618274/756826026557964328/bannergif.gif")
			.setDescription(`Latest Update: **24/05/2021**\nOpen Source: http://github.com/protonD/en-bot-discord-github-api`)
			.setTimestamp()
			.setFooter(`Ask By ${message.author.tag}`)
		message.channel.send(embed_hhwid);
	}



	if(message.content.startsWith(prefix + "help")){
		message.delete(message.author);
		let embed_help = new MessageEmbed()
			.setColor('random')
			.setTitle(`Menu Help`)
			.setImage("https://media4.giphy.com/media/SXISye6qGJwkQgTiXD/giphy.gif")
			.setThumbnail("https://s7.gifyu.com/images/authgg.gif")
			.setDescription('Bot Github')
			.addField(`\`${prefix}user\``, "Displays user information.")
			.addField(`\`${prefix}bot\``, "Displays bot information.")
			.addField(`\`${prefix}dev \``, "Displays developers.")
			.addField(`\`${prefix}contact \``, "Contact Us.")
			.setTimestamp()
			.setFooter(`Demander par ${message.author.tag}`)
		message.channel.send(embed_help);
	}




if(message.content.startsWith(prefix + "user")){
	message.delete(message.author);
		if(message.channel.id != idsalon){
			let embed_Send = new MessageEmbed()
			.setURL(invite_discord_Old)
			.setTitle('[Joins server ProtonDev]')
			.setColor("RANDOM")
			.setDescription(`${salon_predefini}`)
			.setThumbnail(client.user.avatarURL)
			.setTimestamp()
			.setFooter(`Ask By ${message.author.username}`)
		message.channel.send(embed_Send)
		} else {
		let content = message.content.split(" ");
		let args = content.slice(1);
		const name = args.join(" ");
		if(!name) {
			return message.reply("Please Enter Username Valid !\nEx: OldModz95-YTB");
		}
	get(`${link}/users/${name}`, {
		headers: {
			'Content-Type': "application/json",
		}
	}).then( (res) => {
		//-----------------------------//
		//           STATS             //
		//-----------------------------//
		try {
			let Istats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Respons Send`)
				.setDescription(`The response to good was sent as a private message !`)
				
				.setTimestamp()
				.setFooter(`Ask By ${message.author.tag}`)
			message.channel.send({embed: Istats});

			let MPstats = new MessageEmbed()
				.setColor(0x36393F)
				.setThumbnail(res.data.avatar_url)
				.setTitle(`User Github ${name}`)
				.setDescription(`**ID:** ${res.data.id}
				**Link Github:** [Github of ${name}](${res.data.html_url})
				**Type:** ${res.data.type}
				**Name:** ${res.data.name}
				**Compagny:** ${res.data.company}
				**Web Site:** [Site of ${name}](${res.data.blog})
				**Location:** ${res.data.location}
				**Email:** ${res.data.email}
				**Bio:** ${res.data.bio}
				**Twitter:** [${res.data.twitter_username}](https://twitter.com/${res.data.twitter_username})
				**Repos Public:** ${res.data.public_repos}
				**Gists Public:** ${res.data.public_gists}
				**Followers:** ${res.data.followers}
				**Following:** ${res.data.following}
				**Account Created:** ${res.data.created_at}
				**Update:** ${res.data.updated_at}
				
				`)
				.setTimestamp()
				.setFooter(`Ask By ${message.author.tag}`)
			message.author.send({embed: MPstats}).catch(error => message.channel.send(`:x: Please OPEN DM ! :x:`)
			.then(m => m.delete({timeout: 3000})))
		}catch(error)  {
			let Estats = new MessageEmbed()
				.setColor(0x36393F)
				.setTitle(`Action Failed`)
				.setTimestamp()
				.setFooter(`Ask By ${message.author.tag}`)
				message.channel.send({embed: Estats});
		
			}
	}).catch ((error) => {
		return message.channel.send(`:x: User No Found.`);
	})
}
}


/////////////////////////////////////////////////////



})//

client.login("TOKEN");