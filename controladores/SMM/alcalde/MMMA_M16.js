'use strict'

var mmmaM16 = require('../../../models/smm/mayor/MMMA_M16');

const MMMA_M16 = {};

MMMA_M16.getMMMA_M16Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM16.findById(id)
    res.json(maintenance)
};
MMMA_M16.editMMMA_M16Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M16 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM16.findByIdAndUpdate(id, { $set: MMMA_M16}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M16.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM16.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M16.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM16.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M16.getAllMaintenenceMMMA_M16 = async (req, res) => {
    const maintenances = await mmmaM16.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M16.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M16New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM16.findByIdAndUpdate(id, { $set: historyMMMA_M16New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M16.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM16.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M16.createMaintenenceMMMA_M16 = async (req, res) => {
    const maintenence = new mmmaM16(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M16;