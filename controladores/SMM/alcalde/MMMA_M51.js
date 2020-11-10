'use strict'

var mmmaM51 = require('../../../models/smm/mayor/MMMA_M51');

const MMMA_M51 = {};

MMMA_M51.getMMMA_M51Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM51.findById(id)
    res.json(maintenance)
};
MMMA_M51.editMMMA_M51Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M51 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM51.findByIdAndUpdate(id, { $set: MMMA_M51}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M51.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM51.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M51.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM51.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M51.getAllMaintenenceMMMA_M51 = async (req, res) => {
    const maintenances = await mmmaM51.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M51.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M51New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM51.findByIdAndUpdate(id, { $set: historyMMMA_M51New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M51.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM51.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M51.createMaintenenceMMMA_M51 = async (req, res) => {
    const maintenence = new mmmaM51(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M51;