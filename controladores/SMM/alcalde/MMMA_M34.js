'use strict'

var mmmaM34 = require('../../../models/smm/mayor/MMMA_M34');

const MMMA_M34 = {};

MMMA_M34.getMMMA_M34Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM34.findById(id)
    res.json(maintenance)
};
MMMA_M34.editMMMA_M34Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M34 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM34.findByIdAndUpdate(id, { $set: MMMA_M34}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M34.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM34.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M34.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM34.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M34.getAllMaintenenceMMMA_M34 = async (req, res) => {
    const maintenances = await mmmaM34.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M34.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M34New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM34.findByIdAndUpdate(id, { $set: historyMMMA_M34New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M34.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM34.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M34.createMaintenenceMMMA_M34 = async (req, res) => {
    const maintenence = new mmmaM34(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M34;