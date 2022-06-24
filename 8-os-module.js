const os = require('os');

// Info Current User
const user = os.userInfo();
console.log(user);

// method returns the suyeten uptime in seconds
console.log(`The system uptime is : ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  platform: os.platform(),
  arch: os.arch(),
};

console.log('currentOs', currentOs);
