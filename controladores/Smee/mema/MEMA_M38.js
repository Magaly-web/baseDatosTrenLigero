
const memaM38 = require('../../../models/smee/mema/MEMA_M38');

const mema_M38 = {};
//Metodos
// Obtiene todos los empleados
mema_M38.getmema_M38Data = async (req, res)=>{
    const {id} = req.params;

    const memam38 = await memaM38.findById(id)
    res.json(memam38)
}

// Editar un documento
mema_M38.editmema_M38Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM38 = {
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
        //Fanales principales y auxiliares M1
        m1fdr: req.body.m1fdrr || '',
        m1fdl: req.body.m1fdll || '',
        m1fdef: req.body.m1fdeff || '',

        m1cdr: req.body.m1cdrr || '',
        m1cdl: req.body.m1cdll || '',
        m1cdpp: req.body.m1cdppp || '',
        m1cdpi: req.body.m1cdpii || '',
        m1cdef: req.body.m1cdeff || '',
        
        m1bdr: req.body.m1bdrr || '',
        m1bdl: req.body.m1bdll || '',
        m1bdpp: req.body.m1bdppp || '',
        m1bdpi: req.body.m1bdpii || '',
        m1bdef: req.body.m1bdeff || '',

        m1fir: req.body.m1firr || '',
        m1fil: req.body.m1fill || '',
        m1fief: req.body.m1fieff || '',

        m1cir: req.body.m1cirr || '',
        m1cil: req.body.m1cill || '',
        m1cipp: req.body.m1cippp || '',
        m1cipi: req.body.m1cipii || '',
        m1cief: req.body.m1cieff || '',

        m1bir: req.body.m1birr || '',
        m1bil: req.body.m1bill || '',
        m1bipp: req.body.m1bippp || '',
        m1bipi: req.body.m1bipii || '',
        m1bief: req.body.m1bieff || '',

        m1ajr: req.body.m1ajrr || '',
        m1ajl: req.body.m1ajll || '',
        m1ajef: req.body.m1ajeff || '',

        m1lhr: req.body.m1lhrr || '',
        m1lhl: req.body.m1lhll || '',
        m1lhef: req.body.m1lheff || '',

        m1fvir: req.body.m1fvirr || '',
        m1fvil: req.body.m1fvill || '',
        m1fvipp: req.body.m1fvippp || '',
        m1fvipi: req.body.m1fvipii || '',
        m1fvief: req.body.m1fvieff || '',

        m1fvdr: req.body.m1fvdrr || '',
        m1fvdl: req.body.m1fvdll || '',
        m1fvdpp: req.body.m1fvdppp || '',
        m1fvdpi: req.body.m1fvdpii || '',
        m1fvdef: req.body.m1fvdeff || '',

        m1tfr: req.body.m1tfrr || '',
        m1tfl: req.body.m1tfll || '',
        m1tfef: req.body.m1tfeff || '',

        obs2: req.body.obs22 || '',

        //Fanales principales y auxiliares M2
        m2fdr: req.body.m2fdrr || '',
        m2fdl: req.body.m2fdll || '',
        m2fdef: req.body.m2fdeff || '',

        m2cdr: req.body.m2cdrr || '',
        m2cdl: req.body.m2cdll || '',
        m2cdpp: req.body.m2cdppp || '',
        m2cdpi: req.body.m2cdpii || '',
        m2cdef: req.body.m2cdeff || '',
        
        m2bdr: req.body.m2bdrr || '',
        m2bdl: req.body.m2bdll || '',
        m2bdpp: req.body.m2bdppp || '',
        m2bdpi: req.body.m2bdpii || '',
        m2bdef: req.body.m2bdeff || '',

        m2fir: req.body.m2firr || '',
        m2fil: req.body.m2fill || '',
        m2fief: req.body.m2fieff || '',

        m2cir: req.body.m2cirr || '',
        m2cil: req.body.m2cill || '',
        m2cipp: req.body.m2cippp || '',
        m2cipi: req.body.m2cipii || '',
        m2cief: req.body.m2cieff || '',

        m2bir: req.body.m2birr || '',
        m2bil: req.body.m2bill || '',
        m2bipp: req.body.m2bippp || '',
        m2bipi: req.body.m2bipii || '',
        m2bief: req.body.m2bieff || '',

        m2ajr: req.body.m2ajrr || '',
        m2ajl: req.body.m2ajll || '',
        m2ajef: req.body.m2ajeff || '',

        m2lhr: req.body.m2lhrr || '',
        m2lhl: req.body.m2lhll || '',
        m2lhef: req.body.m2lheff || '',

        m2fvir: req.body.m2fvirr || '',
        m2fvil: req.body.m2fvill || '',
        m2fvipp: req.body.m2fvippp || '',
        m2fvipi: req.body.m2fvipii || '',
        m2fvief: req.body.m2fvieff || '',

        m2fvdr: req.body.m2fvdrr || '',
        m2fvdl: req.body.m2fvdll || '',
        m2fvdpp: req.body.m2fvdppp || '',
        m2fvdpi: req.body.m2fvdpii || '',
        m2fvdef: req.body.m2fvdeff || '',

        m2tfr: req.body.m2tfrr || '',
        m2tfl: req.body.m2tfll || '',
        m2tfef: req.body.m2tfeff || '',

        obs3: req.body.obs33 || '',
        //-------------------------------

    }
    await memaM38.findByIdAndUpdate(id, { $set: mema_M38}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M38.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM38.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M38.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM38.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M38.getAllmema_M38TypeM = async (req, res) => {
    const memam38 = await memaM38.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam38)
    };

    mema_M38.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM38New = {
        historyFile: req.body.historyFile || []
    }
    await memaM38.findByIdAndUpdate(id, { $set: historymemaM38New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M38.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam38 = await memaM38.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam38)
    }

    mema_M38.createmema_M38TypeM = async (req, res) => {
    const memam38 = new memaM38(req.body)

    await memam38.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M38;
