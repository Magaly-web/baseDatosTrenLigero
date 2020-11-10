const memeC05 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C05');

const MEME_C05 = {};
//Metodos
// Obtiene todos los empleados
MEME_C05.getMEME_C05Data = async (req, res)=>{
    const {id} = req.params;

    const memec05 = await memeC05.findById(id)
    res.json(memec05)
};


// Editar un documento
MEME_C05.editMEME_C05Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC05 = {

        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        num_inspeccion: req.body.endTime || '',

        cbl:req.body.cbli || false,
        cbr:req.body.cbre || false,
        cba:req.body.cbap || false,
        cblu:req.body.cblub || false,

        cl:req.body.cli || false,
        cr:req.body.cre || false,
        ca:req.body.cap || false,
        clu:req.body.club || false,

        col:req.body.coli || false,
        cor:req.body.core || false,
        colu:req.body.colub || false,

        rl:req.body.rli || false,
        rr:req.body.rre || false,
        rlu:req.body.rlub || false,

        bl:req.body.bli || false,
        br:req.body.bre || false,
        ba:req.body.bap || false,

        observaciones: req.body.obs || '',

    }

    await memeC05.findByIdAndUpdate(id, { $set: MEME_C05}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C05.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC05.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C05.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC05.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C05.getAllMEME_C05TypeC = async (req, res) => {
    const memec05 = await memeC05.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec05)
};

MEME_C05.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC05New = {
        historyFile: req.body.historyFile || []
    }
    await memeC05.findByIdAndUpdate(id, { $set: historyMEMEC05New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C05.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec05 = await memeC05.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec05)
}

MEME_C05.createMEME_C05TypeC = async (req, res) => {
    const memec05 = new memeC05(req.body)
    
    await memec05.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C05;