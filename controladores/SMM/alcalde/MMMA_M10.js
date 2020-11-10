'use strict'

var mmmaM10 = require('../../../models/smm/mayor/MMMA_M10');

const MMMA_M10 = {};

MMMA_M10.getMMMA_M10Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM10.findById(id)
    res.json(maintenance)
};
MMMA_M10.editMMMA_M10Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M10 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM10.findByIdAndUpdate(id, { $set: MMMA_M10}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M10.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM10.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M10.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM10.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M10.getAllMaintenenceMMMA_M10 = async (req, res) => {
    const maintenances = await mmmaM10.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M10.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M10New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM10.findByIdAndUpdate(id, { $set: historyMMMA_M10New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M10.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM10.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M10.createMaintenenceMMMA_M10 = async (req, res) => {
    const maintenence = new mmmaM10(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M10;