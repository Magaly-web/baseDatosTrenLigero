'use strict'

var mmmeC15 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C15');

const MMME_C15 = {};

MMME_C15.getMMME_C15Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC15.findById(id)
    res.json(maintenance)
};
MMME_C15.editMMME_C15Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C15 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        filtroCamb: req.body || false,
        observacionesF: req.body || '',

        valvulaLimp: req.body || false,
        valvulaInsp: req.body || false,
        valvulaAjust: req.body || false,
        valvulaCamb: req.body || false,
        observacionesV: req.body || '',

        //SEPARADOR DE ACEITE
        cuerpoCLimp: req.body || false,
        cuerpoCInsp: req.body || false,
        observacionesCc: req.body || '',

        elementoCamb: req.body || false,
        observacionesE: req.body || '',

        valvulaRLimp: req.body || false,
        valvulaRInsp: req.body || false,
        valvulaRAjust: req.body || false,
        valvulaRCamb: req.body || false,
        observacionesVr: req.body || '',

        valvulaSLimp: req.body || false,
        valvulaSInsp: req.body || false,
        valvulaSAjust: req.body || false,
        valvulaSCamb: req.body || false,
        observacionesVs: req.body || '',

        mirillaNaLimp: req.body || false,
        milillaNaInsp: req.body || false,
        observacionesMna: req.body || '',

        mirillaALimp: req.body || false,
        mirillaAInsp: req.body || false,
        observacionesMa: req.body || '',

        //OTROS
        radiadorLimp: req.body || false,
        radiadorInsp: req.body || false,
        radiadorAjust: req.body || false,
        observacionesR: req.body || '',

        cartuchoLub: req.body || false,
        cartuchoCamb: req.body || false,
        observacionesC: req.body || '',

        interruptorLimp: req.body || false,
        interruptorInsp: req.body || false,
        interruptorAjust: req.body || false,
        interruptorCamb: req.body || false,
        observacionesI: req.body || '',

        acoplamientoLimp: req.body || false,
        acoplamientoInsp: req.body || false,
        acoplamientoAjust: req.body || false,
        acoplamientoCamb: req.body || false,
        observacionesA: req.body || '',

        cuerpoULimp: req.body || false,
        cuerpoUInsp: req.body || false,
        cuerpoUAjust: req.body || false,
        cuerpoUCamb: req.body || false,
        observacionesCu: req.body || '',

        cuerpoBLimp: req.body || false,
        cuerpoBInsp: req.body || false,
        cuerpoBAjust: req.body || false,
        cuerpoBCamb: req.body || false,
        observacionesCb: req.body || '',
            
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC15.findByIdAndUpdate(id, { $set: MMME_C15}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C15.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC15.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C15.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC15.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C15.getAllMaintenenceMMME_C15 = async (req, res) => {
    const maintenances = await mmmeC15.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C15.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C15New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC15.findByIdAndUpdate(id, { $set: historyMMME_C15New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C15.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC15.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C15.createMaintenenceMMME_C15 = async (req, res) => {
    const maintenence = new mmmeC15(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C15;