
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM31Schema = new Schema({

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

     da1v: String,
     da1l: String,
     da1r: String,

     bm1v: String,
     bm1l: String,
     bm1r: String,

     m24v1v: String,
     m24v1l: String,
     m24v1r: String,

     ma1v: String,
     ma1l: String,
     ma1r: String,

     tf1v: String,
     tf1l: String,
     tf1r: String,

     //M2

     da2v: String,
     da2l: String,
     da2r: String,

     bm2v: String,
     bm2l: String,
     bm2r: String,

     m24v2v: String,
     m24v2l: String,
     m24v2r: String,

     ma2v: String,
     ma2l: String,
     ma2r: String,

     tf2v: String,
     tf2l: String,
     tf2r: String,

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
   
   module.exports = mongoose.model('memaM31', memaM31Schema);
   
   