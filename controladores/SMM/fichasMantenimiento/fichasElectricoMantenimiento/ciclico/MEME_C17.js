
const memeC17 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C17');

const MEME_C17 = {};
//Metodos
// Obtiene todos los empleados
MEME_C17.getMEME_C17Data = async (req, res)=>{
    const {id} = req.params;

    const memec17 = await memeC17.findById(id)
    res.json(memec17)
};


// Editar un documento
MEME_C17.editMEME_C17Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC17 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //tablilla
        shn1r:req.body.shn1rr || false,
        shn1l:req.body.shn1ll || false,
        shn1a:req.body.shn1aa || false,
        sha1o: req.body.sha1oo || '',

        sht1r:req.body.sht1rr || false,
        sht1l:req.body.sht1ll || false,
        sht1a:req.body.sht1aa || false,
        sht1o: req.body.sht1oo || '',

        bm1r:req.body.bm1rr || false,
        bm1l:req.body.bm1ll || false,
        bm1a:req.body.bm1aa || false,
        bm1o: req.body.bm1oo || '',

        sht2r:req.body.sht2rr || false,
        sht2l:req.body.sht2ll || false,
        sht2a:req.body.sht2aa || false,
        sht2o: req.body.sht2oo || '',

        observaciones: req.body.obs || '',

    }

    await memeC17.findByIdAndUpdate(id, { $set: MEME_C17}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C17.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC17.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C17.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC17.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C17.getAllMEME_C17TypeC = async (req, res) => {
    const memec17 = await memeC17.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec17)
};

MEME_C17.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC17New = {
        historyFile: req.body.historyFile || []
    }
    await memeC17.findByIdAndUpdate(id, { $set: historyMEMEC17New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C17.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec17 = await memeC17.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec17)
}

MEME_C17.createMEME_C17TypeC = async (req, res) => {
    const memec17 = new memeC17(req.body)
    
    await memec17.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C17;