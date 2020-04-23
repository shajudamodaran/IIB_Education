// JavaScript Document
var projects = [];
var divisions = [];
var table = document.getElementById("customers");
		var table_m = document.getElementById("customers_m");
		var table_l = document.getElementById("customers_l");
		

		var highpriorityworkarray=[];
		var mediumpriorityworkarray=[];
		var lowpriorityworkarray=[];
		
		
		var projectname_array=[];
		var priority_array=[];
		var Des_array=[];
		var status_array=[];
		var division_array=[];
		var ato_array=[];
		var remarks_array=[];
		var esdate_array=[];
		var asdate_array=[];
		var eedate_array=[];
		var aedate_array=[];

		
var selected="Projects";

onload = function loaddata() 
{
 var newEl = document.getElementById("img-loading_button").style.visibility="hidden";
		
var selectvivpro = document.getElementById("prodivselect"); 


replaceloading();



		var script_url="https://script.google.com/macros/s/AKfycbxcX86FJWEPmQ0_w12kAQYWZBLmWEmv8KZsZdwKRvpG3zlSurs/exec";
		var url = script_url+"?action=read";
		
		$.getJSON(url, function (json)
		{
			var temp_projects=[];
			var temp_divisions=[];
			
			
			var count=0;
				var slflag=1;
				for (var i = 0; i < json.records.length; i++) 
					{
					
						
						
						var C2=json.records[i].PROJECTS;
						if(C2 != "")
						{
						temp_projects.push(C2);
						//alert(C2);
						}
						
						var C6=json.records[i].DIVISIONS;
						if(C6 != "")
						{
						temp_divisions.push(C6);
						//alert(C6);
						}
						
						
						
						
					}
					
					setTimeout(function()
		{ 
		
				for(var x = 0; x < temp_projects.length; x++) 
				{
				
						var opt = temp_projects[x];
					
						var el = document.createElement("option");
						el.text = opt;
						el.value = opt;
						selectvivpro.add(el);
						//console.log("Text setted");
						
						projects[x]=temp_projects[x];
						
						
						//console.log("Loaded projects");
						
						
						
						
						
				}
				for(var x = 0; x < temp_divisions.length; x++) 
				{
				
						var opt = temp_divisions[x];
						divisions[x]=temp_divisions[x];
						
						
						
						
						
						
				}
				
				
				console.log("Loaded Divisions");
				console.log("Loaded projects to list");
				replaceold();
		
		}, 4000);
			
			
			
		});
		
		
		//for(var i = 0; i < projects.length; i++) 
		//{
		//alert(projects[i]);
		//}

}



function myOnchange()
{

var select1 = document.getElementById("prodivsetter").value; 
var select2 = document.getElementById("prodivselect"); 

if(select1=="Division")
{
	document.getElementById("prodivselect").style.display = "initial";
	selected="Divisions";
	
	for(var x = 0; x < divisions.length; x++) 
				{
				
				
						var opt = divisions[x];
					
						var el = document.createElement("option");
						el.text = opt;
						el.value = opt;
						select2.add(el);
						
						
						
						
				}
				for(var y = 0; y < projects.length; y++) 
						{
						select2.remove(projects[y]);
						}
						
						
	console.log("Changed");
}
else if(select1=="Project")
{
	document.getElementById("prodivselect").style.display = "initial";
	selected="Projects";
	for(var x = 0; x < projects.length; x++) 
				{
				
				
						var opt = projects[x];
					
						var el= document.createElement("option");
						el.text = opt;
						el.value=opt;
						select2.add(el);
						console.log("Text setted");
						
						
						
				}
				for(var y = 0; y < divisions.length; y++) 
						{
						select2.remove(divisions[y]);
						}
						
						console.log("Text divisions");
		console.log("Changed");
}
else if(select1=="All")
{
	document.getElementById("prodivselect").style.display = "none";
	selected="All";
}

	
}	

