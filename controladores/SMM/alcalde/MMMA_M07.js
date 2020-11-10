'use strict'

var mmmaM07 = require('../../../models/smm/mayor/MMMA_M07');

const MMMA_M07 = {};

MMMA_M07.getMMMA_M07Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM07.findById(id)
    res.json(maintenance)
};
MMMA_M07.editMMMA_M07Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M07 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',
        
        //FORROS
        limpiezaFm1_1: req.body || false,
        limpiezaFm1_2: req.body || false,
        limpiezaFm1_3: req.body || false,
        limpiezaFm1_4: req.body || false,
        limpiezaFm2_1: req.body || false,
        limpiezaFm2_2: req.body || false,
        limpiezaFm2_3: req.body || false,
        limpiezaFm2_4: req.body || false,
        observacionesLf: req.body || '',

        revisarEm1_1: req.body || false,
        revisarEm1_2: req.body || false,
        revisarEm1_3: req.body || false,
        revisarEm1_4: req.body || false,
        revisarEm2_1: req.body || false,
        revisarEm2_2: req.body || false,
        revisarEm2_3: req.body || false,
        revisarEm2_4: req.body || false,
        observacionesRe: req.body || '',

        revisarZm1_1: req.body || false,
        revisarZm1_2: req.body || false,
        revisarZm1_3: req.body || false,
        revisarZm1_4: req.body || false,
        revisarZm2_1: req.body || false,
        revisarZm2_2: req.body || false,
        revisarZm2_3: req.body || false,
        revisarZm2_4: req.body || false,
        observacionesRz: req.body || '',

        aplicarSm1_1: req.body || false,
        aplicarSm1_2: req.body || false,
        aplicarSm1_3: req.body || false,
        aplicarSm1_4: req.body || false,
        aplicarSm2_1: req.body || false,
        aplicarSm2_2: req.body || false,
        aplicarSm2_3: req.body || false,
        aplicarSm2_4: req.body || false,
        observacionesAs: req.body || '',

        //MOLDURAS
        limpiezaMm1_1: req.body || false,
        limpiezaMm1_2d: req.body || false,
        limpiezaMm1_2i: req.body || false,
        limpiezaMm1_3d: req.body || false,
        limpiezaMm1_3i: req.body || false,
        limpiezaMm1_4d: req.body || false,
        limpiezaMm1_4i: req.body || false,
        limpiezaMm1_5: req.body || false,
        limpiezaMm1_Ld: req.body || false,
        limpiezaMm1_Li: req.body || false,
        limpiezaMm2_1: req.body || false,
        limpiezaMm2_2d: req.body || false,
        limpiezaMm2_2i: req.body || false,
        limpiezaMm2_3d: req.body || false,
        limpiezaMm2_3i: req.body || false,
        limpiezaMm2_4d: req.body || false,
        limpiezaMm2_4i: req.body || false,
        limpiezaMm2_5: req.body || false,
        limpiezaMm2_Ld: req.body || false,
        limpiezaMm2_Li: req.body || false,
        observacionesLm: req.body || '',

        revisarEstadoMm1_1: req.body || false,
        revisarEstadoMm1_2d: req.body || false,
        revisarEstadoMm1_2i: req.body || false,
        revisarEstadoMm1_3d: req.body || false,
        revisarEstadoMm1_3i: req.body || false,
        revisarEstadoMm1_4d: req.body || false,
        revisarEstadoMm1_4i: req.body || false,
        revisarEstadoMm1_5: req.body || false,
        revisarEstadoMm1_Ld: req.body || false,
        revisarEstadoMm1_Li: req.body || false,
        revisarEstadoMm2_1: req.body || false,
        revisarEstadoMm2_2d: req.body || false,
        revisarEstadoMm2_2i: req.body || false,
        revisarEstadoMm2_3d: req.body || false,
        revisarEstadoMm2_3i: req.body || false,
        revisarEstadoMm2_4d: req.body || false,
        revisarEstadoMm2_4i: req.body || false,
        revisarEstadoMm2_5: req.body || false,
        revisarEstadoMm2_Ld: req.body || false,
        revisarEstadoMm2_Li: req.body || false,
        observacionesRem: req.body || '',

        revisarElementosFm1_1: req.body || false,
        revisarElementosFm1_2d: req.body || false,
        revisarElementosFm1_2i: req.body || false,
        revisarElementosFm1_3d: req.body || false,
        revisarElementosFm1_3i: req.body || false,
        revisarElementosFm1_4d: req.body || false,
        revisarElementosFm1_4i: req.body || false,
        revisarElementosFm1_5: req.body || false,
        revisarElementosFm1_Ld: req.body || false,
        revisarElementosFm1_Li: req.body || false,
        revisarElementosFm2_1: req.body || false,
        revisarElementosFm2_2d: req.body || false,
        revisarElementosFm2_2i: req.body || false,
        revisarElementosFm2_3d: req.body || false,
        revisarElementosFm2_3i: req.body || false,
        revisarElementosFm2_4d: req.body || false,
        revisarElementosFm2_4i: req.body || false,
        revisarElementosFm2_5: req.body || false,
        revisarElementosFm2_Ld: req.body || false,
        revisarElementosFm2_Li: req.body || false,
        observacionesRef: req.body || '',

        aplicarSelladorFm1_1: req.body || false,
        aplicarSelladorFm1_2d: req.body || false,
        aplicarSelladorFm1_2i: req.body || false,
        aplicarSelladorFm1_3d: req.body || false,
        aplicarSelladorFm1_3i: req.body || false,
        aplicarSelladorFm1_4d: req.body || false,
        aplicarSelladorFm1_4i: req.body || false,
        aplicarSelladorFm1_5: req.body || false,
        aplicarSelladorFm1_Ld: req.body || false,
        aplicarSelladorFm1_Li: req.body || false,
        aplicarSelladorFm2_1: req.body || false,
        aplicarSelladorFm2_2d: req.body || false,
        aplicarSelladorFm2_2i: req.body || false,
        aplicarSelladorFm2_3d: req.body || false,
        aplicarSelladorFm2_3i: req.body || false,
        aplicarSelladorFm2_4d: req.body || false,
        aplicarSelladorFm2_4i: req.body || false,
        aplicarSelladorFm2_5: req.body || false,
        aplicarSelladorFm2_Ld: req.body || false,
        aplicarSelladorFm2_Li: req.body || false,
        observacionesAsf: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM07.findByIdAndUpdate(id, { $set: MMMA_M07}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M07.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM07.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M07.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM07.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M07.getAllMaintenenceMMMA_M07 = async (req, res) => {
    const maintenances = await mmmaM07.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M07.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M07New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM07.findByIdAndUpdate(id, { $set: historyMMMA_M07New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M07.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM07.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M07.createMaintenenceMMMA_M07 = async (req, res) => {
    const maintenence = new mmmaM07(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M07;