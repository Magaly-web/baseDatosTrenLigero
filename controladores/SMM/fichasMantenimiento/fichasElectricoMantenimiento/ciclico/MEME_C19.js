const memeC19 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C19');

const MEME_C19 = {};
//Metodos
// Obtiene todos los empleados
MEME_C19.getMEME_C19Data = async (req, res)=>{
    const {id} = req.params;

    const memec19 = await memeC19.findById(id)
    res.json(memec19)
};


// Editar un documento
MEME_C19.editMEME_C19Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC19 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        oper1:req.body.per1 || false,

        oper2:req.body.per2 || false,
        res2:req.body.res22 || '',

        oper3:req.body.per3 || false,
        cons3:req.body.con3 || false,

        oper4:req.body.per4 || false,
        cons4:req.body.con4 || false,

        oper5:req.body.per5 || false,
        res5:req.body.res55 || '',

        oper6:req.body.per6 || false,
        res6:req.body.res66 || '',

        oper7:req.body.per7 || false,
        res7:req.body.res77 || '',

        oper8:req.body.per8 || false,
        res8:req.body.res88 || '',

        observaciones: req.body.obs || '',

    }

    await memeC19.findByIdAndUpdate(id, { $set: MEME_C19}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C19.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC19.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C19.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC19.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C19.getAllMEME_C19TypeC = async (req, res) => {
    const memec19 = await memeC19.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec19)
};

MEME_C19.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC19New = {
        historyFile: req.body.historyFile || []
    }
    await memeC19.findByIdAndUpdate(id, { $set: historyMEMEC19New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C19.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec19 = await memeC19.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec19)
}

MEME_C19.createMEME_C19TypeC = async (req, res) => {
    const memec19 = new memeC19(req.body)
    
    await memec19.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C19;
