'use strict'

var mmmaM63 = require('../../../models/smm/mayor/MMMA_M63');

const MMMA_M63 = {};

MMMA_M63.getMMMA_M63Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM63.findById(id)
    res.json(maintenance)
};
MMMA_M63.editMMMA_M63Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M63 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
        noSerie: req.body.serie || '',

        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        fugaAire: req.body || false,
        observacionesFa: req.body || '',

        lubricacionRenoil: req.body || false,
        observacionesLr: req.body || '',

        cambioKit: req.body || false,
        observacionesCk: req.body || '',

        observaciones: req.body || '',

        verificacionHermeticidad: req.body || false,
        observacionesVh: req.body || '',

        verificacionAccionamiento: req.body || false,
        observacionesVa: req.body || '',

        pruebaElectronica: req.body || false,
        observacionesPe: req.body || '',
        
        materialUtilizado: materiales,
    };
    await mmmaM63.findByIdAndUpdate(id, { $set: MMMA_M63}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M63.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM63.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M63.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM63.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M63.getAllMaintenenceMMMA_M63 = async (req, res) => {
    const maintenances = await mmmaM63.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M63.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M63New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM63.findByIdAndUpdate(id, { $set: historyMMMA_M63New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M63.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM63.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M63.createMaintenenceMMMA_M63 = async (req, res) => {
    const maintenence = new mmmaM63(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M63;