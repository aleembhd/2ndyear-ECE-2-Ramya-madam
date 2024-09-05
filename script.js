const students = [
  
];

let messageLogs = [];

// Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyAAJ8eWUiAE85FmVpbHinlk0_FVGV3JsMQ",
  authDomain: "ramya-madam-2nd-year-section-2.firebaseapp.com",
  databaseURL: "https://ramya-madam-2nd-year-section-2-default-rtdb.firebaseio.com",
  projectId: "ramya-madam-2nd-year-section-2",
  storageBucket: "ramya-madam-2nd-year-section-2.appspot.com",
  messagingSenderId: "353573683497",
  appId: "1:353573683497:web:9453c19843a0b1db7df738"
};


try {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// Get a reference to the database service
const database = firebase.database();

// Replace localStorageDatabase with firebaseDatabase
const firebaseDatabase = {
  saveMessage: function (log) {
    return database.ref('messageLogs').push(log);
  },
  getAllMessages: function () {
    return database.ref('messageLogs').once('value')
      .then(snapshot => {
        const messages = [];
        snapshot.forEach(childSnapshot => {
          messages.push(childSnapshot.val());
        });
        return messages;
      });
  },
  cleanupOldMessages: function () {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    
    return database.ref('messageLogs').once('value')
      .then(snapshot => {
        const updates = {};
        snapshot.forEach(childSnapshot => {
          const message = childSnapshot.val();
          if (new Date(message.timestamp) <= oneMonthAgo) {
            updates[childSnapshot.key] = null;
          }
        });
        return database.ref('messageLogs').update(updates);
      });
  },
  clearAllLogs: function () {
    return database.ref('messageLogs').remove();
  }
};

document.addEventListener('DOMContentLoaded', function () {
  console.log("DOM fully loaded");
  setupEventListeners();
  fetchMessagesFromServer();
  periodicCleanup();
});

function fetchMessagesFromServer() {
  firebaseDatabase.getAllMessages()
    .then(messages => {
      messageLogs = messages;
      updateMessageLogs();
    })
    .catch(error => console.error('Error fetching messages:', error));
}

function periodicCleanup() {
  firebaseDatabase.cleanupOldMessages()
    .then(() => console.log('Old messages cleaned up'))
    .catch(error => console.error('Error cleaning up messages:', error));
}

function setupEventListeners() {
  const searchBtn = document.getElementById('searchBtn');
  if (searchBtn) {
    console.log("Search button found");
    searchBtn.addEventListener('click', toggleSearch);
  } else {
    console.log("Search button not found");
  }

  const whatsappParentBtn = document.getElementById('whatsappParentBtn');
  if (whatsappParentBtn) {
    console.log("WhatsApp Parent button found");
    whatsappParentBtn.addEventListener('click', toggleWhatsAppParent);
  } else {
    console.log("WhatsApp Parent button not found");
  }

  const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
  if (sendCustomMessageBtn) {
    console.log("Send Custom Message button found");
    sendCustomMessageBtn.addEventListener('click', sendCustomWhatsAppMessage);
  } else {
    console.log("Send Custom Message button not found");
  }

  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    console.log("Print button found");
    printBtn.addEventListener('click', openPrintModal);
  } else {
    console.log("Print button not found");
  }

  const closeModalBtn = document.getElementById('closeModal');
  if (closeModalBtn) {
    console.log("Close Modal button found");
    closeModalBtn.addEventListener('click', closePrintModal);
  } else {
    console.log("Close Modal button not found");
  }

  const printPreviewBtn = document.getElementById('printPreviewBtn');
  if (printPreviewBtn) {
    console.log("Print Preview button found");
    printPreviewBtn.addEventListener('click', showPrintPreview);
  } else {
    console.log("Print Preview button not found");
  }

  const clearLogsBtn = document.getElementById('clearLogsBtn');
  if (clearLogsBtn) {
    console.log("Clear Logs button found");
    clearLogsBtn.addEventListener('click', clearAllLogs);
  } else {
    console.log("Clear Logs button not found");
  }

  // Initialize date inputs with current date range
  const today = new Date();
  const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());

  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  if (startDateInput) {
    console.log("Start Date input found");
    startDateInput.value = oneMonthAgo.toISOString().split('T')[0];
  } else {
    console.log("Start Date input not found");
  }
  if (endDateInput) {
    console.log("End Date input found");
    endDateInput.value = today.toISOString().split('T')[0];
  } else {
    console.log("End Date input not found");
  }

  const exportLogsBtn = document.getElementById('exportLogsBtn');
  if (exportLogsBtn) {
    console.log("Export Logs button found");
    exportLogsBtn.addEventListener('click', exportMessageLogs);
  } else {
    console.log("Export Logs button not found");
  }

  const studentsBtn = document.getElementById('studentsBtn');
  if (studentsBtn) {
    console.log("Students button found");
    studentsBtn.addEventListener('click', openStudentsPage);
  } else {
    console.log("Students button not found");
  }

  // Add event listener for the new print button
  const newPrintBtn = document.getElementById('newPrintBtn');
  if (newPrintBtn) {
    console.log("New Print button found");
    newPrintBtn.addEventListener('click', openPrintModal);
  } else {
    console.log("New Print button not found");
  }

  const allParentsBtn = document.getElementById('allParentsBtn');
  if (allParentsBtn) {
    console.log("All Parents button found");
    allParentsBtn.addEventListener('click', toggleBulkMessageForm);
  } else {
    console.log("All Parents button not found");
  }

  // Logout function
  function logout() {
    // Clear any user session data (if you're using any)
    // For example, if you're using localStorage:
    localStorage.removeItem('user');

    // Redirect to the index page
    window.location.href = 'index.html';
  }

  // Add event listener for logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
}

