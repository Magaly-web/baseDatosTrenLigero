'use strict'

var mmmaM53 = require('../../../models/smm/mayor/MMMA_M53');

const MMMA_M53 = {};

MMMA_M53.getMMMA_M53Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM53.findById(id)
    res.json(maintenance)
};
MMMA_M53.editMMMA_M53Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M53 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM53.findByIdAndUpdate(id, { $set: MMMA_M53}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M53.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM53.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M53.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM53.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M53.getAllMaintenenceMMMA_M53 = async (req, res) => {
    const maintenances = await mmmaM53.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M53.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M53New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM53.findByIdAndUpdate(id, { $set: historyMMMA_M53New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M53.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM53.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M53.createMaintenenceMMMA_M53 = async (req, res) => {
    const maintenence = new mmmaM53(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M53;