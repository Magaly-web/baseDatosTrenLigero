'use strict'

var mmmaM09 = require('../../../models/smm/mayor/MMMA_M09');

const MMMA_M09 = {};

MMMA_M09.getMMMA_M09Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM09.findById(id)
    res.json(maintenance)
};
MMMA_M09.editMMMA_M09Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M09 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM09.findByIdAndUpdate(id, { $set: MMMA_M09}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M09.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM09.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M09.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM09.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M09.getAllMaintenenceMMMA_M09 = async (req, res) => {
    const maintenances = await mmmaM09.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M09.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M09New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM09.findByIdAndUpdate(id, { $set: historyMMMA_M09New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M09.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM09.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M09.createMaintenenceMMMA_M09 = async (req, res) => {
    const maintenence = new mmmaM09(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M09;