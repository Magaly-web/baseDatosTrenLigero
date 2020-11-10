
const memeC12 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C12');

const MEME_C12 = {};
//Metodos
// Obtiene todos los empleados
MEME_C12.getMEME_C12Data = async (req, res)=>{
    const {id} = req.params;

    const memec12 = await memeC12.findById(id)
    res.json(memec12)
};


// Editar un documento
MEME_C12.editMEME_C12Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC12 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //tornillo
        trev:req.body.tre || false,
        tlimp:req.body.tlim || false,
        tlubri:req.body.tlubr || false,
        tcamb:req.body.tcam || false,
        
        //tapas
        tarev:req.body.tare || false,
        talimp:req.body.talim || false,
        talubri:req.body.talubr || false,
        tacamb:req.body.tacam || false,

        //soporte
        sfrev:req.body.sfre || false,
        sflimp:req.body.sflim || false,
        sflubri:req.body.sflubr || false,
        sfcamb:req.body.sfcam || false,

        //palanca
        prev:req.body.pre || false,
        plimp:req.body.plim || false,
        plubri:req.body.plubr || false,
        pcamb:req.body.pcam || false,

        //seguros
        srev:req.body.sre || false,
        slimp:req.body.slim || false,
        slubri:req.body.slubr || false,
        scamb:req.body.scam || false,

        //resorte
        rerev:req.body.rere || false,
        relimp:req.body.relim || false,
        relubri:req.body.relubr || false,
        recamb:req.body.recam || false,

        observaciones: req.body.obs || '',

    }

    await memeC12.findByIdAndUpdate(id, { $set: MEME_C12}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C12.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC12.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C12.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC12.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C12.getAllMEME_C12TypeC = async (req, res) => {
    const memec12 = await memeC12.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec12)
};

MEME_C12.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC12New = {
        historyFile: req.body.historyFile || []
    }
    await memeC12.findByIdAndUpdate(id, { $set: historyMEMEC12New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C12.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec12 = await memeC12.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec12)
}

MEME_C12.createMEME_C12TypeC = async (req, res) => {
    const memec12 = new memeC12(req.body)
    
    await memec12.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C12;