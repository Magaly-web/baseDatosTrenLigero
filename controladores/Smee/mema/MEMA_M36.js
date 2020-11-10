const memaM36 = require('../../../models/smee/mema/MEMA_M36');

const mema_M36 = {};
//Metodos
// Obtiene todos los empleados
mema_M36.getmema_M36Data = async (req, res)=>{
    const {id} = req.params;

    const memam36 = await memaM36.findById(id)
    res.json(memam36)
}

// Editar un documento
mema_M36.editmema_M36Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM36 = {
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
        //Sensor Bogie M1
        m1tiv: req.body.m1tivv || '',
        m1til: req.body.m1till || '',
        m1tif: req.body.m1tiff || '',

        m1tchv: req.body.m1tchvv || '',
        m1tchl: req.body.m1tchll || '',
        m1tchf: req.body.m1tchff || '',

        m1ptv: req.body.m1ptvv || '',
        m1ptl: req.body.m1ptll || '',
        m1ptf: req.body.m1ptff || '',

        m1celsv: req.body.m1celsvv || '',
        m1celsl: req.body.m1celsll || '',
        m1celsf: req.body.m1celsff || '',

        m1bfv: req.body.m1bfvv || '',
        m1bfl: req.body.m1bfll || '',
        m1bff: req.body.m1bfff || '',
        
        m1tfv: req.body.m1tfvv || '',
        m1tfl: req.body.m1tfll || '',
        m1tff: req.body.m1tfff || '',

        //Sensor Bogie Remolque M1
        m1rtiv: req.body.m1rtivv || '',
        m1rtil: req.body.m1rtill || '',
        m1rtif: req.body.m1rtiff || '',

        m1rtchv: req.body.m1rtchvv || '',
        m1rtchl: req.body.m1rtchll || '',
        m1rtchf: req.body.m1rtchff || '',

        m1rptv: req.body.m1rptvv || '',
        m1rptl: req.body.m1rptll || '',
        m1rptf: req.body.m1rptff || '',

        m1rcelsv: req.body.m1rcelsvv || '',
        m1rcelsl: req.body.m1rcelsll || '',
        m1rcelsf: req.body.m1rcelsff || '',

        m1rbfv: req.body.m1rbfvv || '',
        m1rbfl: req.body.m1rbfll || '',
        m1rbff: req.body.m1rbfff || '',

        m1rtfv: req.body.m1rtfvv || '',
        m1rtfl: req.body.m1rtfll || '',
        m1rtff: req.body.m1rtfff || '',

        obs2: req.body.obs22 || '',

        //Sensor Bogie M2

        m2tiv: req.body.m2tivv || '',
        m2til: req.body.m2till || '',
        m2tif: req.body.m2tiff || '',

        m2tchv: req.body.m2tchvv || '',
        m2tchl: req.body.m2tchll || '',
        m2tchf: req.body.m2tchff || '',

        m2ptv: req.body.m2ptvv || '',
        m2ptl: req.body.m2ptll || '',
        m2ptf: req.body.m2ptff || '',

        m2celsv: req.body.m2celsvv || '',
        m2celsl: req.body.m2celsll || '',
        m2celsf: req.body.m2celsff || '',

        m2bfv: req.body.m2bfvv || '',
        m2bfl: req.body.m2bfll || '',
        m2bff: req.body.m2bfff || '',
        
        m2tfv: req.body.m2tfvv || '',
        m2tfl: req.body.m2tfll || '',
        m2tff: req.body.m2tfff || '',

        //Sensor Bogie Remolque m2

        m2rtiv: req.body.m2rtivv || '',
        m2rtil: req.body.m2rtill || '',
        m2rtif: req.body.m2rtiff || '',

        m2rtchv: req.body.m2rtchvv || '',
        m2rtchl: req.body.m2rtchll || '',
        m2rtchf: req.body.m2rtchff || '',

        m2rptv: req.body.m2rptvv || '',
        m2rptl: req.body.m2rptll || '',
        m2rptf: req.body.m2rptff || '',

        m2rcelsv: req.body.m2rcelsvv || '',
        m2rcelsl: req.body.m2rcelsll || '',
        m2rcelsf: req.body.m2rcelsff || '',

        m2rbfv: req.body.m2rbfvv || '',
        m2rbfl: req.body.m2rbfll || '',
        m2rbff: req.body.m2rbfff || '',

        m2rtfv: req.body.m2rtfvv || '',
        m2rtfl: req.body.m2rtfll || '',
        m2rtff: req.body.m2rtfff || '',

        obs3: req.body.obs33 || '',

        //-------------------------------

    }
    await memaM36.findByIdAndUpdate(id, { $set: mema_M36}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M36.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM36.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M36.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM36.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M36.getAllmema_M36TypeM = async (req, res) => {
    const memam36 = await memaM36.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam36)
    };

    mema_M36.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM36New = {
        historyFile: req.body.historyFile || []
    }
    await memaM36.findByIdAndUpdate(id, { $set: historymemaM36New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M36.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam36 = await memaM36.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam36)
    }

    mema_M36.createmema_M36TypeM = async (req, res) => {
    const memam36 = new memaM36(req.body)

    await memam36.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M36;
