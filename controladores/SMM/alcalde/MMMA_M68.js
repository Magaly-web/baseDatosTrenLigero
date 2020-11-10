'use strict'

var mmmaM68 = require('../../../models/smm/mayor/MMMA_M68');

const MMMA_M68 = {};

MMMA_M68.getMMMA_M68Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM68.findById(id)
    res.json(maintenance)
};
MMMA_M68.editMMMA_M68Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M68 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',
        
        materialUtilizado: materiales,
    };
    await mmmaM68.findByIdAndUpdate(id, { $set: MMMA_M68}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M68.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM68.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M68.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM68.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M68.getAllMaintenenceMMMA_M68 = async (req, res) => {
    const maintenances = await mmmaM68.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M68.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M68New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM68.findByIdAndUpdate(id, { $set: historyMMMA_M68New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M68.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM68.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M68.createMaintenenceMMMA_M68 = async (req, res) => {
    const maintenence = new mmmaM68(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M68;