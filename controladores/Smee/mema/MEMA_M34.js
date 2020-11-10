const memaM34 = require('../../../models/smee/mema/MEMA_M34');

const mema_M34 = {};
//Metodos
// Obtiene todos los empleados
mema_M34.getmema_M34Data = async (req, res)=>{
    const {id} = req.params;

    const memam34 = await memaM34.findById(id)
    res.json(memam34)
}

// Editar un documento
mema_M34.editmema_M34Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM34 = {
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
        //M1
        iv1v: req.body.iv1vv || '',
        iv1l: req.body.iv1ll || '',
        iv1r: req.body.iv1rr || '',
        iv1f: req.body.iv1ff || '',

        cpv1v: req.body.cpv1vv || '',
        cpv1l: req.body.cpv1ll || '',
        cpv1r: req.body.cpv1rr || '',
        cpv1f: req.body.cpv1ff || '',

        te1v: req.body.te1vv || '',
        te1l: req.body.te1ll || '',
        te1r: req.body.te1rr || '',
        te1f: req.body.te1ff || '',

        tt1v: req.body.tt1vv || '',
        tt1l: req.body.tt1ll || '',
        tt1r: req.body.tt1rr || '',
        tt1f: req.body.tt1ff || '',

        //M2
        iv2v: req.body.iv2vv || '',
        iv2l: req.body.iv2ll || '',
        iv2r: req.body.iv2rr || '',
        iv2f: req.body.iv2ff || '',

        cpv2v: req.body.cpv2vv || '',
        cpv2l: req.body.cpv2ll || '',
        cpv2r: req.body.cpv2rr || '',
        cpv2f: req.body.cpv2ff || '',

        te2v: req.body.te2vv || '',
        te2l: req.body.te2ll || '',
        te2r: req.body.te2rr || '',
        te2f: req.body.te2ff || '',

        tt2v: req.body.tt2vv || '',
        tt2l: req.body.tt2ll || '',
        tt2r: req.body.tt2rr || '',
        tt2f: req.body.tt2ff || '',

        obs2: req.body.obs22 || '',

        //Iman de Vehiculo

        br1v: req.body.br1vv || '',
        br1l: req.body.br1ll || '',
        br1f: req.body.br1ff || '',

        ri1v: req.body.ri1vv || '',
        ri1l: req.body.ri1ll || '',
        ri1f: req.body.ri1ff || '',

        //Equipo de conmutacion

        br2v: req.body.br2vv || '',
        br2l: req.body.br2ll || '',
        br2f: req.body.br2ff || '',

        ri2v: req.body.ri2vv || '',
        ri2l: req.body.ri2ll || '',
        ri2f: req.body.ri2ff || '',

        //Dispositivo de operacion

        br3v: req.body.br3vv || '',
        br3l: req.body.br3ll || '',
        br3f: req.body.br3ff || '',

        ri3v: req.body.ri3vv || '',
        ri3l: req.body.ri3ll || '',
        ri3f: req.body.ri3ff || '',

        //Conmutador presintado de perturbaciones

        br4v: req.body.br4vv || '',
        br4l: req.body.br4ll || '',
        br4f: req.body.br4ff || '',

        ri4v: req.body.ri4vv || '',
        ri4l: req.body.ri4ll || '',
        ri4f: req.body.ri4ff || '',
        //-------------------------------

    }
    await memaM34.findByIdAndUpdate(id, { $set: mema_M34}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M34.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM34.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M34.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM34.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M34.getAllmema_M34TypeM = async (req, res) => {
    const memam34 = await memaM34.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam34)
    };

    mema_M34.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM34New = {
        historyFile: req.body.historyFile || []
    }
    await memaM34.findByIdAndUpdate(id, { $set: historymemaM34New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M34.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam34 = await memaM34.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam34)
    }

    mema_M34.createmema_M34TypeM = async (req, res) => {
    const memam34 = new memaM34(req.body)

    await memam34.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M34;
