    // Эмуляция данных датчиков и логов
    const sensorData = {
      temperature: 23,
      humidity: 55,
      light: 300,
      soilMoisture: 35
    };
    
    const logs = ['Система запущена', 'Данные обновлены'];
    
    // Функция для обновления показателей датчиков (симуляция)
    function updateSensorData() {
      sensorData.temperature = (20 + Math.random() * 10).toFixed(1);
      sensorData.humidity = (50 + Math.random() * 10).toFixed(1);
      sensorData.light = Math.floor(200 + Math.random() * 200);
      sensorData.soilMoisture = (30 + Math.random() * 20).toFixed(1);
      
      document.getElementById('temp').innerText = sensorData.temperature;
      document.getElementById('humidity').innerText = sensorData.humidity;
      document.getElementById('light').innerText = sensorData.light;
      document.getElementById('soil').innerText = sensorData.soilMoisture;
    }
    
    // Функция для обновления логов
    function updateLogs() {
      const logContainer = document.getElementById('log-container');
      logContainer.innerHTML = '';
      logs.forEach(function(log) {
        const p = document.createElement('p');
        p.textContent = log;
        logContainer.appendChild(p);
      });
    }
    
    // Функция для имитации управления оборудованием
    function sendControl(device, action) {
      const message = 'Устройство ' + device + ' получило команду ' + action;
      logs.push(message);
      updateLogs();
      alert('Команда выполнена: ' + action + ' для ' + device);
    }
    
    // Функция для сохранения настроек
    function saveSettings() {
      const tempThreshold = document.getElementById('temp-threshold').value;
      const humidityThreshold = document.getElementById('humidity-threshold').value;
      const soilThreshold = document.getElementById('soil-threshold').value;
      logs.push('Настройки обновлены: Температура ' + tempThreshold + ', Влажность ' + humidityThreshold + ', Почва ' + soilThreshold);
      updateLogs();
      alert('Настройки сохранены');
    }
    
    // Функция для переключения между разделами
    function showSection(sectionId) {
      const sections = document.getElementsByClassName('section');
      for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
      }
      document.getElementById(sectionId).style.display = 'block';
    }
    
    // Первоначальное обновление данных и логов
    updateSensorData();
    updateLogs();
    
    // Обновляем данные каждые 5 секунд
    setInterval(function() {
      updateSensorData();
      updateLogs();
    }, 5000);
