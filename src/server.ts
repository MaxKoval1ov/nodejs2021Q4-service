import { PORT } from './common/config';
import  app  from './app';

const startServer = async () => {
  try{
    app.listen(PORT, () => 
      console.log(`Server is running on port : ${PORT}}`)
    )
  }catch{
    process.exit(1);
  }
}

startServer();


