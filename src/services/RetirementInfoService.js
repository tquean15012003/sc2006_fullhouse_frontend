import { baseService } from "./BaseService";

export class RetirementInfoService extends baseService {
    getRetirementInfoService = () => {
        return this.get('retirementinfos/getretirementinfo');
    }

    getRetirementAgeService = () => {
        return this.get('retirementinfos/getretirementage')
    }

    updateRetirementInfoService = (retirementInfo) => {
        return this.post('retirementinfos/updateretirementinfo', retirementInfo)
    }
}

export const retirementInfoService = new RetirementInfoService();