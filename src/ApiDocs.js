import React, { useState } from 'react';
import './ApiDocs.css';

const ApiDocumentation = () => {
    const [activeSection, setActiveSection] = useState('overview');

  return (
    <><div className="documentation-container">
          <div className="sidebar">
              <div className="navigation-title"><h3>General Info</h3></div>
              <button onClick={() => setActiveSection('overview')} className={activeSection === 'overview' ? 'active' : ''}>Overview</button>
              <button onClick={() => setActiveSection('authentication')} className={activeSection === 'authentication' ? 'active' : ''}>Authentication</button>
              <button onClick={() => setActiveSection('statusCodes')} className={activeSection === 'statusCodes' ? 'active' : ''}>Status Codes</button>
              <div className="navigation-title"><h3>Endpoints</h3></div>
              <button onClick={() => setActiveSection('personalInfo')} className={activeSection === 'personalInfo' ? 'active' : ''}>Personal Info</button>
              <button onClick={() => setActiveSection('workExperience')} className={activeSection === 'workExperience' ? 'active' : ''}>Work Experience</button>
              <button onClick={() => setActiveSection('education')} className={activeSection === 'eudcation' ? 'active' : ''}>Education</button>
              <button onClick={() => setActiveSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</button>
              <button onClick={() => setActiveSection('notes')} className={activeSection === 'notes' ? 'active' : ''}>Notes</button>
              <div className="navigation-title"><h3>Example App</h3></div>
              <a href='https://cv-api-example-integration.netlify.app' target='_blank' rel="noreferrer" className='button'>Live Demo</a>
              <a href='https://github.com/CodeMaxl1998/CV-API-Example-App-Frontend' target='_blank' rel="noreferrer" className='button'>View On Github (Frontend)</a>
              <a href='https://github.com/CodeMaxl1998/CV-API-Example-App-Backend' target='_blank' rel="noreferrer" className='button'>View On Github (Backend)</a>          
          </div>
          <div className='content'>
          <h1>CV API - API Docs</h1>
    {activeSection === 'overview' && (
          <div class="endpoint-section">
        <h2>Overview</h2>
        <p>
          Welcome to the CV API! This API allows you to retrieve various aspects of an applicant's profile,
          including personal information, work experience, education and skills. The API also allows you to add notes to applicants.
        </p>
        <h2>Base URL</h2>
        <p>All API requests should be made to:</p>
        <pre>
        https://curriculumvitae-api-7cfaa3f879a2.herokuapp.com
        </pre>
        <p>
          For example, to fetch all applicants' personal information, you'd perform a GET request to:
        </p>
        <pre>
        https://curriculumvitae-api-7cfaa3f879a2.herokuapp.com/personal-info/
        </pre>
        <p>
          To fetch a specific applicant's personal information, you'd perform a GET request to:
        </p>
        <pre>
https://curriculumvitae-api-7cfaa3f879a2.herokuapp.com/personal-info/:applicantId
        </pre>
      </div>)}
      
      {activeSection === 'authentication' && (
      <div class="endpoint-section">
        <h2>Authentication</h2>
        <p>
          This API uses Basic Authentication to secure its endpoints. You must include a valid API key as the username
          in the Basic Auth header of each request. No password is required.
        </p>
        <h3>Example using curl:</h3>
        <pre>
curl -u 'your-api-key-goes-here:' 'https://curriculumvitae-api-7cfaa3f879a2.herokuapp.com/endpoint'
        </pre>
        <p>Note: The colon : and space are required after the API key.</p>
        <p>Failure to include a valid API key will result in a <pre>401 Unauthorized</pre> status code.</p>
        <h3>General Test API-Key:</h3>
        <pre>
        tk_fh3h2k83el3my7l4n4q
        </pre>
      </div>)}

              {activeSection === 'personalInfo' && (
                  <section className="endpoint-section">
                      <h2>Personal Info Endpoints</h2>

                      {/* GET All Personal Info */}
                      <div className="endpoint">
                          <h3>GET /personal-info</h3>
                          <p>Returns an array of all personal information objects.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
  applicantId: String,
  name: String,
  dob: String,
  address: String,
  postalCode: String,
  city: String,
  country: String,
  email: String,
  phone: String
}
          `}</pre>
                      </div>

                      {/* GET Personal Info by Applicant ID */}
                      <div className="endpoint">
                          <h3>GET /personal-info/:applicantId</h3>
                          <p>Returns an array containing the personal information objects of the specified applicant ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
  applicantId: String,
  name: String,
  dob: String,
  address: String,
  postalCode: String,
  city: String,
  country: String,
  email: String,
  phone: String
}
          `}</pre>
                      </div>
                  </section>)}

              {activeSection === 'workExperience' && (
                  <section className="endpoint-section">
                      <h2>Work Experience Endpoints</h2>

                      {/* GET All Work Experience */}
                      <div className="endpoint">
                          <h3>GET /work-experience</h3>
                          <p>Returns an array of all work experience objects.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
  applicantId: String,
  experienceId: String,
  jobTitle: String,
  company: String,
  timespan: String,
  details: [String]
}
          `}</pre>
                      </div>

                      {/* GET Work Experience by Applicant ID */}
                      <div className="endpoint">
                          <h3>GET /work-experience/:applicantId</h3>
                          <p>Returns an array containing the work experience objects of the specified applicant ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
    applicantId: String,
    experienceId: String,
    jobTitle: String,
    company: String,
    timespan: String,
    details: [String]
}
          `}</pre>
                      </div>
                  </section>)}

              {activeSection === 'education' && (
                  <section className="endpoint-section">
                      <h2>Education Endpoints</h2>

                      {/* GET All Education */}
                      <div className="endpoint">
                          <h3>GET /education</h3>
                          <p>Returns an array of all education objects.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
    applicantId: String,
    educationId: String,
    title: String,
    institution: String,
    timespan: String,
    note: String 
}
          `}</pre>
                      </div>

                      {/* GET Education by Applicant ID */}
                      <div className="endpoint">
                          <h3>GET /education/:applicantId</h3>
                          <p>Returns an array containing the education objects of the specified applicant ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
    applicantId: String,
    educationId: String,
    title: String,
    institution: String,
    timespan: String,
    note: String 
}
          `}</pre>
                      </div>
                  </section>)}

              {activeSection === 'skills' && (
                  <section className="endpoint-section">
                      <h2>Skills Endpoints</h2>

                      {/* GET All Skills */}
                      <div className="endpoint">
                          <h3>GET /skills</h3>
                          <p>Returns an array of all skill objects.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
  applicantId: String,
  skillId: String,
  skill: String,
  type: String,
  level: String
}
          `}</pre>
                      </div>

                      {/* GET Skills by Applicant ID */}
                      <div className="endpoint">
                          <h3>GET /skills/:applicantId</h3>
                          <p>Returns an array containing the skill objects of the specified applicant ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
    applicantId: String,
    skillId: String,
    skill: String,
    type: String,
    level: String
}
          `}</pre>
                      </div>
                  </section>)}

              {activeSection === 'notes' && (
                  <section className="endpoint-section">
                      <h2>Notes Endpoints</h2>

                      {/* GET All Notes */}
                      <div className="endpoint">
                          <h3>GET /notes</h3>
                          <p>Returns an array of all note objects.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
  applicantId: String,
  noteId: String,
  content: String
}
          `}</pre>
                      </div>

                      {/* GET Notes by Applicant ID */}
                      <div className="endpoint">
                          <h3>GET /notes/:applicantId</h3>
                          <p>Returns an array containing the note objects of the specified applicant ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Model</h4>
                          <pre>{`
{
  applicantId: String,
  noteId: String,
  content: String
}
          `}</pre>
                      </div>

                      {/* POST New Note */}
                      <div className="endpoint">
                          <h3>POST /notes/:applicantId</h3>
                          <p>Creates a new note for a specified applicant.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Parameters</h4>
                          <p>:noteId - The ID of the note to delete.</p>
                          <h4>Request Body</h4>
                          <pre>{`
{
  "content": String
}
            `}</pre>
                      </div>

                      {/* PUT Edit Note */}
                      <div className="endpoint">
                          <h3>PUT /notes/:noteId</h3>
                          <p>Updates the content of a note with a specified ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Parameters</h4>
                          <p>:noteId - The ID of the note to update.</p>
                          <h4>Request Body</h4>
                          <pre>{`
{
  "content": String
}
            `}</pre>
                      </div>

                      {/* DELETE Remove Note */}
                      <div className="endpoint">
                          <h3>DELETE /notes/:noteId</h3>
                          <p>Deletes the note with a specified ID.</p>
                          <strong>Authentication Required: Yes</strong>
                          <h4>Parameters</h4>
                          <p>:noteId - The ID of the note to delete.</p>
                      </div>
                  </section>)}

              {activeSection === 'statusCodes' && (
                  <section className="status-codes-section">
                      <h2>Status Codes</h2>

                      <div className="status-code">
                          <h3>200 OK</h3>
                          <p>The request was successful and the resource exists.</p>
                      </div>

                      <div className="status-code">
                          <h3>201 Created</h3>
                          <p>The resource was successfully created.</p>
                      </div>

                      <div className="status-code">
                          <h3>401 Unauthorized</h3>
                          <p>The request requires user authentication.</p>
                      </div>

                      <div className="status-code">
                          <h3>404 Not Found</h3>
                          <p>The requested resource could not be found.</p>
                      </div>

                      <div className="status-code">
                          <h3>500 Internal Server Error</h3>
                          <p>An error occurred on the server.</p>
                      </div>
                  </section>)}
          </div>
      </div></>
  );
};

export default ApiDocumentation;
