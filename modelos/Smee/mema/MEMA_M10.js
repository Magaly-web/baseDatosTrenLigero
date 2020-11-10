
    const mongoose = require('mongoose');
    const {Schema} = mongoose;
    
    const memaM10Schema = new Schema({
    
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
    obs1: String,
    
     //----------------------------
     //Timpano M1
     rfev: String,
     rfel: String,
     rfer: String,
     rfef: String,

     rpev: String,
     rpel: String,
     rper: String,
     rpef: String,

     tfev: String,
     tfel: String,
     tfer: String,
     tfef: String,

     tmgv: String,
     tmgl: String,
     tmgr: String,
     tmgf: String,

     pspv: String,
     pspl: String,
     pspr: String,
     pspf: String,

     atv: String,
     atl: String,
     atr: String,
     atf: String,

     obs2: String,

     //Timpano M2
     cavv: String,
     cavl: String,
     cavr: String,
     cavf: String,

     rtsv: String,
     rtsl: String,
     rtsr: String,
     rtsf: String,

     alov: String,
     alol: String,
     alor: String,
     alof: String,

     tmg2v: String,
     tmg2l: String,
     tmg2r: String,
     tmg2f: String,

     tfe2v: String,
     tfe2l: String,
     tfe2r: String,
     tfe2f: String,

     at2v: String,
     at2l: String,
     at2r: String,
     at2f: String,

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
  
  module.exports = mongoose.model('memaM10', memaM10Schema);


