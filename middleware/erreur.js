const { CustomErr }=require("../errors/custom-err")
const errorhandler = (err,req,res,next) =>{
    if(err instanceof CustomErr){
      res.status(err.statusCode).json({ msg: err.message});
    }
    res.status(500).json( {msg: "Somthing wrong , try later"} );
}
module.exports = errorhandler