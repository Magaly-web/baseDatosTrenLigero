
const mema_M27 = {};
//Metodos
// Obtiene todos los empleados
mema_M27.getmema_M27Data = async (req, res)=>{
    const {id} = req.params;

    const memam27 = await memaM27.findById(id)
    res.json(memam27)
}

// Editar un documento
mema_M27.editmema_M27Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM27 = {
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

        bc100av: req.body.bc100avv || '',
        bc100al: req.body.bc100all || '',
        bc100af: req.body.bc100aff || '',

        bc100v: req.body.bc100vv || '',
        bc100l: req.body.bc100ll || '',
        bc100f: req.body.bc100ff || '',

        //cofre 2
        fbb1pl: req.body.fbb1pll || '',
        fbb1pr: req.body.fbb1prr || '',

        fbb1mf: req.body.fbb1mff || '',
        fbb1ml: req.body.fbb1mll || '',
        fbb1mr: req.body.fbb1mrr || '',
        
        fbb1cf: req.body.fbb1cff || '',
        fbb1cl: req.body.fbb1cll || '',
        fbb1cr: req.body.fbb1crr || '',

        //Conmutador

        ktbv: req.body.ktbvv || '',
        ktbl: req.body.ktbll || '',
        ktbc: req.body.ktbcc || '',
        ktbcm: req.body.ktbcmm || '',
        ktbr: req.body.ktbrr || '',

        iabv: req.body.iabvv || '',
        iabl: req.body.iabll || '',
        iabc: req.body.iabcc || '',
        iabcm: req.body.iabcmm || '',
        iabr: req.body.iabrr || '',

        obs2: req.body.obs22 || '',
        
        //Modelo de bateria
        alcad: req.body.alcadd || '',
        nife: req.body.nifee || '',
        saft: req.body.saftt || '',

        //Verificacion fisica

        fb1t: req.body.fb1tt || '',
        fb1rt: req.body.fb1rtt || '',
        fb1s: req.body.fb1ss || '',
        fb1b: req.body.fb1bb || '',
        fb1tf: req.body.fb1tff || '',
        fb1p: req.body.fb1pp || '',
        fb1r: req.body.fb1rr || '',

        fb2t: req.body.fb2tt || '',
        fb2rt: req.body.fb2rtt || '',
        fb2s: req.body.fb2ss || '',
        fb2b: req.body.fb2bb || '',
        fb2tf: req.body.fb2tff || '',
        fb2p: req.body.fb2pp || '',
        fb2r: req.body.fb2rr || '',

        fb3t: req.body.fb3tt || '',
        fb3rt: req.body.fb3rtt || '',
        fb3s: req.body.fb3ss || '',
        fb3b: req.body.fb3bb || '',
        fb3tf: req.body.fb3tff || '',
        fb3p: req.body.fb3pp || '',
        fb3r: req.body.fb3rr || '',

        fb4t: req.body.fb4tt || '',
        fb4rt: req.body.fb4rtt || '',
        fb4s: req.body.fb4ss || '',
        fb4b: req.body.fb4bb || '',
        fb4tf: req.body.fb4tff || '',
        fb4p: req.body.fb4pp || '',
        fb4r: req.body.fb4rr || '',

        fb5t: req.body.fb5tt || '',
        fb5rt: req.body.fb5rtt || '',
        fb5s: req.body.fb5ss || '',
        fb5b: req.body.fb5bb || '',
        fb5tf: req.body.fb5tff || '',
        fb5p: req.body.fb5pp || '',
        fb5r: req.body.fb5rr || '',

        fb6t: req.body.fb6tt || '',
        fb6rt: req.body.fb6rtt || '',
        fb6s: req.body.fb6ss || '',
        fb6b: req.body.fb6bb || '',
        fb6tf: req.body.fb6tff || '',
        fb6p: req.body.fb6pp || '',
        fb6r: req.body.fb6rr || '',

        fb7t: req.body.fb7tt || '',
        fb7rt: req.body.fb7rtt || '',
        fb7s: req.body.fb7ss || '',
        fb7b: req.body.fb7bb || '',
        fb7tf: req.body.fb7tff || '',
        fb7p: req.body.fb7pp || '',
        fb7r: req.body.fb7rr || '',

        fb8t: req.body.fb8tt || '',
        fb8rt: req.body.fb8rtt || '',
        fb8s: req.body.fb8ss || '',
        fb8b: req.body.fb8bb || '',
        fb8tf: req.body.fb8tff || '',
        fb8p: req.body.fb8pp || '',
        fb8r: req.body.fb8rr || '',

        fb9t: req.body.fb9tt || '',
        fb9rt: req.body.fb9rtt || '',
        fb9s: req.body.fb9ss || '',
        fb9b: req.body.fb9bb || '',
        fb9tf: req.body.fb9tff || '',
        fb9p: req.body.fb9pp || '',
        fb9r: req.body.fb9rr || '',

        fb10t: req.body.fb10tt || '',
        fb10rt: req.body.fb10rtt || '',
        fb10s: req.body.fb10ss || '',
        fb10b: req.body.fb10bb || '',
        fb10tf: req.body.fb10tff || '',
        fb10p: req.body.fb10pp || '',
        fb10r: req.body.fb10rr || '',

        fb11t: req.body.fb11tt || '',
        fb11rt: req.body.fb11rtt || '',
        fb11s: req.body.fb11ss || '',
        fb11b: req.body.fb11bb || '',
        fb11tf: req.body.fb11tff || '',
        fb11p: req.body.fb11pp || '',
        fb11r: req.body.fb11rr || '',

        fb12t: req.body.fb12tt || '',
        fb12rt: req.body.fb12rtt || '',
        fb12s: req.body.fb12ss || '',
        fb12b: req.body.fb12bb || '',
        fb12tf: req.body.fb12tff || '',
        fb12p: req.body.fb12pp || '',
        fb12r: req.body.fb12rr || '',

        fb13t: req.body.fb13tt || '',
        fb13rt: req.body.fb13rtt || '',
        fb13s: req.body.fb13ss || '',
        fb13b: req.body.fb13bb || '',
        fb13tf: req.body.fb13tff || '',
        fb13p: req.body.fb13pp || '',
        fb13r: req.body.fb13rr || '',

        fb14t: req.body.fb14tt || '',
        fb14rt: req.body.fb14rtt || '',
        fb14s: req.body.fb14ss || '',
        fb14b: req.body.fb14bb || '',
        fb14tf: req.body.fb14tff || '',
        fb14p: req.body.fb14pp || '',
        fb14r: req.body.fb14rr || '',

        fb15t: req.body.fb15tt || '',
        fb15rt: req.body.fb15rtt || '',
        fb15s: req.body.fb15ss || '',
        fb15b: req.body.fb15bb || '',
        fb15tf: req.body.fb15tff || '',
        fb15p: req.body.fb15pp || '',
        fb15r: req.body.fb15rr || '',

        fb16t: req.body.fb16tt || '',
        fb16rt: req.body.fb16rtt || '',
        fb16s: req.body.fb16ss || '',
        fb16b: req.body.fb16bb || '',
        fb16tf: req.body.fb16tff || '',
        fb16p: req.body.fb16pp || '',
        fb16r: req.body.fb16rr || '',

        fb17t: req.body.fb17tt || '',
        fb17rt: req.body.fb17rtt || '',
        fb17s: req.body.fb17ss || '',
        fb17b: req.body.fb17bb || '',
        fb17tf: req.body.fb17tff || '',
        fb17p: req.body.fb17pp || '',
        fb17r: req.body.fb17rr || '',

        fb18t: req.body.fb18tt || '',
        fb18rt: req.body.fb18rtt || '',
        fb18s: req.body.fb18ss || '',
        fb18b: req.body.fb18bb || '',
        fb18tf: req.body.fb18tff || '',
        fb18p: req.body.fb18pp || '',
        fb18r: req.body.fb18rr || '',

        obs3: req.body.obs33 || '',

        //Inspeccion tecnica
        tb1l: req.body.tb1ll || '',
        tb1e: req.body.tb1ee || '',
        tb1d: req.body.tb1dd || '',

        tb2l: req.body.tb2ll || '',
        tb2e: req.body.tb2ee || '',
        tb2d: req.body.tb2dd || '',

        tb3l: req.body.tb3ll || '',
        tb3e: req.body.tb3ee || '',
        tb3d: req.body.tb3dd || '',

        tb4l: req.body.tb4ll || '',
        tb4e: req.body.tb4ee || '',
        tb4d: req.body.tb4dd || '',

        tb5l: req.body.tb5ll || '',
        tb5e: req.body.tb5ee || '',
        tb5d: req.body.tb5dd || '',

        tb6l: req.body.tb6ll || '',
        tb6e: req.body.tb6ee || '',
        tb6d: req.body.tb6dd || '',

        tb7l: req.body.tb7ll || '',
        tb7e: req.body.tb7ee || '',
        tb7d: req.body.tb7dd || '',

        tb8l: req.body.tb8ll || '',
        tb8e: req.body.tb8ee || '',
        tb8d: req.body.tb8dd || '',

        tb9l: req.body.tb9ll || '',
        tb9e: req.body.tb9ee || '',
        tb9d: req.body.tb9dd || '',

        tb10l: req.body.tb10ll || '',
        tb10e: req.body.tb10ee || '',
        tb10d: req.body.tb10dd || '',

        tb11l: req.body.tb11ll || '',
        tb11e: req.body.tb11ee || '',
        tb11d: req.body.tb11dd || '',

        tb12l: req.body.tb12ll || '',
        tb12e: req.body.tb12ee || '',
        tb12d: req.body.tb12dd || '',

        tb13l: req.body.tb13ll || '',
        tb13e: req.body.tb13ee || '',
        tb13d: req.body.tb13dd || '',

        tb14l: req.body.tb14ll || '',
        tb14e: req.body.tb14ee || '',
        tb14d: req.body.tb14dd || '',

        tb15l: req.body.tb15ll || '',
        tb15e: req.body.tb15ee || '',
        tb15d: req.body.tb15dd || '',

        tb16l: req.body.tb16ll || '',
        tb16e: req.body.tb16ee || '',
        tb16d: req.body.tb16dd || '',

        tb17l: req.body.tb17ll || '',
        tb17e: req.body.tb17ee || '',
        tb17d: req.body.tb17dd || '',

        tb18l: req.body.tb18ll || '',
        tb18e: req.body.tb18ee || '',
        tb18d: req.body.tb18dd || '',

        obs4: req.body.obs44 || '',

        //Cofre de baterias

        cov: req.body.covv || '',
        col: req.body.coll || '',
        cop: req.body.copp || '',
        copi: req.body.copii || '',
        colu: req.body.coluu || '',
        cor: req.body.corr || '',

        tv: req.body.tvv || '',
        tl: req.body.tll || '',
        tp: req.body.tpp || '',
        tpi: req.body.tpii || '',
        tlu: req.body.tluu || '',
        tr: req.body.trr || '',

        bmiv: req.body.bmivv || '',
        bmil: req.body.bmill || '',
        bmip: req.body.bmipp || '',
        bmipi: req.body.bmipii || '',
        bmilu: req.body.bmiluu || '',
        bmir: req.body.bmirr || '',

        bmdv: req.body.bmdvv || '',
        bmdl: req.body.bmdll || '',
        bmdp: req.body.bmdpp || '',
        bmdpi: req.body.bmdpii || '',
        bmdlu: req.body.bmdluu || '',
        bmdr: req.body.bmdrr || '',

        pv: req.body.pvv || '',
        pl: req.body.pll || '',
        pp: req.body.ppp || '',
        ppi: req.body.ppii || '',
        plu: req.body.pluu || '',
        pr: req.body.prr || '',

        cav: req.body.cavv || '',
        cal: req.body.call || '',
        cap: req.body.capp || '',
        capi: req.body.capii || '',
        calu: req.body.caluu || '',
        car: req.body.carr || '',

        rgv: req.body.rgvv || '',
        rgl: req.body.rgll || '',
        rgp: req.body.rgpp || '',
        rgpi: req.body.rgpii || '',
        rglu: req.body.rgluu || '',
        rgr: req.body.rgrr || '',

        bdv: req.body.bdvv || '',
        bdl: req.body.bdll || '',
        bdp: req.body.bdpp || '',
        bdpi: req.body.bdpii || '',
        bdlu: req.body.bdluu || '',
        bdr: req.body.bdrr || '',

        div: req.body.divv || '',
        dil: req.body.dill || '',
        dip: req.body.dipp || '',
        dipi: req.body.dipii || '',
        dilu: req.body.diluu || '',
        dir: req.body.dirr || '',

        cbv: req.body.cbvv || '',
        cbl: req.body.cbll || '',
        cbp: req.body.cbpp || '',
        cbpi: req.body.cbpii || '',
        cblu: req.body.cbluu || '',
        cbr: req.body.cbrr || '',

        tov: req.body.tovv || '',
        tol: req.body.toll || '',
        top: req.body.topp || '',
        topi: req.body.topii || '',
        tolu: req.body.toluu || '',
        tor: req.body.torr || '',

        obs5: req.body.obs55 || '',

        //-------------------------------

    }
    await memaM27.findByIdAndUpdate(id, { $set: mema_M27}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M27.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM27.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M27.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM27.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M27.getAllmema_M27TypeM = async (req, res) => {
    const memam27 = await memaM27.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam27)
    };

    mema_M27.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM27New = {
        historyFile: req.body.historyFile || []
    }
    await memaM27.findByIdAndUpdate(id, { $set: historymemaM27New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M27.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam27 = await memaM27.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam27)
    }

    mema_M27.createmema_M27TypeM = async (req, res) => {
    const memam27 = new memaM27(req.body)

    await memam27.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M27;
