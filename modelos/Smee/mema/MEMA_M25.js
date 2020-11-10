
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM25Schema = new Schema({

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

     //Tarjeta de impulso a 12
     r12ef: String,
     r12l: String,
     r12r: String,
     r12p: String,

     r11ef: String,
     r11l: String,
     r11r: String,
     r11p: String,

     r22ef: String,
     r22l: String,
     r22r: String,
     r22p: String,

     r21ef: String,
     r21l: String,
     r21r: String,
     r21p: String,

     r32ef: String,
     r32l: String,
     r32r: String,
     r32p: String,

     r31ef: String,
     r31l: String,
     r31r: String,
     r31p: String,

     r42ef: String,
     r42l: String,
     r42r: String,
     r42p: String,

     r41ef: String,
     r41l: String,
     r41r: String,
     r41p: String,

     v1ef: String,
     v1l: String,
     v1r: String,
     v1p: String,

     v2ef: String,
     v2l: String,
     v2r: String,
     v2p: String,

     v3ef: String,
     v3l: String,
     v3r: String,
     v3p: String,

     v4ef: String,
     v4l: String,
     v4r: String,
     v4p: String,

     c1ef: String,
     c1l: String,
     c1r: String,
     c1p: String,

     c2ef: String,
     c2l: String,
     c2r: String,
     c2p: String,

     c3ef: String,
     c3l: String,
     c3r: String,
     c3p: String,

     c4ef: String,
     c4l: String,
     c4r: String,
     c4p: String,

     obs2: String,

     //Tarjeta de impulso a 22
     r2212ef: String,
     r2212l: String,
     r2212r: String,
     r2212p: String,

     r2211ef: String,
     r2211l: String,
     r2211r: String,
     r2211p: String,

     r2222ef: String,
     r2222l: String,
     r2222r: String,
     r2222p: String,

     r2221ef: String,
     r2221l: String,
     r2221r: String,
     r2221p: String,

     r2232ef: String,
     r2232l: String,
     r2232r: String,
     r2232p: String,

     r2231ef: String,
     r2231l: String,
     r2231r: String,
     r2231p: String,

     r2242ef: String,
     r2242l: String,
     r2242r: String,
     r2242p: String,

     r2241ef: String,
     r2241l: String,
     r2241r: String,
     r2241p: String,

     v221ef: String,
     v221l: String,
     v221r: String,
     v221p: String,

     v222ef: String,
     v222l: String,
     v222r: String,
     v222p: String,

     v223ef: String,
     v223l: String,
     v223r: String,
     v223p: String,

     v224ef: String,
     v224l: String,
     v224r: String,
     v224p: String,

     c221ef: String,
     c221l: String,
     c221r: String,
     c221p: String,

     c222ef: String,
     c222l: String,
     c222r: String,
     c222p: String,

     c223ef: String,
     c223l: String,
     c223r: String,
     c223p: String,

     c224ef: String,
     c224l: String,
     c224r: String,
     c224p: String,

     obs3: String,

     //Tarjeta de impulso a 81

     i81r1ef: String,
     i81r1l: String,
     i81r1r: String,
     i81r1p: String,

     i81r4ef: String,
     i81r4l: String,
     i81r4r: String,
     i81r4p: String,

     i81v1ef: String,
     i81v1l: String,
     i81v1r: String,
     i81v1p: String,

     i81v2ef: String,
     i81v2l: String,
     i81v2r: String,
     i81v2p: String,

     i81v3ef: String,
     i81v3l: String,
     i81v3r: String,
     i81v3p: String,

     i81v4ef: String,
     i81v4l: String,
     i81v4r: String,
     i81v4p: String,

     //Fusible para pulso de precarga 

     f1ef: String,
     f1l: String,
     f1r: String,
     f1c: String,

     f2ef: String,
     f2l: String,
     f2r: String,
     f2c: String,

     obs4: String,

     //Banco de Capacitores

     c59ef: String,
     c59l: String,
     c59r: String,
     c59p: String,

     r59ef: String,
     r59l: String,
     r59r: String,
     r59p: String,

     c39ef: String,
     c39l: String,
     c39r: String,
     c39p: String,

     r39ef: String,
     r39l: String,
     r39r: String,
     r39p: String,

     c19ef: String,
     c19l: String,
     c19r: String,
     c19p: String,

     r19ef: String,
     r19l: String,
     r19r: String,
     r19p: String,

     c69ef: String,
     c69l: String,
     c69r: String,
     c69p: String,

     r69ef: String,
     r69l: String,
     r69r: String,
     r69p: String,

     c49ef: String,
     c49l: String,
     c49r: String,
     c49p: String,

     r49ef: String,
     r49l: String,
     r49r: String,
     r49p: String,

     c29ef: String,
     c29l: String,
     c29r: String,
     c29p: String,

     r29ef: String,
     r29l: String,
     r29r: String,
     r29p: String,

     //L1
     l1nrlef: String,
     l1nrll: String,
     l1nrlr: String,
     l1nrlp: String,

     l1r13ef: String,
     l1r13l: String,
     l1r13r: String,
     l1r13p: String,

     l1r14ef: String,
     l1r14l: String,
     l1r14r: String,
     l1r14p: String,

     l1r15ef: String,
     l1r15l: String,
     l1r15r: String,
     l1r15p: String,

     l1r16ef: String,
     l1r16l: String,
     l1r16r: String,
     l1r16p: String,

     l1r17ef: String,
     l1r17l: String,
     l1r17r: String,
     l1r17p: String,

     l1r18ef: String,
     l1r18l: String,
     l1r18r: String,
     l1r18p: String,

     obs5: String,

     //Ondulador
     av11ef: String,
     av11l: String,
     av11r: String,
     av11p: String,

     av12ef: String,
     av12l: String,
     av12r: String,
     av12p: String,

     av41ef: String,
     av41l: String,
     av41r: String,
     av41p: String,

     av42ef: String,
     av42l: String,
     av42r: String,
     av42p: String,

     av61ef: String,
     av61l: String,
     av61r: String,
     av61p: String,

     av62ef: String,
     av62l: String,
     av62r: String,
     av62p: String,

     ar42ef: String,
     ar42l: String,
     ar42r: String,
     ar42p: String,

     ar41ef: String,
     ar41l: String,
     ar41r: String,
     ar41p: String,

     ar43ef: String,
     ar43l: String,
     ar43r: String,
     ar43p: String,

     ar63ef: String,
     ar63l: String,
     ar63r: String,
     ar63p: String,

     ar13ef: String,
     ar13l: String,
     ar13r: String,
     ar13p: String,

     ac11ef: String,
     ac11l: String,
     ac11r: String,
     ac11p: String,

     ac61ef: String,
     ac61l: String,
     ac61r: String,
     ac61p: String,

     ac41ef: String,
     ac41l: String,
     ac41r: String,
     ac41p: String,

     ac12ef: String,
     ac12l: String,
     ac12r: String,
     ac12p: String,

     ac42ef: String,
     ac42l: String,
     ac42r: String,
     ac42p: String,

     ac62ef: String,
     ac62l: String,
     ac62r: String,
     ac62p: String,

     ar11ef: String,
     ar11l: String,
     ar11r: String,
     ar11p: String,

     ar12ef: String,
     ar12l: String,
     ar12r: String,
     ar12p: String,

     ar61ef: String,
     ar61l: String,
     ar61r: String,
     ar61p: String,

     ar62ef: String,
     ar62l: String,
     ar62r: String,
     ar62p: String,

     al43ef: String,
     al43l: String,
     al43r: String,
     al43p: String,

     al63ef: String,
     al63l: String,
     al63r: String,
     al63p: String,

     al13ef: String,
     al13l: String,
     al13r: String,
     al13p: String,

     aa11ef: String,
     aa11l: String,
     aa11r: String,
     aa11p: String,

     aa41ef: String,
     aa41l: String,
     aa41r: String,
     aa41p: String,

     aa61ef: String,
     aa61l: String,
     aa61r: String,
     aa61p: String,

     astef: String,
     astl: String,
     astr: String,
     astp: String,

     nl: String,
     sp: String,
     ta: String,

     obs6: String,

     //A20

     a20v51ef: String,
     a20v51l: String,
     a20v51r: String,
     a20v51p: String,

     a20v52ef: String,
     a20v52l: String,
     a20v52r: String,
     a20v52p: String,

     a20v21ef: String,
     a20v21l: String,
     a20v21r: String,
     a20v21p: String,

     a20v22ef: String,
     a20v22l: String,
     a20v22r: String,
     a20v22p: String,

     a20v31ef: String,
     a20v31l: String,
     a20v31r: String,
     a20v31p: String,

     a20v32ef: String,
     a20v32l: String,
     a20v32r: String,
     a20v32p: String,

     a20r52ef: String,
     a20r52l: String,
     a20r52r: String,
     a20r52p: String,

     a20r51ef: String,
     a20r51l: String,
     a20r51r: String,
     a20r51p: String,

     a20r53ef: String,
     a20r53l: String,
     a20r53r: String,
     a20r53p: String,

     a20r33ef: String,
     a20r33l: String,
     a20r33r: String,
     a20r33p: String,

     a20r23ef: String,
     a20r23l: String,
     a20r23r: String,
     a20r23p: String,

     a20c21ef: String,
     a20c21l: String,
     a20c21r: String,
     a20c21p: String,

     a20c31ef: String,
     a20c31l: String,
     a20c31r: String,
     a20c31p: String,

     a20c51ef: String,
     a20c51l: String,
     a20c51r: String,
     a20c51p: String,

     a20c22ef: String,
     a20c22l: String,
     a20c22r: String,
     a20c22p: String,

     a20c52ef: String,
     a20c52l: String,
     a20c52r: String,
     a20c52p: String,

     a20c32ef: String,
     a20c32l: String,
     a20c32r: String,
     a20c32p: String,

     a20r21ef: String,
     a20r21l: String,
     a20r21r: String,
     a20r21p: String,

     a20r22ef: String,
     a20r22l: String,
     a20r22r: String,
     a20r22p: String,

     a20r31ef: String,
     a20r31l: String,
     a20r31r: String,
     a20r31p: String,

     a20r32ef: String,
     a20r32l: String,
     a20r32r: String,
     a20r32p: String,

     a20l23ef: String,
     a20l23l: String,
     a20l23r: String,
     a20l23p: String,

     a20l33ef: String,
     a20l33l: String,
     a20l33r: String,
     a20l33p: String,

     a20l53ef: String,
     a20l53l: String,
     a20l53r: String,
     a20l53p: String,

     a20a51ef: String,
     a20a51l: String,
     a20a51r: String,
     a20a51p: String,

     a20a21ef: String,
     a20a21l: String,
     a20a21r: String,
     a20a21p: String,

     a20a31ef: String,
     a20a31l: String,
     a20a31r: String,
     a20a31p: String,

     a20seteef: String,
     a20setel: String,
     a20seter: String,
     a20setep: String,

     a20nl: String,
     a20sp: String,
     a20ta: String,

     obs7: String,

     //A30

     a30v1ef: String,
     a30v1l: String,
     a30v1r: String,
     a30v1p: String,

     a30v2ef: String,
     a30v2l: String,
     a30v2r: String,
     a30v2p: String,

     a30v3ef: String,
     a30v3l: String,
     a30v3r: String,
     a30v3p: String,

     a30v4ef: String,
     a30v4l: String,
     a30v4r: String,
     a30v4p: String,

     a30v5ef: String,
     a30v5l: String,
     a30v5r: String,
     a30v5p: String,

     a30v6ef: String,
     a30v6l: String,
     a30v6r: String,
     a30v6p: String,

     a30v7ef: String,
     a30v7l: String,
     a30v7r: String,
     a30v7p: String,

     a30v9ef: String,
     a30v9l: String,
     a30v9r: String,
     a30v9p: String,

     a30r1ef: String,
     a30r1l: String,
     a30r1r: String,
     a30r1p: String,

     a30r2ef: String,
     a30r2l: String,
     a30r2r: String,
     a30r2p: String,

     a30r3ef: String,
     a30r3l: String,
     a30r3r: String,
     a30r3p: String,

     a30r4ef: String,
     a30r4l: String,
     a30r4r: String,
     a30r4p: String,

     a30r5ef: String,
     a30r5l: String,
     a30r5r: String,
     a30r5p: String,

     a30r6ef: String,
     a30r6l: String,
     a30r6r: String,
     a30r6p: String,

     a30c1ef: String,
     a30c1l: String,
     a30c1r: String,
     a30c1p: String,

     a30c2ef: String,
     a30c2l: String,
     a30c2r: String,
     a30c2p: String,

     a30c3ef: String,
     a30c3l: String,
     a30c3r: String,
     a30c3p: String,

     a30c4ef: String,
     a30c4l: String,
     a30c4r: String,
     a30c4p: String,

     a30c5ef: String,
     a30c5l: String,
     a30c5r: String,
     a30c5p: String,

     a30c6ef: String,
     a30c6l: String,
     a30c6r: String,
     a30c6p: String,

     a30c7ef: String,
     a30c7l: String,
     a30c7r: String,
     a30c7p: String,

     a30c8ef: String,
     a30c8l: String,
     a30c8r: String,
     a30c8p: String,

     a30a4ef: String,
     a30a4l: String,
     a30a4r: String,
     a30a4p: String,

     a30a5ef: String,
     a30a5l: String,
     a30a5r: String,
     a30a5p: String,

     a30seteef: String,
     a30setel: String,
     a30seter: String,
     a30setep: String,

     a30nl: String,
     a30sp: String,
     a30ta: String,
     
     obs8: String,
     //Equipo
     equipolUtilizado: {
      numberOfEquipo: Number,    
      arr: [{
          numberOfequ: String,
          marca: String,
          inv: String,
      }]
      },

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

module.exports = mongoose.model('memaM25', memaM25Schema);

