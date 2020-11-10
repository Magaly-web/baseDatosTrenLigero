'use strict'

var mmmaM50 = require('../../../models/smm/mayor/MMMA_M50');

const MMMA_M50 = {};

MMMA_M50.getMMMA_M50Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM50.findById(id)
    res.json(maintenance)
};
MMMA_M50.editMMMA_M50Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M50 = {
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

        fugaAire: req.body || false,
        observacionesFa: req.body || '',

        lubricacionRenoil: req.body || false,
        observacionesLr: req.body || '',

        cambioKit: req.body || false,
        observacionesCk: req.body || '',

        observaciones: req.body || '',

        pruebaHermeticidad: req.body || false,
        observacionesPh: req.body || '',

        pruebaFuncionamiento: req.body || false,
        observacionesPf: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM50.findByIdAndUpdate(id, { $set: MMMA_M50}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M50.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM50.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M50.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM50.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M50.getAllMaintenenceMMMA_M50 = async (req, res) => {
    const maintenances = await mmmaM50.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M50.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M50New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM50.findByIdAndUpdate(id, { $set: historyMMMA_M50New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M50.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM50.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M50.createMaintenenceMMMA_M50 = async (req, res) => {
    const maintenence = new mmmaM50(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M50;