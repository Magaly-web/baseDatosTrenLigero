'use strict'

var mmmaM15 = require('../../../models/smm/mayor/MMMA_M15');

const MMMA_M15 = {};

MMMA_M15.getMMMA_M15Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM15.findById(id)
    res.json(maintenance)
};
MMMA_M15.editMMMA_M15Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M15 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM15.findByIdAndUpdate(id, { $set: MMMA_M15}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M15.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM15.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M15.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM15.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M15.getAllMaintenenceMMMA_M15 = async (req, res) => {
    const maintenances = await mmmaM15.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M15.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M15New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM15.findByIdAndUpdate(id, { $set: historyMMMA_M15New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M15.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM15.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M15.createMaintenenceMMMA_M15 = async (req, res) => {
    const maintenence = new mmmaM15(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M15;