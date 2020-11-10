
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM09Schema = new Schema({

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
     //Techo de cabina M1
     pol: String,
     pofi: String,
     por: String,
     pof: String,

     cfl: String,
     cffi: String,
     cfr: String,
     cff: String,
     
     fl: String,
     ffi: String,
     fr: String,
     ff: String,

     mlol: String,
     mlofi: String,
     mlor: String,
     mlof: String,

     mol: String,
     mofi: String,
     mor: String,
     mof: String,

     tfl: String,
     tffi: String,
     tfr: String,
     tff: String,

     //Acabados a rejillas de ventilacion M1

     rvp: String,
     rvgp: String,
     rvt: String,

     rcalizqp: String,
     rcalizqgp: String,
     rcalizqt: String,

     rcalderp: String,
     rcaldergp: String,
     rcaldert: String,

     obs2: String,

     //Techo de cabina M2
     m2pol: String,
     m2pofi: String,
     m2por: String,
     m2pof: String,

     m2cfl: String,
     m2cffi: String,
     m2cfr: String,
     m2cff: String,
     
     m2fl: String,
     m2ffi: String,
     m2fr: String,
     m2ff: String,

     m2mlol: String,
     m2mlofi: String,
     m2mlor: String,
     m2mlof: String,

     m2mol: String,
     m2mofi: String,
     m2mor: String,
     m2mof: String,

     m2tfl: String,
     m2tffi: String,
     m2tfr: String,
     m2tff: String,

     //Acabados a rejillas de ventilacion M2

     m2rvp: String,
     m2rvgp: String,
     m2rvt: String,

     m2rcalizqp: String,
     m2rcalizqgp: String,
     m2rcalizqt: String,

     m2rcalderp: String,
     m2rcaldergp: String,
     m2rcaldert: String,

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
  
  module.exports = mongoose.model('memaM09', memaM09Schema);

