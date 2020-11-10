'use strict'

var mmmaM12 = require('../../../models/smm/mayor/MMMA_M12');

const MMMA_M12 = {};

MMMA_M12.getMMMA_M12Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmaM12.findById(id)
    res.json(maintenance)
};
MMMA_M12.editMMMA_M12Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMMA_M12 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        fechaInicio: req.body.startTime || '',
        fechaTerminacion: req.body.endTime || '',
 
        descripcionAct: req.body || '',

        materialUtilizado: materiales,
    };
    await mmmaM12.findByIdAndUpdate(id, { $set: MMMA_M12}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMMA_M12.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmaM12.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMMA_M12.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmaM12.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMMA_M12.getAllMaintenenceMMMA_M12 = async (req, res) => {
    const maintenances = await mmmaM12.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMMA_M12.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMMA_M12New = {
        historyFile: req.body.historyFile || []
    }
    await mmmaM12.findByIdAndUpdate(id, { $set: historyMMMA_M12New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMMA_M12.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmaM12.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMMA_M12.createMaintenenceMMMA_M12 = async (req, res) => {
    const maintenence = new mmmaM12(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMMA_M12;