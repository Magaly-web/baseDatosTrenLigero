'use strict'

var memeB05_612 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B05_612');

const MEME_B05_612 = {};

MEME_B05_612.getMEME_B05_612Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await memeB05_612.findById(id)
    res.json(maintenance)
};
MEME_B05_612.editMEME_B05_612Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MEME_B05_612 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        cofre1Limp:req.body || false,
        cofre1Rev: req.body || false,
        
        pestillosLimp:req.body || false,
        pestillosRev: req.body || false,
        pestillosAp: req.body || false,
        pestillosLub: req.body || false,
        pestillosAj: req.body || false,
        
        bisagrasLimp:req.body || false,
        bisagrasRev: req.body || false,
        bisagrasLub: req.body || false,

        tapasLimp:req.body || false,
        tapasRev: req.body || false,

        selloLimp:req.body || false,
        selloRev: req.body || false,
        
        cfmLimp:req.body || false,
        cfmRev: req.body || false,
        cfmAp: req.body || false,
        
        conectoresLimp:req.body || false,
        conectoresRev: req.body || false,
        conectoresAp: req.body || false,

        gYfLimp:req.body || false,
        gYfRev: req.body || false,
        gYfAp: req.body || false,
        
        dYgLimp:req.body || false,
        dYgRev: req.body || false,
        dYgAp: req.body || false,
        
        iYcLimp:req.body || false,
        iYcRev: req.body || false,
        iYcAp: req.body || false,
        
        cYrLimp:req.body || false,
        cYrRev: req.body || false,
        cYrAp: req.body || false,
        
        modulosLimp:req.body || false,
        modulosRev: req.body || false,
        modulosAp: req.body || false,
        
        relevadorLimp:req.body || false,
        relevadorRev: req.body || false,
        relevadorAp: req.body || false,
        
        selectorLimp:req.body || false,
        selectorRev: req.body || false,
        selectorAp: req.body || false,
        
        arnesesLimp:req.body || false,
        arnesesRev: req.body || false,
        arnesesAp: req.body || false,

        //parte2
        cofre2Limp:req.body || false,
        cofre2Rev: req.body || false,
        
        tapasPLimp:req.body || false,
        tapasPRev: req.body || false,
        tapasPLub: req.body || false,
        
        tapasBLimp:req.body || false,
        tapasBRev: req.body || false,

        tapasTapLimp:req.body || false,
        tapasTapRev: req.body || false,
        
        tapasTLimp:req.body || false,
        tapasTRev: req.body || false,
        tapasTAp: req.body || false,
        tapasTLub: req.body || false,
        tapasTAj: req.body || false,
        
        tapasSLimp:req.body || false,
        tapasSRev: req.body || false,
        
        tapasALimp:req.body || false,
        tapasARev: req.body || false,
        tapasAAp: req.body || false,
        
        ktbLimp:req.body || false,
        ktbRev: req.body || false,
        ktbAp: req.body || false,
        
        iabLimp:req.body || false,
        iabRev: req.body || false,
        iabAp: req.body || false,
        
        fbb1Limp:req.body || false,
        fbb1Rev: req.body || false,
        fbb1Ap: req.body || false,
        
        bcLimp:req.body || false,
        bcRev: req.body || false,
        bcAp: req.body || false,
        
        tuercasLimp:req.body || false,
        tuercasRev: req.body || false,
        tuercasAp: req.body || false,

        birlosLimp:req.body || false,
        birlosRev: req.body || false,
        birlosAp: req.body || false,
        
        rondanasLimp:req.body || false,
        rondanasRev: req.body || false,
        
        correderasLimp:req.body || false,
        correderasRev: req.body || false,

        //MODULO DE BATERIAS TE-06 o TE-12
        v1: req.body || 0,
        n1: req.body || false,
        d1: req.body || 0,
        v2: req.body || 0,
        n2: req.body || false,
        d2: req.body || 0,
        v3: req.body || 0,
        n3: req.body || false,
        d3: req.body || 0,
        v4: req.body || 0,
        n4: req.body || false,
        d4: req.body || 0,
        v5: req.body || 0,
        n5: req.body || false,
        d5: req.body || 0,
        v6: req.body || 0,
        n6: req.body || false,
        d6: req.body || 0,
        v7: req.body || 0,
        n7: req.body || false,
        d7: req.body || 0,
        v8: req.body || 0,
        n8: req.body || false,
        d8: req.body || 0,
        v9: req.body || 0,
        n9: req.body || false,
        d9: req.body || 0,
        v10: req.body || 0,
        n10: req.body || false,
        d10: req.body || 0,
        v11: req.body || 0,
        n11: req.body || false,
        d11: req.body || 0,
        v12: req.body || 0,
        n12: req.body || false,
        d12: req.body || 0,
        v13: req.body || 0,
        n13: req.body || false,
        d13: req.body || 0,
        v14: req.body || 0,
        n14: req.body || false,
        d14: req.body || 0,
        v15: req.body || 0,
        n15: req.body || false,
        d15: req.body || 0,
        v16: req.body || 0,
        n16: req.body || false,
        d16: req.body || 0,
        v17: req.body || 0,
        n17: req.body || false,
        d17: req.body || 0,
        v18: req.body || 0,
        n18: req.body || false,
        d18: req.body || 0,
        
        voltajeSinRegular: req.body || 0,
        voltajeRegulado: req.body || 0,
        
        //COFRE 3
        cofre3Limp:req.body || false,
        cofre3Rev: req.body || false,
        
        pestillos3Limp:req.body || false,
        pestillos3Rev: req.body || false,
        pestillos3Ap: req.body || false,
        pestillos3Lub: req.body || false,
        pestillos3Aj: req.body || false,

        bisagras3Limp:req.body || false,
        bisagras3Rev: req.body || false,
        bisagras3Lub: req.body || false,
        
        tapas3Limp:req.body || false,
        tapas3Rev: req.body || false,
        
        sello3Limp:req.body || false,
        sello3Rev: req.body || false,
        
        conectorLimp:req.body || false,
        conectorRev: req.body || false,
        conectorAp: req.body || false,

        gfbLimp:req.body || false,
        gfbRev: req.body || false,
        gfbAp: req.body || false,
        
        relevadoresLimp:req.body || false,
        relevadoresRev: req.body || false,
        relevadoresAp: req.body || false,
        
        arneses3Limp:req.body || false,
        arneses3Rev: req.body || false,
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await memeB05_612.findByIdAndUpdate(id, { $set: MEME_B05_612}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_B05_612.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeB05_612.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_B05_612.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeB05_612.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_B05_612.getAllMaintenenceMEME_B05_612 = async (req, res) => {
    const maintenances = await memeB05_612.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MEME_B05_612.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_B05_612New = {
        historyFile: req.body.historyFile || []
    }
    await memeB05_612.findByIdAndUpdate(id, { $set: historyMEME_B05_612New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_B05_612.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeB05_612.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_B05_612.createMaintenenceMEME_B05_612 = async (req, res) => {
    const maintenence = new memeB05_612(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_B05_612;