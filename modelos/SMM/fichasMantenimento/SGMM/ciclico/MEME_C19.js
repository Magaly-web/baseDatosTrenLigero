
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC19Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },
        //mdpa
            oper1: Boolean,

            oper2: Boolean,
            res2: String,

            oper3: Boolean,
            cons3: Boolean,

            oper4: Boolean,
            cons4: Boolean,

            cons5: Boolean,
            res5: String,

            cons6: Boolean,
            res6: String,

            cons7: Boolean,
            res7: String,

            cons8: Boolean,
            res8: String,

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

module.exports =mongoose.model('memeC19', memeC19Schema);