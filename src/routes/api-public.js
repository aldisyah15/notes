import express from 'express';
import controlller_notes from '../controllers/notes-controller.js';

const publicRouter = new express.Router()
publicRouter.post("/tasks", controlller_notes.addNotes)

export {
    publicRouter
}