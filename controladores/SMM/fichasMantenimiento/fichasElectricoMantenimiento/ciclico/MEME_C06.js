const memeC06 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C06');

const MEME_C06 = {};
//Metodos
// Obtiene todos los empleados
MEME_C06.getMEME_C06Data = async (req, res)=>{
    const {id} = req.params;

    const memec06 = await memeC06.findById(id)
    res.json(memec06)
};


// Editar un documento
MEME_C06.editMEME_C06Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC06 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        num_inspeccion: req.body.endTime || '',

        //RF90

        r1TyPRev90:req.body.TyPRev190 || false,
        r1TyPLimp90: req.body.TyPLimp190 || false,

        r1PdARev90:req.body.PdARev190 || false,
        r1PdALimp90: req.body.PdALimp190 || false,

        r1TorRev90:req.body.TorRev190 || false,
        r1TorLimp90: req.body.TorLimp190 || false,

        r1SerpRev90:req.body.SerpRev190 || false,
        r1SerpSop90: req.body.SerpSop190 || false,
        r1SerpLimp90: req.body.SerpLimp190 || false,

        r1AisRev90:req.body.AisRev190 || false,
        r1AisLimp90: req.body.AisLimp190 || false,

        //r2
        r2TyPRev90:req.body.TyPRev290 || false,
        r2TyPLimp90: req.body.TyPLimp290 || false,

        r2PdARev90:req.body.PdARev290 || false,
        r2PdALimp90: req.body.PdALimp290 || false,

        r2TorRev90:req.body.TorRev290 || false,
        r2TorLimp90: req.body.TorLimp290 || false,

        r2SerpRev90:req.body.SerpRev290 || false,
        r2SerpSop90: req.body.SerpSop290 || false,
        r2SerpLimp90: req.body.SerpLimp290 || false,

        r2AisRev90:req.body.AisRev290 || false,
        r2AisLimp90: req.body.AisLimp290 || false,

        //R3
        r3TyPRev90:req.body.TyPRev390 || false,
        r3TyPLimp90: req.body.TyPLimp390 || false,

        r3PdARev90:req.body.PdARev390 || false,
        r3PdALimp90: req.body.PdALimp390 || false,

        r3TorRev90:req.body.TorRev390 || false,
        r3TorLimp90: req.body.TorLimp390 || false,

        r3SerpRev90:req.body.SerpRev390 || false,
        r3SerpSop90: req.body.SerpSop390 || false,
        r3SerpLimp90: req.body.SerpLimp390 || false,

        r3AisRev90:req.body.AisRev390 || false,
        r3AisLimp90: req.body.AisLimp390 || false,

        //r4
        r4TyPRev90:req.body.TyPRev490 || false,
        r4TyPLimp90: req.body.TyPLimp490 || false,

        r4PdARev90:req.body.PdARev490 || false,
        r4PdALimp90: req.body.PdALimp490 || false,

        r4TorRev90:req.body.TorRev490 || false,
        r4TorLimp90: req.body.TorLimp490 || false,

        r4SerpRev90:req.body.SerpRev490 || false,
        r4SerpSop90: req.body.SerpSop490 || false,
        r4SerpLimp90: req.body.SerpLimp490 || false,

        r4AisRev90:req.body.AisRev490 || false,
        r4AisLimp90: req.body.AisLimp490 || false,

        //R5
        r5TyPRev90:req.body.TyPRev590 || false,
        r5TyPLimp90: req.body.TyPLimp590 || false,

        r5PdARev90:req.body.PdARev590 || false,
        r5PdALimp90: req.body.PdALimp590 || false,

        r5TorRev90:req.body.TorRev590 || false,
        r5TorLimp90: req.body.TorLimp590 || false,

        r5SerpRev90:req.body.SerpRev590 || false,
        r5SerpSop90: req.body.SerpSop590 || false,
        r5SerpLimp90: req.body.SerpLimp590 || false,

        r5AisRev90:req.body.AisRev590 || false,
        r5AisLimp90: req.body.AisLimp590 || false,

        //rf95******************
        r1TyPRev95:req.body.TyPRev195 || false,
        r1TyPLimp95: req.body.TyPLimp195 || false,

        r1PdARev95:req.body.PdARev195 || false,
        r1PdALimp95: req.body.PdALimp195 || false,

        r1TorRev95:req.body.TorRev195 || false,
        r1TorLimp95: req.body.TorLimp195 || false,

        r1SerpRev95:req.body.SerpRev195 || false,
        r1SerpSop95: req.body.SerpSop195 || false,
        r1SerpLimp95: req.body.SerpLimp195 || false,

        r1AisRev95:req.body.AisRev195 || false,
        r1AisLimp95: req.body.AisLimp195 || false,

        //r2
        r2TyPRev95:req.body.TyPRev295 || false,
        r2TyPLimp95: req.body.TyPLimp295 || false,

        r2PdARev95:req.body.PdARev295 || false,
        r2PdALimp95: req.body.PdALimp295 || false,

        r2TorRev95:req.body.TorRev295 || false,
        r2TorLimp95: req.body.TorLimp295 || false,

        r2SerpRev95:req.body.SerpRev295 || false,
        r2SerpSop95: req.body.SerpSop295 || false,
        r2SerpLimp95: req.body.SerpLimp295 || false,

        r2AisRev95:req.body.AisRev295 || false,
        r2AisLimp95: req.body.AisLimp295 || false,

        //R3
        r3TyPRev95:req.body.TyPRev395 || false,
        r3TyPLimp95: req.body.TyPLimp395 || false,

        r3PdARev95:req.body.PdARev395 || false,
        r3PdALimp95: req.body.PdALimp395 || false,

        r3TorRev95:req.body.TorRev395 || false,
        r3TorLimp95: req.body.TorLimp395 || false,

        r3SerpRev95:req.body.SerpRev395 || false,
        r3SerpSop95: req.body.SerpSop395 || false,
        r3SerpLimp95: req.body.SerpLimp395 || false,

        r3AisRev95:req.body.AisRev395 || false,
        r3AisLimp95: req.body.AisLimp395 || false,

        //r4
        r4TyPRev95:req.body.TyPRev495 || false,
        r4TyPLimp95: req.body.TyPLimp495 || false,

        r4PdARev95:req.body.PdARev495 || false,
        r4PdALimp95: req.body.PdALimp495 || false,

        r4TorRev95:req.body.TorRev495 || false,
        r4TorLimp95: req.body.TorLimp495 || false,

        r4SerpRev95:req.body.SerpRev495 || false,
        r4SerpSop95: req.body.SerpSop495 || false,
        r4SerpLimp95: req.body.SerpLimp495 || false,

        r4AisRev95:req.body.AisRev495 || false,
        r4AisLimp95: req.body.AisLimp495 || false,

        //R5
        r5TyPRev95:req.body.TyPRev595 || false,
        r5TyPLimp95: req.body.TyPLimp595 || false,

        r5PdARev95:req.body.PdARev595 || false,
        r5PdALimp95: req.body.PdALimp595 || false,

        r5TorRev95:req.body.TorRev595 || false,
        r5TorLimp95: req.body.TorLimp595 || false,

        r5SerpRev95:req.body.SerpRev595 || false,
        r5SerpSop95: req.body.SerpSop595 || false,
        r5SerpLimp95: req.body.SerpLimp595 || false,

        r5AisRev95:req.body.AisRev595 || false,
        r5AisLimp95: req.body.AisLimp595 || false,

        //r6
        r6TyPRev95:req.body.TyPRev695 || false,
        r6TyPLimp95: req.body.TyPLimp695 || false,

        r6PdARev95:req.body.PdARev695 || false,
        r6PdALimp95: req.body.PdALimp695 || false,

        r6TorRev95:req.body.TorRev695 || false,
        r6TorLimp95: req.body.TorLimp695 || false,

        r6SerpRev95:req.body.SerpRev695 || false,
        r6SerpSop95: req.body.SerpSop695 || false,
        r6SerpLimp95: req.body.SerpLimp695 || false,

        r6AisRev95:req.body.AisRev695 || false,
        r6AisLimp95: req.body.AisLimp695 || false,

        //RF06
        pDaluRev06:req.body.aluRev06 || false,
        pDaluSop06: req.body.aluSop06 || false,

        torRev06:req.body.Rev06 || false,
        torSop06: req.body.Sop06 || false,

        serRev06:req.body.rRev06 || false,
        serSop06: req.body.rSop06 || false,

        aisRev06:req.body.isRev06 || false,
        aisSop06: req.body.isSop06 || false,

        baRev06: req.body.aRev06 || false,
        baSop06:req.body.aSop06 || false,
        basLimp06: req.body.asLimp06 || false,

        reTotal: req.body.rTotal || '',
        

        observaciones: req.body.obs || '',

    }

    await memeC06.findByIdAndUpdate(id, { $set: MEME_C06}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C06.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC06.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C06.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC06.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C06.getAllMEME_C06TypeC = async (req, res) => {
    const memec06 = await memeC06.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec06)
};

MEME_C06.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC06New = {
        historyFile: req.body.historyFile || []
    }
    await memeC06.findByIdAndUpdate(id, { $set: historyMEMEC06New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C06.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec06 = await memeC06.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec06)
}

MEME_C06.createMEME_C06TypeC = async (req, res) => {
    const memec06 = new memeC06(req.body)
    
    await memec06.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C06;