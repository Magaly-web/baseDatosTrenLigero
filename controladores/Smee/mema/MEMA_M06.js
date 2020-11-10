const memaM06 = require('../../../models/smee/mema/MEMA_M06');

const mema_M06 = {};
//Metodos
// Obtiene todos los empleados
mema_M06.getmema_M06Data = async (req, res)=>{
    const {id} = req.params;

    const memam06 = await memaM06.findById(id)
    res.json(memam06)
}

// Editar un documento
mema_M06.editmema_M06Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM06 = {
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

        rnc1l: req.body.rnc1ll || '',
        rnc1d: req.body.rnc1dd || '',
        rnc1r: req.body.rnc1rr || '',
        rnc1f: req.body.rnc1ff || '',

        rtbl: req.body.rtbll || '',
        rtbd: req.body.rtbdd || '',
        rtbr: req.body.rtbrr || '',
        rtbf: req.body.rtbff || '',

        rnc2l: req.body.rnc2ll || '',
        rnc2d: req.body.rnc2dd || '',
        rnc2r: req.body.rnc2rr || '',
        rnc2f: req.body.rnc2ff || '',

        rael: req.body.raell || '',
        raed: req.body.raedd || '',
        raer: req.body.raerr || '',
        raef: req.body.raeff || '',

        rde1l: req.body.rde1ll || '',
        rde1d: req.body.rde1dd || '',
        rde1r: req.body.rde1rr || '',
        rde1f: req.body.rde1ff || '',

        rac1l: req.body.rac1ll || '',
        rac1d: req.body.rac1dd || '',
        rac1r: req.body.rac1rr || '',
        rac1f: req.body.rac1ff || '',

        bprl: req.body.bprll || '',
        bprd: req.body.bprdd || '',
        bprr: req.body.bprrr || '',
        bprf: req.body.bprff || '',

        //Grupo revelarored 2 m1

        rfp1l: req.body.rfp1ll || '',
        rfp1r: req.body.rfp1rr || '',
        rfp1f: req.body.rfp1ff || '',

        rfp2l: req.body.rfp2ll || '',
        rfp2r: req.body.rfp2rr || '',
        rfp2f: req.body.rfp2ff || '',

        rfa1l: req.body.rfa1ll || '',
        rfa1r: req.body.rfa1rr || '',
        rfa1f: req.body.rfa1ff || '',

        rfa2l: req.body.rfa2ll || '',
        rfa2r: req.body.rfa2rr || '',
        rfa2f: req.body.rfa2ff || '',

        rmc1l: req.body.rmc1ll || '',
        rmc1r: req.body.rmc1rr || '',
        rmc1f: req.body.rmc1ff || '',

        rmc2l: req.body.rmc2ll || '',
        rmc2r: req.body.rmc2rr || '',
        rmc2f: req.body.rmc2ff || '',

        //Grupo de resistencias 
        pb: req.body.pbb || '',
        r1: req.body.r11 || '',
        r2: req.body.r22 || '',
        r3: req.body.r33 || '',
        r4: req.body.r44 || '',
        r5: req.body.r55 || '',
        r6: req.body.r66 || '',
        r7: req.body.r77 || '',
        r8: req.body.r88 || '',

        obs2: req.body.obs22 || '',

        //Arnes conectores y dispositivos M1

        c1l: req.body.c1ll || '',
        c1v: req.body.c1vv || '',
        c1t: req.body.c1tt || '',
        c1f: req.body.c1ff || '',

        c2l: req.body.c2ll || '',
        c2v: req.body.c2vv || '',
        c2t: req.body.c2tt || '',
        c2f: req.body.c2ff || '',

        c3l: req.body.c3ll || '',
        c3v: req.body.c3vv || '',
        c3t: req.body.c3tt || '',
        c3f: req.body.c3ff || '',

        c4l: req.body.c4ll || '',
        c4v: req.body.c4vv || '',
        c4t: req.body.c4tt || '',
        c4f: req.body.c4ff || '',

        c5l: req.body.c5ll || '',
        c5v: req.body.c5vv || '',
        c5t: req.body.c5tt || '',
        c5f: req.body.c5ff || '',

        c6l: req.body.c6ll || '',
        c6v: req.body.c6vv || '',
        c6t: req.body.c6tt || '',
        c6f: req.body.c6ff || '',

        c7l: req.body.c7ll || '',
        c7v: req.body.c7vv || '',
        c7t: req.body.c7tt || '',
        c7f: req.body.c7ff || '',

        bmp1l: req.body.bmp1ll || '',
        bmp1v: req.body.bmp1vv || '',
        bmp1t: req.body.bmp1tt || '',
        bmp1f: req.body.bmp1ff || '',

        bml: req.body.bmll || '',
        bmv: req.body.bmvv || '',
        bmt: req.body.bmtt || '',
        bmf: req.body.bmff || '',

        pall: req.body.palll || '',
        palv: req.body.palvv || '',
        palt: req.body.paltt || '',
        palf: req.body.palff || '',

        sapl: req.body.sapll || '',
        sapv: req.body.sapvv || '',
        sapt: req.body.saptt || '',
        sapf: req.body.sapff || '',

        ccl: req.body.ccll || '',
        ccv: req.body.ccvv || '',
        cct: req.body.cctt || '',
        ccf: req.body.ccff || '',

        cppl: req.body.cppll || '',
        cppv: req.body.cppvv || '',
        cppt: req.body.cpptt || '',
        cppf: req.body.cppff || '',

        aftl: req.body.aftll || '',
        aftv: req.body.aftvv || '',
        aftt: req.body.afttt || '',
        aftf: req.body.aftff || '',

        afpal: req.body.afpall || '',
        afpav: req.body.afpavv || '',
        afpat: req.body.afpatt || '',
        afpaf: req.body.afpaff || '',

        apl: req.body.apll || '',
        apv: req.body.apvv || '',
        apt: req.body.aptt || '',
        apf: req.body.apff || '',

        aml: req.body.amll || '',
        amv: req.body.amvv || '',
        amt: req.body.amtt || '',
        amf: req.body.amff || '',

        obs3: req.body.obs33 || '',

        //Grupo de Fusibles

        mlpa: req.body.mlpaa || '',
        mlpl: req.body.mlpll || '',
        mlpr: req.body.mlpr || '',

        rafraea: req.body.rafraeaa || '',
        rafrael: req.body.rafraell || '',
        rafraer: req.body.rafraer || '',

        omda: req.body.omdaa || '',
        omdl: req.body.omdll || '',
        omdr: req.body.omdr || '',

        ca: req.body.caa || '',
        cl: req.body.cll || '',
        cr: req.body.cr || '',

        upsa: req.body.upsaa || '',
        upsl: req.body.upsll || '',
        upsr: req.body.upsr || '',

        eca: req.body.ecaa || '',
        ecl: req.body.ecll || '',
        ecr: req.body.ecr || '',

        bsa: req.body.bsaa || '',
        bsl: req.body.bsll || '',
        bsr: req.body.bsr || '',

        obs4: req.body.obs44 || '',

        //Grupo de revelaores 1 M2

        m2rnc1l: req.body.m2rnc1ll || '',
        m2rnc1r: req.body.m2rnc1rr || '',
        m2rnc1f: req.body.m2rnc1ff || '',

        m2rtbl: req.body.m2rtbll || '',
        m2rtbr: req.body.m2rtbrr || '',
        m2rtbf: req.body.m2rtbff || '',

        m2rnc2l: req.body.m2rnc2ll || '',
        m2rnc2r: req.body.m2rnc2rr || '',
        m2rnc2f: req.body.m2rnc2ff || '',

        m2rael: req.body.m2raell || '',
        m2raer: req.body.m2raerr || '',
        m2raef: req.body.m2raeff || '',

        m2rde1l: req.body.m2rde1ll || '',
        m2rde1r: req.body.m2rde1rr || '',
        m2rde1f: req.body.m2rde1ff || '',

        m2rac1l: req.body.m2rac1ll || '',
        m2rac1r: req.body.m2rac1rr || '',
        m2rac1f: req.body.m2rac1ff || '',

        m2brl: req.body.m2brll || '',
        m2brr: req.body.m2brrr || '',
        m2brf: req.body.m2brff || '',

        //--Grupo de reveladores 2 M2

        m2rfp1l: req.body.m2rfp1ll || '',
        m2rfp1r: req.body.m2rfp1rr || '',
        m2rfp1f: req.body.m2rfp1ff || '',

        m2rfp2l: req.body.m2rfp2ll || '',
        m2rfp2r: req.body.m2rfp2rr || '',
        m2rfp2f: req.body.m2rfp2ff || '',

        m2rfa1l: req.body.m2rfa1ll || '',
        m2rfa1r: req.body.m2rfa1rr || '',
        m2rfa1f: req.body.m2rfa1ff || '',

        m2rfa2l: req.body.m2rfa2ll || '',
        m2rfa2r: req.body.m2rfa2rr || '',
        m2rfa2f: req.body.m2rfa2ff || '',

        m2rmc1l: req.body.m2rmc1ll || '',
        m2rmc1r: req.body.m2rmc1rr || '',
        m2rmc1f: req.body.m2rmc1ff || '',

        m2rmc2l: req.body.m2rmc2ll || '',
        m2rmc2r: req.body.m2rmc2rr || '',
        m2rmc2f: req.body.m2rmc2ff || '',

        //--Grupo de resistencias m2

        m2pb: req.body.m2pbb || '',
        m2r1: req.body.m2r11 || '',
        m2r2: req.body.m2r22 || '',
        m2r3: req.body.m2r33 || '',
        m2r4: req.body.m2r44 || '',
        m2r5: req.body.m2r55 || '',
        m2r6: req.body.m2r66 || '',
        m2r7: req.body.m2r77 || '',
        m2r8: req.body.m2r88 || '',

        obs5: req.body.obs55 || '',

        //Arnes conectores y dispositivos M2

        c35l: req.body.c35ll || '',
        c35v: req.body.c35vv || '',
        c35t: req.body.c35tt || '',
        c35f: req.body.c35ff || '',

        c36l: req.body.c36ll || '',
        c36v: req.body.c36vv || '',
        c36t: req.body.c36tt || '',
        c36f: req.body.c36ff || '',

        c37l: req.body.c37ll || '',
        c37v: req.body.c37vv || '',
        c37t: req.body.c37tt || '',
        c37f: req.body.c37ff || '',

        c38l: req.body.c38ll || '',
        c38v: req.body.c38vv || '',
        c38t: req.body.c38tt || '',
        c38f: req.body.c38ff || '',

        c39l: req.body.c39ll || '',
        c39v: req.body.c39vv || '',
        c39t: req.body.c39tt || '',
        c39f: req.body.c39ff || '',

        c40l: req.body.c40ll || '',
        c40v: req.body.c40vv || '',
        c40t: req.body.c40tt || '',
        c40f: req.body.c40ff || '',

        c41l: req.body.c41ll || '',
        c41v: req.body.c41vv || '',
        c41t: req.body.c41tt || '',
        c41f: req.body.c41ff || '',

        m2bmp1l: req.body.m2bmp1ll || '',
        m2bmp1v: req.body.m2bmp1vv || '',
        m2bmp1t: req.body.m2bmp1tt || '',
        m2bmp1f: req.body.m2bmp1ff || '',

        m2bml: req.body.m2bmll || '',
        m2bmv: req.body.m2bmvv || '',
        m2bmt: req.body.m2bmtt || '',
        m2bmf: req.body.m2bmff || '',

        m2pall: req.body.m2palll || '',
        m2palv: req.body.m2palvv || '',
        m2palt: req.body.m2paltt || '',
        m2palf: req.body.m2palff || '',

        m2sapl: req.body.m2sapll || '',
        m2sapv: req.body.m2sapvv || '',
        m2sapt: req.body.m2saptt || '',
        m2sapf: req.body.m2sapff || '',

        m2ccl: req.body.m2ccll || '',
        m2ccv: req.body.m2ccvv || '',
        m2cct: req.body.m2cctt || '',
        m2ccf: req.body.m2ccff || '',

        m2cppl: req.body.m2cppll || '',
        m2cppv: req.body.m2cppvv || '',
        m2cppt: req.body.m2cpptt || '',
        m2cppf: req.body.m2cppff || '',

        m2aftl: req.body.m2aftll || '',
        m2aftv: req.body.m2aftvv || '',
        m2aftt: req.body.m2afttt || '',
        m2aftf: req.body.m2aftff || '',

        m2afpal: req.body.m2afpall || '',
        m2afpav: req.body.m2afpavv || '',
        m2afpat: req.body.m2afpatt || '',
        m2afpaf: req.body.m2afpaff || '',

        m2apl: req.body.m2apll || '',
        m2apv: req.body.m2apvv || '',
        m2apt: req.body.m2aptt || '',
        m2apf: req.body.m2apff || '',

        m2aml: req.body.m2amll || '',
        m2amv: req.body.m2amvv || '',
        m2amt: req.body.m2amtt || '',
        m2amf: req.body.m2amff || '',

        obs6: req.body.obs66 || '',

         //-----Grupo de fusibles

         m2bsa: req.body.m2bsaa || '',
         m2bsl: req.body.m2bsll || '',
         m2bsr: req.body.m2bsrr || '',

         m2eca: req.body.m2ecaa || '',
         m2ecl: req.body.m2ecll || '',
         m2ecr: req.body.m2ecrr || '',

         m2upsa: req.body.m2upsaa || '',
         m2upsl: req.body.m2upsll || '',
         m2upsr: req.body.m2upsrr || '',

         m2ca: req.body.m2caa || '',
         m2cl: req.body.m2cll || '',
         m2cr: req.body.m2crr || '',

         m2omda: req.body.m2omdaa || '',
         m2omdl: req.body.m2omdll || '',
         m2omdr: req.body.m2omdrr || '',

         m2rafraea: req.body.m2rafraeaa || '',
         m2rafrael: req.body.m2rafraell || '',
         m2rafraer: req.body.m2rafraerr || '',

         m2mla: req.body.m2mlaa || '',
         m2mll: req.body.m2mlll || '',
         m2mlr: req.body.m2mlrr || '',

         obs7: req.body.obs77 || '',
        
    }
    await memaM06.findByIdAndUpdate(id, { $set: mema_M06}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M06.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM06.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M06.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM06.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M06.getAllmema_M06TypeM = async (req, res) => {
    const memam06 = await memaM06.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam06)
};

mema_M06.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM06New = {
        historyFile: req.body.historyFile || []
    }
    await memaM06.findByIdAndUpdate(id, { $set: historymemaM06New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M06.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam06 = await memaM06.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam06)
}

mema_M06.createmema_M06TypeM = async (req, res) => {
    const memam06 = new memaM06(req.body)
    
    await memam06.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M06;
