### Car Owners App
An express application that supplies a list of car owners based on specific filter parameters

## End Points

# /filters
METHOD : `GET`  
Required Query params  
`page` : `number`

Success Response  
`status` : 200  
`data` : `[{...}...]`  
`nextPage` : `url` || `null`  
`prevPage` : `url` || `null`  

Failure Response  
`status`: 500 || 400  
`error` : string || array  


# /people
METHOD : `POST`  
Required Query params  
`page` : `number` 

Payload

`start_year` : `number`  
`end_year` : `number`  
`colors` : `array`  
`countries` : `array`  
`gender` : `male` || `female`  

Success Response  
`status` : 200  
`data` : `[{...}...]`  
`nextPage` : `url` || `null`  
`prevPage` : `url` || `null`  

Failure Response  
`status`: 500 || 400  
`error` : string || array  