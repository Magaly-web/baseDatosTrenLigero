'use strict'

var mmmaM54 = require('../../../models/smm/mayor/MMMA_M54');

const MMMA_M54 = {};

MMMA_M54.getMMMA_M54Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM54.findById(id)
    res.json(maintenance)
};
MMMA_M54.editMMMA_M54Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M54 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM54.findByIdAndUpdate(id, { $set: MMMA_M54}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M54.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM54.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M54.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM54.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M54.getAllMaintenenceMMMA_M54 = async (req, res) => {
    const maintenances = await mmmaM54.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M54.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M54New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM54.findByIdAndUpdate(id, { $set: historyMMMA_M54New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M54.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM54.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M54.createMaintenenceMMMA_M54 = async (req, res) => {
    const maintenence = new mmmaM54(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M54;