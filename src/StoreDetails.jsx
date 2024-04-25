import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StoreDetails = () => {
    const [centers] = useState([
        { id: 1, name: "Fresh Fruits Market", lat: 40.712776, lng: -74.005974, description: "Support Center disguised as fruit market. If you need any help, you can find assistance here." },
        { id: 2, name: "Green Apple Grocery", lat: 34.052235, lng: -118.243683, description: "Safe house disguised as grocery store. We're more than just fruit; we're here to provide support." },
        { id: 3, name: "Citrus Blend Cafe", lat: 41.878113, lng: -87.629799, description: "Assistance location disguised as cafe. A safe place to discuss your needs over a cup of juice." }
    ]);

    return (
        <div>
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h2>Find Our Fruit Locations Near You</h2>
                <p>If you are looking for fresh fruit or just need a safe place to relax, visit one of our many locations. We are here to help you with both healthy eating and personal care.</p>
            </div>
            <div style={{ height: '500px', width: '100%' }}>
                <MapContainer center={[40.712776, -74.005974]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {centers.map(center => (
                        <Marker key={center.id} position={[center.lat, center.lng]}>
                            <Popup>
                                {center.name}<br />{center.description}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default StoreDetails;

