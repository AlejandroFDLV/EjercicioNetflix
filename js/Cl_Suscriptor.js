export default class Cl_Suscriptor{
    constructor(c, tP){
        this.cedula=c;
        this.tipoPlan=tP;
    }
    prePag(){
        switch(this.tipoPlan){
            case 'A': return 3.3
            case 'B': return 5.5
            case 'C': return 10;
        }
    }
}