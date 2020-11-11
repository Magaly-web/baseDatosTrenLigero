'use strict'

var mmmeC22 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C22');

const MMME_C22 = {};

MMME_C22.getMMME_C22Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC22.findById(id)
    res.json(maintenance)
};
MMME_C22.editMMME_C22Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C22 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        cajaRevm1D1: req.body || false,
        cajaRevm1D2: req.body || false,
        cajaRevm1D3: req.body || false,
        cajaRevm1I1: req.body || false,
        cajaRevm1I2: req.body || false,
        cajaRevm1I3: req.body || false,
        cajaRevm2D1: req.body || false,
        cajaRevm2D2: req.body || false,
        cajaRevm2D3: req.body || false,
        cajaRevm2I1: req.body || false,
        cajaRevm2I2: req.body || false,
        cajaRevm2I3: req.body || false,

        cajaLimpm1D1: req.body || false,
        cajaLimpm1D2: req.body || false,
        cajaLimpm1D3: req.body || false,
        cajaLimpm1I1: req.body || false,
        cajaLimpm1I2: req.body || false,
        cajaLimpm1I3: req.body || false,
        cajaLimpm2D1: req.body || false,
        cajaLimpm2D2: req.body || false,
        cajaLimpm2D3: req.body || false,
        cajaLimpm2I1: req.body || false,
        cajaLimpm2I2: req.body || false,
        cajaLimpm2I3: req.body || false,

        cajaEngm1D1: req.body || false,
        cajaEngm1D2: req.body || false,
        cajaEngm1D3: req.body || false,
        cajaEngm1I1: req.body || false,
        cajaEngm1I2: req.body || false,
        cajaEngm1I3: req.body || false,
        cajaEngm2D1: req.body || false,
        cajaEngm2D2: req.body || false,
        cajaEngm2D3: req.body || false,
        cajaEngm2I1: req.body || false,
        cajaEngm2I2: req.body || false,
        cajaEngm2I3: req.body || false,

        tapaRevm1D1: req.body || false,
        tapaRevm1D2: req.body || false,
        tapaRevm1D3: req.body || false,
        tapaRevm1I1: req.body || false,
        tapaRevm1I2: req.body || false,
        tapaRevm1I3: req.body || false,
        tapaRevm2D1: req.body || false,
        tapaRevm2D2: req.body || false,
        tapaRevm2D3: req.body || false,
        tapaRevm2I1: req.body || false,
        tapaRevm2I2: req.body || false,
        tapaRevm2I3: req.body || false,

        tapaLimpm1D1: req.body || false,
        tapaLimpm1D2: req.body || false,
        tapaLimpm1D3: req.body || false,
        tapaLimpm1I1: req.body || false,
        tapaLimpm1I2: req.body || false,
        tapaLimpm1I3: req.body || false,
        tapaLimpm2D1: req.body || false,
        tapaLimpm2D2: req.body || false,
        tapaLimpm2D3: req.body || false,
        tapaLimpm2I1: req.body || false,
        tapaLimpm2I2: req.body || false,
        tapaLimpm2I3: req.body || false,

        tornilloRevm1D1: req.body || false,
        tornilloRevm1D2: req.body || false,
        tornilloRevm1D3: req.body || false,
        tornilloRevm1I1: req.body || false,
        tornilloRevm1I2: req.body || false,
        tornilloRevm1I3: req.body || false,
        tornilloRevm2D1: req.body || false,
        tornilloRevm2D2: req.body || false,
        tornilloRevm2D3: req.body || false,
        tornilloRevm2I1: req.body || false,
        tornilloRevm2I2: req.body || false,
        tornilloRevm2I3: req.body || false,

        tornilloLimpm1D1: req.body || false,
        tornilloLimpm1D2: req.body || false,
        tornilloLimpm1D3: req.body || false,
        tornilloLimpm1I1: req.body || false,
        tornilloLimpm1I2: req.body || false,
        tornilloLimpm1I3: req.body || false,
        tornilloLimpm2D1: req.body || false,
        tornilloLimpm2D2: req.body || false,
        tornilloLimpm2D3: req.body || false,
        tornilloLimpm2I1: req.body || false,
        tornilloLimpm2I2: req.body || false,
        tornilloLimpm2I3: req.body || false,

        rodamientosRevm1D1: req.body || false,
        rodamientosRevm1D2: req.body || false,
        rodamientosRevm1D3: req.body || false,
        rodamientosRevm1I1: req.body || false,
        rodamientosRevm1I2: req.body || false,
        rodamientosRevm1I3: req.body || false,
        rodamientosRevm2D1: req.body || false,
        rodamientosRevm2D2: req.body || false,
        rodamientosRevm2D3: req.body || false,
        rodamientosRevm2I1: req.body || false,
        rodamientosRevm2I2: req.body || false,
        rodamientosRevm2I3: req.body || false,

        rodamientosLimpm1D1: req.body || false,
        rodamientosLimpm1D2: req.body || false,
        rodamientosLimpm1D3: req.body || false,
        rodamientosLimpm1I1: req.body || false,
        rodamientosLimpm1I2: req.body || false,
        rodamientosLimpm1I3: req.body || false,
        rodamientosLimpm2D1: req.body || false,
        rodamientosLimpm2D2: req.body || false,
        rodamientosLimpm2D3: req.body || false,
        rodamientosLimpm2I1: req.body || false,
        rodamientosLimpm2I2: req.body || false,
        rodamientosLimpm2I3: req.body || false,

        rodamientosEngm1D1: req.body || false,
        rodamientosEngm1D2: req.body || false,
        rodamientosEngm1D3: req.body || false,
        rodamientosEngm1I1: req.body || false,
        rodamientosEngm1I2: req.body || false,
        rodamientosEngm1I3: req.body || false,
        rodamientosEngm2D1: req.body || false,
        rodamientosEngm2D2: req.body || false,
        rodamientosEngm2D3: req.body || false,
        rodamientosEngm2I1: req.body || false,
        rodamientosEngm2I2: req.body || false,
        rodamientosEngm2I3: req.body || false,

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC22.findByIdAndUpdate(id, { $set: MMME_C22}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C22.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC22.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C22.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC22.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C22.getAllMaintenenceMMME_C22 = async (req, res) => {
    const maintenances = await mmmeC22.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C22.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C22New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC22.findByIdAndUpdate(id, { $set: historyMMME_C22New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C22.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC22.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C22.createMaintenenceMMME_C22 = async (req, res) => {
    const maintenence = new mmmeC22(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C22;