'use strict'

var mmmeC04 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C04');

const MMME_C04 = {};

MMME_C04.getMMME_C04Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC04.findById(id)
    res.json(maintenance)
};
MMME_C04.editMMME_C04Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C04 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        //BOGIE M1
        bm1dAma: req.body || 0,
        bm1dA1: req.body || 0,
        bm1dA1_5: req.body || 0,
        bm1dA2: req.body || 0,
        bm1dA2_5: req.body || 0,
        bm1dA3: req.body || 0,
        bm1dA4: req.body || 0,
        bm1dA5: req.body || 0,

        bm1dPma: req.body || 0,
        bm1dP1: req.body || 0,
        bm1dP1_5: req.body || 0,
        bm1dP2: req.body || 0,
        bm1dP2_5: req.body || 0,
        bm1dP3: req.body || 0,
        bm1dP4: req.body || 0,
        bm1dP5: req.body || 0,

        bm1iAma: req.body || 0,
        bm1iA1: req.body || 0,
        bm1iA1_5: req.body || 0,
        bm1iA2: req.body || 0,
        bm1iA2_5: req.body || 0,
        bm1iA3: req.body || 0,
        bm1iA4: req.body || 0,
        bm1iA5: req.body || 0,

        bm1iPma: req.body || 0,
        bm1iP1: req.body || 0,
        bm1iP1_5: req.body || 0,
        bm1iP2: req.body || 0,
        bm1iP2_5: req.body || 0,
        bm1iP3: req.body || 0,
        bm1iP4: req.body || 0,
        bm1iP5: req.body || 0,

        //BOGIE REMOLQUE
        brdM1ma: req.body || 0,
        brdM11: req.body || 0,
        brdM11_5: req.body || 0,
        brdM12: req.body || 0,
        brdM12_5: req.body || 0,
        brdM13: req.body || 0,
        brdM14: req.body || 0,
        brdM15: req.body || 0,

        brdM2ma: req.body || 0,
        brdM21: req.body || 0,
        brdM21_5: req.body || 0,
        brdM22: req.body || 0,
        brdM22_5: req.body || 0,
        brdM23: req.body || 0,
        brdM24: req.body || 0,
        brdM25: req.body || 0,

        briM1ma: req.body || 0,
        briM11: req.body || 0,
        briM11_5: req.body || 0,
        briM12: req.body || 0,
        briM12_5: req.body || 0,
        briM13: req.body || 0,
        briM14: req.body || 0,
        briM15: req.body || 0,

        briM2ma: req.body || 0,
        briM21: req.body || 0,
        briM21_5: req.body || 0,
        briM22: req.body || 0,
        briM22_5: req.body || 0,
        briM23: req.body || 0,
        briM24: req.body || 0,
        briM25: req.body || 0,

        //BOGIE M2
        bm2dAma: req.body || 0,
        bm2dA1: req.body || 0,
        bm2dA1_5: req.body || 0,
        bm2dA2: req.body || 0,
        bm2dA2_5: req.body || 0,
        bm2dA3: req.body || 0,
        bm2dA4: req.body || 0,
        bm2dA5: req.body || 0,

        bm2dPma: req.body || 0,
        bm2dP1: req.body || 0,
        bm2dP1_5: req.body || 0,
        bm2dP2: req.body || 0,
        bm2dP2_5: req.body || 0,
        bm2dP3: req.body || 0,
        bm2dP4: req.body || 0,
        bm2dP5: req.body || 0,

        bm2iAma: req.body || 0,
        bm2iA1: req.body || 0,
        bm2iA1_5: req.body || 0,
        bm2iA2: req.body || 0,
        bm2iA2_5: req.body || 0,
        bm2iA3: req.body || 0,
        bm2iA4: req.body || 0,
        bm2iA5: req.body || 0,

        bm2iPma: req.body || 0,
        bm2iP1: req.body || 0,
        bm2iP1_5: req.body || 0,
        bm2iP2: req.body || 0,
        bm2iP2_5: req.body || 0,
        bm2iP3: req.body || 0,
        bm2iP4: req.body || 0,
        bm2iP5: req.body || 0,
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC04.findByIdAndUpdate(id, { $set: MMME_C04}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C04.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC04.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C04.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC04.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C04.getAllMaintenenceMMME_C04 = async (req, res) => {
    const maintenances = await mmmeC04.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C04.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C04New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC04.findByIdAndUpdate(id, { $set: historyMMME_C04New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C04.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC04.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C04.createMaintenenceMMME_C04 = async (req, res) => {
    const maintenence = new mmmeC04(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C04;