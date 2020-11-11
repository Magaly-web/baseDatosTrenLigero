'use strict'

var mmmeC01 = require('../../../../../models/smm/fichasMantenimiento/SGMM/ciclico/MMME_C01');


const MMME_C01 = {};

MMME_C01.getMMME_C01Data = async (req, res) => {
    const {id} = req.params;
 
    const maintenance = await mmmeC01.findById(id)
    res.json(maintenance)
};
MMME_C01.editMMME_C01Data = async (req, res) => {
    const { id } = req.params;
    let materiales = {
        numberOfMaterial: req.body.numberOfMaterialInputs,
        arr: req.body.materials
    }
    const MMME_C01 = {
        noInspeccion: req.body.inspeccion || '',
        noTren: req.body.tren || '',
        kilometraje: req.body.distance || 0,
        horaInicio: req.body.startTime || '',
        horaTerminacion: req.body.endTime || '',
 
        piston1m1L1: req.body || false,
        piston1m1A1: req.body || false,
        piston1m1L2: req.body || false,
        piston1m1A2: req.body || false,
        piston1m1L3: req.body || false,
        piston1m1A3: req.body || false,
        piston1m1L4: req.body || false,
        piston1m1A4: req.body || false,
        piston1m1L5: req.body || false,
        piston1m1A5: req.body || false,
        piston1m1L6: req.body || false,
        piston1m1A6: req.body || false,
        piston1m2L1: req.body || false,
        piston1m2A1: req.body || false,
        piston1m2L2: req.body || false,
        piston1m2A2: req.body || false,
        piston1m2L3: req.body || false,
        piston1m2A3: req.body || false,
        piston1m2L4: req.body || false,
        piston1m2A4: req.body || false,
        piston1m2L5: req.body || false,
        piston1m2A5: req.body || false,
        piston1m2L6: req.body || false,
        piston1m2A6: req.body || false,
        
        esprea1m1L1: req.body || false,
        esprea1m1A1: req.body || false,
        esprea1m1L2: req.body || false,
        esprea1m1A2: req.body || false,
        esprea1m1L3: req.body || false,
        esprea1m1A3: req.body || false,
        esprea1m1L4: req.body || false,
        esprea1m1A4: req.body || false,
        esprea1m1L5: req.body || false,
        esprea1m1A5: req.body || false,
        esprea1m1L6: req.body || false,
        esprea1m1A6: req.body || false,
        esprea1m2L1: req.body || false,
        esprea1m2A1: req.body || false,
        esprea1m2L2: req.body || false,
        esprea1m2A2: req.body || false,
        esprea1m2L3: req.body || false,
        esprea1m2A3: req.body || false,
        esprea1m2L4: req.body || false,
        esprea1m2A4: req.body || false,
        esprea1m2L5: req.body || false,
        esprea1m2A5: req.body || false,
        esprea1m2L6: req.body || false,
        esprea1m2A6: req.body || false,
        
        piston2m1L1: req.body || false,
        piston2m1A1: req.body || false,
        piston2m1L2: req.body || false,
        piston2m1A2: req.body || false,
        piston2m1L3: req.body || false,
        piston2m1A3: req.body || false,
        piston2m1L4: req.body || false,
        piston2m1A4: req.body || false,
        piston2m1L5: req.body || false,
        piston2m1A5: req.body || false,
        piston2m1L6: req.body || false,
        piston2m1A6: req.body || false,
        piston2m2L1: req.body || false,
        piston2m2A1: req.body || false,
        piston2m2L2: req.body || false,
        piston2m2A2: req.body || false,
        piston2m2L3: req.body || false,
        piston2m2A3: req.body || false,
        piston2m2L4: req.body || false,
        piston2m2A4: req.body || false,
        piston2m2L5: req.body || false,
        piston2m2A5: req.body || false,
        piston2m2L6: req.body || false,
        piston2m2A6: req.body || false,
        
        esprea2m1L1: req.body || false,
        esprea2m1A1: req.body || false,
        esprea2m1L2: req.body || false,
        esprea2m1A2: req.body || false,
        esprea2m1L3: req.body || false,
        esprea2m1A3: req.body || false,
        esprea2m1L4: req.body || false,
        esprea2m1A4: req.body || false,
        esprea2m1L5: req.body || false,
        esprea2m1A5: req.body || false,
        esprea2m1L6: req.body || false,
        esprea2m1A6: req.body || false,
        esprea2m2L1: req.body || false,
        esprea2m2A1: req.body || false,
        esprea2m2L2: req.body || false,
        esprea2m2A2: req.body || false,
        esprea2m2L3: req.body || false,
        esprea2m2A3: req.body || false,
        esprea2m2L4: req.body || false,
        esprea2m2A4: req.body || false,
        esprea2m2L5: req.body || false,
        esprea2m2A5: req.body || false,
        esprea2m2L6: req.body || false,
        esprea2m2A6: req.body || false,
        
        valvula1m1L1: req.body || false,
        valvula1m1A1: req.body || false,
        valvula1m1L2: req.body || false,
        valvula1m1A2: req.body || false,
        valvula1m1L3: req.body || false,
        valvula1m1A3: req.body || false,
        valvula1m1L4: req.body || false,
        valvula1m1A4: req.body || false,
        valvula1m1L5: req.body || false,
        valvula1m1A5: req.body || false,
        valvula1m1L6: req.body || false,
        valvula1m1A6: req.body || false,
        valvula1m2L1: req.body || false,
        valvula1m2A1: req.body || false,
        valvula1m2L2: req.body || false,
        valvula1m2A2: req.body || false,
        valvula1m2L3: req.body || false,
        valvula1m2A3: req.body || false,
        valvula1m2L4: req.body || false,
        valvula1m2A4: req.body || false,
        valvula1m2L5: req.body || false,
        valvula1m2A5: req.body || false,
        valvula1m2L6: req.body || false,
        valvula1m2A6: req.body || false,
        
        valvula2m1L1: req.body || false,
        valvula2m1A1: req.body || false,
        valvula2m1L2: req.body || false,
        valvula2m1A2: req.body || false,
        valvula2m1L3: req.body || false,
        valvula2m1A3: req.body || false,
        valvula2m1L4: req.body || false,
        valvula2m1A4: req.body || false,
        valvula2m1L5: req.body || false,
        valvula2m1A5: req.body || false,
        valvula2m1L6: req.body || false,
        valvula2m1A6: req.body || false,
        valvula2m2L1: req.body || false,
        valvula2m2A1: req.body || false,
        valvula2m2L2: req.body || false,
        valvula2m2A2: req.body || false,
        valvula2m2L3: req.body || false,
        valvula2m2A3: req.body || false,
        valvula2m2L4: req.body || false,
        valvula2m2A4: req.body || false,
        valvula2m2L5: req.body || false,
        valvula2m2A5: req.body || false,
        valvula2m2L6: req.body || false,
        valvula2m2A6: req.body || false,

        nivelAceiteM1: req.body || '',
        nivelAceiteM2: req.body || '',

        //GENERALES PARA TE-90, TE-95 y TE-06
        mangueraEm1R1: req.body || false,
        mangueraEm1A1: req.body || false,
        mangueraEm1R2: req.body || false,
        mangueraEm1A2: req.body || false,
        mangueraEm1R3: req.body || false,
        mangueraEm1A3: req.body || false,
        mangueraEm1R4: req.body || false,
        mangueraEm1A4: req.body || false,
        mangueraEm1R5: req.body || false,
        mangueraEm1A5: req.body || false,
        mangueraEm1R6: req.body || false,
        mangueraEm1A6: req.body || false,
        mangueraEm2R1: req.body || false,
        mangueraEm2A1: req.body || false,
        mangueraEm2R2: req.body || false,
        mangueraEm2A2: req.body || false,
        mangueraEm2R3: req.body || false,
        mangueraEm2A3: req.body || false,
        mangueraEm2R4: req.body || false,
        mangueraEm2A4: req.body || false,
        mangueraEm2R5: req.body || false,
        mangueraEm2A5: req.body || false, 
        mangueraEm2R6: req.body || false,
        mangueraEm2A6: req.body || false,
        
        mangueraSm1R1: req.body || false,
        mangueraSm1A1: req.body || false,
        mangueraSm1R2: req.body || false,
        mangueraSm1A2: req.body || false,
        mangueraSm1R3: req.body || false,
        mangueraSm1A3: req.body || false,
        mangueraSm1R4: req.body || false,
        mangueraSm1A4: req.body || false,
        mangueraSm1R5: req.body || false,
        mangueraSm1A5: req.body || false,
        mangueraSm1R6: req.body || false,
        mangueraSm1A6: req.body || false,
        mangueraSm2R1: req.body || false,
        mangueraSm2A1: req.body || false,
        mangueraSm2R2: req.body || false,
        mangueraSm2A2: req.body || false,
        mangueraSm2R3: req.body || false,
        mangueraSm2A3: req.body || false,
        mangueraSm2R4: req.body || false,
        mangueraSm2A4: req.body || false,
        mangueraSm2R5: req.body || false,
        mangueraSm2A5: req.body || false, 
        mangueraSm2R6: req.body || false,
        mangueraSm2A6: req.body || false,
        
        tornilloAm1R1: req.body || false,
        tornilloAm1A1: req.body || false,
        tornilloAm1R2: req.body || false,
        tornilloAm1A2: req.body || false,
        tornilloAm1R3: req.body || false,
        tornilloAm1A3: req.body || false,
        tornilloAm1R4: req.body || false,
        tornilloAm1A4: req.body || false,
        tornilloAm1R5: req.body || false,
        tornilloAm1A5: req.body || false,
        tornilloAm1R6: req.body || false,
        tornilloAm1A6: req.body || false,
        tornilloAm2R1: req.body || false,
        tornilloAm2A1: req.body || false,
        tornilloAm2R2: req.body || false,
        tornilloAm2A2: req.body || false,
        tornilloAm2R3: req.body || false,
        tornilloAm2A3: req.body || false,
        tornilloAm2R4: req.body || false,
        tornilloAm2A4: req.body || false,
        tornilloAm2R5: req.body || false,
        tornilloAm2A5: req.body || false, 
        tornilloAm2R6: req.body || false,
        tornilloAm2A6: req.body || false,
        
        tornilloEm1R1: req.body || false,
        tornilloEm1A1: req.body || false,
        tornilloEm1R2: req.body || false,
        tornilloEm1A2: req.body || false,
        tornilloEm1R3: req.body || false,
        tornilloEm1A3: req.body || false,
        tornilloEm1R4: req.body || false,
        tornilloEm1A4: req.body || false,
        tornilloEm1R5: req.body || false,
        tornilloEm1A5: req.body || false,
        tornilloEm1R6: req.body || false,
        tornilloEm1A6: req.body || false,
        tornilloEm2R1: req.body || false,
        tornilloEm2A1: req.body || false,
        tornilloEm2R2: req.body || false,
        tornilloEm2A2: req.body || false,
        tornilloEm2R3: req.body || false,
        tornilloEm2A3: req.body || false,
        tornilloEm2R4: req.body || false,
        tornilloEm2A4: req.body || false,
        tornilloEm2R5: req.body || false,
        tornilloEm2A5: req.body || false, 
        tornilloEm2R6: req.body || false,
        tornilloEm2A6: req.body || false,
        
        observaciones: req.body.obs,

        materialUtilizado: materiales,
    };
    await mmmeC01.findByIdAndUpdate(id, { $set: MMME_C01}, { new: true });
    res.json({
        status: 'Employee update'
    });
}
MMME_C01.checkedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const checked = {
        documentFormCurrentState: req.body
    }
    await mmmeC01.findByIdAndUpdate(id, { $set: checked }, { new: true });
    res.json({
        status: 'worker state update'
    })
}
MMME_C01.getStateCheckedApprovalByWorker = async (req, res) => {
    const { id } = req.params;
    const state = await mmmeC01.findById(id, {
        "_id": 1, 
        "documentFormCurrentState": 1
    })
    res.json(state)
}
MMME_C01.getAllMaintenenceMMME_C01 = async (req, res) => {
    const maintenances = await mmmeC01.find({}, {
        "_id": 1, 
        "unidad": 1, 
        "documentFormCurrentState.approvalByWorker.checked": 1, 
        "documentFormCurrentState.approvalBySupervisor.checked": 1,
        "documentFormCurrentState.approvalByMannager.checked": 1,
        "documentFormCurrentState.loading": 1
    })
    res.json(maintenances)
}
MMME_C01.addNewHistoryrecord = async (req, res) => {
    const { id } = req.params;
    const historyMMME_C01New = {
        historyFile: req.body.historyFile || []
    }
    await mmmeC01.findByIdAndUpdate(id, { $set: historyMMME_C01New }, { new: true });
    res.json({
        status: 'History update'
    })
}
MMME_C01.getHistoryOF = async (req, res) => {
    const { id } = req.params;
    const maintenances = await mmmeC01.findById(id, {
        "_id": 0, 
        "historyFile": 1
    })
    res.json(maintenances)
}
MMME_C01.createMaintenenceMMME_C01 = async (req, res) => {
    const maintenence = new mmmeC01(req.body)
    await maintenence.save()
    res.json({res: 'Ok'})
};
module.exports = MMME_C01;