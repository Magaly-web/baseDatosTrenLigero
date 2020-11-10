'use strict'

var mmmaM17 = require('../../../models/smm/mayor/MMMA_M17');

const MMMA_M17 = {};

MMMA_M17.getMMMA_M17Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM17.findById(id)
    res.json(maintenance)
};
MMMA_M17.editMMMA_M17Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M17 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM17.findByIdAndUpdate(id, { $set: MMMA_M17}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M17.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM17.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M17.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM17.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M17.getAllMaintenenceMMMA_M17 = async (req, res) => {
    const maintenances = await mmmaM17.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M17.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M17New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM17.findByIdAndUpdate(id, { $set: historyMMMA_M17New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M17.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM17.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M17.createMaintenenceMMMA_M17 = async (req, res) => {
    const maintenence = new mmmaM17(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M17;