const mongoose = require('mongoose');
const config = require('./config');
const nanoid = require("nanoid");

const User = require('./models/User');
const Artist = require('./models/Artist');
const Album = require('./models/Album');
const Track = require('./models/Track');

const run = async () => {
    await mongoose.connect(config.database, config.databaseOptions);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (let coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    await User.create({
        username: 'admin',
        password: 'admin',
        displayName: 'Admin',
        token: nanoid(),
        role: 'admin',
        avatar: 'avatar/admin.jpeg'
    }, {
        username: 'user',
        password: 'user',
        displayName: 'User',
        token: nanoid()
    });

    const [brendon, till] = await Artist.create({
        name: 'Brendon Urie',
        published: true,
        image: 'BrendonUrie.jpg',
        info: 'Бре́ндон Бойд У́ри — американский певец, автор песен и музыкант, наиболее известный как лид-вокалист группы Panic! At the Disco.'
    }, {
        name: 'Till Lindemann',
        published: true,
        image: 'TillLindemann.jpg',
        info: 'Тилль Ли́ндеманн — немецкий вокалист, автор текстов песен и фронтмен метал-групп Rammstein и Lindemann, поэт. Принимал участие в записи некоторых песен групп Apocalyptica, Puhdys и Emigrate. Автор сборников стихов «Messer», «In stillen Nächten», снялся в 8 фильмах. Имеет образование пиротехника.'
    });

    const [death, pray, sehnsucht, klavier] = await Album.create({
        name: 'Death of a Bachelor',
        artist: brendon,
        published: true,
        year: '2016',
        image: 'DeathOfABachelor.jpg'
    }, {
        name: 'Pray for the Wicked',
        artist: brendon,
        published: true,
        year: '2018',
        image: 'PrayForTheWicked.jpg'
    }, {
        name: 'Sehnsucht',
        artist: till,
        published: true,
        year: '1997',
        image: 'Sehnsucht.jpg'
    }, {
        name: 'XXI - Klavier',
        artist: till,
        year: '2015',
        image: 'Klavier.jpg'
    });

    await Track.create({
        name: 'Victorious',
        published: true,
        number: 1,
        album: death,
        track: 'track/Victorious.mp3'
    }, {
        name: 'The death of a bachelor',
        published: true,
        number: 2,
        album: death,
        track: 'track/TheDeathOfABachelor.mp3'
    }, {
        name: 'Hallelujah',
        published: true,
        number: 3,
        album: death,
        track: 'track/Hallelujah.mp3'
    }, {
        name: 'Emperor\'s New Clothes',
        published: true,
        number: 4,
        album: death,
        track: 'track/EmperorsNewClothes.mp3'
    }, {
        name: 'LA Devotee',
        number: 5,
        album: death,
        track: 'track/LADevotee.mp3'
    }, {
        name: 'Say Amen (Saturday Night)',
        published: true,
        number: 1,
        album: pray,
        track: 'track/SayAmen.mp3'
    }, {
        name: 'Hey Look Ma, I Made It',
        published: true,
        number: 2,
        album: pray,
        track: 'track/HeyLookMaIMadeIt.mp3'
    }, {
        name: 'High Hopes',
        published: true,
        number: 3,
        album: pray,
        track: 'track/HighHopes.mp3'
    }, {
        name: 'Dancing\'s Not a Crime',
        number: 4,
        album: pray,
        track: 'track/DancingIsNotACrime.mp3'
    }, {
        name: 'Dying in LA',
        number: 5,
        album: pray,
        track: 'track/DyingInLA.mp3'
    }, {
        name: 'Sehnsucht',
        published: true,
        number: 1,
        album: sehnsucht,
        track: 'track/Sehnsucht.mp3'
    }, {
        name: 'Engel',
        published: true,
        number: 2,
        album: sehnsucht,
        track: 'track/Engel.mp3'
    }, {
        name: 'Du hast',
        published: true,
        number: 3,
        album: sehnsucht,
        track: 'track/DuHast.mp3'
    }, {
        name: 'Bück dich',
        published: true,
        number: 4,
        album: sehnsucht,
        track: 'track/BückDich.mp3'
    }, {
        name: 'Klavier',
        published: true,
        number: 5,
        album: sehnsucht,
        track: 'track/Klavier.mp3'
    }, {
        name: 'Sonne',
        published: true,
        number: 1,
        album: klavier,
        track: 'track/Sonne.mp3'
    }, {
        name: 'Ohne dich',
        published: true,
        number: 2,
        album: klavier,
        track: 'track/OhneDich.mp3'
    }, {
        name: 'Ein Lied',
        number: 3,
        album: klavier,
        track: 'track/EinLied.mp3'
    }, {
        name: 'Roter Sand',
        number: 4,
        album: klavier,
        track: 'track/RoterSand.mp3'
    }, {
        name: 'Mein Herz brennt',
        number: 5,
        album: klavier,
        track: 'track/MeinHerzBrennt.mp3'
    });

    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});