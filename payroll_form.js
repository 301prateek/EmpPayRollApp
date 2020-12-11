window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function() {
        if(name.value.length == 0){
            textError.textContent ="";
            return;
        }
        try{
            (new EmployeeData()).name = name.value;
            textError.textContent = "";
        } catch(e){
            textError.textContent= e;
        }
    });

    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
    output.textContent=salary.value;
    });
});

const save = () => {
    try{
        let employeePayrollData = createEmployeePayroll();
    } catch (e){
        return;
    }
}

const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeeData();
    try{
        employeePayrollData.name = getInputValueById('#name');
    } catch(e) {
        setTextValue('.text-error', e);
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let date = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
               getInputValueById('#year');
    employeePayrollData.date = Date.parse(date);
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValues) => {
    let allItems = document.querySelectorAll(propertyValues);
    let setItems = [];
    allItems.forEach(item => {
        if(item.checked) setItems.push(item.values);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).values;
    return value;
}

const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}
