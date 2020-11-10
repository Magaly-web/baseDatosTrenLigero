
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC141Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },
        //Para TE_06 y TE_12
        //bcbs
            m1car: Boolean,
            m1cal:Boolean,
            rcar: Boolean,
            rcal: Boolean,
            m2car: Boolean,
            m2cal: Boolean,
            obsca: String,

            m1zar: Boolean,
            m1zal:Boolean,
            rzar: Boolean,
            rzal: Boolean,
            m2zar: Boolean,
            m2zal: Boolean,
            obsza: String,
            
            m1tor: Boolean,
            m1tol:Boolean,
            rtor: Boolean,
            rtol: Boolean,
            m2tor: Boolean,
            m2tol: Boolean,
            obsto: String,

            m1cbr: Boolean,
            m1cbl:Boolean,
            rcbr: Boolean,
            rcbl: Boolean,
            m2cbr: Boolean,
            m2cbl: Boolean,
            obscb: String,

            m1scr: Boolean,
            m1scl:Boolean,
            rscr: Boolean,
            rscl: Boolean,
            m2scr: Boolean,
            m2scl: Boolean,
            obssc: String,

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

module.exports =mongoose.model('memeC141', memeC141Schema);
