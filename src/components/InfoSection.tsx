import React from 'react';
import airFryer from '../assets/airfryer.png';

const InfoSection: React.FC = () => {
  return (
    <section className="info-card-section d-flex align-items-center">
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
            
          <div className="col-md-6 position-relative">
            <div className="info-card-box text-white p-4 p-md-5">
              <h1 className="card-title mb-3">Spidr by design. Recipies by you.</h1>

              <hr className="card-hr mx-auto my-4"/>

              <h5 className="card-body mb-0">
                The revolutionary <strong>Spidr Fryer</strong> is almost here and will change your kitchen experience forever. <br/>
                Predict the retail price before our public demo for a chance to win a free <strong>Spidr Fryer</strong> with a year supply 
                of Spidr Fries for your air frying pleasure.
              </h5>
            </div>
          </div>

          <div className="col-md-6">
            <img src={airFryer} className="img-fluid responsive-img" alt="The Spidr Fryer" />
          </div>
        </div>
      </div>

      <a href="#signup" className="scroll-indicator">
        <div className="scroll-icon">⌄</div>
        <div className="scroll-text">scroll</div>
      </a>

    </section>
  );
};

export default InfoSection;
