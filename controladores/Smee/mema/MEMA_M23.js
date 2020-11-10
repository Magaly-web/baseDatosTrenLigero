
const memaM23 = require('../../../models/smee/mema/MEMA_M23');

const mema_M23 = {};
//Metodos
// Obtiene todos los empleados
mema_M23.getmema_M23Data = async (req, res)=>{
    const {id} = req.params;

    const memam23 = await memaM23.findById(id)
    res.json(memam23)
}

// Editar un documento
mema_M23.editmema_M23Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM23 = {
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
        //Aparatos de 24V
        cfpif: req.body.cfpiff || '',
        cfpl: req.body.cfpll || '',
        cfpcf: req.body.cfpcff || '',
        cfpcm: req.body.cfpcmm || '',
        cfpb: req.body.cfpbb || '',
        cfpr: req.body.cfprr || '',

        cfeif: req.body.cfeiff || '',
        cfel: req.body.cfell || '',
        cfecf: req.body.cfecff || '',
        cfecm: req.body.cfecmm || '',
        cfeb: req.body.cfebb || '',
        cfer: req.body.cvrr || '',

        cvif: req.body.cviff || '',
        cvl: req.body.cvll || '',
        cvcf: req.body.cvcff || '',
        cvcm: req.body.cvcmm || '',
        cvb: req.body.cvbb || '',
        cvr: req.body.cvrr || '',

        cfsif: req.body.cfsiff || '',
        cfsl: req.body.cfsll || '',
        cfscf: req.body.cfscff || '',
        cfscm: req.body.cfscmm || '',
        cfsb: req.body.cfsbb || '',
        cfsr: req.body.cfsrr || '',

        catif: req.body.catiff || '',
        catl: req.body.catll || '',
        catcf: req.body.catcff || '',
        catcm: req.body.catcmm || '',
        catb: req.body.catbb || '',
        catr: req.body.catrr || '',

        cmeif: req.body.cmeiff || '',
        cmel: req.body.cmell || '',
        cmecf: req.body.cmecff || '',
        cmecm: req.body.cmecmm || '',
        cmeb: req.body.cmebb || '',
        cmer: req.body.cmerr || '',

        rco1if: req.body.rco1iff || '',
        rco1l: req.body.rco1ll || '',
        rco1cf: req.body.rco1cff || '',
        rco1cm: req.body.rco1cmm || '',
        rco1b: req.body.rco1bb || '',
        rco1r: req.body.rco1rr || '',

        rco2if: req.body.rco2iff || '',
        rco2l: req.body.rco2ll || '',
        rco2cf: req.body.rco2cff || '',
        rco2cm: req.body.rco2cmm || '',
        rco2b: req.body.rco2bb || '',
        rco2r: req.body.rco2rr || '',

        radif: req.body.radiff || '',
        radl: req.body.radll || '',
        radcf: req.body.radcff || '',
        radcm: req.body.radcmm || '',
        radb: req.body.radbb || '',
        radr: req.body.radrr || '',

        ratif: req.body.ratiff || '',
        ratl: req.body.ratll || '',
        ratcf: req.body.ratcff || '',
        ratcm: req.body.ratcmm || '',
        ratb: req.body.ratbb || '',
        ratr: req.body.ratrr || '',

        gstfif: req.body.gstfiff || '',
        gstfl: req.body.gstfll || '',
        gstfcf: req.body.gstfcff || '',
        gstfcm: req.body.gstfcmm || '',
        gstfb: req.body.gstfbb || '',
        gstfr: req.body.gstfrr || '',

        obs2: req.body.obs22 || '',
        
        //Aparatos de 220 V

        et1vif: req.body.et1viff || '',
        et1vl: req.body.et1vll || '',
        et1vcf: req.body.et1vcff || '',
        et1vcm: req.body.et1vcmm || '',
        et1vb: req.body.et1vbb || '',
        et1vr: req.body.et1vrr || '',

        et2vif: req.body.et2viff || '',
        et2vl: req.body.et2vll || '',
        et2vcf: req.body.et2vcff || '',
        et2vcm: req.body.et2vcmm || '',
        et2vb: req.body.et2vbb || '',
        et2vr: req.body.et2vrr || '',

        cv1if: req.body.cv1iff || '',
        cv1l: req.body.cv1ll || '',
        cv1cf: req.body.cv1cff || '',
        cv1cm: req.body.cv1cmm || '',
        cv1b: req.body.cv1bb || '',
        cv1r: req.body.cv1rr || '',

        cv2if: req.body.cv2iff || '',
        cv2l: req.body.cv2ll || '',
        cv2cf: req.body.cv2cff || '',
        cv2cm: req.body.cv2cmm || '',
        cv2b: req.body.cv2bb || '',
        cv2r: req.body.cv2rr || '',

        cvtif: req.body.cvtiff || '',
        cvtl: req.body.cvtll || '',
        cvtcf: req.body.cvtcff || '',
        cvtcm: req.body.cvtcmm || '',
        cvtb: req.body.cvtbb || '',
        cvtr: req.body.cvtrr || '',

        rt1if: req.body.rt1iff || '',
        rt1l: req.body.rt1ll || '',
        rt1cf: req.body.rt1cff || '',
        rt1cm: req.body.rt1cmm || '',
        rt1b: req.body.rt1bb || '',
        rt1r: req.body.rt1rr || '',

        //Aparatos de Precarga

        dpfif: req.body.dpfiff || '',
        dpfl: req.body.dpfll || '',
        dpfcf: req.body.dpfcff || '',
        dpfcm: req.body.dpfcmm || '',
        dpfb: req.body.dpfbb || '',
        dpfr: req.body.dpfrr || '',

        tvlif: req.body.tvliff || '',
        tvll: req.body.tvlll || '',
        tvlcf: req.body.tvlcff || '',
        tvlcm: req.body.tvlcmm || '',
        tvlb: req.body.tvlbb || '',
        tvlr: req.body.tvlrr || '',

        cpcif: req.body.cpciff || '',
        cpcl: req.body.cpcll || '',
        cpccf: req.body.cpccff || '',
        cpccm: req.body.cpccmm || '',
        cpcb: req.body.cpcbb || '',
        cpcr: req.body.cpcrr || '',

        fus1if: req.body.fus1iff || '',
        fus1l: req.body.fus1ll || '',
        fus1cf: req.body.fus1cff || '',
        fus1cm: req.body.fus1cmm || '',
        fus1b: req.body.fus1bb || '',
        fus1r: req.body.fus1rr || '',

        fus2if: req.body.fus2iff || '',
        fus2l: req.body.fus2ll || '',
        fus2cf: req.body.fus2cff || '',
        fus2cm: req.body.fus2cmm || '',
        fus2b: req.body.fus2bb || '',
        fus2r: req.body.fus2rr || '',

        fus3if: req.body.fus3iff || '',
        fus3l: req.body.fus3ll || '',
        fus3cf: req.body.fus3cff || '',
        fus3cm: req.body.fus3cmm || '',
        fus3b: req.body.fus3bb || '',
        fus3r: req.body.fus3rr || '',

        //Transductores

        tcfif: req.body.tcfiff || '',
        tcfl: req.body.tcfll || '',
        tcfr: req.body.tcfrr || '',

        tcm1if: req.body.tcm1iff || '',
        tcm1l: req.body.tcm1ll || '',
        tcm1r: req.body.tcm1rr || '',

        tcm2if: req.body.tcm2iff || '',
        tcm2l: req.body.tcm2ll || '',
        tcm2r: req.body.tcm2rr || '',

        tvm1if: req.body.tvm1iff || '',
        tvm1l: req.body.tvm1ll || '',
        tvm1r: req.body.tvm1rr || '',

        tvm2if: req.body.tvm2iff || '',
        tvm2l: req.body.tvm2ll || '',
        tvm2r: req.body.tvm2rr || '',

        cutif: req.body.cutiff || '',
        cutl: req.body.cutll || '',
        cutr: req.body.cutrr || '',

        tvcif: req.body.tvciff || '',
        tvcl: req.body.tvcll || '',
        tvcr: req.body.tvcrr || '',

        obs3: req.body.obs33 || '',

        //Aparatos de precarga

        cf1if: req.body.cf1iff || '',
        cf1l: req.body.cf1ll || '',
        cf1r: req.body.cf1rr || '',
        cf1p: req.body.cf1pp || '',

        cf2if: req.body.cf2iff || '',
        cf2l: req.body.cf2ll || '',
        cf2r: req.body.cf2rr || '',
        cf2p: req.body.cf2pp || '',

        cf3if: req.body.cf3iff || '',
        cf3l: req.body.cf3ll || '',
        cf3r: req.body.cf3rr || '',
        cf3p: req.body.cf3pp || '',

        cf4if: req.body.cf4iff || '',
        cf4l: req.body.cf4ll || '',
        cf4r: req.body.cf4rr || '',
        cf4p: req.body.cf4pp || '',

        cf5if: req.body.cf5iff || '',
        cf5l: req.body.cf5ll || '',
        cf5r: req.body.cf5rr || '',
        cf5p: req.body.cf5pp || '',

        cf6if: req.body.cf6iff || '',
        cf6l: req.body.cf6ll || '',
        cf6r: req.body.cf6rr || '',
        cf6p: req.body.cf6pp || '',

        rpfif: req.body.rpfiff || '',
        rpfl: req.body.rpfll || '',
        rpfr: req.body.rpfrr || '',
        rpfp: req.body.rpfpp || '',

        rdf1if: req.body.rdf1iff || '',
        rdf1l: req.body.rdf1ll || '',
        rdf1r: req.body.rdf1rr || '',
        rdf1p: req.body.rdf1pp || '',

        rdf2if: req.body.rdf2iff || '',
        rdf2l: req.body.rdf2ll || '',
        rdf2r: req.body.rdf2rr || '',
        rdf2p: req.body.rdf2pp || '',

        iffif: req.body.iffiff || '',
        iffl: req.body.iffll || '',
        iffr: req.body.iffrr || '',
        iffp: req.body.iffpp || '',

        flif: req.body.fliff || '',
        fll: req.body.flll || '',
        flr: req.body.flrr || '',
        flp: req.body.flpp || '',

        obs4: req.body.obs44 || '',

        //Aparatos para disyuntor

        cde1if: req.body.cde1iff || '',
        cde1l: req.body.cde1ll || '',
        cde1cf: req.body.cde1cff || '',
        cde1cm: req.body.cde1cmm || '',
        cde1b: req.body.cde1bb || '',
        cde1r: req.body.cde1rr || '',

        cde3if: req.body.cde3iff || '',
        cde3l: req.body.cde3ll || '',
        cde3cf: req.body.cde3cff || '',
        cde3cm: req.body.cde3cmm || '',
        cde3b: req.body.cde3bb || '',
        cde3r: req.body.cde3rr || '',

        cde2if: req.body.cde2iff || '',
        cde2l: req.body.cde2ll || '',
        cde2cf: req.body.cde2cff || '',
        cde2cm: req.body.cde2cmm || '',
        cde2b: req.body.cde2bb || '',
        cde2r: req.body.cde2rr || '',

        rtde1if: req.body.rtde1iff || '',
        rtde1l: req.body.rtde1ll || '',
        rtde1cf: req.body.rtde1cff || '',
        rtde1cm: req.body.rtde1cmm || '',
        rtde1b: req.body.rtde1bb || '',
        rtde1r: req.body.rtde1rr || '',

        rtde2if: req.body.rtde2iff || '',
        rtde2l: req.body.rtde2ll || '',
        rtde2cf: req.body.rtde2cff || '',
        rtde2cm: req.body.rtde2cmm || '',
        rtde2b: req.body.rtde2bb || '',
        rtde2r: req.body.rtde2rr || '',

        obs5: req.body.obs55 || '',

        //Circuito Principal de contactores BMS

        picrf1: req.body.picrf11 || '',
        picrf2: req.body.picrf22 || '',
        picrf3: req.body.picrf33 || '',
        pict1: req.body.pict11 || '',
        pict2: req.body.pict22 || '',
        pict3: req.body.pict33 || '',
        picc1: req.body.picc11 || '',
        picc2: req.body.picc22 || '',
        picc3: req.body.picc33 || '',
        picp1: req.body.picp11 || '',
        picp2: req.body.picp22 || '',
        picp3: req.body.picp33 || '',

        pdcrf1: req.body.pdcrf11 || '',
        pdcrf2: req.body.pdcrf22 || '',
        pdcrf3: req.body.pdcrf33 || '',
        pdct1: req.body.pdct11 || '',
        pdct2: req.body.pdct22 || '',
        pdct3: req.body.pdct33 || '',
        pdcc1: req.body.pdcc11 || '',
        pdcc2: req.body.pdcc22 || '',
        pdcc3: req.body.pdcc33 || '',
        pdcp1: req.body.pdcp11 || '',
        pdcp2: req.body.pdcp22 || '',
        pdcp3: req.body.pdcp33 || '',

        mrcrf1: req.body.mrcrf11 || '',
        mrcrf2: req.body.mrcrf22 || '',
        mrcrf3: req.body.mrcrf33 || '',
        mrct1: req.body.mrct11 || '',
        mrct2: req.body.mrct22 || '',
        mrct3: req.body.mrct33 || '',
        mrcc1: req.body.mrcc11 || '',
        mrcc2: req.body.mrcc22 || '',
        mrcc3: req.body.mrcc33 || '',
        mrcp1: req.body.mrcp11 || '',
        mrcp2: req.body.mrcp22 || '',
        mrcp3: req.body.mrcp33 || '',

        pecrf1: req.body.pecrf11 || '',
        pecrf2: req.body.pecrf22 || '',
        pecrf3: req.body.pecrf33 || '',
        pect1: req.body.pect11 || '',
        pect2: req.body.pect22 || '',
        pect3: req.body.pect33 || '',
        pecc1: req.body.pecc11 || '',
        pecc2: req.body.pecc22 || '',
        pecc3: req.body.pecc33 || '',
        pecp1: req.body.pecp11 || '',
        pecp2: req.body.pecp22 || '',
        pecp3: req.body.pecp33 || '',

        ticrf1: req.body.ticrf11 || '',
        ticrf2: req.body.ticrf22 || '',
        ticrf3: req.body.ticrf33 || '',
        tict1: req.body.tict11 || '',
        tict2: req.body.tict22 || '',
        tict3: req.body.tict33 || '',
        ticc1: req.body.ticc11 || '',
        ticc2: req.body.ticc22 || '',
        ticc3: req.body.ticc33 || '',
        ticp1: req.body.ticp11 || '',
        ticp2: req.body.ticp22 || '',
        ticp3: req.body.ticp33 || '',

        tscrf1: req.body.tscrf11 || '',
        tscrf2: req.body.tscrf22 || '',
        tscrf3: req.body.tscrf33 || '',
        tsct1: req.body.tsct11 || '',
        tsct2: req.body.tsct22 || '',
        tsct3: req.body.tsct33 || '',
        tscc1: req.body.tscc11 || '',
        tscc2: req.body.tscc22 || '',
        tscc3: req.body.tscc33 || '',
        tscp1: req.body.tscp11 || '',
        tscp2: req.body.tscp22 || '',
        tscp3: req.body.tscp33 || '',
        
        macrf1: req.body.macrf11 || '',
        macrf2: req.body.macrf22 || '',
        macrf3: req.body.macrf33 || '',
        mact1: req.body.mact11 || '',
        mact2: req.body.mact22 || '',
        mact3: req.body.mact33 || '',
        macc1: req.body.macc11 || '',
        macc2: req.body.macc22 || '',
        macc3: req.body.macc33 || '',
        macp1: req.body.macp11 || '',
        macp2: req.body.macp22 || '',
        macp3: req.body.macp33 || '',

        pescrf1: req.body.pescrf11 || '',
        pescrf2: req.body.pescrf22 || '',
        pescrf3: req.body.pescrf33 || '',
        pesct1: req.body.pesct11 || '',
        pesct2: req.body.pesct22 || '',
        pesct3: req.body.pesct33 || '',
        pescc1: req.body.pescc11 || '',
        pescc2: req.body.pescc22 || '',
        pescc3: req.body.pescc33 || '',
        pescp1: req.body.pescp11 || '',
        pescp2: req.body.pescp22 || '',
        pescp3: req.body.pescp33 || '',

        mpcrf1: req.body.mpcrf11 || '',
        mpcrf2: req.body.mpcrf22 || '',
        mpcrf3: req.body.mpcrf33 || '',
        mpct1: req.body.mpct11 || '',
        mpct2: req.body.mpct22 || '',
        mpct3: req.body.mpct33 || '',
        mpcc1: req.body.mpcc11 || '',
        mpcc2: req.body.mpcc22 || '',
        mpcc3: req.body.mpcc33 || '',
        mpcp1: req.body.mpcp11 || '',
        mpcp2: req.body.mpcp22 || '',
        mpcp3: req.body.mpcp33 || '',

        mpecrf1: req.body.mpecrf11 || '',
        mpecrf2: req.body.mpecrf22 || '',
        mpecrf3: req.body.mpecrf33 || '',
        mpect1: req.body.mpect11 || '',
        mpect2: req.body.mpect22 || '',
        mpect3: req.body.mpect33 || '',
        mpecc1: req.body.mpecc11 || '',
        mpecc2: req.body.mpecc22 || '',
        mpecc3: req.body.mpecc33 || '',
        mpecp1: req.body.mpecp11 || '',
        mpecp2: req.body.mpecp22 || '',
        mpecp3: req.body.mpecp33 || '',

        aicrf1: req.body.aicrf11 || '',
        aicrf2: req.body.aicrf22 || '',
        aicrf3: req.body.aicrf33 || '',
        aict1: req.body.aict11 || '',
        aict2: req.body.aict22 || '',
        aict3: req.body.aict33 || '',
        aicc1: req.body.aicc11 || '',
        aicc2: req.body.aicc22 || '',
        aicc3: req.body.aicc33 || '',
        aicp1: req.body.aicp11 || '',
        aicp2: req.body.aicp22 || '',
        aicp3: req.body.aicp33 || '',

        mplcrf1: req.body.mplcrf11 || '',
        mplcrf2: req.body.mplcrf22 || '',
        mplcrf3: req.body.mplcrf33 || '',
        mplct1: req.body.mplct11 || '',
        mplct2: req.body.mplct22 || '',
        mplct3: req.body.mplct33 || '',
        mplcc1: req.body.mplcc11 || '',
        mplcc2: req.body.mplcc22 || '',
        mplcc3: req.body.mplcc33 || '',
        mplcp1: req.body.mplcp11 || '',
        mplcp2: req.body.mplcp22 || '',
        mplcp3: req.body.mplcp33 || '',

        cocrf1: req.body.cocrf11 || '',
        cocrf2: req.body.cocrf22 || '',
        cocrf3: req.body.cocrf33 || '',
        coct1: req.body.coct11 || '',
        coct2: req.body.coct22 || '',
        coct3: req.body.coct33 || '',
        cocc1: req.body.cocc11 || '',
        cocc2: req.body.cocc22 || '',
        cocc3: req.body.cocc33 || '',
        cocp1: req.body.cocp11 || '',
        cocp2: req.body.cocp22 || '',
        cocp3: req.body.cocp33 || '',

        cpcrf1: req.body.cpcrf11 || '',
        cpcrf2: req.body.cpcrf22 || '',
        cpcrf3: req.body.cpcrf33 || '',
        cpct1: req.body.cpct11 || '',
        cpct2: req.body.cpct22 || '',
        cpct3: req.body.cpct33 || '',
        cpcc1: req.body.cpcc11 || '',
        cpcc2: req.body.cpcc22 || '',
        cpcc3: req.body.cpcc33 || '',
        cpcp1: req.body.cpcp11 || '',
        cpcp2: req.body.cpcp22 || '',
        cpcp3: req.body.cpcp33 || '',

        pccrf1: req.body.pccrf11 || '',
        pccrf2: req.body.pccrf22 || '',
        pccrf3: req.body.pccrf33 || '',
        pcct1: req.body.pcct11 || '',
        pcct2: req.body.pcct22 || '',
        pcct3: req.body.pcct33 || '',
        pccc1: req.body.pccc11 || '',
        pccc2: req.body.pccc22 || '',
        pccc3: req.body.pccc33 || '',
        pccp1: req.body.pccp11 || '',
        pccp2: req.body.pccp22 || '',
        pccp3: req.body.pccp33 || '',

        m4crf1: req.body.m4crf11 || '',
        m4crf2: req.body.m4crf22 || '',
        m4crf3: req.body.m4crf33 || '',
        m4ct1: req.body.m4ct11 || '',
        m4ct2: req.body.m4ct22 || '',
        m4ct3: req.body.m4ct33 || '',
        m4cc1: req.body.m4cc11 || '',
        m4cc2: req.body.m4cc22 || '',
        m4cc3: req.body.m4cc33 || '',
        m4cp1: req.body.m4cp11 || '',
        m4cp2: req.body.m4cp22 || '',
        m4cp3: req.body.m4cp33 || '',

        apecrf1: req.body.apecrf11 || '',
        apecrf2: req.body.apecrf22 || '',
        apecrf3: req.body.apecrf33 || '',
        apect1: req.body.apect11 || '',
        apect2: req.body.apect22 || '',
        apect3: req.body.apect33 || '',
        apecc1: req.body.apecc11 || '',
        apecc2: req.body.apecc22 || '',
        apecc3: req.body.apecc33 || '',
        apecp1: req.body.apecp11 || '',
        apecp2: req.body.apecp22 || '',
        apecp3: req.body.apecp33 || '',

        cacrf1: req.body.cacrf11 || '',
        cacrf2: req.body.cacrf22 || '',
        cacrf3: req.body.cacrf33 || '',
        cact1: req.body.cact11 || '',
        cact2: req.body.cact22 || '',
        cact3: req.body.cact33 || '',
        cacc1: req.body.cacc11 || '',
        cacc2: req.body.cacc22 || '',
        cacc3: req.body.cacc33 || '',
        cacp1: req.body.cacp11 || '',
        cacp2: req.body.cacp22 || '',
        cacp3: req.body.cacp33 || '',

        ppcrf1: req.body.ppcrf11 || '',
        ppcrf2: req.body.ppcrf22 || '',
        ppcrf3: req.body.ppcrf33 || '',
        ppct1: req.body.ppct11 || '',
        ppct2: req.body.ppct22 || '',
        ppct3: req.body.ppct33 || '',
        ppcc1: req.body.ppcc11 || '',
        ppcc2: req.body.ppcc22 || '',
        ppcc3: req.body.ppcc33 || '',
        ppcp1: req.body.ppcp11 || '',
        ppcp2: req.body.ppcp22 || '',
        ppcp3: req.body.ppcp33 || '',

        ppecrf1: req.body.ppecrf11 || '',
        ppecrf2: req.body.ppecrf22 || '',
        ppecrf3: req.body.ppecrf33 || '',
        ppect1: req.body.ppect11 || '',
        ppect2: req.body.ppect22 || '',
        ppect3: req.body.ppect33 || '',
        ppecc1: req.body.ppecc11 || '',
        ppecc2: req.body.ppecc22 || '',
        ppecc3: req.body.ppecc33 || '',
        ppecp1: req.body.ppecp11 || '',
        ppecp2: req.body.ppecp22 || '',
        ppecp3: req.body.ppecp33 || '',

        obs6: req.body.obs66 || '',

        //Dispositivos de cierre de contactore BMS

        a2302crf1: req.body.a2302crf11 || '',
        a2302crf2: req.body.a2302crf22 || '',
        a2302crf3: req.body.a2302crf33 || '',
        a2302ct1: req.body.a2302ct11 || '',
        a2302ct2: req.body.a2302ct22 || '',
        a2302ct3: req.body.a2302ct33 || '',
        a2302cc1: req.body.a2302cc11 || '',
        a2302cc2: req.body.a2302cc22 || '',
        a2302cc3: req.body.a2302cc33 || '',
        a2302cp1: req.body.a2302cp11 || '',
        a2302cp2: req.body.a2302cp22 || '',
        a2302cp3: req.body.a2302cp33 || '',

        p2303crf1: req.body.p2303crf11 || '',
        p2303crf2: req.body.p2303crf22 || '',
        p2303crf3: req.body.p2303crf33 || '',
        p2303ct1: req.body.p2303ct11 || '',
        p2303ct2: req.body.p2303ct22 || '',
        p2303ct3: req.body.p2303ct33 || '',
        p2303cc1: req.body.p2303cc11 || '',
        p2303cc2: req.body.p2303cc22 || '',
        p2303cc3: req.body.p2303cc33 || '',
        p2303cp1: req.body.p2303cp11 || '',
        p2303cp2: req.body.p2303cp22 || '',
        p2303cp3: req.body.p2303cp33 || '',

        p2305crf1: req.body.p2305crf11 || '',
        p2305crf2: req.body.p2305crf22 || '',
        p2305crf3: req.body.p2305crf33 || '',
        p2305ct1: req.body.p2305ct11 || '',
        p2305ct2: req.body.p2305ct22 || '',
        p2305ct3: req.body.p2305ct33 || '',
        p2305cc1: req.body.p2305cc11 || '',
        p2305cc2: req.body.p2305cc22 || '',
        p2305cc3: req.body.p2305cc33 || '',
        p2305cp1: req.body.p2305cp11 || '',
        p2305cp2: req.body.p2305cp22 || '',
        p2305cp3: req.body.p2305cp33 || '',

        a2307crf1: req.body.a2307crf11 || '',
        a2307crf2: req.body.a2307crf22 || '',
        a2307crf3: req.body.a2307crf33 || '',
        a2307ct1: req.body.a2307ct11 || '',
        a2307ct2: req.body.a2307ct22 || '',
        a2307ct3: req.body.a2307ct33 || '',
        a2307cc1: req.body.a2307cc11 || '',
        a2307cc2: req.body.a2307cc22 || '',
        a2307cc3: req.body.a2307cc33 || '',
        a2307cp1: req.body.a2307cp11 || '',
        a2307cp2: req.body.a2307cp22 || '',
        a2307cp3: req.body.a2307cp33 || '',

        b2308crf1: req.body.b2308crf11 || '',
        b2308crf2: req.body.b2308crf22 || '',
        b2308crf3: req.body.b2308crf33 || '',
        b2308ct1: req.body.b2308ct11 || '',
        b2308ct2: req.body.b2308ct22 || '',
        b2308ct3: req.body.b2308ct33 || '',
        b2308cc1: req.body.b2308cc11 || '',
        b2308cc2: req.body.b2308cc22 || '',
        b2308cc3: req.body.b2308cc33 || '',
        b2308cp1: req.body.b2308cp11 || '',
        b2308cp2: req.body.b2308cp22 || '',
        b2308cp3: req.body.b2308cp33 || '',

        v2309crf1: req.body.v2309crf11 || '',
        v2309crf2: req.body.v2309crf22 || '',
        v2309crf3: req.body.v2309crf33 || '',
        v2309ct1: req.body.v2309ct11 || '',
        v2309ct2: req.body.v2309ct22 || '',
        v2309ct3: req.body.v2309ct33 || '',
        v2309cc1: req.body.v2309cc11 || '',
        v2309cc2: req.body.v2309cc22 || '',
        v2309cc3: req.body.v2309cc33 || '',
        v2309cp1: req.body.v2309cp11 || '',
        v2309cp2: req.body.v2309cp22 || '',
        v2309cp3: req.body.v2309cp33 || '',

        p2310crf1: req.body.p2310crf11 || '',
        p2310crf2: req.body.p2310crf22 || '',
        p2310crf3: req.body.p2310crf33 || '',
        p2310ct1: req.body.p2310ct11 || '',
        p2310ct2: req.body.p2310ct22 || '',
        p2310ct3: req.body.p2310ct33 || '',
        p2310cc1: req.body.p2310cc11 || '',
        p2310cc2: req.body.p2310cc22 || '',
        p2310cc3: req.body.p2310cc33 || '',
        p2310cp1: req.body.p2310cp11 || '',
        p2310cp2: req.body.p2310cp22 || '',
        p2310cp3: req.body.p2310cp33 || '',

        c2322crf1: req.body.c2322crf11 || '',
        c2322crf2: req.body.c2322crf22 || '',
        c2322crf3: req.body.c2322crf33 || '',
        c2322ct1: req.body.c2322ct11 || '',
        c2322ct2: req.body.c2322ct22 || '',
        c2322ct3: req.body.c2322ct33 || '',
        c2322cc1: req.body.c2322cc11 || '',
        c2322cc2: req.body.c2322cc22 || '',
        c2322cc3: req.body.c2322cc33 || '',
        c2322cp1: req.body.c2322cp11 || '',
        c2322cp2: req.body.c2322cp22 || '',
        c2322cp3: req.body.c2322cp33 || '',

        m2323crf1: req.body.m2323crf11 || '',
        m2323crf2: req.body.m2323crf22 || '',
        m2323crf3: req.body.m2323crf33 || '',
        m2323ct1: req.body.m2323ct11 || '',
        m2323ct2: req.body.m2323ct22 || '',
        m2323ct3: req.body.m2323ct33 || '',
        m2323cc1: req.body.m2323cc11 || '',
        m2323cc2: req.body.m2323cc22 || '',
        m2323cc3: req.body.m2323cc33 || '',
        m2323cp1: req.body.m2323cp11 || '',
        m2323cp2: req.body.m2323cp22 || '',
        m2323cp3: req.body.m2323cp33 || '',

        c2324crf1: req.body.c2324crf11 || '',
        c2324crf2: req.body.c2324crf22 || '',
        c2324crf3: req.body.c2324crf33 || '',
        c2324ct1: req.body.c2324ct11 || '',
        c2324ct2: req.body.c2324ct22 || '',
        c2324ct3: req.body.c2324ct33 || '',
        c2324cc1: req.body.c2324cc11 || '',
        c2324cc2: req.body.c2324cc22 || '',
        c2324cc3: req.body.c2324cc33 || '',
        c2324cp1: req.body.c2324cp11 || '',
        c2324cp2: req.body.c2324cp22 || '',
        c2324cp3: req.body.c2324cp33 || '',

        //Dispositivos de control de contactores

        n3004crf1: req.body.n3004crf11 || '',
        n3004crf2: req.body.n3004crf22 || '',
        n3004crf3: req.body.n3004crf33 || '',
        n3004ct1: req.body.n3004ct11 || '',
        n3004ct2: req.body.n3004ct22 || '',
        n3004ct3: req.body.n3004ct33 || '',
        n3004cc1: req.body.n3004cc11 || '',
        n3004cc2: req.body.n3004cc22 || '',
        n3004cc3: req.body.n3004cc33 || '',
        n3004cp1: req.body.n3004cp11 || '',
        n3004cp2: req.body.n3004cp22 || '',
        n3004cp3: req.body.n3004cp33 || '',

        v3007crf1: req.body.v3007crf11 || '',
        v3007crf2: req.body.v3007crf22 || '',
        v3007crf3: req.body.v3007crf33 || '',
        v3007ct1: req.body.v3007ct11 || '',
        v3007ct2: req.body.v3007ct22 || '',
        v3007ct3: req.body.v3007ct33 || '',
        v3007cc1: req.body.v3007cc11 || '',
        v3007cc2: req.body.v3007cc22 || '',
        v3007cc3: req.body.v3007cc33 || '',
        v3007cp1: req.body.v3007cp11 || '',
        v3007cp2: req.body.v3007cp22 || '',
        v3007cp3: req.body.v3007cp33 || '',

        t3048crf1: req.body.t3048crf11 || '',
        t3048crf2: req.body.t3048crf22 || '',
        t3048crf3: req.body.t3048crf33 || '',
        t3048ct1: req.body.t3048ct11 || '',
        t3048ct2: req.body.t3048ct22 || '',
        t3048ct3: req.body.t3048ct33 || '',
        t3048cc1: req.body.t3048cc11 || '',
        t3048cc2: req.body.t3048cc22 || '',
        t3048cc3: req.body.t3048cc33 || '',
        t3048cp1: req.body.t3048cp11 || '',
        t3048cp2: req.body.t3048cp22 || '',
        t3048cp3: req.body.t3048cp33 || '',

        a3058crf1: req.body.a3058crf11 || '',
        a3058crf2: req.body.a3058crf22 || '',
        a3058crf3: req.body.a3058crf33 || '',
        a3058ct1: req.body.a3058ct11 || '',
        a3058ct2: req.body.a3058ct22 || '',
        a3058ct3: req.body.a3058ct33 || '',
        a3058cc1: req.body.a3058cc11 || '',
        a3058cc2: req.body.a3058cc22 || '',
        a3058cc3: req.body.a3058cc33 || '',
        a3058cp1: req.body.a3058cp11 || '',
        a3058cp2: req.body.a3058cp22 || '',
        a3058cp3: req.body.a3058cp33 || '',

        n3090crf1: req.body.n3090crf11 || '',
        n3090crf2: req.body.n3090crf22 || '',
        n3090crf3: req.body.n3090crf33 || '',
        n3090ct1: req.body.n3090ct11 || '',
        n3090ct2: req.body.n3090ct22 || '',
        n3090ct3: req.body.n3090ct33 || '',
        n3090cc1: req.body.n3090cc11 || '',
        n3090cc2: req.body.n3090cc22 || '',
        n3090cc3: req.body.n3090cc33 || '',
        n3090cp1: req.body.n3090cp11 || '',
        n3090cp2: req.body.n3090cp22 || '',
        n3090cp3: req.body.n3090cp33 || '',

        m3201crf1: req.body.m3201crf11 || '',
        m3201crf2: req.body.m3201crf22 || '',
        m3201crf3: req.body.m3201crf33 || '',
        m3201ct1: req.body.m3201ct11 || '',
        m3201ct2: req.body.m3201ct22 || '',
        m3201ct3: req.body.m3201ct33 || '',
        m3201cc1: req.body.m3201cc11 || '',
        m3201cc2: req.body.m3201cc22 || '',
        m3201cc3: req.body.m3201cc33 || '',
        m3201cp1: req.body.m3201cp11 || '',
        m3201cp2: req.body.m3201cp22 || '',
        m3201cp3: req.body.m3201cp33 || '',

        b3202crf1: req.body.b3202crf11 || '',
        b3202crf2: req.body.b3202crf22 || '',
        b3202crf3: req.body.b3202crf33 || '',
        b3202ct1: req.body.b3202ct11 || '',
        b3202ct2: req.body.b3202ct22 || '',
        b3202ct3: req.body.b3202ct33 || '',
        b3202cc1: req.body.b3202cc11 || '',
        b3202cc2: req.body.b3202cc22 || '',
        b3202cc3: req.body.b3202cc33 || '',
        b3202cp1: req.body.b3202cp11 || '',
        b3202cp2: req.body.b3202cp22 || '',
        b3202cp3: req.body.b3202cp33 || '',

        a3203crf1: req.body.a3203crf11 || '',
        a3203crf2: req.body.a3203crf22 || '',
        a3203crf3: req.body.a3203crf33 || '',
        a3203ct1: req.body.a3203ct11 || '',
        a3203ct2: req.body.a3203ct22 || '',
        a3203ct3: req.body.a3203ct33 || '',
        a3203cc1: req.body.a3203cc11 || '',
        a3203cc2: req.body.a3203cc22 || '',
        a3203cc3: req.body.a3203cc33 || '',
        a3203cp1: req.body.a3203cp11 || '',
        a3203cp2: req.body.a3203cp22 || '',
        a3203cp3: req.body.a3203cp33 || '',

        g3204crf1: req.body.g3204crf11 || '',
        g3204crf2: req.body.g3204crf22 || '',
        g3204crf3: req.body.g3204crf33 || '',
        g3204ct1: req.body.g3204ct11 || '',
        g3204ct2: req.body.g3204ct22 || '',
        g3204ct3: req.body.g3204ct33 || '',
        g3204cc1: req.body.g3204cc11 || '',
        g3204cc2: req.body.g3204cc22 || '',
        g3204cc3: req.body.g3204cc33 || '',
        g3204cp1: req.body.g3204cp11 || '',
        g3204cp2: req.body.g3204cp22 || '',
        g3204cp3: req.body.g3204cp33 || '',

        e3205crf1: req.body.e3205crf11 || '',
        e3205crf2: req.body.e3205crf22 || '',
        e3205crf3: req.body.e3205crf33 || '',
        e3205ct1: req.body.e3205ct11 || '',
        e3205ct2: req.body.e3205ct22 || '',
        e3205ct3: req.body.e3205ct33 || '',
        e3205cc1: req.body.e3205cc11 || '',
        e3205cc2: req.body.e3205cc22 || '',
        e3205cc3: req.body.e3205cc33 || '',
        e3205cp1: req.body.e3205cp11 || '',
        e3205cp2: req.body.e3205cp22 || '',
        e3205cp3: req.body.e3205cp33 || '',

        obs7: req.body.obs77 || '',

        //Contacto Auxiliar de contactores

        ca1crf1: req.body.ca1crf11 || '',
        ca1crf2: req.body.ca1crf22 || '',
        ca1crf3: req.body.ca1crf33 || '',
        ca1ct1: req.body.ca1ct11 || '',
        ca1ct2: req.body.ca1ct22 || '',
        ca1ct3: req.body.ca1ct33 || '',
        ca1cc1: req.body.ca1cc11 || '',
        ca1cc2: req.body.ca1cc22 || '',
        ca1cc3: req.body.ca1cc33 || '',
        ca1cp1: req.body.ca1cp11 || '',
        ca1cp2: req.body.ca1cp22 || '',
        ca1cp3: req.body.ca1cp33 || '',

        ca2crf1: req.body.ca2crf11 || '',
        ca2crf2: req.body.ca2crf22 || '',
        ca2crf3: req.body.ca2crf33 || '',
        ca2ct1: req.body.ca2ct11 || '',
        ca2ct2: req.body.ca2ct22 || '',
        ca2ct3: req.body.ca2ct33 || '',
        ca2cc1: req.body.ca2cc11 || '',
        ca2cc2: req.body.ca2cc22 || '',
        ca2cc3: req.body.ca2cc33 || '',
        ca2cp1: req.body.ca2cp11 || '',
        ca2cp2: req.body.ca2cp22 || '',
        ca2cp3: req.body.ca2cp33 || '',

        ca3crf1: req.body.ca3crf11 || '',
        ca3crf2: req.body.ca3crf22 || '',
        ca3crf3: req.body.ca3crf33 || '',
        ca3ct1: req.body.ca3ct11 || '',
        ca3ct2: req.body.ca3ct22 || '',
        ca3ct3: req.body.ca3ct33 || '',
        ca3cc1: req.body.ca3cc11 || '',
        ca3cc2: req.body.ca3cc22 || '',
        ca3cc3: req.body.ca3cc33 || '',
        ca3cp1: req.body.ca3cp11 || '',
        ca3cp2: req.body.ca3cp22 || '',
        ca3cp3: req.body.ca3cp33 || '',

        ca4crf1: req.body.ca4crf11 || '',
        ca4crf2: req.body.ca4crf22 || '',
        ca4crf3: req.body.ca4crf33 || '',
        ca4ct1: req.body.ca4ct11 || '',
        ca4ct2: req.body.ca4ct22 || '',
        ca4ct3: req.body.ca4ct33 || '',
        ca4cc1: req.body.ca4cc11 || '',
        ca4cc2: req.body.ca4cc22 || '',
        ca4cc3: req.body.ca4cc33 || '',
        ca4cp1: req.body.ca4cp11 || '',
        ca4cp2: req.body.ca4cp22 || '',
        ca4cp3: req.body.ca4cp33 || '',

        dscrf1: req.body.dscrf11 || '',
        dscrf2: req.body.dscrf22 || '',
        dscrf3: req.body.dscrf33 || '',
        dsct1: req.body.dsct11 || '',
        dsct2: req.body.dsct22 || '',
        dsct3: req.body.dsct33 || '',
        dscc1: req.body.dscc11 || '',
        dscc2: req.body.dscc22 || '',
        dscc3: req.body.dscc33 || '',
        dscp1: req.body.dscp11 || '',
        dscp2: req.body.dscp22 || '',
        dscp3: req.body.dscp33 || '',

        dncrf1: req.body.dncrf11 || '',
        dncrf2: req.body.dncrf22 || '',
        dncrf3: req.body.dncrf33 || '',
        dnct1: req.body.dnct11 || '',
        dnct2: req.body.dnct22 || '',
        dnct3: req.body.dnct33 || '',
        dncc1: req.body.dncc11 || '',
        dncc2: req.body.dncc22 || '',
        dncc3: req.body.dncc33 || '',
        dncp1: req.body.dncp11 || '',
        dncp2: req.body.dncp22 || '',
        dncp3: req.body.dncp33 || '',

        plcrf1: req.body.plcrf11 || '',
        plcrf2: req.body.plcrf22 || '',
        plcrf3: req.body.plcrf33 || '',
        plct1: req.body.plct11 || '',
        plct2: req.body.plct22 || '',
        plct3: req.body.plct33 || '',
        plcc1: req.body.plcc11 || '',
        plcc2: req.body.plcc22 || '',
        plcc3: req.body.plcc33 || '',
        plcp1: req.body.plcp11 || '',
        plcp2: req.body.plcp22 || '',
        plcp3: req.body.plcp33 || '',

        secrf1: req.body.secrf11 || '',
        secrf2: req.body.secrf22 || '',
        secrf3: req.body.secrf33 || '',
        sect1: req.body.sect11 || '',
        sect2: req.body.sect22 || '',
        sect3: req.body.sect33 || '',
        secc1: req.body.secc11 || '',
        secc2: req.body.secc22 || '',
        secc3: req.body.secc33 || '',
        secp1: req.body.secp11 || '',
        secp2: req.body.secp22 || '',
        secp3: req.body.secp33 || '',

        arcrf1: req.body.arcrf11 || '',
        arcrf2: req.body.arcrf22 || '',
        arcrf3: req.body.arcrf33 || '',
        arct1: req.body.arct11 || '',
        arct2: req.body.arct22 || '',
        arct3: req.body.arct33 || '',
        arcc1: req.body.arcc11 || '',
        arcc2: req.body.arcc22 || '',
        arcc3: req.body.arcc33 || '',
        arcp1: req.body.arcp11 || '',
        arcp2: req.body.arcp22 || '',
        arcp3: req.body.arcp33 || '',

        cacrf1: req.body.cacrf11 || '',
        cacrf2: req.body.cacrf22 || '',
        cacrf3: req.body.cacrf33 || '',
        cact1: req.body.cact11 || '',
        cact2: req.body.cact22 || '',
        cact3: req.body.cact33 || '',
        cacc1: req.body.cacc11 || '',
        cacc2: req.body.cacc22 || '',
        cacc3: req.body.cacc33 || '',
        cacp1: req.body.cacp11 || '',
        cacp2: req.body.cacp22 || '',
        cacp3: req.body.cacp33 || '',

        //Camara de Arqueo

        apacrf1: req.body.apacrf11 || '',
        apacrf2: req.body.apacrf22 || '',
        apacrf3: req.body.apacrf33 || '',
        apact1: req.body.apact11 || '',
        apact2: req.body.apact22 || '',
        apact3: req.body.apact33 || '',
        apacc1: req.body.apacc11 || '',
        apacc2: req.body.apacc22 || '',
        apacc3: req.body.apacc33 || '',
        apacp1: req.body.apacp11 || '',
        apacp2: req.body.apacp22 || '',
        apacp3: req.body.apacp33 || '',

        obs8: req.body.obs88 || '',

        //Electronica de mando Fila C

        lb03if: req.body.lb03iff || '',
        lb03le: req.body.lb03lee || '',
        lb03lc: req.body.lb03lcc || '',

        aiv1gtoif: req.body.aiv1gtoiff || '',
        aiv1gtole: req.body.aiv1gtolee || '',
        aiv1gtolc: req.body.aiv1gtolcc || '',

        aiv1if: req.body.aiv1iff || '',
        aiv1le: req.body.aiv1lee || '',
        aiv1lc: req.body.aiv1lcc || '',

        aiv2if: req.body.aiv2iff || '',
        aiv2le: req.body.aiv2lee || '',
        aiv2lc: req.body.aiv2lcc || '',

        asaeif: req.body.asaeiff || '',
        asaele: req.body.asaelee || '',
        asaelc: req.body.asaelcc || '',

        lb49if: req.body.lb49iff || '',
        lb49le: req.body.lb49lee || '',
        lb49lc: req.body.lb49lcc || '',

        sv60if: req.body.sv60iff || '',
        sv60le: req.body.sv60lee || '',
        sv60lc: req.body.sv60lcc || '',

        sv24if: req.body.sv24iff || '',
        sv24le: req.body.sv24lee || '',
        sv24lc: req.body.sv24lcc || '',

        sv24vif: req.body.sv24viff || '',
        sv24vle: req.body.sv24vlee || '',
        sv24vlc: req.body.sv24vlcc || '',

        sv15if: req.body.sv15iff || '',
        sv15le: req.body.sv15lee || '',
        sv15lc: req.body.sv15lcc || '',

        sv15vif: req.body.sv15viff || '',
        sv15vle: req.body.sv15vlee || '',
        sv15vlc: req.body.sv15vlcc || '',

        eshif: req.body.eshiff || '',
        eshle: req.body.eshlee || '',
        eshlc: req.body.eshlcc || '',

        //Electronica de mando fila G
        
        lbc003if: req.body.lbc003iff || '',
        lbc003le: req.body.lbc003lee || '',
        lbc003lc: req.body.lbc003lcc || '',

        lbc011if: req.body.lbc011iff || '',
        lbc011le: req.body.lbc011lee || '',
        lbc011lc: req.body.lbc011lcc || '',

        zrif: req.body.zriff || '',
        zrle: req.body.zrlee || '',
        zrlc: req.body.zrlcc || '',

        sp27if: req.body.sp27iff || '',
        sp27le: req.body.sp27lee || '',
        sp27lc: req.body.sp27lcc || '',

        stssif: req.body.stssiff || '',
        stssle: req.body.stsslee || '',
        stsslc: req.body.stsslcc || '',

        wrssif: req.body.wrssiff || '',
        wrssle: req.body.wrsslee || '',
        wrsslc: req.body.wrsslcc || '',

        dif1if: req.body.dif1iff || '',
        dif1le: req.body.dif1lee || '',
        dif1lc: req.body.dif1lcc || '',

        dif2if: req.body.dif2iff || '',
        dif2le: req.body.dif2lee || '',
        dif2lc: req.body.dif2lcc || '',

        aifif: req.body.aififf || '',
        aifle: req.body.aiflee || '',
        aiflc: req.body.aiflcc || '',

        umodif: req.body.umodiff || '',
        umodle: req.body.umodlee || '',
        umodlc: req.body.umodlcc || '',

        uwstif: req.body.uwstiff || '',
        uwstle: req.body.uwstlee || '',
        uwstlc: req.body.uwstlcc || '',

        mpif: req.body.mpiff || '',
        mple: req.body.mplee || '',
        mplc: req.body.mplcc || '',

        vavdif: req.body.vavdiff || '',
        vavdle: req.body.vavdlee || '',
        vavdlc: req.body.vavdlcc || '',

        istaif: req.body.istaiff || '',
        istale: req.body.istalee || '',
        istalc: req.body.istalcc || '',

        ebif: req.body.ebiff || '',
        eble: req.body.eblee || '',
        eblc: req.body.eblcc || '',

        eaif: req.body.eaiff || '',
        eale: req.body.ealee || '',
        ealc: req.body.ealcc || '',

        lb131if: req.body.lb131iff || '',
        lb131le: req.body.lb131lee || '',
        lb131lc: req.body.lb131lcc || '',

        edif: req.body.ediff || '',
        edle: req.body.edlee || '',
        edlc: req.body.edlcc || '',

        epzif: req.body.epziff || '',
        epzle: req.body.epzlee || '',
        epzlc: req.body.epzlcc || '',

        lbc155if: req.body.lbc155iff || '',
        lbc155le: req.body.lbc155lee || '',
        lbc155lc: req.body.lbc155lcc || '',

        lbc163if: req.body.lbc163iff || '',
        lbc163le: req.body.lbc163lee || '',
        lbc163lc: req.body.lbc163lcc || '',

        //Electrica de mando Fila E

        v1v: req.body.v1vv || '',
        v1l: req.body.v1ll || '',
        v1f: req.body.v1ff || '',

        v2v: req.body.v2vv || '',
        v2l: req.body.v2ll || '',
        v2f: req.body.v2ff || '',

        v3v: req.body.v3vv || '',
        v3l: req.body.v3ll || '',
        v3f: req.body.v3ff || '',

        f3v: req.body.f3vv || '',
        f3l: req.body.f3ll || '',
        f3f: req.body.f3ff || '',

        f2v: req.body.f2vv || '',
        f2l: req.body.f2ll || '',
        f2f: req.body.f2ff || '',

        f1v: req.body.f1vv || '',
        f1l: req.body.f1ll || '',
        f1f: req.body.f1ff || '',
        
        lvv: req.body.lvvv || '',
        lvl: req.body.lvll || '',
        lvf: req.body.lvff || '',

        ccv: req.body.ccvv || '',
        ccl: req.body.ccll || '',
        ccf: req.body.ccff || '',
        
        //Rack aparato

        rv: req.body.rvv || '',
        rl: req.body.rll || '',
        rb: req.body.rbb || '',

        obs9: req.body.obs99 || '',

        //CAP

        vtef: req.body.vteff || '',
        vtl: req.body.vtll || '',
        vtpi: req.body.vtpii || '',
        vtaj: req.body.vtaj || '',

        vpef: req.body.vpeff || '',
        vpl: req.body.vpll || '',
        vppi: req.body.vppii || '',
        vpaj: req.body.vpaj || '',
        
        vbef: req.body.vbeff || '',
        vbl: req.body.vbll || '',
        vbpi: req.body.vbpii || '',
        vbaj: req.body.vbaj || '',

        vtoef: req.body.vtoeff || '',
        vtol: req.body.vtoll || '',
        vtopi: req.body.vtopii || '',
        vtoaj: req.body.vtoaj || '',

        vcef: req.body.vceff || '',
        vcl: req.body.vcll || '',
        vcpi: req.body.vcpii || '',
        vcaj: req.body.vcaj || '',

        meef: req.body.meeff || '',
        mel: req.body.mell || '',
        mepi: req.body.mepii || '',
        meaj: req.body.meaj || '',

        mref: req.body.mreff || '',
        mrl: req.body.mrll || '',
        mrpi: req.body.mrpii || '',
        mraj: req.body.mraj || '',

        mroef: req.body.mroeff || '',
        mrol: req.body.mroll || '',
        mropi: req.body.mropii || '',
        mroaj: req.body.mroaj || '',

        mvef: req.body.mveff || '',
        mvl: req.body.mvll || '',
        mvpi: req.body.mvpii || '',
        mvaj: req.body.mvaj || '',

        mtef: req.body.mteff || '',
        mtl: req.body.mtll || '',
        mtpi: req.body.mtpii || '',
        mtaj: req.body.mtaj || '',

        mttef: req.body.mtteff || '',
        mttl: req.body.mttll || '',
        mttpi: req.body.mttpii || '',
        mttaj: req.body.mttaj || '',

        mccef: req.body.mcceff || '',
        mccl: req.body.mccll || '',
        mccpi: req.body.mccpii || '',
        mccaj: req.body.mccaj || '',

        mbcef: req.body.mbceff || '',
        mbcl: req.body.mbcll || '',
        mbcpi: req.body.mbcpii || '',
        mbcaj: req.body.mbcaj || '',

        uv: req.body.uvv || '',
        vw: req.body.vww || '',
        wu: req.body.wuu || '',
        ut: req.body.utt || '',
        vt: req.body.vtt || '',
        wt: req.body.wtt || '',
        ai: req.body.aii || '',
        ni: req.body.nii || '',
        rpm: req.body.rpmm || '',

        obs10: req.body.obs100 || '',
        
        //-------------------------------

        }
        await memaM23.findByIdAndUpdate(id, { $set: mema_M23}, { new: true });
        res.json({
            status: 'Employee update'
        });

        };

        mema_M23.checkedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const checked = {
            documentFormCurrentState: req.body
        }
        await memaM23.findByIdAndUpdate(id, { $set: checked }, { new: true });
        res.json({
            status: 'worker state update'
        })
        }

        mema_M23.getStateCheckedApprovalByWorker = async (req, res) => {
        const { id } = req.params;
        const state = await memaM23.findById(id, {
            "_id": 1, 
            "documentFormCurrentState": 1
        })
        res.json(state)
        }

        mema_M23.getAllmema_M23TypeM = async (req, res) => {
        const memam23 = await memaM23.find({}, {
            "_id": 1, 
            "unidad": 1, 
            "documentFormCurrentState.approvalByWorker.checked": 1, 
            "documentFormCurrentState.approvalBySupervisor.checked": 1,
            "documentFormCurrentState.approvalByMannager.checked": 1,
            "documentFormCurrentState.loading": 1
        })
        res.json(memam23)
        };

        mema_M23.addNewHistoryrecord = async (req, res) => {
        const { id } = req.params;
        const historymemaM23New = {
            historyFile: req.body.historyFile || []
        }
        await memaM23.findByIdAndUpdate(id, { $set: historymemaM23New }, { new: true });
        res.json({
            status: 'History update'
        })
        }

        mema_M23.getHistoryOF = async (req, res) => {
        const { id } = req.params;
        const memam23 = await memaM23.findById(id, {
            "_id": 0, 
            "historyFile": 1
        })
        res.json(memam23)
        }

        mema_M23.createmema_M23TypeM = async (req, res) => {
        const memam23 = new memaM23(req.body)

        await memam23.save()
        res.json({res: 'Ok'})
        };

        module.exports = mema_M23;
