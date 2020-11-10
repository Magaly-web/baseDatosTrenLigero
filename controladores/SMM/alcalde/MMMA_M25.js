'use strict'

var mmmaM25 = require('../../../models/smm/mayor/MMMA_M25');

const MMMA_M25 = {};

MMMA_M25.getMMMA_M25Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM25.findById(id)
    res.json(maintenance)
};
MMMA_M25.editMMMA_M25Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M25 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM25.findByIdAndUpdate(id, { $set: MMMA_M25}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M25.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM25.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M25.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM25.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M25.getAllMaintenenceMMMA_M25 = async (req, res) => {
    const maintenances = await mmmaM25.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M25.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M25New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM25.findByIdAndUpdate(id, { $set: historyMMMA_M25New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M25.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM25.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M25.createMaintenenceMMMA_M25 = async (req, res) => {
    const maintenence = new mmmaM25(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M25;