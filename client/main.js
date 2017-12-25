import { Template } from 'meteor/templating';


import './main.html';

if (Meteor.isClient) {

   Template.hello.events({

      'submit form': function(event) {
         event.preventDefault();

         var inputdata = event.target.input.value;
	if (inputdata == "deploy")	{
	
	 console.log(inputdata);
         event.target.data.value = inputdata;
//         event.target.comment.value = inputdata;

	Meteor.call('createInstance', function(error , result){
	    if(error){
	      console.log(error);
	    } else {
//		console.log(result);
		event.target.comment.value = "Instance Created Successfully";
	    }  
      	   });
}
	else	{
			
		event.target.comment.value = "Please enter deploy in the text box";
		}
}   
});
}
