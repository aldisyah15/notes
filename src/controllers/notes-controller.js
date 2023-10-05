import addService from '../service/notes-service.js';
const addNotes = async (req, res, next) => {
    try {
        const result = await addService.addNotes(req.body)
        res.status(200).json({
            data: result
        })
    } catch (e) {
        next(e)
    }
}

export default{
    addNotes
}