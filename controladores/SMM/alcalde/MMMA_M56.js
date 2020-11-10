'use strict'

var mmmaM56 = require('../../../models/smm/mayor/MMMA_M56');

const MMMA_M56 = {};

MMMA_M56.getMMMA_M56Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM56.findById(id)
    res.json(maintenance)
};
MMMA_M56.editMMMA_M56Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M56 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM56.findByIdAndUpdate(id, { $set: MMMA_M56}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M56.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM56.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M56.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM56.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M56.getAllMaintenenceMMMA_M56 = async (req, res) => {
    const maintenances = await mmmaM56.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M56.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M56New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM56.findByIdAndUpdate(id, { $set: historyMMMA_M56New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M56.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM56.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M56.createMaintenenceMMMA_M56 = async (req, res) => {
    const maintenence = new mmmaM56(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M56;