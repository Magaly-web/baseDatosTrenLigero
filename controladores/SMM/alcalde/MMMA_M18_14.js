'use strict'

var mmmaM18_14 = require('../../../models/smm/mayor/MMMA_M18_14');

const MMMA_M18_14 = {};

MMMA_M18_14.getMMMA_M18_14Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_14.findById(id)
    res.json(maintenance)
};
MMMA_M18_14.editMMMA_M18_14Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_14 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //PRUEBAS
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        fugaAireT: req.body || false,
        observacionesFat: req.body || '',

        fugaAceite: req.body || false,
        observacionesFa: req.body || '',

        cambioAceite: req.body || false,
        observacionesCa: req.body || '',

        cambioKit: req.body || false,
        observacionesCk: req.body || '',

        observaciones: req.body.obs,

        //PRUEBAS
        controlValvulaD: req.body || false,
        observacionesCvd: req.body || '',

        controlValvulaA: req.body || false,
        observacionesCva: req.body || '',

        controlValvulaR: req.body || false,
        observacionesCvr: req.body || '',

        presionMinima: req.body || false,
        observacionesPm: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM18_14.findByIdAndUpdate(id, { $set: MMMA_M18_14}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_14.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_14.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_14.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_14.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_14.getAllMaintenenceMMMA_M18_14 = async (req, res) => {
    const maintenances = await mmmaM18_14.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_14.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_14New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_14.findByIdAndUpdate(id, { $set: historyMMMA_M18_14New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_14.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_14.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_14.createMaintenenceMMMA_M18_14 = async (req, res) => {
    const maintenence = new mmmaM18_14(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_14;