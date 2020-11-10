'use strict'

var memeB05_9 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/sistematico/MEME_B05_9');

const MEME_B05_9 = {};

MEME_B05_9.getMEME_B05_9Data = async (req, res) => {
    const {id} = req.params;

    const maintenance = await memeB05_9.findById(id)
    res.json(maintenance)
};
MEME_B05_9.editMEME_B05_9Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MEME_B05_9 = {
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

        //MODULO DE BATERIAS TE-90 o TE-95
        v1_1: req.body || 0,
        v1_2: req.body || 0,
        v1_3: req.body || 0,
        v1_4: req.body || 0,
        v1_5: req.body || 0,
        v1_6: req.body || 0,
        v1_7: req.body || 0,
        v1_8: req.body || 0,
        v1_9: req.body || 0,
        n2_1: req.body || false,
        n2_2: req.body || false,
        n2_3: req.body || false,
        n2_4: req.body || false,
        n2_5: req.body || false,
        n2_6: req.body || false,
        n2_7: req.body || false,
        n2_8: req.body || false,
        n2_9: req.body || false,
        d3_1: req.body || 0,
        d3_2: req.body || 0,
        d3_3: req.body || 0,
        d3_4: req.body || 0,
        d3_5: req.body || 0,
        d3_6: req.body || 0,
        d3_7: req.body || 0,
        d3_8: req.body || 0,
        d3_9: req.body || 0,
        v4_1: req.body || 0,
        v4_2: req.body || 0,
        v4_3: req.body || 0,
        v4_4: req.body || 0,
        v4_5: req.body || 0,
        v4_6: req.body || 0,
        v4_7: req.body || 0,
        v4_8: req.body || 0,
        v4_9: req.body || 0,
        n5_1: req.body || false,
        n5_2: req.body || false,
        n5_3: req.body || false,
        n5_4: req.body || false,
        n5_5: req.body || false,
        n5_6: req.body || false,
        n5_7: req.body || false,
        n5_8: req.body || false,
        n5_9: req.body || false,
        d6_1: req.body || 0,
        d6_2: req.body || 0,
        d6_3: req.body || 0,
        d6_4: req.body || 0,
        d6_5: req.body || 0,
        d6_6: req.body || 0,
        d6_7: req.body || 0,
        d6_8: req.body || 0,
        d6_9: req.body || 0,
        
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
    await memeB05_9.findByIdAndUpdate(id, { $set: MEME_B05_9}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MEME_B05_9.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeB05_9.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MEME_B05_9.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeB05_9.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MEME_B05_9.getAllMaintenenceMEME_B05_9 = async (req, res) => {
    const maintenances = await memeB05_9.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MEME_B05_9.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEME_B05_9New = {
        historyFile: req.body.historyFile || []
    }
    await memeB05_9.findByIdAndUpdate(id, { $set: historyMEME_B05_9New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MEME_B05_9.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await memeB05_9.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MEME_B05_9.createMaintenenceMEME_B05_9 = async (req, res) => {
    const maintenence = new memeB05_9(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MEME_B05_9;