function toggleSearch() {
  const profileCard = document.getElementById('profileCard');
  if (profileCard.style.display === 'none') {
    searchStudent();
  } else {
    profileCard.style.display = 'none';
  }
}

function toggleWhatsAppParent() {
  const customMessageArea = document.getElementById('customMessageArea');
  if (customMessageArea.style.display === 'none' || customMessageArea.style.display === '') {
    customMessageArea.style.display = 'block';
  } else {
    customMessageArea.style.display = 'none';
  }
}

function searchStudent() {
  const rollNumber = document.getElementById('rollNumber').value.toUpperCase();
  const student = students.find(s => s.rollNumber.toUpperCase().endsWith(rollNumber));
  const profileCard = document.getElementById('profileCard');

  // Hide the profile card first
  profileCard.style.display = 'none';

  if (student) {
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentRoll').textContent = student.rollNumber;
    document.getElementById('parentName').textContent = student.parentName || 'Not available';
    document.getElementById('parentPhone').textContent = student.parentPhone;
    document.getElementById('studentPhone').textContent = student.studentPhone || 'Not available';

    profileCard.style.display = 'block';
    profileCard.classList.add('fade-in');
  } else {
    alert('Student not found. Please check the roll number and try again.');
  }
}

function toggleBulkMessageForm() {
  const bulkMessageForm = document.getElementById('bulkMessageForm');
  if (bulkMessageForm.style.display === 'none' || bulkMessageForm.style.display === '') {
    bulkMessageForm.style.display = 'block';
    bulkMessageForm.classList.add('fade-in');
    document.getElementById('bulkMessageContent').value = ''; // Clear previous message
  } else {
    bulkMessageForm.style.display = 'none';
  }
}

function toggleCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  if (crProfiles.style.display === 'none') {
    showCRProfiles();
    crProfiles.style.display = 'block';
    crProfiles.classList.add('fade-in');
  } else {
    crProfiles.style.display = 'none';
  }
}

