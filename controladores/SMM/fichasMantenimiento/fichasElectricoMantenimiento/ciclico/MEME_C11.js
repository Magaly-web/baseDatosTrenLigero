const memeC11 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C11');

const MEME_C11 = {};
//Metodos
// Obtiene todos los empleados
MEME_C11.getMEME_C11Data = async (req, res)=>{
    const {id} = req.params;

    const memec11 = await memeC11.findById(id)
    res.json(memec11)
};


// Editar un documento
MEME_C11.editMEME_C11Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC11 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //motriz

        m1seLimp:req.body.m1seLim || false,
        m1seb:req.body.m1sebb || false,
        m1sec:req.body.m1secc || false,
        m1seLub:req.body.m1seLu || false,
        m1seObs:req.body.m1seOb || '',

        m1orLimp:req.body.m1orLim || false,
        m1orb:req.body.m1orbb || false,
        m1orc:req.body.m1orcc || false,
        m1orLub:req.body.m1orLu || false,
        m1orObs:req.body.m1orOb || '',

        m1toLimp:req.body.m1toLim || false,
        m1tob:req.body.m1tobb || false,
        m1toc:req.body.m1tocc || false,
        m1toLub:req.body.m1toLu || false,
        m1toObs:req.body.m1toOb || '',


        m2seLimp:req.body.m2seLim || false,
        m2seb:req.body.m2sebb || false,
        m2sec:req.body.m2secc || false,
        m2seLub:req.body.m2seLu || false,
        m2seObs:req.body.m2seOb || '',

        m2orLimp:req.body.m2orLim || false,
        m2orb:req.body.m2orbb || false,
        m2orc:req.body.m2orcc || false,
        m2orLub:req.body.m2orLu || false,
        m2orObs:req.body.m2orOb || '',

        m2toLimp:req.body.m2toLim || false,
        m2tob:req.body.m2tobb || false,
        m2toc:req.body.m2tocc || false,
        m2toLub:req.body.m2toLu || false,
        m2toObs:req.body.m2toOb || '',

        //---------------

        r1seLimp:req.body.r1seLim || false,
        r1seb:req.body.r1sebb || false,
        r1sec:req.body.r1secc || false,
        r1seLub:req.body.r1seLu || false,
        r1seObs:req.body.r1seOb || '',

        r1orLimp:req.body.r1orLim || false,
        r1orb:req.body.r1orbb || false,
        r1orc:req.body.r1orcc || false,
        r1orLub:req.body.r1orLu || false,
        r1orObs:req.body.r1orOb || '',

        r1toLimp:req.body.r1toLim || false,
        r1tob:req.body.r1tobb || false,
        r1toc:req.body.r1tocc || false,
        r1toLub:req.body.r1toLu || false,
        r1toObs:req.body.r1toOb || '',


        r2seLimp:req.body.r2seLim || false,
        r2seb:req.body.r2sebb || false,
        r2sec:req.body.r2secc || false,
        r2seLub:req.body.r2seLu || false,
        r2seObs:req.body.r2seOb || '',

        r2orLimp:req.body.r2orLim || false,
        r2orb:req.body.r2orbb || false,
        r2orc:req.body.r2orcc || false,
        r2orLub:req.body.r2orLu || false,
        r2orObs:req.body.r2orOb || '',

        r2toLimp:req.body.r2toLim || false,
        r2tob:req.body.r2tobb || false,
        r2toc:req.body.r2tocc || false,
        r2toLub:req.body.r2toLu || false,
        r2toObs:req.body.r2toOb || '',

        //tomas
        tx11Rev:req.body.tx11Re || false,
        tx11Sop:req.body.tx11So || false,
        tx11Limp:req.body.tx11Lim || false,
        tx11Obs:req.body.tx11Ob || '',

        tx12Rev:req.body.tx12Re || false,
        tx12Sop:req.body.tx12So || false,
        tx12Limp:req.body.tx12Lim || false,
        tx12Obs:req.body.tx12Ob || '',

        tx13Rev:req.body.tx13Re || false,
        tx13Sop:req.body.tx13So || false,
        tx13Limp:req.body.tx13Lim || false,
        tx13Obs:req.body.tx13Ob || '',

        tx14Rev:req.body.tx14Re || false,
        tx14Sop:req.body.tx14So || false,
        tx14Limp:req.body.tx14Lim || false,
        tx14Obs:req.body.tx14Ob || '',

        tx15Rev:req.body.tx15Re || false,
        tx15Sop:req.body.tx15So || false,
        tx15Limp:req.body.tx15Lim || false,
        tx15Obs:req.body.tx15Ob || '',

        tx16Rev:req.body.tx16Re || false,
        tx16Sop:req.body.tx16So || false,
        tx16Limp:req.body.tx16Lim || false,
        tx16Obs:req.body.tx16Ob || '',

        tx17Rev:req.body.tx17Re || false,
        tx17Sop:req.body.tx17So || false,
        tx17Limp:req.body.tx17Lim || false,
        tx17Obs:req.body.tx17Ob || '',

        tx19Rev:req.body.tx19Re || false,
        tx19Sop:req.body.tx19So || false,
        tx19Limp:req.body.tx19Lim || false,
        tx19Obs:req.body.tx19Ob || '',


observaciones: req.body.obs || '',

}

await memeC11.findByIdAndUpdate(id, { $set: MEME_C11}, { new: true });
res.json({
    status: 'Employee update'
});
};

MEME_C11.checkedApprovalByWorker = async (req, res) => {
const { id } = req.params;
const checked = {
    documentFormCurrentState: req.body
}
await memeC11.findByIdAndUpdate(id, { $set: checked }, { new: true });
res.json({
    status: 'worker state update'
})
}

MEME_C11.getStateCheckedApprovalByWorker = async (req, res) => {
const { id } = req.params;
const state = await memeC11.findById(id, {
    "_id": 1, 
    "documentFormCurrentState": 1
})
res.json(state)
}

MEME_C11.getAllMEME_C11TypeC = async (req, res) => {
const memec11 = await memeC11.find({}, {
    "_id": 1, 
    "unidad": 1, 
    "documentFormCurrentState.approvalByWorker.checked": 1, 
    "documentFormCurrentState.approvalBySupervisor.checked": 1,
    "documentFormCurrentState.approvalByMannager.checked": 1,
    "documentFormCurrentState.loading": 1
})
res.json(memec11)
};

MEME_C11.addNewHistoryrecord = async (req, res) => {
const { id } = req.params;
const historyMEMEC11New = {
    historyFile: req.body.historyFile || []
}
await memeC11.findByIdAndUpdate(id, { $set: historyMEMEC11New }, { new: true });
res.json({
    status: 'History update'
})
}

MEME_C11.getHistoryOF = async (req, res) => {
const { id } = req.params;
const memec11 = await memeC11.findById(id, {
    "_id": 0, 
    "historyFile": 1
})
res.json(memec11)
}

MEME_C11.createMEME_C11TypeC = async (req, res) => {
const memec11 = new memeC11(req.body)

await memec11.save()
res.json({res: 'Ok'})
};

module.exports = MEME_C11;