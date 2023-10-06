import { validate } from "../validation/validation.js"
import { addNotesValidation } from "../validation/validation-notesApp.js"
import {prisma} from '../config/database.js';

const addNotes =  async (request) => {
    const notes = validate(addNotesValidation, request)

    console.info(notes)

    return prisma.user.create({
        data: notes,
        select: {
            id: true,
            title: true,
            description: true,
            completed: true
        }
    })
}

export default{
    addNotes
}