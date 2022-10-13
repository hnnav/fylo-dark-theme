import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Feature from './components/Feature';

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Feature 
        imgUrl='images/icon-access-anywhere.svg'
        header="Access your files, anywhere"
        text="The ability to use a smartphone, tablet, or computer to access your account means your 
        files follow you everywhere." />
      <Feature
        imgUrl='images/icon-security.svg'
        header="Security you can trust"
        text="2-factor authentication and user-controlled encryption are just a couple of the security 
        features we allow to help secure your files." />
      <Feature
        imgUrl='images/icon-collaboration.svg'
        header="Real-time collaboration"
        text="Securely share files and folders with friends, family and colleagues for live collaboration. 
        No email attachments required." />
      <Feature
        imgUrl='images/icon-any-file.svg'
        header="Store any type of file"
        text="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
        file types to be securely stored and shared." />
    </div>
  );
}

export default App;