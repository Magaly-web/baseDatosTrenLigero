
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM15Schema = new Schema({

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
     //Grupo de relevadores frente de articulacion 1
     rap1l: String,
     rap1d: String,
     rap1r: String,
     rap1f: String,

     ran1l: String,
     ran1d: String,
     ran1r: String,
     ran1f: String,

     rvpl: String,
     rvpd: String,
     rvpr: String,
     rvpf: String,

     r2kl: String,
     r2kd: String,
     r2kr: String,
     r2kf: String,

     rccl: String,
     rccd: String,
     rccr: String,
     rccf: String,

     rafl: String,
     rafd: String,
     rafr: String,
     raff: String,

     rifml: String,
     rifmd: String,
     rifmr: String,
     rifmf: String,

     //Grupo de fusibles
        //gfvb1
     gfvb1pl: String,
     gfvb1pr: String,

     gfvb17fa: String,
     gfvb17l: String,
     gfvb17r: String,

     gfvb16fa: String,
     gfvb16l: String,
     gfvb16r: String,

     gfvb11fa: String,
     gfvb11l: String,
     gfvb11r: String,

     gfvb12fa: String,
     gfvb12l: String,
     gfvb12r: String,

     gfvb13fa: String,
     gfvb13l: String,
     gfvb13r: String,

     gfvb14fa: String,
     gfvb14l: String,
     gfvb14r: String,

     gfvb15fa: String,
     gfvb15l: String,
     gfvb15r: String,

     //gfbv2

     gfvb2pl: String,
     gfvb2pr: String,

     gfvb21fa: String,
     gfvb21l: String,
     gfvb21r: String,

     gfvb22fa: String,
     gfvb22l: String,
     gfvb22r: String,

     gfvb23fa: String,
     gfvb23l: String,
     gfvb23r: String,

     gfvb24fa: String,
     gfvb24l: String,
     gfvb24r: String,

     gfvb25fa: String,
     gfvb25l: String,
     gfvb25r: String,

     gfvb26fa: String,
     gfvb26l: String,
     gfvb26r: String,

     gfvb27fa: String,
     gfvb27l: String,
     gfvb27r: String,

     //gfba1
     gfba1pl: String,
     gfba1pr: String,

     gfba1fmfa: String,
     gfba1fml: String,
     gfba1fmr: String,

     gfba1kfrfa: String,
     gfba1kfrl: String,
     gfba1kfrr: String,

     //gfba2
     gfba2pl: String,
     gfba2pr: String,

     gfba2lifa: String,
     gfba2lil: String,
     gfba2lir: String,

     gfba2ldfa: String,
     gfba2ldl: String,
     gfba2ldr: String,

     gfba2ld2fa: String,
     gfba2ld2l: String,
     gfba2ld2r: String,

     gfba2ld3fa: String,
     gfba2ld3l: String,
     gfba2ld3r: String,

     gfba2lidfa: String,
     gfba2lidl: String,
     gfba2lidr: String,

     gfba2li2fa: String,
     gfba2li2l: String,
     gfba2li2r: String,

     gfba2clfa: String,
     gfba2cll: String,
     gfba2clr: String,

     //Modulos de conexion y cableado

     c14l: String,
     c14v: String,
     c14f: String,

     c15l: String,
     c15v: String,
     c15f: String,

     c16l: String,
     c16v: String,
     c16f: String,

     c17l: String,
     c17v: String,
     c17f: String,

     c18l: String,
     c18v: String,
     c18f: String,

     c19l: String,
     c19v: String,
     c19f: String,

     c20l: String,
     c20v: String,
     c20f: String,

     clofl: String,
     clofv: String,
     cloff: String,

     bma1l: String,
     bma1v: String,
     bma1f: String,

     aal: String,
     aav: String,
     aaf: String,

     //Bobinas para electrovalvula de puertas

     ecial: String,
     eciai: String,
     eciar: String,
     eciaf: String,

     eaibl: String,
     eaibi: String,
     eaibr: String,
     eaibf: String,

     ecdcl: String,
     ecdci: String,
     ecdcr: String,
     ecdcf: String,

     eadhl: String,
     eadhi: String,
     eadhr: String,
     eadhf: String,

     obs2: String,

     //Frente de articulacion M2
     rcdl: String,
     rcdd: String,
     rcdr: String,
     rcdf: String,

     rcil: String,
     rcid: String,
     rcir: String,
     rcif: String,

     radl: String,
     radd: String,
     radr: String,
     radf: String,

     rail: String,
     raid: String,
     rair: String,
     raif: String,

     ran2l: String,
     ran2d: String,
     ran2r: String,
     ran2f: String,

     rap2l: String,
     rap2d: String,
     rap2r: String,
     rap2f: String,

     //Grupo de fusibles 

     mp3l: String,
     mp3r: String,

     m83fa: String,
     m83l: String,
     m83r: String,

     m93fa: String,
     m93l: String,
     m93r: String,

     m103fa: String,
     m103l: String,
     m103r: String,

     m113fa: String,
     m113l: String,
     m113r: String,

     m123fa: String,
     m123l: String,
     m123r: String,

     m133fa: String,
     m133l: String,
     m133r: String,

     m143fa: String,
     m143l: String,
     m143r: String,

     //gfbv4

     mp4l: String,
     mp4r: String,

     m84fa: String,
     m84l: String,
     m84r: String,

     m94fa: String,
     m94l: String,
     m94r: String,

     m104fa: String,
     m104l: String,
     m104r: String,

     m114fa: String,
     m114l: String,
     m114r: String,

     m124fa: String,
     m124l: String,
     m124r: String,

     m134fa: String,
     m134l: String,
     m134r: String,

     m144fa: String,
     m144l: String,
     m144r: String,

     //Modulos de conexion 

     c49l: String,
     c49v: String,
     c49f: String,

     c50l: String,
     c50v: String,
     c50f: String,

     c51l: String,
     c51v: String,
     c51f: String,

     c52l: String,
     c52v: String,
     c52f: String,

     c53l: String,
     c53v: String,
     c53f: String,

     c54l: String,
     c54v: String,
     c54f: String,

     c55l: String,
     c55v: String,
     c55f: String,

     bmfa2l: String,
     bmfa2v: String,
     bmfa2f: String,

     itml: String,
     itmv: String,
     itmf: String,

     ararl: String,
     ararv: String,
     ararf: String,

     //Bobinas para electrovalvula

     ecicl: String,
     ecici: String,
     ecicr: String,
     ecicf: String,

     eaiel: String,
     eaiei: String,
     eaier: String,
     eaief: String,

     ecdbl: String,
     ecdbi: String,
     ecdbr: String,
     ecdbf: String,

     eadhl: String,
     eadhi: String,
     eadhr: String,
     eadhf: String,

    obs3: String,
//----------------------------

equipolUtilizado: {
    numberOfEquipo: Number,    
    arr: [{
        numberOfequ: String,
        marca: String,
        inv: String,
    }]
    },

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

module.exports = mongoose.model('memaM15', memaM15Schema);
