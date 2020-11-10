
const memaM12 = require('../../../models/smee/mema/MEMA_M12');

const mema_M12 = {};
//Metodos
// Obtiene todos los empleados
mema_M12.getmema_M12Data = async (req, res)=>{
    const {id} = req.params;

    const memam12 = await memaM12.findById(id)
    res.json(memam12)
}

// Editar un documento
mema_M12.editmema_M12Data = async (req, res) => {
    const { id } = req.params;

    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }

    let equipo = {
        numberOfEquipo: req.body.numberOfEquipoInputs,
        arr: req.body.equipos
    }

    const memaM12 = {
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
        
        l1: req.body.l11 || '',
        c1: req.body.c11 || '',
        cu1: req.body.cu11 || '',
        z1: req.body.z11 || '',
        d1: req.body.d11 || '',
        t1: req.body.t11 || '',
        f1: req.body.f11 || '',
        i1: req.body.i11 || '',

        l2: req.body.l22 || '',
        c2: req.body.c22 || '',
        cu2: req.body.cu22 || '',
        z2: req.body.z22 || '',
        d2: req.body.d22 || '',
        t2: req.body.t22 || '',
        f2: req.body.f22 || '',
        i2: req.body.i22 || '',

        l3: req.body.l33 || '',
        c3: req.body.c33 || '',
        cu3: req.body.cu33 || '',
        z3: req.body.z33 || '',
        d3: req.body.d33 || '',
        t3: req.body.t33 || '',
        f3: req.body.f33 || '',
        i3: req.body.i33 || '',

        l4: req.body.l44 || '',
        c4: req.body.c44 || '',
        cu4: req.body.cu44 || '',
        z4: req.body.z44 || '',
        d4: req.body.d44 || '',
        t4: req.body.t44 || '',
        f4: req.body.f44 || '',
        i4: req.body.i44 || '',

        l5: req.body.l55 || '',
        c5: req.body.c55 || '',
        cu5: req.body.cu55 || '',
        z5: req.body.z55 || '',
        d5: req.body.d55 || '',
        t5: req.body.t55 || '',
        f5: req.body.f55 || '',
        i5: req.body.i55 || '',

        l6: req.body.l66 || '',
        c6: req.body.c66 || '',
        cu6: req.body.cu66 || '',
        z6: req.body.z66 || '',
        d6: req.body.d66 || '',
        t6: req.body.t66 || '',
        f6: req.body.f66 || '',
        i6: req.body.i66 || '',

        l7: req.body.l77 || '',
        c7: req.body.c77 || '',
        cu7: req.body.cu77 || '',
        z7: req.body.z77 || '',
        d7: req.body.d77 || '',
        t7: req.body.t77 || '',
        f7: req.body.f77 || '',
        i7: req.body.i77 || '',

        l8: req.body.l88 || '',
        c8: req.body.c88 || '',
        cu8: req.body.cu88 || '',
        z8: req.body.z88 || '',
        d8: req.body.d88 || '',
        t8: req.body.t88 || '',
        f8: req.body.f88 || '',
        i8: req.body.i88 || '',

        l9: req.body.l99 || '',
        c9: req.body.c99 || '',
        cu9: req.body.cu99 || '',
        z9: req.body.z99 || '',
        d9: req.body.d99 || '',
        t9: req.body.t99 || '',
        f9: req.body.f99 || '',
        i9: req.body.i99 || '',

        l10: req.body.l100 || '',
        c10: req.body.c100 || '',
        cu10: req.body.cu100 || '',
        z10: req.body.z100 || '',
        d10: req.body.d100 || '',
        t10: req.body.t100 || '',
        f10: req.body.f100 || '',
        i10: req.body.i100 || '',

        l11: req.body.l110 || '',
        c11: req.body.c110 || '',
        cu11: req.body.cu110 || '',
        z11: req.body.z110 || '',
        d11: req.body.d110 || '',
        t11: req.body.t110 || '',
        f11: req.body.f110 || '',
        i11: req.body.i110 || '',

        l12: req.body.l120 || '',
        c12: req.body.c120 || '',
        cu12: req.body.cu120 || '',
        z12: req.body.z120 || '',
        d12: req.body.d120 || '',
        t12: req.body.t120 || '',
        f12: req.body.f120 || '',
        i12: req.body.i120 || '',

        obs2: req.body.obs22 || '',

        //-------------------------------

    }
    await memaM12.findByIdAndUpdate(id, { $set: mema_M12}, { new: true });
    res.json({
        status: 'Employee update'
    });

};

mema_M12.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await memaM12.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}

mema_M12.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await memaM12.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}

mema_M12.getAllmema_M12TypeM = async (req, res) => {
    const memam12 = await memaM12.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(memam12)
};

mema_M12.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historymemaM12New = {
        historyFile: req.body.historyFile || []
    }
    await memaM12.findByIdAndUpdate(id, { $set: historymemaM12New }, { new: true });
    res.json({
        status: 'History update'
    })
}

mema_M12.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const memam12 = await memaM12.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(memam12)
}

mema_M12.createmema_M12TypeM = async (req, res) => {
    const memam12 = new memaM12(req.body)
    
    await memam12.save()
    res.json({res: 'Ok'})
};

module.exports = mema_M12;