function showWorks()
{
	replaceloading_button();
  
	//Clearing all datas
	$("#customers").find("tr:not(:first)").remove();
	$("#customers_m").find("tr:not(:first)").remove();
	$("#customers_l").find("tr:not(:first)").remove();
	
	highpriorityworkarray.length=0;
	mediumpriorityworkarray.length=0;
	lowpriorityworkarray.length=0;
	
		projectname_array.length=0;
		priority_array.length=0;
		Des_array.length=0;
		status_array.length=0;
		division_array.length=0;
		ato_array.length=0;
		remarks_array.length=0;
		esdate_array.length=0;
		asdate_array.length=0;
		eedate_array.length=0;
		aedate_array.length=0;
	
	//gwtting all requiered datas
	 var divorpro = document.getElementById("prodivsetter").value;
	 var x = document.getElementById("prodivselect").selectedIndex;
	 var divorprovalue="";
	 
	 if(selected=="Divisions")
	 {
		 var divorprovalue =divisions[x];
		 console.log(divorprovalue);
		 load_tabledivisionwise(selected,divorprovalue);
		 
		  
	 }
	 else if(selected=="Projects")
	 {
		  
		  var divorprovalue =projects[x];
		  load_tableprojectwise(selected,divorprovalue);
	 }
	 else if(selected=="All")
	 {
		  
		  var divorprovalue ="All";
		    var aEl = document.getElementById("prodivselect").style.display = "none";
		   load_tableall(selected,divorprovalue);
	 }
	 
	 
	
	createtable();
	
}


function  load_tabledivisionwise(p1,p2)
{
	 var pcselect = document.getElementById("pcselect").value;
	var script_url="https://script.google.com/macros/s/AKfycbxceKfNQuVEvf2smGJnPnjTL8bG8sCXOEDaSidoeRU0VK5ATPo/exec";
	var url = script_url+"?action=read";
	
	 
	 if(pcselect=="Completed")
	 {
		  console.log(""+pcselect+" works of "+p2+"")
		  
		  
		
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						
						if( C5==p2 && C4=="Work Finished" )
						{
						
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
									projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
									
								 console.log("CC   Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to Low Priority Array")
							}
						}
						else
						{
							
						}
					}
										
			});
	 }
	 
	 else if(pcselect=="Pending")
	 {
		 console.log(""+pcselect+" works of "+p2+"")
		  
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						if(C5==p2 && C4!=="Work Finished")
						{
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to Low Priority Array")
							}
						}
						else
						{
							
						}
					}
										
			});
	 }
	 else if(pcselect=="All")
	 {
		 console.log(""+pcselect+" works of "+p2+"")
		  
		  
		var script_url="https://script.google.com/macros/s/AKfycbxceKfNQuVEvf2smGJnPnjTL8bG8sCXOEDaSidoeRU0VK5ATPo/exec";
		var url = script_url+"?action=read";
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				
				var table = document.getElementById("myTableData");
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						if(C5==p2)
						{
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to Low Priority Array")
							}
						}
					}
										
			});
	 }

}

