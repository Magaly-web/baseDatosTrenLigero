const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC05Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

            cbl: Boolean,
            cbr: Boolean,
            cba: Boolean,
            cblu: Boolean,

            cl: Boolean,
            cr: Boolean,
            ca: Boolean,
            clu: Boolean,

            col: Boolean,
            cor: Boolean,
            colu: Boolean,

            rl: Boolean,
            rr: Boolean,
            rlu: Boolean,

            bl: Boolean,
            br: Boolean,
            ba: Boolean,
        

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

module.exports =mongoose.model('memeC05', memeC05Schema);