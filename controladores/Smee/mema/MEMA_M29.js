const memaM29 = require('../../../models/smee/mema/MEMA_M29');

const mema_M29 = {};
//Metodos
// Obtiene todos los empleados
mema_M29.getmema_M29Data = async (req, res)=>{
    const {id} = req.params;

    const memam29 = await memaM29.findById(id)
    res.json(memam29)
}

// Editar un documento
mema_M29.editmema_M29Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM29 = {
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

        //Ductos para resistencia de frenado
        
        daal: req.body.daall || '',
        daar: req.body.daarr || '',
        daaf: req.body.daaff || '',

        mfl: req.body.mfll || '',
        mfr: req.body.mfrr || '',
        mff: req.body.mfff || '',

        fcml: req.body.fcmll || '',
        fcmr: req.body.fcmrr || '',
        fcmf: req.body.fcmff || '',

        spl: req.body.spll || '',
        spr: req.body.sprr || '',
        spf: req.body.spff || '',

        deal: req.body.deall || '',
        dear: req.body.dearr || '',
        deaf: req.body.deaff || '',

        tfl: req.body.tfll || '',
        tfr: req.body.tfrr || '',
        tff: req.body.tfff || '',

        //Ductos para convertidor estatico de traccion

        daa2l: req.body.daa2ll || '',
        daa2r: req.body.daa2rr || '',
        daa2f: req.body.daa2ff || '',

        mf2l: req.body.mf2ll || '',
        mf2r: req.body.mf2rr || '',
        mf2f: req.body.mf2ff || '',

        fcm2l: req.body.fcm2ll || '',
        fcm2r: req.body.fcm2rr || '',
        fcm2f: req.body.fcm2ff || '',

        sp2l: req.body.sp2ll || '',
        sp2r: req.body.sp2rr || '',
        sp2f: req.body.sp2ff || '',

        dea2l: req.body.dea2ll || '',
        dea2r: req.body.dea2rr || '',
        dea2f: req.body.dea2ff || '',

        tf2l: req.body.tf2ll || '',
        tf2r: req.body.tf2rr || '',
        tf2f: req.body.tf2ff || '',


        //-------------------------------

    }
    await memaM29.findByIdAndUpdate(id, { $set: mema_M29}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M29.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM29.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M29.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM29.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M29.getAllmema_M29TypeM = async (req, res) => {
    const memam29 = await memaM29.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam29)
    };

    mema_M29.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM29New = {
        historyFile: req.body.historyFile || []
    }
    await memaM29.findByIdAndUpdate(id, { $set: historymemaM29New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M29.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam29 = await memaM29.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam29)
    }

    mema_M29.createmema_M29TypeM = async (req, res) => {
    const memam29 = new memaM29(req.body)

    await memam29.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M29;
