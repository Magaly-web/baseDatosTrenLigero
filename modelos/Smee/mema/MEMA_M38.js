
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM38Schema = new Schema({

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
     //Fanales principales y auxiliares M1
     m1fdr: String,
     m1fdl: String,
     m1fdef: String,
     
     m1cdr: String,
     m1cdl: String,
     m1cdpp: String,
     m1cdpi: String,
     m1cdef: String,

     m1bdr: String,
     m1bdl: String,
     m1bdpp: String,
     m1bdpi: String,
     m1bdef: String,

     m1fir: String,
     m1fil: String,
     m1fief: String,
     
     m1cir: String,
     m1cil: String,
     m1cipp: String,
     m1cipi: String,
     m1cief: String,

     m1bir: String,
     m1bil: String,
     m1bipp: String,
     m1bipi: String,
     m1bief: String,

     m1ajr: String,
     m1ajl: String,
     m1ajef: String,

     m1lhr: String,
     m1lhl: String,
     m1lhef: String,

     m1fvir: String,
     m1fvil: String,
     m1fvipp: String,
     m1fvipi: String,
     m1fvief: String,

     m1fvdr: String,
     m1fvdl: String,
     m1fvdpp: String,
     m1fvdpi: String,
     m1fvdef: String,

     m1tfr: String,
     m1tfl: String,
     m1tfef: String,

     obs2: String,

     //Fanales principales y auxiliares M2
     m2fdr: String,
     m2fdl: String,
     m2fdef: String,
     
     m2cdr: String,
     m2cdl: String,
     m2cdpp: String,
     m2cdpi: String,
     m2cdef: String,

     m2bdr: String,
     m2bdl: String,
     m2bdpp: String,
     m2bdpi: String,
     m2bdef: String,

     m2fir: String,
     m2fil: String,
     m2fief: String,
     
     m2cir: String,
     m2cil: String,
     m2cipp: String,
     m2cipi: String,
     m2cief: String,

     m2bir: String,
     m2bil: String,
     m2bipp: String,
     m2bipi: String,
     m2bief: String,

     m2ajr: String,
     m2ajl: String,
     m2ajef: String,

     m2lhr: String,
     m2lhl: String,
     m2lhef: String,

     m2fvir: String,
     m2fvil: String,
     m2fvipp: String,
     m2fvipi: String,
     m2fvief: String,

     m2fvdr: String,
     m2fvdl: String,
     m2fvdpp: String,
     m2fvdpi: String,
     m2fvdef: String,

     m2tfr: String,
     m2tfl: String,
     m2tfef: String,

     obs3: String,

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
   
   module.exports = mongoose.model('memaM38', memaM38Schema);
   
   