'use strict'

var mmmaM46 = require('../../../models/smm/mayor/MMMA_M46');

const MMMA_M46 = {};

MMMA_M46.getMMMA_M46Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM46.findById(id)
    res.json(maintenance)
};
MMMA_M46.editMMMA_M46Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M46 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM46.findByIdAndUpdate(id, { $set: MMMA_M46}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M46.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM46.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M46.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM46.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M46.getAllMaintenenceMMMA_M46 = async (req, res) => {
    const maintenances = await mmmaM46.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M46.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M46New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM46.findByIdAndUpdate(id, { $set: historyMMMA_M46New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M46.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM46.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M46.createMaintenenceMMMA_M46 = async (req, res) => {
    const maintenence = new mmmaM46(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M46;