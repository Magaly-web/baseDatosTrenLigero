
const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM12Schema = new Schema({

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

     l1: String,
     c1: String,
     cu1: String,
     z1: String,
     d1: String,
     t1: String,
     f1: String,
     i1: String,

     l2: String,
     c2: String,
     cu2: String,
     z2: String,
     d2: String,
     t2: String,
     f2: String,
     i2: String,

     l3: String,
     c3: String,
     cu3: String,
     z3: String,
     d3: String,
     t3: String,
     f3: String,
     i3: String,

     l4: String,
     c4: String,
     cu4: String,
     z4: String,
     d4: String,
     t4: String,
     f4: String,
     i4: String,

     l5: String,
     c5: String,
     cu5: String,
     z5: String,
     d5: String,
     t5: String,
     f5: String,
     i5: String,

     l6: String,
     c6: String,
     cu6: String,
     z6: String,
     d6: String,
     t6: String,
     f6: String,
     i6: String,

     l7: String,
     c7: String,
     cu7: String,
     z7: String,
     d7: String,
     t7: String,
     f7: String,
     i7: String,

     l8: String,
     c8: String,
     cu8: String,
     z8: String,
     d8: String,
     t8: String,
     f8: String,
     i8: String,

     l9: String,
     c9: String,
     cu9: String,
     z9: String,
     d9: String,
     t9: String,
     f9: String,
     i9: String,

     l10: String,
     c10: String,
     cu10: String,
     z10: String,
     d10: String,
     t10: String,
     f10: String,
     i10: String,

     l11: String,
     c11: String,
     cu11: String,
     z11: String,
     d11: String,
     t11: String,
     f11: String,
     i11: String,

     l12: String,
     c12: String,
     cu12: String,
     z12: String,
     d12: String,
     t12: String,
     f12: String,
     i12: String,

     obs2: String,
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
    
    module.exports = mongoose.model('memaM12', memaM12Schema);
