
const memeC13 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C13');

const MEME_C13 = {};
//Metodos
// Obtiene todos los empleados
MEME_C13.getMEME_C13Data = async (req, res)=>{
    const {id} = req.params;

    const memec13 = await memeC13.findById(id)
    res.json(memec13)
};


// Editar un documento
MEME_C13.editMEME_C13Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC13 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',        

        //Contactos principales
        pcpl:req.body.pcpll || false,
        pcpr:req.body.pcprr || false,
        pcpo: req.body.pcpoo || '',
        pccl:req.body.pccll || false,
        pccr:req.body.pccrr || false,
        pcco: req.body.pccoo || '',
        pcrfl:req.body.pcrfll || false,
        pcrfr:req.body.pcrfrr || false,
        pcrfo: req.body.pcrfoo || '',
        pctl:req.body.pctll || false,
        pctr:req.body.pctrr || false,
        pcto: req.body.pctoo || '',
        
        //Contactos Axiliares
        acpl:req.body.acpll || false,
        acpr:req.body.acprr || false,
        acpo: req.body.acpoo || '',
        accl:req.body.accll || false,
        accr:req.body.accrr || false,
        acco: req.body.accoo || '',
        acrfl:req.body.acrfll || false,
        acrfr:req.body.acrfrr || false,
        acrfo: req.body.acrfoo || '',
        actl:req.body.actll || false,
        actr:req.body.actrr || false,
        acto: req.body.actoo || '',
        
        //ctrl
        cmel:req.body.cmell || false,
        cmer:req.body.cmerr || false,
        cmeo: req.body.cmeoo || '',
        radl:req.body.radll || false,
        radr:req.body.radrr || false,
        rado: req.body.radoo || '',
        ratl:req.body.ratll || false,
        ratr:req.body.ratrr || false,
        rato: req.body.ratoo || '',
        cvtl:req.body.cvtll || false,
        cvtr:req.body.cvtrr || false,
        cvto: req.body.cvtoo || '',
        cv1l:req.body.cv1ll || false,
        cv1r:req.body.cv1rr || false,
        cv1o: req.body.cv1o || '',
        cv2l:req.body.cv2ll || false,
        cv2r:req.body.cv2rr || false,
        cv2o: req.body.cv2oo || '',
        cfsl:req.body.cfsll || false,
        cfsr:req.body.cfsrr || false,
        cfso: req.body.cfso || '',

        observaciones: req.body.obs || '',

    }

    await memeC13.findByIdAndUpdate(id, { $set: MEME_C13}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C13.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC13.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C13.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC13.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C13.getAllMEME_C13TypeC = async (req, res) => {
    const memec13 = await memeC13.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec13)
};

MEME_C13.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC13New = {
        historyFile: req.body.historyFile || []
    }
    await memeC13.findByIdAndUpdate(id, { $set: historyMEMEC13New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C13.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec13 = await memeC13.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec13)
}

MEME_C13.createMEME_C13TypeC = async (req, res) => {
    const memec13 = new memeC13(req.body)
    
    await memec13.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C13;