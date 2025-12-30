import {Tabs, TabList, Tab, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";

function PropertyTab({ property }) {
    return (
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Map</Tab>
            </TabList>
            <TabPanel>
                <div className="description-panel">
                    <h2>Description</h2>
                    <p>{property.description}</p>
                </div>
            </TabPanel>
            <TabPanel>
                <div className="floorplan-panel">
                    <h2>Floor Plan</h2>
                        <img src={property.floorPlan[0]} alt="floor plan" className="floor-plan" />
                </div>
            </TabPanel>
            <TabPanel>
                <div className="map-panel">
                    <h2>Location</h2>
                    <p>{property.location}</p>
                        <iframe
                            title="Property Location"
                            width="100%"
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