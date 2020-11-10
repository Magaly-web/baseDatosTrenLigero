
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM06Schema = new Schema({

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

    //- Grupo de reveladores M1
    rnc1l: String,
    rnc1d: String,
    rnc1r: String,
    rnc1f: String,

    rtbl: String,
    rtbd: String,
    rtbr: String,
    rtbf: String,

    rnc2l: String,
    rnc2d: String,
    rnc2r: String,
    rnc2f: String,

    rael: String,
    raed: String,
    raer: String,
    raef: String,

    rde1l: String,
    rde1d: String,
    rde1r: String,
    rde1f: String,

    rac1l: String,
    rac1d: String,
    rac1r: String,
    rac1f: String,

    bprl: String,
    bprd: String,
    bprr: String,
    bprf: String,

    //Grupo revelarored 2 m1

    rfp1l: String,
    rfp1r: String,
    rfp1f: String,

    rfp2l: String,
    rfp2r: String,
    rfp2f: String,

    rfa1l: String,
    rfa1r: String,
    rfa1f: String,

    rfa2l: String,
    rfa2r: String,
    rfa2f: String,

    rmc1l: String,
    rmc1r: String,
    rmc1f: String,

    rmc2l: String,
    rmc2r: String,
    rmc2f: String,

    //Grupo de resistencias 

    pb: String,
    r1: String,
    r2: String,
    r3: String,
    r4: String,
    r5: String,
    r6: String,
    r7: String,
    r8: String,

    obs2: String,
    
    //Arnes conectores y dispositivos M1

    c1l: String,
    c1v: String,
    c1t: String,
    c1f: String,

    c2l: String,
    c2v: String,
    c2t: String,
    c2f: String,

    c3l: String,
    c3v: String,
    c3t: String,
    c3f: String,

    c4l: String,
    c4v: String,
    c4t: String,
    c4f: String,

    c5l: String,
    c5v: String,
    c5t: String,
    c5f: String,

    c6l: String,
    c6v: String,
    c6t: String,
    c6f: String,

    c7l: String,
    c7v: String,
    c7t: String,
    c7f: String,

    bmp1l: String,
    bmp1v: String,
    bmp1t: String,
    bmp1f: String,

    bml: String,
    bmv: String,
    bmt: String,
    bmf: String,

    pall: String,
    palv: String,
    palt: String,
    palf: String,

    sapl: String,
    sapv: String,
    sapt: String,
    sapf: String,

    ccl: String,
    ccv: String,
    cct: String,
    ccf: String,

    cppl: String,
    cppv: String,
    cppt: String,
    cppf: String,

    aftl: String,
    aftv: String,
    aftt: String,
    aftf: String,

    afpal: String,
    afpav: String,
    afpat: String,
    afpaf: String,

    apl: String,
    apv: String,
    apt: String,
    apf: String,

    aml: String,
    amv: String,
    amt: String,
    amf: String,
    
    obs3: String,

    //Grupo de Fusibles

    mlpa: String,
    mlpl: String,
    mlpr: String,

    rafraea: String,
    rafrael: String,
    rafraer: String,

    omda: String,
    omdl: String,
    omdr: String,

    ca: String,
    cl: String,
    cr: String,

    upsa: String,
    upsl: String,
    upsr: String,

    eca: String,
    ecl: String,
    ecr: String,

    bsa: String,
    bsl: String,
    bsr: String,

    obs4: String,

    //Grupo de revelaores 1 M2

    m2rnc1l: String,
    m2rnc1r: String,
    m2rnc1f: String,

    m2rtbl: String,
    m2rtbr: String,
    m2rtbf: String,
    
    m2rnc2l: String,
    m2rnc2r: String,
    m2rnc2f: String,

    m2rael: String,
    m2raer: String,
    m2raef: String,

    m2rde1l: String,
    m2rde1r: String,
    m2rde1f: String,

    m2rac1l: String,
    m2rac1r: String,
    m2rac1f: String,

    m2brl: String,
    m2brr: String,
    m2brf: String,

    //--Grupo de reveladores 2 M2

    m2rfp1l: String,
    m2rfp1r: String,
    m2rfp1f: String,

    m2rfp2l: String,
    m2rfp2r: String,
    m2rfp2f: String,

    m2rfa1l: String,
    m2rfa1r: String,
    m2rfa1f: String,

    m2rfa2l: String,
    m2rfa2r: String,
    m2rfa2f: String,

    m2rmc1l: String,
    m2rmc1r: String,
    m2rmc1f: String,

    m2rmc2l: String,
    m2rmc2r: String,
    m2rmc2f: String,

    //--Grupo de resistencias m2

    m2pb: String,
    m2r1: String,
    m2r2: String,
    m2r3: String,
    m2r4: String,
    m2r5: String,
    m2r6: String,
    m2r7: String,
    m2r8: String,

    obs5: String,

    //Arnes conectores y dispositivos M2
    c35l: String,
    c35v: String,
    c35t: String,
    c35f: String,

    c36l: String,
    c36v: String,
    c36t: String,
    c36f: String,

    c37l: String,
    c37v: String,
    c37t: String,
    c37f: String,

    c38l: String,
    c38v: String,
    c38t: String,
    c38f: String,

    c39l: String,
    c39v: String,
    c39t: String,
    c39f: String,

    c40l: String,
    c40v: String,
    c40t: String,
    c40f: String,

    c41l: String,
    c41v: String,
    c41t: String,
    c41f: String,

    m2bmp1l: String,
    m2bmp1v: String,
    m2bmp1t: String,
    m2bmp1f: String,

    m2bml: String,
    m2bmv: String,
    m2bmt: String,
    m2bmf: String,

    m2pall: String,
    m2palv: String,
    m2palt: String,
    m2palf: String,

    m2sapl: String,
    m2sapv: String,
    m2sapt: String,
    m2sapf: String,

    m2ccl: String,
    m2ccv: String,
    m2cct: String,
    m2ccf: String,

    m2cppl: String,
    m2cppv: String,
    m2cppt: String,
    m2cppf: String,

    m2aftl: String,
    m2aftv: String,
    m2aftt: String,
    m2aftf: String,

    m2afpal: String,
    m2afpav: String,
    m2afpat: String,
    m2afpaf: String,

    m2apl: String,
    m2apv: String,
    m2apt: String,
    m2apf: String,

    m2aml: String,
    m2amv: String,
    m2amt: String,
    m2amf: String,

    obs6: String,

    //-----Grupo de fusibles
    m2bsa: String,
    m2bsl: String,
    m2bsr: String,

    m2eca: String,
    m2ecl: String,
    m2ecr: String,

    m2upsa: String,
    m2upsl: String,
    m2upsr: String,

    m2ca: String,
    m2cl: String,
    m2cr: String,

    m2omda: String,
    m2omdl: String,
    m2omdr: String,

    m2rafraea: String,
    m2rafrael: String,
    m2rafraer: String,

    m2mla: String,
    m2mll: String,
    m2mlr: String,

    obs7: String,

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
    
    module.exports = mongoose.model('memaM06', memaM06Schema);
