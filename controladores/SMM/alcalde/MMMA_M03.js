'use strict'

var mmmaM03 = require('../../../models/smm/mayor/MMMA_M03');

const MMMA_M03 = {};

MMMA_M03.getMMMA_M03Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM03.findById(id)
    res.json(maintenance)
};
MMMA_M03.editMMMA_M03Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M03 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        //1. DESMONTAJE COPETES DE VENTILACION DE PASAJEROS
        retirarTm11: req.body || false,
        retirarTm12: req.body || false,
        retirarTm13: req.body || false,
        retirarTm14: req.body || false,
        retirarTm21: req.body || false,
        retirarTm22: req.body || false,
        retirarTm23: req.body || false,
        retirarTm24: req.body || false,
        observacionesRt: req.body || '',

        retirarCm11: req.body || false,
        retirarCm12: req.body || false,
        retirarCm13: req.body || false,
        retirarCm14: req.body || false,
        retirarCm21: req.body || false,
        retirarCm22: req.body || false,
        retirarCm23: req.body || false,
        retirarCm24: req.body || false,
        observacionesRc: req.body || '',

        marcarPm11: req.body || false,
        marcarPm12: req.body || false,
        marcarPm13: req.body || false,
        marcarPm14: req.body || false,
        marcarPm21: req.body || false,
        marcarPm22: req.body || false,
        marcarPm23: req.body || false,
        marcarPm24: req.body || false,
        observacionesMp: req.body || '',

        bajarCm11: req.body || false,
        bajarCm12: req.body || false,
        bajarCm13: req.body || false,
        bajarCm14: req.body || false,
        bajarCm21: req.body || false,
        bajarCm22: req.body || false,
        bajarCm23: req.body || false,
        bajarCm24: req.body || false,
        observacionesBc: req.body || '',

        extraccionTm11: req.body || false,
        extraccionTm12: req.body || false,
        extraccionTm13: req.body || false,
        extraccionTm14: req.body || false,
        extraccionTm21: req.body || false,
        extraccionTm22: req.body || false,
        extraccionTm23: req.body || false,
        extraccionTm24: req.body || false,
        observacionesEt: req.body || '',

        //2. MANTENIMIENTO DE COPETES DE VENTILACION DE PASAJEROS
        limpiezaPm11: req.body || false,
        limpiezaPm12: req.body || false,
        limpiezaPm13: req.body || false,
        limpiezaPm14: req.body || false,
        limpiezaPm21: req.body || false,
        limpiezaPm22: req.body || false,
        limpiezaPm23: req.body || false,
        limpiezaPm24: req.body || false,
        observacionesLp: req.body || '',

        recuperacionZm11: req.body || false,
        recuperacionZm12: req.body || false,
        recuperacionZm13: req.body || false,
        recuperacionZm14: req.body || false,
        recuperacionZm21: req.body || false,
        recuperacionZm22: req.body || false,
        recuperacionZm23: req.body || false,
        recuperacionZm24: req.body || false,
        observacionesRz: req.body || '',

        recuperacionLm11: req.body || false,
        recuperacionLm12: req.body || false,
        recuperacionLm13: req.body || false,
        recuperacionLm14: req.body || false,
        recuperacionLm21: req.body || false,
        recuperacionLm22: req.body || false,
        recuperacionLm23: req.body || false,
        recuperacionLm24: req.body || false,
        observacionesRl: req.body || '',

        aplicacionPm11: req.body || false,
        aplicacionPm12: req.body || false,
        aplicacionPm13: req.body || false,
        aplicacionPm14: req.body || false,
        aplicacionPm21: req.body || false,
        aplicacionPm22: req.body || false,
        aplicacionPm23: req.body || false,
        aplicacionPm24: req.body || false,
        observacionesAp: req.body || '',

        aplicacionEm11: req.body || false,
        aplicacionEm12: req.body || false,
        aplicacionEm13: req.body || false,
        aplicacionEm14: req.body || false,
        aplicacionEm21: req.body || false,
        aplicacionEm22: req.body || false,
        aplicacionEm23: req.body || false,
        aplicacionEm24: req.body || false,
        observacionesAe: req.body || '',

        preparacionAm11: req.body || false,
        preparacionAm12: req.body || false,
        preparacionAm13: req.body || false,
        preparacionAm14: req.body || false,
        preparacionAm21: req.body || false,
        preparacionAm22: req.body || false,
        preparacionAm23: req.body || false,
        preparacionAm24: req.body || false,
        observacionesPa: req.body || '',

        aplicacionCm11: req.body || false,
        aplicacionCm12: req.body || false,
        aplicacionCm13: req.body || false,
        aplicacionCm14: req.body || false,
        aplicacionCm21: req.body || false,
        aplicacionCm22: req.body || false,
        aplicacionCm23: req.body || false,
        aplicacionCm24: req.body || false,
        observacionesAc: req.body || '',

        debastadoPm11: req.body || false,
        debastadoPm12: req.body || false,
        debastadoPm13: req.body || false,
        debastadoPm14: req.body || false,
        debastadoPm21: req.body || false,
        debastadoPm22: req.body || false,
        debastadoPm23: req.body || false,
        debastadoPm24: req.body || false,
        observacionesDp: req.body || '',

        preparacionAPm11: req.body || false,
        preparacionAPm12: req.body || false,
        preparacionAPm13: req.body || false,
        preparacionAPm14: req.body || false,
        preparacionAPm21: req.body || false,
        preparacionAPm22: req.body || false,
        preparacionAPm23: req.body || false,
        preparacionAPm24: req.body || false,
        observacionesPap: req.body || '',

        aplicacionCZm11: req.body || false,
        aplicacionCZm12: req.body || false,
        aplicacionCZm13: req.body || false,
        aplicacionCZm14: req.body || false,
        aplicacionCZm21: req.body || false,
        aplicacionCZm22: req.body || false,
        aplicacionCZm23: req.body || false,
        aplicacionCZm24: req.body || false,
        observacionesAcz: req.body || '',

        aplicacionPAm11: req.body || false,
        aplicacionPAm12: req.body || false,
        aplicacionPAm13: req.body || false,
        aplicacionPAm14: req.body || false,
        aplicacionPAm21: req.body || false,
        aplicacionPAm22: req.body || false,
        aplicacionPAm23: req.body || false,
        aplicacionPAm24: req.body || false,
        observacionesApa: req.body || '',

        aplicacionPTm11: req.body || false,
        aplicacionPTm12: req.body || false,
        aplicacionPTm13: req.body || false,
        aplicacionPTm14: req.body || false,
        aplicacionPTm21: req.body || false,
        aplicacionPTm22: req.body || false,
        aplicacionPTm23: req.body || false,
        aplicacionPTm24: req.body || false,
        observacionesApt: req.body || '',

        //3. MONTAJE DE COPETES DE VENTILACION DE PASAJEROS
        subirCm11: req.body || false,
        subirCm12: req.body || false,
        subirCm13: req.body || false,
        subirCm14: req.body || false,
        subirCm21: req.body || false,
        subirCm22: req.body || false,
        subirCm23: req.body || false,
        subirCm24: req.body || false,
        observacionesSc: req.body || '',

        alinearCEm11: req.body || false,
        alinearCEm12: req.body || false,
        alinearCEm13: req.body || false,
        alinearCEm14: req.body || false,
        alinearCEm21: req.body || false,
        alinearCEm22: req.body || false,
        alinearCEm23: req.body || false,
        alinearCEm24: req.body || false,
        observacionesAce: req.body || '',

        colocarTm11: req.body || false,
        colocarTm12: req.body || false,
        colocarTm13: req.body || false,
        colocarTm14: req.body || false,
        colocarTm21: req.body || false,
        colocarTm22: req.body || false,
        colocarTm23: req.body || false,
        colocarTm24: req.body || false,
        observacionesCt: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM03.findByIdAndUpdate(id, { $set: MMMA_M03}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M03.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM03.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M03.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM03.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M03.getAllMaintenenceMMMA_M03 = async (req, res) => {
    const maintenances = await mmmaM03.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M03.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M03New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM03.findByIdAndUpdate(id, { $set: historyMMMA_M03New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M03.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM03.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M03.createMaintenenceMMMA_M03 = async (req, res) => {
    const maintenence = new mmmaM03(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M03;