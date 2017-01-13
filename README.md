# musto_server
must do Schedule Management server

## API Document

* Common Response

    HTTP 200: Success

    HTTP 400: DB error

    HTTP 401: Bad Request

    HTTP 403: Params Missing

* GET /auth/signup

> Params

    id : User id [String]

    passwd : User   Password [String]
    
    name : user name [String]

> Response

    HTTP 200 : User

    HTTP 400 : No user

    HTTP 401 : ID / Password Incorrect

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
 
