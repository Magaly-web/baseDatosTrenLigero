
const memeC08 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C08');

const MEME_C08 = {};
//Metodos
// Obtiene todos los empleados
MEME_C08.getMEME_C08Data = async (req, res)=>{
    const {id} = req.params;

    const memec08 = await memeC08.findById(id)
    res.json(memec08)
};


// Editar un documento
MEME_C08.editMEME_C08Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC08 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        
        //actividadExt
        ceaSop:req.body.ceaSo || false,
        ceaLimp:req.body.ceaLim || false,
        ceaRev:req.body.ceaRe || false,

        avSop:req.body.avSo || false,
        avLimp:req.body.avLim || false,
        avRev:req.body.avRe || false,

        tlSop:req.body.tlSo || false,
        tlLimp:req.body.tlLim || false,
        tlRev:req.body.tlRe || false,

        tisSop:req.body.tisSo || false,
        tisLimp:req.body.tisLim || false,
        tidRev:req.body.tidRe || false,

        //actividadInt

        spLimp:req.body.spLim || false,
        spRev:req.body.spRe || false,

        ttLimp:req.body.ttLim || false,
        ttdRev:req.body.ttRe || false,
        
        ttaLimp:req.body.ttaLim || false,
        ttadRev:req.body.ttaRe || false,

        //elecInter
        cabSop:req.body.cabSo || false,
        cabLimp:req.body.cabLim || false,

        tcSop:req.body.tcSo || false,
        tcLimp:req.body.tcLim || false,

        celeronSop:req.body.celeronSo || false,
        celeronLimp:req.body.celeronLim || false,

        a01a02Sop:req.body.a01a02So || false,
        a01a02Limp:req.body.a01a02Lim || false,

        r11Sop:req.body.r11So || false,
        r11Limp:req.body.r11Lim || false,
        r11Limp:req.body.r11Med || false,


        observaciones: req.body.obs || '',

    }

    await memeC08.findByIdAndUpdate(id, { $set: MEME_C08}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C08.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC08.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C08.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC08.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C08.getAllMEME_C08TypeC = async (req, res) => {
    const memec08 = await memeC08.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec08)
};

MEME_C08.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC08New = {
        historyFile: req.body.historyFile || []
    }
    await memeC08.findByIdAndUpdate(id, { $set: historyMEMEC08New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C08.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec08 = await memeC08.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec08)
}

MEME_C08.createMEME_C08TypeC = async (req, res) => {
    const memec08 = new memeC08(req.body)
    
    await memec08.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C08;