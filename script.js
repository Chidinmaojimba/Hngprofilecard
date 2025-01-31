function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('utcTime').textContent = `Current Time (UTC): ${utcTime}`;
}

// Update time immediately when the page loads
updateTime();

// Set interval to update time every minute
setInterval(updateTime, 60000);
