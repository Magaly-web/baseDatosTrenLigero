'use strict'

var memeB04 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B04');

const MEME_B04 = {};

MEME_B04.getMEME_B04Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeB04.findById(id)
    res.json(maintenance)
};
MEME_B04.editMEME_B04Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const MEME_B04 = {
        noInspeccion: req.req.body.inspeccion || '',
        noTren: req.req.body.tren || '',
        kilometraje: req.req.body.distance || 0,
        horaInicio: req.req.body.startTime || '',
        horaTerminacion: req.req.body.endTime || '',

        fusiblesm1R: req.req.body || false,
        fusiblesm2R: req.req.body || false,

        relevadoresm1L: req.req.body  || false,
        relevadoresm1R: req.req.body  || false,
        relevadoresm2L: req.req.body  || false,
        relevadoresm2R: req.req.body  || false,
        
        cableadom1A: req.req.body || false,
        cableadom1L: req.req.body || false,
        cableadom1R: req.req.body || false,
        cableadom2A: req.req.body || false,
        cableadom2L: req.req.body || false,
        cableadom2R: req.req.body || false,

        manipuladorm1A: req.req.body  || false,
        manipuladorm1L: req.req.body  || false,
        manipuladorm1R: req.req.body  || false,
        manipuladorm2A: req.req.body  || false,
        manipuladorm2L: req.req.body  || false,
        manipuladorm2R: req.req.body  || false,
        
        pupitreBm1A: req.req.body || false,
        pupitreBm1L: req.req.body || false,
        pupitreBm1R: req.req.body || false,
        pupitreBm2A: req.req.body || false,
        pupitreBm2L: req.req.body || false,
        pupitreBm2R: req.req.body || false,
        
        pupitrePm1A: req.req.body || false,
        pupitrePm1L: req.req.body || false,
        pupitrePm1R: req.req.body || false,
        pupitrePm2A: req.req.body || false,
        pupitrePm2L: req.req.body || false,
        pupitrePm2R: req.req.body || false,
        
        tabiqueBm1A: req.req.body || false,
        tabiqueBm1L: req.req.body || false,
        tabiqueBm1R: req.req.body || false,
        tabiqueBm2A: req.req.body || false,
        tabiqueBm2L: req.req.body || false,
        tabiqueBm2R: req.req.body || false,
        
        tabiqueCm1A: req.req.body || false,
        tabiqueCm1L: req.req.body || false,
        tabiqueCm1R: req.req.body || false,
        tabiqueCm2A: req.req.body || false,
        tabiqueCm2L: req.req.body || false,
        tabiqueCm2R: req.req.body || false,
        
        tabiqueFm1L: req.req.body || false,
        tabiqueFm1R: req.req.body || false,
        tabiqueFm2L: req.req.body || false,
        tabiqueFm2R: req.req.body || false,

        ventanasDm1L: req.req.body || false,
        ventanasDm1R: req.req.body || false,
        ventanasDm2L: req.req.body || false,
        ventanasDm2R: req.req.body || false,
        
        ventanasIm1L: req.req.body || false,
        ventanasIm1R: req.req.body || false,
        ventanasIm2L: req.req.body || false,
        ventanasIm2R: req.req.body || false,
        
        parabrisasm1L: req.req.body || false,
        parabrisasm1R: req.req.body || false,
        parabrisasm2L: req.req.body || false,
        parabrisasm2R: req.req.body || false,
        
        cristalDm1L: req.req.body || false,
        cristalDm1R: req.req.body || false,
        cristalDm2L: req.req.body || false,
        cristalDm2R: req.req.body || false,
        
        timpanom1A: req.req.body || false,
        timpanom1L: req.req.body || false,
        timpanom1R: req.req.body || false,
        timpanom2L: req.req.body || false,
        timpanom2R: req.req.body || false,
        
        asientoAm1A: req.req.body || false,
        asientoAm1L: req.req.body || false,
        asientoAm1R: req.req.body || false,
        asientoAm2A: req.req.body || false,
        asientoAm2L: req.req.body || false,
        asientoAm2R: req.req.body || false,
        
        asientoRm1A: req.req.body || false,
        asientoRm1L: req.req.body || false,
        asientoRm1R: req.req.body || false,
        asientoRm2A: req.req.body || false,
        asientoRm2L: req.req.body || false,
        asientoRm2R: req.req.body || false,
        
        asientoBm1A: req.req.body || false,
        asientoBm1L: req.req.body || false,
        asientoBm1R: req.req.body || false,
        asientoBm1E: req.req.body || false,
        asientoBm2A: req.req.body || false,
        asientoBm2L: req.req.body || false,
        asientoBm2R: req.req.body || false,
        asientoBm2E: req.req.body || false,
        
        letreroMm1L: req.req.body || false,
        letreroMm1R: req.req.body || false,
        letreroMm1E: req.req.body || false,
        letreroMm2L: req.req.body || false,
        letreroMm2R: req.req.body || false,
        letreroMm2E: req.req.body || false,
        
        letreroMam1A: req.req.body || false,
        letreroMam1L: req.req.body || false,
        letreroMam1R: req.req.body || false,
        letreroMam2A: req.req.body || false,
        letreroMam2L: req.req.body || false,
        letreroMam2R: req.req.body || false,
        
        letreroManm1A: req.req.body || false,
        letreroManm1L: req.req.body || false,
        letreroManm1R: req.req.body || false,
        letreroManm2A: req.req.body || false,
        letreroManm2L: req.req.body || false,
        letreroManm2R: req.req.body || false,
        
        observaciones: req.req.body.obs,

        materialUtilizado: materiales,
    };
    await memeB04.findByIdAndUpdate(id, { $set: MEME_B04}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_B04.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeB04.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_B04.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeB04.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_B04.getAllMaintenenceMEME_B04 = async (req, res) => {
    const maintenances = await memeB04.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MEME_B04.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_B04New = {
        historyFile: req.body.historyFile || []
    }
    await memeB04.findByIdAndUpdate(id, { $set: historyMEME_B04New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_B04.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeB04.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_B04.createMaintenenceMEME_B04 = async (req, res) => {
    const maintenence = new memeB04(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_B04;