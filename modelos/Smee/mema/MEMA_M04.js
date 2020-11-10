
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM04Schema = new Schema({

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

    //Caja de fusibles

    //componentes para caja de fusibles
    afv : String,
    afl : String,
    aff : String,

    iav : String,
    ial : String,
    iaf : String,

    bcv : String,
    bcl : String,
    bcf : String,

    // Caja de fusibles
    ccv : String,
    ccp : String,
    ccf : String,

    tcv : String,
    tcp: String,
    tcf : String,

    baiv : String,
    baip : String,
    baif : String,

    spv : String,
    spp : String,
    spf : String,

    tfv : String,
    tfp : String,
    tff : String,

    hv : String,
    hp : String,
    hf : String,

    //fusibles Cea
    ceafa : String,
    ceal : String,
    cear: String,

    obs2:String,
    
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
    
    module.exports = mongoose.model('memaM04', memaM04Schema);
