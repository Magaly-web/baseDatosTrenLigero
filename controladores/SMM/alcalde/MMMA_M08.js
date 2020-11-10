'use strict'

var mmmaM08 = require('../../../models/smm/mayor/MMMA_M08');

const MMMA_M08 = {};

MMMA_M08.getMMMA_M08Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM08.findById(id)
    res.json(maintenance)
};
MMMA_M08.editMMMA_M08Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M08 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',
        
        //M1 LADO DERECHO
        limpiezaForrosM1d_1: req.body || false,
        limpiezaForrosM1d_2: req.body || false,
        limpiezaForrosM1d_3: req.body || false,
        limpiezaForrosM1d_4: req.body || false,
        limpiezaForrosM1d_5: req.body || false,
        limpiezaForrosM1d_6: req.body || false,
        limpiezaForrosM1d_7: req.body || false,
        limpiezaForrosM1d_8: req.body || false,
        limpiezaForrosM1d_9: req.body || false,
        observacionesLfm1d: req.body || '',

        revisarEstadoFM1d_1: req.body || false,
        revisarEstadoFM1d_2: req.body || false,
        revisarEstadoFM1d_3: req.body || false,
        revisarEstadoFM1d_4: req.body || false,
        revisarEstadoFM1d_5: req.body || false,
        revisarEstadoFM1d_6: req.body || false,
        revisarEstadoFM1d_7: req.body || false,
        revisarEstadoFM1d_8: req.body || false,
        revisarEstadoFM1d_9: req.body || false,
        observacionesRefm1d: req.body || '',

        //M1 LADO IZQUIERDO
        limpiezaForrosM1i_1: req.body || false,
        limpiezaForrosM1i_2: req.body || false,
        limpiezaForrosM1i_3: req.body || false,
        limpiezaForrosM1i_4: req.body || false,
        limpiezaForrosM1i_5: req.body || false,
        limpiezaForrosM1i_6: req.body || false,
        limpiezaForrosM1i_7: req.body || false,
        limpiezaForrosM1i_8: req.body || false,
        limpiezaForrosM1i_9: req.body || false,
        observacionesLfm1i: req.body || '',

        revisarEstadoFM1i_1: req.body || false,
        revisarEstadoFM1i_2: req.body || false,
        revisarEstadoFM1i_3: req.body || false,
        revisarEstadoFM1i_4: req.body || false,
        revisarEstadoFM1i_5: req.body || false,
        revisarEstadoFM1i_6: req.body || false,
        revisarEstadoFM1i_7: req.body || false,
        revisarEstadoFM1i_8: req.body || false,
        revisarEstadoFM1i_9: req.body || false,
        observacionesRefm1i: req.body || '',

        //M2  LADO DERECHO
        limpiezaForrosM2d_1: req.body || false,
        limpiezaForrosM2d_2: req.body || false,
        limpiezaForrosM2d_3: req.body || false,
        limpiezaForrosM2d_4: req.body || false,
        limpiezaForrosM2d_5: req.body || false,
        limpiezaForrosM2d_6: req.body || false,
        limpiezaForrosM2d_7: req.body || false,
        limpiezaForrosM2d_8: req.body || false,
        limpiezaForrosM2d_9: req.body || false,
        observacionesLfm2d: req.body || '',

        revisarEstadoFM2d_1: req.body || false,
        revisarEstadoFM2d_2: req.body || false,
        revisarEstadoFM2d_3: req.body || false,
        revisarEstadoFM2d_4: req.body || false,
        revisarEstadoFM2d_5: req.body || false,
        revisarEstadoFM2d_6: req.body || false,
        revisarEstadoFM2d_7: req.body || false,
        revisarEstadoFM2d_8: req.body || false,
        revisarEstadoFM2d_9: req.body || false,
        observacionesRefm2d: req.body || '',

        //M2  LADO IZQUIERDO
        limpiezaForrosM2i_1: req.body || false,
        limpiezaForrosM2i_2: req.body || false,
        limpiezaForrosM2i_3: req.body || false,
        limpiezaForrosM2i_4: req.body || false,
        limpiezaForrosM2i_5: req.body || false,
        limpiezaForrosM2i_6: req.body || false,
        limpiezaForrosM2i_7: req.body || false,
        limpiezaForrosM2i_8: req.body || false,
        limpiezaForrosM2i_9: req.body || false,
        observacionesLfm2i: req.body || '',

        revisarEstadoFM2i_1: req.body || false,
        revisarEstadoFM2i_2: req.body || false,
        revisarEstadoFM2i_3: req.body || false,
        revisarEstadoFM2i_4: req.body || false,
        revisarEstadoFM2i_5: req.body || false,
        revisarEstadoFM2i_6: req.body || false,
        revisarEstadoFM2i_7: req.body || false,
        revisarEstadoFM2i_8: req.body || false,
        revisarEstadoFM2i_9: req.body || false,
        observacionesRefm2i: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM08.findByIdAndUpdate(id, { $set: MMMA_M08}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M08.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM08.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M08.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM08.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M08.getAllMaintenenceMMMA_M08 = async (req, res) => {
    const maintenances = await mmmaM08.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M08.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M08New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM08.findByIdAndUpdate(id, { $set: historyMMMA_M08New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M08.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM08.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M08.createMaintenenceMMMA_M08 = async (req, res) => {
    const maintenence = new mmmaM08(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M08;