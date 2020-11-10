const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC04Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_workerM1: {type: String, required: true},
    id_workerM2: {type: String, required: true},
    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

        //Ventiladores m2
            m2_1: Boolean,
            m2_2: Boolean,
            m2_3: Boolean,
            m2_4: Boolean,
            m2_5: Boolean,
            m2_6: Boolean,
            m2_7: Boolean,
      
            //Ventiladores m1
            m1_1: Boolean,
            m1_2: Boolean,
            m1_3: Boolean,
            m1_4: Boolean,
            m1_5: Boolean,
            m1_6: Boolean,
            m1_7: Boolean,

            //Mantenimiento a ventiladores
            ventiRevision: Boolean,
            ventiLimp: Boolean,
            ventiObserva: String,

            motorVentiladorRevision: Boolean,
            motorVentiladorLimp: Boolean,
            motorVentiladorObserva: String,

            conexionesElectriRevision: Boolean,
            conexionesElectriLimp: Boolean,
            conexionesElectriObserva: String,

            tapaRevision: Boolean,
            tapaLimp: Boolean,
            tapaObserva: String,

            pestillosRevision: Boolean,
            pestillosLimp: Boolean,
            pestillosLubrica: Boolean,
            pestillosObserva: String,

            ductosRevision: Boolean,
            ductosLimp: Boolean,
            ductosObserva: String,

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

module.exports =mongoose.model('memeC04', memeC04Schema);
