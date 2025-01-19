export default {
  common: {
    downloadHarlemWizardsApp: 'Download Harlem Wizards App',
    applyFilter: 'Apply Filter',
    noData: 'No Data Available',
    errors: {
      '401': {
        title: 'Unauthorized',
        message: 'Please log in again.',
      },
      '403': {
        title: 'Forbidden',
        message: 'You do not have permission to perform this action.',
      },
      '404': {
        title: 'Not Found',
        message: 'Requested resource was not found.',
      },
      '500': {
        title: 'Server Error',
        message: 'An error occurred on the server. Please try again later.',
      },
      default: {
        title: 'Unexpected Error',
        message: 'Error {status}: {data}',
      },
      noResponse: {
        title: 'No Response',
        message: 'The server did not respond. Please check your connection.',
      },
      requestError: {
        title: 'Request Error',
        message: 'Error setting up the request: {message}',
      },
    },
  },
}
