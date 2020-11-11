'use strict'

var mmmeC17 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C17');

const MMME_C17 = {};

MMME_C17.getMMME_C17Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC17.findById(id)
    res.json(maintenance)
};
MMME_C17.editMMME_C17Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C17 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        cableadoM1Rev: req.body || false,
        cableadoM1Limp: req.body || false,
        cableadoRRev: req.body || false,
        cableadoRLimp: req.body || false,
        cableadoM2Rev: req.body || false,
        cableadoM2Limp: req.body || false,

        tuberiaM1Rev: req.body || false,
        tuberiaM1Limp: req.body || false,
        tuberiaRRev: req.body || false,
        tuberiaRLimp: req.body || false,
        tuberiaM2Rev: req.body || false,
        tuberiaM2Limp: req.body || false,

        cofresM1Rev: req.body || false,
        cofresM1Limp: req.body || false,
        cofresRRev: req.body || false,
        cofresRLimp: req.body || false,
        cofresM2Rev: req.body || false,
        cofresM2Limp: req.body || false,

        contenedorCeaM1Rev: req.body || false,
        contenedorCeaM1Limp: req.body || false,
        contenedorCeaRRev: req.body || false,
        contenedorCeaRLimp: req.body || false,
        contenedorCeaM2Rev: req.body || false,
        contenedorCeaM2Limp: req.body || false,

        contenedorCetM1Rev: req.body || false,
        contenedorCetM1Limp: req.body || false,
        contenedorCetRRev: req.body || false,
        contenedorCetRLimp: req.body || false,
        contenedorCetM2Rev: req.body || false,
        contenedorCetM2Limp: req.body || false,

        contenedorHvM1Rev: req.body || false,
        contenedorHvM1Limp: req.body || false,
        contenedorHvRRev: req.body || false,
        contenedorHvRLimp: req.body || false,
        contenedorHvM2Rev: req.body || false,
        contenedorHvM2Limp: req.body || false,

        contenedorRfM1Rev: req.body || false,
        contenedorRfM1Limp: req.body || false,
        contenedorRfRRev: req.body || false,
        contenedorRfRLimp: req.body || false,
        contenedorRfM2Rev: req.body || false,
        contenedorRfM2Limp: req.body || false,

        depositosM1Rev: req.body || false,
        depositosM1Limp: req.body || false,
        depositosRRev: req.body || false,
        depositosRLimp: req.body || false,
        depositosM2Rev: req.body || false,
        depositosM2Limp: req.body || false,

        valvulasCM1Rev: req.body || false,
        valvulasCM1Limp: req.body || false,
        valvulasCRRev: req.body || false,
        valvulasCRLimp: req.body || false,
        valvulasCM2Rev: req.body || false,
        valvulasCM2Limp: req.body || false,

        valvulasPM1Rev: req.body || false,
        valvulasPM1Limp: req.body || false,
        valvulasPM2Rev: req.body || false,
        valvulasPM2Limp: req.body || false,

        depositosAM1Rev: req.body || false,
        depositosAM1Limp: req.body || false,
        depositosAM2Rev: req.body || false,
        depositosAM2Limp: req.body || false,

        bajoBM1Rev: req.body || false,
        bajoBM1Limp: req.body || false,
        bajoBRRev: req.body || false,
        bajoBRLimp: req.body || false,
        bajoBM2Rev: req.body || false,
        bajoBM2Limp: req.body || false,

        sujecionM1Rev: req.body || false,
        sujecionM1Limp: req.body || false,
        sujecionRRev: req.body || false,
        sujecionRLimp: req.body || false,
        sujecionM2Rev: req.body || false,
        sujecionM2Limp: req.body || false,

        busquedaFM1Rev: req.body || false,
        busquedaFM1Limp: req.body || false,
        busquedaFRRev: req.body || false,
        busquedaFRLimp: req.body || false,
        busquedaFM2Rev: req.body || false,
        busquedaFM2Limp: req.body || false,

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC17.findByIdAndUpdate(id, { $set: MMME_C17}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C17.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC17.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C17.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC17.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C17.getAllMaintenenceMMME_C17 = async (req, res) => {
    const maintenances = await mmmeC17.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C17.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C17New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC17.findByIdAndUpdate(id, { $set: historyMMME_C17New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C17.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC17.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C17.createMaintenenceMMME_C17 = async (req, res) => {
    const maintenence = new mmmeC17(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C17;