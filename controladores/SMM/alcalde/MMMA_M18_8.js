'use strict'

var mmmaM18_8 = require('../../../models/smm/mayor/MMMA_M18_8');

const MMMA_M18_8 = {};

MMMA_M18_8.getMMMA_M18_8Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM18_8.findById(id)
    res.json(maintenance)
};
MMMA_M18_8.editMMMA_M18_8Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M18_8 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
        
        //FILTRO DE ASPIRACION
        limpiezaGral: req.body || false,
        observacionesLg: req.body || '',

        desarmadoRev: req.body || false,
        observacionesDr: req.body || '',

        hermeticidad: req.body || false,
        observacionesH: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmaM18_8.findByIdAndUpdate(id, { $set: MMMA_M18_8}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M18_8.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM18_8.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M18_8.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM18_8.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M18_8.getAllMaintenenceMMMA_M18_8 = async (req, res) => {
    const maintenances = await mmmaM18_8.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M18_8.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M18_8New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM18_8.findByIdAndUpdate(id, { $set: historyMMMA_M18_8New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M18_8.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM18_8.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M18_8.createMaintenenceMMMA_M18_8 = async (req, res) => {
    const maintenence = new mmmaM18_8(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M18_8;