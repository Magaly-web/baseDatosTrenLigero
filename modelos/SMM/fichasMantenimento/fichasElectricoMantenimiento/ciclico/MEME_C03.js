
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC03Schema = new Schema({
    
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

        luminariasM1:{
            lLimp:Boolean,
            lF:Boolean,
            lR: Boolean,
            lC: Boolean,
            lB: Boolean,
            lOb: String,
            
            sL:Boolean,
            sF:Boolean,
            sC: Boolean,
            sB: Boolean,
            sOb: String,

            tC: Boolean,
            tB: Boolean,
            tOb: String,
            
            laL: Boolean,
            laC: Boolean,
            laB: Boolean,
            laObs: String,

            bL: Boolean,
            bC: Boolean,
            bB: Boolean,
            bOb: String,

            cL: Boolean,
            cC: Boolean,
            cB: Boolean,
            cOb: String,
        },

        luminariasM2:{
            lLm2:Boolean,
            lFm2:Boolean,
            lRm2: Boolean,
            lCm2: Boolean,
            lBm2: Boolean,
            lObm2: String,
            
            sLm2:Boolean,
            sFm2:Boolean,
            sCm2: Boolean,
            sBm2: Boolean,
            sObm2: String,

            tCm2: Boolean,
            tBm2: Boolean,
            tObm2: String,
            
            laLm2: Boolean,
            laCm2: Boolean,
            laBm2: Boolean,
            laObsm2: String,

            bLm2: Boolean,
            bCm2: Boolean,
            bBm2: Boolean,
            bObm2: String,

            cLm2: Boolean,
            cCm2: Boolean,
            cBm2: Boolean,
            cObm2: String,
        },

        m2:{
            m2_1: Boolean,
            m2_2: Boolean,
            m2_3: Boolean,
            m2_4: Boolean,
            m2_5: Boolean,
            m2_6: Boolean,
            m2_7: Boolean,
            m2_8: Boolean,
            m2_9: Boolean,

            m2_1_1: Boolean,
            m2_1_2: Boolean,
            m2_1_3: Boolean,
            m2_1_4: Boolean,
            m2_1_5: Boolean,
            m2_1_6: Boolean,
            m2_1_7: Boolean,
            m2_1_8: Boolean,
            m2_1_9: Boolean,
        },

        m1:{
            m1_1: Boolean,
            m1_2: Boolean,
            m1_3: Boolean,
            m1_4: Boolean,
            m1_5: Boolean,
            m1_6: Boolean,
            m1_7: Boolean,
            m1_8: Boolean,
            m1_9: Boolean,

            m1_1_1: Boolean,
            m1_1_2: Boolean,
            m1_1_3: Boolean,
            m1_1_4: Boolean,
            m1_1_5: Boolean,
            m1_1_6: Boolean,
            m1_1_7: Boolean,
            m1_1_8: Boolean,
            m1_1_9: Boolean,
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

module.exports =mongoose.model('memeC03', memeC03Schema);