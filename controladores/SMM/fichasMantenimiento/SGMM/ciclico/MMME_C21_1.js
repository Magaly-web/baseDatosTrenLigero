'use strict'

var mmmeC21_1 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C21_1');

const MMME_C21_1 = {};

MMME_C21_1.getMMME_C21_1Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC21_1.findById(id)
    res.json(maintenance)
};
MMME_C21_1.editMMME_C21_1Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C21_1 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        convertidorNoSerie: req.body || false,
        convertidorLimp: req.body || false,
        convertidorCambO: req.body || false,
        convertidorLub: req.body || false,
        convertidorAjust: req.body || false,

        valvulaPNoSerie: req.body || false,
        valvulaPLimp: req.body || false,
        valvulaPCambO: req.body || false,
        valvulaPLub: req.body || false,

        valvulaRNoSerie: req.body || false,
        valvulaRLimp: req.body || false,
        valvulaRCambO: req.body || false,
        valvulaRLub: req.body || false,

        valvulaFUNoSerie: req.body || false,
        valvulaFULimp: req.body || false,
        valvulaFULub: req.body || false,

        trasformadorPNoSerie: req.body || false,
        trasformadorPLimp: req.body || false,
        trasformadorPLub: req.body || false,

        presostatoNoSerie: req.body || false,
        presostatoLimp: req.body || false,

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC21_1.findByIdAndUpdate(id, { $set: MMME_C21_1}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C21_1.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC21_1.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C21_1.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC21_1.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C21_1.getAllMaintenenceMMME_C21_1 = async (req, res) => {
    const maintenances = await mmmeC21_1.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C21_1.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C21_1New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC21_1.findByIdAndUpdate(id, { $set: historyMMME_C21_1New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C21_1.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC21_1.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C21_1.createMaintenenceMMME_C21_1 = async (req, res) => {
    const maintenence = new mmmeC21_1(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C21_1;