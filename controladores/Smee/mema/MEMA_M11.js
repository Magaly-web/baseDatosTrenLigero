

const memaM11 = require('../../../models/smee/mema/MEMA_M11');

const mema_M11 = {};
//Metodos
// Obtiene todos los empleados
mema_M11.getmema_M11Data = async (req, res)=>{
    const {id} = req.params;

    const memam11 = await memaM11.findById(id)
    res.json(memam11)
}

// Editar un documento
mema_M11.editmema_M11Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM11 = {
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
        m1aldv: req.body.m1aldvv || '',
        m1aldl: req.body.m1aldll || '',
        m1aldf: req.body.m1aldff || '',
        m1aldt: req.body.m1aldtt || '',
        m1aldra: req.body.m1aldraa || '',

        m1avspdv: req.body.m1avspdvv || '',
        m1avspdl: req.body.m1avspdll || '',
        m1avspdf: req.body.m1avspdff || '',
        m1avspdt: req.body.m1avspdtt || '',
        m1avspdra: req.body.m1avspdraa || '',

        m1kfsdv: req.body.m1kfsdvv || '',
        m1kfsdl: req.body.m1kfsdll || '',
        m1kfsdf: req.body.m1kfsdff || '',
        m1kfsdt: req.body.m1kfsdtt || '',
        m1kfsdra: req.body.m1kfsdraa || '',

        m1acsdv: req.body.m1acsdvv || '',
        m1acsdl: req.body.m1acsdll || '',
        m1acsdf: req.body.m1acsdff || '',
        m1acsdt: req.body.m1acsdtt || '',
        m1acsdra: req.body.m1acsdraa || '',

        m1aepdv: req.body.m1aepdvv || '',
        m1aepdl: req.body.m1aepdll || '',
        m1aepdf: req.body.m1aepdff || '',
        m1aepdt: req.body.m1aepdtt || '',
        m1aepdra: req.body.m1aepdraa || '',

        m1bkpdv: req.body.m1bkpdvv || '',
        m1bkpdl: req.body.m1bkpdll || '',
        m1bkpdf: req.body.m1bkpdff || '',
        m1bkpdt: req.body.m1bkpdtt || '',
        m1bkpdra: req.body.m1bkpdraa || '',

        m1acdv: req.body.m1acdvv || '',
        m1acdl: req.body.m1acdll || '',
        m1acdf: req.body.m1acdff || '',
        m1acdt: req.body.m1acdtt || '',
        m1acdra: req.body.m1acdraa || '',

        m1cadv: req.body.m1cadvv || '',
        m1cadl: req.body.m1cadll || '',
        m1cadf: req.body.m1cadff || '',
        m1cadt: req.body.m1cadtt || '',
        m1cadra: req.body.m1cadraa || '',

        //Arnes salon pasajeros M1 izquierdo

        m1aliv: req.body.m1alivv || '',
        m1alil: req.body.m1alill || '',
        m1alif: req.body.m1aliff || '',
        m1alit: req.body.m1alitt || '',
        m1alira: req.body.m1aliraa || '',

        m1avspiv: req.body.m1avspivv || '',
        m1avspil: req.body.m1avspill || '',
        m1avspif: req.body.m1avspiff || '',
        m1avspit: req.body.m1avspitt || '',
        m1avspira: req.body.m1avspiraa || '',

        m1kfsiv: req.body.m1kfsivv || '',
        m1kfsil: req.body.m1kfsill || '',
        m1kfsif: req.body.m1kfsiff || '',
        m1kfsit: req.body.m1kfsitt || '',
        m1kfsira: req.body.m1kfsiraa || '',

        m1acsiv: req.body.m1acsivv || '',
        m1acsil: req.body.m1acsill || '',
        m1acsif: req.body.m1acsiff || '',
        m1acsit: req.body.m1acsitt || '',
        m1acsira: req.body.m1acsiraa || '',

        m1aepiv: req.body.m1aepivv || '',
        m1aepil: req.body.m1aepill || '',
        m1aepif: req.body.m1aepiff || '',
        m1aepit: req.body.m1aepitt || '',
        m1aepira: req.body.m1aepiraa || '',

        m1bkpiv: req.body.m1bkpivv || '',
        m1bkpil: req.body.m1bkpill || '',
        m1bkpif: req.body.m1bkpiff || '',
        m1bkpit: req.body.m1bkpitt || '',
        m1bkpira: req.body.m1bkpiraa || '',

        m1aciv: req.body.m1acivv || '',
        m1acil: req.body.m1acill || '',
        m1acif: req.body.m1aciff || '',
        m1acit: req.body.m1acitt || '',
        m1acira: req.body.m1aciraa || '',

        m1caiv: req.body.m1caivv || '',
        m1cail: req.body.m1caill || '',
        m1caif: req.body.m1caiff || '',
        m1cait: req.body.m1caitt || '',
        m1caira: req.body.m1cairaa || '',

        obs2: req.body.obs22 || '',
        
        //Arnes salon pasajeros M2 derecho

        m2aldv: req.body.m2aldvv || '',
        m2aldl: req.body.m2aldll || '',
        m2aldf: req.body.m2aldff || '',
        m2aldt: req.body.m2aldtt || '',
        m2aldra: req.body.m2aldraa || '',

        m2avspdv: req.body.m2avspdvv || '',
        m2avspdl: req.body.m2avspdll || '',
        m2avspdf: req.body.m2avspdff || '',
        m2avspdt: req.body.m2avspdtt || '',
        m2avspdra: req.body.m2avspdraa || '',

        m2kfsdv: req.body.m2kfsdvv || '',
        m2kfsdl: req.body.m2kfsdll || '',
        m2kfsdf: req.body.m2kfsdff || '',
        m2kfsdt: req.body.m2kfsdtt || '',
        m2kfsdra: req.body.m2kfsdraa || '',

        m2acsdv: req.body.m2acsdvv || '',
        m2acsdl: req.body.m2acsdll || '',
        m2acsdf: req.body.m2acsdff || '',
        m2acsdt: req.body.m2acsdtt || '',
        m2acsdra: req.body.m2acsdraa || '',

        m2aepdv: req.body.m2aepdvv || '',
        m2aepdl: req.body.m2aepdll || '',
        m2aepdf: req.body.m2aepdff || '',
        m2aepdt: req.body.m2aepdtt || '',
        m2aepdra: req.body.m2aepdraa || '',

        m2bkpdv: req.body.m2bkpdvv || '',
        m2bkpdl: req.body.m2bkpdll || '',
        m2bkpdf: req.body.m2bkpdff || '',
        m2bkpdt: req.body.m2bkpdtt || '',
        m2bkpdra: req.body.m2bkpdraa || '',

        m2acdv: req.body.m2acdvv || '',
        m2acdl: req.body.m2acdll || '',
        m2acdf: req.body.m2acdff || '',
        m2acdt: req.body.m2acdtt || '',
        m2acdra: req.body.m2acdraa || '',

        m2cadv: req.body.m2cadvv || '',
        m2cadl: req.body.m2cadll || '',
        m2cadf: req.body.m2cadff || '',
        m2cadt: req.body.m2cadtt || '',
        m2cadra: req.body.m2cadraa || '',

        //Arnes salon pasajeros M2 izquierdo

        m2aliv: req.body.m2alivv || '',
        m2alil: req.body.m2alill || '',
        m2alif: req.body.m2aliff || '',
        m2alit: req.body.m2alitt || '',
        m2alira: req.body.m2aliraa || '',

        m2avspiv: req.body.m2avspivv || '',
        m2avspil: req.body.m2avspill || '',
        m2avspif: req.body.m2avspiff || '',
        m2avspit: req.body.m2avspitt || '',
        m2avspira: req.body.m2avspiraa || '',

        m2kfsiv: req.body.m2kfsivv || '',
        m2kfsil: req.body.m2kfsill || '',
        m2kfsif: req.body.m2kfsiff || '',
        m2kfsit: req.body.m2kfsitt || '',
        m2kfsira: req.body.m2kfsiraa || '',

        m2acsiv: req.body.m2acsivv || '',
        m2acsil: req.body.m2acsill || '',
        m2acsif: req.body.m2acsiff || '',
        m2acsit: req.body.m2acsitt || '',
        m2acsira: req.body.m2acsiraa || '',

        m2aepiv: req.body.m2aepivv || '',
        m2aepil: req.body.m2aepill || '',
        m2aepif: req.body.m2aepiff || '',
        m2aepit: req.body.m2aepitt || '',
        m2aepira: req.body.m2aepiraa || '',

        m2bkpiv: req.body.m2bkpivv || '',
        m2bkpil: req.body.m2bkpill || '',
        m2bkpif: req.body.m2bkpiff || '',
        m2bkpit: req.body.m2bkpitt || '',
        m2bkpira: req.body.m2bkpiraa || '',

        m2aciv: req.body.m2acivv || '',
        m2acil: req.body.m2acill || '',
        m2acif: req.body.m2aciff || '',
        m2acit: req.body.m2acitt || '',
        m2acira: req.body.m2aciraa || '',

        m2caiv: req.body.m2caivv || '',
        m2cail: req.body.m2caill || '',
        m2caif: req.body.m2caiff || '',
        m2cait: req.body.m2caitt || '',
        m2caira: req.body.m2cairaa || '',

        obs3: req.body.obs33 || '',

        //-------------------------------

    }
    await memaM11.findByIdAndUpdate(id, { $set: mema_M11}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M11.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM11.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M11.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM11.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M11.getAllmema_M11TypeM = async (req, res) => {
    const memam11 = await memaM11.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam11)
};

mema_M11.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM11New = {
        historyFile: req.body.historyFile || []
    }
    await memaM11.findByIdAndUpdate(id, { $set: historymemaM11New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M11.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam11 = await memaM11.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam11)
}

mema_M11.createmema_M11TypeM = async (req, res) => {
    const memam11 = new memaM11(req.body)
    
    await memam11.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M11;
