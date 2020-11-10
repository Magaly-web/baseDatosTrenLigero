
const memeC02 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C02');

const MEME_C02 = {};
//Metodos
// Obtiene todos los empleados
MEME_C02.getMEME_C02Data = async (req, res)=>{
    const {id} = req.params;

    const memec02 = await memeC02.findById(id)
    res.json(memec02)
}

// Editar un documento
MEME_C02.editMEME_C02Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC02 = {
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        num_inspeccion: req.body.endTime || '',

        // Medidas de Carbon Tipo Number
        m1ant: req.body.m1ante || 0,
        m1post: req.body.m1poste || 0,
        remolAnt: req.body.remolAnte || 0,
        remolPost: req.body.remolPoste || 0,
        m2ant: req.body.m2ante || 0,
        m2post: req.body.m2poste || 0,
        observaciones: req.body.obs || '',

        //cajaFrost Tipo Boolean
        m1AntLimp: req.body.m1AntLimpi || false,
        m1AntRev: req.body.m1AntReve || false,
        m1PostLimp: req.body.m1PostLimpi || false,
        m1PostRev: req.body.m1PostReve || false,

        remolAntLimp: req.body.remolAntLimpi || false,
        remolAntRev: req.body.remolAntReve || false,
        remolPostLimp: req.body.remolPostLimpi || false,  
        remolPostRev: req.body.remolPostReve || false,

        m2AntLimp: req.body.m2AntLimpi || false,
        m2AntRev: req.body.m2AntReve || false,
        m2PostLimp: req.body.m2PostLimpi || false,
        m2PostRev: req.body.m2PostReve || false,
    }
    await memeC02.findByIdAndUpdate(id, { $set: MEME_C02}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

MEME_C02.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC02.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C02.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC02.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C02.getAllMEME_C02TypeC = async (req, res) => {
    const memec02 = await memeC02.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec02)
};

MEME_C02.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC02New = {
        historyFile: req.body.historyFile || []
    }
    await memeC02.findByIdAndUpdate(id, { $set: historyMEMEC02New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C02.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec02 = await memeC02.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec02)
}

MEME_C02.createMEME_C02TypeC = async (req, res) => {
    const memec02 = new memeC02(req.body)
    
    await memec02.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C02;