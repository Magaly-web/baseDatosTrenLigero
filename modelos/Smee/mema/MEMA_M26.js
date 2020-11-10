
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM26Schema = new Schema({

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
    //Grupo de Relevadores

     recl: String,
     recd: String,
     recr: String,
     recf: String,

     rcml: String,
     rcmd: String,
     rcmr: String,
     rcmf: String,

     //Borneros Conectores y Cableado
     c56if: String,
     c56l: String,
     c56f: String,

     c57if: String,
     c57l: String,
     c57f: String,

     c58if: String,
     c58l: String,
     c58f: String,

     c59if: String,
     c59l: String,
     c59f: String,

     c60if: String,
     c60l: String,
     c60f: String,

     c61if: String,
     c61l: String,
     c61f: String,

     bc99if: String,
     bc99l: String,
     bc99f: String,

     tcif: String,
     tcl: String,
     tcf: String,

     acif: String,
     acl: String,
     acf: String,

     //Grupo de fusibles cofre 1

     
     pol: String,
     por: String,

     cofa: String,
     col: String,
     cor: String,

     cefa: String,
     cel: String,
     cer: String,

     ups1fa: String,
     ups1l: String,
     ups1r: String,

     ups2fa: String,
     ups2l: String,
     ups2r: String,

     ups3fa: String,
     ups3l: String,
     ups3r: String,

     eafa: String,
     eal: String,
     ear: String,

     capfa: String,
     capl: String,
     capr: String,

     ftbfa: String,
     ftbl: String,
     ftbr: String,

     obs2: String,

     //Diodos de freno Magnetico
     cfm1dl: String,
     cfm1dif: String,
     cfm1dp: String,
     
     cfm1il: String,
     cfm1iif: String,
     cfm1ip: String,

     cfm2dl: String,
     cfm2dif: String,
     cfm2dp: String,

     cfm2il: String,
     cfm2iif: String,
     cfm2ip: String,

     cfm3dl: String,
     cfm3dif: String,
     cfm3dp: String,

     cfm3il: String,
     cfm3iif: String,
     cfm3ip: String,

     //Contactores cofre
     cfm1if: String,
     cfm1l: String,
     cfm1cf: String,
     cfm1cm: String,
     cfm1b: String,
     cfm1r: String,

     cfm2if: String,
     cfm2l: String,
     cfm2cf: String,
     cfm2cm: String,
     cfm2b: String,
     cfm2r: String,

     cfm3if: String,
     cfm3l: String,
     cfm3cf: String,
     cfm3cm: String,
     cfm3b: String,
     cfm3r: String,

     cmcif: String,
     cmcl: String,
     cmccf: String,
     cmccm: String,
     cmcb: String,
     cmcr: String,

     //Contactor preparacion
     cpml:String,
     cpmif:String,
     cpmo:String,

     obs3: String,

     //Interruptor termomagnetico
     itcal: String,
     itcaif: String,
     itcasb: String,
     itcarsi: String,
     itcasbe: String,
     itcasbc: String,

     //Resistencia de aislamiento
     icfa: String,
     icfb: String,
     icfc: String,

     //Resistencia de aislamiento

     iafa: String,
     iafb: String,
     iafc: String,

     //Resistencia de contatos
     ic2fa: String,
     ic2fb: String,
     ic2fc: String,

     obs4: String,

     //Revelador bimetalico
     csrif: String,
     csrl: String,
     csrr: String,
     csro: String,

     tstif: String,
     tstl: String,
     tstr: String,
     tsto: String,

     ftif: String,
     ftl: String,
     ftr: String,
     fto: String,

     taiif: String,
     tail: String,
     tair: String,
     taio: String,

     brbif: String,
     brbl: String,
     brbr: String,
     brbo: String,

     brcaif: String,
     brcal: String,
     brcar: String,
     brcao: String,

     //Selector Aislador

     sacpl: String,
     sacpif: String,
     sacpnc: String,
     sacpo: String,

     obs5: String,

     //Unidad programable
     bateriaif: String,
     baterial: String,
     bateriar: String,

     smeif: String,
     smel: String,
     smer: String,

     smoif: String,
     smol: String,
     smor: String,

     seyaif: String,
     seyal: String,
     seyar: String,

     ieblif: String,
     iebll: String,
     ieblr: String,

     imoslif: String,
     imosll: String,
     imoslr: String,

     imorlif: String,
     imorll: String,
     imorlr: String,

     sofijif: String,
     sofijl: String,
     sofijr: String,

     //Modulos de interface
     db15ine: String,
     db15oute: String,
     intere: String,
     sopte: String,

     db15ins: String,
     db15outs: String,
     inters: String,
     sopts: String,

     //cable
     db15m: String,
     db15h: String,
     cable: String,

     //Unidad programable de servicios
     me1v: String,
     me1cb: String,
     me1cc: String,
     me1tf: String,
     me1is: String,
     me1ip: String,

     me2v: String,
     me2cb: String,
     me2cc: String,
     me2tf: String,
     me2is: String,
     me2ip: String,

     me3v: String,
     me3cb: String,
     me3cc: String,
     me3tf: String,
     me3is: String,
     me3ip: String,

     me4v: String,
     me4cb: String,
     me4cc: String,
     me4tf: String,
     me4is: String,
     me4ip: String,

     me5v: String,
     me5cb: String,
     me5cc: String,
     me5tf: String,
     me5is: String,
     me5ip: String,

     me6v: String,
     me6cb: String,
     me6cc: String,
     me6tf: String,
     me6is: String,
     me6ip: String,

     ms1v: String,
     ms1cb: String,
     ms1cc: String,
     ms1tf: String,
     ms1is: String,
     ms1ip: String,

     ms2v: String,
     ms2cb: String,
     ms2cc: String,
     ms2tf: String,
     ms2is: String,
     ms2ip: String,

     ms3v: String,
     ms3cb: String,
     ms3cc: String,
     ms3tf: String,
     ms3is: String,
     ms3ip: String,

     ms4v: String,
     ms4cb: String,
     ms4cc: String,
     ms4tf: String,
     ms4is: String,
     ms4ip: String,

     ms5v: String,
     ms5cb: String,
     ms5cc: String,
     ms5tf: String,
     ms5is: String,
     ms5ip: String,

     ms6v: String,
     ms6cb: String,
     ms6cc: String,
     ms6tf: String,
     ms6is: String,
     ms6ip: String,

     ms7v: String,
     ms7cb: String,
     ms7cc: String,
     ms7tf: String,
     ms7is: String,
     ms7ip: String,

     ms8v: String,
     ms8cb: String,
     ms8cc: String,
     ms8tf: String,
     ms8is: String,
     ms8ip: String,

     obs6: String,
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

module.exports = mongoose.model('memaM26', memaM26Schema);
