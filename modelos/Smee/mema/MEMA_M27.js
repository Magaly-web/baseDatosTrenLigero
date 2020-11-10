
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM27Schema = new Schema({

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

     bc100av: String,
     bc100al: String,
     bc100af: String,

     bc100v: String,
     bc100l: String,
     bc100f: String,

     //cofre 2

     fbb1pl: String,
     fbb1pr: String,

     fbb1mf: String,
     fbb1ml: String,
     fbb1mr: String,

     fbb1cf: String,
     fbb1cl: String,
     fbb1cr: String,

     //Conmutador
     ktbv: String,
     ktbl: String,
     ktbc: String,
     ktbcm: String,
     ktbr: String,

     iabv: String,
     iabl: String,
     iabc: String,
     iabcm: String,
     iabr: String,

     obs2: String,
     
     //Modelo de bateria
     alcad: Boolean,
     nife: Boolean,
     saft: Boolean,

     //Verificacion fisica

     fb1t: String,
     fb1rt: String,
     fb1s: String,
     fb1b: String,
     fb1tf: String,
     fb1p: String,
     fb1r: String,

     fb2t: String,
     fb2rt: String,
     fb2s: String,
     fb2b: String,
     fb2tf: String,
     fb2p: String,
     fb2r: String,

     fb3t: String,
     fb3rt: String,
     fb3s: String,
     fb3b: String,
     fb3tf: String,
     fb3p: String,
     fb3r: String,

     fb4t: String,
     fb4rt: String,
     fb4s: String,
     fb4b: String,
     fb4tf: String,
     fb4p: String,
     fb4r: String,

     fb5t: String,
     fb5rt: String,
     fb5s: String,
     fb5b: String,
     fb5tf: String,
     fb5p: String,
     fb5r: String,

     fb6t: String,
     fb6rt: String,
     fb6s: String,
     fb6b: String,
     fb6tf: String,
     fb6p: String,
     fb6r: String,

     fb7t: String,
     fb7rt: String,
     fb7s: String,
     fb7b: String,
     fb7tf: String,
     fb7p: String,
     fb7r: String,

     fb8t: String,
     fb8rt: String,
     fb8s: String,
     fb8b: String,
     fb8tf: String,
     fb8p: String,
     fb8r: String,

     fb9t: String,
     fb9rt: String,
     fb9s: String,
     fb9b: String,
     fb9tf: String,
     fb9p: String,
     fb9r: String,

     fb10t: String,
     fb10rt: String,
     fb10s: String,
     fb10b: String,
     fb10tf: String,
     fb10p: String,
     fb10r: String,

     fb11t: String,
     fb11rt: String,
     fb11s: String,
     fb11b: String,
     fb11tf: String,
     fb11p: String,
     fb11r: String,

     fb12t: String,
     fb12rt: String,
     fb12s: String,
     fb12b: String,
     fb12tf: String,
     fb12p: String,
     fb12r: String,

     fb13t: String,
     fb13rt: String,
     fb13s: String,
     fb13b: String,
     fb13tf: String,
     fb13p: String,
     fb13r: String,

     fb14t: String,
     fb14rt: String,
     fb14s: String,
     fb14b: String,
     fb14tf: String,
     fb14p: String,
     fb14r: String,

     fb15t: String,
     fb15rt: String,
     fb15s: String,
     fb15b: String,
     fb15tf: String,
     fb15p: String,
     fb15r: String,

     fb16t: String,
     fb16rt: String,
     fb16s: String,
     fb16b: String,
     fb16tf: String,
     fb16p: String,
     fb16r: String,

     fb17t: String,
     fb17rt: String,
     fb17s: String,
     fb17b: String,
     fb17tf: String,
     fb17p: String,
     fb17r: String,

     fb18t: String,
     fb18rt: String,
     fb18s: String,
     fb18b: String,
     fb18tf: String,
     fb18p: String,
     fb18r: String,

     obs3: String,

     //Inspeccion tecnica

     tb1l: String,
     tb1e: String,
     tb1d: String,

     tb2l: String,
     tb2e: String,
     tb2d: String,

     tb3l: String,
     tb3e: String,
     tb3d: String,

     tb4l: String,
     tb4e: String,
     tb4d: String,

     tb5l: String,
     tb5e: String,
     tb5d: String,

     tb6l: String,
     tb6e: String,
     tb6d: String,

     tb7l: String,
     tb7e: String,
     tb7d: String,

     tb8l: String,
     tb8e: String,
     tb8d: String,

     tb9l: String,
     tb9e: String,
     tb9d: String,

     tb10l: String,
     tb10e: String,
     tb10d: String,

     tb11l: String,
     tb11e: String,
     tb11d: String,

     tb12l: String,
     tb12e: String,
     tb12d: String,

     tb13l: String,
     tb13e: String,
     tb13d: String,

     tb14l: String,
     tb14e: String,
     tb14d: String,

     tb15l: String,
     tb15e: String,
     tb15d: String,

     tb16l: String,
     tb16e: String,
     tb16d: String,

     tb17l: String,
     tb17e: String,
     tb17d: String,

     tb18l: String,
     tb18e: String,
     tb18d: String,

     obs4: String,

     //Cofre de baterias

     cov: String,
     col: String,
     cop: String,
     copi: String,
     colu: String,
     cor: String,

     tv: String,
     tl: String,
     tp: String,
     tpi: String,
     tlu: String,
     tr: String,

     bmiv: String,
     bmil: String,
     bmip: String,
     bmipi: String,
     bmilu: String,
     bmir: String,

     bmdv: String,
     bmdl: String,
     bmdp: String,
     bmdpi: String,
     bmdlu: String,
     bmdr: String,

     pv: String,
     pl: String,
     pp: String,
     ppi: String,
     plu: String,
     pr: String,

     cav: String,
     cal: String,
     cap: String,
     capi: String,
     calu: String,
     car: String,

     rgv: String,
     rgl: String,
     rgp: String,
     rgpi: String,
     rglu: String,
     rgr: String,

     bdv: String,
     bdl: String,
     bdp: String,
     bdpi: String,
     bdlu: String,
     bdr: String,

     div: String,
     dil: String,
     dip: String,
     dipi: String,
     dilu: String,
     dir: String,

     cbv: String,
     cbl: String,
     cbp: String,
     cbpi: String,
     cblu: String,
     cbr: String,

     tov: String,
     tol: String,
     top: String,
     topi: String,
     tolu: String,
     tor: String,

     obs5: String,
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
     
     module.exports = mongoose.model('memaM27', memaM27Schema);
     