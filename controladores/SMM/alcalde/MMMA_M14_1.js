'use strict'

var mmmaM14_1 = require('../../../models/smm/mayor/MMMA_M14_1');

const MMMA_M14_1 = {};

MMMA_M14_1.getMMMA_M14_1Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM14_1.findById(id)
    res.json(maintenance)
};
MMMA_M14_1.editMMMA_M14_1Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M14_1 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM14_1.findByIdAndUpdate(id, { $set: MMMA_M14_1}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M14_1.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM14_1.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M14_1.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM14_1.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M14_1.getAllMaintenenceMMMA_M14_1 = async (req, res) => {
    const maintenances = await mmmaM14_1.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M14_1.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M14_1New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM14_1.findByIdAndUpdate(id, { $set: historyMMMA_M14_1New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M14_1.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM14_1.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M14_1.createMaintenenceMMMA_M14_1 = async (req, res) => {
    const maintenence = new mmmaM14_1(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M14_1;