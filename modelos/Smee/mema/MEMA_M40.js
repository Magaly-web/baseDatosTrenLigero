
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM40Schema = new Schema({

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

     //Iluminacion para letrero de ruta M1
     m1b40wv: String,
     m1b40wl: String,
     m1b40wf: String,

     m1lt8v: String,
     m1lt8l: String,
     m1lt8f: String,

     m1t8iv: String,
     m1t8il: String,
     m1t8if: String,

     m1t8dv: String,
     m1t8dl: String,
     m1t8df: String,

     m1bt4v: String,
     m1bt4l: String,
     m1bt4f: String,

     m1fuv: String,
     m1ful: String,
     m1fuf: String,

     m1pv: String,
     m1pl: String,
     m1pf: String,

     m1terv: String,
     m1terl: String,
     m1terf: String,

     //Iluminacion para letrero de ruta M2

     m2b40wv: String,
     m2b40wl: String,
     m2b40wf: String,

     m2lt8v: String,
     m2lt8l: String,
     m2lt8f: String,

     m2t8iv: String,
     m2t8il: String,
     m2t8if: String,

     m2t8dv: String,
     m2t8dl: String,
     m2t8df: String,

     m2bt4v: String,
     m2bt4l: String,
     m2bt4f: String,

     m2fuv: String,
     m2ful: String,
     m2fuf: String,

     m2pv: String,
     m2pl: String,
     m2pf: String,

     m2terv: String,
     m2terl: String,
     m2terf: String,

     obs2: String,
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
   
   module.exports = mongoose.model('memaM40', memaM40Schema);
   
   