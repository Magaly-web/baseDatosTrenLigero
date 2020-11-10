
const memaM18 = require('../../../models/smee/mema/MEMA_M18');

const mema_M18 = {};
//Metodos
// Obtiene todos los empleados
mema_M18.getmema_M18Data = async (req, res)=>{
    const {id} = req.params;

    const memam18 = await memaM18.findById(id)
    res.json(memam18)
}

// Editar un documento
mema_M18.editmema_M18Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    const memaM18 = {
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
        //Cofre uef

        uefv: req.body.uefvv || '',
        uefl: req.body.uefll || '',
        uefpr: req.body.uefprr || '',
        uefpi: req.body.uefpii || '',

        crv: req.body.crvv || '',
        crl: req.body.crll || '',
        crpr: req.body.crprr || '',
        crpi: req.body.crpii || '',

        tfv: req.body.tfvv || '',
        tfl: req.body.tfll || '',
        tfpr: req.body.tfprr || '',
        tfpi: req.body.tfpii || '',

        tpv: req.body.tpvv || '',
        tpl: req.body.tpll || '',
        tppr: req.body.tpprr || '',
        tppi: req.body.tppii || '',

        tsv: req.body.tsvv || '',
        tsl: req.body.tsll || '',
        tspr: req.body.tsprr || '',
        tspi: req.body.tspii || '',

        plv: req.body.plvv || '',
        pll: req.body.plll || '',
        plpr: req.body.plprr || '',
        plpi: req.body.plpii || '',

        biv: req.body.bivv || '',
        bil: req.body.bill || '',
        bipr: req.body.biprr || '',
        bipi: req.body.bipii || '',

        pev: req.body.pevv || '',
        pel: req.body.pell || '',
        pepr: req.body.peprr || '',
        pepi: req.body.pepii || '',

        tofv: req.body.tofvv || '',
        tofl: req.body.tofll || '',
        tofpr: req.body.tofprr || '',
        tofpi: req.body.tofpii || '',

        hev: req.body.hevv || '',
        hel: req.body.hell || '',
        hepr: req.body.heprr || '',
        hepi: req.body.hepii || '',

        obs2: req.body.obs22 || '',

        //Relevadores uef
        
        rmvl: req.body.rmvll || '',
        rmvd: req.body.rmvdd || '',
        rmvr: req.body.rmvrr || '',
        rmvf: req.body.rmvff || '',

        rafl: req.body.rafll || '',
        rafd: req.body.rafdd || '',
        rafr: req.body.rafrr || '',
        raff: req.body.rafff || '',

        rcml: req.body.rcmll || '',
        rcmd: req.body.rcmdd || '',
        rcmr: req.body.rcmrr || '',
        rcmf: req.body.rcmff || '',

        r2kl: req.body.r2kll || '',
        r2kd: req.body.r2kdd || '',
        r2kr: req.body.r2krr || '',
        r2kf: req.body.r2kff || '',

        //Electronica uef

        rackl: req.body.rackll || '',
        rackiv: req.body.rackivv || '',
        rackt: req.body.racktt || '',
        rackte: req.body.racktee || '',

        epal: req.body.epall || '',
        epaiv: req.body.epaivv || '',
        epat: req.body.epatt || '',
        epate: req.body.epatee || '',

        ss1l: req.body.ss1ll || '',
        ss1iv: req.body.ss1ivv || '',
        ss1t: req.body.ss1tt || '',
        ss1te: req.body.ss1tee || '',

        svl: req.body.svll || '',
        sviv: req.body.svivv || '',
        svt: req.body.svtt || '',
        svte: req.body.svtee || '',

        adl: req.body.adll || '',
        adiv: req.body.adivv || '',
        adt: req.body.adtt || '',
        adte: req.body.adtee || '',

        ael: req.body.aell || '',
        aeiv: req.body.aeivv || '',
        aet: req.body.aett || '',
        aete: req.body.aetee || '',

        dil: req.body.dill || '',
        diiv: req.body.diivv || '',
        dit: req.body.ditt || '',
        dite: req.body.ditee || '',

        cpl: req.body.cpll || '',
        cpiv: req.body.cpivv || '',
        cpt: req.body.cptt || '',
        cpte: req.body.cptee || '',

        getl: req.body.getll || '',
        getiv: req.body.getivv || '',
        gett: req.body.gettt || '',
        gette: req.body.gettee || '',

        aal: req.body.aall || '',
        aaiv: req.body.aaivv || '',
        aat: req.body.aatt || '',
        aate: req.body.aatee || '',

        val: req.body.vall || '',
        vaiv: req.body.vaivv || '',
        vat: req.body.vatt || '',
        vate: req.body.vatee || '',

        va2l: req.body.va2ll || '',
        va2iv: req.body.va2ivv || '',
        va2t: req.body.va2tt || '',
        va2te: req.body.va2tee || '',

        tl: req.body.tll || '',
        tiv: req.body.tivv || '',
        tt: req.body.ttt || '',
        tte: req.body.ttee || '',

        //Modulos de conexion y cableado

        c64l: req.body.c64ll || '',
        c64f: req.body.c64ff || '',

        c65l: req.body.c65ll || '',
        c65f: req.body.c65ff || '',

        c66l: req.body.c66ll || '',
        c66f: req.body.c66ff || '',

        cuel: req.body.cuell || '',
        cuef: req.body.cueff || '',

        //-------------------------------

        }
        await memaM18.findByIdAndUpdate(id, { $set: mema_M18}, { new: true });
        res.json({
            status: 'Employee update'
        });

        };

        mema_M18.checkedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const checked = {
            documentFormCurrentState: req.body
        }
        await memaM18.findByIdAndUpdate(id, { $set: checked }, { new: true });
        res.json({
            status: 'worker state update'
        })
        }

        mema_M18.getStateCheckedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const state = await memaM18.findById(id, {
            "_id": 1, 
            "documentFormCurrentState": 1
        })
        res.json(state)
        }

        mema_M18.getAllmema_M18TypeM = async (req, res) => {
        const memam18 = await memaM18.find({}, {
            "_id": 1, 
            "unidad": 1, 
            "documentFormCurrentState.approvalByWorker.checked": 1, 
            "documentFormCurrentState.approvalBySupervisor.checked": 1,
            "documentFormCurrentState.approvalByMannager.checked": 1,
            "documentFormCurrentState.loading": 1
        })
        res.json(memam18)
        };

        mema_M18.addNewHistoryrecord = async (req, res) => {
        const { id } = req.params;
        const historymemaM18New = {
            historyFile: req.body.historyFile || []
        }
        await memaM18.findByIdAndUpdate(id, { $set: historymemaM18New }, { new: true });
        res.json({
            status: 'History update'
        })
        }

        mema_M18.getHistoryOF = async (req, res) => {
        const { id } = req.params;
        const memam18 = await memaM18.findById(id, {
            "_id": 0, 
            "historyFile": 1
        })
        res.json(memam18)
        }

        mema_M18.createmema_M18TypeM = async (req, res) => {
        const memam18 = new memaM18(req.body)

        await memam18.save()
        res.json({res: 'Ok'})
        };

        module.exports = mema_M18;
