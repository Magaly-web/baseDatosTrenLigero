const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC11Schema = new Schema({
    
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

            m1seLimp: Boolean,
            m1seb: Boolean,
            m1sec: Boolean,
            m1seLub: Boolean,
            m1seObs: String,

            m1orLimp: Boolean,
            m1orb: Boolean,
            m1orc: Boolean,
            m1orLub: Boolean,
            m1orObs: String,

            m1toLimp: Boolean,
            m1tob: Boolean,
            m1toc: Boolean,
            m1toLub: Boolean,
            m1toObs: String,


            m2seLimp: Boolean,
            m2seb: Boolean,
            m2sec: Boolean,
            m2seLub: Boolean,
            m2seObs: String,

            m2orLimp: Boolean,
            m2orb: Boolean,
            m2orc: Boolean,
            m2orLub: Boolean,
            m2orObs: String,

            m2toLimp: Boolean,
            m2tob: Boolean,
            m2toc: Boolean,
            m2toLub: Boolean,
            m2toObs: String,
            
            //---------------
            r1seLimp: Boolean,
            r1seb: Boolean,
            r1sec: Boolean,
            r1seLub: Boolean,
            r1seObs: String,

            r1orLimp: Boolean,
            r1orb: Boolean,
            r1orc: Boolean,
            r1orLub: Boolean,
            r1orObs: String,

            r1toLimp: Boolean,
            r1tob: Boolean,
            r1toc: Boolean,
            r1toLub: Boolean,
            r1toObs: String,


            r2seLimp: Boolean,
            r2seb: Boolean,
            r2sec: Boolean,
            r2seLub: Boolean,
            r2seObs: String,

            r2orLimp: Boolean,
            r2orb: Boolean,
            r2orc: Boolean,
            r2orLub: Boolean,
            r2orObs: String,

            r2toLimp: Boolean,
            r2tob: Boolean,
            r2toc: Boolean,
            r2toLub: Boolean,
            r2toObs: String,
        
        //tomas
            tx11Rev: Boolean,
            tx11Sop: Boolean,
            tx11Limp: Boolean,
            tx11Obs: String,

            tx12Rev: Boolean,
            tx12Sop: Boolean,
            tx12Limp: Boolean,
            tx12Obs: String,

            tx13Rev: Boolean,
            tx13Sop: Boolean,
            tx13Limp: Boolean,
            tx13Obs: String,

            tx14Rev: Boolean,
            tx14Sop: Boolean,
            tx14Limp: Boolean,
            tx14Obs: String,

            tx15Rev: Boolean,
            tx15Sop: Boolean,
            tx15Limp: Boolean,
            tx15Obs: String,

            tx16Rev: Boolean,
            tx16Sop: Boolean,
            tx16Limp: Boolean,
            tx16Obs: String,

            tx17Rev: Boolean,
            tx17Sop: Boolean,
            tx17Limp: Boolean,
            tx17Obs: String,

            tx19Rev: Boolean,
            tx19Sop: Boolean,
            tx19Limp: Boolean,
            tx19Obs: String,
           
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

module.exports =mongoose.model('memeC11', memeC11Schema);

              