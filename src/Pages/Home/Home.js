import React, { useState, useEffect } from 'react';
import { predict, storeData } from '../../Utils/Api'; // Import the Api.js file
import Dropdown from '../../Components/Dropdown/Dropdown';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './Home.css';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import ProductSuggestionCard from '../../Components/ProductSuggestionCard/ProductSuggestionCard';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import OnlinePredictionRoundedIcon from '@mui/icons-material/OnlinePredictionRounded';
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import Tooltip from '@mui/material/Tooltip';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  color: 'text.primary',
  p: 4,
};

const Home = () => {
  const [brand, setBrand] = useState('');
  const [capacity, setCapacity] = useState('');
  const [starRating, setStarRating] = useState('');
  const [acType, setAcType] = useState('');
  const [temperaturePreference, setTemperaturePreference] = useState('');
  const [costPeriod, setCostPeriod] = useState('');
  const [hoursUsedPerDay, setHoursUsedPerDay] = useState('');
  const [electricityRate, setElectricityRate] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [predictions, setPredictions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [showCompareCard, setShowCompareCard] = useState(false); // State to control the visibility of the compare card
  const [predictLoading, setPredictLoading] = useState(false);
  const [fieldAlert, setFieldAlert] = useState(false);
  const [phoneAlert, setPhoneAlert] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setPredictLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timeout);
  // }, []);
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (event, setState) => {
    setState(event.target.value);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setPredictLoading(false);
    setOpenModal(false);
  };

  const handleReset = () => {
    setBrand('');
    setCapacity('');
    setStarRating('');
    setAcType('');
    setTemperaturePreference('');
    setCostPeriod('');
    setHoursUsedPerDay('');
    setElectricityRate('');
  };

  const handlePredict = async () => {
    setPredictLoading(true);
    // Check if any input field is empty
    if (!brand || !capacity || !starRating || !acType || !temperaturePreference || !costPeriod || !hoursUsedPerDay || !electricityRate) {
      // alert('All fields must be filled.');
      setPredictLoading(false);
      setFieldAlert(true);
      setTimeout(() => {
        setFieldAlert(false);
      }, 3000); // 3 seconds
      return;
    }

    const name = sessionStorage.getItem('name');
    const phoneNo = sessionStorage.getItem('phoneNo');


    // Store name and phone number from local storage
    setName(name);
    setPhoneNo(phoneNo);

    if (!name || !phoneNo) {
      handleOpenModal();
    }
    else {
      try {

        const toBeStoreData = {
          brand,
          capacity,
          star_rating: starRating,
          ac_type: acType,
          temperature_pref: temperaturePreference,
          hours_per_day: hoursUsedPerDay,
          electricity_rate: electricityRate,
          cost_period: costPeriod,
          name: name, // Add stored name to the request data
          phoneNo: phoneNo // Add stored phone number to the request data
        };

        // Call storeData function to store data
        await storeData(name, phoneNo, toBeStoreData);

        const requestData = {
          brand,
          capacity,
          star_rating: starRating,
          ac_type: acType,
          temperature_pref: temperaturePreference,
          hours_per_day: hoursUsedPerDay,
          electricity_rate: electricityRate,
          cost_period: costPeriod
        };
        const predictionResult = await predict(requestData);

        // Combine input values with predictions
        const predictionWithInputs = {
          ...requestData,
          ...predictionResult
        };

        setPredictions(prevPredictions => [...prevPredictions, predictionWithInputs]);
        setShowCompareCard(true); // Show the compare card when predictions are available
        console.log('Prediction result:', predictionWithInputs);
        const homepageContentDiv = document.querySelector('.homepage-content');
        if (homepageContentDiv) {
          homepageContentDiv.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error predicting:', error);
      }finally {
        setPredictLoading(false); // Set loading to false after prediction is done
      }
    }
  };

  const handleClear = () => {
    // Clear predictions when refresh button is pressed
    setPredictions([]);
    setShowCompareCard(false); // Hide the compare card when predictions are cleared
  };

  const handleModalReset = () => {
    setName('');
    setPhoneNo('');
  };

  const handleModalSubmit = async () => {
    // Check if phone number follows the rule
    const isValidPhoneNumber = /^([6-9]\d{9})$/.test(phoneNo);

    // If phone number is not valid, show alert and return
    if (!isValidPhoneNumber) {
      // alert('Please Enter a Valid Phone Number.');
      setPhoneAlert(true);
      setTimeout(() => {
        setPhoneAlert(false);
      }, 3000); // 3 seconds
      return;
    }

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('phoneNo', phoneNo);
    setOpenModal(false);
    setPredictLoading(true);

    try {
      const toBeStoreData = {
        brand,
        capacity,
        star_rating: starRating,
        ac_type: acType,
        temperature_pref: temperaturePreference,
        hours_per_day: hoursUsedPerDay,
        electricity_rate: electricityRate,
        cost_period: costPeriod,
        name: name, // Add stored name to the request data
        phoneNo: phoneNo // Add stored phone number to the request data
      };

      // Call storeData function to store data
      await storeData(name, phoneNo, toBeStoreData);

      const requestData = {
        brand,
        capacity,
        star_rating: starRating,
        ac_type: acType,
        temperature_pref: temperaturePreference,
        hours_per_day: hoursUsedPerDay,
        electricity_rate: electricityRate,
        cost_period: costPeriod
      };
      const predictionResult = await predict(requestData);

      // Combine input values with predictions
      const predictionWithInputs = {
        ...requestData,
        ...predictionResult
      };

      setPredictions(prevPredictions => [...prevPredictions, predictionWithInputs]);
      setShowCompareCard(true); // Show the compare card when predictions are available

      console.log('Prediction result:', predictionWithInputs);
    } catch (error) {
      console.error('Error predicting:', error);
    }finally{
      setPredictLoading(false); // Set loading to false after prediction is done
    }
    // Scroll to the top of the homepage-content div
    const homepageContentDiv = document.querySelector('.homepage-content');
    if (homepageContentDiv) {
      homepageContentDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToInputFields = () => {
    const inputFields = document.querySelector('.homepage-content');
    if (inputFields) {
      inputFields.scrollIntoView({ behavior: 'smooth' });
      handleReset(); // Call the handleReset function to clear the fields
    }
  };

  return (
    <div className='main-app-content'>
      <Slider />
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={predictLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <h1 style={{textAlign: 'center'}}>Estimate Your AC Usage and Costs</h1>
      <div className='homepage-content' style={{ margin: '2em', opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }} >
        <div className='input-container'>
          <div className='each-input-for-mobile'>
            <Dropdown
              label="AC Brand *"
              required
              value={brand}
              options={["LG", "LLoyd", "Samsung", "Panasonic", "Voltas", "Hitachi", "Godrej", "Blue Star", "Daikin", "Carrier", "Whirlpool", "Haier"]}
              onChange={(e) => handleChange(e, setBrand)}
            />
          </div>
          <div className='each-input-for-mobile'>
            <Dropdown
              label="AC Capacity *"
              required
              value={capacity}
              options={["1.0", "1.2", "1.5", "2.0"]}
              onChange={(e) => handleChange(e, setCapacity)}
            />
          </div>
          <div className='each-input-for-mobile'>
            <Dropdown
              label="Star Rating *"
              required
              value={starRating}
              options={["2.0", "3.0", "4.0", "5.0"]}
              onChange={(e) => handleChange(e, setStarRating)}
            />
          </div>
        </div>


        <div className='input-container'>
          <div className='each-input-for-mobile'>

            <Dropdown
              label="AC Type *"
              required
              value={acType}
              options={["Split AC", "Windows"]}
              onChange={(e) => handleChange(e, setAcType)}
            />
          </div>

          <div className='each-input-for-mobile'>

            <Dropdown
              label="Temperature Preference *"
              required
              value={temperaturePreference}
              options={["16-20", "20-22", "24", ">24"]}
              onChange={(e) => handleChange(e, setTemperaturePreference)}
            />
          </div>

          <div className='each-input-for-mobile'>

            <Dropdown
              label="Cost Period *"
              required
              value={costPeriod}
              options={["Daily", "Monthly", "Annually"]}
              onChange={(e) => handleChange(e, setCostPeriod)}
            />
          </div>


        </div>

        <div className='input-container' style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField sx={{ width: '340px' }}
              id='hours-used-per-day'
              label="Hours used per day"
              variant='filled'
              type="number"
              required
              // size='small'
              value={hoursUsedPerDay}
              placeholder="Eg. 0.00"
              onChange={(e) => setHoursUsedPerDay(e.target.value)}
            />
          </div>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <TextField sx={{ width: '340px' }}
              id='electricity-rate'
              label="Electricity rate"
              variant='filled'
              type="number"
              required
              // size='small'
              value={electricityRate}
              placeholder="Eg. 0.00"
              onChange={(e) => setElectricityRate(e.target.value)}
            />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '32px' }}>
          <button className="glow-on-hover" type="button" onClick={handleReset}><RestartAltRoundedIcon className='button-icon' />&nbsp;&nbsp;&nbsp;&nbsp;Reset</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <button className="glow-on-hover" type="button" onClick={handlePredict} ><OnlinePredictionRoundedIcon className='button-icon' />&nbsp;&nbsp;&nbsp;&nbsp;{predictions.length >= 1 ? 'Compare' : 'Predict'}</button> */}
          <Tooltip title={predictions.length === 3 ? "Only 3 products can be compared at once" : ""}>
            <span>
              <button 
                className="glow-on-hover" 
                type="button" 
                onClick={handlePredict} 
                disabled={predictions.length === 3}
              >
                <OnlinePredictionRoundedIcon className='button-icon' />&nbsp;&nbsp;&nbsp;&nbsp;
                {predictions.length >= 1 ? 'Compare' : 'Predict'}
              </button>
            </span>
          </Tooltip>
        </div>


        {fieldAlert && (
          <div className='alert-container' >
          <Alert variant="filled" severity="info" sx={{width: '200px', marginTop: '10px'}}>
            All fields must be filled.
          </Alert>
          </div>
        )}

        {/* {phoneAlert && (
          <Alert variant="filled" severity="warning" sx={{width: '230px'}}>
            Please Enter a Valid Phone Number.
          </Alert>
        )} */}


        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          // className='zoom-in-out'
        >
          <Box sx={style} className='modal' >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* <h3 style={{fontSize: '1.35rem'}}>
              <span>Enter</span>
              <span>&nbsp;&nbsp;</span>
              <span>your</span>
              <span>&nbsp;&nbsp;</span>
              <span>Details</span>
              <span>&nbsp;&nbsp;</span>
              <span>to</span>
              <span>&nbsp;&nbsp;</span>
              <span>Continue</span>
            </h3> */}
              <h3 style={{ fontSize: '1.35rem' }}>Enter your Details to Continue</h3>
              <Button onClick={handleCloseModal}><ClearRoundedIcon /></Button>
            </div>
            <br />
            <TextField
              // sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              label="Name "
              required
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant='filled'
            />
            <br />
            <br />
            <TextField
              // sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              label="Phone No "
              required
              type='number'
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              fullWidth
              variant='filled'
            />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Button onClick={handleModalReset}>Reset</Button>
              <Button onClick={handleModalSubmit}>Submit</Button>
            </div>

            {phoneAlert && (
              <div className='alert-container'>
                <Alert variant="filled" severity="warning" sx={{width: '280px', marginTop: '10px'}}>
                  Please Enter a Valid Phone Number.
                </Alert>
                </div>
              )}
          </Box>
        </Modal>


        {predictions.length > 0 && (
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 2.8vw, 5rem)', fontWeight: 'bold', fontFamily: 'Raleway' }}>Predictions & Comparison</h2>
        )}


        {/* Prediction cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.7em' }}>
          {predictions.map((prediction, index) => (
            <Card className='zoom-in-out' key={index} sx={{ width: '370px', margin: '1.5em', padding: '0.5em', borderRadius: '1.5rem', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;rgba(0, 0, 0, 0.35) 0px 5px 15px;' }}>
              <CardContent>
                <h3 style={{ color: '#348DCC', fontSize: '1.4em', textAlign:'center' }}>Prediction {index + 1}</h3>
                <hr className='divider'  style={{ 
  width: '50%', 
  margin: '0 auto', 
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
  borderColor: '#ccc',
  borderStyle: 'dashed'
}}  />
                <p><strong>AC Brand:</strong> {prediction.brand}</p>
                <p><strong>AC Capacity:</strong> {prediction.capacity}</p>
                <p><strong>Star Rating:</strong> {prediction.star_rating}</p>
                <p><strong>AC Type:</strong> {prediction.ac_type}</p>
                <p><strong>Temperature Preference:</strong> {prediction.temperature_pref}</p>
                <p><strong>Cost Period:</strong> {prediction.cost_period}</p>
                <p><strong>Hours used per day:</strong> {prediction.hours_per_day}</p>
                <p><strong>Electricity rate:</strong> {prediction.electricity_rate}</p>
                <hr className='divider'  style={{ 
  width: '50%', 
  margin: '0 auto', 
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
  borderColor: '#ccc',
  borderStyle: 'dashed'
}}  />
                <p><strong style={{ color: '#348DCC', fontSize: '1.1em' }}>Estimated Consumption:</strong> <i style={{ color: 'grey', fontSize: '1.1em' }}>{prediction.estimated_consumption.lower_bound} - {prediction.estimated_consumption.upper_bound}</i></p>
                <p><strong style={{ color: '#348DCC', fontSize: '1.1em' }}>Cost Per Period:</strong> <i style={{ color: 'grey', fontSize: '1.1em' }}>&#x20b9; {prediction.cost_per_period.lower_bound} - {prediction.cost_per_period.upper_bound}</i></p>
              </CardContent>
            </Card>
          ))}
          {console.log(showCompareCard)}
          {/* Compare card */}
          {(showCompareCard && predictions.length < 3 ) ? (
            <Card className='zoom-in-out' sx={{ width: '370px', margin: '1.5em', padding: '0.5em', borderRadius: '1.5rem', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;rgba(0, 0, 0, 0.35) 0px 5px 15px;', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap' }}>
              <CardContent className="wave-effect" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap' }}>
                <a className="button plus" onClick={scrollToInputFields}>
                  <span className="bg" id="plus"></span>
                  <span className="symbol"></span>
                </a>
              </CardContent>
              <h3 style={{ color: '#348DCC', fontSize: '1.4em', textAlign: 'center' }}>Compare</h3>
            </Card>
          ):(null)}
        </div>
        {predictions.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='zoom-in-out' style={{ width: '80%', padding: '1.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src='./warning.jpg' alt='vector image' width='5%' style={{ marginRight: '2em' }} className='warning-image' />
              <p><span style={{ color: 'red' }}>Note*</span><i style={{ color: '#348DCC' }}> Since we are using AI Model at the background, it is not 100% accurate : though works perfectly fine to get a efficient AC for you... You can compare upto 3 products<br /><br /></i><span>Enjoy our service...	&#128512;</span></p>
            </div>
          </div>
        )}

        {/* Refresh button */}
        {predictions.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className="glow-on-hover" type="button" onClick={handleClear}><ClearAllRoundedIcon className='button-icon' />&nbsp;&nbsp;&nbsp;&nbsp;Clear</button>
          </div>
        )}
      </div>


      {predictions.length > 0 && (
        <>
          <ProductSuggestionCard />
          <br />
          <br />
        </>
      )}
      <div style={{ textAlign: 'justify', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='zoom-in-out last-section'>
          <img src='./vector-image.png' alt='vector image' />
          <p style={{ color: '#348DCC' }}><i>Explore and compare AC efficiency and costs effortlessly with our intuitive calculator. Input your AC brand, capacity, star rating, type, temperature preference, and usage details. Our advanced AI model provides estimates on consumption and costs, helping you make informed decisions. While not infallible, our tool offers valuable insights for comparing multiple products. Simplify your AC purchasing process and optimize energy usage with our AC Consumption and Cost Calculator.</i></p>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
