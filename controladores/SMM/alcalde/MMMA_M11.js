'use strict'

var mmmaM11 = require('../../../models/smm/mayor/MMMA_M11');

const MMMA_M11 = {};

MMMA_M11.getMMMA_M11Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM11.findById(id)
    res.json(maintenance)
};
MMMA_M11.editMMMA_M11Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M11 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM11.findByIdAndUpdate(id, { $set: MMMA_M11}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M11.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM11.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M11.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM11.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M11.getAllMaintenenceMMMA_M11 = async (req, res) => {
    const maintenances = await mmmaM11.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M11.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M11New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM11.findByIdAndUpdate(id, { $set: historyMMMA_M11New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M11.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM11.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M11.createMaintenenceMMMA_M11 = async (req, res) => {
    const maintenence = new mmmaM11(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M11;