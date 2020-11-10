
const memeC20 = require('../../../../../models/smm/fichasMantenimiento/fichasElectricoMantenimiento/ciclicos/MEME_C20');

const MEME_C20 = {};
//Metodos
// Obtiene todos los empleados
MEME_C20.getMEME_C20Data = async (req, res)=>{
    const {id} = req.params;

    const memec20 = await memeC20.findById(id)
    res.json(memec20)
};


// Editar un documento
MEME_C20.editMEME_C20Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memeC20 = {
        
        trainModel: { type: String, required: true },
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.endTime || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',

        //Señal
        c1: req.body.c11 || '',
        n1: req.body.n11 || '',

        c2: req.body.c22 || '',
        n2: req.body.n22 || '',

        c3: req.body.c33 || '',
        n3: req.body.n33 || '',

        c4: req.body.c44 || '',
        n4: req.body.n44 || '',

        c5: req.body.c55 || '',
        n5: req.body.n55 || '',

        c6: req.body.c66 || '',
        n6: req.body.n66 || '',

        c7: req.body.c77 || '',
        n7: req.body.n77 || '',

        c8: req.body.c88 || '',
        n8: req.body.n88 || '',

        //Motriz 1
        m1p1: req.body.m1p11 || 0,
        m1v1: req.body.m1v11 || '',
        m1li1: req.body.m1li11 || '',
        m1g1: req.body.m1g11 || 0,

        m1p2: req.body.m1p22 || 0,
        m1v2: req.body.m1v22 || '',
        m1li2: req.body.m1li22 || '',
        m1g2: req.body.m1g22 || 0,

        m1p3: req.body.m1p33 || 0,
        m1v3: req.body.m1v33 || '',
        m1li3: req.body.m1li33 || '',
        m1g3: req.body.m1g33 || 0,

        m1p4: req.body.m1p44 || 0,
        m1v4: req.body.m1v44 || '',
        m1li4: req.body.m1li44 || '',
        m1g4: req.body.m1g44 || 0,

        
        //Motriz 2

        m2p5: req.body.m2p55 || 0,
        m2v5: req.body.m2v55 || '',
        m2li5: req.body.m2li55 || '',
        m2g5: req.body.m2g55 || 0,

        m2p6: req.body.m2p66 || 0,
        m2v6: req.body.m2v66 || '',
        m2li6: req.body.m2li66 || '',
        m2g6: req.body.m2g66 || 0,

        m2p7: req.body.m2p77 || 0,
        m2v7: req.body.m2v77 || '',
        m2li7: req.body.m2li77 || '',
        m2g7: req.body.m2g77 || 0,

        m2p8: req.body.m2p88 || 0,
        m2v8: req.body.m2v88 || '',
        m2li8: req.body.m2li88 || '',
        m2g8: req.body.m2g88 || 0,

        vi1: req.body.vi11 || '',
        vi2: req.body.vi22 || '',
        vi3: req.body.vi33 || '',
        vi4: req.body.vi44 || '',
        vi5: req.body.vi55 || '',
        vi6: req.body.vi66 || '',
        vi7: req.body.vi77 || '',
        vi8: req.body.vi88 || '',

        dm1: req.body.dm11 || '',
        dm2: req.body.dm22 || '',
        dm3: req.body.dm33 || '',
        dm4: req.body.dm44 || '',
        dm5: req.body.dm55 || '',
        dm6: req.body.dm66 || '',
        dm7: req.body.dm77 || '',
        dm8: req.body.dm88 || '',

        rf1: req.body.rf11 || '',
        rf2: req.body.rf22 || '',
        rf3: req.body.rf33 || '',
        rf4: req.body.rf44 || '',
        rf5: req.body.rf55 || '',
        rf6: req.body.rf66 || '',
        rf7: req.body.rf77 || '',
        rf8: req.body.rf88 || '',

        observaciones: req.body.obs || '',

    }

    await memeC20.findByIdAndUpdate(id, { $set: MEME_C20}, { new: true });
    res.json({
        status: 'Employee update'
    });
};

MEME_C20.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memeC20.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

MEME_C20.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memeC20.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

MEME_C20.getAllMEME_C20TypeC = async (req, res) => {
    const memec20 = await memeC20.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memec20)
};

MEME_C20.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMEMEC20New = {
        historyFile: req.body.historyFile || []
    }
    await memeC20.findByIdAndUpdate(id, { $set: historyMEMEC20New }, { new: true });
    res.json({
        status: 'History update'
    })
}

MEME_C20.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memec20 = await memeC20.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memec20)
}

MEME_C20.createMEME_C20TypeC = async (req, res) => {
    const memec20 = new memeC20(req.body)
    
    await memec20.save()
    res.json({res: 'Ok'})
};

module.exports = MEME_C20;