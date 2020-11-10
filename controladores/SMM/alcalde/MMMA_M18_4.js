'use strict'

var mmmaM18_4 = require('../../../models/smm/mayor/MMMA_M18_4');

const MMMA_M18_4 = {};

MMMA_M18_4.getMMMA_M18_4Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_4.findById(id)
    res.json(maintenance)
};
MMMA_M18_4.editMMMA_M18_4Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_4 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        noSerie: req.body.serie || '',
 
        //TUBERIA DE ACEITADO
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        lubricacionRenoil: req.body || false,
        observacionesLr: req.body || '',

        cambioKit: req.body || false,
        observacionesCk: req.body || '',

        observaciones: req.body.obs,

        //PRUEBAS
        pruebasConjuntoMCP: req.body || false,
        observacionesPcMCP: req.body || '',

        funcionamientoMontaje: req.body || false,
        observacionesFm: req.body || '',

        hermeticidadMontaje: req.body || false,
        observacionesHm: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM18_4.findByIdAndUpdate(id, { $set: MMMA_M18_4}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_4.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_4.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_4.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_4.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_4.getAllMaintenenceMMMA_M18_4 = async (req, res) => {
    const maintenances = await mmmaM18_4.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_4.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_4New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_4.findByIdAndUpdate(id, { $set: historyMMMA_M18_4New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_4.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_4.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_4.createMaintenenceMMMA_M18_4 = async (req, res) => {
    const maintenence = new mmmaM18_4(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_4;