import React from "react";

function VolunteerSelection() {
  const tablesData = [
    {
      name: "Janet Smith",
      passengers: 2,
      pickupLocation: "Main Street",
      destination: "Park Avenue",
      specialNeeds: "None",
      preferences: "Needs downtown Nashville parking assistance"
    },
    {
      name: "Jane Smith",
      passengers: 1,
      pickupLocation: "Broadway",
      destination: "Central Park",
      specialNeeds: "Wheelchair accessible",
      preferences: "Weather alerts for potential storms"
    },
    {
      name: "Michael Johnson",
      passengers: 3,
      pickupLocation: "5th Avenue",
      destination: "Times Square",
      specialNeeds: "Hearing Impairment",
      preferences: "Bike-friendly route (avoiding Broadway traffic)"
    },
  ];

  return (
    <div className="volunteer-selection-container">
      <div className="caption">
        <h2>Thank you!</h2>
      </div>
      <div className="tables-row">
        {tablesData.map((data, index) => (
          <div key={index} className="Selection-Table table-wrapper">
            <table className="table">
              <tbody>
                <tr>
                  <td className="label">Name:</td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td className="label">Passengers:</td>
                  <td>{data.passengers}</td>
                </tr>
                <tr>
                  <td className="label">Pickup location:</td>
                  <td>{data.pickupLocation}</td>
                </tr>
                <tr>
                  <td className="label">Destination:</td>
                  <td>{data.destination}</td>
                </tr>
                <tr>
                  <td className="label">Special Needs:</td>
                  <td>{data.specialNeeds}</td>
                </tr>
                <tr>
                  <td className="label">Preferences:</td>
                  <td>{data.preferences}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <button className="accept-button">
                      Accept Passenger(s)
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerSelection;
