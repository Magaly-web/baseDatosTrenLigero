'use strict'

var mmmaM28 = require('../../../models/smm/mayor/MMMA_M28');

const MMMA_M28 = {};

MMMA_M28.getMMMA_M28Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM28.findById(id)
    res.json(maintenance)
};
MMMA_M28.editMMMA_M28Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M28 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM28.findByIdAndUpdate(id, { $set: MMMA_M28}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M28.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM28.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M28.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM28.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M28.getAllMaintenenceMMMA_M28 = async (req, res) => {
    const maintenances = await mmmaM28.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M28.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M28New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM28.findByIdAndUpdate(id, { $set: historyMMMA_M28New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M28.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM28.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M28.createMaintenenceMMMA_M28 = async (req, res) => {
    const maintenence = new mmmaM28(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M28;