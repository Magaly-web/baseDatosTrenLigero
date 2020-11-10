
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC18Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },
        //act
            cets: Boolean,
            cetl: Boolean,
            cetr: Boolean,

            rts: Boolean,
            rtl: Boolean,
            rtr: Boolean,

            ces: Boolean,
            cel: Boolean,
            cer: Boolean,
            
            fs: Boolean,
            fl: Boolean,
            fr: Boolean,

            cos: Boolean,
            col: Boolean,
            cor: Boolean,

            sfs: Boolean,
            sfl: Boolean,
            sfr: Boolean,
        
        
        //te90
            a10s: Boolean,
            a10l: Boolean,
            a10r: Boolean,
            a10n: String,

            a20s: Boolean,
            a20l: Boolean,
            a20r: Boolean,
            a20n: String,

            a30s: Boolean,
            a30l: Boolean,
            a30r: Boolean,
            a30n: String,
        
        //te95
            mods: Boolean,
            modl: Boolean,
            modr: Boolean,

            cetso: Boolean,
            cetli: Boolean,
            cetre: Boolean,

            tms: Boolean,
            tml: Boolean,
            tmr: Boolean,
   
        
        //te06
            ifls: Boolean,
            ifll: Boolean,
            iflr: Boolean,

            ctfs: Boolean,
            ctfl: Boolean,
            ctfr: Boolean,
            
            ctvs: Boolean,
            ctvl: Boolean,
            ctvr: Boolean,

            ctpl: Boolean,
            ctpr: Boolean,

            hvpl: Boolean,
            hvpr: Boolean,

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

module.exports =mongoose.model('memeC18', memeC18Schema);