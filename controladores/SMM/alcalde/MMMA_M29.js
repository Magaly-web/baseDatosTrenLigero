'use strict'

var mmmaM29 = require('../../../models/smm/mayor/MMMA_M29');

const MMMA_M29 = {};

MMMA_M29.getMMMA_M29Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM29.findById(id)
    res.json(maintenance)
};
MMMA_M29.editMMMA_M29Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M29 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM29.findByIdAndUpdate(id, { $set: MMMA_M29}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M29.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM29.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M29.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM29.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M29.getAllMaintenenceMMMA_M29 = async (req, res) => {
    const maintenances = await mmmaM29.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M29.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M29New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM29.findByIdAndUpdate(id, { $set: historyMMMA_M29New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M29.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM29.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M29.createMaintenenceMMMA_M29 = async (req, res) => {
    const maintenence = new mmmaM29(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M29;