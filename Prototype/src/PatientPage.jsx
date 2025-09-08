import React from "react";
import "./PatientPage.css";

export default function PatientPage() {
  return (
    <div className="patient-container">
      {/* Patient Header */}
      <div className="patient-header">
        <div className="patient-avatar"></div>
        <div className="patient-info">
          <h2>ABC XYZ</h2>
          <p>21 years, Female</p>
          <p className="blood">O+</p>
        </div>
        <div className="patient-contact">
          <p>📞 +91 9876543210</p>
          <p>📍 Mumbai, Maharashtra</p>
        </div>
      </div>

      <div className="patient-grid">
        {/* Left Column */}
        <div className="patient-left">
          {/* Vital Signs */}
          <div className="card">
            <h3>Vital Signs</h3>
            <div className="vitals">
              <div><span>72</span><p>BPM</p></div>
              <div className="highlight"><span>120/80</span><p>mmHg</p></div>
              <div><span>98.6°F</span><p>Temp</p></div>
              <div><span>65</span><p>kg</p></div>
              <div><span>165</span><p>cm</p></div>
            </div>
          </div>

          {/* Recent Consultations */}
          <div className="card">
            <h3>Recent Consultations</h3>
            <div className="consultation">
              <h4>Dr. Rajesh Kumar</h4>
              <p className="role">Ayurveda Specialist</p>
              <p>Date: 2024-01-15 | Time: 10:30 AM</p>
              <div className="diagnosis">
                Diagnosis: Vata Dosha Imbalance <br />
                NAMASTE: NAM081.23 | ICD-11: TM2.AB1.3
              </div>
              <span className="status completed">Completed</span>
            </div>

            <div className="consultation">
              <h4>Dr. Meera Patel</h4>
              <p className="role">General Medicine</p>
              <p>Date: 2024-01-10 | Time: 2:00 PM</p>
              <div className="diagnosis">
                Diagnosis: Hypertension <br />
                NAMASTE: NAM045.67 | ICD-11: BA80.Z
              </div>
              <span className="status completed">Completed</span>
            </div>
          </div>

          {/* Medical Reports */}
          <div className="card">
            <h3>Medical Reports</h3>
            <div className="report">
              <p>🧪 Blood Test Report</p>
              <span>2024-01-11</span>
              <span className="status normal">Normal</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="patient-right">
          {/* Upcoming */}
          <div className="card">
            <h3>Upcoming</h3>
            <div className="appointment">
              <h4>Dr. Anjali Singh</h4>
              <p className="role">Siddha Medicine</p>
              <p>📅 12-09-2025 @ 11:00 AM</p>
              <p>📍 Apollo Clinic, Airoli</p>
            </div>
          </div>

          {/* Medications */}
          <div className="card">
            <h3>Medications</h3>
            <div className="med">
              <h4>Ashwagandha Churna</h4>
              <p>Dosage: 1 tsp twice daily | Duration: 30 days</p>
              <p className="role">Prescribed by: Dr. Rajesh Kumar</p>
            </div>
            <div className="med">
              <h4>Triphala Tablets</h4>
              <p>Dosage: 2 tablets after dinner | Duration: 15 days</p>
              <p className="role">Prescribed by: Dr. Rajesh Kumar</p>
            </div>
          </div>

          {/* Health Score */}
          <div className="card health">
            <h3>Health Score</h3>
            <h1>85</h1>
            <p>Overall Health Score</p>
            <div className="progress">
              <div className="bar"></div>
            </div>
            <span>Based on recent vitals and consultations</span>
          </div>
        </div>
      </div>
    </div>
  );
}
