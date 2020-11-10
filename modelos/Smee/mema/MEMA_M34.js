
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM34Schema = new Schema({

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
     iv1v: String,
     iv1l: String,
     iv1r: String,
     iv1f: String,

     cpv1v: String,
     cpv1l: String,
     cpv1r: String,
     cpv1f: String,

     te1v: String,
     te1l: String,
     te1r: String,
     te1f: String,

     tf1v: String,
     tf1l: String,
     tf1r: String,
     tf1f: String,

     //M2
     iv2v: String,
     iv2l: String,
     iv2r: String,
     iv2f: String,

     cpv2v: String,
     cpv2l: String,
     cpv2r: String,
     cpv2f: String,

     te2v: String,
     te2l: String,
     te2r: String,
     te2f: String,

     tf2v: String,
     tf2l: String,
     tf2r: String,
     tf2f: String,

     obs2: String,

     //Iman de Vehiculo

     br1v: String,
     br1l: String,
     br1f: String,

     ri1v: String,
     ri1l: String,
     ri1f: String,

     //Equipo de conmutacion

     br2v: String,
     br2l: String,
     br2f: String,

     ri2v: String,
     ri2l: String,
     ri2f: String,

     //Dispositivo de operacion

     br3v: String,
     br3l: String,
     br3f: String,

     ri3v: String,
     ri3l: String,
     ri3f: String,

     //Conmutador presintado de perturbaciones

     br4v: String,
     br4l: String,
     br4f: String,

     ri4v: String,
     ri4l: String,
     ri4f: String,

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
     
     module.exports = mongoose.model('memaM34', memaM34Schema);
     
     
