'use strict'

var mmmaM05 = require('../../../models/smm/mayor/MMMA_M05');

const MMMA_M05 = {};

MMMA_M05.getMMMA_M05Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM05.findById(id)
    res.json(maintenance)
};
MMMA_M05.editMMMA_M05Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M05 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',
        
        //1. DESMONTAJE DE PUERTA PARED DIVISORA
        quitarTm1: req.body || false,
        quitarTm2: req.body || false,
        observacionesQt: req.body || '',

        aflojarRm1: req.body || false,
        aflojarRm2: req.body || false,
        observacionesAr: req.body || '',

        desmontarPm1: req.body || false,
        desmontarPm2: req.body || false,
        observacionesDp: req.body || '',

        //2. MANTENIMIENTO DE PUERTA PARED DIVISORA
        aflojarRTBM1: req.body || false,
        aflojarRTBM2: req.body || false,
        observacionesArtb: req.body || '',

        aflojarRTCHM1: req.body || false,
        aflojarRTCHM2: req.body || false,
        observacionesArtch: req.body || '',

        aflojarRTCM1: req.body || false,
        aflojarRTCM2: req.body || false,
        observacionesArtc: req.body || '',

        desarmadoM1: req.body || false,
        desarmadoM2: req.body || false,
        observacionesD: req.body || '',

        preparacionAM1: req.body || false,
        preparacionAM2: req.body || false,
        observacionesPa: req.body || '',

        desarmadoLM1: req.body || false,
        desarmadoLM2: req.body || false,
        observacionesDl: req.body || '',

        reparacionBM1: req.body || false,
        reparacionBM2: req.body || false,
        observacionesRb: req.body || '',

        limpiezaFM1: req.body || false,
        limpiezaFM2: req.body || false,
        observacionesLf: req.body || '',

        montajeCHM1: req.body || false,
        montajeCHM2: req.body || false,
        observacionesMch: req.body || '',

        montajeCM1: req.body || false,
        montajeCM2: req.body || false,
        observacionesMc: req.body || '',

        //3. MONTAJE DE PUERTA PARED DIVISORA
        montarPm1: req.body || false,
        montarPm2: req.body || false,
        observacionesMp: req.body || '',
        
        colocarPm1: req.body || false,
        colocarPm2: req.body || false,
        observacionesCp: req.body || '',

        aplicarTm1: req.body || false,
        aplicarTm2: req.body || false,
        observacionesAt: req.body || '',

        ajustarPm1: req.body || false,
        ajustarPm2: req.body || false,
        observacionesAp: req.body || '',

        ajustarCm1: req.body || false,
        ajustarCm2: req.body || false,
        observacionesAc: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM05.findByIdAndUpdate(id, { $set: MMMA_M05}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M05.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM05.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M05.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM05.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M05.getAllMaintenenceMMMA_M05 = async (req, res) => {
    const maintenances = await mmmaM05.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M05.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M05New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM05.findByIdAndUpdate(id, { $set: historyMMMA_M05New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M05.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM05.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M05.createMaintenenceMMMA_M05 = async (req, res) => {
    const maintenence = new mmmaM05(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M05;