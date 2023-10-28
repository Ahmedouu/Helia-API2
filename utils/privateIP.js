const os = require('os');


function getPrivateIP() {
  const networkInterfaces = os.networkInterfaces();

  for (const name of Object.keys(networkInterfaces)) {
    if (name.includes('WiFi') || name.includes('wlp59s0')) {
      for (const net of networkInterfaces[name]) {
        if (net.family === 'IPv4') {
          return net.address;
        }
      }
    }
  }
  
  return 'WLAN IP not found';
}

module.exports = {getPrivateIP}