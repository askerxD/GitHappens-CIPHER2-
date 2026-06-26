/* ============ DATA ============ */
const RESOURCES = [
{id:'R01',name:'Room A1',type:'room',capacity:4,status:'available',floor:'1F',features:'Whiteboard, TV'},
{id:'R02',name:'Room A2',type:'room',capacity:6,status:'occupied',floor:'1F',features:'Projector, Whiteboard'},
{id:'R03',name:'Room B1',type:'room',capacity:8,status:'available',floor:'2F',features:'Whiteboard, AC'},
{id:'R04',name:'Room B2',type:'room',capacity:2,status:'occupied',floor:'2F',features:'Standing Desk'},
{id:'R05',name:'Room C1',type:'room',capacity:10,status:'available',floor:'3F',features:'Conference Setup'},
{id:'R06',name:'Room C2',type:'room',capacity:4,status:'waitlist',floor:'3F',features:'Whiteboard'},
{id:'L01',name:'Laptop #01',type:'laptop',model:'Dell XPS 15',status:'available',floor:'Desk',features:'i7, 16GB RAM'},
{id:'L02',name:'Laptop #02',type:'laptop',model:'Dell XPS 15',status:'occupied',floor:'Desk',features:'i7, 16GB RAM'},
{id:'L03',name:'Laptop #03',type:'laptop',model:'HP EliteBook',status:'available',floor:'Desk',features:'i5, 8GB RAM'},
{id:'L04',name:'Laptop #04',type:'laptop',model:'Lenovo ThinkPad',status:'available',floor:'Desk',features:'i7, 16GB RAM'},
{id:'L05',name:'Laptop #05',type:'laptop',model:'HP EliteBook',status:'occupied',floor:'Desk',features:'i5, 8GB RAM'},
{id:'C01',name:'Calculator #01',type:'calculator',model:'Casio FX-991',status:'available',floor:'Desk',features:'Scientific'},
{id:'C02',name:'Calculator #02',type:'calculator',model:'Casio FX-991',status:'available',floor:'Desk',features:'Scientific'},
{id:'C03',name:'Calculator #03',type:'calculator',model:'TI-84',status:'occupied',floor:'Desk',features:'Graphing'},
{id:'C04',name:'Calculator #04',type:'calculator',model:'Casio FX-991',status:'available',floor:'Desk',features:'Scientific'},
{id:'C05',name:'Calculator #05',type:'calculator',model:'HP Prime',status:'available',floor:'Desk',features:'CAS, Graphing'},
];
let reservations = [
{id:'RES001',user:'Kavya M.',resource:'Room A1',type:'room',date:'2026-06-25',slot:'10:00 – 12:00',status:'confirmed',notes:'Group study'},
{id:'RES002',user:'Kavya M.',resource:'Laptop #03',type:'laptop',date:'2026-06-20',slot:'14:00 – 16:00',status:'confirmed',notes:''},
{id:'RES003',user:'Kavya M.',resource:'Room B1',type:'room',date:'2026-06-18',slot:'08:00 – 10:00',status:'confirmed',notes:''},
{id:'RES004',user:'Kavya M.',resource:'Calculator #01',type:'calculator',date:'2026-06-15',slot:'12:00 – 14:00',status:'confirmed',notes:''},
{id:'RES005',user:'Kavya M.',resource:'Room C2',type:'room',date:'2026-06-12',slot:'16:00 – 18:00',status:'confirmed',notes:''},
{id:'RES006',user:'Arun K.',resource:'Room B1',type:'room',date:'2026-06-25',slot:'08:00 – 10:00',status:'confirmed',notes:''},
{id:'RES007',user:'Priya S.',resource:'Laptop #01',type:'laptop',date:'2026-06-25',slot:'12:00 – 14:00',status:'confirmed',notes:''},
{id:'RES008',user:'Arun K.',resource:'Room A2',type:'room',date:'2026-06-22',slot:'10:00 – 12:00',status:'confirmed',notes:''},
{id:'RES009',user:'Meera P.',resource:'Laptop #04',type:'laptop',date:'2026-06-19',slot:'14:00 – 16:00',status:'confirmed',notes:''},
{id:'RES010',user:'James K.',resource:'Calculator #03',type:'calculator',date:'2026-06-10',slot:'08:00 – 10:00',status:'confirmed',notes:''},
];
let notifications = [
{id:1,type:'success',title:'Reservation Confirmed',body:'Room A1 booked for 10:00–12:00 today.',time:'8 min ago',unread:true},
{id:2,type:'warn',title:'Waitlist Update',body:'You are #2 in queue for Laptop #03.',time:'25 min ago',unread:true},
{id:3,type:'danger',title:'Return Reminder',body:'Calculator #02 is due back by 14:00 today.',time:'1 hr ago',unread:true},
{id:4,type:'info',title:'Room Released',body:'Room B2 is now available.',time:'2 hr ago',unread:false},
{id:5,type:'success',title:'Check-In Successful',body:'Laptop #04 checked in at 09:14.',time:'3 hr ago',unread:false},
];
let overdueItems = [
{student:'Rahul D.',id:'STU2024003',resource:'Laptop #02',dueDate:'2026-06-23',days:2,status:'stage2'},
{student:'Meera P.',id:'STU2024007',resource:'Calculator #03',dueDate:'2026-06-22',days:3,status:'stage2'},
{student:'Anil B.',id:'STU2024011',resource:'Room C2',dueDate:'2026-06-24',days:1,status:'stage1'},
{student:'Sara L.',id:'STU2024015',resource:'Laptop #05',dueDate:'2026-06-23',days:2,status:'restricted'},
{student:'Tom W.',id:'STU2024022',resource:'Calculator #01',dueDate:'2026-06-21',days:4,status:'restricted'},
];
let overrideRequests = [
{id:'OV001',student:'Kavya M.',resource:'Room C1',reason:'Exam group of 9 students — need extra capacity',requested:'25 Jun, 08:30',status:'pending'},
{id:'OV002',student:'James K.',resource:'Laptop #02',reason:'Medical condition — cannot share device',requested:'25 Jun, 07:15',status:'pending'},
{id:'OV003',student:'Nina R.',resource:'Room A2',reason:'Urgent project deadline — all slots full',requested:'24 Jun, 22:40',status:'pending'},
];
let staffActivity = [
{time:'09:14',student:'STU2024001',resource:'Laptop #04',action:'Check In',method:'QR Scan'},
{time:'09:22',student:'STU2024008',resource:'Room B1',action:'Check In',method:'Manual'},
{time:'10:05',student:'STU2024003',resource:'Laptop #02',action:'Check Out',method:'QR Scan'},
{time:'10:33',student:'STU2024015',resource:'Calculator #05',action:'Check In',method:'Manual'},
];
let currentLoans = [
{student:'STU2024001',resource:'Room A1',due:'12:00',status:'ok'},
{student:'STU2024008',resource:'Room B1',due:'10:00',status:'overdue'},
{student:'STU2024015',resource:'Calculator #05',due:'16:00',status:'ok'},
{student:'STU2024021',resource:'Laptop #01',due:'14:00',status:'ok'},
];
let issues = [];
let qrLog = [];
let currentRole = 'student';
let isDark = false;
let studentCalState = {year:2026,month:5,selected:null};
let staffCalState   = {year:2026,month:5,selected:null};
/* ============ LOGIN ============ */
function selectRole(role, btn) {
currentRole = role;
document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
}
function doLogin() {
const user = document.getElementById('login-user').value.trim();
if (!user) { showToast('Enter your university ID','warn'); return; }

// ✨ ENHANCEMENT: loading state + animated transition
const btn = document.querySelector('.login-submit');
const loginPage = document.getElementById('page-login');
if (btn) { btn.classList.add('btn-loading'); btn.disabled = true; }
if (loginPage) loginPage.classList.add('page-login-leaving');

setTimeout(() => {
    if (loginPage) loginPage.classList.remove('active', 'page-login-leaving');
    const pg = document.getElementById('page-' + currentRole);
    if (pg) {
        pg.classList.add('active', 'page-entering');
        setTimeout(() => pg.classList.remove('page-entering'), 700);
    }
    showToast('Welcome back! Signed in as ' + currentRole.charAt(0).toUpperCase() + currentRole.slice(1), 'success');
    initDashboard();
    setTimeout(animateCountUp, 350);
    if (btn) { btn.classList.remove('btn-loading'); btn.disabled = false; }
}, 600);
}
function logout() {
closeDropdowns();

// ✨ ENHANCEMENT: animated exit
const activePage = document.querySelector('.page.active:not(#page-login)');
const doLogout = () => {
    ['student','staff','admin'].forEach(r => document.getElementById('page-'+r).classList.remove('active'));
    const loginPage = document.getElementById('page-login');
    if (loginPage) {
        loginPage.classList.add('active', 'page-entering');
        setTimeout(() => loginPage.classList.remove('page-entering'), 700);
    }
    if (isDark) { isDark = false; document.documentElement.setAttribute('data-theme','light'); syncDarkToggles(); }
    showToast('Signed out successfully');
};

if (activePage) {
    activePage.classList.add('page-login-leaving');
    setTimeout(() => {
        activePage.classList.remove('page-login-leaving');
        doLogout();
    }, 500);
} else {
    doLogout();
}
}
/* ============ NAVIGATION ============ */
function navToPanel(role, panel, sidebarItemEl) {
document.querySelectorAll('#page-'+role+' .panel').forEach(p => p.classList.remove('active'));
const t = document.getElementById(role+'-panel-'+panel);
if (t) t.classList.add('active');
document.querySelectorAll('#page-'+role+' .sidebar-item').forEach(i => i.classList.remove('active'));
if (sidebarItemEl) {
    sidebarItemEl.classList.add('active');
} else {
    const match = document.querySelector('#page-'+role+' .sidebar-item[data-panel="'+panel+'"]');
    if (match) match.classList.add('active');
}
closeSidebar();
closeDropdowns();
}
/* ============ SIDEBAR ============ */
function toggleSidebar(role) {
const sb = document.getElementById(role+'-sidebar');
const ov = document.getElementById(role+'-sidebar-overlay');
if (sb) sb.classList.toggle('open');
if (ov) ov.classList.toggle('open');
}
function closeSidebar() {
['student','staff','admin'].forEach(r => {
const sb = document.getElementById(r+'-sidebar');
const ov = document.getElementById(r+'-sidebar-overlay');
if (sb) sb.classList.remove('open');
if (ov) ov.classList.remove('open');
});
}
/* ============ PROFILE DROPDOWN ============ */
function toggleProfileDropdown(id) {
const dd = document.getElementById(id);
const isOpen = dd.classList.contains('open');
closeDropdowns();
if (!isOpen) dd.classList.add('open');
}
function closeDropdowns() {
document.querySelectorAll('.profile-dropdown').forEach(d => d.classList.remove('open'));
}
document.addEventListener('click', e => {
if (!e.target.closest('.nav-profile') && !e.target.closest('.notif-btn')) closeDropdowns();
});
/* ============ DARK MODE ============ */
function toggleDarkMode(checkbox) {
isDark = checkbox.checked;
document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
syncDarkToggles();
showToast(isDark ? 'Dark mode enabled' : 'Light mode enabled');
}
function syncDarkToggles() {
['dark-mode-toggle','staff-dark-toggle','admin-dark-toggle'].forEach(id => {
const el = document.getElementById(id);
if (el) el.checked = isDark;
});
}
/* ============ INIT ============ */
function initDashboard() {
if (currentRole === 'student') initStudentDashboard();
else if (currentRole === 'staff') initStaffDashboard();
else initAdminDashboard();
syncDarkToggles();
}
/* ============ STUDENT ============ */
function initStudentDashboard() {
const d = document.getElementById('res-date');
if (d) d.valueAsDate = new Date();
updateResOptions();
renderMyReservations();
renderResourceGrid();
renderNotifications();
renderIssueResourceSelect();
populateQRSelect();
renderIssues();
document.getElementById('s-avail-rooms').textContent = RESOURCES.filter(r=>r.type==='room'&&r.status==='available').length;
document.getElementById('s-avail-laptops').textContent = RESOURCES.filter(r=>r.type==='laptop'&&r.status==='available').length;
document.getElementById('s-avail-calc').textContent = RESOURCES.filter(r=>r.type==='calculator'&&r.status==='available').length;

renderStudentCalendar();
// ✨ ENHANCEMENT: live clock + welcome banner
injectWelcomeBanner();
startLiveClock();
}
function renderMyReservations() {
const myRes = reservations.filter(r => r.user === 'Kavya M.' && new Date(r.date) >= new Date('2026-06-25'));
const tbody = document.getElementById('my-reservations-body');
if (!tbody) return;
tbody.innerHTML = myRes.map(r => `
     <tr>
         <td><strong>${r.resource}</strong></td>
         <td style="text-transform:capitalize">${r.type}</td>
         <td>${r.date} · ${r.slot}</td>
         <td><span class="badge badge-${r.status==='confirmed'?'available':r.status==='waitlist'?'waitlist':'occupied'}">${r.status}</span></td>
         <td><button class="btn btn-danger btn-xs" onclick="cancelReservation('${r.id}')">Cancel</button></td>
     </tr>
`).join('') || '<tr><td colspan="5"><div style="text-align:center;padding:40px;color:var(--text-muted);">No upcoming reservations</div></td></tr>';
}
function filterResources() { renderResourceGrid(); }
function renderResourceGrid() {
const type = document.getElementById('filter-type')?.value || 'all';
const status = document.getElementById('filter-status')?.value || 'all';
const grid = document.getElementById('resource-grid');
if (!grid) return;
const icons = {
    room:'<i class="fa-solid fa-door-open" style="color:var(--primary)"></i>',
    laptop:'<i class="fa-solid fa-laptop" style="color:var(--primary)"></i>',
    calculator:'<i class="fa-solid fa-calculator" style="color:var(--primary)"></i>'
};

let filtered = RESOURCES;
if (type !== 'all') filtered = filtered.filter(r => r.type === type);
if (status !== 'all') filtered = filtered.filter(r => r.status === status);

grid.innerHTML = filtered.map(r => `
     <div class="resource-card">
         <div class="resource-card-header">
             <div>
                 <div class="resource-card-title">${icons[r.type]} ${r.name}</div>
                 <div class="resource-card-type">${r.model||r.type} · ${r.floor}</div>
             </div>
             <span class="badge badge-${r.status==='available'?'available':r.status==='occupied'?'occupied':'waitlist'}">${r.status}</span>
         </div>
         <div class="resource-card-meta">
            ${r.type==='room'? `<span>👥 ${r.capacity} people</span>` : ''}
             <span>✨ ${r.features}</span>
         </div>
         <div class="resource-card-actions">
            ${r.status==='available'? 
                `<button class="btn btn-primary btn-sm" onclick="quickBook('${r.id}')">Reserve</button>` : 
                `<button class="btn btn-secondary btn-sm" onclick="quickWaitlist('${r.id}')">Join Waitlist</button>`}
             <button class="btn btn-ghost btn-sm btn-xs">Details</button>
         </div>
     </div>
`).join('') || '<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text-muted);">No resources match your filters</div>';
}
function updateResOptions() {
const type = document.getElementById('res-type')?.value;
const sel = document.getElementById('res-resource');
if (!sel) return;
sel.innerHTML = RESOURCES.filter(r => r.type === type).map(r => `<option value="${r.id}">${r.name} (${r.status})</option>`).join('');
const rsg = document.getElementById('room-size-group');
if (rsg) rsg.style.display = type === 'room' ? '' : 'none';
}
function submitReservation(waitlist) {
const type = document.getElementById('res-type').value;
const resId = document.getElementById('res-resource').value;
const date = document.getElementById('res-date').value;
const slot = document.getElementById('res-slot').value;
if (!date) { showToast('Please select a date','warn'); return; }

const resource = RESOURCES.find(r => r.id === resId);
const status = waitlist ? 'waitlist' : 'confirmed';

reservations.push({
    id:'RES'+(reservations.length+1).toString().padStart(3,'0'),
    user:'Kavya M.',resource:resource.name,type,date,slot,status,
    notes:document.getElementById('res-notes').value
});

notifications.unshift({
    id:Date.now(),
    type:status==='confirmed'?'success':'warn',
    title:status==='confirmed'?'Reservation Confirmed':'Added to Waitlist',
    body:`${resource.name} — ${slot} on ${date}`,
    time:'Just now',unread:true
});

const cnt = document.getElementById('student-notif-count');
if (cnt) cnt.textContent = notifications.filter(n=>n.unread).length;

renderMyReservations();
renderStudentCalendar();
document.getElementById('res-notes').value = '';
showToast(status==='confirmed'?`Reserved ${resource.name}!`:`Joined waitlist for ${resource.name}`, status==='confirmed'?'success':'warn');
}
function cancelReservation(id) {
openModal('Cancel Reservation', '<p>Are you sure you want to cancel this reservation?</p>',
 `<button class="btn btn-secondary" onclick="closeModal()">Keep it</button> <button class="btn btn-danger" onclick="confirmCancel('${id}')">Yes, cancel</button>`
);
}
function confirmCancel(id) {
reservations = reservations.filter(r => r.id !== id);
renderMyReservations();
renderStudentCalendar();
closeModal();
showToast('Reservation cancelled','warn');
}
function quickBook(resId) {
const r = RESOURCES.find(x=>x.id===resId);
navToPanel('student','reservations');
document.getElementById('res-type').value=r.type;
updateResOptions();
document.getElementById('res-resource').value=resId;
showToast('Resource pre-selected — complete your booking','info');
}
function quickWaitlist(resId) {
const r = RESOURCES.find(x=>x.id===resId);
navToPanel('student','reservations');
document.getElementById('res-type').value=r.type;
updateResOptions();
document.getElementById('res-resource').value=resId;
showToast('Select your slot and join the waitlist','info');
}
function renderNotifications() {
const list = document.getElementById('student-notif-list');
const fullList = document.getElementById('student-notif-list-full');
if (!list && !fullList) return;
const icons = {
    success:'<i class="fa-solid fa-circle-check" style="color:var(--success)"></i>',
    warn:'<i class="fa-solid fa-triangle-exclamation" style="color:var(--warning)"></i>',
    danger:'<i class="fa-solid fa-circle-xmark" style="color:var(--danger)"></i>',
    info:'<i class="fa-solid fa-circle-info" style="color:var(--info)"></i>'
};

const html = notifications.map(n => `
     <div class="notif-item type-${n.type} ${n.unread?'unread':''}">
         <div class="notif-icon">${icons[n.type]||'<i class="fa-solid fa-bullhorn"></i>'}</div>
         <div class="notif-content">
             <div class="notif-title">${n.title}</div>
             <div class="notif-body">${n.body}</div>
             <div class="notif-time">${n.time}</div>
         </div>
     </div>
`).join('');

if(list) list.innerHTML = html;
if(fullList) fullList.innerHTML = html;
}
function markAllRead() {
notifications.forEach(n => n.unread=false);
document.getElementById('student-notif-count').textContent='0';
renderNotifications();
showToast('All notifications marked as read');
}
function populateQRSelect() {
const sel = document.getElementById('qr-resource-select');
if (!sel) return;
const active = reservations.filter(r => r.user==='Kavya M.' && r.status==='confirmed');
sel.innerHTML = active.map(r=> `<option value="${r.id}">${r.resource}</option>`).join('') || '<option>No active reservations</option>';
}
function doQRAction(action) {
const sel = document.getElementById('qr-resource-select');
const resource = sel?.options[sel.selectedIndex]?.text || 'Resource';
const time = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
qrLog.unshift({time,resource,action:action==='checkin'?'Check In':'Check Out'});
const log = document.getElementById('qr-log');
if (log) log.innerHTML = qrLog.slice(0,10).map(e=> `
     <tr>
         <td>${e.time}</td>
         <td>${e.resource}</td>
         <td><span class="badge badge-${e.action==='Check In'?'available':'occupied'}">${e.action}</span></td>
     </tr>
`).join('');

const frame = document.querySelector('.qr-frame');
if (frame) { 
    frame.style.borderColor='#10B981'; 
    setTimeout(()=>frame.style.borderColor='var(--primary)',800); 
}
showToast(`${action==='checkin'?'Checked in to':'Checked out from'} ${resource}`, action==='checkin'?'success':'warn');
}
function renderIssueResourceSelect() {
const sel = document.getElementById('issue-resource');
if (sel) sel.innerHTML = RESOURCES.map(r=>`<option value="${r.id}">${r.name}</option>`).join('');
}
function submitIssue() {
const resource = document.getElementById('issue-resource');
const type = document.getElementById('issue-type').value;
const desc = document.getElementById('issue-desc').value.trim();
if (!desc) { showToast('Describe the issue','warn'); return; }
issues.push({resource:resource.options[resource.selectedIndex].text,type,desc,time:new Date().toLocaleString()});
renderIssues();
document.getElementById('issue-desc').value = '';
showToast('Issue reported — thank you!','success');
}
function renderIssues() {
const el = document.getElementById('issues-list');
if (!el) return;
el.innerHTML = issues.length ? issues.map(i=> `<div class="issue-item"> <strong>${i.resource} — ${i.type}</strong> <p>${i.desc}</p> <span>${i.time}</span> </div>`).join('') : '<div style="text-align:center;padding:40px;color:var(--text-muted);">No issues reported</div>';
}
function saveAccount() { showToast('Profile updated successfully','success'); }
/* ============ CALENDAR ============ */
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
function buildCalendar(containerId, state, getEventsForDate, onDateClick) {
const el = document.getElementById(containerId);
if (!el) return;
const {year,month,selected} = state;
const today = new Date();
const firstDay = new Date(year, month, 1).getDay();
const daysInMonth = new Date(year, month+1, 0).getDate();
const prevDays = new Date(year, month, 0).getDate();
let html = `
     <div class="cal-header">
         <button class="cal-nav" onclick="calNav('${containerId}',${state===studentCalState?'\'student\'':'\'staff\''}, -1)"><i class="fa-solid fa-chevron-left"></i></button>
         <h4>${MONTHS[month]} ${year}</h4>
         <button class="cal-nav" onclick="calNav('${containerId}',${state===studentCalState?'\'student\'':'\'staff\''}, 1)"><i class="fa-solid fa-chevron-right"></i></button>
     </div>
     <div class="cal-grid">
`;

DAYS.forEach(d => html += `<div class="cal-dow">${d}</div>`);
for (let i = firstDay-1; i >= 0; i--) html += `<div class="cal-day other-month">${prevDays-i}</div>`;

for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const hasEvt = getEventsForDate(dateStr).length > 0;
    const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===d;
    const isSel = selected === dateStr;
    
    let cls = 'cal-day';
    if (isToday && !isSel) cls += ' today';
    if (hasEvt && !isSel) cls += ' has-event';
    if (isSel) cls += ' selected';
    
    html += `<div class="${cls}" onclick="${onDateClick}('${dateStr}')">${d}</div>`;
}

