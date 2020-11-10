
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM33Schema = new Schema({

    trainModel: { type: String, required: true },//tren programado
    kilometraje: { type: Number },
    
    date_inicio: { type: String },
    date_termino: { type: String },
    
    dateultmant: { type: String },
    datepromant: { type: String },

    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    obs1: String,

     //----------------------------
     //Motoventilador cap
     tef: String,
     tl: String,
     tpi: String,
     taj: String,

     pvef: String,
     pvl: String,
     pvpi: String,
     pvaj: String,

     baef: String,
     bal: String,
     bapi: String,
     baaj: String,

     toef: String,
     tol: String,
     topi: String,
     toaj: String,

     cmef: String,
     cml: String,
     cmpi: String,
     cmaj: String,

     eef: String,
     el: String,
     epi: String,
     eaj: String,

     ref: String,
     rl: String,
     rpi: String,
     raj: String,

     roef: String,
     rol: String,
     ropi: String,
     roaj: String,

     vef: String,
     vl: String,
     vpi: String,
     vaj: String,

     taef: String,
     tal: String,
     tapi: String,
     taaj: String,

     ttef: String,
     ttl: String,
     ttpi: String,
     ttaj: String,

     ccef: String,
     ccl: String,
     ccpi: String,
     ccaj: String,

     bcef: String,
     bcl: String,
     bcpi: String,
     bcaj: String,
     
     uv: String,
     vw: String,
     wu: String,
     ut: String,
     vt: String,
     wt: String,
     ar: String,
     n: String,
     rpm: String,
     
     obs2: String,
     //Equipo
     equipolUtilizado: {
        numberOfEquipo: Number,    
        arr: [{
            numberOfequ: String,
            marca: String,
            inv: String,
        }]
        },
    

     //----------------------------
     //Materiales
     materialUtilizado: {
        numberOfMaterial: Number,    
        arr: [{
            _id: String,
            code: String,
            description: String,
            voucherNumber: String,
            quantity: String,
            unit: String
        }]
     },
     
     documentFormCurrentState: {
        approvalByWorker    : { id_worker: String, checked: Boolean },
        approvalBySupervisor: { id_worker: String, checked: Boolean },
        approvalByMannager  : { id_worker: String, checked: Boolean },
        loading: Boolean
     },
     historyFile: [
        {
            id_worker: String,
            workerName: String,
      
            editDate: Date,
            editValue: Number
        }
     ]
     
     });
     
     module.exports = mongoose.model('memaM33', memaM33Schema);
     
     