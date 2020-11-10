'use strict'

var mmmaM40 = require('../../../models/smm/mayor/MMMA_M40');

const MMMA_M40 = {};

MMMA_M40.getMMMA_M40Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM40.findById(id)
    res.json(maintenance)
};
MMMA_M40.editMMMA_M40Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M40 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM40.findByIdAndUpdate(id, { $set: MMMA_M40}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M40.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM40.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M40.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM40.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M40.getAllMaintenenceMMMA_M40 = async (req, res) => {
    const maintenances = await mmmaM40.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M40.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M40New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM40.findByIdAndUpdate(id, { $set: historyMMMA_M40New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M40.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM40.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M40.createMaintenenceMMMA_M40 = async (req, res) => {
    const maintenence = new mmmaM40(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M40;