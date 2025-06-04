document.getElementById('my_form').addEventListener('submit', function (event) {
    event.preventDefault()



    let basic_salary = Number(document.getElementById('bs_salary').value)
    let benefits = Number(document.getElementById('benefits').value)

    function gross_salary(basic_salary, benefits) {
        let gross1_salary = basic_salary + benefits
        return gross1_salary
    }

    let gross = gross_salary(basic_salary, benefits)
    document.getElementById('gs').innerHTML = gross


    function nhif(gros_salary) {

        let nhif_contribution = 0
        if (gros_salary > 0 && gros_salary <= 5999) {
            nhif_contribution = 150
        }
        else if (gros_salary >= 6000 && gros_salary <= 7999) {
            nhif_contribution = 300
        }
        else if (gros_salary >= 8000 && gros_salary <= 11999) {
            nhif_contribution = 400
        }
        else if (gros_salary >= 12000 && gros_salary <= 14999) {
            nhif_contribution = 500
        }
        else if (gros_salary >= 15000 && gros_salary <= 19000) {
            nhif_contribution = 600
        }
        else if (gros_salary >= 20000 && gros_salary <= 24999) {
            nhif_contribution = 750
        }
        else if (gros_salary >= 25000 && gros_salary <= 29999) {
            nhif_contribution = 850
        }
        else if (gros_salary >= 30000 && gros_salary <= 34999) {
            nhif_contribution = 900
        }
        else if (gros_salary >= 35000 && gros_salary <= 39999) {
            nhif_contribution = 950
        }
        else if (gros_salary >= 40000 && gros_salary <= 44999) {
            nhif_contribution = 1000
        }
        else if (gros_salary >= 45000 && gros_salary <= 49999) {
            nhif_contribution = 1100
        }
        else if (gros_salary >= 50000 && gros_salary <= 59999) {
            nhif_contribution = 1200
        }
        else if (gros_salary >= 60000 && gros_salary <= 69999) {
            nhif_contribution = 1300
        }
        else if (gros_salary >= 70000 && gros_salary <= 79999) {
            nhif_contribution = 1400
        }
        else if (gros_salary >= 80000 && gros_salary <= 89999) {
            nhif_contribution = 1500
        }
        else if (gros_salary >= 90000 && gros_salary <= 99999) {
            nhif_contribution = 1600
        }
        else if (gros_salary >= 90000 && gros_salary <= 99999) {
            nhif_contribution = 1600
        }
        else {
            nhif_contribution = 1700

        }
        return nhif_contribution
    }

    let gros_salary = Number(document.getElementById('gs').innerHTML)

    let total_nhif = nhif(gros_salary)
    document.getElementById('nh').innerHTML = total_nhif


    function calc_nssf(x, rate = 0.06) {
        let total_nhif = 0
        if (x >= 0 && x <= 18000) {
            total_nhif = (x * rate)
        }
        else {
            total_nhif = 18000 * 0.06
        }
        return total_nhif
    }
    let x_gross = Number(document.getElementById('gs').innerHTML);
    let rate_1 = 0.06;

    let NSSF = calc_nssf(x_gross, rate_1)
    document.getElementById('ns').innerHTML = NSSF



    function calculate_nhdf(gs, rate = 0.015) {
        let calc_nhdf = gs * rate
        return calc_nhdf
    }

    let gs_gross = Number(document.getElementById('gs').innerHTML);
    let rate_2 = 0.015;

    let NHDF = calculate_nhdf(gs_gross, rate_2)
    document.getElementById('nd').innerHTML = NHDF





    function taxable_income(gs, nsf, nhf) {
        let tax_income = gs - ((nsf + nhf))
        return tax_income
    }

    let gs1_gross = Number(document.getElementById('gs').innerHTML)
    let nsf = Number(document.getElementById('ns').innerHTML)
    let nhf = Number(document.getElementById('nh').innerHTML)

    let totaltax_income = taxable_income(gs1_gross, nsf, nhf)
    document.getElementById('tax').innerHTML = totaltax_income




    function calc_payee(tax) {
        let payee = 0
        let relief = 2400

        if (tax > 0 && tax <= 24000) {
            payee = 0
        }
        else if (tax >= 24000 && tax <= 32333) {
            payee = (24000 * 0.1) + ((tax - 24000) * 0.25) - (relief)
        }
        else {
            payee = (24000 * 0.1) + (8333 * 0.25) + ((tax - 32333) * 0.3) - (relief)
        }
        return payee
    }

    let tax = Number(document.getElementById('tax').innerHTML)

    let total_payee = calc_payee(tax)
    document.getElementById('paye').innerHTML = total_payee


    function calc_net_salary(grs, nh1, nd1, ns1, pay) {
        let my_salary = grs - (nh1 + nd1 + ns1 + pay)
        return my_salary
    }

    let grs_1 = Number(document.getElementById('gs').innerHTML)
    let nh1 = Number(document.getElementById('nh').innerHTML)
    let ns1 = Number(document.getElementById('ns').innerHTML)
    let nd1 = Number(document.getElementById('nd').innerHTML)
    let pay = Number(document.getElementById('paye').innerHTML)


    let net_salary = calc_net_salary(grs_1, nh1, ns1, nd1, pay)
    document.getElementById('net').innerHTML = net_salary

})






