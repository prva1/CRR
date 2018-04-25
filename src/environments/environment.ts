// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {

  production: false,

  EMPLOYER_FEATURE_URL:'http://localhost:8080/EmployerController/getEmployerServices?ppsn=8107760A&opt=',

  USER_DETAIL_URL:'http://localhost:8080/CustomerController/getCustomerDetail?ppsn=',

  RECENT_COMMUNICATION_URL:'http://localhost:8080/CommunicationController/getCommunication?ppsn=',

  holaURL:'',
};
