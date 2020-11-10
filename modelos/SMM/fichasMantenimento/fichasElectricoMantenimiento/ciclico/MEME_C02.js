
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memeC02Schema = new Schema({

    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

    //medidasDeCarbon
        m1ant: Number,
        m1post:Number,
        remolAnt: Number,
        remolPost: Number,
        m2ant: Number,
        m2post: Number,
    
    //cajaFrost
        m1AntLimp: Boolean,
        m1AntRev: Boolean,
        m1PostLimp: Boolean,
        m1PostRev: Boolean,

        remolAntLimp: Boolean,
        remolAntRev: Boolean,
        remolPostLimp: Boolean,
        remolPostRev: Boolean,

        m2AntLimp: Boolean,
        m2AntRev: Boolean,
        m2PostLimp: Boolean,
        m2PostRev: Boolean,

    observaciones: String,

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

module.exports = mongoose.model('memeC02', memeC02Schema);