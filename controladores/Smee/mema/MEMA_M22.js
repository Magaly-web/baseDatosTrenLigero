const memaM22 = require('../../../models/smee/mema/MEMA_M22');

const mema_M22 = {};
//Metodos
// Obtiene todos los empleados
mema_M22.getmema_M22Data = async (req, res)=>{
    const {id} = req.params;

    const memam22 = await memaM22.findById(id)
    res.json(memam22)
}

// Editar un documento
mema_M22.editmema_M22Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM22 = {
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
        m1btgv: req.body.m1btgvv || '',
        m1btgl: req.body.m1btgll || '',
        m1btgr: req.body.m1btgrr || '',

        m1tdpv: req.body.m1tdpvv || '',
        m1tdpl: req.body.m1tdpll || '',
        m1tdpr: req.body.m1tdprr || '',

        m1btav: req.body.m1btavv || '',
        m1btal: req.body.m1btall || '',
        m1btar: req.body.m1btarr || '',

        m1tpv: req.body.m1tpvv || '',
        m1tpl: req.body.m1tpll || '',
        m1tpr: req.body.m1tprr || '',

        m1tfv: req.body.m1tfvv || '',
        m1tfl: req.body.m1tfll || '',
        m1tfr: req.body.m1tfrr || '',

         //M2
         m2btgv: req.body.m2btgvv || '',
         m2btgl: req.body.m2btgll || '',
         m2btgr: req.body.m2btgrr || '',
 
         m2tdpv: req.body.m2tdpvv || '',
         m2tdpl: req.body.m2tdpll || '',
         m2tdpr: req.body.m2tdprr || '',
 
         m2btav: req.body.m2btavv || '',
         m2btal: req.body.m2btall || '',
         m2btar: req.body.m2btarr || '',
 
         m2tpv: req.body.m2tpvv || '',
         m2tpl: req.body.m2tpll || '',
         m2tpr: req.body.m2tprr || '',
 
         m2tfv: req.body.m2tfvv || '',
         m2tfl: req.body.m2tfll || '',
         m2tfr: req.body.m2tfrr || '',

         obs2: req.body.obs22 || '',
 

        //-------------------------------

        }
        await memaM22.findByIdAndUpdate(id, { $set: mema_M22}, { new: true });
        res.json({
            status: 'Employee update'
        });

        };

        mema_M22.checkedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const checked = {
            documentFormCurrentState: req.body
        }
        await memaM22.findByIdAndUpdate(id, { $set: checked }, { new: true });
        res.json({
            status: 'worker state update'
        })
        }

        mema_M22.getStateCheckedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const state = await memaM22.findById(id, {
            "_id": 1, 
            "documentFormCurrentState": 1
        })
        res.json(state)
        }

        mema_M22.getAllmema_M22TypeM = async (req, res) => {
        const memam22 = await memaM22.find({}, {
            "_id": 1, 
            "unidad": 1, 
            "documentFormCurrentState.approvalByWorker.checked": 1, 
            "documentFormCurrentState.approvalBySupervisor.checked": 1,
            "documentFormCurrentState.approvalByMannager.checked": 1,
            "documentFormCurrentState.loading": 1
        })
        res.json(memam22)
        };

        mema_M22.addNewHistoryrecord = async (req, res) => {
        const { id } = req.params;
        const historymemaM22New = {
            historyFile: req.body.historyFile || []
        }
        await memaM22.findByIdAndUpdate(id, { $set: historymemaM22New }, { new: true });
        res.json({
            status: 'History update'
        })
        }

        mema_M22.getHistoryOF = async (req, res) => {
        const { id } = req.params;
        const memam22 = await memaM22.findById(id, {
            "_id": 0, 
            "historyFile": 1
        })
        res.json(memam22)
        }

        mema_M22.createmema_M22TypeM = async (req, res) => {
        const memam22 = new memaM22(req.body)

        await memam22.save()
        res.json({res: 'Ok'})
        };

        module.exports = mema_M22;
