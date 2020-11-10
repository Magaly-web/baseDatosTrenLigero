'use strict'

var mmmaM59 = require('../../../models/smm/mayor/MMMA_M59');

const MMMA_M59 = {};

MMMA_M59.getMMMA_M59Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM59.findById(id)
    res.json(maintenance)
};
MMMA_M59.editMMMA_M59Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M59 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM59.findByIdAndUpdate(id, { $set: MMMA_M59}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M59.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM59.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M59.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM59.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M59.getAllMaintenenceMMMA_M59 = async (req, res) => {
    const maintenances = await mmmaM59.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M59.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M59New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM59.findByIdAndUpdate(id, { $set: historyMMMA_M59New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M59.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM59.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M59.createMaintenenceMMMA_M59 = async (req, res) => {
    const maintenence = new mmmaM59(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M59;