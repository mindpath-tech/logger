# @mindpath/logger
## Description
Custom logging moudle to print logs on console, file or sent it to logs visualization application such as grafana.

## Usage
Install using npm:
```bash
$ npm install --save @mindpath/logger
```

### Set following env to your code.
```sh
LOG_LEVEL='debug'  # Values of this property is defined under Log Levels
LOGS_PROVIDERS="[{\"name\":\"console\"},{\"name\":\"grafana\",\"url\":\"example.com\"}]"  # Stringfy value of json object for more details refer section Log Providers.
SERVICE_LABEL='mindpath-example-service' #Unique identifier for your service.
```
### Log Levels
Below are npm logging levels that are prioritized from 0 to 6 (highest to lowest):
 ```sh
error: 0,
warn: 1,
info: 2,
http: 3,
verbose: 4,
debug: 5,
silly: 6
```

### Log Providers.
This module currently support following providers. We you can use any combination of below providers.

 - **console**: Pass log if you need logs to be print on console.
 - **grafana**: Pass if you want to sent logs to grafana. Grafana url is
   needed for this.

Some of the Log providers needs there configuration properties as well.  
Follow below steps to set Log Providers in environment variable. 

 1. Form a json object.
 ```sh
[ 
	{ 
		"name": "console"  
	}, 
	{ 
		"name": "grafana", 
		"url": "example.com" 
	} 
]
 ```
 2. Convert json object to string using
 ``` js 
JSON.stringify()
 ```
 3. Use stringified value in environment variable.

## TODO

 - Support to store log data in local file.
 - Elastic search support.

## Contributors
[Vikas Patidar](https://www.linkedin.com/in/vikas-patidar-0106/)