
     const mongoose = require('mongoose');
     const {Schema} = mongoose;
     
     const memaM08Schema = new Schema({
     
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
     //Tabique M1

     m1hpiv: String,
     m1hpil: String,
     m1hpir: String,
     m1hpif: String,

     m1enapv: String,
     m1enapl: String,
     m1enapr: String,
     m1enapf: String,

     m1spd1v: String,
     m1spd1l: String,
     m1spd1r: String,
     m1spd1f: String,

     m1sacv: String,
     m1sacl: String,
     m1sacr: String,
     m1sacf: String,

     m1pdedv: String,
     m1pdedl: String,
     m1pdedr: String,
     m1pdedf: String,

     m1pdecv: String,
     m1pdecl: String,
     m1pdecr: String,
     m1pdecf: String,

     m1smav: String,
     m1smal: String,
     m1smar: String,
     m1smaf: String,

     m1svcv: String,
     m1svcl: String,
     m1svcr: String,
     m1svcf: String,

     m1litbv: String,
     m1litbl: String,
     m1litbr: String,
     m1litbf: String,

     m1svpv: String,
     m1svpl: String,
     m1svpr: String,
     m1svpf: String,

     m1sfev: String,
     m1sfel: String,
     m1sfer: String,
     m1sfef: String,

     m1stbv: String,
     m1stbl: String,
     m1stbr: String,
     m1stbf: String,

     m1sfpv: String,
     m1sfpl: String,
     m1sfpr: String,
     m1sfpf: String,

     m1vcav: String,
     m1vcal: String,
     m1vcar: String,
     m1vcaf: String,

     //Borneros de conexion y cableado

     m1c09v: String,
     m1c09l: String,
     m1c09f: String,

     m1c10v: String,
     m1c10l: String,
     m1c10f: String,

     m1c11v: String,
     m1c11l: String,
     m1c11f: String,

     m1c12v: String,
     m1c12l: String,
     m1c12f: String,

     m1c13v: String,
     m1c13l: String,
     m1c13f: String,

     m1bmt1v: String,
     m1bmt1l: String,
     m1bmt1f: String,

     m1tcsaev: String,
     m1tcsael: String,
     m1tcsaef: String,

     m1bc991v: String,
     m1bc991l: String,
     m1bc991f: String,

     m1tav: String,
     m1tal: String,
     m1taf: String,

     m1atv: String,
     m1atl: String,
     m1atf: String,

     m1ppv: String,
     m1ppl: String,
     m1ppf: String,

     //Grupo de fusibles baja tension M1

     m1gfbt1pa: String,
     m1gfbt1pl: String,
     m1gfbt1pr: String,

     m1gfbt1aa: String,
     m1gfbt1al: String,
     m1gfbt1ar: String,

     m1gfbt1ea: String,
     m1gfbt1el: String,
     m1gfbt1er: String,

     m1gfbt1apa: String,
     m1gfbt1apl: String,
     m1gfbt1apr: String,

     m1gfbt1ma: String,
     m1gfbt1ml: String,
     m1gfbt1mr: String,

     m1gfbt2pa: String,
     m1gfbt2pl: String,
     m1gfbt2pr: String,

     m1gfbt2mc1a: String,
     m1gfbt2mc1l: String,
     m1gfbt2mc1r: String,

     m1gfbt2mc11a: String,
     m1gfbt2mc11l: String,
     m1gfbt2mc11r: String,

     m1gfbt2ma: String,
     m1gfbt2ml: String,
     m1gfbt2mr: String,

     m1gfbt2ba: String,
     m1gfbt2bl: String,
     m1gfbt2br: String,

     m1gfbt3pa: String,
     m1gfbt3pl: String,
     m1gfbt3pr: String,

     m1gfbt3saa: String,
     m1gfbt3sal: String,
     m1gfbt3sar: String,

     m1gfbt3tsa: String,
     m1gfbt3tsl: String,
     m1gfbt3tsr: String,

     m1gfbt3va: String,
     m1gfbt3vl: String,
     m1gfbt3vr: String,

     m1gfbt3paa: String,
     m1gfbt3pal: String,
     m1gfbt3par: String,

     obs2: String,

     //Tabique M2
     
     m2hpiv: String,
     m2hpil: String,
     m2hpir: String,
     m2hpif: String,

     m2enapv: String,
     m2enapl: String,
     m2enapr: String,
     m2enapf: String,

     m2spd1v: String,
     m2spd1l: String,
     m2spd1r: String,
     m2spd1f: String,

     m2smav: String,
     m2smal: String,
     m2smar: String,
     m2smaf: String,

     m2stbv: String,
     m2stbl: String,
     m2stbr: String,
     m2stbf: String,

     m2svcv: String,
     m2svcl: String,
     m2svcr: String,
     m2svcf: String,

     m2litbv: String,
     m2litbl: String,
     m2litbr: String,
     m2litbf: String,

     m2svpv: String,
     m2svpl: String,
     m2svpr: String,
     m2svpf: String,

     m2sfev: String,
     m2sfel: String,
     m2sfer: String,
     m2sfef: String,

     m2vcav: String,
     m2vcal: String,
     m2vcar: String,
     m2vcaf: String,

     //Borneros de conexion y cableado

     m2c68v: String,
     m2c68l: String,
     m2c68f: String,

     m2c69v: String,
     m2c69l: String,
     m2c69f: String,

     m2c70v: String,
     m2c70l: String,
     m2c70f: String,

     m2c107v: String,
     m2c107l: String,
     m2c107f: String,

     m2c108v: String,
     m2c108l: String,
     m2c108f: String,

     m2bmt2v: String,
     m2bmt2l: String,
     m2bmt2f: String,

     m2bc992v: String,
     m2bc992l: String,
     m2bc992f: String,

     m2tav: String,
     m2tal: String,
     m2taf: String,

     m2aav: String,
     m2aal: String,
     m2aaf: String,

     m2ppv: String,
     m2ppl: String,
     m2ppf: String,

     //Grupo de fusibles baja tension M2

     m2gfbt1pl: String,
     m2gfbt1pr: String,

     m2gfbt1aa: String,
     m2gfbt1al: String,
     m2gfbt1ar: String,

     m2gfbt1ea: String,
     m2gfbt1el: String,
     m2gfbt1er: String,

     m2gfbt1apa: String,
     m2gfbt1apl: String,
     m2gfbt1apr: String,

     m2gfbt1ma: String,
     m2gfbt1ml: String,
     m2gfbt1mr: String,

     m2gfbt2pl: String,
     m2gfbt2pr: String,

     m2gfbt2mc2a: String,
     m2gfbt2mc2l: String,
     m2gfbt2mc2r: String,

     m2gfbt2mc22a: String,
     m2gfbt2mc22l: String,
     m2gfbt2mc22r: String,

     m2gfbt2ma: String,
     m2gfbt2ml: String,
     m2gfbt2mr: String,

     m2gfbt2pra: String,
     m2gfbt2prl: String,
     m2gfbt2prr: String,

     m2gfbt2tsa: String,
     m2gfbt2tsl: String,
     m2gfbt2tsr: String,

     m2gfbt4pl: String,
     m2gfbt4pr: String,

     m2gfbt4saa: String,
     m2gfbt4sal: String,
     m2gfbt4sar: String,

     m2gfbt4epa: String,
     m2gfbt4epl: String,
     m2gfbt4epr: String,

     m2gfbt4va: String,
     m2gfbt4vl: String,
     m2gfbt4vr: String,

     m2gfbt4cma: String,
     m2gfbt4cml: String,
     m2gfbt4cmr: String,

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
    
    module.exports = mongoose.model('memaM08', memaM08Schema);
  
