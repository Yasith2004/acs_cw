import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";

function PropertyTab({ property }) {
    return (
        <Tabs>
            <TabList>
                <Tab className="tab">📝 Description</Tab>
                <Tab className="tab">🏠 Floor Plan</Tab>
                <Tab className="tab">🗺️ Map</Tab>
            </TabList>
            <TabPanel>
                <div className="description-panel">
                    <p className="description">{property.description}</p>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="floorplan-panel">
                    <img src={property.floorPlan[0]} alt="floor plan" className="floor-plan" />
                </div>
            </TabPanel>
            <TabPanel>
                <div className="map-panel">
                    <h2>📍{property.location}</h2>
                        <iframe
                            title="Property Location"
                            width="90%"
                            height="400"
                            src={`https://www.google.com/maps?q=${property.lat},${property.lng}&output=embed`}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                </div>
            </TabPanel>
        </Tabs>
    );
}

export default PropertyTab;