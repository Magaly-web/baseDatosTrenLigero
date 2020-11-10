//dos
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC20Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },
        
        //Señal
        c1: String,
        n1: String,

        c2: String,
        n2: String,

        c3: String,
        n3: String,

        c4: String,
        n4: String,

        c5: String,
        n5: String,

        c6: String,
        n6: String,

        c7: String,
        n7: String,

        c8: String,
        n8: String,

        //Motriz 1
        m1p1: Number,
        m1v1: String,
        m1li1: String,
        m1g1: Number,

        m1p2: Number,
        m1v2: String,
        m1li2: String,
        m1g2: Number,

        m1p3: Number,
        m1v3: String,
        m1li3: String,
        m1g3: Number,

        m1p4: Number,
        m1v4: String,
        m1li4: String,
        m1g4: Number,
        
        //Motriz 2
        m2p5: Number,
        m2v5: String,
        m2li5: String,
        m2g5: Number,

        m2p6: Number,
        m2v6: String,
        m2li6: String,
        m2g6: Number,

        m2p7: Number,
        m2v7: String,
        m2li7: String,
        m2g7: Number,

        m2p8: Number,
        m2v8: String,
        m2li8: String,
        m2g8: Number,

        vi1: String,
        vi2: String,
        vi3: String,
        vi4: String,
        vi5: String,
        vi6: String,
        vi7: String,
        vi8: String,

        dm1: String,
        dm2: String,
        dm3: String,
        dm4: String,
        dm5: String,
        dm6: String,
        dm7: String,
        dm8: String,

        rf1: String,
        rf2: String,
        rf3: String,
        rf4: String,
        rf5: String,
        rf6: String,
        rf7: String,
        rf8: String,

        observaciones: String,
        //materialUtilizado

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

    ocumentFormCurrentState: {
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

module.exports =mongoose.model('memeC20', memeC20Schema);