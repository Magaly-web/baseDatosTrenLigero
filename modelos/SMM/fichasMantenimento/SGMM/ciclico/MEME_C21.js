
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC21Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },
        
       // eqMo Equipo Motriz
           dom1ins: Boolean,
           dom2ins: Boolean,
           dom1lim: Boolean,
           dom2lim: Boolean,
           doObs: String,
           
           cem1ins: Boolean,
           cem2ins: Boolean,
           cem1lim: Boolean,
           cem2lim: Boolean,
           ceObs: String,

           cmm1ins: Boolean,
           cmm2ins: Boolean,
           cmm1lim: Boolean,
           cmm2lim: Boolean,
           cmObs: String,

           lpm1ins: Boolean,
           lpm2ins: Boolean,
           lpm1lim: Boolean,
           lpm2lim: Boolean,
           lpObs: String,

           ccm1ins: Boolean,
           ccm2ins: Boolean,
           ccm1lim: Boolean,
           ccm2lim: Boolean,
           ccObs: String,

           ivm1ins: Boolean,
           ivm2ins: Boolean,
           ivm1lim: Boolean,
           ivm2lim: Boolean,
           ivObs: String,

           sivm1ins: Boolean,
           sivm2ins: Boolean,
           sivm1lim: Boolean,
           sivm2lim: Boolean,
           sivObs: String,

           icim1ins: Boolean,
           icim2ins: Boolean,
           icim1lim: Boolean,
           icim2lim: Boolean,
           iciObs: String,

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
   
   module.exports =mongoose.model('memeC21', memeC21Schema);