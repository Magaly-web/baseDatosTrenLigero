const memaM41 = require('../../../models/smee/mema/MEMA_M41');

const mema_M41 = {};
//Metodos
// Obtiene todos los empleados
mema_M41.getmema_M41Data = async (req, res)=>{
    const {id} = req.params;

    const memam41 = await memaM41.findById(id)
    res.json(memam41)
}

// Editar un documento
mema_M41.editmema_M41Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM41 = {
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
        //Torreta M1

        mcm1v: req.body.mcm1vv || '',
        mcm1l: req.body.mcm1ll || '',
        mcm1f: req.body.mcm1ff || '',

        jr1v: req.body.jr1vv || '',
        jr1l: req.body.jr1ll || '',
        jr1f: req.body.jr1ff || '',

        le1v: req.body.le1vv || '',
        le1l: req.body.le1ll || '',
        le1f: req.body.le1ff || '',

        ca1v: req.body.ca1vv || '',
        ca1l: req.body.ca1ll || '',
        ca1f: req.body.ca1ff || '',

        te1v: req.body.te1vv || '',
        te1l: req.body.te1ll || '',
        te1f: req.body.te1ff || '',

        //Torreta M2

        mcm2v: req.body.mcm2vv || '',
        mcm2l: req.body.mcm2ll || '',
        mcm2f: req.body.mcm2ff || '',

        jr2v: req.body.jr2vv || '',
        jr2l: req.body.jr2ll || '',
        jr2f: req.body.jr2ff || '',

        le2v: req.body.le2vv || '',
        le2l: req.body.le2ll || '',
        le2f: req.body.le2ff || '',

        ca2v: req.body.ca2vv || '',
        ca2l: req.body.ca2ll || '',
        ca2f: req.body.ca2ff || '',

        te2v: req.body.te2vv || '',
        te2l: req.body.te2ll || '',
        te2f: req.body.te2ff || '',

        obs2: req.body.obs22 || '',
        //-------------------------------

    }
    await memaM41.findByIdAndUpdate(id, { $set: mema_M41}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M41.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM41.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M41.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM41.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M41.getAllmema_M41TypeM = async (req, res) => {
    const memam41 = await memaM41.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam41)
    };

    mema_M41.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM41New = {
        historyFile: req.body.historyFile || []
    }
    await memaM41.findByIdAndUpdate(id, { $set: historymemaM41New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M41.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam41 = await memaM41.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam41)
    }

    mema_M41.createmema_M41TypeM = async (req, res) => {
    const memam41 = new memaM41(req.body)

    await memam41.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M41;