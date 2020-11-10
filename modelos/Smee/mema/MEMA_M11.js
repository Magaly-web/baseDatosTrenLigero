
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM11Schema = new Schema({

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

     //Arnes salon pasajeros M1 derecho
     m1aldv: String,
     m1aldl: String,
     m1aldf: String,
     m1aldt: String,
     m1aldra: String,

     m1avspdv: String,
     m1avspdl: String,
     m1avspdf: String,
     m1avspdt: String,
     m1avspdra: String,

     m1kfsdv: String,
     m1kfsdl: String,
     m1kfsdf: String,
     m1kfsdt: String,
     m1kfsdra: String,

     m1acsdv: String,
     m1acsdl: String,
     m1acsdf: String,
     m1acsdt: String,
     m1acsdra: String,

     m1aepdv: String,
     m1aepdl: String,
     m1aepdf: String,
     m1aepdt: String,
     m1aepdra: String,

     m1bkpdv: String,
     m1bkpdl: String,
     m1bkpdf: String,
     m1bkpdt: String,
     m1bkpdra: String,

     m1acdv: String,
     m1acdl: String,
     m1acdf: String,
     m1acdt: String,
     m1acdra: String,

     m1cadv: String,
     m1cadl: String,
     m1cadf: String,
     m1cadt: String,
     m1cadra: String,

     //Arnes salon pasajeros M1 izquierdo
     
     m1aliv: String,
     m1alil: String,
     m1alif: String,
     m1alit: String,
     m1alira: String,

     m1avspiv: String,
     m1avspil: String,
     m1avspif: String,
     m1avspit: String,
     m1avspira: String,

     m1kfsiv: String,
     m1kfsil: String,
     m1kfsif: String,
     m1kfsit: String,
     m1kfsira: String,

     m1acsiv: String,
     m1acsil: String,
     m1acsif: String,
     m1acsit: String,
     m1acsira: String,

     m1aepiv: String,
     m1aepil: String,
     m1aepif: String,
     m1aepit: String,
     m1aepira: String,

     m1bkpiv: String,
     m1bkpil: String,
     m1bkpif: String,
     m1bkpit: String,
     m1bkpira: String,

     m1aciv: String,
     m1acil: String,
     m1acif: String,
     m1acit: String,
     m1acira: String,

     m1caiv: String,
     m1cail: String,
     m1caif: String,
     m1cait: String,
     m1caira: String,

     obs2: String,

     //Arnes salon pasajeros M2 derecho
     m2aldv: String,
     m2aldl: String,
     m2aldf: String,
     m2aldt: String,
     m2aldra: String,

     m2avspdv: String,
     m2avspdl: String,
     m2avspdf: String,
     m2avspdt: String,
     m2avspdra: String,

     m2kfsdv: String,
     m2kfsdl: String,
     m2kfsdf: String,
     m2kfsdt: String,
     m2kfsdra: String,

     m2acsdv: String,
     m2acsdl: String,
     m2acsdf: String,
     m2acsdt: String,
     m2acsdra: String,

     m2aepdv: String,
     m2aepdl: String,
     m2aepdf: String,
     m2aepdt: String,
     m2aepdra: String,

     m2bkpdv: String,
     m2bkpdl: String,
     m2bkpdf: String,
     m2bkpdt: String,
     m2bkpdra: String,

     m2acdv: String,
     m2acdl: String,
     m2acdf: String,
     m2acdt: String,
     m2acdra: String,

     m2cadv: String,
     m2cadl: String,
     m2cadf: String,
     m2cadt: String,
     m2cadra: String,

     //Arnes salon pasajeros M2 izquierdo
     
     m2aliv: String,
     m2alil: String,
     m2alif: String,
     m2alit: String,
     m2alira: String,

     m2avspiv: String,
     m2avspil: String,
     m2avspif: String,
     m2avspit: String,
     m2avspira: String,

     m2kfsiv: String,
     m2kfsil: String,
     m2kfsif: String,
     m2kfsit: String,
     m2kfsira: String,

     m2acsiv: String,
     m2acsil: String,
     m2acsif: String,
     m2acsit: String,
     m2acsira: String,

     m2aepiv: String,
     m2aepil: String,
     m2aepif: String,
     m2aepit: String,
     m2aepira: String,

     m2bkpiv: String,
     m2bkpil: String,
     m2bkpif: String,
     m2bkpit: String,
     m2bkpira: String,

     m2aciv: String,
     m2acil: String,
     m2acif: String,
     m2acit: String,
     m2acira: String,

     m2caiv: String,
     m2cail: String,
     m2caif: String,
     m2cait: String,
     m2caira: String,

     obs3: String,
     //----------------------------

    equipolUtilizado: {
      numberOfEquipo: Number,    
      arr: [{
          numberOfequ: String,
          marca: String,
          inv: String,
      }]
      },
  
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
  
  module.exports = mongoose.model('memaM11', memaM11Schema);