const total = firstDay + daysInMonth;
const remaining = total % 7 === 0 ? 0 : 7 - (total % 7);
for (let i = 1; i <= remaining; i++) html += `<div class="cal-day other-month">${i}</div>`;
html += '</div>';
el.innerHTML = html;
}
function calNav(containerId, role, dir) {
const state = role === 'student' ? studentCalState : staffCalState;
state.month += dir;
if (state.month > 11) { state.month = 0; state.year++; }
if (state.month < 0)  { state.month = 11; state.year--; }
if (role === 'student') renderStudentCalendar();
else renderStaffCalendar();
}
function studentEventsForDate(dateStr) {
return reservations.filter(r => r.user === 'Kavya M.' && r.date === dateStr);
}
function renderStudentCalendar() {
buildCalendar('student-cal', studentCalState, studentEventsForDate, 'studentCalClick');
const sel = studentCalState.selected;
const panel = document.getElementById('student-cal-events');
if (!panel) return;
if (!sel) { panel.innerHTML = ''; return; }
const evts = studentEventsForDate(sel);

if (!evts.length) { 
    panel.innerHTML = `<h4>📅 ${sel}</h4><div style="text-align:center;padding:20px;color:var(--text-muted);">No reservations on this date</div>`; 
    return; 
}

panel.innerHTML = `<h4>📅 ${sel}</h4>` + evts.map(e=>`
     <div class="cal-event-item">
         <div style="font-size:12px;font-weight:600;color:var(--primary);white-space:nowrap;">${e.slot.split('–')[0].trim()}</div>
         <div style="font-size:13px;color:var(--text-primary);">
             <strong>${e.resource}</strong><br>
             <span style="text-transform:capitalize;font-size:11px;color:var(--text-muted);">${e.type} · <span class="badge badge-${e.status==='confirmed'?'available':'waitlist'}" style="font-size:9px;">${e.status}</span></span>
         </div>
     </div>
`).join('');
}
function studentCalClick(dateStr) {
studentCalState.selected = studentCalState.selected === dateStr ? null : dateStr;
renderStudentCalendar();
}
function allEventsForDate(dateStr) {
const filter = document.getElementById('staff-cal-filter')?.value || 'all';
return reservations.filter(r => r.date === dateStr && (filter==='all' || r.type===filter));
}
function renderStaffCalendar() {
buildCalendar('staff-cal', staffCalState, allEventsForDate, 'staffCalClick');
renderStaffCalEvents();
renderStaffUtilizationChart();
renderAllTransactions();
}
function renderStaffCalEvents() {
const sel = staffCalState.selected;
const panel = document.getElementById('staff-cal-events');
if (!panel) return;
if (!sel) { panel.innerHTML = ''; return; }
const evts = allEventsForDate(sel);
if (!evts.length) { 
    panel.innerHTML = `<h4>📅 ${sel}</h4><div style="text-align:center;padding:20px;color:var(--text-muted);">No activity on this date</div>`; 
    return; 
}

panel.innerHTML = `<h4>📅 ${sel} — ${evts.length} booking(s)</h4>` + evts.map(e=>`
     <div class="cal-event-item">
         <div style="font-size:12px;font-weight:600;color:var(--primary);white-space:nowrap;">${e.slot.split('–')[0].trim()}</div>
         <div style="font-size:13px;color:var(--text-primary);">
             <strong>${e.resource}</strong><br>
             <span style="font-size:11px;color:var(--text-muted);">${e.user} · ${e.type}</span>
         </div>
     </div>
`).join('');
}
function staffCalClick(dateStr) {
staffCalState.selected = staffCalState.selected === dateStr ? null : dateStr;
renderStaffCalendar();
}
function renderStaffUtilizationChart() {
const filter = document.getElementById('staff-cal-filter')?.value || 'all';
const filtered = reservations.filter(r => filter==='all' || r.type===filter);
const byDate = {};
filtered.forEach(r => byDate[r.date] = (byDate[r.date]||0)+1);
const sorted = Object.entries(byDate).sort((a,b)=>a[0].localeCompare(b[0])).slice(-7);
const max = Math.max(...sorted.map(x=>x[1]),1);
const el = document.getElementById('staff-utilization-chart');
if (!el) return;

el.innerHTML = sorted.map(([date,count])=>`
     <div class="chart-bar-row">
         <div class="chart-bar-label">${date.slice(5)}</div>
         <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${Math.round(count/max*100)}%;background:var(--primary);">${count>0?count:''}</div></div>
         <div class="chart-bar-val">${count}</div>
     </div>
`).join('');
}
function renderAllTransactions() {
const filter = document.getElementById('staff-cal-filter')?.value || 'all';
const filtered = reservations.filter(r => filter==='all' || r.type===filter).slice().reverse();
const tb = document.getElementById('all-transactions-body');
if (!tb) return;
tb.innerHTML = filtered.map(r=>`
     <tr>
         <td>${r.date}</td>
         <td>${r.user}</td>
         <td>${r.resource}</td>
         <td><span class="badge badge-available">Confirmed</span></td>
     </tr>
`).join('');
}
/* ============ STAFF ============ */
function initStaffDashboard() {
renderStaffActivity();
renderOverdue();
renderOverrides();
renderCurrentLoans();
populateStaffResourceSelect();
renderStaffCalendar();
// ✨ ENHANCEMENT: count-up stats on staff dashboard too
setTimeout(animateCountUp, 350);
}
function renderStaffActivity() {
const tb = document.getElementById('staff-activity-body');
if (!tb) return;
tb.innerHTML = staffActivity.map(a=> `<tr> <td>${a.time}</td> <td>${a.student}</td> <td>${a.resource}</td> <td><span class="badge badge-${a.action==='Check In'?'available':'occupied'}">${a.action}</span></td> <td style="font-size:12px;color:var(--text-muted);">${a.method}</td> </tr>`).join('');
}
function renderOverdue() {
const tb = document.getElementById('overdue-body');
if (!tb) return;
const cs = document.getElementById('overdue-count-stat');
if (cs) cs.textContent = overdueItems.length;
tb.innerHTML = overdueItems.map(o=> `
     <tr>
         <td><strong>${o.student}</strong><br><span style="font-size:11px;color:var(--text-muted);">${o.id}</span></td>
         <td>${o.resource}</td>
         <td>${o.dueDate}</td>
         <td><span style="color:var(--danger);font-weight:700;">${o.days}d</span></td>
         <td>
             <div class="action-group">
                 <button class="btn btn-warn btn-xs" onclick="sendReminder('${o.student}')">Remind</button>
                 <button class="btn btn-danger btn-xs" onclick="restrictUser('${o.student}')">Restrict</button>
                 <button class="btn btn-success btn-xs" onclick="markReturned('${o.student}')">Returned</button>
             </div>
         </td>
     </tr>
`).join('');
}
function sendReminder(s) { showToast(`Reminder sent to ${s}`,'warn'); }
function restrictUser(s) {
openModal('Restrict User', `<p>Block new bookings for <strong>${s}</strong>?</p>`,
 `<button class="btn btn-secondary" onclick="closeModal()">Cancel</button> <button class="btn btn-danger" onclick="closeModal();showToast('${s} restricted','danger')">Restrict</button>`
);
}
function markReturned(s) {
overdueItems=overdueItems.filter(o=>o.student!==s);
renderOverdue();
showToast(`${s}'s item marked returned`,'success');
}
function renderOverrides() {
const tb = document.getElementById('override-body');
if (!tb) return;
const cs = document.getElementById('override-count-stat');
if (cs) cs.textContent = overrideRequests.filter(r=>r.status==='pending').length;
tb.innerHTML = overrideRequests.map(o=> `
     <tr>
         <td><strong>${o.student}</strong></td>
         <td>${o.resource}</td>
         <td style="font-size:12px;max-width:200px;">${o.reason}</td>
         <td style="font-size:12px;color:var(--text-muted);">${o.requested}</td>
         <td>
            ${o.status==='pending' ? `
                 <div class="action-group">
                     <button class="btn btn-success btn-xs" onclick="resolveOverride('${o.id}','approved')">Approve</button>
                     <button class="btn btn-danger btn-xs" onclick="resolveOverride('${o.id}','denied')">Deny</button>
                 </div>
            ` : `<span class="badge badge-${o.status}">${o.status}</span>`}
         </td>
     </tr>
`).join('');
}
function resolveOverride(id,action) {
const r=overrideRequests.find(x=>x.id===id);
if(r) r.status=action;
renderOverrides();
showToast(`Request ${action}`,action==='approved'?'success':'danger');
}
function renderCurrentLoans() {
const tb = document.getElementById('current-loans-body');
if (!tb) return;
tb.innerHTML = currentLoans.map(l=> `<tr> <td>${l.student}</td> <td>${l.resource}</td> <td>${l.due}</td> <td><span class="badge badge-${l.status==='ok'?'available':'overdue'}">${l.status==='ok'?'On Time':'Overdue'}</span></td> </tr>`).join('');
}
function populateStaffResourceSelect() {
const sel = document.getElementById('staff-resource-select');
if (sel) sel.innerHTML = RESOURCES.map(r=>`<option value="${r.id}">${r.name} (${r.status})</option>`).join('');
}
function staffCheckAction(direction) {
const sid = document.getElementById('staff-student-id').value.trim();
if (!sid) { showToast('Enter a student ID','warn'); return; }
const sel = document.getElementById('staff-resource-select');
const resource = RESOURCES.find(r=>r.id===sel.value);
const time = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});

