
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC17Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

        //tablilla
            shn1r: Boolean,
            shn1l: Boolean,
            shn1a: Boolean,
            sha1o: String,

            sht1r: Boolean,
            sht1l: Boolean,
            sht1a: Boolean,
            sht1o: String,

            bm1r: Boolean,
            bm1l: Boolean,
            bm1a: Boolean,
            bm1o: String,

            sht2r: Boolean,
            sht2l: Boolean,
            sht2a: Boolean,
            sht2o: String,
    

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

module.exports =mongoose.model('memeC17', memeC17Schema);