'use strict'

var mmmeC21_2 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C21_2');

const MMME_C21_2 = {};

MMME_C21_2.getMMME_C21_2Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC21_2.findById(id)
    res.json(maintenance)
};
MMME_C21_2.editMMME_C21_2Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C21_2 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        valvulaRNoSerie: req.body || '',
        valvulaRLimpieza: req.body || false,
        valvulaRCambO: req.body || false,
        valvulaRLub: req.body || false,

        valvulaPNoSerie: req.body || '',
        valvulaPLimpieza: req.body || false,
        valvulaPCambO: req.body || false,
        valvulaPLub: req.body || false,

        valvulaLNoSerie: req.body || '',
        valvulaLLimpieza: req.body || false,
        valvulaLLub: req.body || false,

        valvulaMNoSerie: req.body || '',
        valvulaMLimpieza: req.body || false,
        valvulaMLub: req.body || false,

        interruptorNoSerie: req.body || '',
        interruptorLimpieza: req.body || false,

        transductorNoSerie: req.body || '',
        transductorLimpieza: req.body || false,

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC21_2.findByIdAndUpdate(id, { $set: MMME_C21_2}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C21_2.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC21_2.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C21_2.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC21_2.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C21_2.getAllMaintenenceMMME_C21_2 = async (req, res) => {
    const maintenances = await mmmeC21_2.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C21_2.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C21_2New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC21_2.findByIdAndUpdate(id, { $set: historyMMME_C21_2New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C21_2.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC21_2.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C21_2.createMaintenenceMMME_C21_2 = async (req, res) => {
    const maintenence = new mmmeC21_2(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C21_2;