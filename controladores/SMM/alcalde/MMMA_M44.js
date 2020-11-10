'use strict'

var mmmaM44 = require('../../../models/smm/mayor/MMMA_M44');

const MMMA_M44 = {};

MMMA_M44.getMMMA_M44Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM44.findById(id)
    res.json(maintenance)
};
MMMA_M44.editMMMA_M44Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M44 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        
        limpiezaGralE1: req.body || false,
        limpiezaGralE2: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevE1: req.body || false,
        desarmadoRevE2: req.body || false,
        observacionesDr: req.body || '',

        cambioKitE1: req.body || false,
        cambioKitE2: req.body || false,
        observacionesCk: req.body || '',

        lubricacionE1: req.body || false,
        lubricacionE2: req.body || false,
        observacionesL: req.body || '',

        funcionamientoMontajeE1: req.body || false,
        funcionamientoMontajeE2: req.body || false,
        observacionesFm: req.body || '',

        pruebasConjuntoE1: req.body || false,
        pruebasConjuntoE2: req.body || false,
        observacionesPc: req.body || '',

        numeroE1: req.body || false,
        numeroE2: req.body || false,
        observacionesN: req.body || '',

        observaciones: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM44.findByIdAndUpdate(id, { $set: MMMA_M44}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M44.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM44.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M44.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM44.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M44.getAllMaintenenceMMMA_M44 = async (req, res) => {
    const maintenances = await mmmaM44.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M44.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M44New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM44.findByIdAndUpdate(id, { $set: historyMMMA_M44New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M44.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM44.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M44.createMaintenenceMMMA_M44 = async (req, res) => {
    const maintenence = new mmmaM44(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M44;