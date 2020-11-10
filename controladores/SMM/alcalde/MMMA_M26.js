'use strict'

var mmmaM26 = require('../../../models/smm/mayor/MMMA_M26');

const MMMA_M26 = {};

MMMA_M26.getMMMA_M26Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM26.findById(id)
    res.json(maintenance)
};
MMMA_M26.editMMMA_M26Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M26 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM26.findByIdAndUpdate(id, { $set: MMMA_M26}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M26.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM26.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M26.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM26.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M26.getAllMaintenenceMMMA_M26 = async (req, res) => {
    const maintenances = await mmmaM26.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M26.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M26New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM26.findByIdAndUpdate(id, { $set: historyMMMA_M26New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M26.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM26.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M26.createMaintenenceMMMA_M26 = async (req, res) => {
    const maintenence = new mmmaM26(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M26;