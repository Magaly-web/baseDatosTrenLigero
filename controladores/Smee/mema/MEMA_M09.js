
const memaM09 = require('../../../models/smee/mema/MEMA_M09');

const mema_M09 = {};
//Metodos
// Obtiene todos los empleados
mema_M09.getmema_M09Data = async (req, res)=>{
    const {id} = req.params;

    const memam09 = await memaM09.findById(id)
    res.json(memam09)
}

// Editar un documento
mema_M09.editmema_M09Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM09 = {
        trainModel: req.body.modelo || '',
        date_created: { type: Date, required: true },
        user:{ type: String, required: true },
        id_worker: {type: String, required: true},
        unidad: req.body.numunidad || 0,
        num_inspeccion: req.body.revision || '',
        kilometraje: req.body.distance || 0,
        hora_inicio: req.body.startTime || '',
        hora_termino: req.body.endTime || '',
        dateultmant: req.body.ultmant || '',
        datepromant: req.body.promant || '',

        obs1: req.body.obs11 || '',
        //-------------------------------
        pol: req.body.poll || '',
        pofi: req.body.pofii || '',
        por: req.body.porr || '',
        pof: req.body.poff || '',

        cfl: req.body.cfll || '',
        cffi: req.body.cffii || '',
        cfr: req.body.cfrr || '',
        cff: req.body.cfff || '',

        fl: req.body.fll || '',
        ffi: req.body.ffii || '',
        fr: req.body.frr || '',
        ff: req.body.fff || '',

        mlol: req.body.mloll || '',
        mlofi: req.body.mlofii || '',
        mlor: req.body.mlorr || '',
        mlof: req.body.mloff || '',

        mol: req.body.moll || '',
        mofi: req.body.mofii || '',
        mor: req.body.morr || '',
        mof: req.body.moff || '',

        tfl: req.body.tfll || '',
        tffi: req.body.tffii || '',
        tfr: req.body.tfrr || '',
        tff: req.body.tfff || '',

        //Acabados a rejillas de ventilacion M1

        rvp: req.body.rvpp || '',
        rvgp: req.body.rvgpp || '',
        rvt: req.body.rvtt || '',

        rcalizqp: req.body.rcalizqpp || '',
        rcalizqgp: req.body.rcalizqgpp || '',
        rcalizqt: req.body.rcalizqtt || '',

        rcalderp: req.body.rcalderpp || '',
        rcaldergp: req.body.rcaldergpp || '',
        rcaldert: req.body.rcaldertt || '',

        obs2: req.body.obs22 || '',

        //Techo de cabina M2

        m2pol: req.body.m2poll || '',
        m2pofi: req.body.m2pofii || '',
        m2por: req.body.m2porr || '',
        m2pof: req.body.m2poff || '',

        m2cfl: req.body.m2cfll || '',
        m2cffi: req.body.m2cffii || '',
        m2cfr: req.body.m2cfrr || '',
        m2cff: req.body.m2cfff || '',

        m2fl: req.body.m2fll || '',
        m2ffi: req.body.m2ffii || '',
        m2fr: req.body.m2frr || '',
        m2ff: req.body.m2fff || '',

        m2mlol: req.body.m2mloll || '',
        m2mlofi: req.body.m2mlofii || '',
        m2mlor: req.body.m2mlorr || '',
        m2mlof: req.body.m2mloff || '',

        m2mol: req.body.m2moll || '',
        m2mofi: req.body.m2mofii || '',
        m2mor: req.body.m2morr || '',
        m2mof: req.body.m2moff || '',

        m2tfl: req.body.m2tfll || '',
        m2tffi: req.body.m2tffii || '',
        m2tfr: req.body.m2tfrr || '',
        m2tff: req.body.m2tfff || '',

        //Acabados a rejillas de ventilacion M2

        m2rvp: req.body.m2rvpp || '',
        m2rvgp: req.body.m2rvgpp || '',
        m2rvt: req.body.m2rvtt || '',

        m2rcalizqp: req.body.m2rcalizqpp || '',
        m2rcalizqgp: req.body.m2rcalizqgpp || '',
        m2rcalizqt: req.body.m2rcalizqtt || '',

        m2rcalderp: req.body.m2rcalderpp || '',
        m2rcaldergp: req.body.m2rcaldergpp || '',
        m2rcaldert: req.body.m2rcaldertt || '',

        obs3: req.body.obs33 || '',

         //-------------------------------

    }
    await memaM09.findByIdAndUpdate(id, { $set: mema_M09}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M09.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM09.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M09.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM09.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M09.getAllmema_M09TypeM = async (req, res) => {
    const memam09 = await memaM09.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam09)
};

mema_M09.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM09New = {
        historyFile: req.body.historyFile || []
    }
    await memaM09.findByIdAndUpdate(id, { $set: historymemaM09New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M09.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam09 = await memaM09.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam09)
}

mema_M09.createmema_M09TypeM = async (req, res) => {
    const memam09 = new memaM09(req.body)
    
    await memam09.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M09;
