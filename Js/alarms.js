 // Function to check the alarm status
 function checkAlarm() {
    const isDoorOpen = document.getElementById('door').checked;
    const isWindowOpen = document.getElementById('window').checked;
    const alarmStatus = document.getElementById('alarmStatus');

    if (isDoorOpen || isWindowOpen) {
        // alarmStatus.textContent = "Alarm Triggered!";
        alarmStatus.className = "alarm-on";
        console.log("alarm-on");
    } else {
        // alarmStatus.textContent = "Alarm is Off.";
        alarmStatus.className = "alarm-off";
        console.log("alarm-off");
    }
}

// Attach event listener to the button
document.getElementById('checkAlarmButton').addEventListener('click', checkAlarm);