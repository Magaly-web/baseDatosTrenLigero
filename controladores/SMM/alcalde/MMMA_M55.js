'use strict'

var mmmaM55 = require('../../../models/smm/mayor/MMMA_M55');

const MMMA_M55 = {};

MMMA_M55.getMMMA_M55Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM55.findById(id)
    res.json(maintenance)
};
MMMA_M55.editMMMA_M55Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M55 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM55.findByIdAndUpdate(id, { $set: MMMA_M55}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M55.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM55.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M55.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM55.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M55.getAllMaintenenceMMMA_M55 = async (req, res) => {
    const maintenances = await mmmaM55.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M55.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M55New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM55.findByIdAndUpdate(id, { $set: historyMMMA_M55New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M55.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM55.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M55.createMaintenenceMMMA_M55 = async (req, res) => {
    const maintenence = new mmmaM55(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M55;