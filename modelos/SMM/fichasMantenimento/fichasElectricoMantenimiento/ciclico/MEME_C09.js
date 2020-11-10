
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC09Schema = new Schema({
    
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
            m1caLimp: Boolean,
            m1caRev: Boolean,
            m1caLub: Boolean,

            m1cpLimp: Boolean,
            m1cpRev: Boolean,
            m1cpLub: Boolean,

            m1tpaLimp: Boolean,
            m1tpaRev: Boolean,

            m1tppLimp: Boolean,
            m1tppRev: Boolean,

            m2caLimp: Boolean,
            m2caRev: Boolean,
            m2caLub: Boolean,

            m2cpLimp: Boolean,
            m2cpRev: Boolean,
            m2cpLub: Boolean,

            m2tpaLimp: Boolean,
            m2tpaRev: Boolean,

            m2tppLimp: Boolean,
            m2tppRev: Boolean,
            
            serieMotor: String,
        

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

module.exports =mongoose.model('memeC09', memeC09Schema);

              