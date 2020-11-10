const memeC21 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C21');

const MEME_C21 = {};
//Metodos
// Obtiene todos los empleados
MEME_C21.getMEME_C21Data = async (req, res)=>{
    const {id} = req.params;

    const memec21 = await memeC21.findById(id)
    res.json(memec21)
};


// Editar un documento
MEME_C21.editMEME_C21Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC21 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

         // eqMo Equipo Motriz

        dom1ins:req.body.do1ins || false,
        dom2ins:req.body.do2ins || false,
        dom1lim:req.body.do1lim || false,
        dom2lim:req.body.do2lim || false,
        doObs: req.body.doOb || '',

        cem1ins:req.body.ce1ins || false,
        cem2ins:req.body.ce2ins || false,
        cem1lim:req.body.ce1lim || false,
        cem2lim:req.body.ce2lim || false,
        ceObs: req.body.ceOb || '',

        cmm1ins:req.body.cm1ins || false,
        cmm2ins:req.body.cm2ins || false,
        cmm1lim:req.body.cm1lim || false,
        cmm2lim:req.body.cm2lim || false,
        cmObs: req.body.cmOb || '',

        lpm1ins:req.body.lp1ins || false,
        lpm2ins:req.body.lp2ins || false,
        lpm1lim:req.body.lp1lim || false,
        lpm2lim:req.body.lp2lim || false,
        lpObs: req.body.lpOb || '',

        ccm1ins:req.body.cc1ins || false,
        ccm2ins:req.body.cc2ins || false,
        ccm1lim:req.body.cc1lim || false,
        ccm2lim:req.body.cc2lim || false,
        ccObs: req.body.ccOb || '',

        ivm1ins:req.body.iv1ins || false,
        ivm2ins:req.body.iv2ins || false,
        ivm1lim:req.body.iv1lim || false,
        ivm2lim:req.body.iv2lim || false,
        ivObs: req.body.ivOb || '',

        sim1ins:req.body.si1ins || false,
        sim2ins:req.body.si2ins || false,
        sim1lim:req.body.si1lim || false,
        sim2lim:req.body.si2lim || false,
        siObs: req.body.siOb || '',

        icim1ins:req.body.ici1ins || false,
        icim2ins:req.body.ici2ins || false,
        icim1lim:req.body.ici1lim || false,
        icim2lim:req.body.ici2lim || false,
        iciObs: req.body.iciOb || '',


        observaciones: req.body.obs || '',

    }

    await memeC21.findByIdAndUpdate(id, { $set: MEME_C21}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C21.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC21.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C21.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC21.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C21.getAllMEME_C21TypeC = async (req, res) => {
    const memec21 = await memeC21.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec21)
};

MEME_C21.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC21New = {
        historyFile: req.body.historyFile || []
    }
    await memeC21.findByIdAndUpdate(id, { $set: historyMEMEC21New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C21.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec21 = await memeC21.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec21)
}

MEME_C21.createMEME_C21TypeC = async (req, res) => {
    const memec21 = new memeC21(req.body)
    
    await memec21.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C21;