// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === 'aly') {
		message.channel.send('<@!798249330368053328> is swag');
	}
});

client.on('message', message => {
  if (message.content === 'ina') {
    message.channel.send('<@!855917857640022040> is so hot n cool');
  }
})

client.on('message', message => {
	if (message.content === '<@856616074141499412>') {
		message.channel.send(`my seggy prefix is .`);
	}
});

client.on('message', message => {
  if (message.content === 'amoo') {
    message.channel.send(`<@!459542888099872778> is kinda sexy 🥴`)
  }
});

client.on('message', message => {
  if (message.content === 'drain') {
    message.channel.send(`<@!710718041272614973> is a stalker`)
  }
})

client.on('message', message => {
  if (message.content === 'seb') {
    message.channel.send(`hi sebby webby uwuu~ :pleading_face:`)
  }
})

client.on('message', message => {
  if (message.content === 'kyle') {
    message.channel.send(`<@799320208942039080> is the coolest`)
  }
})


client.once('ready', () => {
	console.log('wlcm');
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'txt');
	if (!channel) return;

	channel.send(`hi wlcm lol ${member}!`);
});



// login to Discord 
client.login('ODU2NjE2MDc0MTQxNDk5NDEy.YNDn4w.kmtJ6tcbs1ske86kH71GNiAWaJ0');


const config = require('./config.json');
const { prefix, token } = require('./config.json');

// ...


