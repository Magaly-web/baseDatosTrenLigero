'use strict'

var mmmeC11 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C11');

const MMME_C11 = {};

MMME_C11.getMMME_C11Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC11.findById(id)
    res.json(maintenance)
};
MMME_C11.editMMME_C11Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C11 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        bisagraSm1Limp: req.body || false,
        bisagraSm1Rev: req.body || false,
        bisagraSm1Lub: req.body || false,
        bisagraSm1Ajuste: req.body || false,
        bisagraSm2Limp: req.body || false,
        bisagraSm2Rev: req.body || false,
        bisagraSm2Lub: req.body || false,
        bisagraSm2Ajuste: req.body || false,

        bisagraIm1Limp: req.body || false,
        bisagraIm1Rev: req.body || false,
        bisagraIm1Lub: req.body || false,
        bisagraIm1Ajuste: req.body || false,
        bisagraIm2Limp: req.body || false,
        bisagraIm2Rev: req.body || false,
        bisagraIm2Lub: req.body || false,
        bisagraIm2Ajuste: req.body || false,

        //CHAPA Y CONTRA CHAPA PARA TE-90 Y TE-95
        resorteSm1Limp: req.body || false,
        resorteSm1Rev: req.body || false,
        resorteSm1Lub: req.body || false,
        resorteSm2Limp: req.body || false,
        resorteSm2Rev: req.body || false,
        resorteSm2Lub: req.body || false,
        
        resorteCm1Limp: req.body || false,
        resorteCm1Rev: req.body || false,
        resorteCm1Lub: req.body || false,
        resorteCm2Limp: req.body || false,
        resorteCm2Rev: req.body || false,
        resorteCm2Lub: req.body || false,
        
        resorteIm1Limp: req.body || false,
        resorteIm1Rev: req.body || false,
        resorteIm1Lub: req.body || false,
        resorteIm2Limp: req.body || false,
        resorteIm2Rev: req.body || false,
        resorteIm2Lub: req.body || false,
        
        tornilleriam1Limp: req.body || false,
        tornilleriam1Rev: req.body || false,
        tornilleriam1Lub: req.body || false,
        tornilleriam2Limp: req.body || false,
        tornilleriam2Rev: req.body || false,
        tornilleriam2Lub: req.body || false,
        
        //CHAPA Y CONTRA CHAPA PARA TE-06
        placam1Limp: req.body || false,
        placam1Rev: req.body || false,
        placam1Lub: req.body || false,
        placam2Limp: req.body || false,
        placam2Rev: req.body || false,
        placam2Lub: req.body || false,
        
        resortesm1Limp: req.body || false,
        resortesm1Rev: req.body || false,
        resortesm1Lub: req.body || false,
        resortesm2Limp: req.body || false,
        resortesm2Rev: req.body || false,
        resortesm2Lub: req.body || false,
        
        mecanismom1Limp: req.body || false,
        mecanismom1Rev: req.body || false,
        mecanismom1Ajuste: req.body || false,
        mecanismom2Limp: req.body || false,
        mecanismom2Rev: req.body || false,
        mecanismom2Ajuste: req.body || false,

        cilindrom1Limp: req.body || false,
        cilindrom1Rev: req.body || false,
        cilindrom2Limp: req.body || false,
        cilindrom2Rev: req.body || false,
        
        tornilleria06m1Limp: req.body || false,
        tornilleria06m1Rev: req.body || false,
        tornilleria06m1Lub: req.body || false,
        tornilleria06m2Limp: req.body || false,
        tornilleria06m2Rev: req.body || false,
        tornilleria06m2Lub: req.body || false,
        
        //ASIENTO DE OPERADOR
        basem1Limp: req.body || false,
        basem1Rev: req.body || false,
        basem1Lub: req.body || false,
        basem2Limp: req.body || false,
        basem2Rev: req.body || false,
        basem2Lub: req.body || false,

        asientom1Limp: req.body || false,
        asientom1Rev: req.body || false,
        asientom1Lub: req.body || false,
        asientom2Limp: req.body || false,
        asientom2Rev: req.body || false,
        asientom2Lub: req.body || false,

        respaldom1Limp: req.body || false,
        respaldom1Rev: req.body || false,
        respaldom2Limp: req.body || false,
        respaldom2Rev: req.body || false,
            
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC11.findByIdAndUpdate(id, { $set: MMME_C11}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C11.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC11.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C11.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC11.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C11.getAllMaintenenceMMME_C11 = async (req, res) => {
    const maintenances = await mmmeC11.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C11.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C11New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC11.findByIdAndUpdate(id, { $set: historyMMME_C11New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C11.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC11.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C11.createMaintenenceMMME_C11 = async (req, res) => {
    const maintenence = new mmmeC11(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C11;