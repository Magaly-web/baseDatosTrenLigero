'use strict'

var mmmaM18_13 = require('../../../models/smm/mayor/MMMA_M18_13');

const MMMA_M18_13 = {};

MMMA_M18_13.getMMMA_M18_13Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_13.findById(id)
    res.json(maintenance)
};
MMMA_M18_13.editMMMA_M18_13Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_13 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //CARROCERIA
        carroceriaGralR: req.body || false,
        carroceriaGralL: req.body || false,
        carroceriaGralE: req.body || false,
        carroceriaGralC: req.body || false,
        observacionesCg: req.body || '',

        tapasR: req.body || false,
        tapasL: req.body || false,
        tapasE: req.body || false,
        tapasC: req.body || false,
        observacionesT: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM18_13.findByIdAndUpdate(id, { $set: MMMA_M18_13}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_13.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_13.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_13.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_13.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_13.getAllMaintenenceMMMA_M18_13 = async (req, res) => {
    const maintenances = await mmmaM18_13.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_13.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_13New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_13.findByIdAndUpdate(id, { $set: historyMMMA_M18_13New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_13.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_13.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_13.createMaintenenceMMMA_M18_13 = async (req, res) => {
    const maintenence = new mmmaM18_13(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_13;