# @mindpath/logger
## Description
Custom logging moudle to print logs on console, file or sent it to logs visualization application such as grafana.

# Dependencies
**winston**: https://www.npmjs.com/package/winston
**winston-loki**: https://www.npmjs.com/package/winston-loki

## Usage
Install using npm:
```bash
$ npm install --save @mindpath/logger
```

### Set following env to your code.
```sh
LOG_LEVEL='debug'
LOGS_PROVIDERS='[{"name": "console"},{"name": "grafana","url": "https://example.com"}]'
SERVICE_LABEL='mindpath-example-service'
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
This module currently support following providers. You can use any combination of below providers.

 - **console**: Pass if you need logs to be print on console.
 - **grafana**: Pass if you want to sent logs to grafana using loki transport. Grafana url is
   needed for this. 

Some of the Log providers needs there configuration properties as well.  
Follow below steps to set Log Providers in environment variable. 

 1. Form a json contain array of objects.
 ```js
[{"name": "console"},{"name": "grafana","url": "https://example.com"}]
 ```
 2. Use JSON as string in environment variable for property LOGS_PROVIDERS.
  ```json
'[{"name": "console"},{"name": "grafana","url": "https://example.com"}]'
 ```

 ### Usage

 ```ts
  import logger from '@mindpath/logger';

  logger.error('Print error message');
  logger.info('Print info message');

  // You can use all the levels defined in Log Levels

 ```
  Or

 ```js
 const logger = require("@mindpath/logger");

 logger.error('Print error message');
 logger.info('Print info message');
 
 // You can use all the levels defined in Log Levels

 ```


## TODO

 - Support to store logs in local file.
 - Elastic search support.

## Contributors
[Vikas Patidar](https://www.linkedin.com/in/vikas-patidar-0106/)