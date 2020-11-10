'use strict'

var mmmaM31_2 = require('../../../models/smm/mayor/MMMA_M31_2');

const MMMA_M31_2 = {};

MMMA_M31_2.getMMMA_M31_2Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM31_2.findById(id)
    res.json(maintenance)
};
MMMA_M31_2.editMMMA_M31_2Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M31_2 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',

        limpiezaGralM1: req.body || false,
        limpiezaGralR: req.body || false,
        limpiezaGralM2: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRevM1: req.body || false,
        desarmadoRevR: req.body || false,
        desarmadoRevM2: req.body || false,
        observacionesDr: req.body || '',

        fugaAceiteM1: req.body || false,
        fugaAceiteR: req.body || false,
        fugaAceiteM2: req.body || false,
        observacionesFa: req.body || '',

        vueltasTaponM1: req.body || false,
        vueltasTaponR: req.body || false,
        vueltasTaponM2: req.body || false,
        observacionesVt: req.body || '',

        aplicacionLoctiteM1: req.body || false,
        aplicacionLoctiteR: req.body || false,
        aplicacionLoctiteM2: req.body || false,
        observacionesAl: req.body || '',

        funcionamiento: req.body || '',
        ajustes: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM31_2.findByIdAndUpdate(id, { $set: MMMA_M31_2}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M31_2.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM31_2.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M31_2.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM31_2.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M31_2.getAllMaintenenceMMMA_M31_2 = async (req, res) => {
    const maintenances = await mmmaM31_2.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M31_2.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M31_2New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM31_2.findByIdAndUpdate(id, { $set: historyMMMA_M31_2New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M31_2.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM31_2.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M31_2.createMaintenenceMMMA_M31_2 = async (req, res) => {
    const maintenence = new mmmaM31_2(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M31_2;