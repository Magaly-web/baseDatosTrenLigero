'use strict'

var aislar_AT = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/aislarAltaTension');

const aislarAT = {};

aislarAT.getaislarATData = async (req, res) => {
    const {id} = req.params;

    const maintenance = await aislar_AT.findById(id)
    res.json(maintenance)
};
aislarAT.editaislarATData = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const aislarAT = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',

        aislarA: req.body,
        observacionesAa: req.body,
        aislarB: req.body,
        observacionesAb: req.body,
        destapar: req.body,
        observacionesD: req.body,

        materialUtilizado: materiales,
    };
    await aislar_AT.findByIdAndUpdate(id, { $set: aislarAT}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
aislarAT.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await aislar_AT.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
aislarAT.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await aislar_AT.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
aislarAT.getAllMaintenenceaislarAT = async (req, res) => {
    const maintenances = await aislar_AT.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
aislarAT.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyaislarATNew = {
        historyFile: req.body.historyFile || []
    }
    await aislar_AT.findByIdAndUpdate(id, { $set: historyaislarATNew }, { new: true });
    res.json({
        status: 'History update'
    })
}
aislarAT.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await aislar_AT.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
aislarAT.createMaintenenceaislarAT = async (req, res) => {
    const maintenence = new aislar_AT(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = aislarAT;