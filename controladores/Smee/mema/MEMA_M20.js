const memaM20 = require('../../../models/smee/mema/MEMA_M20');

const mema_M20 = {};
//Metodos
// Obtiene todos los empleados
mema_M20.getmema_M20Data = async (req, res)=>{
    const {id} = req.params;

    const memam20 = await memaM20.findById(id)
    res.json(memam20)
}

// Editar un documento
mema_M20.editmema_M20Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM20 = {
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
        //Equipo y accesorios de la cabeza de acoplador M1

        m1bci: req.body.m1bcii || '',
        m1bcl: req.body.m1bcll || '',
        m1bcf: req.body.m1bcff || '',

        m1cfi: req.body.m1cfii || '',
        m1cfl: req.body.m1cfll || '',
        m1cff: req.body.m1cfff || '',

        m1cmi: req.body.m1cmii || '',
        m1cml: req.body.m1cmll || '',
        m1cmf: req.body.m1cmff || '',

        m1cpi: req.body.m1cpii || '',
        m1cpl: req.body.m1cpll || '',
        m1cpf: req.body.m1cpff || '',

        m1spi: req.body.m1spii || '',
        m1spl: req.body.m1spll || '',
        m1spf: req.body.m1spff || '',

        //Tomas de conexion acoplador electrico

        m1ssi: req.body.m1ssii || '',
        m1ssl: req.body.m1ssll || '',
        m1ssc: req.body.m1sscc || '',
        m1ssp: req.body.m1sspp || '',
        m1ssf: req.body.m1ssff || '',

        m1apvi: req.body.m1apvii || '',
        m1apvl: req.body.m1apvll || '',
        m1apvc: req.body.m1apvcc || '',
        m1apvp: req.body.m1apvpp || '',
        m1apvf: req.body.m1apvff || '',

        m1coni: req.body.m1conii || '',
        m1conl: req.body.m1conll || '',
        m1conc: req.body.m1concc || '',
        m1conp: req.body.m1conpp || '',
        m1conf: req.body.m1conff || '',

        m1aci: req.body.m1acii || '',
        m1acl: req.body.m1acll || '',
        m1acc: req.body.m1accc || '',
        m1acp: req.body.m1acpp || '',
        m1acf: req.body.m1acff || '',

        m1tei: req.body.m1teii || '',
        m1tel: req.body.m1tell || '',
        m1tec: req.body.m1tecc || '',
        m1tep: req.body.m1tepp || '',
        m1tef: req.body.m1teff || '',

        obs2: req.body.obs22 || '',
        //Equipo y accesorios de la cabeza de acoplador M2
        
        m2bci: req.body.m2bcii || '',
        m2bcl: req.body.m2bcll || '',
        m2bcf: req.body.m2bcff || '',

        m2cfi: req.body.m2cfii || '',
        m2cfl: req.body.m2cfll || '',
        m2cff: req.body.m2cfff || '',

        m2cmi: req.body.m2cmii || '',
        m2cml: req.body.m2cmll || '',
        m2cmf: req.body.m2cmff || '',

        m2cpi: req.body.m2cpii || '',
        m2cpl: req.body.m2cpll || '',
        m2cpf: req.body.m2cpff || '',

        m2spi: req.body.m2spii || '',
        m2spl: req.body.m2spll || '',
        m2spf: req.body.m2spff || '',

        //Tomas de conexion acoplador electrico

        m2ssi: req.body.m2ssii || '',
        m2ssl: req.body.m2ssll || '',
        m2ssc: req.body.m2sscc || '',
        m2ssp: req.body.m2sspp || '',
        m2ssf: req.body.m2ssff || '',

        m2apvi: req.body.m2apvii || '',
        m2apvl: req.body.m2apvll || '',
        m2apvc: req.body.m2apvcc || '',
        m2apvp: req.body.m2apvpp || '',
        m2apvf: req.body.m2apvff || '',

        m2coni: req.body.m2conii || '',
        m2conl: req.body.m2conll || '',
        m2conc: req.body.m2concc || '',
        m2conp: req.body.m2conpp || '',
        m2conf: req.body.m2conff || '',

        m2aci: req.body.m2acii || '',
        m2acl: req.body.m2acll || '',
        m2acc: req.body.m2accc || '',
        m2acp: req.body.m2acpp || '',
        m2acf: req.body.m2acff || '',

        m2tei: req.body.m2teii || '',
        m2tel: req.body.m2tell || '',
        m2tec: req.body.m2tecc || '',
        m2tep: req.body.m2tepp || '',
        m2tef: req.body.m2teff || '',

        obs3: req.body.obs33 || '',
        //-------------------------------

    }
    await memaM20.findByIdAndUpdate(id, { $set: mema_M20}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M20.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM20.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M20.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM20.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M20.getAllmema_M20TypeM = async (req, res) => {
    const memam20 = await memaM20.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam20)
    };

    mema_M20.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM20New = {
        historyFile: req.body.historyFile || []
    }
    await memaM20.findByIdAndUpdate(id, { $set: historymemaM20New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M20.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam20 = await memaM20.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam20)
    }

    mema_M20.createmema_M20TypeM = async (req, res) => {
    const memam20 = new memaM20(req.body)

    await memam20.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M20;
