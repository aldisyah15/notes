import Joi from "joi";

const addNotesValidation = Joi.object({
    title: Joi.string().max(100).optional(),
    description: Joi.string().max(100).optional(),
    completed: Joi.boolean().optional()
})

export {
    addNotesValidation
}