staffActivity.unshift({time,student:sid,resource:resource.name,action:direction==='in'?'Check In':'Check Out',method:'Manual'});
if (direction==='in') resource.status='occupied'; else resource.status='available';

renderStaffActivity();
showToast(`${direction==='in'?'Checked in':'Checked out'}: ${resource.name} for ${sid}`,direction==='in'?'success':'warn');
}
/* ============ ADMIN ============ */
function initAdminDashboard() {
renderCharts();
renderWaitlistPreview();
setTimeout(animateCountUp, 350);
}
function renderCharts() {
renderBarChart('chart-resource-type',[
{label:'Study Rooms',val:138,pct:56,color:'#E85547'},
{label:'Laptops',val:74,pct:30,color:'#3F3D3D'},
{label:'Calculators',val:35,pct:14,color:'#c97b22'}
]);
renderBarChart('chart-daily',[
{label:'Mon',val:32,pct:64,color:'#E85547'},
{label:'Tue',val:45,pct:90,color:'#E85547'},
{label:'Wed',val:41,pct:82,color:'#E85547'},
{label:'Thu',val:50,pct:100,color:'#c4392c'},
{label:'Fri',val:48,pct:96,color:'#E85547'},
{label:'Sat',val:21,pct:42,color:'#c97b22'},
{label:'Sun',val:10,pct:20,color:'#c97b22'}
]);
renderBarChart('chart-hours',[
{label:'08–10',val:18,pct:36,color:'#3F3D3D'},
{label:'10–12',val:48,pct:96,color:'#E85547'},
{label:'12–14',val:35,pct:70,color:'#c97b22'},
{label:'14–16',val:50,pct:100,color:'#c4392c'},
{label:'16–18',val:44,pct:88,color:'#E85547'},
{label:'18–20',val:20,pct:40,color:'#3F3D3D'}
]);
}
function renderBarChart(id, data) {
const el = document.getElementById(id);
if (!el) return;
el.innerHTML = data.map(d=> `<div class="chart-bar-row"> <div class="chart-bar-label">${d.label}</div> <div class="chart-bar-track"><div class="chart-bar-fill" style="width:${d.pct}%;background:${d.color};">${d.pct>15?d.val:''}</div></div> <div class="chart-bar-val">${d.val}</div> </div>`).join('');
}
function refreshCharts() { showToast('Charts refreshed','success'); }
function renderWaitlistPreview() {
const ex = parseInt(document.getElementById('lbl-exam')?.textContent||70);
const wt = parseInt(document.getElementById('lbl-wait')?.textContent||50);
const pen = parseInt(document.getElementById('lbl-penalty')?.textContent||30);
const students=[
    {name:'Kavya M.',exam:.9,wait:.7,usage:.2},
    {name:'Arun K.',exam:.6,wait:.9,usage:.1},
    {name:'Priya S.',exam:.8,wait:.5,usage:.4},
    {name:'James K.' ,exam:.3,wait:.8,usage:0},
    {name:'Nina R.',exam:.7,wait:.6,usage:.3}
];

const scored = students.map(s=>({...s,score:(ex*s.exam+wt*s.wait-pen*s.usage).toFixed(1)})).sort((a,b)=>b.score-a.score);
const tb = document.getElementById('waitlist-preview-body');

if (tb) tb.innerHTML = scored.map((s,i)=>`
     <tr>
         <td><strong>#${i+1}</strong></td>
         <td>${s.name}</td>
         <td><strong style="color:var(--primary);">${s.score}</strong></td>
         <td style="font-size:12px;color:var(--text-muted);">${i===0?'Exam in 2d':'Waiting '+Math.floor(s.wait*60)+'m'}</td>
     </tr>
`).join('');
}
function updateScoreDemo() {
const ex = parseInt(document.getElementById('lbl-exam')?.textContent||70);
const wt = parseInt(document.getElementById('lbl-wait')?.textContent||50);
const pen = parseInt(document.getElementById('lbl-penalty')?.textContent||30);
const eV=(ex*.9).toFixed(1), wV=(wt*.7).toFixed(1), pV=(pen*.2).toFixed(1);

const sdExam = document.getElementById('sd-exam'); if(sdExam) sdExam.textContent=ex;
const sdExamVal = document.getElementById('sd-exam-val'); if(sdExamVal) sdExamVal.textContent=eV;
const sdWait = document.getElementById('sd-wait'); if(sdWait) sdWait.textContent=wt;
const sdWaitVal = document.getElementById('sd-wait-val'); if(sdWaitVal) sdWaitVal.textContent=wV;
const sdPen = document.getElementById('sd-pen'); if(sdPen) sdPen.textContent=pen;
const sdPenVal = document.getElementById('sd-pen-val'); if(sdPenVal) sdPenVal.textContent=pV;
const sdTotal = document.getElementById('sd-total'); if(sdTotal) sdTotal.textContent=(parseFloat(eV)+parseFloat(wV)-parseFloat(pV)).toFixed(1);

renderWaitlistPreview();
}
function savePrioritySettings() { showToast('Priority weights applied!','success'); }
function saveFairUsage() { showToast('Fair usage policy updated!','success'); }
/* ============ MODAL ============ */
function openModal(title, bodyHTML, footerHTML) {
document.getElementById('modal-title').textContent = title;
document.getElementById('modal-body').innerHTML = bodyHTML;
document.getElementById('modal-footer').innerHTML = footerHTML;
document.getElementById('modal-backdrop').classList.add('open');
}
function closeModal() {
document.getElementById('modal-backdrop').classList.remove('open');
}
document.getElementById('modal-backdrop').addEventListener('click', function(e) {
if (e.target===this) closeModal();
});
/* ============ TOAST ============ */
function showToast(msg, type='') {
const c = document.getElementById('toast-container');
const t = document.createElement('div');
t.className = 'toast'+(type?' t-'+type:'');
const icons={
    success:'<i class="fa-solid fa-circle-check"></i>',
    warn:'<i class="fa-solid fa-triangle-exclamation"></i>',
    danger:'<i class="fa-solid fa-circle-xmark"></i>',
    info:'<i class="fa-solid fa-circle-info"></i>'
};

t.innerHTML = (icons[type]||'<i class="fa-solid fa-comment"></i>')+' '+msg;
c.appendChild(t);

setTimeout(()=>{ 
    t.style.animation='fadeOut .3s ease forwards'; 
    setTimeout(()=>t.remove(),300); 
},3200);
}

