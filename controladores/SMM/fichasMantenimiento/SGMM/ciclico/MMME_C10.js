'use strict'

var mmmeC10 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C10');

const MMME_C10 = {};

MMME_C10.getMMME_C10Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC10.findById(id)
    res.json(maintenance)
};
MMME_C10.editMMME_C10Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C10 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        noSeriePantografo: req.body || 0,
        noSerieValvula: req.body || 0,

        esfuerzoEstatico1: req.body || 0,
        esfuerzoEstatico2: req.body || 0,
        esfuerzoSobreTopeInferior: req.body || 0,
        tiempoElevacionDescenso1: req.body || 0,
        tiempoElevacionDescenso2: req.body || 0,
        tiempoElevacionDescensoJ: req.body || 0,
        esfuerzoDisparo1: req.body || 0,
        esfuerzoDisparo2: req.body || 0,
        estanqueidad: req.body || 0,

        materialUtilizado: materiales,
    };
    await mmmeC10.findByIdAndUpdate(id, { $set: MMME_C10}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C10.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC10.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C10.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC10.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C10.getAllMaintenenceMMME_C10 = async (req, res) => {
    const maintenances = await mmmeC10.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C10.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C10New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC10.findByIdAndUpdate(id, { $set: historyMMME_C10New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C10.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC10.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C10.createMaintenenceMMME_C10 = async (req, res) => {
    const maintenence = new mmmeC10(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C10;