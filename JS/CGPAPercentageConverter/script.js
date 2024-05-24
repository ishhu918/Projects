 function convertCgpa(){
    let cgpaEl = document.getElementById("cgpa").value;
    if(cgpaEl==0){
        alert("Enter Valid CGPA");
        document.getElementById("cgpa").value= "";
    } else if(cgpaEl>10){
        alert("Enter the CGPA Value between 1 to 10!");
        document.getElementById("cgpa").value= "";
        document.getElementById("percentage").value= "";
    }else{
        const cgpaResult= cgpaEl*9.5;
        document.getElementById("percentage").value = `${cgpaResult}`;
    }
    
 }

 function convertPercentage(){
    let percentageEl = document.getElementById("Cpercentage").value;
    if(percentageEl===0){
        alert("Enter Valid Percentage");
    } else if(percentageEl>100){
        alert("Enter the Percentage Value between 1 to 100 !");
    }else{
        const percentageResult= percentageEl/9.5;
        document.getElementById("Pcgpa").value = `${percentageResult}`;
    }
    
 }