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

    updateInvestmentService = (investments) => {
        return this.put('retirementinfos/updateinvestment', investments)
    }

    updateSalaryService = (salary) => {
        return this.put('retirementinfos/updatesalary', salary)
    }

    updateHousePriceService = (housePrice) => {
        return this.put('retirementinfos/updatehouseprice', housePrice)
    }

    getGuestRetirementAge = (retirementInfo) => {
        return this.post('retirementinfos/getguestretirementage', retirementInfo)
    }
}

export const retirementInfoService = new RetirementInfoService();