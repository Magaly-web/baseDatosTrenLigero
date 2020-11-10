'use strict'

var conectar_AT = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/conectarAltaTension');

const conectarAT = {};

conectarAT.getconectarATData = async (req, res) => {
    const {id} = req.params;

    const maintenance = await conectar_AT.findById(id)
    res.json(maintenance)
};
conectarAT.editconectarATData = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const conectarAT = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',

        conectarA: req.body,
        observacionesCa: req.body,
        conectarB: req.body,
        observacionesCb: req.body,
        tapar: req.body,
        observacionesT: req.body,

        materialUtilizado: materiales,
    };
    await conectar_AT.findByIdAndUpdate(id, { $set: conectarAT}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
conectarAT.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await conectar_AT.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
conectarAT.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await conectar_AT.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
conectarAT.getAllMaintenenceconectarAT = async (req, res) => {
    const maintenances = await conectar_AT.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
conectarAT.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyconectarATNew = {
        historyFile: req.body.historyFile || []
    }
    await conectar_AT.findByIdAndUpdate(id, { $set: historyconectarATNew }, { new: true });
    res.json({
        status: 'History update'
    })
}
conectarAT.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await conectar_AT.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
conectarAT.createMaintenenceconectarAT = async (req, res) => {
    const maintenence = new conectar_AT(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = conectarAT;