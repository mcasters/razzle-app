class CustomDate extends Date {
    constructor() {
        super();
    }

    getNumberDate() {
        var mois = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
        return this.getDate() + "/" + mois[this.getMonth()] + "/" + this.getFullYear();
    }

    getShortStringDate() {
        var mois = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct',
            'Nov', 'Déc'];
        return this.getDate() + " " + mois[this.getMonth()] + " " + this.getFullYear();
    }

    getLongStringDate() {
        var mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août',
            'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        return this.getDate() + " " + mois[this.getMonth()] + " " + this.getFullYear();
    }
}

export default CustomDate;
