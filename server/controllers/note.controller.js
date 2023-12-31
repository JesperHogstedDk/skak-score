const authorRepo = require('../models/author.model');
const noteRepo = require('../models/note.model');

async function getNotes(req, res) {
  console.log('Server getNotes()');
  const notes = await noteRepo.getNotes();
  console.log('Server response: notes: todo: calc number of records');
  res.json({
    notes
  });
}

async function getNote(req, res) {
  console.log('Server getNote(req): req.params.id: '+ req.params.id);
  const {id} = req.params;
  const note = await noteRepo.getNote(id);
  const { authorId, ...noteRest } = note;
  const { username } = await authorRepo.getAuthor(authorId);
  console.log('Server noteRepo.getNote(id): note.id='+ note.id);
  res.json({ note: {
      ...noteRest,
      author: username
    }
  });
}

async function retrieveOrCreateAuthor(username) {
  let author = await authorRepo.getAuthorByName(username);
  if (author === null) {
    author = await authorRepo.createAuthor({
      username
    })
  }

  return author
}

async function postNote(req, res) {
  console.log('Server postNote(req)');
  const {body} = req;
  const {title, content, author, lang, isLive, category} = body;


  console.log({title, content, author, lang, isLive, category})


  try {
    const noteAuthor = await retrieveOrCreateAuthor(author);

    const note = await noteRepo.createNote({
      title,
      content,
      lang,
      isLive,
      category,
      authorId: noteAuthor.id
    })

    res
      .status(200)
      .json({
        note
      })
  } catch (e) {
    console.error(e);
    res.status(500).json({error: "Something went wrong"})
  }
}

async function putNote(req, res) {
  const {body} = req;
  const {id, title, content, author, lang, isLive, category} = body;

  console.log('Server putNote(req): req.body.id: '+ req.body.id);
  //console.log('Server getNote: note.id '+ note.id);


  try {
  const noteAuthor = await retrieveOrCreateAuthor(author);
  const note = await noteRepo.updateNote(id, {
    title,
    content,
    lang,
    isLive,
    category,
    authorId: noteAuthor.id
  })

  res
    .status(200)
    .json({
      note
    })
  } catch (e) {
    console.error(e);
    res.status(500).json({error: "Something went wrong"})
  }
}

async function deleteNote(req, res) {
  const {body} = req;
  const {id} = body;

  try {
    await noteRepo.deleteNote(id)

    res
      .status(200).send()
  } catch (e) {
    console.error(e);
    res.status(500).json({error: "Something went wrong"})
  }
}

module.exports = {
  getNotes,
  getNote,
  postNote,
  putNote,
  deleteNote,
}