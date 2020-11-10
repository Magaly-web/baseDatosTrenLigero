'use strict'

var mmmaM27 = require('../../../models/smm/mayor/MMMA_M27');

const MMMA_M27 = {};

MMMA_M27.getMMMA_M27Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM27.findById(id)
    res.json(maintenance)
};
MMMA_M27.editMMMA_M27Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M27 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM27.findByIdAndUpdate(id, { $set: MMMA_M27}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M27.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM27.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M27.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM27.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M27.getAllMaintenenceMMMA_M27 = async (req, res) => {
    const maintenances = await mmmaM27.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M27.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M27New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM27.findByIdAndUpdate(id, { $set: historyMMMA_M27New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M27.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM27.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M27.createMaintenenceMMMA_M27 = async (req, res) => {
    const maintenence = new mmmaM27(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M27;