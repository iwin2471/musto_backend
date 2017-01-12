# musto_server
must do Schedule Management server


* User schema

> id : User's id [String required unique]

> passwd : User's Password [String required]

> token : User token [String]

> name: User name [String]



* ScheduleSchema

 > owner: schedule owner (user name) [String] 
 
 > Date: schedule date [String] 
 
 > schedules: {
   > title: schedule title [String] 
   
   > content: schedule content [String] 
   
   > start_time: schedule start time [String] 
   
   > start_time: schedule end time [String] 
 }
 
