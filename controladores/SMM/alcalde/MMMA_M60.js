'use strict'

var mmmaM60 = require('../../../models/smm/mayor/MMMA_M60');

const MMMA_M60 = {};

MMMA_M60.getMMMA_M60Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM60.findById(id)
    res.json(maintenance)
};
MMMA_M60.editMMMA_M60Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M60 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',

        limpiezaGralM1: req.body || false,
        limpiezaGralM2: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevM1: req.body || false,
        desarmadoRevM2: req.body || false,
        observacionesDr: req.body || '',

        fugaAireM1: req.body || false,
        fugaAireM2: req.body || false,
        observacionesFa: req.body || '',

        lubricacionRenoilM1: req.body || false,
        lubricacionRenoilM2: req.body || false,
        observacionesLr: req.body || '',

        cambioKitM1: req.body || false,
        cambioKitM2: req.body || false,
        observacionesCk: req.body || '',

        pruebasM1: req.body || false,
        pruebasM2: req.body || false,
        observacionesP: req.body || '',

        observaciones: req.body || '',
        
        materialUtilizado: materiales,
    };
    await mmmaM60.findByIdAndUpdate(id, { $set: MMMA_M60}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M60.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM60.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M60.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM60.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M60.getAllMaintenenceMMMA_M60 = async (req, res) => {
    const maintenances = await mmmaM60.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M60.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M60New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM60.findByIdAndUpdate(id, { $set: historyMMMA_M60New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M60.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM60.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M60.createMaintenenceMMMA_M60 = async (req, res) => {
    const maintenence = new mmmaM60(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M60;