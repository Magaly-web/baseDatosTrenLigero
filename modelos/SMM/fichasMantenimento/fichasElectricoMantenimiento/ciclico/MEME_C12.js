
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC12Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

        //tornillo
            trev: Boolean,
            tlimp: Boolean,
            tlubri: Boolean,
            tcamb: Boolean,
        

        //tapas
            tarev: Boolean,
            talimp: Boolean,
            talubri: Boolean,
            tacamb: Boolean,
        

        //soporte
            sfrev: Boolean,
            sflimp: Boolean,
            sflubri: Boolean,
            sfcamb: Boolean,
        

        //palanca
            prev: Boolean,
            plimp: Boolean,
            plubri: Boolean,
            pcamb: Boolean,
        
        //seguros
            srev: Boolean,
            slimp: Boolean,
            slubri: Boolean,
            scamb: Boolean,
        
        //resorte
            rerev: Boolean,
            relimp: Boolean,
            relubri: Boolean,
            recamb: Boolean,
        

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

module.exports =mongoose.model('memeC12', memeC12Schema);

              