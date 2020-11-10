
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM03Schema = new Schema({

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

     //Arnes de sobre techo
     tsm1v: String,
     tsm1l: String,
     tsm1t: String,
     tsm1f: String,
     tsm1ra: String,
 
     tsm2v: String,
     tsm2l: String,
     tsm2t: String,
     tsm2f: String,
     tsm2ra: String,
 
     pataprv: String,
     pataprl: String,
     pataprt: String,
     pataprf: String,
     pataprra: String,
 
     patcfv : String,
     patcfl : String,
     patcft : String,
     patcff : String,
     patcfra : String,
 
     ceav : String,
     ceal : String,
     ceat : String,
     ceaf : String,
     ceara : String,
 
     patdev : String,
     patdel : String,
     patdet : String,
     patdef : String,
     patdera : String,
 
     capv : String,
     capl : String,
     capt : String,
     capf : String,
     capra : String,
 
     atm1v : String,
     atm1l : String,
     atm1t : String,
     atm1f : String,
     atm1ra : String,
 
     ac3v : String,
     ac3l : String,
     ac3t : String,
     ac3f : String,
     ac3ra : String,
 
     saprv : String,
     saprl : String,
     saprt : String,
     saprf : String,
     saprra : String,
 
     sdev : String,
     sdel : String,
     sdet : String,
     sdef : String,
     sdera : String,
 
     torv : String,
     torl : String,
     tort : String,
     torf : String,
     torra : String,
 
     bdfv : String,
     bdfl : String,
     bdft : String,
     bdff : String,
     bdfra : String,
     
     obs2: String,

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

module.exports = mongoose.model('memaM03', memaM03Schema);


    