const discord = require('discord.js');

module.exports = {

    priority: 2,

    event: function ({ client, manager, cache, bases, utils }) {

        client.on(discord.Events.ClientReady, () => {

            for (const _file of manager.events[utils.file.name].all) {

                // Carga el evento
                _file.events[utils.file.name]({

                    client,
                    manager,
                    cache,
                    bases,
                    utils: new bases.utils(_file)
                });
            };
        });
    }
};