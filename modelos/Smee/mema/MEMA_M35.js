
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM35Schema = new Schema({

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
     mca1ef: String,
     mca1r: String,
     mca1l: String,

     mca2ef: String,
     mca2r: String,
     mca2l: String,

     mstef: String,
     mstr: String,
     mstl: String,

     mtcef: String,
     mtcr: String,
     mtcl: String,
     
     maccef: String,
     maccr: String,
     maccl: String,

     mtfef: String,
     mtfr: String,
     mtfl: String,
//-------------------
     bra1l: String,
     bra1ai: String,
     bra1sa: String,
     bra1to: String,

     brb1l: String,
     brb1ai: String,
     brb1sa: String,
     brb1to: String,

     brc1l: String,
     brc1ai: String,
     brc1sa: String,
     brc1to: String,

     //--------------------
     bra2l: String,
     bra2ai: String,
     bra2sa: String,
     bra2to: String,

     brb2l: String,
     brb2ai: String,
     brb2sa: String,
     brb2to: String,

     brc2l: String,
     brc2ai: String,
     brc2sa: String,
     brc2to: String,

     //--------------------
     bra3l: String,
     bra3ai: String,
     bra3sa: String,
     bra3to: String,

     brb3l: String,
     brb3ai: String,
     brb3sa: String,
     brb3to: String,

     brc3l: String,
     brc3ai: String,
     brc3sa: String,
     brc3to: String,

     //-------------
     bra4l: String,
     bra4ai: String,
     bra4sa: String,
     bra4to: String,

     brb4l: String,
     brb4ai: String,
     brb4sa: String,
     brb4to: String,

     brc4l: String,
     brc4ai: String,
     brc4sa: String,
     brc4to: String,

     //--------------------
     bra5l: String,
     bra5ai: String,
     bra5sa: String,
     bra5to: String,

     brb5l: String,
     brb5ai: String,
     brb5sa: String,
     brb5to: String,

     brc5l: String,
     brc5ai: String,
     brc5sa: String,
     brc5to: String,

     obs2: String,

     //------------------M2
        m2ca1c: String,
        m2ca2c: String,
        m2str: String,
     
     //-------------------

        bra1r: String,
        brb1r: String,
        brc1r: String,
        brt1: String,
        bre1: String,

        //-------------------

        bra2r: String,
        brb2r: String,
        brc2r: String,
        brt2: String,
        bre2: String,

        //-------------------

        bra3r: String,
        brb3r: String,
        brc3r: String,
        brt3: String,
        bre3: String,

        //-------------------

        bra4r: String,
        brb4r: String,
        brc4r: String,
        brt4: String,
        bre4: String,

        //-------------------

        bra5r: String,
        brb5r: String,
        brc5r: String,
        brt5: String,
        bre5: String,

        rt: String,

        obs3: String,
        
        // Equipo Utilizado
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
   
   module.exports = mongoose.model('memaM35', memaM35Schema);
   
   

     