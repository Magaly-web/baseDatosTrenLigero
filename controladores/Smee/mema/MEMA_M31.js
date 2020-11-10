
const memaM31 = require('../../../models/smee/mema/MEMA_M31');

const mema_M31 = {};
//Metodos
// Obtiene todos los empleados
mema_M31.getmema_M31Data = async (req, res)=>{
    const {id} = req.params;

    const memam31 = await memaM31.findById(id)
    res.json(memam31)
}

// Editar un documento
mema_M31.editmema_M31Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM31 = {
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
        da1v: req.body.da1vv || '',
        da1l: req.body.da1ll || '',
        da1r: req.body.da1rr || '',

        bm1v: req.body.bm1vv || '',
        bm1l: req.body.bm1ll || '',
        bm1r: req.body.bm1rr || '',

        m24v1v: req.body.m24v1vv || '',
        m24v1l: req.body.m24v1ll || '',
        m24v1r: req.body.m24v1rr || '',

        ma1v: req.body.ma1vv || '',
        ma1l: req.body.ma1ll || '',
        ma1r: req.body.ma1rr || '',

        tf1v: req.body.tf1vv || '',
        tf1l: req.body.tf1ll || '',
        tf1r: req.body.tf1rr || '',

        //M2
        da2v: req.body.da2vv || '',
        da2l: req.body.da2ll || '',
        da2r: req.body.da2rr || '',

        bm2v: req.body.bm2vv || '',
        bm2l: req.body.bm2ll || '',
        bm2r: req.body.bm2rr || '',

        m24v2v: req.body.m24v2vv || '',
        m24v2l: req.body.m24v2ll || '',
        m24v2r: req.body.m24v2rr || '',

        ma2v: req.body.ma2vv || '',
        ma2l: req.body.ma2ll || '',
        ma2r: req.body.ma2rr || '',

        tf2v: req.body.tf2vv || '',
        tf2l: req.body.tf2ll || '',
        tf2r: req.body.tf2rr || '',

        obs2: req.body.obs22 || '',

        //-------------------------------

    }
    await memaM31.findByIdAndUpdate(id, { $set: mema_M31}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M31.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM31.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M31.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM31.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M31.getAllmema_M31TypeM = async (req, res) => {
    const memam31 = await memaM31.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam31)
    };

    mema_M31.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM31New = {
        historyFile: req.body.historyFile || []
    }
    await memaM31.findByIdAndUpdate(id, { $set: historymemaM31New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M31.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam31 = await memaM31.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam31)
    }

    mema_M31.createmema_M31TypeM = async (req, res) => {
    const memam31 = new memaM31(req.body)

    await memam31.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M31;
