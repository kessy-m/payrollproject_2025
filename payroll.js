let form =get
// function gross_salary(basic_salary, benefits) {
//             let gross1_salary = basic_salary + benefits
//             return gross1_salary
//         }
//         let b_salary = Number(prompt('enter basic salary'))
//         let b_fits = Number(prompt('enter benefits'))
//         let total_gross = gross_salary(b_salary, b_fits)
        
//         // console.log(total_gross, "gross")



//         function nhif(gros_salary) {

//             let nhif_contribution = 0
//             if (gros_salary > 0 && gros_salary <= 5999) {
//                 nhif_contribution = 150
//             }
//             else if (gros_salary >= 6000 && gros_salary <= 7999) {
//                 nhif_contribution = 300
//             }
//             else if (gros_salary >= 8000 && gros_salary <= 11999) {
//                 nhif_contribution = 400
//             }
//             else if (gros_salary >= 12000 && gros_salary <= 14999) {
//                 nhif_contribution = 500
//             }
//             else if (gros_salary >= 15000 && gros_salary <= 19000) {
//                 nhif_contribution = 600
//             }
//             else if (gros_salary >= 20000 && gros_salary <= 24999) {
//                 nhif_contribution = 750
//             }
//             else if (gros_salary >= 25000 && gros_salary <= 29999) {
//                 nhif_contribution = 850
//             }
//             else if (gros_salary >= 30000 && gros_salary <= 34999) {
//                 nhif_contribution = 900
//             }
//             else if (gros_salary >= 35000 && gros_salary <= 39999) {
//                 nhif_contribution = 950
//             }
//             else if (gros_salary >= 40000 && gros_salary <= 44999) {
//                 nhif_contribution = 1000
//             }
//             else if (gros_salary >= 45000 && gros_salary <= 49999) {
//                 nhif_contribution = 1100
//             }
//             else if (gros_salary >= 50000 && gros_salary <= 59999) {
//                 nhif_contribution = 1200
//             }
//             else if (gros_salary >= 60000 && gros_salary <= 69999) {
//                 nhif_contribution = 1300
//             }
//             else if (gros_salary >= 70000 && gros_salary <= 79999) {
//                 nhif_contribution = 1400
//             }
//             else if (gros_salary >= 80000 && gros_salary <= 89999) {
//                 nhif_contribution = 1500
//             }
//             else if (gros_salary >= 90000 && gros_salary <= 99999) {
//                 nhif_contribution = 1600
//             }
//             else if (gros_salary >= 90000 && gros_salary <= 99999) {
//                 nhif_contribution = 1600
//             }
//             else {
//                 nhif_contribution = 1700

//             }
//             return nhif_contribution
//         }

//         let gros_salary=Number(prompt('enter the gross salary: '))

//         let total_nhif = nhif(gros_salary)
//         // console.log(total_nhif, 'nhif')

        

        

//         function nhdf(gs, rate = 0.015) {
//             let calc_nhdf = gs * rate
//             return calc_nhdf
//         }

//         let gs_gross = Number(prompt('enter the gross salary: '));
//         let rate_2 = 0.015;

//         let NHDF = nhdf(gs_gross, rate_2)
//         // console.log(NHDF, 'nhdf')


       

//         function taxable_income(gs, ns, nh) {
//             let tax_income = gs - ((ns + nh))
//             return tax_income
//         }

//         let gs1_gross = Number(prompt('enter the gross salary: '))
//         let ns = Number(prompt('enter nssf: '))
//         let nh = Number(prompt('enter nhif: '))

//         let totaltax_income = taxable_income(gs1_gross, ns, nh)
//         // console.log(totaltax_income, "tax_income")




        
       

//         function calc_payee(tax) {
//             let payee = 0
//             let relief = 2400

//             if (tax > 0 && tax <= 24000) {
//                 payee = 0
//             }
//             else if (tax >= 24000 && tax <= 32333) {
//                 payee = (24000 * 0.1) + ((tax - 24000) * 0.25) - (relief)
//             }
//             else {
//                 payee = (24000 * 0.1) + (8333 * 0.25) + ((tax - 32333) * 0.3) - (relief)
//             }
//             return payee
//         }

//         let tax = Number(prompt('enter the tax: '))

//         let total_payee = calc_payee(tax)
//         // console.log(total_payee, 'total_payee')



        



//         function calc_net_salary(grs, nh1, nd1, ns1, pay) {
//             let my_salary = grs - (nh1 + nd1 + ns1 + pay)
//             return my_salary
//         }

//         let grs_1 = Number(prompt('enter gross salary: '));
//         let nh1 = Number(prompt('nhif: '));
//         let ns1 = Number(prompt('enter nssf: '));
//         let pay = Number(prompt('enter payee: '));


//         let net_salary = calc_net_salary(grs_1, nh1, ns1, pay)
//         // console.log(net_salary, 'net_salary')
