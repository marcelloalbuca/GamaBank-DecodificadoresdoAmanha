const status = (request, h)=>{
    return {
        now: Date.now(),
        message: "This is working"
    }
}
 
module.exports = {
    status
}
