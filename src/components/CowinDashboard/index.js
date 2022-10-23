import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const CowinDashboard = () => (
  <div className="cont">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
        alt="website logo"
      />
      <h1>Co-WIN</h1>
    </div>
    <h1>CoWIN Vaccination in India</h1>
    <VaccinationCoverage />
  </div>
)
export default CowinDashboard
