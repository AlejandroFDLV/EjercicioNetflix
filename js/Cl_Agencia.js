export default class Agencia{
    constructor(){
        this.cntSus=
        this.cntNpg=
        this.cntP1=
        this.cntP2=
        this.cntP3=
        0
    }
    proSus(s){
        this.cntSus++
        if(s.tipoPlan ==="C"){
            this.cntNpg++
        }
        if(s.tipoPlan === "A"){
            this.cntP1++
        }
        else if(s.tipoPlan ==="B"){
            this.cntP2++
        }
        else this.cntP3++
    }
    plFav(){
        if (this.cntP1===this.cntP2 && this.cntP1===this.cntP3)
            return "Por iguales planes A, B, C."
        else if (this.cntP1===this.cntP2 && this.cntP1>this.cntP3)
            return "Por iguales planes A y B."
        else if (this.cntP1===this.cntP3 && this.cntP1>this.cntP2)
            return "Por iguales planes A y C."
        else if (this.cntP2===this.cntP3 && this.cntP2>this.cntP1)
            return "Por iguales planes B y C."
        else if (this.cntP1>this.cntP2 && this.cntP1>this.cntP3)
            return "El plan A."
        else if (this.cntP2>this.cntP1 && this.cntP2>this.cntP3)
            return "El plan B."
        else if (this.cntP3>this.cntP2 && this.cntP3>this.cntP1)
            return "El plan C."
    }
    porSusNP(){
        return (this.cntNpg / this.cntSus) * 100
    }
    }
