const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM18Schema = new Schema({

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

     //Cofre uef
     uefv: String,
     uefl: String,
     uefpr: String,
     uefpi: String,

     crv: String,
     crl: String,
     crpr: String,
     crpi: String,

     tfv: String,
     tfl: String,
     tfpr: String,
     tfpi: String,

     tpv: String,
     tpl: String,
     tppr: String,
     tppi: String,

     tsv: String,
     tsl: String,
     tspr: String,
     tspi: String,

     plv: String,
     pll: String,
     plpr: String,
     plpi: String,

     biv: String,
     bil: String,
     bipr: String,
     bipi: String,

     pev: String,
     pel: String,
     pepr: String,
     pepi: String,

     tofv: String,
     tofl: String,
     tofpr: String,
     tofpi: String,

     hev: String,
     hel: String,
     hepr: String,
     hepi: String,

     obs2: String,

     //Relevadores uef
     rmvl: String,
     rmvd: String,
     rmvr: String,
     rmvf: String,

     rafl: String,
     rafd: String,
     rafr: String,
     raff: String,

     rcml: String,
     rcmd: String,
     rcmr: String,
     rcmf: String,

     r2kl: String,
     r2kd: String,
     r2kr: String,
     r2kf: String,

     //Electronica uef
     rackl: String,
     rackiv: String,
     rackt: String,
     rackte: String,

     epal: String,
     epaiv: String,
     epat: String,
     epate: String,

     ss1l: String,
     ss1iv: String,
     ss1t: String,
     ss1te: String,

     svl: String,
     sviv: String,
     svt: String,
     svte: String,

     adl: String,
     adiv: String,
     adt: String,
     adte: String,

     ael: String,
     aeiv: String,
     aet: String,
     aete: String,

     dil: String,
     diiv: String,
     dit: String,
     dite: String,

     cpl: String,
     cpiv: String,
     cpt: String,
     cpte: String,

     getl: String,
     getiv: String,
     gett: String,
     gette: String,

     aal: String,
     aaiv: String,
     aat: String,
     aate: String,

     val: String,
     vaiv: String,
     vat: String,
     vate: String,

     va2l: String,
     va2iv: String,
     va2t: String,
     va2te: String,

     tl: String,
     tiv: String,
     tt: String,
     tte: String,

     //Modulos de conexion y cableado
     c64l: String,
     c64f: String,

     c65l: String,
     c65f: String,

     c66l: String,
     c66f: String,

     cuefl: String,
     cueff: String,

     obs3: String,
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
  
  module.exports = mongoose.model('memaM18', memaM18Schema);
  