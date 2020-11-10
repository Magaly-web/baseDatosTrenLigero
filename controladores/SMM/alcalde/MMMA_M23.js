'use strict'

var mmmaM23 = require('../../../models/smm/mayor/MMMA_M23');

const MMMA_M23 = {};

MMMA_M23.getMMMA_M23Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM23.findById(id)
    res.json(maintenance)
};
MMMA_M23.editMMMA_M23Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M23 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM23.findByIdAndUpdate(id, { $set: MMMA_M23}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M23.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM23.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M23.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM23.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M23.getAllMaintenenceMMMA_M23 = async (req, res) => {
    const maintenances = await mmmaM23.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M23.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M23New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM23.findByIdAndUpdate(id, { $set: historyMMMA_M23New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M23.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM23.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M23.createMaintenenceMMMA_M23 = async (req, res) => {
    const maintenence = new mmmaM23(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M23;