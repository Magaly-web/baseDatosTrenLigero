
const memeC09 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C09');

const MEME_C09 = {};
//Metodos
// Obtiene todos los empleados
MEME_C09.getMEME_C09Data = async (req, res)=>{
    const {id} = req.params;

    const memec09 = await memeC09.findById(id)
    res.json(memec09)
};


// Editar un documento
MEME_C09.editMEME_C09Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC09 = {
        
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
        m1caLimp:req.body.m1caLim || false,
        m1caRev:req.body.m1caRe || false,
        m1caLub:req.body.m1caLu || false,

        m1cpLimp:req.body.m1cpLim || false,
        m1cpRev:req.body.m1cpRe || false,
        m1cpLub:req.body.m1cpLu || false,

        m1tpLimp:req.body.m1tpLim || false,
        m1tpRev:req.body.m1tpRe || false,

        m1tppLimp:req.body.m1tppLim || false,
        m1tppRev:req.body.m1tppRe || false,
        
        m2caLimp:req.body.m2caLim || false,
        m2caRev:req.body.m2caRe || false,
        m2caLub:req.body.m2caLu || false,

        m2cpLimp:req.body.m2cpLim || false,
        m2cpRev:req.body.m2cpRe || false,
        m2cpLub:req.body.m2cpLu || false,

        m2tpLimp:req.body.m2tpLim || false,
        m2tpRev:req.body.m2tpRe || false,

        m2tppLimp:req.body.m2tppLim || false,
        m2tppRev:req.body.m2tppRe || false,

        serieMotor:req.body.serie || false,  

        observaciones: req.body.obs || '',

    }

    await memeC09.findByIdAndUpdate(id, { $set: MEME_C09}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C09.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC09.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C09.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC09.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C09.getAllMEME_C09TypeC = async (req, res) => {
    const memec09 = await memeC09.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec09)
};

MEME_C09.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC09New = {
        historyFile: req.body.historyFile || []
    }
    await memeC09.findByIdAndUpdate(id, { $set: historyMEMEC09New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C09.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec09 = await memeC09.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec09)
}

MEME_C09.createMEME_C09TypeC = async (req, res) => {
    const memec09 = new memeC09(req.body)
    
    await memec09.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C09;