/* ============ ✨ ENHANCEMENT HELPERS ============ */
function animateCountUp() {
  document.querySelectorAll('.stat-card-val').forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/^([\d.]+)(.*)$/);
    if (!match) return;
    const target = parseFloat(match[1]);
    if (isNaN(target)) return;
    const suffix = match[2];
    const isDecimal = text.includes('.');
    const duration = 1100;
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

function injectWelcomeBanner() {
  const panel = document.getElementById('student-panel-overview');
  if (!panel || panel.querySelector('.welcome-banner')) return;
  const header = panel.querySelector('.page-header');
  if (!header) return;
  const banner = document.createElement('div');
  banner.className = 'welcome-banner';
  banner.innerHTML = `
    <div style="display:flex;align-items:center;gap:18px;flex-wrap:wrap;">
      <div style="width:58px;height:58px;border-radius:16px;background:rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;font-size:28px;backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2);">👋</div>
      <div style="flex:1;min-width:200px;">
        <div style="font-size:11px;opacity:0.85;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">Welcome back</div>
        <div style="font-size:24px;font-weight:800;margin-top:2px;letter-spacing:-0.5px;">Kavya Menon</div>
        <div style="font-size:13px;opacity:0.9;margin-top:6px;display:flex;align-items:center;gap:8px;">
          <span style="width:6px;height:6px;border-radius:50%;background:#4ade80;box-shadow:0 0 8px #4ade80;display:inline-block;"></span>
          <span id="live-clock">Thursday, 25 June 2026 · University Library</span>
        </div>
      </div>
    </div>
  `;
  header.after(banner);
}

function startLiveClock() {
  const clock = document.getElementById('live-clock');
  if (!clock) return;
  function update() {
    const now = new Date();
    const opts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const dateStr = now.toLocaleDateString('en-GB', opts);
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    clock.textContent = `${dateStr} · ${timeStr} · University Library`;
  }
  update();
  setInterval(update, 30000);
}

/* ============ INIT ============ */
window.addEventListener('DOMContentLoaded',()=>{
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type=date]').forEach(d => d.value=today);
renderIssues();
const now = new Date();
studentCalState.year = now.getFullYear();
studentCalState.month = now.getMonth();
staffCalState.year = now.getFullYear();
staffCalState.month = now.getMonth();

// Initialize score demo
updateScoreDemo();
});