
const mongoose = require('mongoose');
const {Schema} = mongoose;
const memeC06Schema = new Schema({
    
    trainModel: { type: String, required: true },
    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},

    unidad: { type: Number, required: true },
    num_inspeccion:{ type: String, required: true },
    kilometraje: { type: Number },
    hora_inicio: { type: String },
    hora_termino: { type: String },

        //rf90
            r1TyPRev90: Boolean,
            r1TyPLimp90: Boolean,

            r1PdARev90: Boolean,
            r1PdALimp90: Boolean,

            r1TorRev90: Boolean,
            r1TorLimp90: Boolean,

            r1SerpRev90: Boolean,
            r1SerpSop90: Boolean,
            r1SerpLimp90: Boolean,

            r1AisRev90: Boolean,
            r1AisLimp90: Boolean,

            r2TyPRev90: Boolean,
            r2TyPLimp90: Boolean,

            r2PdARev90: Boolean,
            r2PdALimp90: Boolean,

            r2TorRev90: Boolean,
            r2TorLimp90: Boolean,

            r2SerpRev90: Boolean,
            r2SerpSop90: Boolean,
            r2SerpLimp90: Boolean,
            
            r2AisRev90: Boolean,
            r2AisLimp90: Boolean,

            r3TyPRev90: Boolean,
            r3TyPLimp90: Boolean,

            r3PdARev90: Boolean,
            r3PdALimp90: Boolean,

            r3TorRev90: Boolean,
            r3TorLimp90: Boolean,

            r3SerpRev90: Boolean,
            r3SerpSop90: Boolean,
            r3SerpLimp90: Boolean,

            r3AisRev90: Boolean,
            r3AisLimp90: Boolean,

            r4TyPRev90: Boolean,
            r4TyPLimp90: Boolean,

            r4PdARev90: Boolean,
            r4PdALimp90: Boolean,

            r4TorRev90: Boolean,
            r4TorLimp90: Boolean,

            r4SerpRev90: Boolean,
            r4SerpSop90: Boolean,
            r4SerpLimp90: Boolean,

            r4AisRev90: Boolean,
            r4AisLimp90: Boolean,

            r5TyPRev90: Boolean,
            r5TyPLimp90: Boolean,

            r5PdARev90: Boolean,
            r5PdALimp90: Boolean,

            r5TorRev90: Boolean,
            r5TorLimp90: Boolean,

            r5SerpRev90: Boolean,
            r5SerpSop90: Boolean,
            r5SerpLimp90: Boolean,

            r5AisRev90: Boolean,
            r5AisLimp90: Boolean,


        //rf95
            r1TyPRev95: Boolean,
            r1TyPLimp95: Boolean,

            r1PdARev95: Boolean,
            r1PdALimp95: Boolean,

            r1TorRev95: Boolean,
            r1TorLimp95: Boolean,

            r1SerpRev95: Boolean,
            r1SerpSop95: Boolean,
            r1SerpLimp95: Boolean,

            r1AisRev95: Boolean,
            r1AisLimp95: Boolean,

            r2TyPRev95: Boolean,
            r2TyPLimp95: Boolean,

            r2PdARev95: Boolean,
            r2PdALimp95: Boolean,

            r2TorRev95: Boolean,
            r2TorLimp95: Boolean,

            r2SerpRev95: Boolean,
            r2SerpSop95: Boolean,
            r2SerpLimp95: Boolean,

            r2AisRev95: Boolean,
            r2AisLimp95: Boolean,

            r3TyPRev95: Boolean,
            r3TyPLimp95: Boolean,

            r3PdARev95: Boolean,
            r3PdALimp95: Boolean,

            r3TorRev95: Boolean,
            r3TorLimp95: Boolean,
        
            r3SerpRev95: Boolean,
            r3SerpSop95: Boolean,
            r3SerpLimp95: Boolean,

            r3AisRev95: Boolean,
            r3AisLimp95: Boolean,

            r4TyPRev95: Boolean,
            r4TyPLimp95: Boolean,

            r4PdARev95: Boolean,
            r4PdALimp95: Boolean,

            r4TorRev95: Boolean,
            r4TorLimp95: Boolean,

            r4SerpRev95: Boolean,
            r4SerpSop95: Boolean,
            r4SerpLimp95: Boolean,

            r4AisRev95: Boolean,
            r4AisLimp95: Boolean,

            r5TyPRev95: Boolean,
            r5TyPLimp95: Boolean,

            r5PdARev95: Boolean,
            r5PdALimp95: Boolean,

            r5TorRev95: Boolean,
            r5TorLimp95: Boolean,

            r5SerpRev95: Boolean,
            r5SerpSop95: Boolean,
            r5SerpLimp95: Boolean,

            r5AisRev95: Boolean,
            r5AisLimp95: Boolean,

            r6TyPRev95: Boolean,
            r6TyPLimp95: Boolean,

            r6PdARev95: Boolean,
            r6PdALimp95: Boolean,

            r6TorRev95: Boolean,
            r6TorLimp95: Boolean,

            r6SerpRev95: Boolean,
            r6SerpSop95: Boolean,
            r6SerpLimp95: Boolean,

            r6AisRev95: Boolean,
            r6AisLimp95: Boolean,
        

        //rf06
            pDaluRev06: Boolean,
            pDaluSop06: Boolean,
                        
            torRev06: Boolean,
            torSop06: Boolean,
            
            serRev06: Boolean,
            serSop06: Boolean,
            
            aisRev06:  Boolean,
            aisSop06: Boolean,
            
            baRev06: Boolean,
            baSop06: Boolean,
            basLimp06: Boolean,
        
        
        reTotal: String,
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

module.exports =mongoose.model('memeC06', memeC06Schema);

