
const memeC10 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C10');

const MEME_C10 = {};
//Metodos
// Obtiene todos los empleados
MEME_C10.getMEME_C10Data = async (req, res)=>{
    const {id} = req.params;

    const memec10 = await memeC10.findById(id)
    res.json(memec10)
};


// Editar un documento
MEME_C10.editMEME_C10Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC10 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //--------------
        m1meLimp:req.body.m1meLim || false,
        m1meRev:req.body.m1meRe || false,
        m1meLub:req.body.m1meLu || false,

        m1torLimp:req.body.m1torLim || false,
        m1torRev:req.body.m1torRe || false,

        m1pLimp:req.body.m1pLim || false,
        m1pRev:req.body.m1pRe || false,

        m1goLimp:req.body.m1goLim || false,
        m1goRev:req.body.m1goRe || false,

        m1maLimp:req.body.m1maLim || false,
        m1maRev:req.body.m1maRe || false,

        m1asLimp:req.body.m1asLim || false,
        m1asRev:req.body.m1asRe || false,

        m1daLimp:req.body.m1daLim || false,
        m1daRev:req.body.m1daRe || false,

        m1moLimp:req.body.m1moLim || false,
        m1moRev:req.body.m1moRe || false,

        m1ceLimp:req.body.m1ceLim || false,
        m1ceRev:req.body.m1ceRe || false,


        m2meLimp:req.body.m2meLim || false,
        m2meRev:req.body.m2meRe || false,
        m2meLub:req.body.m2meLu || false,

        m2torLimp:req.body.m2torLim || false,
        m2torRev:req.body.m2torRe || false,

        m2pLimp:req.body.m2pLim || false,
        m2pRev:req.body.m2pRe || false,

        m2goLimp:req.body.m2goLim || false,
        m2goRev:req.body.m2goRe || false,

        m2maLimp:req.body.m2maLim || false,
        m2maRev:req.body.m2maRe || false,

        m2asLimp:req.body.m2asLim || false,
        m2asRev:req.body.m2asRe || false,

        m2daLimp:req.body.m2daLim || false,
        m2daRev:req.body.m2daRe || false,

        m2moLimp:req.body.m2moLim || false,
        m2moRev:req.body.m2moRe || false,

        m2ceLimp:req.body.m2ceLim || false,
        m2ceRev:req.body.m2ceRe || false,

        observaciones: req.body.obs || '',

    }

    await memeC10.findByIdAndUpdate(id, { $set: MEME_C10}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C10.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC10.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C10.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC10.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C10.getAllMEME_C10TypeC = async (req, res) => {
    const memec10 = await memeC10.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec10)
};

MEME_C10.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC10New = {
        historyFile: req.body.historyFile || []
    }
    await memeC10.findByIdAndUpdate(id, { $set: historyMEMEC10New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C10.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec10 = await memeC10.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec10)
}

MEME_C10.createMEME_C10TypeC = async (req, res) => {
    const memec10 = new memeC10(req.body)
    
    await memec10.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C10;