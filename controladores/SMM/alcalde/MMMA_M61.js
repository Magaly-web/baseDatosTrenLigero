'use strict'

var mmmaM61 = require('../../../models/smm/mayor/MMMA_M61');

const MMMA_M61 = {};

MMMA_M61.getMMMA_M61Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM61.findById(id)
    res.json(maintenance)
};
MMMA_M61.editMMMA_M61Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M61 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',

        descripcionAct: req.body || '',
        
        materialUtilizado: materiales,
    };
    await mmmaM61.findByIdAndUpdate(id, { $set: MMMA_M61}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M61.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM61.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M61.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM61.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M61.getAllMaintenenceMMMA_M61 = async (req, res) => {
    const maintenances = await mmmaM61.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M61.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M61New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM61.findByIdAndUpdate(id, { $set: historyMMMA_M61New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M61.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM61.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M61.createMaintenenceMMMA_M61 = async (req, res) => {
    const maintenence = new mmmaM61(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M61;