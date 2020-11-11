'use strict'

var mmmeB04 = require('../../../../../models/smm/fichasMantenimiento/SGMM/sistematico/MMME_B04');

const MMME_B04 = {};

MMME_B04.getMMME_B04Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeB04.findById(id)
    res.json(maintenance)
};
MMME_B04.editMMME_B04Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_B04 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        noSerie: req.body || 0,
        horasTE06: req.body || 0,
        observacion: req.body || '',

        radiadorLimp: req.body || false,
        radiadorInsp: req.body || false,
        radiadorAp: req.body || false,
        observacionesR: req.body || '',

        cuerpoMCPLimp: req.body || false,
        cuerpoMCPInsp: req.body || false,
        observacionesCmcp: req.body || '',

        tuberiaGLimp: req.body || false,
        tuberiaGInsp: req.body || false,
        tuberiaGAp: req.body || false,
        observacionesTg: req.body || '',

        bayonetaLimp: req.body || false,
        bayonetaInsp: req.body || false,
        bayonetaAp: req.body || false,
        observacionesB: req.body || '',

        filtroALimp: req.body || false,
        filtroAInsp: req.body || false,
        observacionesFa: req.body || '',

        conexionesELimp: req.body || false,
        conexionesEInsp: req.body || false,
        conexionesEAp: req.body || false,
        observacionesCe: req.body || '',

        tapasCLimp: req.body || false,
        tapasCInsp: req.body || false,
        tapasCAp: req.body || false,
        observacionesTc: req.body || '',

        valvulaRLimp: req.body || false,
        valvulaRInsp: req.body || false,
        valvulaRAp: req.body || false,
        observacionesVr: req.body || '',

        valvulaDLimp: req.body || false,
        valvulaDInsp: req.body || false,
        valvulaDAp: req.body || false,
        observacionesVd: req.body || '',

        platoALimp: req.body || false,
        platoAInsp: req.body || false,
        platoAAp: req.body || false,
        observacionesPa: req.body || '',

        carroceriaLimp: req.body || false,
        carroceriaInsp: req.body || false,
        carroceriaAp: req.body || false,
        observacionesC: req.body || '',

        fijacionBLimp: req.body || false,
        fijacionBInsp: req.body || false,
        fijacionBAp: req.body || false,
        observacionesFb: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeB04.findByIdAndUpdate(id, { $set: MMME_B04}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_B04.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeB04.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_B04.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeB04.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_B04.getAllMaintenenceMMME_B04 = async (req, res) => {
    const maintenances = await mmmeB04.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_B04.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_B04New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeB04.findByIdAndUpdate(id, { $set: historyMMME_B04New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_B04.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeB04.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_B04.createMaintenenceMMME_B04 = async (req, res) => {
    const maintenence = new mmmeB04(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_B04;