const memaM32 = require('../../../models/smee/mema/MEMA_M32');

const mema_M32 = {};
//Metodos
// Obtiene todos los empleados
mema_M32.getmema_M32Data = async (req, res)=>{
    const {id} = req.params;

    const memam32 = await memaM32.findById(id)
    res.json(memam32)
}

// Editar un documento
mema_M32.editmema_M32Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM32 = {
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
        //-------------------------------

    }
    await memaM32.findByIdAndUpdate(id, { $set: mema_M32}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M32.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM32.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M32.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM32.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M32.getAllmema_M32TypeM = async (req, res) => {
    const memam32 = await memaM32.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam32)
    };

    mema_M32.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM32New = {
        historyFile: req.body.historyFile || []
    }
    await memaM32.findByIdAndUpdate(id, { $set: historymemaM32New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M32.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam32 = await memaM32.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam32)
    }

    mema_M32.createmema_M32TypeM = async (req, res) => {
    const memam32 = new memaM32(req.body)

    await memam32.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M32;
