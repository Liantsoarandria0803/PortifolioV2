import React from 'react';

const certifications = [
    { id: 1, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg" },
    { id: 2, path: "/RANDRIANASIMBOLARIVELO20241020-72-1e0j7vh.jpg" },
    { id: 3, path: "/Liantsoa Randria - Intro to Machine Learning.png" },
    { id: 4, path: "/Liantsoa Randria - Pandas.png" },
    { id: 5, path: "/Liantsoa Randria - Intro to SQL.png" },
    { id: 6, path: "/RANDRIANASIMBOLARIVELO20240916-74-yim38d.jpg" }
];

const Certification: React.FC = () => {
    return (
        <section id="certification" className="py-20 bg-gray-900">
           <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>Certifications</h2>
            <div className="certification-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                {certifications.map(cert => (
                    <div key={cert.id} className="certification-item" style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', width: '200px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <img src={cert.path} alt={`Certification ${cert.id}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                ))}
            </div>
          </div>
        </section>
    );
};

export default Certification;