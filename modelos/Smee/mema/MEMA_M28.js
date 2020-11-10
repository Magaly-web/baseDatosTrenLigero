
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM28Schema = new Schema({

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

     //Grupo de reveladores cofre 3
     rtr1l: String,
     rtr1d: String,
     rtr1r: String,
     rtr1f: String,

     rfrl: String,
     rfrd: String,
     rfrr: String,
     rfrf: String,

     rtr2l: String,
     rtr2d: String,
     rtr2r: String,
     rtr2f: String,

     rfr2l: String,
     rfr2d: String,
     rfr2r: String,
     rfr2f: String,
    
     //Borneros de conexion y cableado
     c29v: String,
     c29l: String,
     c29f: String,

     c30v: String,
     c30l: String,
     c30f: String,

     c31v: String,
     c31l: String,
     c31f: String,

     c32v: String,
     c32l: String,
     c32f: String,

     tcv: String,
     tcl: String,
     tcf: String,

     ac3v: String,
     ac3l: String,
     ac3f: String,

     //Grupo de fusibles GFB3

     pol: String,
     por: String,

     maf: String,
     mal: String,
     mar: String,

     upsf: String,
     upsl: String,
     upsr: String,

     gstff: String,
     gstfl: String,
     gstfr: String,

     mpf: String,
     mpl: String,
     mpr: String,

     ccaf: String,
     ccal: String,
     ccar: String,

     mf: String,
     ml: String,
     mr: String,

     aemf: String,
     aeml: String,
     aemr: String,

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
     
     module.exports = mongoose.model('memaM28', memaM28Schema);
     
     