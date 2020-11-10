
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC16Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

        //motriz
            mcm1in: Boolean,
            baim1in: Boolean,
            bapm1in: Boolean,
            tmgm1in: Boolean,
            tfem1in: Boolean,
            palm1in: Boolean,
            alom1in: Boolean,

            mcm2in: Boolean,
            baim2in: Boolean,
            bapm2in: Boolean,
            tmgm2in: Boolean,
            tfem2in: Boolean,
            palm2in: Boolean,
            alom2in: Boolean,
            //---------------------------

            mcm1li: Boolean,
            baim1li: Boolean,
            bapm1li: Boolean,
            tmgm1li: Boolean,
            tfem1li: Boolean,
            palm1li: Boolean,
            alom1li: Boolean,

            mcm2li: Boolean,
            baim2li: Boolean,
            bapm2li: Boolean,
            tmgm2li: Boolean,
            tfem2li: Boolean,
            palm2li: Boolean,
            alom2li: Boolean,
//--------------------------

            mcm1fu: Boolean,
            baim1fu: Boolean,
            bapm1fu: Boolean,
            tmgm1fu: Boolean,
            tfem1fu: Boolean,
            palm1fu: Boolean,
            alom1fu: Boolean,

            mcm2fu: Boolean,
            baim2fu: Boolean,
            bapm2fu: Boolean,
            tmgm2fu: Boolean,
            tfem2fu: Boolean,
            palm2fu: Boolean,
            alom2fu: Boolean,

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

module.exports =mongoose.model('memeC16', memeC16Schema);

              