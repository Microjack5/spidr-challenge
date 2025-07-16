import React from 'react';
import './styles/global.css';
import ParticleBackground from './components/ParticleBackground';
import InfoSection from './components/InfoSection';
import SignUpForm from './components/SignUpForm';

const App: React.FC = () => {
  return (
    <div className="landing-page d-flex flex-column align-items-center justify-content-center text-center">
      <ParticleBackground />
      <InfoSection/>
      
      <section id="signup" className="sign-up-form-wrapper">
        <SignUpForm />
      </section>
    </div>
  );
};

export default App;
