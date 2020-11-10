'use strict'

var mmmaM41_1 = require('../../../models/smm/mayor/MMMA_M41_1');

const MMMA_M41_1 = {};

MMMA_M41_1.getMMMA_M41_1Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM41_1.findById(id)
    res.json(maintenance)
};
MMMA_M41_1.editMMMA_M41_1Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M41_1 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        cursorRevM1_1: req.body || false,
        cursorRevM1_2: req.body || false,
        cursorRevR_3: req.body || false,
        cursorRevR_4: req.body || false,
        cursorRevM2_5: req.body || false,
        cursorRevM2_6: req.body || false,
        observacionesCrev: req.body || '',

        cursorLimpM1_1: req.body || false,
        cursorLimpM1_2: req.body || false,
        cursorLimpR_3: req.body || false,
        cursorLimpR_4: req.body || false,
        cursorLimpM2_5: req.body || false,
        cursorLimpM2_6: req.body || false,
        observacionesClimp: req.body || '',

        cursorEngM1_1: req.body || false,
        cursorEngM1_2: req.body || false,
        cursorEngR_3: req.body || false,
        cursorEngR_4: req.body || false,
        cursorEngM2_5: req.body || false,
        cursorEngM2_6: req.body || false,
        observacionesCeng: req.body || '',

        tapaRevM1_1: req.body || false,
        tapaRevM1_2: req.body || false,
        tapaRevR_3: req.body || false,
        tapaRevR_4: req.body || false,
        tapaRevM2_5: req.body || false,
        tapaRevM2_6: req.body || false,
        observacionesTapaRev: req.body || '',

        tapaLimpM1_1: req.body || false,
        tapaLimpM1_2: req.body || false,
        tapaLimpR_3: req.body || false,
        tapaLimpR_4: req.body || false,
        tapaLimpM2_5: req.body || false,
        tapaLimpM2_6: req.body || false,
        observacionesTapaLimp: req.body || '',

        cajaRevM1_1: req.body || false,
        cajaRevM1_2: req.body || false,
        cajaRevR_3: req.body || false,
        cajaRevR_4: req.body || false,
        cajaRevM2_5: req.body || false,
        cajaRevM2_6: req.body || false,
        observacionesCajaRev: req.body || '',

        cajaLimpM1_1: req.body || false,
        cajaLimpM1_2: req.body || false,
        cajaLimpR_3: req.body || false,
        cajaLimpR_4: req.body || false,
        cajaLimpM2_5: req.body || false,
        cajaLimpM2_6: req.body || false,
        observacionesCajaLimp: req.body || '',

        tornilleriaRevM1_1: req.body || false,
        tornilleriaRevM1_2: req.body || false,
        tornilleriaRevR_3: req.body || false,
        tornilleriaRevR_4: req.body || false,
        tornilleriaRevM2_5: req.body || false,
        tornilleriaRevM2_6: req.body || false,
        observacionesTrev: req.body || '',

        tornilleriaLimpM1_1: req.body || false,
        tornilleriaLimpM1_2: req.body || false,
        tornilleriaLimpR_3: req.body || false,
        tornilleriaLimpR_4: req.body || false,
        tornilleriaLimpM2_5: req.body || false,
        tornilleriaLimpM2_6: req.body || false,
        observacionesTlimp: req.body || '',

        tornilleriaEngM1_1: req.body || false,
        tornilleriaEngM1_2: req.body || false,
        tornilleriaEngR_3: req.body || false,
        tornilleriaEngR_4: req.body || false,
        tornilleriaEngM2_5: req.body || false,
        tornilleriaEngM2_6: req.body || false,
        observacionesTeng: req.body || '',

        observaciones: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM41_1.findByIdAndUpdate(id, { $set: MMMA_M41_1}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M41_1.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM41_1.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M41_1.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM41_1.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M41_1.getAllMaintenenceMMMA_M41_1 = async (req, res) => {
    const maintenances = await mmmaM41_1.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M41_1.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M41_1New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM41_1.findByIdAndUpdate(id, { $set: historyMMMA_M41_1New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M41_1.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM41_1.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M41_1.createMaintenenceMMMA_M41_1 = async (req, res) => {
    const maintenence = new mmmaM41_1(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M41_1;