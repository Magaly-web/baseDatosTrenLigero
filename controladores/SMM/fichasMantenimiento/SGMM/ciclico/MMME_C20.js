'use strict'

var mmmeC20 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C20');

const MMME_C20 = {};

MMME_C20.getMMME_C20Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC20.findById(id)
    res.json(maintenance)
};
MMME_C20.editMMME_C20Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C20 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        //M1 EJE 1 y 2
        palancaIm1e1Rev: req.body || false,
        palancaIm1e1Limp: req.body || false,
        palancaIm1e1Eng: req.body || false,
        palancaIm1e2Rev: req.body || false,
        palancaIm1e2Limp: req.body || false,
        palancaIm1e2Eng: req.body || false,
        observacionesPi: req.body || '',

        palancaDm1e1Rev: req.body || false,
        palancaDm1e1Limp: req.body || false,
        palancaDm1e1Eng: req.body || false,
        palancaDm1e2Rev: req.body || false,
        palancaDm1e2Limp: req.body || false,
        palancaDm1e2Eng: req.body || false,
        observacionesPd: req.body || '',

        tirantem1e1Rev: req.body || false,
        tirantem1e1Limp: req.body || false,
        tirantem1e1Eng: req.body || false,
        tirantem1e2Rev: req.body || false,
        tirantem1e2Limp: req.body || false,
        tirantem1e2Eng: req.body || false,
        observacionesT: req.body || '',

        portazapataIm1e1Rev: req.body || false,
        portazapataIm1e1Limp: req.body || false,
        portazapataIm1e1Eng: req.body || false,
        portazapataIm1e2Rev: req.body || false,
        portazapataIm1e2Limp: req.body || false,
        portazapataIm1e2Eng: req.body || false,
        observacionesPtaI: req.body || '',

        casquilloIm1e1Rev: req.body || false,
        casquilloIm1e1Limp: req.body || false,
        casquilloIm1e1Eng: req.body || false,
        casquilloIm1e2Rev: req.body || false,
        casquilloIm1e2Limp: req.body || false,
        casquilloIm1e2Eng: req.body || false,
        observacionesCi: req.body || '',

        muelleIm1e1Rev: req.body || false,
        muelleIm1e1Limp: req.body || false,
        muelleIm1e1Eng: req.body || false,
        muelleIm1e2Rev: req.body || false,
        muelleIm1e2Limp: req.body || false,
        muelleIm1e2Eng: req.body || false,
        observacionesMi: req.body || '',

        remIm1e1Rev: req.body || false,
        remIm1e1Limp: req.body || false,
        remIm1e1Eng: req.body || false,
        remIm1e2Rev: req.body || false,
        remIm1e2Limp: req.body || false,
        remIm1e2Eng: req.body || false,
        observacionesRi: req.body || '',

        portazapataDm1e1Rev: req.body || false,
        portazapataDm1e1Limp: req.body || false,
        portazapataDm1e1Eng: req.body || false,
        portazapataDm1e2Rev: req.body || false,
        portazapataDm1e2Limp: req.body || false,
        portazapataDm1e2Eng: req.body || false,
        observacionesPtad: req.body || '',

        casquilloDm1e1Rev: req.body || false,
        casquilloDm1e1Limp: req.body || false,
        casquilloDm1e1Eng: req.body || false,
        casquilloDm1e2Rev: req.body || false,
        casquilloDm1e2Limp: req.body || false,
        casquilloDm1e2Eng: req.body || false,
        observacionesCd: req.body || '',

        muelleDm1e1Rev: req.body || false,
        muelleDm1e1Limp: req.body || false,
        muelleDm1e1Eng: req.body || false,
        muelleDm1e2Rev: req.body || false,
        muelleDm1e2Limp: req.body || false,
        muelleDm1e2Eng: req.body || false,
        observacionesMd: req.body || '',

        remDm1e1Rev: req.body || false,
        remDm1e1Limp: req.body || false,
        remDm1e1Eng: req.body || false,
        remDm1e2Rev: req.body || false,
        remDm1e2Limp: req.body || false,
        remDm1e2Eng: req.body || false,
        observacionesRd: req.body || '',

        bielam1e1Rev: req.body || false,
        bielam1e1Limp: req.body || false,
        bielam1e1Eng: req.body || false,
        bielam1e2Rev: req.body || false,
        bielam1e2Limp: req.body || false,
        bielam1e2Eng: req.body || false,
        observacionesB: req.body || '',

        bulones6m1e1Rev: req.body || false,
        bulones6m1e1Limp: req.body || false,
        bulones6m1e1Eng: req.body || false,
        bulones6m1e2Rev: req.body || false,
        bulones6m1e2Limp: req.body || false,
        bulones6m1e2Eng: req.body || false,
        observacionesB6: req.body || '',

        bulon2m1e1Rev: req.body || false,
        bulon2m1e1Limp: req.body || false,
        bulon2m1e1Eng: req.body || false,
        bulon2m1e2Rev: req.body || false,
        bulon2m1e2Limp: req.body || false,
        bulon2m1e2Eng: req.body || false,
        observacionesB2: req.body || '',

        casquillom1e1Rev: req.body || false,
        casquillom1e1Limp: req.body || false,
        casquillom1e1Eng: req.body || false,
        casquillom1e2Rev: req.body || false,
        casquillom1e2Limp: req.body || false,
        casquillom1e2Eng: req.body || false,
        observacionesC: req.body || '',

        //REMOLQUE EJES 1 y 2
        palancaFIrE1Rev: req.body || false,
        palancaFIrE1Limp: req.body || false,
        palancaFIrE1Eng: req.body || false,
        palancaFIrE2Rev: req.body || false,
        palancaFIrE2Limp: req.body || false,
        palancaFIrE2Eng: req.body || false,
        observacionesPfi: req.body || '',

        palancaFDrE1Rev: req.body || false,
        palancaFDrE1Limp: req.body || false,
        palancaFDrE1Eng: req.body || false,
        palancaFDrE2Rev: req.body || false,
        palancaFDrE2Limp: req.body || false,
        palancaFDrE2Eng: req.body || false,
        observacionesPfd: req.body || '',

        tiranterE1Rev: req.body || false,
        tiranterE1Limp: req.body || false,
        tiranterE1Eng: req.body || false,
        tiranterE2Rev: req.body || false,
        tiranterE2Limp: req.body || false,
        tiranterE2Eng: req.body || false,
        observacionesTirant: req.body || '',

        portazapataIzqrE1Rev: req.body || false,
        portazapataIzqrE1Limp: req.body || false,
        portazapataIzqrE1Eng: req.body || false,
        portazapataIzqrE2Rev: req.body || false,
        portazapataIzqrE2Limp: req.body || false,
        portazapataIzqrE2Eng: req.body || false,
        observacionesPizq: req.body || '',

        casquilloIzqrE1Rev: req.body || false,
        casquilloIzqrE1Limp: req.body || false,
        casquilloIzqrE1Eng: req.body || false,
        casquilloIzqrE2Rev: req.body || false,
        casquilloIzqrE2Limp: req.body || false,
        casquilloIzqrE2Eng: req.body || false,
        observacionesCizq: req.body || '',

        muellePIrE1Rev: req.body || false,
        muellePIrE1Limp: req.body || false,
        muellePIrE1Eng: req.body || false,
        muellePIrE2Rev: req.body || false,
        muellePIrE2Limp: req.body || false,
        muellePIrE2Eng: req.body || false,
        observacionesMpi: req.body || '',

        remPIrE1Rev: req.body || false,
        remPIrE1Limp: req.body || false,
        remPIrE1Eng: req.body || false,
        remPIrE2Rev: req.body || false,
        remPIrE2Limp: req.body || false,
        remPIrE2Eng: req.body || false,
        observacionesRpi: req.body || '',

        portazapataDerrE1Rev: req.body || false,
        portazapataDerrE1Limp: req.body || false,
        portazapataDerrE1Eng: req.body || false,
        portazapataDerrE2Rev: req.body || false,
        portazapataDerrE2Limp: req.body || false,
        portazapataDerrE2Eng: req.body || false,
        observacionesPder: req.body || '',

        casquilloDerrE1Rev: req.body || false,
        casquilloDerrE1Limp: req.body || false,
        casquilloDerrE1Eng: req.body || false,
        casquilloDerrE2Rev: req.body || false,
        casquilloDerrE2Limp: req.body || false,
        casquilloDerrE2Eng: req.body || false,
        observacionesCder: req.body || '',

        muellePDrE1Rev: req.body || false,
        muellePDrE1Limp: req.body || false,
        muellePDrE1Eng: req.body || false,
        muellePDrE2Rev: req.body || false,
        muellePDrE2Limp: req.body || false,
        muellePDrE2Eng: req.body || false,
        observacionesMpd: req.body || '',

        remPDrE1Rev: req.body || false,
        remPDrE1Limp: req.body || false,
        remPDrE1Eng: req.body || false,
        remPDrE2Rev: req.body || false,
        remPDrE2Limp: req.body || false,
        remPDrE2Eng: req.body || false,
        observacionesRpd: req.body || '',

        bielaDrE1Rev: req.body || false,
        bielaDrE1Limp: req.body || false,
        bielaDrE1Eng: req.body || false,
        bielaDrE2Rev: req.body || false,
        bielaDrE2Limp: req.body || false,
        bielaDrE2Eng: req.body || false,
        observacionesBd: req.body || '',

        bulones6rE1Rev: req.body || false,
        bulones6rE1Limp: req.body || false,
        bulones6rE1Eng: req.body || false,
        bulones6rE2Rev: req.body || false,
        bulones6rE2Limp: req.body || false,
        bulones6rE2Eng: req.body || false,
        observacionesBul6: req.body || '',

        bulonR2rE1Rev: req.body || false,
        bulonR2rE1Limp: req.body || false,
        bulonR2rE1Eng: req.body || false,
        bulonR2rE2Rev: req.body || false,
        bulonR2rE2Limp: req.body || false,
        bulonR2rE2Eng: req.body || false,
        observacionesBr2: req.body || '',

        casquilloCrE1Rev: req.body || false,
        casquilloCrE1Limp: req.body || false,
        casquilloCrE1Eng: req.body || false,
        casquilloCrE2Rev: req.body || false,
        casquilloCrE2Limp: req.body || false,
        casquilloCrE2Eng: req.body || false,
        observacionesCc: req.body || '',

        //M2 EJE 1 y 2
        palancaFIzqm2E1Rev: req.body || false,
        palancaFIzqm2E1Limp: req.body || false,
        palancaFIzqm2E1Eng: req.body || false,
        palancaFIzqm2E2Rev: req.body || false,
        palancaFIzqm2E2Limp: req.body || false,
        palancaFIzqm2E2Eng: req.body || false,
        observacionesPfizq: req.body || '',

        palancaFDerm2E1Rev: req.body || false,
        palancaFDerm2E1Limp: req.body || false,
        palancaFDerm2E1Eng: req.body || false,
        palancaFDerm2E2Rev: req.body || false,
        palancaFDerm2E2Limp: req.body || false,
        palancaFDerm2E2Eng: req.body || false,
        observacionesPfder: req.body || '',

        tirantem2E1Rev: req.body || false,
        tirantem2E1Limp: req.body || false,
        tirantem2E1Eng: req.body || false,
        tirantem2E2Rev: req.body || false,
        tirantem2E2Limp: req.body || false,
        tirantem2E2Eng: req.body || false,
        observacionesTirante: req.body || '',

        portazapataIzqm2E1Rev: req.body || false,
        portazapataIzqm2E1Limp: req.body || false,
        portazapataIzqm2E1Eng: req.body || false,
        portazapataIzqm2E2Rev: req.body || false,
        portazapataIzqm2E2Limp: req.body || false,
        portazapataIzqm2E2Eng: req.body || false,
        observacionesPtaIzq: req.body || '',

        casquilloPIzqm2E1Rev: req.body || false,
        casquilloPIzqm2E1Limp: req.body || false,
        casquilloPIzqm2E1Eng: req.body || false,
        casquilloPIzqm2E2Rev: req.body || false,
        casquilloPIzqm2E2Limp: req.body || false,
        casquilloPIzqm2E2Eng: req.body || false,
        observacionesCpIzq: req.body || '',

        muelleCPIm2E1Rev: req.body || false,
        muelleCPIm2E1Limp: req.body || false,
        muelleCPIm2E1Eng: req.body || false,
        muelleCPIm2E2Rev: req.body || false,
        muelleCPIm2E2Limp: req.body || false,
        muelleCPIm2E2Eng: req.body || false,
        observacionesMcpi: req.body || '',

        remAPIm2E1Rev: req.body || false,
        remAPIm2E1Limp: req.body || false,
        remAPIm2E1Eng: req.body || false,
        remAPIm2E2Rev: req.body || false,
        remAPIm2E2Limp: req.body || false,
        remAPIm2E2Eng: req.body || false,
        observacionesRapi: req.body || '',

        portazapataDm2E1Rev: req.body || false,
        portazapataDm2E1Limp: req.body || false,
        portazapataDm2E1Eng: req.body || false,
        portazapataDm2E2Rev: req.body || false,
        portazapataDm2E2Limp: req.body || false,
        portazapataDm2E2Eng: req.body || false,
        observacionesPtaDer: req.body || '',

        casquilloPDm2E1Rev: req.body || false,
        casquilloPDm2E1Limp: req.body || false,
        casquilloPDm2E1Eng: req.body || false,
        casquilloPDm2E2Rev: req.body || false,
        casquilloPDm2E2Limp: req.body || false,
        casquilloPDm2E2Eng: req.body || false,
        observacionesCpDer: req.body || '',

        muelleCPDm2E1Rev: req.body || false,
        muelleCPDm2E1Limp: req.body || false,
        muelleCPDm2E1Eng: req.body || false,
        muelleCPDm2E2Rev: req.body || false,
        muelleCPDm2E2Limp: req.body || false,
        muelleCPDm2E2Eng: req.body || false,
        observacionesMcpd: req.body || '',

        remAPDm2E1Rev: req.body || false,
        remAPDm2E1Limp: req.body || false,
        remAPDm2E1Eng: req.body || false,
        remAPDm2E2Rev: req.body || false,
        remAPDm2E2Limp: req.body || false,
        remAPDm2E2Eng: req.body || false,
        observacionesRapd: req.body || '',

        bielaDm2E1Rev: req.body || false,
        bielaDm2E1Limp: req.body || false,
        bielaDm2E1Eng: req.body || false,
        bielaDm2E2Rev: req.body || false,
        bielaDm2E2Limp: req.body || false,
        bielaDm2E2Eng: req.body || false,
        observacionesBdir: req.body || '',

        bulones6m2E1Rev: req.body || false,
        bulones6m2E1Limp: req.body || false,
        bulones6m2E1Eng: req.body || false,
        bulones6m2E2Rev: req.body || false,
        bulones6m2E2Limp: req.body || false,
        bulones6m2E2Eng: req.body || false,
        observacionesBulones6: req.body || '',

        bulonR2m2E1Rev: req.body || false,
        bulonR2m2E1Limp: req.body || false,
        bulonR2m2E1Eng: req.body || false,
        bulonR2m2E2Rev: req.body || false,
        bulonR2m2E2Limp: req.body || false,
        bulonR2m2E2Eng: req.body || false,
        observacionesBrt2: req.body || '',

        casquilloCm2E1Rev: req.body || false,
        casquilloCm2E1Limp: req.body || false,
        casquilloCm2E1Eng: req.body || false,
        casquilloCm2E2Rev: req.body || false,
        casquilloCm2E2Limp: req.body || false,
        casquilloCm2E2Eng: req.body || false,
        observacionesCasqC: req.body || '',

        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC20.findByIdAndUpdate(id, { $set: MMME_C20}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C20.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC20.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C20.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC20.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C20.getAllMaintenenceMMME_C20 = async (req, res) => {
    const maintenances = await mmmeC20.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C20.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C20New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC20.findByIdAndUpdate(id, { $set: historyMMME_C20New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C20.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC20.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C20.createMaintenenceMMME_C20 = async (req, res) => {
    const maintenence = new mmmeC20(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C20;