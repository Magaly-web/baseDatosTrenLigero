'use strict'

var mmmaM18_5 = require('../../../models/smm/mayor/MMMA_M18_5');

const MMMA_M18_5 = {};

MMMA_M18_5.getMMMA_M18_5Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_5.findById(id)
    res.json(maintenance)
};
MMMA_M18_5.editMMMA_M18_5Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_5 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //BLOQUE DE COMPRESION
        cuerpoBloqueR: req.body || false,
        cuerpoBloqueL: req.body || false,
        cuerpoBloqueE: req.body || false,
        cuerpoBloqueC: req.body || false,
        observacionesCb: req.body || '',

        tapaR: req.body || false,
        tapaL: req.body || false,
        tapaE: req.body || false,
        tapaC: req.body || false,
        observacionesT: req.body || '',

        rotorPrincipalR: req.body || false,
        rotorPrincipalL: req.body || false,
        rotorPrincipalE: req.body || false,
        rotorPrincipalC: req.body || false,
        observacionesRp: req.body || '',

        rotorAuxiliarR: req.body || false,
        rotorAuxiliarL: req.body || false,
        rotorAuxiliarE: req.body || false,
        rotorAuxiliarC: req.body || false,
        observacionesRa: req.body || '',

        unionRoscadaR: req.body || false,
        unionRoscadaL: req.body || false,
        unionRoscadaE: req.body || false,
        unionRoscadaC: req.body || false,
        observacionesUr: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM18_5.findByIdAndUpdate(id, { $set: MMMA_M18_5}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_5.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_5.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_5.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_5.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_5.getAllMaintenenceMMMA_M18_5 = async (req, res) => {
    const maintenances = await mmmaM18_5.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_5.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_5New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_5.findByIdAndUpdate(id, { $set: historyMMMA_M18_5New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_5.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_5.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_5.createMaintenenceMMMA_M18_5 = async (req, res) => {
    const maintenence = new mmmaM18_5(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_5;