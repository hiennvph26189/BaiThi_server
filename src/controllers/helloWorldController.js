import helloWorldServices from "../services/helloWorldServices";
let getHomePage = async (req, res) => {
    
  
    try {
        let data = await helloWorldServices.handleGetAllProducts();
        if(data.errCode === 0){
            return res.render('helloWolld.ejs',{data: data.arrProducts});
        }
       
     } catch (error) {
         console.log("Lỗi phân quyền",error)
        return res.status(200).json({
             errCode: -1,
             errMessage: 'Không kết nối được với sever'
        })
     }
   
};
module.exports = {
    getHomePage:getHomePage
}