function  load_tableprojectwise(p1,p2)
{
	 var pcselect = document.getElementById("pcselect").value;
	var script_url="https://script.google.com/macros/s/AKfycbxceKfNQuVEvf2smGJnPnjTL8bG8sCXOEDaSidoeRU0VK5ATPo/exec";
	var url = script_url+"?action=read";
	
	 
	 if(pcselect=="Completed")
	 {
		  console.log(""+pcselect+" works of "+p2+"")
		  
		  
		
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						
						if( C2==p2 && C4=="Work Finished" )
						{
						
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to Low Priority Array")
							}
						}
						else
						{
							
						}
					}
										
			});
	 }
	 
	 else if(pcselect=="Pending")
	 {
		 console.log(""+pcselect+" works of "+p2+"")
		  
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						if(C2==p2 && C4!=="Work Finished")
						{
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to Low Priority Array")
							}
						}
						else
						{
							
						}
					}
										
			});
	 }
	 else if(pcselect=="All")
	 {
		 console.log(""+pcselect+" works of "+p2+"")
		  
		  
		var script_url="https://script.google.com/macros/s/AKfycbxceKfNQuVEvf2smGJnPnjTL8bG8sCXOEDaSidoeRU0VK5ATPo/exec";
		var url = script_url+"?action=read";
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				
				var table = document.getElementById("myTableData");
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						if(C2==p2)
						{
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to Low Priority Array")
							}
						}
					}
										
			});
	 }
}
function  load_tableall(p1,p2)
{
	 var pcselect = document.getElementById("pcselect").value;
	var script_url="https://script.google.com/macros/s/AKfycbxceKfNQuVEvf2smGJnPnjTL8bG8sCXOEDaSidoeRU0VK5ATPo/exec";
	var url = script_url+"?action=read";
	
	 
	 if(pcselect=="Completed")
	 {
		  console.log(""+pcselect+" works of "+p2+"")
		  
		  
		
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						
						if( C4=="Work Finished" )
						{
						
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("CC   Added to Low Priority Array")
							}
						}
						else
						{
							
						}
					}
										
			});
	 }
	 
	 else if(pcselect=="Pending")
	 {
		 console.log(""+pcselect+" works of "+p2+"")
		  
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						if(C4!=="Work Finished")
						{
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("PP   Added to Low Priority Array")
							}
						}
						else
						{
							
						}
					}
										
			});
	 }
	 else if(pcselect=="All")
	 {
		 console.log(""+pcselect+" works of "+p2+"")
		  
		  
		var script_url="https://script.google.com/macros/s/AKfycbxceKfNQuVEvf2smGJnPnjTL8bG8sCXOEDaSidoeRU0VK5ATPo/exec";
		var url = script_url+"?action=read";
		 $.getJSON(url, function (json) 
			{
				flag="JSON Accessed";
				var flagsl=1;
				
				var table = document.getElementById("myTableData");
				var count=0;
				for (var i = 0; i < json.records.length; i++) 
					{
						
						var C2=json.records[i].PROJECT_NAME;
						var C3=json.records[i].TASK;
						var C4=json.records[i].STATUS;
						var C5=json.records[i].DIVISION_NAME;
						var C6=json.records[i].ACTUAL_END_DATE;
						var C7=json.records[i].PRIORITY;
						
						var C8=json.records[i].EXPECTED_END_DATE;
						var C9=json.records[i].ACTUAL_START_DATE;
						var C10=json.records[i].EXPECTED_START_DATE;
						
						var C11=json.records[i].ASSIGNED_TO;
						var C12=json.records[i].DESCRIPTION;
						var C13=json.records[i].REMARKS;
						
						
							if(C7=="High Priority")
							{
								highpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to High Priority Array")
							}
							else if(C7=="Medium Priority")
							{
								mediumpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to Medium Priority Array")
							}
							else if(C7=="Low Priority")
							{
								lowpriorityworkarray.push(C3);
								
								projectname_array.push(C2);
									priority_array.push(C7);
									Des_array.push(C12);
									status_array.push(C4);
									division_array.push(C5);
									ato_array.push(C11);
									remarks_array.push(C13);
									esdate_array.push(C10);
									asdate_array.push(C9);
									eedate_array.push(C8);
									aedate_array.push(C6);
								 console.log("AA  Added to Low Priority Array")
							}
						
					}
										
			});
	 }
}