function showCRProfiles() {
  const crProfiles = document.getElementById('crProfiles');
  crProfiles.innerHTML = ''; // Clear existing profiles

  const crs = [
    { name: 'VAISHNAVI', rollNumber: '23WJ1A0472', email: '23WJ1A0472@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    
  ];

  crs.forEach(cr => {
    const profileCard = document.createElement('div');
    profileCard.className = 'profile-card cr-card';
    profileCard.innerHTML = `
      <div class="cr-info">
        <h3>${cr.name}</h3>
        <p><strong>Roll Number:</strong> ${cr.rollNumber}</p>
        <p><strong>Email:</strong> ${cr.email}</p>
        <button onclick="callCR('${cr.rollNumber}')">Call</button>
        <button onclick="whatsappCR('${cr.rollNumber}')">WhatsApp</button>
      </div>
    `;
    crProfiles.appendChild(profileCard);
  });
}

function openPrintModal() {
  document.getElementById('printModal').style.display = 'block';
}

function closePrintModal() {
  document.getElementById('printModal').style.display = 'none';
}

function filterData() {
  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  endDate.setHours(23, 59, 59, 999); // Set to end of day

  return messageLogs.filter(log => {
    const logDate = new Date(log.timestamp);
    return logDate >= startDate && logDate <= endDate;
  });
}

function generatePrintableTable(data) {
  let tableHtml = `
    <div style="text-align: center; margin-bottom: 20px;">
      <p>Message Logs Report</p>
    </div>
    <table border="1">
      <thead>
        <tr>
          <th>Date</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Student Name</th>
          <th>Roll Number</th>
          <th>Parent Name</th>
          <th style="width: 25%;">Message</th>
          <th>Status</th>
          <th>Platform</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
  `;

  let currentDate = '';
  data.forEach(log => {
    const date = new Date(log.timestamp);
    const dateString = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const highlightClass = dateString !== currentDate ? 'highlight' : '';
    currentDate = dateString;

    tableHtml += `
      <tr class="${highlightClass}">
        <td>${dateString}</td>
        <td>${log.sender}</td>
        <td>${log.recipient}</td>
        <td>${log.studentName || ''}</td>
        <td>${log.studentRoll || ''}</td>
        <td>${log.parentName || ''}</td>
        <td style="width: 25%;">${log.message}</td>
        <td>${log.status}</td>
        <td>${log.platform || 'SMS'}</td>
        <td>${log.duration || 'N/A'}</td>
      </tr>
    `;
  });

  tableHtml += `
      </tbody>
    </table>
    <div style="text-align: center; margin-top: 20px;">
      <!-- <p>© 2024 Croxton Technologies. All rights reserved.</p> -->
    </div>
  `;

  return tableHtml;
}

function showPrintPreview() {
  const filteredData = filterData();
  const printContent = generatePrintableTable(filteredData);
  const startDate = new Date(document.getElementById('startDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const endDate = new Date(document.getElementById('endDate').value).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  // Open a new window for the print preview
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <html>
      <head>
        <title>Message Logs ${startDate} to ${endDate}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
          }
          .header, .footer {
            text-align: center;
            margin-bottom: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-size: 12px;
          }
          th {
            background-color: #f2f2f2;
            font-weight: bold;
          }
          .highlight {
            background-color: #ffffd0;
          }
          td:nth-child(7) {
            width: 25%;
            word-break: break-word;
          }
          @media print {
            @page {
              size: A4 landscape;
              margin: 10mm;
            }
            body {
              padding: 0;
            }
            .no-print {
              display: none;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
        
          <p>Date Range: ${startDate} to ${endDate}</p>
        </div>
        ${printContent}
        <div class="footer">
          <p>© 2024 Croxton Technologies Hyderabad India. All rights reserved.</p>
        </div>
        <div class="no-print" style="text-align: center; margin-top: 20px;">
          <button onclick="window.print()" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Print</button>
          <!--  <button onclick="savePDF()" style="background-color: #2196F3; color: white; padding: 10px 20px; border: none; border-radius: 5px; font-size: 16px; margin: 5px; cursor: pointer;">Save as PDF</button> -->
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
        <script>
          function savePDF() {
            const element = document.body;
            const opt = {
              margin:       10,
              filename:     'Message_Logs_${startDate}_to_${endDate}.pdf',
              image:        { type: 'jpeg', quality: 0.98 },
              html2canvas:  { scale: 2, useCORS: true },
              jsPDF:        { unit: 'mm', format: 'a4', orientation: 'landscape' },
              pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
            };
            html2pdf().from(element).set(opt).save();
          }
          window.onload = function() {
            // Automatically open print dialog when the page loads
            window.print();
          }
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();

  // Hide the modal
  document.getElementById('printModal').style.display = 'none';
}

function updateMessageLogs() {
  const logsContainer = document.getElementById('messageLogs');
  logsContainer.innerHTML = '';

  // Only show the most recent message
  if (messageLogs.length > 0) {
    const mostRecentLog = messageLogs[messageLogs.length - 1];
    const logEntry = document.createElement('p');
    const timestamp = new Date(mostRecentLog.timestamp);
    const formattedDate = `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    logEntry.textContent = `${formattedDate} - To: ${mostRecentLog.recipient} - Student: ${mostRecentLog.studentName || 'N/A'} (${mostRecentLog.studentRoll || 'N/A'}) - Parent: ${mostRecentLog.parentName || 'N/A'} - Status: ${mostRecentLog.status} - Platform: ${mostRecentLog.platform || 'SMS'} - Duration: ${mostRecentLog.duration || 'N/A'}`;
    logEntry.classList.add('fade-in');
    logsContainer.appendChild(logEntry);
  }

  // Add a message indicating there are more logs if applicable
  if (messageLogs.length > 1) {
    const moreLogsMessage = document.createElement('p');
    moreLogsMessage.textContent = `... and ${messageLogs.length - 1} more messages`;
    moreLogsMessage.style.fontStyle = 'italic';
    moreLogsMessage.style.color = '#666';
    logsContainer.appendChild(moreLogsMessage);
  }
}

function clearAllLogs() {
  if (confirm("Are you sure you want to clear all message logs? This action cannot be undone.")) {
    firebaseDatabase.clearAllLogs()
      .then(() => {
        messageLogs = [];
        updateMessageLogs();
        alert("All message logs have been cleared.");
      })
      .catch(error => {
        console.error('Error clearing logs:', error);
        alert("An error occurred while clearing logs. Please try again.");
      });
  }
}

function callParent() {
  const parentPhone = document.getElementById('parentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;
  
  if (parentPhone) {
    const startTime = new Date();
    window.location.href = `tel:${parentPhone}`;
    
    // Create and show popup after 10 seconds
    setTimeout(() => {
      const popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.left = '50%';
      popup.style.top = '50%';
      popup.style.transform = 'translate(-50%, -50%)';
      popup.style.backgroundColor = '#ffffff';
      popup.style.padding = '30px';
      popup.style.borderRadius = '10px';
      popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      popup.style.zIndex = '1000';
      popup.style.fontFamily = 'Arial, sans-serif';
      popup.style.textAlign = 'center';
      popup.innerHTML = `
        <h3 style="margin-top: 0; color: #333;">Call Status</h3>
        <p style="margin-bottom: 20px; color: #666;">Was the call answered?</p>
        <button id="yesBtn" style="background-color: #4CAF50; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">Yes</button>
        <button id="noBtn" style="background-color: #f44336; color: white; border: none; padding: 10px 20px; margin: 0 10px; cursor: pointer; border-radius: 5px;">No</button>
      `; 
      document.body.appendChild(popup);

      document.getElementById('yesBtn').addEventListener('click', () => handleCallResponse(true));
      document.getElementById('noBtn').addEventListener('click', () => handleCallResponse(false));

      function handleCallResponse(wasAnswered) {
        const endTime = new Date();
        const duration = Math.round((endTime - startTime) / 1000); // Duration in seconds
        
        // Log the call
        const log = {
          sender: 'Mrs. K. Ramyasree',
          recipient: parentPhone,
          studentName: studentName,
          studentRoll: studentRoll,
          parentName: parentName,
          message: `Phone call to parent - ${wasAnswered ? 'Answered' : 'Not Answered'}`,
          timestamp: new Date().toISOString(),
          status: wasAnswered ? 'answered' : 'not answered',
          platform: 'Phone',
          duration: wasAnswered ? `${duration} seconds` : 'N/A'
        };
        firebaseDatabase.saveMessage(log)
          .then(() => fetchMessagesFromServer())
          .catch(error => console.error('Error saving message:', error));
        document.body.removeChild(popup);
      }
    }, 10000);
  } else {
    alert('Parent phone number not available.');
  }
}

function callStudent() {
  const studentPhone = document.getElementById('studentPhone').textContent;
  
  if (studentPhone && studentPhone !== 'Not available') {
    window.location.href = `tel:${studentPhone}`;
  } else {
    alert('Student phone number not available.');
  }
}

function whatsappParent() {
  const customMessageArea = document.getElementById('customMessageArea');
  customMessageArea.style.display = 'block';
  const sendCustomMessageBtn = document.getElementById('sendCustomMessageBtn');
  sendCustomMessageBtn.onclick = sendCustomWhatsAppMessage;
}

function whatsappStudent() {
  const studentPhone = document.getElementById('studentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;
  
  if (studentPhone && studentPhone !== 'Not available') {
    const formattedPhone = `+91${studentPhone.replace(/\D/g, '')}`;
    const message = encodeURIComponent('Hello, this is a message from your Mentor.');
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
    
    // Log the WhatsApp message
    const log = {
      sender: 'Mrs. K. Ramyasree',
      recipient: formattedPhone,
      studentName: studentName,
      studentRoll: studentRoll,
      parentName: parentName,
      message: 'WhatsApp message sent to student',
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'WhatsApp'
    };
    firebaseDatabase.saveMessage(log)
      .then(() => fetchMessagesFromServer())
      .catch(error => console.error('Error saving message:', error));
  } else {
    alert('Student phone number not available.');
  }
}

function sendCustomWhatsAppMessage() {
  const parentPhone = document.getElementById('parentPhone').textContent;
  const studentName = document.getElementById('studentName').textContent;
  const studentRoll = document.getElementById('studentRoll').textContent;
  const parentName = document.getElementById('parentName').textContent;
  const customMessage = document.getElementById('customMessageContent').value;
  
  if (parentPhone && customMessage.trim() !== '') {
    const message = encodeURIComponent(customMessage);
    window.open(`https://wa.me/${parentPhone}?text=${message}`, '_blank');
    
    // Log the custom WhatsApp message
    const log = {
      sender: 'Mrs. K. Ramyasree',
      recipient: parentPhone,
      studentName: studentName,
      studentRoll: studentRoll,
      parentName: parentName,
      message: customMessage,
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'WhatsApp'
    };
    firebaseDatabase.saveMessage(log)
      .then(() => fetchMessagesFromServer())
      .catch(error => console.error('Error saving message:', error));
    
    // Clear and hide the custom message area
    document.getElementById('customMessageContent').value = '';
    document.getElementById('customMessageArea').style.display = 'none';
  } else {
    alert('Please enter a message and ensure parent phone number is available.');
  }
}

function exportMessageLogs() {
  firebaseDatabase.getAllMessages()
    .then(messages => {
      const today = new Date();
      const dateString = today.toISOString().split('T')[0];
      const csvContent = "data:text/csv;charset=utf-8,"
        + "Timestamp,Sender,Recipient,Student Name,Roll Number,Parent Name,Message,Status,Platform,Duration\n"
        + messages.map(e => {
          return `${e.timestamp},${e.sender},${e.recipient},${e.studentName || ''},${e.studentRoll || ''},${e.parentName || ''},${e.message},${e.status},${e.platform || 'SMS'},${e.duration || 'N/A'}`;
        }).join("\n");

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `message_logs_${dateString}.csv`);
      document.body.appendChild(link);
      link.click();
    })
    .catch(error => console.error('Error exporting logs:', error));
}

function callCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    window.location.href = `tel:${cr.studentPhone}`;
  } else {
    alert('Phone number not available for this CR.');
  }
}

function whatsappCR(rollNumber) {
  const cr = students.find(s => s.rollNumber === rollNumber);
  if (cr && cr.studentPhone) {
    const message = encodeURIComponent('Hello CR, this is a message from your faculty.');
    window.open(`https://wa.me/${cr.studentPhone}?text=${message}`, '_blank');
  } else {
    alert('WhatsApp number not available for this CR.');
  }
}

function openStudentsPage() {
  window.open('students.html', '_blank');
}

function sendBulkWhatsAppMessage(parentPhones, message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/?text=${encodedMessage}&phone=${parentPhones.join(',')}`;
  window.open(whatsappUrl, '_blank');
}

function sendBulkSMSMessage(parentPhones, message) {
  const smsUrl = `sms:?body=${encodeURIComponent(message)}&phone=${parentPhones.join(',')}`;
  window.location.href = smsUrl;
}

function sendBulkMessage(group) {
  const message = document.getElementById('bulkMessageContent').value;
  if (message.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  let parentPhones = students.map(student => student.parentPhone);
  let startIndex, endIndex;

  switch (group) {
    case 'first':
      startIndex = 0;
      endIndex = 25;
      break;
    case 'second':
      startIndex = 25;
      endIndex = 50;
      break;
    case 'third':
      startIndex = 50;
      endIndex = parentPhones.length;
      break;
  }

  parentPhones = parentPhones.slice(startIndex, endIndex);
  const phoneNumbers = parentPhones.join(',');

  // Open SMS app with pre-filled message for bulk sending
  window.location.href = `sms:${phoneNumbers}?body=${encodeURIComponent(message)}`;

  // Log the bulk message to Firebase
  const bulkLog = {
    sender: 'Mrs. K. Ramyasree',
    recipients: parentPhones,
    message: message,
    timestamp: new Date().toISOString(),
    status: 'sent',
    platform: 'SMS (Bulk)',
    group: group
  };

  // Save bulk message log
  firebaseDatabase.saveMessage(bulkLog)
    .then(() => console.log('Bulk message logged successfully'))
    .catch(error => console.error('Error saving bulk message:', error));

  // Log individual messages
  parentPhones.forEach(phone => {
    const student = students.find(s => s.parentPhone === phone);
    const log = {
      sender: 'Mrs. K. Ramyasree',
      recipient: phone,
      studentName: student ? student.name : 'N/A',
      studentRoll: student ? student.rollNumber : 'N/A',
      parentName: student ? student.parentName : 'N/A',
      message: message,
      timestamp: new Date().toISOString(),
      status: 'sent',
      platform: 'SMS',
      bulkGroup: group
    };
    firebaseDatabase.saveMessage(log)
      .then(() => console.log('Individual message logged successfully'))
      .catch(error => console.error('Error saving individual message:', error));
  });

  // Hide the bulk message form after sending
  document.getElementById('bulkMessageForm').style.display = 'none';
  
  // Fetch updated messages
  fetchMessagesFromServer();

  // Clear the bulk message content
  document.getElementById('bulkMessageContent').value = '';

  alert(`Bulk message sent to ${group} group (${parentPhones.length} recipients)`);
}

function testFirebase() {
  const testRef = database.ref('test');
  testRef.set({
    message: "Test message",
    timestamp: new Date().toISOString()
  })
  .then(() => {
    console.log("Data written successfully");
    return testRef.once('value');
  })
  .then((snapshot) => {
    console.log("Data read successfully:", snapshot.val());
  })
  .catch((error) => {
    console.error("Firebase operation failed:", error);
  });
}

// Call this function after Firebase initialization
testFirebase();
