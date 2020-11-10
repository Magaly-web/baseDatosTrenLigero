'use strict'

var mmmaM18_9 = require('../../../models/smm/mayor/MMMA_M18_9');

const MMMA_M18_9 = {};

MMMA_M18_9.getMMMA_M18_9Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_9.findById(id)
    res.json(maintenance)
};
MMMA_M18_9.editMMMA_M18_9Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_9 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //FILTRO DE ASPIRACION
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        lubricacionRenoil: req.body || false,
        observacionesLr: req.body || '',

        cambioKit: req.body || false,
        observacionesCk: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM18_9.findByIdAndUpdate(id, { $set: MMMA_M18_9}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_9.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_9.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_9.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_9.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_9.getAllMaintenenceMMMA_M18_9 = async (req, res) => {
    const maintenances = await mmmaM18_9.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_9.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_9New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_9.findByIdAndUpdate(id, { $set: historyMMMA_M18_9New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_9.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_9.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_9.createMaintenenceMMMA_M18_9 = async (req, res) => {
    const maintenence = new mmmaM18_9(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_9;