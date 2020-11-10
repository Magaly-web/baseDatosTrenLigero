'use strict'

var mmmaM13 = require('../../../models/smm/mayor/MMMA_M13');

const MMMA_M13 = {};

MMMA_M13.getMMMA_M13Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM13.findById(id)
    res.json(maintenance)
};
MMMA_M13.editMMMA_M13Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M13 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM13.findByIdAndUpdate(id, { $set: MMMA_M13}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M13.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM13.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M13.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM13.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M13.getAllMaintenenceMMMA_M13 = async (req, res) => {
    const maintenances = await mmmaM13.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M13.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M13New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM13.findByIdAndUpdate(id, { $set: historyMMMA_M13New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M13.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM13.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M13.createMaintenenceMMMA_M13 = async (req, res) => {
    const maintenence = new mmmaM13(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M13;