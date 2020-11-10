'use strict'

var mmmaM52 = require('../../../models/smm/mayor/MMMA_M52');

const MMMA_M52 = {};

MMMA_M52.getMMMA_M52Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM52.findById(id)
    res.json(maintenance)
};
MMMA_M52.editMMMA_M52Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M52 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM52.findByIdAndUpdate(id, { $set: MMMA_M52}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M52.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM52.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M52.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM52.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M52.getAllMaintenenceMMMA_M52 = async (req, res) => {
    const maintenances = await mmmaM52.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M52.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M52New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM52.findByIdAndUpdate(id, { $set: historyMMMA_M52New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M52.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM52.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M52.createMaintenenceMMMA_M52 = async (req, res) => {
    const maintenence = new mmmaM52(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M52;