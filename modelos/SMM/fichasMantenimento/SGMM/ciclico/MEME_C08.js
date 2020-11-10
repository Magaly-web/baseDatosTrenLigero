

const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC08Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

        
        //actividadExt
            ceaSop: Boolean,
            ceaLimp: Boolean,
            ceaRev: Boolean,

            avSop: Boolean,
            avLimp: Boolean,
            avRev: Boolean,

            tlSop: Boolean,
            tlLimp: Boolean,
            tlRev: Boolean,

            tisSop: Boolean,
            tisLimp: Boolean,
            tidRev: Boolean,
        

        //actividadInt
            spLimp: Boolean,
            spRev: Boolean,
            
            ttLimp: Boolean,
            ttRev: Boolean,

            ttaLimp: Boolean,
            ttaRev: Boolean,
        

        //elecInter
            cabSop: Boolean,
            cabLimp: Boolean,
            
            tcSop: Boolean,
            tcLimp: Boolean,
            
            celeronSop: Boolean,
            celeronLimp: Boolean,
            
            a01a02Sop: Boolean,
            a01a02Limp: Boolean,

            r11Sop: Boolean,
            r11Limp: Boolean,
            r11Med: Boolean,
        

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

module.exports =mongoose.model('memeC08', memeC08Schema);