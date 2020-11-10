
const memeC15 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C15');

const MEME_C15 = {};
//Metodos
// Obtiene todos los empleados
MEME_C15.getMEME_C15Data = async (req, res)=>{
    const {id} = req.params;

    const memec15 = await memeC15.findById(id)
    res.json(memec15)
};


// Editar un documento
MEME_C15.editMEME_C15Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC15 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        s16tr:req.body.s16trr || false,
        s16ts:req.body.s16tss || false,
        s16tl:req.body.s16tll || false,
        s16to:req.body.s16too || '',

        s16cr:req.body.s16crr || false,
        s16cs:req.body.s16css || false,
        s16cl:req.body.s16cll || false,
        s16co:req.body.s16coo || '',

        s16cor:req.body.s16corr || false,
        s16cos:req.body.s16coss || false,
        s16col:req.body.s16coll || false,
        s16coo:req.body.s16coo || '',

        uefcr:req.body.uefcrr || false,
        uefcs:req.body.uefcss || false,
        uefcl:req.body.uefcll || false,
        uefco:req.body.uefcoo || '',

        ueftr:req.body.ueftrr || false,
        uefts:req.body.ueftss || false,
        ueftl:req.body.ueftll || false,
        uefto:req.body.ueftoo || '',

        g011:req.body.g0111 || '',
        g027:req.body.g0277 || '',

        observaciones: req.body.obs || '',

    }

    await memeC15.findByIdAndUpdate(id, { $set: MEME_C15}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C15.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC15.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C15.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC15.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C15.getAllMEME_C15TypeC = async (req, res) => {
    const memec15 = await memeC15.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec15)
};

MEME_C15.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC15New = {
        historyFile: req.body.historyFile || []
    }
    await memeC15.findByIdAndUpdate(id, { $set: historyMEMEC15New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C15.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec15 = await memeC15.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec15)
}

MEME_C15.createMEME_C15TypeC = async (req, res) => {
    const memec15 = new memeC15(req.body)
    
    await memec15.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C15;