
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC07Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },


    //actividad
    contenedorSop: Boolean,
    contenedorLimp: Boolean,
    contenedorRev: Boolean,

    ducSop: Boolean,
    ducLimp: Boolean,
    ducRev: Boolean,

    filSop: Boolean,
    filLimp: Boolean,
    filRev: Boolean,
    
    disSop: Boolean,
    disLimp: Boolean,
    disRev: Boolean,
    
    mvSop: Boolean,
    mvLimp: Boolean,
    mvRev: Boolean,
    
    conexSop: Boolean,
    conexLim: Boolean,
    conexRev: Boolean,


//tapCaja
    señaSop: Boolean,
    señaLimp: Boolean,
    señaRev: Boolean,

    pestSop: Boolean,
    pestLimp: Boolean,
    pestREv: Boolean,

    lamSop:Boolean,
    lamLimp: Boolean,
    lamRev: Boolean,

    selSop: Boolean,
    selLimp: Boolean,
    selRev: Boolean,


// cedtTe90
    a_10Sop: Boolean,
    a_10Limp: Boolean,
    a_10Rev: Boolean,
    a_10Serie: String,

    a_20Sop: Boolean,
    a_20Limp: Boolean,
    a_20Rev: Boolean,
    a_20Serie: String,

    a_30Sop: Boolean,
    a_30Limp: Boolean,
    a_30Rev: Boolean,
    a_30Serie: String,


// cedtTe95
    rfddmSop: Boolean,
    rfddmLimp: Boolean,
    rfddmRev: Boolean,

    rpdadvSop: Boolean,
    rpdadvLimp: Boolean,
    rpdadvRev: Boolean,


//epuTe06
    indSop: Boolean,
    indLimp: Boolean,
    indRev: Boolean,
    
    ctfSop: Boolean,
    ctfLimp: Boolean,
    ctfRev: Boolean,

    ctvSop: Boolean,
    ctvLimp: Boolean,
    ctvRev: Boolean,

    
    ctpLimp: Boolean,
    ctpRev: Boolean,
    
    catpSop: Boolean,
    catpLimp: Boolean,
    catpRev: Boolean,
    
    observaciones: String,

    //materialUtilizado

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

    ocumentFormCurrentState: {
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

module.exports =mongoose.model('memeC07', memeC07Schema);