const memaM21 = require('../../../models/smee/mema/MEMA_M21');

const mema_M21 = {};
//Metodos
// Obtiene todos los empleados
mema_M21.getmema_M21Data = async (req, res)=>{
    const {id} = req.params;

    const memam21 = await memaM21.findById(id)
    res.json(memam21)
}

// Editar un documento
mema_M21.editmema_M21Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM21 = {
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
        await memaM21.findByIdAndUpdate(id, { $set: mema_M21}, { new: true });
        res.json({
            status: 'Employee update'
        });

        };

        mema_M21.checkedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const checked = {
            documentFormCurrentState: req.body
        }
        await memaM21.findByIdAndUpdate(id, { $set: checked }, { new: true });
        res.json({
            status: 'worker state update'
        })
        }

        mema_M21.getStateCheckedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const state = await memaM21.findById(id, {
            "_id": 1, 
            "documentFormCurrentState": 1
        })
        res.json(state)
        }

        mema_M21.getAllmema_M21TypeM = async (req, res) => {
        const memam21 = await memaM21.find({}, {
            "_id": 1, 
            "unidad": 1, 
            "documentFormCurrentState.approvalByWorker.checked": 1, 
            "documentFormCurrentState.approvalBySupervisor.checked": 1,
            "documentFormCurrentState.approvalByMannager.checked": 1,
            "documentFormCurrentState.loading": 1
        })
        res.json(memam21)
        };

        mema_M21.addNewHistoryrecord = async (req, res) => {
        const { id } = req.params;
        const historymemaM21New = {
            historyFile: req.body.historyFile || []
        }
        await memaM21.findByIdAndUpdate(id, { $set: historymemaM21New }, { new: true });
        res.json({
            status: 'History update'
        })
        }

        mema_M21.getHistoryOF = async (req, res) => {
        const { id } = req.params;
        const memam21 = await memaM21.findById(id, {
            "_id": 0, 
            "historyFile": 1
        })
        res.json(memam21)
        }

        mema_M21.createmema_M21TypeM = async (req, res) => {
        const memam21 = new memaM21(req.body)

        await memam21.save()
        res.json({res: 'Ok'})
        };

        module.exports = mema_M21;
