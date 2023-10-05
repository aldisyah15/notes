const validate = (schema, request)=>{
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    })
    if(result.error) {
        const errors = result.error.details.map(detail => detail.massage)
        return{
            statusCode : 400,
            message: errors.join(', ')
        }
    }else{
        return{
            hasil: result.value
        }
    }
    
}

export {
    validate
}