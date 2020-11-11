'use strict'

var mmmeC13 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C13');

const MMME_C13 = {};

MMME_C13.getMMME_C13Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC13.findById(id)
    res.json(maintenance)
};
MMME_C13.editMMME_C13Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C13 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        //TE-90 Y TE-95
        tornillosm1Rev: req.body || false,
        tornillosm1Limp: req.body || false,
        tornillosm1Camb: req.body || false,
        tornillosm1Danios: req.body || false,
        observacionesTm1: req.body || '',

        zoclosm1Rev: req.body || false,
        zoclosm1Limp: req.body || false,
        zoclosm1Danios: req.body || false,
        observacionesZm1: req.body || '',

        correderasm1Rev: req.body || false,
        correderasm1Limp: req.body || false,
        correderasm1Danios: req.body || false,
        correderasm1Asp: req.body || false,
        observacionesCm1: req.body || '',

        tornillosm2Rev: req.body || false,
        tornillosm2Limp: req.body || false,
        tornillosm2Camb: req.body || false,
        tornillosm2Danios: req.body || false,
        observacionesTm2: req.body || '',

        zoclosm2Rev: req.body || false,
        zoclosm2Limp: req.body || false,
        zoclosm2Danios: req.body || false,
        observacionesZm2: req.body || '',

        correderasm2Rev: req.body || false,
        correderasm2Limp: req.body || false,
        correderasm2Danios: req.body || false,
        correderasm2Asp: req.body || false,
        observacionesCm2: req.body || '',

        //TE-06
        pestillosM1Rev: req.body || false,
        pestillosM1Limp: req.body || false,
        pestillosM1Camb: req.body || false,
        pestillosM1Danios: req.body || false,
        observacionesPM1: req.body || '',

        zoclosM1Rev: req.body || false,
        zoclosM1Limp: req.body || false,
        zoclosM1Danios: req.body || false,
        observacionesZM1: req.body || '',

        correderasM1Rev: req.body || false,
        correderasM1Limp: req.body || false,
        correderasM1Danios: req.body || false,
        observacionesCM1: req.body || '',

        bisagrasM1Rev: req.body || false,
        bisagrasM1Limp: req.body || false,
        bisagrasM1Danios: req.body || false,
        observacionesBM1: req.body || '',

        pestillosM2Rev: req.body || false,
        pestillosM2Limp: req.body || false,
        pestillosM2Camb: req.body || false,
        pestillosM2Danios: req.body || false,
        observacionesPM2: req.body || '',

        zoclosM2Rev: req.body || false,
        zoclosM2Limp: req.body || false,
        zoclosM2Danios: req.body || false,
        observacionesZM2: req.body || '',

        correderasM2Rev: req.body || false,
        correderasM2Limp: req.body || false,
        correderasM2Danios: req.body || false,
        observacionesCM2: req.body || '',

        bisagrasM2Rev: req.body || false,
        bisagrasM2Limp: req.body || false,
        bisagrasM2Danios: req.body || false,
        observacionesBM2: req.body || '',
            
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC13.findByIdAndUpdate(id, { $set: MMME_C13}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C13.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC13.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C13.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC13.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C13.getAllMaintenenceMMME_C13 = async (req, res) => {
    const maintenances = await mmmeC13.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C13.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C13New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC13.findByIdAndUpdate(id, { $set: historyMMME_C13New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C13.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC13.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C13.createMaintenenceMMME_C13 = async (req, res) => {
    const maintenence = new mmmeC13(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C13;