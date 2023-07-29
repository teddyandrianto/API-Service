const codeStatus = {
    '01': 'Invalid Mandatory Field',
    '02': 'No Data',
    '03': 'Invalid Username or Password',
    '04': 'Unauthorized',
    '05': 'Page Not Found',
    '06': 'Data Not Found',
    '07': 'Duplicate Data',
    '401': 'Not Found',
    '404': 'Not Found',
    '500': 'Internal Server Error' 
}

function errorRes (code, valueError) {
    return {
         'code' : code,
         'message' : codeStatus[code],
         'timeResponse': new Date(),
         'errors' : valueError
    }
};

function successRes (value) {
    return {
         'code' : '00',
         'message' : 'ok',
         'timeResponse': new Date(),
         'response' : value
    }
 };



module.exports = { successRes, errorRes }