const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_value = document.getElementById('temp_real_value')

const temp_status = document.getElementById('temp_status')
const dataHide = document.querySelector(".middleLayer");
const getInfo =async(event)=>{
  event.preventDefault();
  let cityVal = cityName.value;
  if(cityVal===""){
     city_name.innerText = `Please write the name before Search`;
     dataHide.classList.add('data_hide')
  }else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dafe2bc5c21602001b9782fdafe76d01`
        const response = await fetch(url);
        const data =  await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
        temp_real_value.innerText = arrData[0].main.temp;
       temp_status.innerText = arrData[0].weather[0].main;


       dataHide.classList.remove('data_hide')
        // const tempMood = arrData[0].weather[0].main;

        // if(tempMood == "Clear"){
        //   temp_status.innerHTML =
        //    "<i class='fa-sharp fa-solid fa-sun-bright' style='color: #eccc68;'></i>";
        // } else if(tempMood=="Clouds"){
        //   temp_status.innerHTML = 
        //   "<i class='fa-solid fa-clouds'style='color: #f1f2f6;'></i>";
        // } else if(tempMood=="Rain"){
        //   temp_status.innerHTML = 
        //   "<i class='fa-regular fa-raindrops' style='color: #a4b0be;'></i>";
        // } else{
        //   temp_status.innerHTML = 
        //   "<i class='fa-sharp fa-solid fa-sun-bright' style='color: #f1f2f6;'></i>";
        // }

    }
    catch{
        city_name.innerText = 'Please Enter the City name properly';
        dataHide.classList.add('data_hide');
    }
  }
  
}

submitBtn.addEventListener('click',getInfo)