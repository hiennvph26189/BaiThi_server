import db from "../models/users"

let handleGetAllProducts = ()=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let arrProducts =await db.spModel.find()
            resolve({
                errCode: 0,
                arrProducts: arrProducts
            })
      
         resolve(res);
 
        } catch (error) {
             reject(error);
        }
         
         
     }) 
}

module.exports = {
    handleGetAllProducts:handleGetAllProducts
}