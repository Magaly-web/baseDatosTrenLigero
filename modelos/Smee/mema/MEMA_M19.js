
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM19Schema = new Schema({

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

     //Contacto M1 derecho
     dcdpv: String,
     dcdpl: String,
     dcdpf: String,

     dtv: String,
     dtl: String,
     dtf: String,

     dtcv: String,
     dtcl: String,
     dtcf: String,

     dtov: String,
     dtol: String,
     dtof: String,

     //Contacto M1 izquierdo
     icdpv: String,
     icdpl: String,
     icdpf: String,

     itv: String,
     itl: String,
     itf: String,

     itcv: String,
     itcl: String,
     itcf: String,

     itov: String,
     itol: String,
     itof: String,
     //Contacto M2 derecho

     dcdp2v: String,
     dcdp2l: String,
     dcdp2f: String,

     dt2v: String,
     dt2l: String,
     dt2f: String,

     dtc2v: String,
     dtc2l: String,
     dtc2f: String,

     dto2v: String,
     dto2l: String,
     dto2f: String,

     //Contacto cabina M1

     cacdpv: String,
     cacdpl: String,
     cacdpf: String,

     catv: String,
     catl: String,
     catf: String,

     catcv: String,
     catcl: String,
     catcf: String,

     catov: String,
     catol: String,
     catof: String,
     
    //Contacto cabina M2

    ca2cdpv: String,
    ca2cdpl: String,
    ca2cdpf: String,

    ca2tv: String,
    ca2tl: String,
    ca2tf: String,

    ca2tcv: String,
    ca2tcl: String,
    ca2tcf: String,

    ca2tov: String,
    ca2tol: String,
    ca2tof: String,
    
    obs2: String,
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
  
  module.exports = mongoose.model('memaM19', memaM19Schema);
  