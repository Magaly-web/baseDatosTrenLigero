
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC15Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },
        
        s16tr: Boolean,
        s16ts: Boolean,
        s16tl: Boolean,
        s16to: String,

        s16cr: Boolean,
        s16cs: Boolean,
        s16cl: Boolean,
        s16co: String,

        s16cor: Boolean,
        s16cos: Boolean,
        s16col: Boolean,
        s16coo: String,

        uefcr: Boolean,
        uefcs: Boolean,
        uefcl: Boolean,
        uefco: String,

        ueftr: Boolean,
        uefts: Boolean,
        ueftl: Boolean,
        uefto: String,
       
        g011: String,
        g027: String,

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

module.exports =mongoose.model('memeC15', memeC15Schema);