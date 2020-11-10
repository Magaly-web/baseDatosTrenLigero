'use strict'

var mmmaM21 = require('../../../models/smm/mayor/MMMA_M21');

const MMMA_M21 = {};

MMMA_M21.getMMMA_M21Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM21.findById(id)
    res.json(maintenance)
};
MMMA_M21.editMMMA_M21Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M21 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM21.findByIdAndUpdate(id, { $set: MMMA_M21}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M21.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM21.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M21.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM21.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M21.getAllMaintenenceMMMA_M21 = async (req, res) => {
    const maintenances = await mmmaM21.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M21.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M21New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM21.findByIdAndUpdate(id, { $set: historyMMMA_M21New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M21.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM21.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M21.createMaintenenceMMMA_M21 = async (req, res) => {
    const maintenence = new mmmaM21(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M21;