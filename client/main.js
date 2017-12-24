import { Template } from 'meteor/templating';


import './main.html';

if (Meteor.isClient) {

   Template.hello.events({

      'submit form': function(event) {
         event.preventDefault();

         var inputdata = event.target.input.value;
         console.log(inputdata);
         event.target.data.value = inputdata;
//         event.target.comment.value = inputdata;

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region 
//myConfig.update({region: 'ap-south-1'});
var myConfig = new AWS.Config({
   region: 'ap-south-1'
});
//AWS.config file AccessKey
//AWS.config.loadFromPath('../../config.json'); //This config.json file is needed to provide acces key of user to make API calls

 console.log("SDK loaded");           // successful response

// Create EC2 service object
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

var params = {
    InstanceCount: 1, 
      BlockDurationMinutes: 60, // Time should be multiple of 60mins
     LaunchSpecification: {
	     ImageId: "ami-a73c76c8", //Customized ubuntu 16.04 image with apache and node installed
	     InstanceType: "t2.micro",
	     Placement: {
		     AvailabilityZone: "ap-south-1b"
	     }, 
	     SecurityGroupIds: [
		     "sg-78d0df10"
	     ]
     }, 
	SpotPrice: "0.0095", // Maximum price willing to pay
	Type: "one-time"
};

console.log("var set");

   ec2.requestSpotInstances(params, function(err, data) {
	   if (err) 	{
			console.log("can't call the function");
			console.log(err, err.stack); // an error occurred
		//	event.target.comment.value = data;
		}	else	{
			console.log(data);           // successful response
         //		event.target.comment.value = data;
		}
   });


      	   
	}   
});

}
