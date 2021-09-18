const {format} = require('date-fns');
const {double} = require('calc');

exports.handler = async event => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      today: format(new Date(), "'Today is a' eeee"),
      doubled: double(15),
    }),
  };

  return response;
};
