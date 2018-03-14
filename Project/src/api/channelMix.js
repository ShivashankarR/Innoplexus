import _products from './Channel_Mix.csv'
import Papa from 'papaparse'

//Adding delay for Simulating service
const TIMEOUT = 100;

export default {
  fetchChannelMixData: (cb, timeout) => setTimeout(() => {
    Papa.parse(_products, {
      download:true,
      complete: function(results) {
        cb(results)
      }
    });
  }, timeout || TIMEOUT),
}