function createtable()
{
		setTimeout(function(){ 




 var table = document.getElementById("customers");
		var table_m = document.getElementById("customers_m");
		var table_l = document.getElementById("customers_l");
		
		
		if(highpriorityworkarray.length==0)
		{
			var row = table.insertRow(-1);
							var cell1 = row.insertCell(0);
							cell1.innerHTML ="( No High Priority Work assigned )";
		}
		else
		{
			
		for (var i = 0; i < highpriorityworkarray.length; i++) 
					{
							var row = table.insertRow(-1);
							var cell1 = row.insertCell(0);
							cell1.innerHTML = highpriorityworkarray[i];
						
					}
					
		}
		
		

		if(mediumpriorityworkarray.length==0)
		{
							var row = table_m.insertRow(-1);
							var cell1 = row.insertCell(0);
							cell1.innerHTML ="( No Medium Priority Work assigned )";
		}
		else
		{
			
		for (var i = 0; i < mediumpriorityworkarray.length; i++) 
					{
							var row = table_m.insertRow(-1);
							var cell1 = row.insertCell(0);
							cell1.innerHTML = mediumpriorityworkarray[i];
						
					}
					
		}
	
        if(lowpriorityworkarray.length==0)
		{
							
							var row = table_l.insertRow(-1);
							var cell1 = row.insertCell(0);
							cell1.innerHTML ="( No Low Priority Work assigned )";
		}
		{
			
		for (var i = 0; i < lowpriorityworkarray.length; i++) 
					{
							var row = table_l.insertRow(-1);
							var cell1 = row.insertCell(0);
							cell1.innerHTML = lowpriorityworkarray[i];
						
					}
						 replaceold_button();
					
		}
	



		}, 5000);                       			

}

  function replaceloading()
  { 
     var aEl = document.getElementById("prodivselect").style.display = "none";
	   var aEl = document.getElementById("pcselect").style.display = "none";
	  var newEl = document.getElementById("img-loading").style.visibility="visible";
	  
	  
  }
  
  function replaceold()
  { 
     var aEl = document.getElementById("prodivselect").style.display = "initial";
	  var aEl = document.getElementById("pcselect").style.display = "initial";
	 var newEl = document.getElementById("img-loading").style.display = "none";
	  
	  
  }
  
  function replaceloading_button()
  { 
     var aEl = document.getElementById("sbmt_btn").style.display = "none";
	 var newEl = document.getElementById("img-loading_button").style.visibility="visible";
	  
	  
  }
  
  function replaceold_button()
  { 
     var aEl = document.getElementById("sbmt_btn").style.display = "initial";; 
	 var newEl = document.getElementById("img-loading_button").style.visibility="hidden";
	  
	  
  }
  
  function highprioonclick()
  {
    var table = document.getElementById('customers');
    var cells = table.getElementsByTagName('td');
	
	 for (var i = 0; i < cells.length; i++) 
	 {
        var cell = cells[i];
		
        cell.onclick = function () 
		{
				var rowId = this.parentNode.rowIndex;
				var celldata=document.getElementById("customers").rows[rowId].cells[0].innerHTML;
				if(celldata=="( No High Priority Work assigned )")
				{
				}
				else
				{
						localStorage.setItem("k0",highpriorityworkarray[rowId-1]);
						
						
						window.location.href = "editwork_new.html";				
				}
				
		}
	 }
	
  }
  
   function mediumprioonclick()
  {
    var table = document.getElementById('customers_m');
    var cells = table.getElementsByTagName('td');
	
	 for (var i = 0; i < cells.length; i++) 
	 {
        var cell = cells[i];
         cell.onclick = function () 
		{
				var rowId = this.parentNode.rowIndex;
				var celldata=document.getElementById("customers_m").rows[rowId].cells[0].innerHTML;
				if(celldata=="( No Medium Priority Work assigned )")
				{
				}
				else
				{
						localStorage.setItem("k0",mediumpriorityworkarray[rowId-1]);
						
						
						window.location.href = "editwork_new.html";				
				}
				
		}
	 }
	
  }
  
   function lowprioonclick()
  {
    var table = document.getElementById('customers_l');
    var cells = table.getElementsByTagName('td');
	
	 for (var i = 0; i < cells.length; i++) 
	 {
		  var cell = cells[i];
        cell.onclick = function () 
		{
				var rowId = this.parentNode.rowIndex;
				var celldata=document.getElementById("customers_l").rows[rowId].cells[0].innerHTML;
				if(celldata=="( No Low Priority Work assigned )")
				{
				}
				else
				{
						localStorage.setItem("k0",lowpriorityworkarray[rowId-1]);
						
						window.location.href = "editwork_new.html";				
				}
				
		}
	 }
	
  }

	
	

		
	
	
	
	



	

