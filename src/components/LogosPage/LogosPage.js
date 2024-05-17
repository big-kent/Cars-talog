import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import theme from '../Theme';
import Footer from '../Footer';

// Load images dynamically from the 'src/LogosPage/logos' directory
const importAll = (r) => r.keys().map(r);
const logos = importAll(require.context('./logos', false, /\.(png|jpe?g|svg)$/));

const LogosPage = () => {
  const [carManufacturers, setCarManufacturers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  console.log(logos)

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        console.log('Fetched logos:', logos); // Debugging: Log fetched logos

        // Extract the names and URLs of the logos
        const logosList = logos.map((logo, index) => {
          // Extract the file name from the path
          const match = logo.match(/\/([^\/]+)\.[^\/]+$/);
          let name = match ? match[1] : `Logo ${index + 1}`; // Default name if no match

          // Clean up the name by removing any trailing jumbled numbers and texts
          name = name.replace(/\..*$/, ''); // Remove the extension

          return { name, url: logo };
        });

        // Sort the logos alphabetically by name
        logosList.sort((a, b) => a.name.localeCompare(b.name));
        setCarManufacturers(logosList);
        setLoading(false);
      } catch (err) {
        console.error('Error loading car logos:', err); // Debugging: Log error
        setError('Failed to load car logos.');
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  if (loading) {
    return (
      <Typography
        theme={theme}
        variant="h1"
        align="center"
        style={{
          position: 'absolute',
          fontWeight: '500',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Loading...
      </Typography>
    );
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!carManufacturers.length) {
    return <Typography align="center">No car logos available.</Typography>;
  }

  return (
    <div>
      <Typography theme={theme} variant="h1" align="center" fontWeight={500} marginBottom={3}>
        Browse car collection
      </Typography>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 max-w-[1024px] m-auto mb-10">
        {carManufacturers.map((manufacturer, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/${manufacturer.name}`)}
          >
            <img
              src={manufacturer.url}
              alt={manufacturer.name}
              className="w-40 h-20 mb-3 hover:scale-125"
            />
            <p className="text-center">{manufacturer.name}</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default LogosPage;
