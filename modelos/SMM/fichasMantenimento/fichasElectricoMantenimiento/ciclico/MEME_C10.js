
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC10Schema = new Schema({
    
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

            m1meLimp: Boolean,
            m1meRev: Boolean,
            m1meLub: Boolean,

            m1torLimp: Boolean,
            m1torRev: Boolean,
            
            m1pLimp: Boolean,
            m1pRev: Boolean,

            m1goLimp: Boolean,
            m1goRev: Boolean,

            m1maLimp: Boolean,
            m1maRev: Boolean,

            m1asLimp: Boolean,
            m1asRev: Boolean,

            m1daLimp: Boolean,
            m1daRev: Boolean,

            m1moLimp: Boolean,
            m1moRev: Boolean,

            m1ceLimp: Boolean,
            m1ceRev: Boolean,

            m2meLimp: Boolean,
            m2meRev: Boolean,
            m2meLub: Boolean,

            m2torLimp: Boolean,
            m2torRev: Boolean,
            
            m2pLimp: Boolean,
            m2pRev: Boolean,

            m2goLimp: Boolean,
            m2goRev: Boolean,

            m2maLimp: Boolean,
            m2maRev: Boolean,

            m2asLimp: Boolean,
            m2asRev: Boolean,

            m2daLimp: Boolean,
            m2daRev: Boolean,

            m2moLimp: Boolean,
            m2moRev: Boolean,

            m2ceLimp: Boolean,
            m2ceRev: Boolean,

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

module.exports =mongoose.model('memeC10', memeC10Schema);

              