# About Application (Frontend)
## Requirement
Node >= 14.0.0 and npm >= 5.6 on your machine. To create a project, run:

## Install node using this command
Using Ubuntu
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
```
```bash 
sudo apt-get install -y nodejs
```

Using Debian, as root
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```

## Creating/Cloning React Project

#### NOTE 
If you are cloning this since node_modules is not present so you have to run this command inorder to install all dependencies present inside package.json file
```bash
npm install
```
### Create and start react app
```bash
npx create-react-app your_app_name
```

```bash
npm start
```

### Install ReactStrap and React-Toastify
ReactStrap is similar to bootStrap library but for reactjs.Using this we can add HTML tags or other classes (eg: Button,Row,Col,Input,etc.) like components which are defined inside it as classes.
For more details
[click me!](https://reactstrap.github.io/?path=/story/home-installation--page)

### React-Toastify
It is used to show the alert messages in a very interactive way.
For more details
[click me!](https://github.com/fkhadra/react-toastify)

#### Command To Install
```bash
npm install bootstrap reactstrap react-toastify
```

#### Then add dependency
The below given import statement for reactstrap and react-toastify in index.js so that it is accessible to all
components 
```bash
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-toastify/dist/ReactToastify.css';
```

#### Now if you want to use component of reactstrap 
In any of your reactjs component import that like this
```bash
import {Button} from 'reactstrap'
```
#### If you want to use ToastConatiner
For this, you have to import both ToastConatiner
and toast(message) of react-toastify in your reactjs component like this
```bash
import { ToastContainer, toast } from 'react-toastify';
```
### Axios
This library is used for calling urls and webservices
```bash
npm install axios
```

#### NOTE
When we call any other component from inside one component then if the called component is accepting an argument
then at calling place we provide the same name of the argument as that is present in called component in its definition or it will not work


### ROUTING
For routing purpose we use react-router-dom
It is library which is basically used to route to different components of our react app

Install it using command
```bash
npm install react-router-dom
```
#### NOTE:
Use Link tag of react-router-dom instead of href in order to avoid refreshing the page 

