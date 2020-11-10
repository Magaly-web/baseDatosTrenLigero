'use strict'

var mmmaM19_8 = require('../../../models/smm/mayor/MMMA_M19_8');

const MMMA_M19_8 = {};

MMMA_M19_8.getMMMA_M19_8Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM19_8.findById(id)
    res.json(maintenance)
};
MMMA_M19_8.editMMMA_M19_8Data = async (req, res) => {
    const { id } = req.params;
    const MMMA_M19_8 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        pruebasFuncionamiento: req.body || false,
        observacionesPf: req.body || '',

        revisionFugas: req.body || false,
        observacionesRf: req.body || '',

        resultadoAjusteTE90A: req.body || 0,
        resultadoAjusteTE95A: req.body || 0,

        resultadoAjusteTE90B: req.body || 0,
        resultadoAjusteTE95B: req.body || 0,

        resultadoAjusteTE90C: req.body || 0,
        resultadoAjusteTE95C: req.body || 0,

        observaciones: req.body.obs,
    };
    await mmmaM19_8.findByIdAndUpdate(id, { $set: MMMA_M19_8}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M19_8.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM19_8.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M19_8.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM19_8.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M19_8.getAllMaintenenceMMMA_M19_8 = async (req, res) => {
    const maintenances = await mmmaM19_8.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M19_8.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M19_8New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM19_8.findByIdAndUpdate(id, { $set: historyMMMA_M19_8New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M19_8.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM19_8.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M19_8.createMaintenenceMMMA_M19_8 = async (req, res) => {
    const maintenence = new mmmaM19_8(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M19_8;