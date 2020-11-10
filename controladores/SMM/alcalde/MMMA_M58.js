'use strict'

var mmmaM58 = require('../../../models/smm/mayor/MMMA_M58');

const MMMA_M58 = {};

MMMA_M58.getMMMA_M58Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM58.findById(id)
    res.json(maintenance)
};
MMMA_M58.editMMMA_M58Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M58 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        limpiezaGralEW1: req.body || false,
        limpiezaGralNW1: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevEW1: req.body || false,
        desarmadoRevNW1: req.body || false,
        observacionesDr: req.body || '',

        revisionFugaEW1: req.body || false,
        revisionFugaNW1: req.body || false,
        observacionesRf: req.body || '',

        lubricacionRenoilEW1: req.body || false,
        lubricacionRenoilNW1: req.body || false,
        observacionesLr: req.body || '',

        cambioKitEW1: req.body || false,
        cambioKitNW1: req.body || false,
        observacionesCk: req.body || '',

        pruebasEW1: req.body || false,
        pruebasNW1: req.body || false,
        observacionesP: req.body || '',

        observaciones: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM58.findByIdAndUpdate(id, { $set: MMMA_M58}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M58.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM58.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M58.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM58.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M58.getAllMaintenenceMMMA_M58 = async (req, res) => {
    const maintenances = await mmmaM58.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M58.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M58New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM58.findByIdAndUpdate(id, { $set: historyMMMA_M58New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M58.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM58.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M58.createMaintenenceMMMA_M58 = async (req, res) => {
    const maintenence = new mmmaM58(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M58;