'use strict'

var mmmaM33 = require('../../../models/smm/mayor/MMMA_M33');

const MMMA_M33 = {};

MMMA_M33.getMMMA_M33Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM33.findById(id)
    res.json(maintenance)
};
MMMA_M33.editMMMA_M33Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M33 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM33.findByIdAndUpdate(id, { $set: MMMA_M33}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M33.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM33.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M33.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM33.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M33.getAllMaintenenceMMMA_M33 = async (req, res) => {
    const maintenances = await mmmaM33.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M33.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M33New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM33.findByIdAndUpdate(id, { $set: historyMMMA_M33New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M33.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM33.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M33.createMaintenenceMMMA_M33 = async (req, res) => {
    const maintenence = new mmmaM33(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M33;