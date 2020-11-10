const memeC03 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C03');

const MEME_C03 = {};
//Metodos
// Obtiene todos los empleados
MEME_C03.getMEME_C03Data = async (req, res)=>{
    const {id} = req.params;

    const memec03 = await memeC03.findById(id)
    res.json(memec03)
};

// Editar un documento
MEME_C03.editMEME_C03Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let luminariasM1={
        lLimp: req.body.lm1 || false,
        lF: req.body.lfm1 || false,
        lR: req.body.lrm1 || false,
        lC: req.body.lcm1 || false,
        lB: req.body.lbm1 || false,
        lOb: req.body.lobm1 || '',

        sL: req.body.sL1 || false,
        sF: req.body.sfm1 || false,
        sR: req.body.sr1 || false,
        sC: req.body.scm1 || false,
        sB: req.body.sbm1 || false,
        sOb: req.body.sobm1 || '',

        tC: req.body.tcm1 || false,
        tB: req.body.tbm1 || false,
        tOb: req.body.tobm1 || '',

        laL: req.body.laL1 || false,
        laC: req.body.lacm1 || false,
        laB: req.body.labm1 || false,
        laOb: req.body.laobm1 || '',

        bL: req.body.bL1 || false,
        bC: req.body.bcm1 || false,
        bB: req.body.bbm1 || false,
        bOb: req.body.bobm1 || '',

        cL: req.body.cL1 || false,
        cC: req.body.ccm1 || false,
        cB: req.body.cbm1 || false,
        cOb: req.body.cobm1 || '',
            
    }

    let luminariasM2={
        lLm2: req.body.lm2 || false,
        lFm2: req.body.lfm2 || false,
        lRm2: req.body.lrm2 || false,
        lCm2: req.body.lcm2 || false,
        lBm2: req.body.lbm2 || false,
        lObm2: req.body.lobm2 || '',

        sLm2: req.body.sL2 || false,
        sFm2: req.body.sfm2 || false,
        sRm2: req.body.sr2 || false,
        sCm2: req.body.scm2 || false,
        sBm2: req.body.sbm2 || false,
        sObm2: req.body.sobm2 || '',

        tCm2: req.body.tcm2 || false,
        tBm2: req.body.tbm2 || false,
        tObm2: req.body.tobm2 || '',

        laLm2: req.body.laL2 || false,
        laCm2: req.body.lacm2 || false,
        laBm2: req.body.labm2 || false,
        laObm2: req.body.laobm2 || '',

        bLm2: req.body.bL2 || false,
        bCm2: req.body.bcm2 || false,
        bBm2: req.body.bbm2 || false,
        bObm2: req.body.bobm2 || '',

        cLm2: req.body.cL2 || false,
        cCm2: req.body.ccm2 || false,
        cBm2: req.body.cbm2 || false,
        cObm2: req.body.cobm2 || '',   
    }
    let m2 = {
        m2_1:req.body.m21 || false,
        m2_2:req.body.m22 || false,
        m2_3:req.body.m23 || false,
        m2_4:req.body.m24 || false,
        m2_5:req.body.m25 || false,
        m2_6:req.body.m26 || false,
        m2_7:req.body.m27 || false,
        m2_8:req.body.m28 || false,
        m2_9:req.body.m29 || false,

        m2_1_1:req.body.m211 || false,
        m2_1_2:req.body.m212 || false,
        m2_1_3:req.body.m213 || false,
        m2_1_4:req.body.m214 || false,
        m2_1_5:req.body.m215 || false,
        m2_1_6:req.body.m216 || false,
        m2_1_7:req.body.m217 || false,
        m2_1_8:req.body.m218 || false,
        m2_1_9:req.body.m219 || false,
    }
    let m1 = {
        m1_1:req.body.m11 || false,
        m1_2:req.body.m12 || false,
        m1_3:req.body.m13 || false,
        m1_4:req.body.m14 || false,
        m1_5:req.body.m15 || false,
        m1_6:req.body.m16 || false,
        m1_7:req.body.m17 || false,
        m1_8:req.body.m18 || false,
        m1_9:req.body.m19 || false,

        m1_1_1:req.body.m111 || false,
        m1_1_2:req.body.m112 || false,
        m1_1_3:req.body.m113 || false,
        m1_1_4:req.body.m114 || false,
        m1_1_5:req.body.m115 || false,
        m1_1_6:req.body.m116 || false,
        m1_1_7:req.body.m117 || false,
        m1_1_8:req.body.m118 || false,
        m1_1_9:req.body.m119 || false,
    }

    const memeC03 = {
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        num_inspeccion: req.body.endTime || '',

        observaciones: req.body.obs || '',
    }
    await memeC03.findByIdAndUpdate(id, { $set: MEME_C03}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C03.getAllMEME_C03TypeC = async (req, res) => {
    const memec03 = await memeC03.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec03)
};

MEME_C03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC03New = {
        historyFile: req.body.historyFile || []
    }
    await memeC03.findByIdAndUpdate(id, { $set: historyMEMEC03New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec03 = await memeC03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec03)
}

MEME_C03.createMEME_C03TypeC = async (req, res) => {
    const memec03 = new memeC03(req.body)
    
    await memec03.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C03;