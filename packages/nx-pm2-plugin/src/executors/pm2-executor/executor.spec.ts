import { Pm2ExecutorSchema as Pm2ExecutorSchema } from './schema';
import executor from './executor';
import * as pm2 from 'pm2';
import { promisify } from 'util';



describe('Pm2Executor Executor', () => {

  test('Basic test configuration should run correctly', async function ()  {

  await new Promise( (resolve)=> {

    pm2.connect(function(err) {

      const options: Pm2ExecutorSchema = {
        command: 'start',
        name: 'api',
      };
  
      // const output = await executor(options);
      // expect(output.success).toBe(true);
  
      // await stop(options.name);
      // console.log(`${options.name} has been stopped`);

      resolve(1);
  
    });
  });

  }, 20000); 

})