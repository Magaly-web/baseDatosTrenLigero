const memeC04 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C04');

const MEME_C04 = {};
//Metodos
// Obtiene todos los empleados
MEME_C04.getMEME_C04Data = async (req, res)=>{
    const {id} = req.params;

    const memec04 = await memeC04.findById(id)
    res.json(memec04)
};


// Editar un documento
MEME_C04.editMEME_C04Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC04 = {
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        num_inspeccion: req.body.endTime || '',
        //Ventiladores m2
        m2_1:req.body.m21 || false,
        m2_2:req.body.m22 || false,
        m2_3:req.body.m23 || false,
        m2_4:req.body.m24 || false,
        m2_5:req.body.m25 || false,
        m2_6:req.body.m26 || false,
        m2_7:req.body.m27 || false,

        //Ventiladores m1

        m1_1:req.body.m11 || false,
        m1_2:req.body.m12 || false,
        m1_3:req.body.m13 || false,
        m1_4:req.body.m14 || false,
        m1_5:req.body.m15 || false,
        m1_6:req.body.m16 || false,
        m1_7:req.body.m17 || false,

        //Mantenimiento a ventiladores

        ventiRevision: req.body.vr || false,
        ventiLimp: req.body.vl || false,
        ventiObserva: req.body.vob || '',

        motorVentiladorRevision: req.body.mvr || false,
        motorVentiladorLimp: req.body.mvl || false,
        motorVentiladorObserva: req.body.mvob || '',

        conexionesElectriRevision: req.body.cer || false,
        conexionesElectriLimp: req.body.cel || false,
        conexionesElectriObserva: req.body.ceob || '',

        tapaRevision: req.body.tr || false,
        tapaLimp: req.body.tl || false,
        tapaObserva: req.body.tob || '',

        pestillosRevision: req.body.pr || false,
        pestillosLimp: req.body.pl || false,
        pestillosLubrica: req.body.plu || false,
        pestillosObserva: req.body.pob || '',

        ductosRevision: req.body.dr || false,
        ductosLimp: req.body.dl || false,
        ductosObserva: req.body.dob || '',


        observaciones: req.body.obs || '',
    }
    await memeC04.findByIdAndUpdate(id, { $set: MEME_C04}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C04.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC04.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C04.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC04.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C04.getAllMEME_C04TypeC = async (req, res) => {
    const memec04 = await memeC04.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec04)
};

MEME_C04.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC04New = {
        historyFile: req.body.historyFile || []
    }
    await memeC04.findByIdAndUpdate(id, { $set: historyMEMEC04New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C04.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec04 = await memeC04.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec04)
}

MEME_C04.createMEME_C04TypeC = async (req, res) => {
    const memec04 = new memeC04(req.body)
    
    await memec04.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C04;