import { validate } from "../validation/validation.js"
import { addNotesValidation } from "../validation/validation-notesApp.js"
import {prisma} from '../config/database.js';

const addNotes =  async (request) => {
    const notes = validate(addNotesValidation, request)

    console.info(notes)

 try {
    return prisma.user.create({
        data: notes,
        select: {
            id: true,
            title: true,
            description: true,
            completed: true
        }
    })
 } catch (error) {
    console.info(`erronya ada disini bro.. ${error}`)
 }
}

export default{
    addNotes
}