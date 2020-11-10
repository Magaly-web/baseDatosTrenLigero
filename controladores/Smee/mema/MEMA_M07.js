
const memaM07 = require('../../../models/smee/mema/MEMA_M07');

const mema_M07 = {};
//Metodos
// Obtiene todos los empleados
mema_M07.getmema_M07Data = async (req, res)=>{
    const {id} = req.params;

    const memam07 = await memaM07.findById(id)
    res.json(memam07)
}

// Editar un documento
mema_M07.editmema_M07Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM07 = {
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
        //Puprite Motriz M1
        kpv: req.body.kpvv || '',
        kpl: req.body.kpll || '',
        kpr: req.body.kprr || '',
        kpf: req.body.kpff || '',

        cv: req.body.cvv || '',
        cl: req.body.cll || '',
        cr: req.body.crr || '',
        cf: req.body.cff || '',

        plv: req.body.plvv || '',
        pll: req.body.plll || '',
        plr: req.body.plrr || '',
        plf: req.body.plff || '',

        //Plastron de pupitre izq

        bpav: req.body.bpavv || '',
        bpal: req.body.bpall || '',
        bpar: req.body.bparr || '',
        bpaf: req.body.bpaff || '',

        bdmv: req.body.bdmvv || '',
        bdml: req.body.bdmll || '',
        bdmr: req.body.bdmrr || '',
        bdmf: req.body.bdmff || '',

        bapv: req.body.bapvv || '',
        bapl: req.body.bapll || '',
        bapr: req.body.baprr || '',
        bapf: req.body.bapff || '',

        pmcv: req.body.pmcvv || '',
        pmcl: req.body.pmcll || '',
        pmcr: req.body.pmcrr || '',
        pmcf: req.body.pmcff || '',

        baav: req.body.baavv || '',
        baal: req.body.baall || '',
        baar: req.body.baarr || '',
        baaf: req.body.baaff || '',

        blpv: req.body.blpvv || '',
        blpl: req.body.blpll || '',
        blpr: req.body.blprr || '',
        blpf: req.body.blpff || '',

        baiv: req.body.baivv || '',
        bail: req.body.baill || '',
        bair: req.body.bairr || '',
        baif: req.body.baiff || '',

        basiv: req.body.basivv || '',
        basil: req.body.basill || '',
        basir: req.body.basirr || '',
        basif: req.body.basiff || '',

        lipiv: req.body.lipivv || '',
        lipil: req.body.lipill || '',
        lipir: req.body.lipirr || '',
        lipif: req.body.lipiff || '',

        bciv: req.body.bcivv || '',
        bcil: req.body.bcill || '',
        bcir: req.body.bcirr || '',
        bcif: req.body.bciff || '',

        pbliv: req.body.pblivv || '',
        pblil: req.body.pblill || '',
        pblir: req.body.pblirr || '',
        pblif: req.body.pbliff || '',

        //Plastron de pupitre derecho

        bpsv: req.body.bpsvv || '',
        bpsl: req.body.bpsll || '',
        bpsr: req.body.bpsrr || '',
        bpsf: req.body.bpsff || '',

        scdv: req.body.scdvv || '',
        scdl: req.body.scdll || '',
        scdr: req.body.scdrr || '',
        scdf: req.body.scdff || '',

        lffmv: req.body.lffmvv || '',
        lffml: req.body.lffmll || '',
        lffmr: req.body.lffmrr || '',
        lffmf: req.body.lffmff || '',

        smlpv: req.body.smlpvv || '',
        smlpl: req.body.smlpll || '',
        smlpr: req.body.smlprr || '',
        smlpf: req.body.smlpff || '',

        lmcv: req.body.lmcvv || '',
        lmcl: req.body.lmcll || '',
        lmcr: req.body.lmcrr || '',
        lmcf: req.body.lmcff || '',

        smfv: req.body.smfvv || '',
        smfl: req.body.smfll || '',
        smfr: req.body.smfrr || '',
        smff: req.body.smfff || '',

        basdv: req.body.basdvv || '',
        basdl: req.body.basdll || '',
        basdr: req.body.basdrr || '',
        basdf: req.body.basdff || '',

        lipdv: req.body.lipdvv || '',
        lipdl: req.body.lipdll || '',
        lipdr: req.body.lipdrr || '',
        lipdf: req.body.lipdff || '',

        bcdv: req.body.bcdvv || '',
        bcdl: req.body.bcdll || '',
        bcdr: req.body.bcdrr || '',
        bcdf: req.body.bcdff || '',

        pbldv: req.body.pbldvv || '',
        pbldl: req.body.pbldll || '',
        pbldr: req.body.pbldrr || '',
        pbldf: req.body.pbldff || '',

         //Dispositivos de pupitre

         velv: req.body.velvv || '',
         vell: req.body.velll || '',
         velr: req.body.velrr || '',
         velf: req.body.velff || '',

         micv: req.body.micvv || '',
         micl: req.body.micll || '',
         micr: req.body.micrr || '',
         micf: req.body.micff || '',

         bsv: req.body.bsvv || '',
         bsl: req.body.bsll || '',
         bsr: req.body.bsrr || '',
         bsf: req.body.bsff || '',

         vv: req.body.vvv || '',
         vl: req.body.vll || '',
         vr: req.body.vrr || '',
         vf: req.body.vff || '',

         pbsv: req.body.pbsvv || '',
         pbsl: req.body.pbsll || '',
         pbsr: req.body.pbsrr || '',
         pbsf: req.body.pbsff || '',

         dov: req.body.dovv || '',
         dol: req.body.doll || '',
         dor: req.body.dorr || '',
         dof: req.body.doff || '',

         pdov: req.body.pdovv || '',
         pdol: req.body.pdoll || '',
         pdor: req.body.pdorr || '',
         pdof: req.body.pdoff || '',

         pmpv: req.body.pmpvv || '',
         pmpl: req.body.pmpll || '',
         pmpr: req.body.pmprr || '',
         pmpf: req.body.pmpff || '',

         // Tapa completa

         tapav: req.body.tapavv || '',
         tapal: req.body.tapall || '',
         tapar: req.body.taparr || '',
         tapaf: req.body.tapaff || '',

         tcav: req.body.tcavv || '',
         tcal: req.body.tcall || '',
         tcar: req.body.tcarr || '',
         tcaf: req.body.tcaff || '',

         thv: req.body.thvv || '',
         thl: req.body.thll || '',
         thr: req.body.thrr || '',
         thf: req.body.thff || '',

         atv: req.body.atvv || '',
         atl: req.body.atll || '',
         atr: req.body.atrr || '',
         atf: req.body.atff || '',

         //Palanca emisora de ordenes

         actv: req.body.actvv || '',
         actl: req.body.actll || '',
         actr: req.body.actrr || '',
         actf: req.body.actff || '',

         tgv: req.body.tgvv || '',
         tgl: req.body.tgll || '',
         tgr: req.body.tgrr || '',
         tgf: req.body.tgff || '',

         pv: req.body.pvv || '',
         pl: req.body.pll || '',
         pr: req.body.prr || '',
         pf: req.body.pff || '',

         ecv: req.body.ecvv || '',
         ecl: req.body.ecll || '',
         ecr: req.body.ecrr || '',
         ecf: req.body.ecff || '',

         ihmv: req.body.ihmvv || '',
         ihml: req.body.ihmll || '',
         ihmr: req.body.ihmrr || '',
         ihmf: req.body.ihmff || '',

         //Emisor de ordenes

         pdc1v: req.body.pdc1vv || '',
         pdc1l: req.body.pdc1ll || '',
         pdc1r: req.body.pdc1rr || '',
         pdc1f: req.body.pdc1ff || '',

         pdc2v: req.body.pdc2vv || '',
         pdc2l: req.body.pdc2ll || '',
         pdc2r: req.body.pdc2rr || '',
         pdc2f: req.body.pdc2ff || '',

         sv: req.body.svv || '',
         sl: req.body.sll || '',
         sr: req.body.srr || '',
         sf: req.body.sff || '',

         siv: req.body.sivv || '',
         sil: req.body.sill || '',
         sir: req.body.sirr || '',
         sif: req.body.siff || '',

         elcv: req.body.elcvv || '',
         elcl: req.body.elcll || '',
         elcr: req.body.elcrr || '',
         elcf: req.body.elcff || '',

         ptcv: req.body.ptcvv || '',
         ptcl: req.body.ptcll || '',
         ptcr: req.body.ptcrr || '',
         ptcf: req.body.ptcff || '',

         mtv: req.body.mtvv || '',
         mtl: req.body.mtll || '',
         mtr: req.body.mtrr || '',
         mtf: req.body.mtff || '',

         dbv: req.body.dbvv || '',
         dbl: req.body.dbll || '',
         dbr: req.body.dbrr || '',
         dbf: req.body.dbff || '',

         rbv: req.body.rbvv || '',
         rbl: req.body.rbll || '',
         rbr: req.body.rbrr || '',
         rbf: req.body.rbff || '',

         s21v: req.body.s21vv || '',
         s21l: req.body.s21ll || '',
         s21r: req.body.s21rr || '',
         s21f: req.body.s21ff || '',

         s22v: req.body.s22vv || '',
         s22l: req.body.s22ll || '',
         s22r: req.body.s22rr || '',
         s22f: req.body.s22ff || '',

         s23v: req.body.s23vv || '',
         s23l: req.body.s23ll || '',
         s23r: req.body.s23rr || '',
         s23f: req.body.s23ff || '',

         s24v: req.body.s24vv || '',
         s24l: req.body.s24ll || '',
         s24r: req.body.s24rr || '',
         s24f: req.body.s24ff || '',

         //Interruptor selector

         cocov: req.body.cocovv || '',
         cocol: req.body.cocoll || '',
         cocor: req.body.cocorr || '',
         cocof: req.body.cocoff || '',

         mav: req.body.mavv || '',
         mal: req.body.mall || '',
         mar: req.body.marr || '',
         maf: req.body.maff || '',

         denv: req.body.denvv || '',
         denl: req.body.denll || '',
         denr: req.body.denrr || '',
         denf: req.body.denff || '',

         dibv: req.body.dibvv || '',
         dibl: req.body.dibll || '',
         dibr: req.body.dibrr || '',
         dibf: req.body.dibff || '',

         blmiv: req.body.blmivv || '',
         blmil: req.body.blmill || '',
         blmir: req.body.blmirr || '',
         blmif: req.body.blmiff || '',

         pecov: req.body.pecovv || '',
         pecol: req.body.pecoll || '',
         pecor: req.body.pecorr || '',
         pecof: req.body.pecoff || '',

         anv: req.body.anvv || '',
         anl: req.body.anll || '',
         anr: req.body.anrr || '',
         anf: req.body.anff || '',

         muprv: req.body.muprvv || '',
         muprl: req.body.muprll || '',
         muprr: req.body.muprrr || '',
         muprf: req.body.muprff || '',

         pguiav: req.body.pguiavv || '',
         pguial: req.body.pguiall || '',
         pguiar: req.body.pguiarr || '',
         pguiaf: req.body.pguiaff || '',

         torv: req.body.torvv || '',
         torl: req.body.torll || '',
         torr: req.body.torrr || '',
         torf: req.body.torff || '',

         //interruptor con llave

         cerradurav: req.body.cerraduravv || '',
         cerradural: req.body.cerradurall || '',
         cerradurar: req.body.cerradurarr || '',
         cerraduraf: req.body.cerraduraff || '',

         microv: req.body.microvv || '',
         microl: req.body.microll || '',
         micror: req.body.microrr || '',
         microf: req.body.microff || '',

         dbloqueov: req.body.dbloqueovv || '',
         dbloqueol: req.body.dbloqueoll || '',
         dbloqueor: req.body.dbloqueorr || '',
         dbloqueof: req.body.dbloqueoff || '',

         sointv: req.body.sointvv || '',
         sointl: req.body.sointll || '',
         sointr: req.body.sointrr || '',
         sointf: req.body.sointff || '',

         //Conjunto de potenciometro

         pov: req.body.povv || '',
         pol: req.body.poll || '',
         por: req.body.porr || '',
         pof: req.body.poff || '',

         angmv: req.body.angmvv || '',
         angml: req.body.angmll || '',
         angmr: req.body.angmrr || '',
         angmf: req.body.angmff || '',

         tcv: req.body.tcvv || '',
         tcl: req.body.tcll || '',
         tcr: req.body.tcrr || '',
         tcf: req.body.tcff || '',

         rdv: req.body.rdvv || '',
         rdl: req.body.rdll || '',
         rdr: req.body.rdrr || '',
         rdf: req.body.rdff || '',

         erv: req.body.ervv || '',
         erl: req.body.erll || '',
         err: req.body.errr || '',
         erf: req.body.erff || '',

         cdv: req.body.cdvv || '',
         cdl: req.body.cdll || '',
         cdr: req.body.cdrr || '',
         cdf: req.body.cdff || '',

         poa1v: req.body.poa1vv || '',
         poa1l: req.body.poa1ll || '',
         poa1r: req.body.poa1rr || '',
         poa1f: req.body.poa1ff || '',

         poa2v: req.body.poa2vv || '',
         poa2l: req.body.poa2ll || '',
         poa2r: req.body.poa2rr || '',
         poa2f: req.body.poa2ff || '',

         obs2: req.body.obs22 || '',

          // Pupitre Motriz 2

        m2kpv: req.body.m2kpvv || '',
        m2kpl: req.body.m2kpll || '',
        m2kpr: req.body.m2kprr || '',
        m2kpf: req.body.m2kpff || '',

        m2cv: req.body.m2cvv || '',
        m2cl: req.body.m2cll || '',
        m2cr: req.body.m2crr || '',
        m2cf: req.body.m2cff || '',

        m2plv: req.body.m2plvv || '',
        m2pll: req.body.m2plll || '',
        m2plr: req.body.m2plrr || '',
        m2plf: req.body.m2plff || '',

        //************** */
        //Plastron de pupitre izq M2

        m2bpav: req.body.m2bpavv || '',
        m2bpal: req.body.m2bpall || '',
        m2bpar: req.body.m2bparr || '',
        m2bpaf: req.body.m2bpaff || '',

        m2bdmv: req.body.m2bdmvv || '',
        m2bdml: req.body.m2bdmll || '',
        m2bdmr: req.body.m2bdmrr || '',
        m2bdmf: req.body.m2bdmff || '',

        m2bapv: req.body.m2bapvv || '',
        m2bapl: req.body.m2bapll || '',
        m2bapr: req.body.m2baprr || '',
        m2bapf: req.body.m2bapff || '',

        m2pmcv: req.body.m2pmcvv || '',
        m2pmcl: req.body.m2pmcll || '',
        m2pmcr: req.body.m2pmcrr || '',
        m2pmcf: req.body.m2pmcff || '',

        m2baav: req.body.m2baavv || '',
        m2baal: req.body.m2baall || '',
        m2baar: req.body.m2baarr || '',
        m2baaf: req.body.m2baaff || '',

        m2blpv: req.body.m2blpvv || '',
        m2blpl: req.body.m2blpll || '',
        m2blpr: req.body.m2blprr || '',
        m2blpf: req.body.m2blpff || '',

        m2baiv: req.body.m2baivv || '',
        m2bail: req.body.m2baill || '',
        m2bair: req.body.m2bairr || '',
        m2baif: req.body.m2baiff || '',

        m2basiv: req.body.m2basivv || '',
        m2basil: req.body.m2basill || '',
        m2basir: req.body.m2basirr || '',
        m2basif: req.body.m2basiff || '',

        m2lipiv: req.body.m2lipivv || '',
        m2lipil: req.body.m2lipill || '',
        m2lipir: req.body.m2lipirr || '',
        m2lipif: req.body.m2lipiff || '',

        m2bciv: req.body.m2bcivv || '',
        m2bcil: req.body.m2bcill || '',
        m2bcir: req.body.m2bcirr || '',
        m2bcif: req.body.m2bciff || '',

        m2pbliv: req.body.m2pblivv || '',
        m2pblil: req.body.m2pblill || '',
        m2pblir: req.body.m2pblirr || '',
        m2pblif: req.body.m2pbliff || '',

        //Plastron de pupitre derecho

        m2bpsv: req.body.m2bpsvv || '',
        m2bpsl: req.body.m2bpsll || '',
        m2bpsr: req.body.m2bpsrr || '',
        m2bpsf: req.body.m2bpsff || '',

        m2scdv: req.body.m2scdvv || '',
        m2scdl: req.body.m2scdll || '',
        m2scdr: req.body.m2scdrr || '',
        m2scdf: req.body.m2scdff || '',

        m2lffmv: req.body.m2lffmvv || '',
        m2lffml: req.body.m2lffmll || '',
        m2lffmr: req.body.m2lffmrr || '',
        m2lffmf: req.body.m2lffmff || '',

        m2smlpv: req.body.m2smlpvv || '',
        m2smlpl: req.body.m2smlpll || '',
        m2smlpr: req.body.m2smlprr || '',
        m2smlpf: req.body.m2smlpff || '',

        m2lmcv: req.body.m2lmcvv || '',
        m2lmcl: req.body.m2lmcll || '',
        m2lmcr: req.body.m2lmcrr || '',
        m2lmcf: req.body.m2lmcff || '',

        m2smfv: req.body.m2smfvv || '',
        m2smfl: req.body.m2smfll || '',
        m2smfr: req.body.m2smfrr || '',
        m2smff: req.body.m2smfff || '',

        m2basdv: req.body.m2basdvv || '',
        m2basdl: req.body.m2basdll || '',
        m2basdr: req.body.m2basdrr || '',
        m2basdf: req.body.m2basdff || '',

        m2lipdv: req.body.m2lipdvv || '',
        m2lipdl: req.body.m2lipdll || '',
        m2lipdr: req.body.m2lipdrr || '',
        m2lipdf: req.body.m2lipdff || '',

        m2bcdv: req.body.m2bcdvv || '',
        m2bcdl: req.body.m2bcdll || '',
        m2bcdr: req.body.m2bcdrr || '',
        m2bcdf: req.body.m2bcdff || '',

        m2pbldv: req.body.m2pbldvv || '',
        m2pbldl: req.body.m2pbldll || '',
        m2pbldr: req.body.m2pbldrr || '',
        m2pbldf: req.body.m2pbldff || '',

        //Dispositivos de pupitre M2

         m2velv: req.body.m2velvv || '',
         m2vell: req.body.m2velll || '',
         m2velr: req.body.m2velrr || '',
         m2velf: req.body.m2velff || '',

         m2micv: req.body.m2micvv || '',
         m2micl: req.body.m2micll || '',
         m2micr: req.body.m2micrr || '',
         m2micf: req.body.m2micff || '',

         m2bsv: req.body.m2bsvv || '',
         m2bsl: req.body.m2bsll || '',
         m2bsr: req.body.m2bsrr || '',
         m2bsf: req.body.m2bsff || '',

         m2vv: req.body.m2vvv || '',
         m2vl: req.body.m2vll || '',
         m2vr: req.body.m2vrr || '',
         m2vf: req.body.m2vff || '',

         m2pbsv: req.body.m2pbsvv || '',
         m2pbsl: req.body.m2pbsll || '',
         m2pbsr: req.body.m2pbsrr || '',
         m2pbsf: req.body.m2pbsff || '',

         m2dov: req.body.m2dovv || '',
         m2dol: req.body.m2doll || '',
         m2dor: req.body.m2dorr || '',
         m2dof: req.body.m2doff || '',

         m2pdov: req.body.m2pdovv || '',
         m2pdol: req.body.m2pdoll || '',
         m2pdor: req.body.m2pdorr || '',
         m2pdof: req.body.m2pdoff || '',

         m2pmpv: req.body.m2pmpvv || '',
         m2pmpl: req.body.m2pmpll || '',
         m2pmpr: req.body.m2pmprr || '',
         m2pmpf: req.body.m2pmpff || '',

         // M2 Tapa completa

         m2tapav: req.body.m2tapavv || '',
         m2tapal: req.body.m2tapall || '',
         m2tapar: req.body.m2taparr || '',
         m2tapaf: req.body.m2tapaff || '',

         m2tcav: req.body.m2tcavv || '',
         m2tcal: req.body.m2tcall || '',
         m2tcar: req.body.m2tcarr || '',
         m2tcaf: req.body.m2tcaff || '',

         m2thv: req.body.m2thvv || '',
         m2thl: req.body.m2thll || '',
         m2thr: req.body.m2thrr || '',
         m2thf: req.body.m2thff || '',

         m2atv: req.body.m2atvv || '',
         m2atl: req.body.m2atll || '',
         m2atr: req.body.m2atrr || '',
         m2atf: req.body.m2atff || '',

         //Palanca emisora de ordenes

         m2actv: req.body.m2actvv || '',
         m2actl: req.body.m2actll || '',
         m2actr: req.body.m2actrr || '',
         m2actf: req.body.m2actff || '',

         m2tgv: req.body.m2tgvv || '',
         m2tgl: req.body.m2tgll || '',
         m2tgr: req.body.m2tgrr || '',
         m2tgf: req.body.m2tgff || '',

         m2pv: req.body.m2pvv || '',
         m2pl: req.body.m2pll || '',
         m2pr: req.body.m2prr || '',
         m2pf: req.body.m2pff || '',

         m2ecv: req.body.m2ecvv || '',
         m2ecl: req.body.m2ecll || '',
         m2ecr: req.body.m2ecrr || '',
         m2ecf: req.body.m2ecff || '',

         m2ihmv: req.body.m2ihmvv || '',
         m2ihml: req.body.m2ihmll || '',
         m2ihmr: req.body.m2ihmrr || '',
         m2ihmf: req.body.m2ihmff || '',

         //Emisor de ordenes

         m2pdc1v: req.body.m2pdc1vv || '',
         m2pdc1l: req.body.m2pdc1ll || '',
         m2pdc1r: req.body.m2pdc1rr || '',
         m2pdc1f: req.body.m2pdc1ff || '',

         m2pdc2v: req.body.m2pdc2vv || '',
         m2pdc2l: req.body.m2pdc2ll || '',
         m2pdc2r: req.body.m2pdc2rr || '',
         m2pdc2f: req.body.m2pdc2ff || '',

         m2sv: req.body.m2svv || '',
         m2sl: req.body.m2sll || '',
         m2sr: req.body.m2srr || '',
         m2sf: req.body.m2sff || '',

         m2siv: req.body.m2sivv || '',
         m2sil: req.body.m2sill || '',
         m2sir: req.body.m2sirr || '',
         m2sif: req.body.m2siff || '',

         m2elcv: req.body.m2elcvv || '',
         m2elcl: req.body.m2elcll || '',
         m2elcr: req.body.m2elcrr || '',
         m2elcf: req.body.m2elcff || '',

         m2ptcv: req.body.m2ptcvv || '',
         m2ptcl: req.body.m2ptcll || '',
         m2ptcr: req.body.m2ptcrr || '',
         m2ptcf: req.body.m2ptcff || '',

         m2mtv: req.body.m2mtvv || '',
         m2mtl: req.body.m2mtll || '',
         m2mtr: req.body.m2mtrr || '',
         m2mtf: req.body.m2mtff || '',

         m2dbv: req.body.m2dbvv || '',
         m2dbl: req.body.m2dbll || '',
         m2dbr: req.body.m2dbrr || '',
         m2dbf: req.body.m2dbff || '',

         m2rbv: req.body.m2rbvv || '',
         m2rbl: req.body.m2rbll || '',
         m2rbr: req.body.m2rbrr || '',
         m2rbf: req.body.m2rbff || '',

         m2s21v: req.body.m2s21vv || '',
         m2s21l: req.body.m2s21ll || '',
         m2s21r: req.body.m2s21rr || '',
         m2s21f: req.body.m2s21ff || '',

         m2s22v: req.body.m2s22vv || '',
         m2s22l: req.body.m2s22ll || '',
         m2s22r: req.body.m2s22rr || '',
         m2s22f: req.body.m2s22ff || '',

         m2s23v: req.body.m2s23vv || '',
         m2s23l: req.body.m2s23ll || '',
         m2s23r: req.body.m2s23rr || '',
         m2s23f: req.body.m2s23ff || '',

         m2s24v: req.body.m2s24vv || '',
         m2s24l: req.body.m2s24ll || '',
         m2s24r: req.body.m2s24rr || '',
         m2s24f: req.body.m2s24ff || '',

         //Interruptor selector

         m2cocov: req.body.m2cocovv || '',
         m2cocol: req.body.m2cocoll || '',
         m2cocor: req.body.m2cocorr || '',
         m2cocof: req.body.m2cocoff || '',

         m2mav: req.body.m2mavv || '',
         m2mal: req.body.m2mall || '',
         m2mar: req.body.m2marr || '',
         m2maf: req.body.m2maff || '',

         m2denv: req.body.m2denvv || '',
         m2denl: req.body.m2denll || '',
         m2denr: req.body.m2denrr || '',
         m2denf: req.body.m2denff || '',

         m2dibv: req.body.m2dibvv || '',
         m2dibl: req.body.m2dibll || '',
         m2dibr: req.body.m2dibrr || '',
         m2dibf: req.body.m2dibff || '',

         m2blmiv: req.body.m2blmivv || '',
         m2blmil: req.body.m2blmill || '',
         m2blmir: req.body.m2blmirr || '',
         m2blmif: req.body.m2blmiff || '',

         m2pecov: req.body.m2pecovv || '',
         m2pecol: req.body.m2pecoll || '',
         m2pecor: req.body.m2pecorr || '',
         m2pecof: req.body.m2pecoff || '',

         m2anv: req.body.m2anvv || '',
         m2anl: req.body.m2anll || '',
         m2anr: req.body.m2anrr || '',
         m2anf: req.body.m2anff || '',

         m2muprv: req.body.m2muprvv || '',
         m2muprl: req.body.m2muprll || '',
         m2muprr: req.body.m2muprrr || '',
         m2muprf: req.body.m2muprff || '',

         m2pguiav: req.body.m2pguiavv || '',
         m2pguial: req.body.m2pguiall || '',
         m2pguiar: req.body.m2pguiarr || '',
         m2pguiaf: req.body.m2pguiaff || '',

         m2torv: req.body.m2torvv || '',
         m2torl: req.body.m2torll || '',
         m2torr: req.body.m2torrr || '',
         m2torf: req.body.m2torff || '',

         //interruptor con llave

         m2cerradurav: req.body.m2cerraduravv || '',
         m2cerradural: req.body.m2cerradurall || '',
         m2cerradurar: req.body.m2cerradurarr || '',
         m2cerraduraf: req.body.m2cerraduraff || '',

         m2microv: req.body.m2microvv || '',
         m2microl: req.body.m2microll || '',
         m2micror: req.body.m2microrr || '',
         m2microf: req.body.m2microff || '',

         m2dbloqueov: req.body.m2dbloqueovv || '',
         m2dbloqueol: req.body.m2dbloqueoll || '',
         m2dbloqueor: req.body.m2dbloqueorr || '',
         m2dbloqueof: req.body.m2dbloqueoff || '',

         m2sointv: req.body.m2sointvv || '',
         m2sointl: req.body.m2sointll || '',
         m2sointr: req.body.m2sointrr || '',
         m2sointf: req.body.m2sointff || '',

         //Conjunto de potenciometro

         m2pov: req.body.m2povv || '',
         m2pol: req.body.m2poll || '',
         m2por: req.body.m2porr || '',
         m2pof: req.body.m2poff || '',

         m2angmv: req.body.m2angmvv || '',
         m2angml: req.body.m2angmll || '',
         m2angmr: req.body.m2angmrr || '',
         m2angmf: req.body.m2angmff || '',

         m2tcv: req.body.m2tcvv || '',
         m2tcl: req.body.m2tcll || '',
         m2tcr: req.body.m2tcrr || '',
         m2tcf: req.body.m2tcff || '',

         m2rdv: req.body.m2rdvv || '',
         m2rdl: req.body.m2rdll || '',
         m2rdr: req.body.m2rdrr || '',
         m2rdf: req.body.m2rdff || '',

         m2erv: req.body.m2ervv || '',
         m2erl: req.body.m2erll || '',
         m2err: req.body.m2errr || '',
         m2erf: req.body.m2erff || '',

         m2cdv: req.body.m2cdvv || '',
         m2cdl: req.body.m2cdll || '',
         m2cdr: req.body.m2cdrr || '',
         m2cdf: req.body.m2cdff || '',

         m2poa1v: req.body.m2poa1vv || '',
         m2poa1l: req.body.m2poa1ll || '',
         m2poa1r: req.body.m2poa1rr || '',
         m2poa1f: req.body.m2poa1ff || '',

         m2poa2v: req.body.m2poa2vv || '',
         m2poa2l: req.body.m2poa2ll || '',
         m2poa2r: req.body.m2poa2rr || '',
         m2poa2f: req.body.m2poa2ff || '',

         m2obs3: req.body.m2obs33 || '',

        //-------------------------------

    }
    await memaM07.findByIdAndUpdate(id, { $set: mema_M07}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M07.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM07.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M07.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM07.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M07.getAllmema_M07TypeM = async (req, res) => {
    const memam07 = await memaM07.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam07)
};

mema_M07.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM07New = {
        historyFile: req.body.historyFile || []
    }
    await memaM07.findByIdAndUpdate(id, { $set: historymemaM07New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M07.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam07 = await memaM07.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam07)
}

mema_M07.createmema_M07TypeM = async (req, res) => {
    const memam07 = new memaM07(req.body)
    
    await memam07.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M07;
