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
        role: 'admin'
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
        duration: '2:59',
        published: true,
        number: 1,
        album: death
    }, {
        name: 'The death of a bachelor',
        duration: '3:33',
        published: true,
        number: 2,
        album: death
    }, {
        name: 'Hallelujah',
        duration: '3:04',
        published: true,
        number: 3,
        album: death
    }, {
        name: 'Emperor\'s New Clothes',
        duration: '3:39',
        published: true,
        number: 4,
        album: death
    }, {
        name: 'LA Devotee',
        duration: '4:04',
        number: 5,
        album: death
    }, {
        name: 'Say Amen (Saturday Night)',
        duration: '5:06',
        published: true,
        number: 1,
        album: pray
    }, {
        name: 'Hey Look Ma, I Made It',
        duration: '3:05',
        published: true,
        number: 2,
        album: pray
    }, {
        name: 'High Hopes',
        duration: '3:16',
        published: true,
        number: 3,
        album: pray
    }, {
        name: 'Dancing\'s Not a Crime',
        duration: '4:15',
        number: 4,
        album: pray
    }, {
        name: 'Dying in LA',
        duration: '3:49',
        number: 5,
        album: pray
    }, {
        name: 'Sehnsucht',
        duration: '4:14',
        published: true,
        number: 1,
        album: sehnsucht
    }, {
        name: 'Engel',
        duration: '4:25',
        published: true,
        number: 2,
        album: sehnsucht
    }, {
        name: 'Du hast',
        duration: '3:35',
        published: true,
        number: 3,
        album: sehnsucht
    }, {
        name: 'Bück dich',
        duration: '3:23',
        published: true,
        number: 4,
        album: sehnsucht
    }, {
        name: 'Klavier',
        duration: '4:50',
        published: true,
        number: 5,
        album: sehnsucht
    }, {
        name: 'Sonne',
        duration: '4:12',
        published: true,
        number: 1,
        album: klavier
    }, {
        name: 'Ohne dich',
        duration: '5:41',
        published: true,
        number: 2,
        album: klavier
    }, {
        name: 'Ein Lied',
        duration: '3:47',
        number: 3,
        album: klavier
    }, {
        name: 'Roter Sand',
        duration: '6:55',
        number: 4,
        album: klavier
    }, {
        name: 'Mein Herz brennt',
        duration: '5:06',
        number: 5,
        album: klavier
    });

    mongoose.connection.close();
};

run().catch(e => {
    mongoose.connection.close();
    throw e;
});