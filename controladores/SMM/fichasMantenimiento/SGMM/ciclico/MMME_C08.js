'use strict'

var mmmeC08 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C08');

const MMME_C08 = {};

MMME_C08.getMMME_C08Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC08.findById(id)
    res.json(maintenance)
};
MMME_C08.editMMME_C08Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C08 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        noBastidorBogieM1: req.body || 0,
        noBastidorBogieR: req.body || 0,
        noBastidorBogieM2: req.body || 0,

        bastidorM1R: re.body || false,
        bastidorM1L: re.body || false,
        bastidorRR: re.body || false,
        bastidorRL: re.body || false,
        bastidorM2R: re.body || false,
        bastidorM2L: re.body || false,
        observacionesB: req.body || '',

        ballestasM1R: re.body || false,
        ballestasM1L: re.body || false,
        ballestasRR: re.body || false,
        ballestasRL: re.body || false,
        ballestasM2R: re.body || false,
        ballestasM2L: re.body || false,
        observacionesBm: req.body || '',

        bridasM1R: re.body || false,
        bridasM1L: re.body || false,
        bridasRR: re.body || false,
        bridasRL: re.body || false,
        bridasM2R: re.body || false,
        bridasM2L: re.body || false,
        observacionesBs: req.body || '',

        amortiguadoresvM1R: re.body || false,
        amortiguadoresvM1L: re.body || false,
        amortiguadoresvRR: re.body || false,
        amortiguadoresvRL: re.body || false,
        amortiguadoresvM2R: re.body || false,
        amortiguadoresvM2L: re.body || false,
        observacionesAv: req.body || '',

        amortiguadoreshM1R: re.body || false,
        amortiguadoreshM1L: re.body || false,
        amortiguadoreshRR: re.body || false,
        amortiguadoreshRL: re.body || false,
        amortiguadoreshM2R: re.body || false,
        amortiguadoreshM2L: re.body || false,
        observacionesAh: req.body || '',

        motorM1R: re.body || false,
        motorM1L: re.body || false,
        motorRR: re.body || false,
        motorRL: re.body || false,
        motorM2R: re.body || false,
        motorM2L: re.body || false,
        observacionesMt: req.body || '',

        reductorM1R: re.body || false,
        reductorM1L: re.body || false,
        reductorM2R: re.body || false,
        reductorM2L: re.body || false,
        observacionesR: req.body || '',

        cableadoM1R: re.body || false,
        cableadoM1L: re.body || false,
        cableadoRR: re.body || false,
        cableadoRL: re.body || false,
        cableadoM2R: re.body || false,
        cableadoM2L: re.body || false,
        observacionesC: req.body || '',

        manequillasM1R: re.body || false,
        manequillasM1L: re.body || false,
        manequillasRR: re.body || false,
        manequillasRL: re.body || false,
        manequillasM2R: re.body || false,
        manequillasM2L: re.body || false,
        observacionesM: req.body || '',

        frenosM1R: re.body || false,
        frenosM1L: re.body || false,
        frenosRR: re.body || false,
        frenosRL: re.body || false,
        frenosM2R: re.body || false,
        frenosM2L: re.body || false,
        observacionesF: req.body || '',

        cilindrosM1R: re.body || false,
        cilindrosM1L: re.body || false,
        cilindrosRR: re.body || false,
        cilindrosRL: re.body || false,
        cilindrosM2R: re.body || false,
        cilindrosM2L: re.body || false,
        observacionesCf: req.body || '',

        busquedaM1R: re.body || false,
        busquedaRR: re.body || false,
        busquedaM2R: re.body || false,
        observacionesBf: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmeC08.findByIdAndUpdate(id, { $set: MMME_C08}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C08.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC08.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C08.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC08.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C08.getAllMaintenenceMMME_C08 = async (req, res) => {
    const maintenances = await mmmeC08.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C08.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C08New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC08.findByIdAndUpdate(id, { $set: historyMMME_C08New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C08.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC08.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C08.createMaintenenceMMME_C08 = async (req, res) => {
    const maintenence = new mmmeC08(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C08;