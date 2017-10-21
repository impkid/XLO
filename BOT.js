(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "liramce";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
            command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', // Minimum user permission to use the command
            type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
              functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                  API.sendChat("/me Bacon!!!");
                }
              }
            };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "Isa Popozão",
      language: "portuguese",
      chatLink: "https://rawgit.com/loralie/BPM/master/pt-BR.json",
      scriptLink: "https://rawgit.com/bscBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 100, // 1-200
      startupVolume: 100, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: true,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 60,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 5,
      historySkip: true,
      timeGuard: true,
      maximumSongLength: 8,
      autodisable: false,
      commandCooldown: 4,
      usercommandsEnabled: true,
      skipPosition: 1,
      skipReasons: [
      ["theme", "Essa música não está de acordo com as regras da sala. "],
      ["op", "This song is on the OP list. "],
      ["history", "Este vídeo ainda está no histórico. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "Este vídeo contém conteúdo NSFW. "],
      ["unavailable", "A música atual encontra-se indisponível para alguns usuários. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: true,
      motdInterval: 10,
      motd: "RAAAAAAAAAAAAAAAAAAAAAAAAAN :sparkles:",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: null,
      themeLink: null,
      fbLink: null,
      youtubeLink: null,
      website: null,
      intervalMessages: [],
      messageInterval: 5,
      songstats: false,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/bscBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/bscBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/bscBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/bscBot/source/master/basicBot.js", extend);

}).call(this);
