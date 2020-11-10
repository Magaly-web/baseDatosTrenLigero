
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM37Schema = new Schema({

    trainModel: { type: String, required: true },//tren programado
    kilometraje: { type: Number },
    
    date_inicio: { type: String },
    date_termino: { type: String },
    
    dateultmant: { type: String },
    datepromant: { type: String },

    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    obs1: String,
     //----------------------------
     //Cartero M1 Derecho
     m1dsv: String,
     m1dsl: String,
     m1dsr: String,
     m1dsf: String,

     m1drv: String,
     m1drl: String,
     m1drr: String,
     m1drf: String,

     m1dav: String,
     m1dal: String,
     m1dar: String,
     m1daf: String,

     m1dlfv: String,
     m1dlfl: String,
     m1dlfr: String,
     m1dlff: String,

     m1dlpv: String,
     m1dlpl: String,
     m1dlpr: String,
     m1dlpf: String,

     m1dlafv: String,
     m1dlafl: String,
     m1dlafr: String,
     m1dlaff: String,

     m1dlapv: String,
     m1dlapl: String,
     m1dlapr: String,
     m1dlapf: String,

     m1dmafv: String,
     m1dmafl: String,
     m1dmafr: String,
     m1dmaff: String,

     m1dmapv: String,
     m1dmapl: String,
     m1dmapr: String,
     m1dmapf: String,

     m1dmvfv: String,
     m1dmvfl: String,
     m1dmvfr: String,
     m1dmvff: String,

     m1dmvpv: String,
     m1dmvpl: String,
     m1dmvpr: String,
     m1dmvpf: String,

     m1dtfv: String,
     m1dtfl: String,
     m1dtfr: String,
     m1dtff: String,

     m1dehv: String,
     m1dehl: String,
     m1dehr: String,
     m1dehf: String,

     m1dtov: String,
     m1dtol: String,
     m1dtor: String,
     m1dtof: String,

     m1dccv: String,
     m1dccl: String,
     m1dccr: String,
     m1dccf: String,
     //Cartero M1 Izquierdo

     m1isv: String,
     m1isl: String,
     m1isr: String,
     m1isf: String,

     m1irv: String,
     m1irl: String,
     m1irr: String,
     m1irf: String,

     m1iav: String,
     m1ial: String,
     m1iar: String,
     m1iaf: String,

     m1ilfv: String,
     m1ilfl: String,
     m1ilfr: String,
     m1ilff: String,

     m1ilpv: String,
     m1ilpl: String,
     m1ilpr: String,
     m1ilpf: String,

     m1ilafv: String,
     m1ilafl: String,
     m1ilafr: String,
     m1ilaff: String,

     m1ilapv: String,
     m1ilapl: String,
     m1ilapr: String,
     m1ilapf: String,

     m1imafv: String,
     m1imafl: String,
     m1imafr: String,
     m1imaff: String,

     m1imapv: String,
     m1imapl: String,
     m1imapr: String,
     m1imapf: String,

     m1imvfv: String,
     m1imvfl: String,
     m1imvfr: String,
     m1imvff: String,

     m1imvpv: String,
     m1imvpl: String,
     m1imvpr: String,
     m1imvpf: String,

     m1itfv: String,
     m1itfl: String,
     m1itfr: String,
     m1itff: String,

     m1iehv: String,
     m1iehl: String,
     m1iehr: String,
     m1iehf: String,

     m1itov: String,
     m1itol: String,
     m1itor: String,
     m1itof: String,

     m1iccv: String,
     m1iccl: String,
     m1iccr: String,
     m1iccf: String,

     //Cartero M2 Derecho

     m2dsv: String,
     m2dsl: String,
     m2dsr: String,
     m2dsf: String,

     m2drv: String,
     m2drl: String,
     m2drr: String,
     m2drf: String,

     m2dav: String,
     m2dal: String,
     m2dar: String,
     m2daf: String,

     m2dlfv: String,
     m2dlfl: String,
     m2dlfr: String,
     m2dlff: String,

     m2dlpv: String,
     m2dlpl: String,
     m2dlpr: String,
     m2dlpf: String,

     m2dlafv: String,
     m2dlafl: String,
     m2dlafr: String,
     m2dlaff: String,

     m2dlapv: String,
     m2dlapl: String,
     m2dlapr: String,
     m2dlapf: String,

     m2dmafv: String,
     m2dmafl: String,
     m2dmafr: String,
     m2dmaff: String,

     m2dmapv: String,
     m2dmapl: String,
     m2dmapr: String,
     m2dmapf: String,

     m2dmvfv: String,
     m2dmvfl: String,
     m2dmvfr: String,
     m2dmvff: String,

     m2dmvpv: String,
     m2dmvpl: String,
     m2dmvpr: String,
     m2dmvpf: String,

     m2dtfv: String,
     m2dtfl: String,
     m2dtfr: String,
     m2dtff: String,

     m2dehv: String,
     m2dehl: String,
     m2dehr: String,
     m2dehf: String,

     m2dtov: String,
     m2dtol: String,
     m2dtor: String,
     m2dtof: String,

     m2dccv: String,
     m2dccl: String,
     m2dccr: String,
     m2dccf: String,
     
     //Cartero M2 Izquierdo

     m2isv: String,
     m2isl: String,
     m2isr: String,
     m2isf: String,

     m2irv: String,
     m2irl: String,
     m2irr: String,
     m2irf: String,

     m2iav: String,
     m2ial: String,
     m2iar: String,
     m2iaf: String,

     m2ilfv: String,
     m2ilfl: String,
     m2ilfr: String,
     m2ilff: String,

     m2ilpv: String,
     m2ilpl: String,
     m2ilpr: String,
     m2ilpf: String,

     m2ilafv: String,
     m2ilafl: String,
     m2ilafr: String,
     m2ilaff: String,

     m2ilapv: String,
     m2ilapl: String,
     m2ilapr: String,
     m2ilapf: String,

     m2imafv: String,
     m2imafl: String,
     m2imafr: String,
     m2imaff: String,

     m2imapv: String,
     m2imapl: String,
     m2imapr: String,
     m2imapf: String,

     m2imvfv: String,
     m2imvfl: String,
     m2imvfr: String,
     m2imvff: String,

     m2imvpv: String,
     m2imvpl: String,
     m2imvpr: String,
     m2imvpf: String,

     m2itfv: String,
     m2itfl: String,
     m2itfr: String,
     m2itff: String,

     m2iehv: String,
     m2iehl: String,
     m2iehr: String,
     m2iehf: String,

     m2itov: String,
     m2itol: String,
     m2itor: String,
     m2itof: String,

     m2iccv: String,
     m2iccl: String,
     m2iccr: String,
     m2iccf: String,

     //Acabados a Carcasa
     m1ipri: String,
     m1ialu: String,
     m1itra: String,

     m1dpri: String,
     m1dalu: String,
     m1dtra: String,

     m2ipri: String,
     m2ialu: String,
     m2itra: String,

     m2dpri: String,
     m2dalu: String,
     m2dtra: String,

     obs2: String,
     //----------------------------
     //Materiales
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
     
     module.exports = mongoose.model('memaM37', memaM37Schema);
     
     