'use strict'

var mmmaM39_2 = require('../../../models/smm/mayor/MMMA_M39_2');

const MMMA_M39_2 = {};

MMMA_M39_2.getMMMA_M39_2Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM39_2.findById(id)
    res.json(maintenance)
};
MMMA_M39_2.editMMMA_M39_2Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M39_2 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || false,

        materialUtilizado: materiales,
    };
    await mmmaM39_2.findByIdAndUpdate(id, { $set: MMMA_M39_2}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M39_2.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM39_2.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M39_2.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM39_2.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M39_2.getAllMaintenenceMMMA_M39_2 = async (req, res) => {
    const maintenances = await mmmaM39_2.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M39_2.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M39_2New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM39_2.findByIdAndUpdate(id, { $set: historyMMMA_M39_2New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M39_2.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM39_2.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M39_2.createMaintenenceMMMA_M39_2 = async (req, res) => {
    const maintenence = new mmmaM39_2(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M39_2;