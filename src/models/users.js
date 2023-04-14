import db from "../config/db";
const spChema = new db.mongoose.Schema(
    {
        // định nghĩa cấu trúc của đối tượng sản phẩm
        tenSp: { type: String, required: true },
        anhSp: { type: String, required: true },
        loaiSp: { type: String, required: false },
        giaSp: { type: Number, required: false},
        status: {type: Number,required:true},
        createdAt: {type: Date,required:false},
        updatedAt: {type: Date,required:false},
    },
    {
        collection: 'users'
    }
);
let spModel = db.mongoose.model('spModel', spChema );
module.exports = {spModel };