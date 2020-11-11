'use strict'

var mmmeC03 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C03');

const MMME_C03 = {};

MMME_C03.getMMME_C03Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC03.findById(id)
    res.json(maintenance)
};
MMME_C03.editMMME_C03Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C03 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        //GASERA TE-90 y TE-95
        g1m1Rev: req.body || false,
        g1m1Lub: req.body || false,
        g1m1Limp: req.body || false,
        g1m1Camb: req.body || false,
        g1rRev: req.body || false,
        g1rLub: req.body || false,
        g1rLimp: req.body || false,
        g1rCamb: req.body || false,
        g1m2Rev: req.body || false,
        g1m2Lub: req.body || false,
        g1m2Limp: req.body || false,
        g1m2Camb: req.body || false,

        g2m1Rev: req.body || false,
        g2m1Lub: req.body || false,
        g2m1Limp: req.body || false,
        g2m1Camb: req.body || false,
        g2rRev: req.body || false,
        g2rLub: req.body || false,
        g2rLimp: req.body || false,
        g2rCamb: req.body || false,
        g2m2Rev: req.body || false,
        g2m2Lub: req.body || false,
        g2m2Limp: req.body || false,
        g2m2Camb: req.body || false,

        g3m1Rev: req.body || false,
        g3m1Lub: req.body || false,
        g3m1Limp: req.body || false,
        g3m1Camb: req.body || false,
        g3rRev: req.body || false,
        g3rLub: req.body || false,
        g3rLimp: req.body || false,
        g3rCamb: req.body || false,
        g3m2Rev: req.body || false,
        g3m2Lub: req.body || false,
        g3m2Limp: req.body || false,
        g3m2Camb: req.body || false,

        g4m1Rev: req.body || false,
        g4m1Lub: req.body || false,
        g4m1Limp: req.body || false,
        g4m1Camb: req.body || false,
        g4rRev: req.body || false,
        g4rLub: req.body || false,
        g4rLimp: req.body || false,
        g4rCamb: req.body || false,
        g4m2Rev: req.body || false,
        g4m2Lub: req.body || false,
        g4m2Limp: req.body || false,
        g4m2Camb: req.body || false,

        g5m1Rev: req.body || false,
        g5m1Lub: req.body || false,
        g5m1Limp: req.body || false,
        g5m1Camb: req.body || false,
        g5rRev: req.body || false,
        g5rLub: req.body || false,
        g5rLimp: req.body || false,
        g5rCamb: req.body || false,
        g5m2Rev: req.body || false,
        g5m2Lub: req.body || false,
        g5m2Limp: req.body || false,
        g5m2Camb: req.body || false,

        g6m1Rev: req.body || false,
        g6m1Lub: req.body || false,
        g6m1Limp: req.body || false,
        g6m1Camb: req.body || false,
        g6rRev: req.body || false,
        g6rLub: req.body || false,
        g6rLimp: req.body || false,
        g6rCamb: req.body || false,
        g6m2Rev: req.body || false,
        g6m2Lub: req.body || false,
        g6m2Limp: req.body || false,
        g6m2Camb: req.body || false,

        g7m1Rev: req.body || false,
        g7m1Lub: req.body || false,
        g7m1Limp: req.body || false,
        g7m1Camb: req.body || false,
        g7rRev: req.body || false,
        g7rLub: req.body || false,
        g7rLimp: req.body || false,
        g7rCamb: req.body || false,
        g7m2Rev: req.body || false,
        g7m2Lub: req.body || false,
        g7m2Limp: req.body || false,
        g7m2Camb: req.body || false,

        g8m1Rev: req.body || false,
        g8m1Lub: req.body || false,
        g8m1Limp: req.body || false,
        g8m1Camb: req.body || false,
        g8rRev: req.body || false,
        g8rLub: req.body || false,
        g8rLimp: req.body || false,
        g8rCamb: req.body || false,
        g8m2Rev: req.body || false,
        g8m2Lub: req.body || false,
        g8m2Limp: req.body || false,
        g8m2Camb: req.body || false,

        //GASERA TE-06
        g9rRev: req.body || false,
        g9rLub: req.body || false,
        g9rLimp: req.body || false,
        g9rCamb: req.body || false,

        g10rRev: req.body || false,
        g10rLub: req.body || false,
        g10rLimp: req.body || false,
        g10rCamb: req.body || false,

        g11rRev: req.body || false,
        g11rLub: req.body || false,
        g11rLimp: req.body || false,
        g11rCamb: req.body || false,

        g12rRev: req.body || false,
        g12rLub: req.body || false,
        g12rLimp: req.body || false,
        g12rCamb: req.body || false,

        g13rRev: req.body || false,
        g13rLub: req.body || false,
        g13rLimp: req.body || false,
        g13rCamb: req.body || false,

        g14rRev: req.body || false,
        g14rLub: req.body || false,
        g14rLimp: req.body || false,
        g14rCamb: req.body || false,

        g15rRev: req.body || false,
        g15rLub: req.body || false,
        g15rLimp: req.body || false,
        g15rCamb: req.body || false,

        g16rRev: req.body || false,
        g16rLub: req.body || false,
        g16rLimp: req.body || false,
        g16rCamb: req.body || false,
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC03.findByIdAndUpdate(id, { $set: MMME_C03}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C03.getAllMaintenenceMMME_C03 = async (req, res) => {
    const maintenances = await mmmeC03.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C03New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC03.findByIdAndUpdate(id, { $set: historyMMME_C03New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C03.createMaintenenceMMME_C03 = async (req, res) => {
    const maintenence = new mmmeC03(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C03;