
const memaM08 = require('../../../models/smee/mema/MEMA_M08');

const mema_M08 = {};
//Metodos
// Obtiene todos los empleados
mema_M08.getmema_M08Data = async (req, res)=>{
    const {id} = req.params;

    const memam08 = await memaM08.findById(id)
    res.json(memam08)
}

// Editar un documento
mema_M08.editmema_M08Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM08 = {
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
        m1hpiv: req.body.m1hpivv || '',
        m1hpil: req.body.m1hpill || '',
        m1hpir: req.body.m1hpirr || '',
        m1hpif: req.body.m1hpiff || '',

        m1enapv: req.body.m1enapvv || '',
        m1enapl: req.body.m1enapll || '',
        m1enapr: req.body.m1enaprr || '',
        m1enapf: req.body.m1enapff || '',

        m1spd1v: req.body.m1spd1vv || '',
        m1spd1l: req.body.m1spd1ll || '',
        m1spd1r: req.body.m1spd1rr || '',
        m1spd1f: req.body.m1spd1ff || '',

        m1sacv: req.body.m1sacvv || '',
        m1sacl: req.body.m1sacll || '',
        m1sacr: req.body.m1sacrr || '',
        m1sacf: req.body.m1sacff || '',

        m1pdedv: req.body.m1pdedvv || '',
        m1pdedl: req.body.m1pdedll || '',
        m1pdedr: req.body.m1pdedrr || '',
        m1pdedf: req.body.m1pdedff || '',

        m1pdecv: req.body.m1pdecvv || '',
        m1pdecl: req.body.m1pdecll || '',
        m1pdecr: req.body.m1pdecrr || '',
        m1pdecf: req.body.m1pdecff || '',

        m1smav: req.body.m1smavv || '',
        m1smal: req.body.m1small || '',
        m1smar: req.body.m1smarr || '',
        m1smaf: req.body.m1smaff || '',

        m1svcv: req.body.m1svcvv || '',
        m1svcl: req.body.m1svcll || '',
        m1svcr: req.body.m1svcrr || '',
        m1svcf: req.body.m1svcff || '',

        m1litbv: req.body.m1litbvv || '',
        m1litbl: req.body.m1litbll || '',
        m1litbr: req.body.m1litbrr || '',
        m1litbf: req.body.m1litbff || '',

        m1svpv: req.body.m1svpvv || '',
        m1svpl: req.body.m1svpll || '',
        m1svpr: req.body.m1svprr || '',
        m1svpf: req.body.m1svpff || '',

        m1sfev: req.body.m1sfevv || '',
        m1sfel: req.body.m1sfell || '',
        m1sfer: req.body.m1sferr || '',
        m1sfef: req.body.m1sfeff || '',

        m1stbv: req.body.m1stbvv || '',
        m1stbl: req.body.m1stbll || '',
        m1stbr: req.body.m1stbrr || '',
        m1stbf: req.body.m1stbff || '',

        m1sfpv: req.body.m1sfpvv || '',
        m1sfpl: req.body.m1sfpll || '',
        m1sfpr: req.body.m1sfprr || '',
        m1sfpf: req.body.m1sfpff || '',

        m1vcav: req.body.m1vcavv || '',
        m1vcal: req.body.m1vcall || '',
        m1vcar: req.body.m1vcarr || '',
        m1vcaf: req.body.m1vcaff || '',

        //Borneros de conexion y cableado

        m1c09v: req.body.m1c09vv || '',
        m1c09l: req.body.m1c09ll || '',
        m1c09f: req.body.m1c09ff || '',

        m1c10v: req.body.m1c10vv || '',
        m1c10l: req.body.m1c10ll || '',
        m1c10f: req.body.m1c10ff || '',

        m1c11v: req.body.m1c11vv || '',
        m1c11l: req.body.m1c11ll || '',
        m1c11f: req.body.m1c11ff || '',

        m1c12v: req.body.m1c12vv || '',
        m1c12l: req.body.m1c12ll || '',
        m1c12f: req.body.m1c12ff || '',

        m1c13v: req.body.m1c13vv || '',
        m1c13l: req.body.m1c13ll || '',
        m1c13f: req.body.m1c13ff || '',

        m1bmt1v: req.body.m1bmt1vv || '',
        m1bmt1l: req.body.m1bmt1ll || '',
        m1bmt1f: req.body.m1bmt1ff || '',

        m1tcsaev: req.body.m1tcsaevv || '',
        m1tcsael: req.body.m1tcsaell || '',
        m1tcsaef: req.body.m1tcsaeff || '',

        m1bc991v: req.body.m1bc991vv || '',
        m1bc991l: req.body.m1bc991ll || '',
        m1bc991f: req.body.m1bc991ff || '',

        m1tav: req.body.m1tavv || '',
        m1tal: req.body.m1tall || '',
        m1taf: req.body.m1taff || '',

        m1atv: req.body.m1atvv || '',
        m1atl: req.body.m1atll || '',
        m1atf: req.body.m1atff || '',

        m1ppv: req.body.m1ppvv || '',
        m1ppl: req.body.m1ppll || '',
        m1ppf: req.body.m1ppff || '',

        //Grupo de fusibles baja tension M1

        m1gfbt1pa: req.body.m1gfbt1paa || '',
        m1gfbt1pl: req.body.m1gfbt1pll || '',
        m1gfbt1pr: req.body.m1gfbt1prr || '',

        m1gfbt1aa: req.body.m1gfbt1aaa || '',
        m1gfbt1al: req.body.m1gfbt1all || '',
        m1gfbt1ar: req.body.m1gfbt1arr || '',

        m1gfbt1ea: req.body.m1gfbt1eaa || '',
        m1gfbt1el: req.body.m1gfbt1ell || '',
        m1gfbt1er: req.body.m1gfbt1err || '',

        m1gfbt1apa: req.body.m1gfbt1apaa || '',
        m1gfbt1apl: req.body.m1gfbt1apll || '',
        m1gfbt1apr: req.body.m1gfbt1aprr || '',

        m1gfbt1ma: req.body.m1gfbt1maa || '',
        m1gfbt1ml: req.body.m1gfbt1mll || '',
        m1gfbt1mr: req.body.m1gfbt1mrr || '',

        m1gfbt2pa: req.body.m1gfbt2paa || '',
        m1gfbt2pl: req.body.m1gfbt2pll || '',
        m1gfbt2pr: req.body.m1gfbt2prr || '',

        m1gfbt2mc1a: req.body.m1gfbt2mc1aa || '',
        m1gfbt2mc1l: req.body.m1gfbt2mc1ll || '',
        m1gfbt2mc1r: req.body.m1gfbt2mc1rr || '',

        m1gfbt2mc11a: req.body.m1gfbt2mc11aa || '',
        m1gfbt2mc11l: req.body.m1gfbt2mc11ll || '',
        m1gfbt2mc11r: req.body.m1gfbt2mc11rr || '',

        m1gfbt2ma: req.body.m1gfbt2maa || '',
        m1gfbt2ml: req.body.m1gfbt2mll || '',
        m1gfbt2mr: req.body.m1gfbt2mrr || '',

        m1gfbt2ba: req.body.m1gfbt2baa || '',
        m1gfbt2bl: req.body.m1gfbt2bll || '',
        m1gfbt2br: req.body.m1gfbt2brr || '',

        m1gfbt3pa: req.body.m1gfbt3paa || '',
        m1gfbt3pl: req.body.m1gfbt3pll || '',
        m1gfbt3pr: req.body.m1gfbt3prr || '',

        m1gfbt3saa: req.body.m1gfbt3saaa || '',
        m1gfbt3sal: req.body.m1gfbt3sall || '',
        m1gfbt3sar: req.body.m1gfbt3sarr || '',

        m1gfbt3tsa: req.body.m1gfbt3tsaa || '',
        m1gfbt3tsl: req.body.m1gfbt3tsll || '',
        m1gfbt3tsr: req.body.m1gfbt3tsrr || '',

        m1gfbt3va: req.body.m1gfbt3vaa || '',
        m1gfbt3vl: req.body.m1gfbt3vll || '',
        m1gfbt3vr: req.body.m1gfbt3vrr || '',

        m1gfbt3paa: req.body.m1gfbt3paaa || '',
        m1gfbt3pal: req.body.m1gfbt3pall || '',
        m1gfbt3par: req.body.m1gfbt3parr || '',

        obs2: req.body.obs22 || '',

        //Tabique M2

        m2hpiv: req.body.m2hpivv || '',
        m2hpil: req.body.m2hpill || '',
        m2hpir: req.body.m2hpirr || '',
        m2hpif: req.body.m2hpiff || '',

        m2enapv: req.body.m2enapvv || '',
        m2enapl: req.body.m2enapll || '',
        m2enapr: req.body.m2enaprr || '',
        m2enapf: req.body.m2enapff || '',

        m2spd1v: req.body.m2spd1vv || '',
        m2spd1l: req.body.m2spd1ll || '',
        m2spd1r: req.body.m2spd1rr || '',
        m2spd1f: req.body.m2spd1ff || '',

        m2smav: req.body.m2smavv || '',
        m2smal: req.body.m2small || '',
        m2smar: req.body.m2smarr || '',
        m2smaf: req.body.m2smaff || '',

        m2stbv: req.body.m2stbvv || '',
        m2stbl: req.body.m2stbll || '',
        m2stbr: req.body.m2stbrr || '',
        m2stbf: req.body.m2stbff || '',

        m2svcv: req.body.m2svcvv || '',
        m2svcl: req.body.m2svcll || '',
        m2svcr: req.body.m2svcrr || '',
        m2svcf: req.body.m2svcff || '',

        m2litbv: req.body.m2litbvv || '',
        m2litbl: req.body.m2litbll || '',
        m2litbr: req.body.m2litbrr || '',
        m2litbf: req.body.m2litbff || '',

        m2svpv: req.body.m2svpvv || '',
        m2svpl: req.body.m2svpll || '',
        m2svpr: req.body.m2svprr || '',
        m2svpf: req.body.m2svpff || '',

        m2sfev: req.body.m2sfevv || '',
        m2sfel: req.body.m2sfell || '',
        m2sfer: req.body.m2sferr || '',
        m2sfef: req.body.m2sfeff || '',

        m2vcav: req.body.m2vcavv || '',
        m2vcal: req.body.m2vcall || '',
        m2vcar: req.body.m2vcarr || '',
        m2vcaf: req.body.m2vcaff || '',

        //Borneros de conexion y cableado

        m2c68v: req.body.m2c68vv || '',
        m2c68l: req.body.m2c68ll || '',
        m2c68f: req.body.m2c68ff || '',

        m2c69v: req.body.m2c69vv || '',
        m2c69l: req.body.m2c69ll || '',
        m2c69f: req.body.m2c69ff || '',

        m2c70v: req.body.m2c70vv || '',
        m2c70l: req.body.m2c70ll || '',
        m2c70f: req.body.m2c70ff || '',

        m2c107v: req.body.m2c107vv || '',
        m2c107l: req.body.m2c107ll || '',
        m2c107f: req.body.m2c107ff || '',

        m2c108v: req.body.m2c108vv || '',
        m2c108l: req.body.m2c108ll || '',
        m2c108f: req.body.m2c108ff || '',

        m2bmt2v: req.body.m2bmt2vv || '',
        m2bmt2l: req.body.m2bmt2ll || '',
        m2bmt2f: req.body.m2bmt2ff || '',

        m2bc992v: req.body.m2bc992vv || '',
        m2bc992l: req.body.m2bc992ll || '',
        m2bc992f: req.body.m2bc992ff || '',

        m2tav: req.body.m2tavv || '',
        m2tal: req.body.m2tall || '',
        m2taf: req.body.m2taff || '',

        m2aav: req.body.m2aavv || '',
        m2aal: req.body.m2aall || '',
        m2aaf: req.body.m2aaff || '',

        m2ppv: req.body.m2ppvv || '',
        m2ppl: req.body.m2ppll || '',
        m2ppf: req.body.m2ppff || '',

        //Grupo de fusibles baja tension M2

        m2gfbt1pl: req.body.m2gfbt1pll || '',
        m2gfbt1pr: req.body.m2gfbt1prr || '',

        m2gfbt1aa: req.body.m2gfbt1aaa || '',
        m2gfbt1al: req.body.m2gfbt1all || '',
        m2gfbt1ar: req.body.m2gfbt1arr || '',

        m2gfbt1ea: req.body.m2gfbt1eaa || '',
        m2gfbt1el: req.body.m2gfbt1ell || '',
        m2gfbt1er: req.body.m2gfbt1err || '',

        m2gfbt1apa: req.body.m2gfbt1apaa || '',
        m2gfbt1apl: req.body.m2gfbt1apll || '',
        m2gfbt1apr: req.body.m2gfbt1aprr || '',

        m2gfbt1ma: req.body.m2gfbt1maa || '',
        m2gfbt1ml: req.body.m2gfbt1mll || '',
        m2gfbt1mr: req.body.m2gfbt1mrr || '',


        m2gfbt2pl: req.body.m2gfbt2pll || '',
        m2gfbt2pr: req.body.m2gfbt2prr || '',

        m2gfbt2mc2a: req.body.m2gfbt2mc2aa || '',
        m2gfbt2mc2l: req.body.m2gfbt2mc2ll || '',
        m2gfbt2mc2r: req.body.m2gfbt2mc2rr || '',

        m2gfbt2mc22a: req.body.m2gfbt2mc22aa || '',
        m2gfbt2mc22l: req.body.m2gfbt2mc22ll || '',
        m2gfbt2mc22r: req.body.m2gfbt2mc22rr || '',

        m2gfbt2ma: req.body.m2gfbt2maa || '',
        m2gfbt2ml: req.body.m2gfbt2mll || '',
        m2gfbt2mr: req.body.m2gfbt2mrr || '',

        m2gfbt2pra: req.body.m2gfbt2praa || '',
        m2gfbt2prl: req.body.m2gfbt2prll || '',
        m2gfbt2prr: req.body.m2gfbt2prrr || '',

        m2gfbt2tsa: req.body.m2gfbt2tsaa || '',
        m2gfbt2tsl: req.body.m2gfbt2tsll || '',
        m2gfbt2tsr: req.body.m2gfbt2tsrr || '',

        m2gfbt4pl: req.body.m2gfbt4pll || '',
        m2gfbt4pr: req.body.m2gfbt4prr || '',

        m2gfbt4saa: req.body.m2gfbt4saaa || '',
        m2gfbt4sal: req.body.m2gfbt4sall || '',
        m2gfbt4sar: req.body.m2gfbt4sarr || '',

        m2gfbt4epa: req.body.m2gfbt4epaa || '',
        m2gfbt4epl: req.body.m2gfbt4epll || '',
        m2gfbt4epr: req.body.m2gfbt4eprr || '',

        m2gfbt4va: req.body.m2gfbt4vaa || '',
        m2gfbt4vl: req.body.m2gfbt4vll || '',
        m2gfbt4vr: req.body.m2gfbt4vrr || '',

        m2gfbt4cma: req.body.m2gfbt4cmaa || '',
        m2gfbt4cml: req.body.m2gfbt4cmll || '',
        m2gfbt4cmr: req.body.m2gfbt4cmrr || '',

        obs3: req.body.obs33 || '',


        //-------------------------------

    }
    await memaM08.findByIdAndUpdate(id, { $set: mema_M08}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M08.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM08.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M08.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM08.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M08.getAllmema_M08TypeM = async (req, res) => {
    const memam08 = await memaM08.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam08)
};

mema_M08.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM08New = {
        historyFile: req.body.historyFile || []
    }
    await memaM08.findByIdAndUpdate(id, { $set: historymemaM08New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M08.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam08 = await memaM08.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam08)
}

mema_M08.createmema_M08TypeM = async (req, res) => {
    const memam08 = new memaM08(req.body)
    
    await memam08.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M08;
