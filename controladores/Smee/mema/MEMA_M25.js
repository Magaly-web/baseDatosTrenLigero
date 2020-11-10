
const memaM25 = require('../../../models/smee/mema/MEMA_M25');

const mema_M25 = {};
//Metodos
// Obtiene todos los empleados
mema_M25.getmema_M25Data = async (req, res)=>{
    const {id} = req.params;

    const memam25 = await memaM25.findById(id)
    res.json(memam25)
}

// Editar un documento
mema_M25.editmema_M25Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM25 = {
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

        r12ef: req.body.r12eff || '',
        r12l: req.body.r12ll || '',
        r12r: req.body.r12rr || '',
        r12p: req.body.r12pp || '',

        r11ef: req.body.r11eff || '',
        r11l: req.body.r11ll || '',
        r11r: req.body.r11rr || '',
        r11p: req.body.r11pp || '',

        r22ef: req.body.r22eff || '',
        r22l: req.body.r22ll || '',
        r22r: req.body.r22rr || '',
        r22p: req.body.r22pp || '',

        r21ef: req.body.r21eff || '',
        r21l: req.body.r21ll || '',
        r21r: req.body.r21rr || '',
        r21p: req.body.r21pp || '',

        r32ef: req.body.r32eff || '',
        r32l: req.body.r32ll || '',
        r32r: req.body.r32rr || '',
        r32p: req.body.r32pp || '',

        r31ef: req.body.r31eff || '',
        r31l: req.body.r31ll || '',
        r31r: req.body.r31rr || '',
        r31p: req.body.r31pp || '',

        r42ef: req.body.r42eff || '',
        r42l: req.body.r42ll || '',
        r42r: req.body.r42rr || '',
        r42p: req.body.r42pp || '',

        r41ef: req.body.r41eff || '',
        r41l: req.body.r41ll || '',
        r41r: req.body.r41rr || '',
        r41p: req.body.r41pp || '',

        v1ef: req.body.v1eff || '',
        v1l: req.body.v1ll || '',
        v1r: req.body.v1rr || '',
        v1p: req.body.v1pp || '',

        v2ef: req.body.v2eff || '',
        v2l: req.body.v2ll || '',
        v2r: req.body.v2rr || '',
        v2p: req.body.v2pp || '',

        v3ef: req.body.v3eff || '',
        v3l: req.body.v3ll || '',
        v3r: req.body.v3rr || '',
        v3p: req.body.v3pp || '',

        v4ef: req.body.v4eff || '',
        v4l: req.body.v4ll || '',
        v4r: req.body.v4rr || '',
        v4p: req.body.v4pp || '',

        c1ef: req.body.c1eff || '',
        c1l: req.body.c1ll || '',
        c1r: req.body.c1rr || '',
        c1p: req.body.c1pp || '',

        c2ef: req.body.c2eff || '',
        c2l: req.body.c2ll || '',
        c2r: req.body.c2rr || '',
        c2p: req.body.c2pp || '',

        c3ef: req.body.c3eff || '',
        c3l: req.body.c3ll || '',
        c3r: req.body.c3rr || '',
        c3p: req.body.c3pp || '',

        c4ef: req.body.c4eff || '',
        c4l: req.body.c4ll || '',
        c4r: req.body.c4rr || '',
        c4p: req.body.c4pp || '',

        obs2: req.body.obs22 || '',

        //Tarjeta de impulso a 22

        r2212ef: req.body.r2212eff || '',
        r2212l: req.body.r2212ll || '',
        r2212r: req.body.r2212rr || '',
        r2212p: req.body.r2212pp || '',

        r2211ef: req.body.r2211eff || '',
        r2211l: req.body.r2211ll || '',
        r2211r: req.body.r2211rr || '',
        r2211p: req.body.r2211pp || '',

        r2222ef: req.body.r2222eff || '',
        r2222l: req.body.r2222ll || '',
        r2222r: req.body.r2222rr || '',
        r2222p: req.body.r2222pp || '',

        r2221ef: req.body.r2221eff || '',
        r2221l: req.body.r2221ll || '',
        r2221r: req.body.r2221rr || '',
        r2221p: req.body.r2221pp || '',

        r2232ef: req.body.r2232eff || '',
        r2232l: req.body.r2232ll || '',
        r2232r: req.body.r2232rr || '',
        r2232p: req.body.r2232pp || '',

        r2231ef: req.body.r2231eff || '',
        r2231l: req.body.r2231ll || '',
        r2231r: req.body.r2231rr || '',
        r2231p: req.body.r2231pp || '',

        r2242ef: req.body.r2242eff || '',
        r2242l: req.body.r2242ll || '',
        r2242r: req.body.r2242rr || '',
        r2242p: req.body.r2242pp || '',

        r2241ef: req.body.r2241eff || '',
        r2241l: req.body.r2241ll || '',
        r2241r: req.body.r2241rr || '',
        r2241p: req.body.r2241pp || '',

        v221ef: req.body.v221eff || '',
        v221l: req.body.v221ll || '',
        v221r: req.body.v221rr || '',
        v221p: req.body.v221pp || '',

        v222ef: req.body.v222eff || '',
        v222l: req.body.v222ll || '',
        v222r: req.body.v222rr || '',
        v222p: req.body.v222pp || '',

        v223ef: req.body.v223eff || '',
        v223l: req.body.v223ll || '',
        v223r: req.body.v223rr || '',
        v223p: req.body.v223pp || '',

        v224ef: req.body.v224eff || '',
        v224l: req.body.v224ll || '',
        v224r: req.body.v224rr || '',
        v224p: req.body.v224pp || '',

        c221ef: req.body.c221eff || '',
        c221l: req.body.c221ll || '',
        c221r: req.body.c221rr || '',
        c221p: req.body.c221pp || '',

        c222ef: req.body.c222eff || '',
        c222l: req.body.c222ll || '',
        c222r: req.body.c222rr || '',
        c222p: req.body.c222pp || '',

        c223ef: req.body.c223eff || '',
        c223l: req.body.c223ll || '',
        c223r: req.body.c223rr || '',
        c223p: req.body.c223pp || '',

        c224ef: req.body.c224eff || '',
        c224l: req.body.c224ll || '',
        c224r: req.body.c224rr || '',
        c224p: req.body.c224pp || '',

        obs3: req.body.obs33 || '',

        //Tarjeta de impulso a 81

        i81r1ef: req.body.i81r1eff || '',
        i81r1l: req.body.i81r1ll || '',
        i81r1r: req.body.i81r1rr || '',
        i81r1p: req.body.i81r1pp || '',

        i81r4ef: req.body.i81r4eff || '',
        i81r4l: req.body.i81r4ll || '',
        i81r4r: req.body.i81r4rr || '',
        i81r4p: req.body.i81r4pp || '',

        i81v1ef: req.body.i81v1eff || '',
        i81v1l: req.body.i81v1ll || '',
        i81v1r: req.body.i81v1rr || '',
        i81v1p: req.body.i81v1pp || '',

        i81v2ef: req.body.i81v2eff || '',
        i81v2l: req.body.i81v2ll || '',
        i81v2r: req.body.i81v2rr || '',
        i81v2p: req.body.i81v2pp || '',

        i81v3ef: req.body.i81v3eff || '',
        i81v3l: req.body.i81v3ll || '',
        i81v3r: req.body.i81v3rr || '',
        i81v3p: req.body.i81v3pp || '',

        i81v4ef: req.body.i81v4eff || '',
        i81v4l: req.body.i81v4ll || '',
        i81v4r: req.body.i81v4rr || '',
        i81v4p: req.body.i81v4pp || '',

        //Fusible para pulso de precarga

        f1ef: req.body.f1eff || '',
        f1l: req.body.f1ll || '',
        f1r: req.body.f1rr || '',
        f1c: req.body.f1cc || '',

        f2ef: req.body.f2eff || '',
        f2l: req.body.f2ll || '',
        f2r: req.body.f2rr || '',
        f2c: req.body.f2cc || '',

        obs4: req.body.obs44 || '',

        //Banco de Capacitores
       
        c59ef: req.body.c59eff || '',
        c59l: req.body.c59ll || '',
        c59r: req.body.c59rr || '',
        c59p: req.body.c59pp || '',

        r59ef: req.body.r59eff || '',
        r59l: req.body.r59ll || '',
        r59r: req.body.r59rr || '',
        r59p: req.body.r59pp || '',

        c39ef: req.body.c39eff || '',
        c39l: req.body.c39ll || '',
        c39r: req.body.c39rr || '',
        c39p: req.body.c39pp || '',

        r39ef: req.body.r39eff || '',
        r39l: req.body.r39ll || '',
        r39r: req.body.r39rr || '',
        r39p: req.body.r39pp || '',

        c19ef: req.body.c19eff || '',
        c19l: req.body.c19ll || '',
        c19r: req.body.c19rr || '',
        c19p: req.body.c19pp || '',

        r19ef: req.body.r19eff || '',
        r19l: req.body.r19ll || '',
        r19r: req.body.r19rr || '',
        r19p: req.body.r19pp || '',

        c69ef: req.body.c69eff || '',
        c69l: req.body.c69ll || '',
        c69r: req.body.c69rr || '',
        c69p: req.body.c69pp || '',

        r69ef: req.body.r69eff || '',
        r69l: req.body.r69ll || '',
        r69r: req.body.r69rr || '',
        r69p: req.body.r69pp || '',

        c49ef: req.body.c49eff || '',
        c49l: req.body.c49ll || '',
        c49r: req.body.c49rr || '',
        c49p: req.body.c49pp || '',

        r49ef: req.body.r49eff || '',
        r49l: req.body.r49ll || '',
        r49r: req.body.r49rr || '',
        r49p: req.body.r49pp || '',

        c29ef: req.body.c29eff || '',
        c29l: req.body.c29ll || '',
        c29r: req.body.c29rr || '',
        c29p: req.body.c29pp || '',

        r29ef: req.body.r29eff || '',
        r29l: req.body.r29ll || '',
        r29r: req.body.r29rr || '',
        r29p: req.body.r29pp || '',

        //L1

        l1nrlef: req.body.l1nrleff || '',
        l1nrll: req.body.l1nrlll || '',
        l1nrlr: req.body.l1nrlrr || '',
        l1nrlp: req.body.l1nrlpp || '',

        l1r13ef: req.body.l1r13eff || '',
        l1r13l: req.body.l1r13ll || '',
        l1r13r: req.body.l1r13rr || '',
        l1r13p: req.body.l1r13pp || '',

        l1r14ef: req.body.l1r14eff || '',
        l1r14l: req.body.l1r14ll || '',
        l1r14r: req.body.l1r14rr || '',
        l1r14p: req.body.l1r14pp || '',

        l1r15ef: req.body.l1r15eff || '',
        l1r15l: req.body.l1r15ll || '',
        l1r15r: req.body.l1r15rr || '',
        l1r15p: req.body.l1r15pp || '',

        l1r16ef: req.body.l1r16eff || '',
        l1r16l: req.body.l1r16ll || '',
        l1r16r: req.body.l1r16rr || '',
        l1r16p: req.body.l1r16pp || '',

        l1r17ef: req.body.l1r17eff || '',
        l1r17l: req.body.l1r17ll || '',
        l1r17r: req.body.l1r17rr || '',
        l1r17p: req.body.l1r17pp || '',

        l1r18ef: req.body.l1r18eff || '',
        l1r18l: req.body.l1r18ll || '',
        l1r18r: req.body.l1r18rr || '',
        l1r18p: req.body.l1r18pp || '',

        obs5: req.body.obs55 || '',
        
        //Ondulador

        av11ef: req.body.av11eff || '',
        av11l: req.body.av11ll || '',
        av11r: req.body.av11rr || '',
        av11p: req.body.av11pp || '',

        av12ef: req.body.av12eff || '',
        av12l: req.body.av12ll || '',
        av12r: req.body.av12rr || '',
        av12p: req.body.av12pp || '',

        av41ef: req.body.av41eff || '',
        av41l: req.body.av41ll || '',
        av41r: req.body.av41rr || '',
        av41p: req.body.av41pp || '',

        av42ef: req.body.av42eff || '',
        av42l: req.body.av42ll || '',
        av42r: req.body.av42rr || '',
        av42p: req.body.av42pp || '',

        av61ef: req.body.av61eff || '',
        av61l: req.body.av61ll || '',
        av61r: req.body.av61rr || '',
        av61p: req.body.av61pp || '',

        av62ef: req.body.av62eff || '',
        av62l: req.body.av62ll || '',
        av62r: req.body.av62rr || '',
        av62p: req.body.av62pp || '',

        ar42ef: req.body.ar42eff || '',
        ar42l: req.body.ar42ll || '',
        ar42r: req.body.ar42rr || '',
        ar42p: req.body.ar42pp || '',

        ar41ef: req.body.ar41eff || '',
        ar41l: req.body.ar41ll || '',
        ar41r: req.body.ar41rr || '',
        ar41p: req.body.ar41pp || '',

        ar43ef: req.body.ar43eff || '',
        ar43l: req.body.ar43ll || '',
        ar43r: req.body.ar43rr || '',
        ar43p: req.body.ar43pp || '',

        ar63ef: req.body.ar63eff || '',
        ar63l: req.body.ar63ll || '',
        ar63r: req.body.ar63rr || '',
        ar63p: req.body.ar63pp || '',

        ar13ef: req.body.ar13eff || '',
        ar13l: req.body.ar13ll || '',
        ar13r: req.body.ar13rr || '',
        ar13p: req.body.ar13pp || '',

        ac11ef: req.body.ac11eff || '',
        ac11l: req.body.ac11ll || '',
        ac11r: req.body.ac11rr || '',
        ac11p: req.body.ac11pp || '',

        ac61ef: req.body.ac61eff || '',
        ac61l: req.body.ac61ll || '',
        ac61r: req.body.ac61rr || '',
        ac61p: req.body.ac61pp || '',

        ac41ef: req.body.ac41eff || '',
        ac41l: req.body.ac41ll || '',
        ac41r: req.body.ac41rr || '',
        ac41p: req.body.ac41pp || '',

        ac12ef: req.body.ac12eff || '',
        ac12l: req.body.ac12ll || '',
        ac12r: req.body.ac12rr || '',
        ac12p: req.body.ac12pp || '',

        ac42ef: req.body.ac42eff || '',
        ac42l: req.body.ac42ll || '',
        ac42r: req.body.ac42rr || '',
        ac42p: req.body.ac42pp || '',

        ac62ef: req.body.ac62eff || '',
        ac62l: req.body.ac62ll || '',
        ac62r: req.body.ac62rr || '',
        ac62p: req.body.ac62pp || '',

        ar11ef: req.body.ar11eff || '',
        ar11l: req.body.ar11ll || '',
        ar11r: req.body.ar11rr || '',
        ar11p: req.body.ar11pp || '',

        ar12ef: req.body.ar12eff || '',
        ar12l: req.body.ar12ll || '',
        ar12r: req.body.ar12rr || '',
        ar12p: req.body.ar12pp || '',

        ar61ef: req.body.ar61eff || '',
        ar61l: req.body.ar61ll || '',
        ar61r: req.body.ar61rr || '',
        ar61p: req.body.ar61pp || '',

        ar62ef: req.body.ar62eff || '',
        ar62l: req.body.ar62ll || '',
        ar62r: req.body.ar62rr || '',
        ar62p: req.body.ar62pp || '',

        al43ef: req.body.al43eff || '',
        al43l: req.body.al43ll || '',
        al43r: req.body.al43rr || '',
        al43p: req.body.al43pp || '',

        al63ef: req.body.al63eff || '',
        al63l: req.body.al63ll || '',
        al63r: req.body.al63rr || '',
        al63p: req.body.al63pp || '',

        al13ef: req.body.al13eff || '',
        al13l: req.body.al13ll || '',
        al13r: req.body.al13rr || '',
        al13p: req.body.al13pp || '',

        aa11ef: req.body.aa11eff || '',
        aa11l: req.body.aa11ll || '',
        aa11r: req.body.aa11rr || '',
        aa11p: req.body.aa11pp || '',

        aa41ef: req.body.aa41eff || '',
        aa41l: req.body.aa41ll || '',
        aa41r: req.body.aa41rr || '',
        aa41p: req.body.aa41pp || '',

        aa61ef: req.body.aa61eff || '',
        aa61l: req.body.aa61ll || '',
        aa61r: req.body.aa61rr || '',
        aa61p: req.body.aa61pp || '',

        astef: req.body.asteff || '',
        astl: req.body.astll || '',
        astr: req.body.astrr || '',
        astp: req.body.astpp || '',

        nl: req.body.nll || '',
        sp: req.body.spp || '',
        ta: req.body.taa || '',

        obs6: req.body.obs66 || '',
        
        //A20

        a20v51ef: req.body.a20v51eff || '',
        a20v51l: req.body.a20v51ll || '',
        a20v51r: req.body.a20v51rr || '',
        a20v51p: req.body.a20v51pp || '',

        a20v52ef: req.body.a20v52eff || '',
        a20v52l: req.body.a20v52ll || '',
        a20v52r: req.body.a20v52rr || '',
        a20v52p: req.body.a20v52pp || '',

        a20v21ef: req.body.a20v21eff || '',
        a20v21l: req.body.a20v21ll || '',
        a20v21r: req.body.a20v21rr || '',
        a20v21p: req.body.a20v21pp || '',

        a20v22ef: req.body.a20v22eff || '',
        a20v22l: req.body.a20v22ll || '',
        a20v22r: req.body.a20v22rr || '',
        a20v22p: req.body.a20v22pp || '',

        a20v31ef: req.body.a20v31eff || '',
        a20v31l: req.body.a20v31ll || '',
        a20v31r: req.body.a20v31rr || '',
        a20v31p: req.body.a20v31pp || '',

        a20v32ef: req.body.a20v32eff || '',
        a20v32l: req.body.a20v32ll || '',
        a20v32r: req.body.a20v32rr || '',
        a20v32p: req.body.a20v32pp || '',

        a20r52ef: req.body.a20r52eff || '',
        a20r52l: req.body.a20r52ll || '',
        a20r52r: req.body.a20r52rr || '',
        a20r52p: req.body.a20r52pp || '',

        a20r51ef: req.body.a20r51eff || '',
        a20r51l: req.body.a20r51ll || '',
        a20r51r: req.body.a20r51rr || '',
        a20r51p: req.body.a20r51pp || '',

        a20r53ef: req.body.a20r53eff || '',
        a20r53l: req.body.a20r53ll || '',
        a20r53r: req.body.a20r53rr || '',
        a20r53p: req.body.a20r53pp || '',

        a20r33ef: req.body.a20r33eff || '',
        a20r33l: req.body.a20r33ll || '',
        a20r33r: req.body.a20r33rr || '',
        a20r33p: req.body.a20r33pp || '',

        a20r23ef: req.body.a20r23eff || '',
        a20r23l: req.body.a20r23ll || '',
        a20r23r: req.body.a20r23rr || '',
        a20r23p: req.body.a20r23pp || '',

        a20c21ef: req.body.a20c21eff || '',
        a20c21l: req.body.a20c21ll || '',
        a20c21r: req.body.a20c21rr || '',
        a20c21p: req.body.a20c21pp || '',

        a20c31ef: req.body.a20c31eff || '',
        a20c31l: req.body.a20c31ll || '',
        a20c31r: req.body.a20c31rr || '',
        a20c31p: req.body.a20c31pp || '',

        a20c51ef: req.body.a20c51eff || '',
        a20c51l: req.body.a20c51ll || '',
        a20c51r: req.body.a20c51rr || '',
        a20c51p: req.body.a20c51pp || '',

        a20c22ef: req.body.a20c22eff || '',
        a20c22l: req.body.a20c22ll || '',
        a20c22r: req.body.a20c22rr || '',
        a20c22p: req.body.a20c22pp || '',

        a20c52ef: req.body.a20c52eff || '',
        a20c52l: req.body.a20c52ll || '',
        a20c52r: req.body.a20c52rr || '',
        a20c52p: req.body.a20c52pp || '',

        a20c32ef: req.body.a20c32eff || '',
        a20c32l: req.body.a20c32ll || '',
        a20c32r: req.body.a20c32rr || '',
        a20c32p: req.body.a20c32pp || '',

        a20r21ef: req.body.a20r21eff || '',
        a20r21l: req.body.a20r21ll || '',
        a20r21r: req.body.a20r21rr || '',
        a20r21p: req.body.a20r21pp || '',

        a20r22ef: req.body.a20r22eff || '',
        a20r22l: req.body.a20r22ll || '',
        a20r22r: req.body.a20r22rr || '',
        a20r22p: req.body.a20r22pp || '',

        a20r31ef: req.body.a20r31eff || '',
        a20r31l: req.body.a20r31ll || '',
        a20r31r: req.body.a20r31rr || '',
        a20r31p: req.body.a20r31pp || '',

        a20r32ef: req.body.a20r32eff || '',
        a20r32l: req.body.a20r32ll || '',
        a20r32r: req.body.a20r32rr || '',
        a20r32p: req.body.a20r32pp || '',

        a20l23ef: req.body.a20l23eff || '',
        a20l23l: req.body.a20l23ll || '',
        a20l23r: req.body.a20l23rr || '',
        a20l23p: req.body.a20l23pp || '',

        a20l33ef: req.body.a20l33eff || '',
        a20l33l: req.body.a20l33ll || '',
        a20l33r: req.body.a20l33rr || '',
        a20l33p: req.body.a20l33pp || '',

        a20l53ef: req.body.a20l53eff || '',
        a20l53l: req.body.a20l53ll || '',
        a20l53r: req.body.a20l53rr || '',
        a20l53p: req.body.a20l53pp || '',

        a20a51ef: req.body.a20a51eff || '',
        a20a51l: req.body.a20a51ll || '',
        a20a51r: req.body.a20a51rr || '',
        a20a51p: req.body.a20a51pp || '',

        a20a21ef: req.body.a20a21eff || '',
        a20a21l: req.body.a20a21ll || '',
        a20a21r: req.body.a20a21rr || '',
        a20a21p: req.body.a20a21pp || '',

        a20a31ef: req.body.a20a31eff || '',
        a20a31l: req.body.a20a31ll || '',
        a20a31r: req.body.a20a31rr || '',
        a20a31p: req.body.a20a31pp || '',

        a20seteef: req.body.a20seteeff || '',
        a20setel: req.body.a20setell || '',
        a20seter: req.body.a20seterr || '',
        a20setep: req.body.a20setepp || '',

        a20nl: req.body.a20nll || '',
        a20sp: req.body.a20spp || '',
        a20ta: req.body.a20taa || '',

        obs7: req.body.obs77 || '',

        //A30
        
        a30v1ef: req.body.a30v1eff || '',
        a30v1l: req.body.a30v1ll || '',
        a30v1r: req.body.a30v1rr || '',
        a30v1p: req.body.a30v1pp || '',

        a30v2ef: req.body.a30v2eff || '',
        a30v2l: req.body.a30v2ll || '',
        a30v2r: req.body.a30v2rr || '',
        a30v2p: req.body.a30v2pp || '',

        a30v3ef: req.body.a30v3eff || '',
        a30v3l: req.body.a30v3ll || '',
        a30v3r: req.body.a30v3rr || '',
        a30v3p: req.body.a30v3pp || '',

        a30v4ef: req.body.a30v4eff || '',
        a30v4l: req.body.a30v4ll || '',
        a30v4r: req.body.a30v4rr || '',
        a30v4p: req.body.a30v4pp || '',

        a30v5ef: req.body.a30v5eff || '',
        a30v5l: req.body.a30v5ll || '',
        a30v5r: req.body.a30v5rr || '',
        a30v5p: req.body.a30v5pp || '',

        a30v6ef: req.body.a30v6eff || '',
        a30v6l: req.body.a30v6ll || '',
        a30v6r: req.body.a30v6rr || '',
        a30v6p: req.body.a30v6pp || '',

        a30v7ef: req.body.a30v7eff || '',
        a30v7l: req.body.a30v7ll || '',
        a30v7r: req.body.a30v7rr || '',
        a30v7p: req.body.a30v7pp || '',

        a30v9ef: req.body.a30v9eff || '',
        a30v9l: req.body.a30v9ll || '',
        a30v9r: req.body.a30v9rr || '',
        a30v9p: req.body.a30v9pp || '',

        a30r1ef: req.body.a30r1eff || '',
        a30r1l: req.body.a30r1ll || '',
        a30r1r: req.body.a30r1rr || '',
        a30r1p: req.body.a30r1pp || '',

        a30r2ef: req.body.a30r2eff || '',
        a30r2l: req.body.a30r2ll || '',
        a30r2r: req.body.a30r2rr || '',
        a30r2p: req.body.a30r2pp || '',

        a30r3ef: req.body.a30r3eff || '',
        a30r3l: req.body.a30r3ll || '',
        a30r3r: req.body.a30r3rr || '',
        a30r3p: req.body.a30r3pp || '',

        a30r4ef: req.body.a30r4eff || '',
        a30r4l: req.body.a30r4ll || '',
        a30r4r: req.body.a30r4rr || '',
        a30r4p: req.body.a30r4pp || '',

        a30r5ef: req.body.a30r5eff || '',
        a30r5l: req.body.a30r5ll || '',
        a30r5r: req.body.a30r5rr || '',
        a30r5p: req.body.a30r5pp || '',

        a30r6ef: req.body.a30r6eff || '',
        a30r6l: req.body.a30r6ll || '',
        a30r6r: req.body.a30r6rr || '',
        a30r6p: req.body.a30r6pp || '',

        a30c1ef: req.body.a30c1eff || '',
        a30c1l: req.body.a30c1ll || '',
        a30c1r: req.body.a30c1rr || '',
        a30c1p: req.body.a30c1pp || '',

        a30c2ef: req.body.a30c2eff || '',
        a30c2l: req.body.a30c2ll || '',
        a30c2r: req.body.a30c2rr || '',
        a30c2p: req.body.a30c2pp || '',

        a30c3ef: req.body.a30c3eff || '',
        a30c3l: req.body.a30c3ll || '',
        a30c3r: req.body.a30c3rr || '',
        a30c3p: req.body.a30c3pp || '',

        a30c4ef: req.body.a30c4eff || '',
        a30c4l: req.body.a30c4ll || '',
        a30c4r: req.body.a30c4rr || '',
        a30c4p: req.body.a30c4pp || '',

        a30c5ef: req.body.a30c5eff || '',
        a30c5l: req.body.a30c5ll || '',
        a30c5r: req.body.a30c5rr || '',
        a30c5p: req.body.a30c5pp || '',

        a30c6ef: req.body.a30c6eff || '',
        a30c6l: req.body.a30c6ll || '',
        a30c6r: req.body.a30c6rr || '',
        a30c6p: req.body.a30c6pp || '',

        a30c7ef: req.body.a30c7eff || '',
        a30c7l: req.body.a30c7ll || '',
        a30c7r: req.body.a30c7rr || '',
        a30c7p: req.body.a30c7pp || '',
        
        a30c8ef: req.body.a30c8eff || '',
        a30c8l: req.body.a30c8ll || '',
        a30c8r: req.body.a30c8rr || '',
        a30c8p: req.body.a30c8pp || '',

        a30a4ef: req.body.a30a4eff || '',
        a30a4l: req.body.a30a4ll || '',
        a30a4r: req.body.a30a4rr || '',
        a30a4p: req.body.a30a4pp || '',

        a30a5ef: req.body.a30a5eff || '',
        a30a5l: req.body.a30a5ll || '',
        a30a5r: req.body.a30a5rr || '',
        a30a5p: req.body.a30a5pp || '',

        a30seteef: req.body.a30seteeff || '',
        a30setel: req.body.a30setell || '',
        a30seter: req.body.a30seterr || '',
        a30setep: req.body.a30setepp || '',

        a30nl: req.body.a30nll || '',
        a30sp: req.body.a30spp || '',
        a30ta: req.body.a30taa || '',

        obs8: req.body.obs88 || '',
        
        //-------------------------------

    }
    await memaM25.findByIdAndUpdate(id, { $set: mema_M25}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M25.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM25.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M25.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM25.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M25.getAllmema_M25TypeM = async (req, res) => {
    const memam25 = await memaM25.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam25)
    };

    mema_M25.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM25New = {
        historyFile: req.body.historyFile || []
    }
    await memaM25.findByIdAndUpdate(id, { $set: historymemaM25New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M25.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam25 = await memaM25.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam25)
    }

    mema_M25.createmema_M25TypeM = async (req, res) => {
    const memam25 = new memaM25(req.body)

    await memam25.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M25;
