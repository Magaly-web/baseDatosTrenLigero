
const memeC16 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C16');

const MEME_C16 = {};
//Metodos
// Obtiene todos los empleados
MEME_C16.getMEME_C16Data = async (req, res)=>{
    const {id} = req.params;

    const memec16 = await memeC16.findById(id)
    res.json(memec16)
};


// Editar un documento
MEME_C16.editMEME_C16Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC16 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //motriz

        mcm1in:req.body.mcm1i || false,
        baim1in:req.body.baim1i || false,
        bapm1in:req.body.bapm1i || false,
        tmgm1in:req.body.tmgm1i || false,
        tfem1in:req.body.tfem1i || false,
        palm1in:req.body.palm1i || false,
        alom1in:req.body.alom1i || false,

        mcm2in:req.body.mcm2i || false,
        baim2in:req.body.baim2i || false,
        bapm2in:req.body.bapm2i || false,
        tmgm2in:req.body.tmgm2i || false,
        tfem2in:req.body.tfem2i || false,
        palm2in:req.body.palm2i || false,
        alom2in:req.body.alom2i || false,
        
        //--------------------------

        mcm1i:req.body.mcm1 || false,
        baim1i:req.body.baim1 || false,
        bapm1i:req.body.bapm1 || false,
        tmgm1i:req.body.tmgm1 || false,
        tfem1i:req.body.tfem1 || false,
        palm1i:req.body.palm1 || false,
        alom1i:req.body.alom1 || false,

        mcm2i:req.body.mcm2 || false,
        baim2i:req.body.baim2 || false,
        bapm2i:req.body.bapm2 || false,
        tmgm2i:req.body.tmgm2 || false,
        tfem2i:req.body.tfem2 || false,
        palm2i:req.body.palm2 || false,
        alom2i:req.body.alom2 || false,

        //--------------------------

        mcm1fu:req.body.mcm1f || false,
        baim1fu:req.body.baim1f || false,
        bapm1fu:req.body.bapm1f || false,
        tmgm1fu:req.body.tmgm1f || false,
        tfem1fu:req.body.tfem1f || false,
        palm1fu:req.body.palm1f || false,
        alom1fu:req.body.alom1f || false,

        mcm2fu:req.body.mcm2f || false,
        baim2fu:req.body.baim2f || false,
        bapm2fu:req.body.bapm2f || false,
        tmgm2fu:req.body.tmgm2f || false,
        tfem2fu:req.body.tfem2f || false,
        palm2fu:req.body.palm2f || false,
        alom2fu:req.body.alom2f || false,

        observaciones: req.body.obs || '',

    }

    await memeC16.findByIdAndUpdate(id, { $set: MEME_C16}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C16.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC16.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C16.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC16.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C16.getAllMEME_C16TypeC = async (req, res) => {
    const memec16 = await memeC16.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec16)
};

MEME_C16.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC16New = {
        historyFile: req.body.historyFile || []
    }
    await memeC16.findByIdAndUpdate(id, { $set: historyMEMEC16New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C16.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec16 = await memeC16.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec16)
}

MEME_C16.createMEME_C16TypeC = async (req, res) => {
    const memec16 = new memeC16(req.body)
    
    await memec16.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C16;