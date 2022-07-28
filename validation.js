	
function formvalidation(form){

	var x0= document.forms["studentinfo"]["Studentname"].value;
	var x1= document.forms["studentinfo"]["phone"].value;
	var y1= document.forms["studentinfo"]["lphone"].value;
	var y2= document.forms["studentinfo"]["stno"].value;
	var x3= document.forms["studentinfo"]["age1"].value;
	var x4= document.forms["studentinfo"]["dob"].value;
	var y2= document.forms["studentinfo"]["married"].value;
	var x5= document.forms["studentinfo"]["sub"].value;
	var y3= document.forms["studentinfo"]["alive"].value;
	var x6= document.forms["studentinfo"]["age2"].value;
	var x7= document.forms["studentinfo"]["Occupation1"].value;
	var x8= document.forms["studentinfo"]["mnum1"].value;
	var y4= document.forms["studentinfo"]["nalive"].value;
	var x9= document.forms["studentinfo"]["age3"].value;
	var x10= document.forms["studentinfo"]["Occupation2"].value;
	var x11= document.forms["studentinfo"]["mnum2"].value;
	var x12= document.forms["studentinfo"]["Height"].value;
	var x13= document.forms["studentinfo"]["Weight"].value;
	var x14= document.forms["studentinfo"]["bmi"].value;
	var x15= document.forms["studentinfo"]["vision"].value;
	

	if(x0==null || x0=="" || x1==null || x1=="" ||x2==null || x2=="" ||x3==null || x3=="" ||x4==null || x4=="" ||x5==null || x5=="" 
	||x6==null || x6=="" ||x7==null || x7=="" ||x8==null || x8=="" ||x9==null || x9=="" 
	||x10==null || x10=="" ||x11==null || x11=="" ||x12==null || x12=="" 
	||x13==null || x13=="" ||x14==null || x14=="" ||x15==null || x15=="" 
	||y1==null || y1=="" ||y2==null || y2=="" || y3==null || y3=="" || y4==null || y4=="" ){

	alert("Please fill the all field");
	return false;
	}
	return true;
}
