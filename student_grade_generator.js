function calculateAverage(marks){
    let sumOfmarks=0
    for(let mark of marks){
        sumOfmarks+=mark;
    }
    let average=(sumOfmarks/marks.length)
    return average;
}
function getGrade(average){
    if(average>=90 && average<=100){
        return "Grade: A"
    }
    else if(average>=80 && average<90){
        return "Grade: B"
    }
    else if(average>=70 && average<80){
        return "Grade: C"
    }
    else if(average>=60 && average<69){
        return "Grade: D"
    }
    else{
        return "Grade: F"
    }
}

function display(student){
    let average=calculateAverage(student.marks)
    let grade=getGrade(average)
    console.log("Name:",student.name);
    console.log("Average Marks:",average);
    console.log(grade);
}
const student1={
    name:"XYZ",
    marks:[85,92,78,88,90]
};
const student2={
    name:"Kade Karunakar",
    marks:[85,92,78,88,90]
};

display(student1);
display(student2);
