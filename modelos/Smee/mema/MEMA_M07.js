const mongoose = require('mongoose');
const {Schema} = mongoose;

const memaM07Schema = new Schema({

    trainModel: { type: String, required: true },//tren programado
    kilometraje: { type: Number },
    
    date_inicio: { type: String },
    date_termino: { type: String },
    
    dateultmant: { type: String },
    datepromant: { type: String },

    date_created: { type: Date, required: true },
    user:{ type: String, required: true },
    id_worker: {type: String, required: true},
    
    obs1: String,

     //Puprite Motriz M1
     kpv: String,
     kpl: String,
     kpr: String,
     kpf: String,

     cv: String,
     cl: String,
     cr: String,
     cf: String,
     
     plv: String,
     pll: String,
     plr: String,
     plf: String,

     //Plastron de pupitre izq
     bpav: String,
     bpal: String,
     bpar: String,
     bpaf: String,

     bdmv: String,
     bdml: String,
     bdmr: String,
     bdmf: String,

     bapv: String,
     bapl: String,
     bapr: String,
     bapf: String,

     pmcv: String,
     pmcl: String,
     pmcr: String,
     pmcf: String,

     baav: String,
     baal: String,
     baar: String,
     baaf: String,

     blpv: String,
     blpl: String,
     blpr: String,
     blpf: String,

     baiv: String,
     bail: String,
     bair: String,
     baif: String,

     basiv: String,
     basil: String,
     basir: String,
     basif: String,

     lipiv: String,
     lipil: String,
     lipir: String,
     lipif: String,

     bciv: String,
     bcil: String,
     bcir: String,
     bcif: String,

     pbliv: String,
     pblil: String,
     pblir: String,
     pblif: String,

     //Plastron de pupitre derecho

     bpsv: String,
     bpsl: String,
     bpsr: String,
     bpsf: String,

     scdv: String,
     scdl: String,
     scdr: String,
     scdf: String,

     lffmv: String,
     lffml: String,
     lffmr: String,
     lffmf: String,

     smlpv: String,
     smlpl: String,
     smlpr: String,
     smlpf: String,

     lmcv: String,
     lmcl: String,
     lmcr: String,
     lmcf: String,

     smfv: String,
     smfl: String,
     smfr: String,
     smff: String,

     basdv: String,
     basdl: String,
     basdr: String,
     basdf: String,

     lipdv: String,
     lipdl: String,
     lipdr: String,
     lipdf: String,

     bcdv: String,
     bcdl: String,
     bcdr: String,
     bcdf: String,

     pbldv: String,
     pbldl: String,
     pbldr: String,
     pbldf: String,

     //Dispositivos de pupitre

     velv: String,
     vell: String,
     velr: String,
     velf: String,

     micv: String,
     micl: String,
     micr: String,
     micf: String,

     bsv: String,
     bsl: String,
     bsr: String,
     bsf: String,

     vv: String,
     vl: String,
     vr: String,
     vf: String,

     pbsv: String,
     pbsl: String,
     pbsr: String,
     pbsf: String,

     dov: String,
     dol: String,
     dor: String,
     dof: String,

     pdov: String,
     pdol: String,
     pdor: String,
     pdof: String,

     pmpv: String,
     pmpl: String,
     pmpr: String,
     pmpf: String,

     // Tapa completa
     
     tapav: String,
     tapal: String,
     tapar: String,
     tapaf: String,

     tcav: String,
     tcal: String,
     tcar: String,
     tcaf: String,

     thv: String,
     thl: String,
     thr: String,
     thf: String,

     atv: String,
     atl: String,
     atr: String,
     atf: String,

     //Palanca emisora de ordenes

     actv: String,
     actl: String,
     actr: String,
     actf: String,

     tgv: String,
     tgl: String,
     tgr: String,
     tgf: String,

     pv: String,
     pl: String,
     pr: String,
     pf: String,

     ecv: String,
     ecl: String,
     ecr: String,
     ecf: String,

     ihmv: String,
     ihml: String,
     ihmr: String,
     ihmf: String,

     //Emisor de ordenes

     pdc1v: String,
     pdc1l: String,
     pdc1r: String,
     pdc1f: String,

     pdc2v: String,
     pdc2l: String,
     pdc2r: String,
     pdc2f: String,

     sv: String,
     sl: String,
     sr: String,
     sf: String,
     
     siv: String,
     sil: String,
     sir: String,
     sif: String,

     elcv: String,
     elcl: String,
     elcr: String,
     elcf: String,

     ptcv: String,
     ptcl: String,
     ptcr: String,
     ptcf: String,

     mtv: String,
     mtl: String,
     mtr: String,
     mtf: String,

     dbv: String,
     dbl: String,
     dbr: String,
     dbf: String,

     rbv: String,
     rbl: String,
     rbr: String,
     rbf: String,

     s21v: String,
     s21l: String,
     s21r: String,
     s21f: String,

     s22v: String,
     s22l: String,
     s22r: String,
     s22f: String,

     s23v: String,
     s23l: String,
     s23r: String,
     s23f: String,

     s24v: String,
     s24l: String,
     s24r: String,
     s24f: String,

     //Interruptor selector

     cocov: String,
     cocol: String,
     cocor: String,
     cocof: String,

     mav: String,
     mal: String,
     mar: String,
     maf: String,

     denv: String,
     denl: String,
     denr: String,
     denf: String,

     diblv: String,
     dibll: String,
     diblr: String,
     diblf: String,

     blmiv: String,
     blmil: String,
     blmir: String,
     blmif: String,

     pecov: String,
     pecol: String,
     pecor: String,
     pecof: String,

     anv: String,
     anl: String,
     anr: String,
     anf: String,

     muprv: String,
     muprl: String,
     muprr: String,
     muprf: String,

     pguiav: String,
     pguial: String,
     pguiar: String,
     pguiaf: String,

     torv: String,
     torl: String,
     torr: String,
     torf: String,

     //interruptor con llave

     cerradurav: String,
     cerradural: String,
     cerradurar: String,
     cerraduraf: String,

     microv: String,
     microl: String,
     micror: String,
     microf: String,

     dbloqueov: String,
     dbloqueol: String,
     dbloqueor: String,
     dbloqueof: String,

     sointv: String,
     sointl: String,
     sointr: String,
     sointf: String,

     //Conjunto de potenciometro

     pov: String,
     pol: String,
     por: String,
     pof: String,

     angmv: String,
     angml: String,
     angmr: String,
     angmf: String,

     tcv: String,
     tcl: String,
     tcr: String,
     tcf: String,

     rdv: String,
     rdl: String,
     rdr: String,
     rdf: String,

     erv: String,
     erl: String,
     err: String,
     erf: String,

     cdv: String,
     cdl: String,
     cdr: String,
     cdf: String,

     poa1v: String,
     poa1l: String,
     poa1r: String,
     poa1f: String,

     poa2v: String,
     poa2l: String,
     poa2r: String,
     poa2f: String,

     obs2: String,
    
     // Pupitre Motriz 2

     m2kpv: String,
     m2kpl: String,
     m2kpr: String,
     m2kpf: String,

     m2cv: String,
     m2cl: String,
     m2cr: String,
     m2cf: String,
     
     m2plv: String,
     m2pll: String,
     m2plr: String,
     m2plf: String,

     //Plastron de pupitre izq M2
     m2bpav: String,
     m2bpal: String,
     m2bpar: String,
     m2bpaf: String,

     m2bdmv: String,
     m2bdml: String,
     m2bdmr: String,
     m2bdmf: String,

     m2bapv: String,
     m2bapl: String,
     m2bapr: String,
     m2bapf: String,

     m2pmcv: String,
     m2pmcl: String,
     m2pmcr: String,
     m2pmcf: String,

     m2baav: String,
     m2baal: String,
     m2baar: String,
     m2baaf: String,

     m2blpv: String,
     m2blpl: String,
     m2blpr: String,
     m2blpf: String,

     m2baiv: String,
     m2bail: String,
     m2bair: String,
     m2baif: String,

     m2basiv: String,
     m2basil: String,
     m2basir: String,
     m2basif: String,

     m2lipiv: String,
     m2lipil: String,
     m2lipir: String,
     m2lipif: String,

     m2bciv: String,
     m2bcil: String,
     m2bcir: String,
     m2bcif: String,

     m2pbliv: String,
     m2pblil: String,
     m2pblir: String,
     m2pblif: String,

     //Plastron de pupitre derecho M2

     m2bpsv: String,
     m2bpsl: String,
     m2bpsr: String,
     m2bpsf: String,

     m2scdv: String,
     m2scdl: String,
     m2scdr: String,
     m2scdf: String,

     m2lffmv: String,
     m2lffml: String,
     m2lffmr: String,
     m2lffmf: String,

     m2smlpv: String,
     m2smlpl: String,
     m2smlpr: String,
     m2smlpf: String,

     m2lmcv: String,
     m2lmcl: String,
     m2lmcr: String,
     m2lmcf: String,

     m2smfv: String,
     m2smfl: String,
     m2smfr: String,
     m2smff: String,

     m2basdv: String,
     m2basdl: String,
     m2basdr: String,
     m2basdf: String,

     m2lipdv: String,
     m2lipdl: String,
     m2lipdr: String,
     m2lipdf: String,

     m2bcdv: String,
     m2bcdl: String,
     m2bcdr: String,
     m2bcdf: String,

     m2pbldv: String,
     m2pbldl: String,
     m2pbldr: String,
     m2pbldf: String,

     //Dispositivos de pupitre M2

     m2velv: String,
     m2vell: String,
     m2velr: String,
     m2velf: String,

     m2micv: String,
     m2micl: String,
     m2micr: String,
     m2micf: String,

     m2bsv: String,
     m2bsl: String,
     m2bsr: String,
     m2bsf: String,

     m2vv: String,
     m2vl: String,
     m2vr: String,
     m2vf: String,

     m2pbsv: String,
     m2pbsl: String,
     m2pbsr: String,
     m2pbsf: String,

     m2dov: String,
     m2dol: String,
     m2dor: String,
     m2dof: String,

     m2pdov: String,
     m2pdol: String,
     m2pdor: String,
     m2pdof: String,

     m2pmpv: String,
     m2pmpl: String,
     m2pmpr: String,
     m2pmpf: String,

     //Manupulador M2 Tapa completa
     
     m2tapav: String,
     m2tapal: String,
     m2tapar: String,
     m2tapaf: String,

     m2tcav: String,
     m2tcal: String,
     m2tcar: String,
     m2tcaf: String,

     m2thv: String,
     m2thl: String,
     m2thr: String,
     m2thf: String,

     m2atv: String,
     m2atl: String,
     m2atr: String,
     m2atf: String,

     //Palanca emisora de ordenes

     m2actv: String,
     m2actl: String,
     m2actr: String,
     m2actf: String,

     m2tgv: String,
     m2tgl: String,
     m2tgr: String,
     m2tgf: String,

     m2pv: String,
     m2pl: String,
     m2pr: String,
     m2pf: String,

     m2ecv: String,
     m2ecl: String,
     m2ecr: String,
     m2ecf: String,

     m2ihmv: String,
     m2ihml: String,
     m2ihmr: String,
     m2ihmf: String,

     //Emisor de ordenes

     m2pdc1v: String,
     m2pdc1l: String,
     m2pdc1r: String,
     m2pdc1f: String,

     m2pdc2v: String,
     m2pdc2l: String,
     m2pdc2r: String,
     m2pdc2f: String,

     m2sv: String,
     m2sl: String,
     m2sr: String,
     m2sf: String,
     
     m2siv: String,
     m2sil: String,
     m2sir: String,
     m2sif: String,

     m2elcv: String,
     m2elcl: String,
     m2elcr: String,
     m2elcf: String,

     m2ptcv: String,
     m2ptcl: String,
     m2ptcr: String,
     m2ptcf: String,

     m2mtv: String,
     m2mtl: String,
     m2mtr: String,
     m2mtf: String,

     m2dbv: String,
     m2dbl: String,
     m2dbr: String,
     m2dbf: String,

     m2rbv: String,
     m2rbl: String,
     m2rbr: String,
     m2rbf: String,

     m2s21v: String,
     m2s21l: String,
     m2s21r: String,
     m2s21f: String,

     m2s22v: String,
     m2s22l: String,
     m2s22r: String,
     m2s22f: String,

     m2s23v: String,
     m2s23l: String,
     m2s23r: String,
     m2s23f: String,

     m2s24v: String,
     m2s24l: String,
     m2s24r: String,
     m2s24f: String,

     //Interruptor selector

     m2cocov: String,
     m2cocol: String,
     m2cocor: String,
     m2cocof: String,

     m2mav: String,
     m2mal: String,
     m2mar: String,
     m2maf: String,

     m2denv: String,
     m2denl: String,
     m2denr: String,
     m2denf: String,

     m2diblv: String,
     m2dibll: String,
     m2diblr: String,
     m2diblf: String,

     m2blmiv: String,
     m2blmil: String,
     m2blmir: String,
     m2blmif: String,

     m2pecov: String,
     m2pecol: String,
     m2pecor: String,
     m2pecof: String,

     m2anv: String,
     m2anl: String,
     m2anr: String,
     m2anf: String,

     m2muprv: String,
     m2muprl: String,
     m2muprr: String,
     m2muprf: String,

     m2pguiav: String,
     m2pguial: String,
     m2pguiar: String,
     m2pguiaf: String,

     m2torv: String,
     m2torl: String,
     m2torr: String,
     m2torf: String,

     //interruptor con llave

     m2cerradurav: String,
     m2cerradural: String,
     m2cerradurar: String,
     m2cerraduraf: String,

     m2microv: String,
     m2microl: String,
     m2micror: String,
     m2microf: String,

     m2dbloqueov: String,
     m2dbloqueol: String,
     m2dbloqueor: String,
     m2dbloqueof: String,

     m2sointv: String,
     m2sointl: String,
     m2sointr: String,
     m2sointf: String,

     //Conjunto de potenciometro

     m2pov: String,
     m2pol: String,
     m2por: String,
     m2pof: String,

     m2angmv: String,
     m2angml: String,
     m2angmr: String,
     m2angmf: String,

     m2tcv: String,
     m2tcl: String,
     m2tcr: String,
     m2tcf: String,

     m2rdv: String,
     m2rdl: String,
     m2rdr: String,
     m2rdf: String,

     m2erv: String,
     m2erl: String,
     m2err: String,
     m2erf: String,

     m2cdv: String,
     m2cdl: String,
     m2cdr: String,
     m2cdf: String,

     m2poa1v: String,
     m2poa1l: String,
     m2poa1r: String,
     m2poa1f: String,

     m2poa2v: String,
     m2poa2l: String,
     m2poa2r: String,
     m2poa2f: String,

     obs3: String,

     equipolUtilizado: {
      numberOfEquipo: Number,    
      arr: [{
          numberOfequ: String,
          marca: String,
          inv: String,
      }]
      },
  
     //Materiales
     materialUtilizado: {
      numberOfMaterial: Number,    
      arr: [{
          _id: String,
          code: String,
          description: String,
          voucherNumber: String,
          quantity: String,
          unit: String
      }]
  },
  
  documentFormCurrentState: {
      approvalByWorker    : { id_worker: String, checked: Boolean },
      approvalBySupervisor: { id_worker: String, checked: Boolean },
      approvalByMannager  : { id_worker: String, checked: Boolean },
      loading: Boolean
  },
  historyFile: [
      {
          id_worker: String,
          workerName: String,
    
          editDate: Date,
          editValue: Number
      }
  ]
  
  });
  
  module.exports = mongoose.model('memaM07', memaM07Schema);
