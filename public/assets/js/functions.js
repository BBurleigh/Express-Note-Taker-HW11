const path = require('path');

const fs = require('fs');

function noteCreateNewNote(body, noteTakerArray) {

    const note = body;

    noteTakerArray.push(note);

    fs.writeFileSync(path.join(__dirname, '../../../db/db.json')), JSON.stringify({notes: noteTakerArray}, null, 2)

    return note;
}

function noteDeleteNote(noteTakerArray, id) {

    var removeID = parseInt(id);

    noteTakerArray.splice(removeID, 1);

    for (let i = removeID; i < noteTakerArray.length; i++) {

        noteTakerArray[i].id = i.toString();

    }

    fs.writeFileSync(path.join(__dirname, '../../../db/db.json'), JSON.stringify({notes: noteTakerArray}, null, 2))
}

module.exports = {noteCreateNewNote, noteDeleteNote};