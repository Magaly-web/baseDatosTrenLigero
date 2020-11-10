
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM14Schema = new Schema({

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
     //Freno Socorro M1
     //KFS 1 Derecho
     tor1dr: String,
     tor1dl: String,
     tor1dlu: String,
     tor1dre: String,

     tapa1dr: String,
     tapa1dl: String,
     tapa1dlu: String,
     tapa1dre: String,

     sf1dr: String,
     sf1dl: String,
     sf1dlu: String,
     sf1dre: String,

     p1dr: String,
     p1dl: String,
     p1dlu: String,
     p1dre: String,

     se1dr: String,
     se1dl: String,
     se1dlu: String,
     se1dre: String,

     re1dr: String,
     re1dl: String,
     re1dlu: String,
     re1dre: String,

     //Conmutador freno socorro
     co1dl: String,
     co1dc: String,
     co1do: String,

     cna1dl: String,
     cna1dc: String,
     cna1do: String,

     cnc1dl: String,
     cnc1dc: String,
     cnc1do: String,

     //KFS 1 Izquierdo

     tor1ir: String,
     tor1il: String,
     tor1ilu: String,
     tor1ire: String,

     tapa1ir: String,
     tapa1il: String,
     tapa1ilu: String,
     tapa1ire: String,

     sf1ir: String,
     sf1il: String,
     sf1ilu: String,
     sf1ire: String,

     p1ir: String,
     p1il: String,
     p1ilu: String,
     p1ire: String,

     se1ir: String,
     se1il: String,
     se1ilu: String,
     se1ire: String,

     re1ir: String,
     re1il: String,
     re1ilu: String,
     re1ire: String,

     //Conmutador freno socorro
     co1il: String,
     co1ic: String,
     co1io: String,

     cna1il: String,
     cna1ic: String,
     cna1io: String,

     cnc1il: String,
     cnc1ic: String,
     cnc1io: String,

     //KFS 2 Derecho
     tor2dr: String,
     tor2dl: String,
     tor2dlu: String,
     tor2dre: String,

     tapa2dr: String,
     tapa2dl: String,
     tapa2dlu: String,
     tapa2dre: String,

     sf2dr: String,
     sf2dl: String,
     sf2dlu: String,
     sf2dre: String,

     p2dr: String,
     p2dl: String,
     p2dlu: String,
     p2dre: String,

     se2dr: String,
     se2dl: String,
     se2dlu: String,
     se2dre: String,

     re2dr: String,
     re2dl: String,
     re2dlu: String,
     re2dre: String,

     //Conmutador freno socorro
     co2dl: String,
     co2dc: String,
     co2do: String,

     cna2dl: String,
     cna2dc: String,
     cna2do: String,

     cnc2dl: String,
     cnc2dc: String,
     cnc2do: String,

     //KFS 2 Izquierdo
     tor2ir: String,
     tor2il: String,
     tor2ilu: String,
     tor2ire: String,

     tapa2ir: String,
     tapa2il: String,
     tapa2ilu: String,
     tapa2ire: String,

     sf2ir: String,
     sf2il: String,
     sf2ilu: String,
     sf2ire: String,

     p2ir: String,
     p2il: String,
     p2ilu: String,
     p2ire: String,

     se2ir: String,
     se2il: String,
     se2ilu: String,
     se2ire: String,

     re2ir: String,
     re2il: String,
     re2ilu: String,
     re2ire: String,

     //Conmutador freno socorro
     co2il: String,
     co2ic: String,
     co2io: String,

     cna2il: String,
     cna2ic: String,
     cna2io: String,

     cnc2il: String,
     cnc2ic: String,
     cnc2io: String,

     //KFS 3 Derecho
     tor3dr: String,
     tor3dl: String,
     tor3dlu: String,
     tor3dre: String,

     tapa3dr: String,
     tapa3dl: String,
     tapa3dlu: String,
     tapa3dre: String,

     sf3dr: String,
     sf3dl: String,
     sf3dlu: String,
     sf3dre: String,

     p3dr: String,
     p3dl: String,
     p3dlu: String,
     p3dre: String,

     se3dr: String,
     se3dl: String,
     se3dlu: String,
     se3dre: String,

     re3dr: String,
     re3dl: String,
     re3dlu: String,
     re3dre: String,

     //Conmutador freno socorro
     co3dl: String,
     co3dc: String,
     co3do: String,

     cna3dl: String,
     cna3dc: String,
     cna3do: String,

     cnc3dl: String,
     cnc3dc: String,
     cnc3do: String,

     //KFS 3 Izquierdo
     tor3ir: String,
     tor3il: String,
     tor3ilu: String,
     tor3ire: String,

     tapa3ir: String,
     tapa3il: String,
     tapa3ilu: String,
     tapa3ire: String,

     sf3ir: String,
     sf3il: String,
     sf3ilu: String,
     sf3ire: String,

     p3ir: String,
     p3il: String,
     p3ilu: String,
     p3ire: String,

     se3ir: String,
     se3il: String,
     se3ilu: String,
     se3ire: String,

     re3ir: String,
     re3il: String,
     re3ilu: String,
     re3ire: String,

     //Conmutador freno socorro
     co3il: String,
     co3ic: String,
     co3io: String,

     cna3il: String,
     cna3ic: String,
     cna3io: String,

     cnc3il: String,
     cnc3ic: String,
     cnc3io: String,

     obs2: String,

     //Freno Socorro M2

     //KFS 1 Derecho
     tor21dr: String,
     tor21dl: String,
     tor21dlu: String,
     tor21dre: String,

     tapa21dr: String,
     tapa21dl: String,
     tapa21dlu: String,
     tapa21dre: String,

     sf21dr: String,
     sf21dl: String,
     sf21dlu: String,
     sf21dre: String,

     p21dr: String,
     p21dl: String,
     p21dlu: String,
     p21dre: String,

     se21dr: String,
     se21dl: String,
     se21dlu: String,
     se21dre: String,

     re21dr: String,
     re21dl: String,
     re21dlu: String,
     re21dre: String,

     //Conmutador freno socorro
     co21dl: String,
     co21dc: String,
     co21do: String,

     cna21dl: String,
     cna21dc: String,
     cna21do: String,

     cnc21dl: String,
     cnc21dc: String,
     cnc21do: String,

     //KFS 1 Izquierdo

     tor21ir: String,
     tor21il: String,
     tor21ilu: String,
     tor21ire: String,

     tapa21ir: String,
     tapa21il: String,
     tapa21ilu: String,
     tapa21ire: String,

     sf21ir: String,
     sf21il: String,
     sf21ilu: String,
     sf21ire: String,

     p21ir: String,
     p21il: String,
     p21ilu: String,
     p21ire: String,

     se21ir: String,
     se21il: String,
     se21ilu: String,
     se21ire: String,

     re21ir: String,
     re21il: String,
     re21ilu: String,
     re21ire: String,

     //Conmutador freno socorro
     co21il: String,
     co21ic: String,
     co21io: String,

     cna21il: String,
     cna21ic: String,
     cna21io: String,

     cnc21il: String,
     cnc21ic: String,
     cnc21io: String,

     //KFS 2 Derecho
     tor22dr: String,
     tor22dl: String,
     tor22dlu: String,
     tor22dre: String,

     tapa22dr: String,
     tapa22dl: String,
     tapa22dlu: String,
     tapa22dre: String,

     sf22dr: String,
     sf22dl: String,
     sf22dlu: String,
     sf22dre: String,

     p22dr: String,
     p22dl: String,
     p22dlu: String,
     p22dre: String,

     se22dr: String,
     se22dl: String,
     se22dlu: String,
     se22dre: String,

     re22dr: String,
     re22dl: String,
     re22dlu: String,
     re22dre: String,

     //Conmutador freno socorro
     co22dl: String,
     co22dc: String,
     co22do: String,

     cna22dl: String,
     cna22dc: String,
     cna22do: String,

     cnc22dl: String,
     cnc22dc: String,
     cnc22do: String,

     //KFS 2 Izquierdo
     tor22ir: String,
     tor22il: String,
     tor22ilu: String,
     tor22ire: String,

     tapa22ir: String,
     tapa22il: String,
     tapa22ilu: String,
     tapa22ire: String,

     sf22ir: String,
     sf22il: String,
     sf22ilu: String,
     sf22ire: String,

     p22ir: String,
     p22il: String,
     p22ilu: String,
     p22ire: String,

     se22ir: String,
     se22il: String,
     se22ilu: String,
     se22ire: String,

     re22ir: String,
     re22il: String,
     re22ilu: String,
     re22ire: String,

     //Conmutador freno socorro
     co22il: String,
     co22ic: String,
     co22io: String,

     cna22il: String,
     cna22ic: String,
     cna22io: String,

     cnc22il: String,
     cnc22ic: String,
     cnc22io: String,

     //KFS 3 Derecho
     tor32dr: String,
     tor32dl: String,
     tor32dlu: String,
     tor32dre: String,

     tapa32dr: String,
     tapa32dl: String,
     tapa32dlu: String,
     tapa32dre: String,

     sf32dr: String,
     sf32dl: String,
     sf32dlu: String,
     sf32dre: String,

     p32dr: String,
     p32dl: String,
     p32dlu: String,
     p32dre: String,

     se32dr: String,
     se32dl: String,
     se32dlu: String,
     se32dre: String,

     re32dr: String,
     re32dl: String,
     re32dlu: String,
     re32dre: String,

     //Conmutador freno socorro
     co32dl: String,
     co32dc: String,
     co32do: String,

     cna32dl: String,
     cna32dc: String,
     cna32do: String,

     cnc32dl: String,
     cnc32dc: String,
     cnc32do: String,

     //KFS 3 Izquierdo
     tor32ir: String,
     tor32il: String,
     tor32ilu: String,
     tor32ire: String,

     tapa32ir: String,
     tapa32il: String,
     tapa32ilu: String,
     tapa32ire: String,

     sf32ir: String,
     sf32il: String,
     sf32ilu: String,
     sf32ire: String,

     p32ir: String,
     p32il: String,
     p32ilu: String,
     p32ire: String,

     se32ir: String,
     se32il: String,
     se32ilu: String,
     se32ire: String,

     re32ir: String,
     re32il: String,
     re32ilu: String,
     re32ire: String,

     //Conmutador freno socorro
     co32il: String,
     co32ic: String,
     co32io: String,

     cna32il: String,
     cna32ic: String,
     cna32io: String,

     cnc32il: String,
     cnc32ic: String,
     cnc32io: String,

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
    
    module.exports = mongoose.model('memaM14', memaM14Schema);
