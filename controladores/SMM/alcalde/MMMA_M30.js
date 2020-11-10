'use strict'

var mmmaM30 = require('../../../models/smm/mayor/MMMA_M30');

const MMMA_M30 = {};

MMMA_M30.getMMMA_M30Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM30.findById(id)
    res.json(maintenance)
};
MMMA_M30.editMMMA_M30Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M30 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM30.findByIdAndUpdate(id, { $set: MMMA_M30}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M30.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM30.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M30.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM30.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M30.getAllMaintenenceMMMA_M30 = async (req, res) => {
    const maintenances = await mmmaM30.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M30.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M30New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM30.findByIdAndUpdate(id, { $set: historyMMMA_M30New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M30.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM30.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M30.createMaintenenceMMMA_M30 = async (req, res) => {
    const maintenence = new mmmaM30(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M30;