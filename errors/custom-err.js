class CustomErr extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode 
    }
} 
const createCustomErr = (msg , statusCode) =>{
    return new CustomErr(msg,statusCode)
}
module.exports = {createCustomErr , CustomErr}