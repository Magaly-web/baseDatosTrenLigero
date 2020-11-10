'use strict'

var mmmaM62 = require('../../../models/smm/mayor/MMMA_M62');

const MMMA_M62 = {};

MMMA_M62.getMMMA_M62Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM62.findById(id)
    res.json(maintenance)
};
MMMA_M62.editMMMA_M62Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M62 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',

        descripcionAct: req.body || '',
        
        materialUtilizado: materiales,
    };
    await mmmaM62.findByIdAndUpdate(id, { $set: MMMA_M62}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M62.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM62.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M62.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM62.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M62.getAllMaintenenceMMMA_M62 = async (req, res) => {
    const maintenances = await mmmaM62.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M62.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M62New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM62.findByIdAndUpdate(id, { $set: historyMMMA_M62New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M62.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM62.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M62.createMaintenenceMMMA_M62 = async (req, res) => {
    const maintenence = new mmmaM62(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M62;