import {FrecuencyTableInterface} from "./FrecuencyTable.interface";


export class FrecuencyTableImpl implements FrecuencyTableInterface {

    private count: number = 0
    private readonly totalData: number
    private readonly data: Array<any>


    constructor(totalData: number, data: Array<any>) {
        this.totalData = totalData
        this.data = data;
    }

    public variables(): Array<any> {

        return [...new Set(this.data)];

    }

    public calcFrecuency(): object {

        let frecuency: object = {}

        this.variables().forEach(variable => {
            this.data.forEach(element => {
                if (variable === element) {
                    // @ts-ignore
                    frecuency[variable] = this.count += 1
                }
            })
            this.count = 0
        })
        this.count = 0
        return frecuency;
    }

    public calcCumulativeFrecuency(): object {

        let cumulativeFrecuency: object = {}

        this.variables().forEach(variable => {
            this.data.forEach(element => {
                if (variable === element) {
                    // @ts-ignore
                    cumulativeFrecuency[variable] = this.count += 1
                }
            })

        })
        this.count = 0
        return cumulativeFrecuency;
    }

    public calcRelativeFrecuency(): object {
        let relativeFrecuency: object = {}
        this.variables().forEach(variable => {
            this.data.forEach(element => {
                if (variable === element) {
                    // @ts-ignore
                    relativeFrecuency[variable] = (((this.count += 1 / this.totalData) * 100).toFixed(2))
                }
            })
            this.count = 0
        })
        return relativeFrecuency
    }

    public calcComulativeRelativeFrecuency(): object {
        let comulativeRelativeFrecuency: object = {}
        this.variables().forEach(variable => {
            this.data.forEach(element => {
                if (variable === element) {
                    // @ts-ignore
                    comulativeRelativeFrecuency[variable] = (((this.count += 1 / this.totalData) * 100).toFixed(2))
                }
            })
        })
        this.count = 0
        return comulativeRelativeFrecuency;

    }


}