
const memaM39 = require('../../../models/smee/mema/MEMA_M39');

const mema_M39 = {};
//Metodos
// Obtiene todos los empleados
mema_M39.getmema_M39Data = async (req, res)=>{
    const {id} = req.params;

    const memam39 = await memaM39.findById(id)
    res.json(memam39)
}

// Editar un documento
mema_M39.editmema_M39Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM39 = {
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

        //Fanales de transito M1
        cild1ef: req.body.cild1eff || '',
        cild1l: req.body.cild1ll || '',
        cild1r: req.body.cild1rr || '',
        cild1f: req.body.cild1ff || '',

        mrd1ef: req.body.mrd1eff || '',
        mrd1l: req.body.mrd1ll || '',
        mrd1r: req.body.mrd1rr || '',
        mrd1f: req.body.mrd1ff || '',

        cili1ef: req.body.cili1eff || '',
        cili1l: req.body.cili1ll || '',
        cili1r: req.body.cili1rr || '',
        cili1f: req.body.cili1ff || '',

        mri1ef: req.body.mri1eff || '',
        mri1l: req.body.mri1ll || '',
        mri1r: req.body.mri1rr || '',
        mri1f: req.body.mri1ff || '',

        cilidr1ef: req.body.cilidr1eff || '',
        cilidr1l: req.body.cilidr1ll || '',
        cilidr1r: req.body.cilidr1rr || '',
        cilidr1f: req.body.cilidr1ff || '',

        mrrd1ef: req.body.mrrd1eff || '',
        mrrd1l: req.body.mrrd1ll || '',
        mrrd1r: req.body.mrrd1rr || '',
        mrrd1f: req.body.mrrd1ff || '',

        cilir1ef: req.body.cilir1eff || '',
        cilir1l: req.body.cilir1ll || '',
        cilir1r: req.body.cilir1rr || '',
        cilir1f: req.body.cilir1ff || '',

        mrri1ef: req.body.mrri1eff || '',
        mrri1l: req.body.mrri1ll || '',
        mrri1r: req.body.mrri1rr || '',
        mrri1f: req.body.mrri1ff || '',

        tf1ef: req.body.tf1eff || '',
        tf1l: req.body.tf1ll || '',
        tf1r: req.body.tf1rr || '',
        tf1f: req.body.tf1ff || '',

        obs2: req.body.obs22 || '',

        //Fanales de transito M2

        cild2ef: req.body.cild2eff || '',
        cild2l: req.body.cild2ll || '',
        cild2r: req.body.cild2rr || '',
        cild2f: req.body.cild2ff || '',

        mrd2ef: req.body.mrd2eff || '',
        mrd2l: req.body.mrd2ll || '',
        mrd2r: req.body.mrd2rr || '',
        mrd2f: req.body.mrd2ff || '',

        cili2ef: req.body.cili2eff || '',
        cili2l: req.body.cili2ll || '',
        cili2r: req.body.cili2rr || '',
        cili2f: req.body.cili2ff || '',

        mri2ef: req.body.mri2eff || '',
        mri2l: req.body.mri2ll || '',
        mri2r: req.body.mri2rr || '',
        mri2f: req.body.mri2ff || '',

        cilidr2ef: req.body.cilidr2eff || '',
        cilidr2l: req.body.cilidr2ll || '',
        cilidr2r: req.body.cilidr2rr || '',
        cilidr2f: req.body.cilidr2ff || '',

        mrrd2ef: req.body.mrrd2eff || '',
        mrrd2l: req.body.mrrd2ll || '',
        mrrd2r: req.body.mrrd2rr || '',
        mrrd2f: req.body.mrrd2ff || '',

        cilir2ef: req.body.cilir2eff || '',
        cilir2l: req.body.cilir2ll || '',
        cilir2r: req.body.cilir2rr || '',
        cilir2f: req.body.cilir2ff || '',

        mrri2ef: req.body.mrri2eff || '',
        mrri2l: req.body.mrri2ll || '',
        mrri2r: req.body.mrri2rr || '',
        mrri2f: req.body.mrri2ff || '',

        tf2ef: req.body.tf2eff || '',
        tf2l: req.body.tf2ll || '',
        tf2r: req.body.tf2rr || '',
        tf2f: req.body.tf2ff || '',

        obs3: req.body.obs33 || '',
        //-------------------------------

    }
    await memaM39.findByIdAndUpdate(id, { $set: mema_M39}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M39.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM39.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M39.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM39.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M39.getAllmema_M39TypeM = async (req, res) => {
    const memam39 = await memaM39.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam39)
    };

    mema_M39.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM39New = {
        historyFile: req.body.historyFile || []
    }
    await memaM39.findByIdAndUpdate(id, { $set: historymemaM39New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M39.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam39 = await memaM39.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam39)
    }

    mema_M39.createmema_M39TypeM = async (req, res) => {
    const memam39 = new memaM39(req.body)

    await memam39.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M39;
