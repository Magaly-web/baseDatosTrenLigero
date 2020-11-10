
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC13Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },


        //Contactos principales
        
            pcpl: Boolean,
            pcpr: Boolean,
            pcpo: String,
            pccl: Boolean,
            pccr: Boolean,
            pcco: String,
            pcrfl: Boolean,
            pcrfr: Boolean,
            pcrfo: String,
            pctl: Boolean,
            pctr: Boolean,
            pcto: String,
    
        //Contactos Axiliares

            acpl: Boolean,
            acpr: Boolean,
            acpo: String,
            accl: Boolean,
            accr: Boolean,
            acco: String,
            acrfl: Boolean,
            acrfr: Boolean,
            acrfo: String,
            actl: Boolean,
            actr: Boolean,
            acto: String,
        
        //ctrl
            cmel: Boolean,
            cmer: Boolean,
            cmeo: String,
            radl: Boolean,
            radr: Boolean,
            rado: String,
            ratl: Boolean,
            ratr: Boolean,
            rato: String,
            cvtl: Boolean,
            cvtr: Boolean,
            cvto: String,
            cv1l: Boolean,
            cv1r: Boolean,
            cv1o: String,
            cv2l: Boolean,
            cv2r: Boolean,
            cv2o: String,
            cfsl: Boolean,
            cfsr: Boolean,
            cfso: String,
        
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

module.exports =mongoose.model('memeC13', memeC13Schema);

              