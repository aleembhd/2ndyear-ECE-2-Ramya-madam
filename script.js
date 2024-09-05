const students = [
  { rollNumber: '23WJ1A0458', name: 'DURGAM RAVALI', parentPhone: '8179514150', parentName: '', studentPhone: '8688543597' },
  { rollNumber: '23WJ1A0459', name: 'E TEJA SRI', parentPhone: '9666800387', parentName: '', studentPhone: '8897262581' },
  { rollNumber: '23WJ1A0460', name: 'EMBARI JASHWANTH', parentPhone: '9392506189', parentName: '', studentPhone: '6305740778' },
  { rollNumber: '23WJ1A0461', name: 'ENUMULA SRIVENU', parentPhone: '7569552121', parentName: '', studentPhone: '6304272804' },
  { rollNumber: '23WJ1A0462', name: 'ERRABELLY KAVYA', parentPhone: '9573283043', parentName: '', studentPhone: '7396012003' },
  { rollNumber: '23WJ1A0463', name: 'ESRAMPALLY PREM KUMAR', parentPhone: '8374748305', parentName: '', studentPhone: '8374943820' },
  { rollNumber: '23WJ1A0464', name: 'G BHEEMESH', parentPhone: '9959290502', parentName: '', studentPhone: '9398582497' },
  { rollNumber: '23WJ1A0465', name: 'GADDAM RAKESH', parentPhone: '6303560877', parentName: '', studentPhone: '9666991675' },
  { rollNumber: '23WJ1A0466', name: 'GADUSU MAITHRI', parentPhone: '9848291809', parentName: '', studentPhone: '9441949608' },
  { rollNumber: '23WJ1A0467', name: 'GARLAPATI KAVYA SRI', parentPhone: '7989771357', parentName: '', studentPhone: '6309565454' },
  { rollNumber: '23WJ1A0468', name: 'GITTE VAIBHAV', parentPhone: '9490883752', parentName: '', studentPhone: '9014461571' },
  { rollNumber: '23WJ1A0469', name: 'GODDATI SAI PAVAN', parentPhone: '9959005028', parentName: '', studentPhone: '8639189706' },
  { rollNumber: '23WJ1A0470', name: 'GODUGU MANITEJA', parentPhone: '9949773787', parentName: '', studentPhone: '8374727597' },
  { rollNumber: '23WJ1A0471', name: 'GODUGU NANDINI', parentPhone: '9948418620', parentName: '', studentPhone: '7671834072' },
  { rollNumber: '23WJ1A0472', name: 'GOLLAPALLY VAISHNAVI', parentPhone: '8019464441', parentName: '', studentPhone: '7989866521' },
  { rollNumber: '23WJ1A0473', name: 'GONE SAMPATH', parentPhone: '9959456546', parentName: '', studentPhone: '9390118851' },
  { rollNumber: '23WJ1A0474', name: 'GOREPALLY CHANDRASHEKAR GOUD', parentPhone: '9652570549', parentName: '', studentPhone: '7989616413' },
  { rollNumber: '23WJ1A0475', name: 'GORREMUCHU DEVID', parentPhone: '7096119398', parentName: '', studentPhone: '8008046221' },
  { rollNumber: '23WJ1A0476', name: 'GUGULOTHU NAVEEN', parentPhone: '7075818028', parentName: '', studentPhone: '8317685184' },
  { rollNumber: '23WJ1A0477', name: 'GUJJETI VENKATSAI', parentPhone: '9059067304', parentName: '', studentPhone: '8096887304' },
  { rollNumber: '23WJ1A0478', name: 'GUNALAPURI NAVEEN', parentPhone: '8106319349', parentName: '', studentPhone: '6303281647' },
  { rollNumber: '23WJ1A0479', name: 'GUNDA SUPRIYA', parentPhone: '9010545275', parentName: '', studentPhone: '8179281485' },
  { rollNumber: '23WJ1A0480', name: 'GUNDU HRUTHIK REDDY', parentPhone: '8885120582', parentName: '', studentPhone: '8897120582' },
  { rollNumber: '23WJ1A0481', name: 'GUNTUKA KALYAN', parentPhone: '9492210314', parentName: '', studentPhone: '8985240314' },
  { rollNumber: '23WJ1A0482', name: 'HENRY JOY KONDA', parentPhone: '9849737174', parentName: '', studentPhone: '9573992006' },
  { rollNumber: '23WJ1A0483', name: 'INAPANURI TEJASRI', parentPhone: '9550819361', parentName: '', studentPhone: '7893429361' },
  { rollNumber: '23WJ1A0484', name: 'JAGATI RAVI TEJA', parentPhone: '9866475655', parentName: '', studentPhone: '9908278650' },
  { rollNumber: '23WJ1A0485', name: 'JAKKA DEEKSHITA REDDY', parentPhone: '8096400641', parentName: '', studentPhone: '9346831319' },
  { rollNumber: '23WJ1A0486', name: 'JALA SWETHA', parentPhone: '9705960134', parentName: '', studentPhone: '9392987751' },
  { rollNumber: '23WJ1A0487', name: 'JAMBULA MAHENDAR', parentPhone: '9701308190', parentName: '', studentPhone: '8499873180' },
  { rollNumber: '23WJ1A0488', name: 'JANGA YASHWANTH', parentPhone: '9603988525', parentName: '', studentPhone: '9515172520' },
  { rollNumber: '23WJ1A0489', name: 'JATOTH SAIRAM', parentPhone: '7993804866', parentName: '', studentPhone: '6302761391' },
  { rollNumber: '23WJ1A0490', name: 'JATOTH VEERABABU', parentPhone: '9676672772', parentName: '', studentPhone: '9959783176' },
  { rollNumber: '23WJ1A0491', name: 'JEEDI SAI VARSHINI', parentPhone: '9441633680', parentName: '', studentPhone: '8341254582' },
  { rollNumber: '23WJ1A0492', name: 'JIDUGU YEDUKONDALU', parentPhone: '9618848316', parentName: '', studentPhone: '8125446584' },
  { rollNumber: '23WJ1A0493', name: 'JILLAPALLI PALLAVI', parentPhone: '7569110254', parentName: '', studentPhone: '8328462212' },
  { rollNumber: '23WJ1A0494', name: 'JOGU VASANTH KUMAR', parentPhone: '9963138669', parentName: '', studentPhone: '7386019467' },
  { rollNumber: '23WJ1A0495', name: 'JUPALLI PRADYUMNA', parentPhone: '9985018384', parentName: '', studentPhone: '9493232116' },
  { rollNumber: '23WJ1A0496', name: 'K AISHWARYA BAI', parentPhone: '9949306627', parentName: '', studentPhone: '9949104714' },
  { rollNumber: '23WJ1A0497', name: 'K CHANDRAKALA', parentPhone: '9902884269', parentName: '', studentPhone: '9632541596' },
  { rollNumber: '23WJ1A0498', name: 'K JYOTHI', parentPhone: '8096693940', parentName: '', studentPhone: '9390907155' },
  { rollNumber: '23WJ1A0499', name: 'K KARTHIK', parentPhone: '9553639939', parentName: '', studentPhone: '9703580901' },
  { rollNumber: '23WJ1A04A0', name: 'KADESHI VIGNESHWARI', parentPhone: '7995266431', parentName: '', studentPhone: '9676162243' },
  { rollNumber: '23WJ1A04A1', name: 'KALE SHIVA', parentPhone: '9848944743', parentName: '', studentPhone: '9000192414' },
  { rollNumber: '23WJ1A04A2', name: 'KAMARTHI VISWANATH', parentPhone: '9133236335', parentName: '', studentPhone: '9705247070' },
  { rollNumber: '23WJ1A04A3', name: 'KAMATHAM AKSHARA', parentPhone: '9949031319', parentName: '', studentPhone: '8008431737' },
  { rollNumber: '23WJ1A04A4', name: 'KAMBALLA RAJKUMAR', parentPhone: '9490030736', parentName: '', studentPhone: '6304972155' },
  { rollNumber: '23WJ1A04A5', name: 'KANCHA RANJITH', parentPhone: '9177538747', parentName: '', studentPhone: '7981685864' },
  { rollNumber: '23WJ1A04A6', name: 'KANDUKURI VARSHITH', parentPhone: '9490098607', parentName: '', studentPhone: '9000647373' },
  { rollNumber: '23WJ1A04A7', name: 'KAPPE SUVARNA', parentPhone: '9908776505', parentName: '', studentPhone: '9014717494' },
  { rollNumber: '23WJ1A04A8', name: 'KARANTOTHU SANTHOSH', parentPhone: '9133917291', parentName: '', studentPhone: '9390801830' },
  { rollNumber: '23WJ1A04A9', name: 'KARRI PURNACHANDRA RAO', parentPhone: '9963904808', parentName: '', studentPhone: '9030714176' },
  { rollNumber: '23WJ1A04B0', name: 'KATABATHULA ABHIRAM', parentPhone: '7780439599', parentName: '', studentPhone: '8309738668' },
  { rollNumber: '23WJ1A04B1', name: 'KINJARAPU PRAVEEN', parentPhone: '9346437840', parentName: '', studentPhone: '7780508168' },
  { rollNumber: '23WJ1A04B2', name: 'KODI SAI MYTHRI', parentPhone: '9959104375', parentName: '', studentPhone: '8328589243' },
  { rollNumber: '23WJ1A04B3', name: 'KOMMARAJULLA VIKAS', parentPhone: '9951155787', parentName: '', studentPhone: '7095964879' },
  { rollNumber: '23WJ1A04B4', name: 'KOMMISETTI AKHILA', parentPhone: '9346321297', parentName: '', studentPhone: '9346321297' },
  { rollNumber: '24WJ5A0409', name: 'GUGGILA SRIVALLY', parentPhone: '8297249141', parentName: '', studentPhone: '6303216155' },
  { rollNumber: '24WJ5A0410', name: 'GUNDA RACHANA', parentPhone: '9395312621', parentName: '', studentPhone: '9347046417' },
  { rollNumber: '24WJ5A0411', name: 'KONDLE SHAILESH', parentPhone: '9505658521', parentName: '', studentPhone: '9391531779' },
  { rollNumber: '24WJ5A0412', name: 'MALLEP AMRUTH RAJ', parentPhone: '9182256277', parentName: '', studentPhone: '8096558674' },
  { rollNumber: '24WJ5A0413', name: 'MANDA YASHWANTH', parentPhone: '9948429978', parentName: '', studentPhone: '9948429978' },
  { rollNumber: '24WJ5A0414', name: 'MANTHINA AKHINANDAN', parentPhone: '9949710234', parentName: '', studentPhone: '8688616663' },
  { rollNumber: '24WJ5A0415', name: 'MOTTA ADARSH', parentPhone: '7993042865', parentName: '', studentPhone: '7569322300' },
  { rollNumber: '24WJ5A0416', name: 'MUDAVATH PRAVEEN', parentPhone: '8520985823', parentName: '', studentPhone: '7671082280' },
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
    { name: ' VAISHNAVI', rollNumber: ' 23WJ1A0472', email: '23WJ1A0472@gniindia.org', photo: 'https://i.ibb.co/6XNHkhv/image.png' },
    
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
    const message = encodeURIComponent('Hello, this is a message from your faculty.');
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
