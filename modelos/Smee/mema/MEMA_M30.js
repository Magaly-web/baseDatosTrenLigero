
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM30Schema = new Schema({

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
     //M1

     cal: String,
     car: String,
     caf: String,

     cnl: String,
     cnr: String,
     cnf: String,

     ccl: String,
     ccr: String,
     ccf: String,

     cn2l: String,
     cn2r: String,
     cn2f: String,

     cpl: String,
     cpr: String,
     cpf: String,

     capl: String,
     capr: String,
     capf: String,
     
     bpdtl: String,
     bpdtr: String,
     bpdtf: String,

     bfcl: String,
     bfcr: String,
     bfcf: String,

     bcel: String,
     bcer: String,
     bcef: String,

     bcal: String,
     bcar: String,
     bcaf: String,

     he: String,

     obs2: String,

     //M2
     he2: String,

     ca2l: String,
     ca2r: String,
     ca2f: String,

     cn22l: String,
     cn22r: String,
     cn22f: String,

     cc2l: String,
     cc2r: String,
     cc2f: String,

     bpdt2l: String,
     bpdt2r: String,
     bpdt2f: String,

     bfc2l: String,
     bfc2r: String,
     bfc2f: String,

     bce2l: String,
     bce2r: String,
     bce2f: String,

     bca2l: String,
     bca2r: String,
     bca2f: String,
    
    obs3: String,
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
  
  module.exports = mongoose.model('memaM30', memaM30Schema);
  
  