export default async ({ client, event, me, loaders, groupers, managers }) => {

    // Si se tiene que ignora la interaccion de algun canal
    if (me.replys.ignore.length) {

        const fetchedChannel = await event.guild.channels.fetch(event.channelId);

        // Si el canal de la interaccion debe ser ignorado
        if (me.replys.ignore.includes(fetchedChannel.type)) return false;
    };

    return true;
};