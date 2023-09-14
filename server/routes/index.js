const express = require('express');
const noteRouter = express.Router();
const noteController = require('../controllers/note.controller');
const skakRouter = express.Router();
const skakController = require('../controllers/skak.controller');

noteRouter.get('/', noteController.getNotes);
noteRouter.get('/:id', noteController.getNote);
noteRouter.post('/', noteController.postNote);
noteRouter.put('/', noteController.putNote);
noteRouter.delete('/', noteController.deleteNote);

skakRouter.get('/', skakController.getSkaks);
skakRouter.get('/:id', skakController.getSkak);
skakRouter.post('/', skakController.postSkak);
skakRouter.put('/', skakController.putSkak);
skakRouter.delete('/', skakController.deleteSkak);

const routes = app => {
  app.use('/note', noteRouter);
  app.use('/skak', skakRouter);
};

module.exports = routes;