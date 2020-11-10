'use strict'

var mmmaM32 = require('../../../models/smm/mayor/MMMA_M32');

const MMMA_M32 = {};

MMMA_M32.getMMMA_M32Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM32.findById(id)
    res.json(maintenance)
};
MMMA_M32.editMMMA_M32Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M32 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM32.findByIdAndUpdate(id, { $set: MMMA_M32}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M32.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM32.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M32.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM32.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M32.getAllMaintenenceMMMA_M32 = async (req, res) => {
    const maintenances = await mmmaM32.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M32.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M32New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM32.findByIdAndUpdate(id, { $set: historyMMMA_M32New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M32.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM32.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M32.createMaintenenceMMMA_M32 = async (req, res) => {
    const maintenence = new mmmaM32(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M32;