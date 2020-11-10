const memaM16 = require('../../../models/smee/mema/MEMA_M16');

const mema_M16 = {};
//Metodos
// Obtiene todos los empleados
mema_M16.getmema_M16Data = async (req, res)=>{
    const {id} = req.params;

    const memam16 = await memaM16.findById(id)
    res.json(memam16)
}

// Editar un documento
mema_M16.editmema_M16Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM16 = {
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
        //Luminarias lado derecho M1
        m1l1d: req.body.m1l1dd || '',
        m1dl1d: req.body.m1dl1dd || '',
        m1tc1d: req.body.m1tc1dd || '',
        m1bt1d: req.body.m1bt1dd || '',
        m1tf1d: req.body.m1tf1dd || '',
        m1bw1d: req.body.m1bw1dd || '',
        m1t81d: req.body.m1t81dd || '',
        m1p81d: req.body.m1p81dd || '',
        m1tw1d: req.body.m1tw1dd || '',
        m1t1d: req.body.m1t1dd || '',

        m1l2d: req.body.m1l2dd || '',
        m1dl2d: req.body.m1dl2dd || '',
        m1tc2d: req.body.m1tc2dd || '',
        m1bt2d: req.body.m1bt2dd || '',
        m1tf2d: req.body.m1tf2dd || '',
        m1bw2d: req.body.m1bw2dd || '',
        m1t82d: req.body.m1t82dd || '',
        m1p82d: req.body.m1p82dd || '',
        m1tw2d: req.body.m1tw2dd || '',
        m1t2d: req.body.m1t2dd || '',

        m1l3d: req.body.m1l3dd || '',
        m1dl3d: req.body.m1dl3dd || '',
        m1tc3d: req.body.m1tc3dd || '',
        m1bt3d: req.body.m1bt3dd || '',
        m1tf3d: req.body.m1tf3dd || '',
        m1bw3d: req.body.m1bw3dd || '',
        m1t83d: req.body.m1t83dd || '',
        m1p83d: req.body.m1p83dd || '',
        m1tw3d: req.body.m1tw3dd || '',
        m1t3d: req.body.m1t3dd || '',

        m1l4d: req.body.m1l4dd || '',
        m1dl4d: req.body.m1dl4dd || '',
        m1tc4d: req.body.m1tc4dd || '',
        m1bt4d: req.body.m1bt4dd || '',
        m1tf4d: req.body.m1tf4dd || '',
        m1bw4d: req.body.m1bw4dd || '',
        m1t84d: req.body.m1t84dd || '',
        m1p84d: req.body.m1p84dd || '',
        m1tw4d: req.body.m1tw4dd || '',
        m1t4d: req.body.m1t4dd || '',

        m1l5d: req.body.m1l5dd || '',
        m1dl5d: req.body.m1dl5dd || '',
        m1tc5d: req.body.m1tc5dd || '',
        m1bt5d: req.body.m1bt5dd || '',
        m1tf5d: req.body.m1tf5dd || '',
        m1bw5d: req.body.m1bw5dd || '',
        m1t85d: req.body.m1t85dd || '',
        m1p85d: req.body.m1p85dd || '',
        m1tw5d: req.body.m1tw5dd || '',
        m1t5d: req.body.m1t5dd || '',

        m1l6d: req.body.m1l6dd || '',
        m1dl6d: req.body.m1dl6dd || '',
        m1tc6d: req.body.m1tc6dd || '',
        m1bt6d: req.body.m1bt6dd || '',
        m1tf6d: req.body.m1tf6dd || '',
        m1bw6d: req.body.m1bw6dd || '',
        m1t86d: req.body.m1t86dd || '',
        m1p86d: req.body.m1p86dd || '',
        m1tw6d: req.body.m1tw6dd || '',
        m1t6d: req.body.m1t6dd || '',

        m1l7d: req.body.m1l7dd || '',
        m1dl7d: req.body.m1dl7dd || '',
        m1tc7d: req.body.m1tc7dd || '',
        m1bt7d: req.body.m1bt7dd || '',
        m1tf7d: req.body.m1tf7dd || '',
        m1bw7d: req.body.m1bw7dd || '',
        m1t87d: req.body.m1t87dd || '',
        m1p87d: req.body.m1p87dd || '',
        m1tw7d: req.body.m1tw7dd || '',
        m1t7d: req.body.m1t7dd || '',

        m1l8d: req.body.m1l8dd || '',
        m1dl8d: req.body.m1dl8dd || '',
        m1tc8d: req.body.m1tc8dd || '',
        m1bt8d: req.body.m1bt8dd || '',
        m1tf8d: req.body.m1tf8dd || '',
        m1bw8d: req.body.m1bw8dd || '',
        m1t88d: req.body.m1t88dd || '',
        m1p88d: req.body.m1p88dd || '',
        m1tw8d: req.body.m1tw8dd || '',
        m1t8d: req.body.m1t8dd || '',

        m1l9d: req.body.m1l9dd || '',
        m1dl9d: req.body.m1dl9dd || '',
        m1tc9d: req.body.m1tc9dd || '',
        m1bt9d: req.body.m1bt9dd || '',
        m1tf9d: req.body.m1tf9dd || '',
        m1bw9d: req.body.m1bw9dd || '',
        m1t89d: req.body.m1t89dd || '',
        m1p89d: req.body.m1p89dd || '',
        m1tw9d: req.body.m1tw9dd || '',
        m1t9d: req.body.m1t9dd || '',

         //Luminarias lado izq M1

         m1l1i: req.body.m1l1ii || '',
        m1il1i: req.body.m1dl1ii || '',
        m1tc1i: req.body.m1tc1ii || '',
        m1bt1i: req.body.m1bt1ii || '',
        m1tf1i: req.body.m1tf1ii || '',
        m1bw1i: req.body.m1bw1ii || '',
        m1t81i: req.body.m1t81ii || '',
        m1p81i: req.body.m1p81ii || '',
        m1tw1i: req.body.m1tw1ii || '',
        m1t1i: req.body.m1t1ii || '',

        m1l2i: req.body.m1l2ii || '',
        m1dl2i: req.body.m1dl2ii || '',
        m1tc2i: req.body.m1tc2ii || '',
        m1bt2i: req.body.m1bt2ii || '',
        m1tf2i: req.body.m1tf2ii || '',
        m1bw2i: req.body.m1bw2ii || '',
        m1t82i: req.body.m1t82ii || '',
        m1p82i: req.body.m1p82ii || '',
        m1tw2i: req.body.m1tw2ii || '',
        m1t2i: req.body.m1t2ii || '',

        m1l3i: req.body.m1l3ii || '',
        m1dl3i: req.body.m1dl3ii || '',
        m1tc3i: req.body.m1tc3ii || '',
        m1bt3i: req.body.m1bt3ii || '',
        m1tf3i: req.body.m1tf3ii || '',
        m1bw3i: req.body.m1bw3ii || '',
        m1t83i: req.body.m1t83ii || '',
        m1p83i: req.body.m1p83ii || '',
        m1tw3i: req.body.m1tw3ii || '',
        m1t3i: req.body.m1t3ii || '',

        m1l4i: req.body.m1l4ii || '',
        m1dl4i: req.body.m1dl4ii || '',
        m1tc4i: req.body.m1tc4ii || '',
        m1bt4i: req.body.m1bt4ii || '',
        m1tf4i: req.body.m1tf4ii || '',
        m1bw4i: req.body.m1bw4ii || '',
        m1t84i: req.body.m1t84ii || '',
        m1p84i: req.body.m1p84ii || '',
        m1tw4i: req.body.m1tw4ii || '',
        m1t4i: req.body.m1t4ii || '',

        m1l5i: req.body.m1l5ii || '',
        m1dl5i: req.body.m1dl5ii || '',
        m1tc5i: req.body.m1tc5ii || '',
        m1bt5i: req.body.m1bt5ii || '',
        m1tf5i: req.body.m1tf5ii || '',
        m1bw5i: req.body.m1bw5ii || '',
        m1t85i: req.body.m1t85ii || '',
        m1p85i: req.body.m1p85ii || '',
        m1tw5i: req.body.m1tw5ii || '',
        m1t5i: req.body.m1t5ii || '',

        m1l6i: req.body.m1l6ii || '',
        m1dl6i: req.body.m1dl6ii || '',
        m1tc6i: req.body.m1tc6ii || '',
        m1bt6i: req.body.m1bt6ii || '',
        m1tf6i: req.body.m1tf6ii || '',
        m1bw6i: req.body.m1bw6ii || '',
        m1t86i: req.body.m1t86ii || '',
        m1p86i: req.body.m1p86ii || '',
        m1tw6i: req.body.m1tw6ii || '',
        m1t6i: req.body.m1t6ii || '',

        m1l7i: req.body.m1l7ii || '',
        m1dl7i: req.body.m1dl7ii || '',
        m1tc7i: req.body.m1tc7ii || '',
        m1bt7i: req.body.m1bt7ii || '',
        m1tf7i: req.body.m1tf7ii || '',
        m1bw7i: req.body.m1bw7ii || '',
        m1t87i: req.body.m1t87ii || '',
        m1p87i: req.body.m1p87ii || '',
        m1tw7i: req.body.m1tw7ii || '',
        m1t7i: req.body.m1t7ii || '',

        m1l8i: req.body.m1l8ii || '',
        m1dl8i: req.body.m1dl8ii || '',
        m1tc8i: req.body.m1tc8ii || '',
        m1bt8i: req.body.m1bt8ii || '',
        m1tf8i: req.body.m1tf8ii || '',
        m1bw8i: req.body.m1bw8ii || '',
        m1t88i: req.body.m1t88ii || '',
        m1p88i: req.body.m1p88ii || '',
        m1tw8i: req.body.m1tw8ii || '',
        m1t8i: req.body.m1t8ii || '',

        m1l9i: req.body.m1l9ii || '',
        m1dl9i: req.body.m1dl9ii || '',
        m1tc9i: req.body.m1tc9ii || '',
        m1bt9i: req.body.m1bt9ii || '',
        m1tf9i: req.body.m1tf9ii || '',
        m1bw9i: req.body.m1bw9ii || '',
        m1t89i: req.body.m1t89ii || '',
        m1p89i: req.body.m1p89ii || '',
        m1tw9i: req.body.m1tw9ii || '',
        m1t9i: req.body.m1t9ii || '',

        obs2: req.body.obs22 || '',

        //Luminarias lado derecho M2
        m2l1d: req.body.m2l1dd || '',
        m2dl1d: req.body.m2dl1dd || '',
        m2tc1d: req.body.m2tc1dd || '',
        m2bt1d: req.body.m2bt1dd || '',
        m2tf1d: req.body.m2tf1dd || '',
        m2bw1d: req.body.m2bw1dd || '',
        m2t81d: req.body.m2t81dd || '',
        m2p81d: req.body.m2p81dd || '',
        m2tw1d: req.body.m2tw1dd || '',
        m2t1d: req.body.m2t1dd || '',

        m2l2d: req.body.m2l2dd || '',
        m2dl2d: req.body.m2dl2dd || '',
        m2tc2d: req.body.m2tc2dd || '',
        m2bt2d: req.body.m2bt2dd || '',
        m2tf2d: req.body.m2tf2dd || '',
        m2bw2d: req.body.m2bw2dd || '',
        m2t82d: req.body.m2t82dd || '',
        m2p82d: req.body.m2p82dd || '',
        m2tw2d: req.body.m2tw2dd || '',
        m2t2d: req.body.m2t2dd || '',

        m2l3d: req.body.m2l3dd || '',
        m2dl3d: req.body.m2dl3dd || '',
        m2tc3d: req.body.m2tc3dd || '',
        m2bt3d: req.body.m2bt3dd || '',
        m2tf3d: req.body.m2tf3dd || '',
        m2bw3d: req.body.m2bw3dd || '',
        m2t83d: req.body.m2t83dd || '',
        m2p83d: req.body.m2p83dd || '',
        m2tw3d: req.body.m2tw3dd || '',
        m2t3d: req.body.m2t3dd || '',

        m2l4d: req.body.m2l4dd || '',
        m2dl4d: req.body.m2dl4dd || '',
        m2tc4d: req.body.m2tc4dd || '',
        m2bt4d: req.body.m2bt4dd || '',
        m2tf4d: req.body.m2tf4dd || '',
        m2bw4d: req.body.m2bw4dd || '',
        m2t84d: req.body.m2t84dd || '',
        m2p84d: req.body.m2p84dd || '',
        m2tw4d: req.body.m2tw4dd || '',
        m2t4d: req.body.m2t4dd || '',

        m2l5d: req.body.m2l5dd || '',
        m2dl5d: req.body.m2dl5dd || '',
        m2tc5d: req.body.m2tc5dd || '',
        m2bt5d: req.body.m2bt5dd || '',
        m2tf5d: req.body.m2tf5dd || '',
        m2bw5d: req.body.m2bw5dd || '',
        m2t85d: req.body.m2t85dd || '',
        m2p85d: req.body.m2p85dd || '',
        m2tw5d: req.body.m2tw5dd || '',
        m2t5d: req.body.m2t5dd || '',

        m2l6d: req.body.m2l6dd || '',
        m2dl6d: req.body.m2dl6dd || '',
        m2tc6d: req.body.m2tc6dd || '',
        m2bt6d: req.body.m2bt6dd || '',
        m2tf6d: req.body.m2tf6dd || '',
        m2bw6d: req.body.m2bw6dd || '',
        m2t86d: req.body.m2t86dd || '',
        m2p86d: req.body.m2p86dd || '',
        m2tw6d: req.body.m2tw6dd || '',
        m2t6d: req.body.m2t6dd || '',

        m2l7d: req.body.m2l7dd || '',
        m2dl7d: req.body.m2dl7dd || '',
        m2tc7d: req.body.m2tc7dd || '',
        m2bt7d: req.body.m2bt7dd || '',
        m2tf7d: req.body.m2tf7dd || '',
        m2bw7d: req.body.m2bw7dd || '',
        m2t87d: req.body.m2t87dd || '',
        m2p87d: req.body.m2p87dd || '',
        m2tw7d: req.body.m2tw7dd || '',
        m2t7d: req.body.m2t7dd || '',

        m2l8d: req.body.m2l8dd || '',
        m2dl8d: req.body.m2dl8dd || '',
        m2tc8d: req.body.m2tc8dd || '',
        m2bt8d: req.body.m2bt8dd || '',
        m2tf8d: req.body.m2tf8dd || '',
        m2bw8d: req.body.m2bw8dd || '',
        m2t88d: req.body.m2t88dd || '',
        m2p88d: req.body.m2p88dd || '',
        m2tw8d: req.body.m2tw8dd || '',
        m2t8d: req.body.m2t8dd || '',

        m2l9d: req.body.m2l9dd || '',
        m2dl9d: req.body.m2dl9dd || '',
        m2tc9d: req.body.m2tc9dd || '',
        m2bt9d: req.body.m2bt9dd || '',
        m2tf9d: req.body.m2tf9dd || '',
        m2bw9d: req.body.m2bw9dd || '',
        m2t89d: req.body.m2t89dd || '',
        m2p89d: req.body.m2p89dd || '',
        m2tw9d: req.body.m2tw9dd || '',
        m2t9d: req.body.m2t9dd || '',

         //Luminarias lado izq m2

         m2l1i: req.body.m2l1ii || '',
        m2il1i: req.body.m2dl1ii || '',
        m2tc1i: req.body.m2tc1ii || '',
        m2bt1i: req.body.m2bt1ii || '',
        m2tf1i: req.body.m2tf1ii || '',
        m2bw1i: req.body.m2bw1ii || '',
        m2t81i: req.body.m2t81ii || '',
        m2p81i: req.body.m2p81ii || '',
        m2tw1i: req.body.m2tw1ii || '',
        m2t1i: req.body.m2t1ii || '',

        m2l2i: req.body.m2l2ii || '',
        m2dl2i: req.body.m2dl2ii || '',
        m2tc2i: req.body.m2tc2ii || '',
        m2bt2i: req.body.m2bt2ii || '',
        m2tf2i: req.body.m2tf2ii || '',
        m2bw2i: req.body.m2bw2ii || '',
        m2t82i: req.body.m2t82ii || '',
        m2p82i: req.body.m2p82ii || '',
        m2tw2i: req.body.m2tw2ii || '',
        m2t2i: req.body.m2t2ii || '',

        m2l3i: req.body.m2l3ii || '',
        m2dl3i: req.body.m2dl3ii || '',
        m2tc3i: req.body.m2tc3ii || '',
        m2bt3i: req.body.m2bt3ii || '',
        m2tf3i: req.body.m2tf3ii || '',
        m2bw3i: req.body.m2bw3ii || '',
        m2t83i: req.body.m2t83ii || '',
        m2p83i: req.body.m2p83ii || '',
        m2tw3i: req.body.m2tw3ii || '',
        m2t3i: req.body.m2t3ii || '',

        m2l4i: req.body.m2l4ii || '',
        m2dl4i: req.body.m2dl4ii || '',
        m2tc4i: req.body.m2tc4ii || '',
        m2bt4i: req.body.m2bt4ii || '',
        m2tf4i: req.body.m2tf4ii || '',
        m2bw4i: req.body.m2bw4ii || '',
        m2t84i: req.body.m2t84ii || '',
        m2p84i: req.body.m2p84ii || '',
        m2tw4i: req.body.m2tw4ii || '',
        m2t4i: req.body.m2t4ii || '',

        m2l5i: req.body.m2l5ii || '',
        m2dl5i: req.body.m2dl5ii || '',
        m2tc5i: req.body.m2tc5ii || '',
        m2bt5i: req.body.m2bt5ii || '',
        m2tf5i: req.body.m2tf5ii || '',
        m2bw5i: req.body.m2bw5ii || '',
        m2t85i: req.body.m2t85ii || '',
        m2p85i: req.body.m2p85ii || '',
        m2tw5i: req.body.m2tw5ii || '',
        m2t5i: req.body.m2t5ii || '',

        m2l6i: req.body.m2l6ii || '',
        m2dl6i: req.body.m2dl6ii || '',
        m2tc6i: req.body.m2tc6ii || '',
        m2bt6i: req.body.m2bt6ii || '',
        m2tf6i: req.body.m2tf6ii || '',
        m2bw6i: req.body.m2bw6ii || '',
        m2t86i: req.body.m2t86ii || '',
        m2p86i: req.body.m2p86ii || '',
        m2tw6i: req.body.m2tw6ii || '',
        m2t6i: req.body.m2t6ii || '',

        m2l7i: req.body.m2l7ii || '',
        m2dl7i: req.body.m2dl7ii || '',
        m2tc7i: req.body.m2tc7ii || '',
        m2bt7i: req.body.m2bt7ii || '',
        m2tf7i: req.body.m2tf7ii || '',
        m2bw7i: req.body.m2bw7ii || '',
        m2t87i: req.body.m2t87ii || '',
        m2p87i: req.body.m2p87ii || '',
        m2tw7i: req.body.m2tw7ii || '',
        m2t7i: req.body.m2t7ii || '',

        m2l8i: req.body.m2l8ii || '',
        m2dl8i: req.body.m2dl8ii || '',
        m2tc8i: req.body.m2tc8ii || '',
        m2bt8i: req.body.m2bt8ii || '',
        m2tf8i: req.body.m2tf8ii || '',
        m2bw8i: req.body.m2bw8ii || '',
        m2t88i: req.body.m2t88ii || '',
        m2p88i: req.body.m2p88ii || '',
        m2tw8i: req.body.m2tw8ii || '',
        m2t8i: req.body.m2t8ii || '',

        m2l9i: req.body.m2l9ii || '',
        m2dl9i: req.body.m2dl9ii || '',
        m2tc9i: req.body.m2tc9ii || '',
        m2bt9i: req.body.m2bt9ii || '',
        m2tf9i: req.body.m2tf9ii || '',
        m2bw9i: req.body.m2bw9ii || '',
        m2t89i: req.body.m2t89ii || '',
        m2p89i: req.body.m2p89ii || '',
        m2tw9i: req.body.m2tw9ii || '',
        m2t9i: req.body.m2t9ii || '',

        obs3: req.body.obs33 || '',

        
        //-------------------------------

    }
    await memaM16.findByIdAndUpdate(id, { $set: mema_M16}, { new: true });
    res.json({
        status: 'Employee update'
    });

    };

    mema_M16.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM16.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
    }

    mema_M16.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM16.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
    }

    mema_M16.getAllmema_M16TypeM = async (req, res) => {
    const memam16 = await memaM16.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam16)
    };

    mema_M16.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM16New = {
        historyFile: req.body.historyFile || []
    }
    await memaM16.findByIdAndUpdate(id, { $set: historymemaM16New }, { new: true });
    res.json({
        status: 'History update'
    })
    }

    mema_M16.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam16 = await memaM16.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam16)
    }

    mema_M16.createmema_M16TypeM = async (req, res) => {
    const memam16 = new memaM16(req.body)

    await memam16.save()
    res.json({res: 'Ok'})
    };

    module.exports = mema_M16;
