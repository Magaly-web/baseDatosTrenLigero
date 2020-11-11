'use strict'

var mmmeC16 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C16');

const MMME_C16 = {};

MMME_C16.getMMME_C16Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC16.findById(id)
    res.json(maintenance)
};
MMME_C16.editMMME_C16Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C16 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        bulonM1Rev: req.body || false,
        bulonM1Limp: req.body || false, 
        bulonM1Camb: req.body || false,
        bulonM2Rev: req.body || false,
        bulonM2Limp: req.body || false, 
        bulonM2Camb: req.body || false,
        observacionesB: req.body || '',

        prisioneroM1Rev: req.body || false,
        prisioneroM1Limp: req.body || false,
        prisioneroM1Lub: req.body || false, 
        prisioneroM1Camb: req.body || false,
        prisioneroM2Rev: req.body || false,
        prisioneroM2Limp: req.body || false, 
        prisioneroM2Lub: req.body || false, 
        prisioneroM2Camb: req.body || false,
        observacionesP: req.body || '',

        tapaPM1Rev: req.body || false,
        tapaPM1Limp: req.body || false,
        tapaPM1Lub: req.body || false, 
        tapaPM1Camb: req.body || false,
        tapaPM2Rev: req.body || false,
        tapaPM2Limp: req.body || false, 
        tapaPM2Lub: req.body || false, 
        tapaPM2Camb: req.body || false,
        observacionesTp: req.body || '',

        tornilloM1Rev: req.body || false,
        tornilloM1Limp: req.body || false,
        tornilloM1Lub: req.body || false, 
        tornilloM1Camb: req.body || false,
        tornilloM2Rev: req.body || false,
        tornilloM2Limp: req.body || false, 
        tornilloM2Lub: req.body || false, 
        tornilloM2Camb: req.body || false,
        observacionesT: req.body || '',

        sirgaM1Rev: req.body || false,
        sirgaM1Limp: req.body || false,
        sirgaM1Lub: req.body || false, 
        sirgaM1Camb: req.body || false,
        sirgaM2Rev: req.body || false,
        sirgaM2Limp: req.body || false, 
        sirgaM2Lub: req.body || false, 
        sirgaM2Camb: req.body || false,
        observacionesS: req.body || '',

        anilloSM1Rev: req.body || false,
        anilloSM1Limp: req.body || false,
        anilloSM1Lub: req.body || false, 
        anilloSM1Camb: req.body || false,
        anilloSM2Rev: req.body || false,
        anilloSM2Limp: req.body || false, 
        anilloSM2Lub: req.body || false, 
        anilloSM2Camb: req.body || false,
        observacionesAs: req.body || '',

        cuerpoM1Rev: req.body || false,
        cuerpoM1Limp: req.body || false,
        cuerpoM1Lub: req.body || false, 
        cuerpoM1Camb: req.body || false,
        cuerpoM2Rev: req.body || false,
        cuerpoM2Limp: req.body || false, 
        cuerpoM2Lub: req.body || false, 
        cuerpoM2Camb: req.body || false,
        observacionesC: req.body || '',

        juntaOM1Rev: req.body || false,
        juntaOM1Limp: req.body || false,
        juntaOM1Lub: req.body || false, 
        juntaOM1Camb: req.body || false,
        juntaOM2Rev: req.body || false,
        juntaOM2Limp: req.body || false, 
        juntaOM2Lub: req.body || false, 
        juntaOM2Camb: req.body || false,
        observacionesJo: req.body || '',

        bridaIM1Rev: req.body || false,
        bridaIM1Limp: req.body || false,
        bridaIM1Lub: req.body || false, 
        bridaIM1Camb: req.body || false,
        bridaIM2Rev: req.body || false,
        bridaIM2Limp: req.body || false, 
        bridaIM2Lub: req.body || false, 
        bridaIM2Camb: req.body || false,
        observacionesBi: req.body || '',

        tapasM1Rev: req.body || false,
        tapasM1Limp: req.body || false,
        tapasM1Lub: req.body || false, 
        tapasM1Camb: req.body || false,
        tapasM2Rev: req.body || false,
        tapasM2Limp: req.body || false, 
        tapasM2Lub: req.body || false, 
        tapasM2Camb: req.body || false,
        observacionesTapas: req.body || '',

        husilloM1Rev: req.body || false,
        husilloM1Limp: req.body || false,
        husilloM1Lub: req.body || false, 
        husilloM1Camb: req.body || false,
        husilloM2Rev: req.body || false,
        husilloM2Limp: req.body || false, 
        husilloM2Lub: req.body || false, 
        husilloM2Camb: req.body || false,
        observacionesH: req.body || '',

        tuercaM1Rev: req.body || false,
        tuercaM1Limp: req.body || false,
        tuercaM1Lub: req.body || false, 
        tuercaM1Camb: req.body || false,
        tuercaM2Rev: req.body || false,
        tuercaM2Limp: req.body || false, 
        tuercaM2Lub: req.body || false, 
        tuercaM2Camb: req.body || false,
        observacionesTuerca: req.body || '',

        pasadorEM1Rev: req.body || false,
        pasadorEM1Limp: req.body || false,
        pasadorEM1Lub: req.body || false, 
        pasadorEM1Camb: req.body || false,
        pasadorEM2Rev: req.body || false,
        pasadorEM2Limp: req.body || false, 
        pasadorEM2Lub: req.body || false, 
        pasadorEM2Camb: req.body || false,
        observacionesPe: req.body || '',

        cojineteRM1Rev: req.body || false,
        cojineteRM1Limp: req.body || false,
        cojineteRM1Lub: req.body || false, 
        cojineteRM1Camb: req.body || false,
        cojineteRM2Rev: req.body || false,
        cojineteRM2Limp: req.body || false, 
        cojineteRM2Lub: req.body || false, 
        cojineteRM2Camb: req.body || false,
        observacionesCr: req.body || '',

        tornillosCM1Rev: req.body || false,
        tornillosCM1Limp: req.body || false,
        tornillosCM1Lub: req.body || false, 
        tornillosCM1Camb: req.body || false,
        tornillosCM2Rev: req.body || false,
        tornillosCM2Limp: req.body || false, 
        tornillosCM2Lub: req.body || false, 
        tornillosCM2Camb: req.body || false,
        observacionesTc: req.body || '',

        arandelaEM1Rev: req.body || false,
        arandelaEM1Limp: req.body || false,
        arandelaEM1Lub: req.body || false, 
        arandelaEM1Camb: req.body || false,
        arandelaEM2Rev: req.body || false,
        arandelaEM2Limp: req.body || false, 
        arandelaEM2Lub: req.body || false, 
        arandelaEM2Camb: req.body || false,
        observacionesAe: req.body || '',

        dicoM1Rev: req.body || false,
        dicoM1Limp: req.body || false,
        dicoM1Lub: req.body || false, 
        dicoM1Camb: req.body || false,
        dicoM2Rev: req.body || false,
        dicoM2Limp: req.body || false, 
        dicoM2Lub: req.body || false, 
        dicoM2Camb: req.body || false,
        observacionesD: req.body || '',

        muelleM1Rev: req.body || false,
        muelleM1Limp: req.body || false,
        muelleM1Lub: req.body || false, 
        muelleM1Camb: req.body || false,
        muelleM2Rev: req.body || false,
        muelleM2Limp: req.body || false, 
        muelleM2Lub: req.body || false, 
        muelleM2Camb: req.body || false,
        observacionesM: req.body || '',

        tornilloRM1Rev: req.body || false,
        tornilloRM1Limp: req.body || false,
        tornilloRM1Lub: req.body || false, 
        tornilloRM1Camb: req.body || false,
        tornilloRM2Rev: req.body || false,
        tornilloRM2Limp: req.body || false, 
        tornilloRM2Lub: req.body || false, 
        tornilloRM2Camb: req.body || false,
        observacionesTr: req.body || '',

        chicoteM1Rev: req.body || false,
        chicoteM1Limp: req.body || false,
        chicoteM1Camb: req.body || false,
        chicoteM2Rev: req.body || false,
        chicoteM2Limp: req.body || false, 
        chicoteM2Camb: req.body || false,
        observacionesCh: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmeC16.findByIdAndUpdate(id, { $set: MMME_C16}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C16.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC16.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C16.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC16.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C16.getAllMaintenenceMMME_C16 = async (req, res) => {
    const maintenances = await mmmeC16.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C16.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C16New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC16.findByIdAndUpdate(id, { $set: historyMMME_C16New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C16.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC16.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C16.createMaintenenceMMME_C16 = async (req, res) => {
    const maintenence = new mmmeC16(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C16;